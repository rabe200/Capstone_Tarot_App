import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

export function useOverflow() {
  return useContext(Context);
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

const viewportStyle = {
  position: "relative",
  flexBasis: "100%",
  flexShrink: 1,
  flexGrow: 0,
  overflow: "auto",
};

const contentStyle = {
  display: "inline-block",
  position: "relative",
  minWidth: "100%",
  boxSizing: "border-box",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE": {
      const currentValue = state.canScroll[action.direction];
      if (currentValue === action.canScroll) {
        return state;
      }
      return {
        ...state,
        canScroll: {
          ...state.canScroll,
          [action.direction]: action.canScroll,
        },
      };
    }
  }
  return state;
}

function getInitialState() {
  return {
    canScroll: {
      up: false,
      left: false,
      right: false,
      down: false,
    },
  };
}

export default function Overflow({
  children,
  onStateChange,
  style: styleProp,
  tolerance = 0,
  ...rest
}) {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);
  const hidden = rest.hidden;
  const viewportRef = useRef();

  const style = useMemo(
    () => ({
      ...containerStyle,
      ...styleProp,
      display:
        hidden || (styleProp && styleProp.display === "none")
          ? "none"
          : containerStyle.display,
    }),
    [hidden, styleProp]
  );

  const refs = useMemo(() => ({ viewport: viewportRef }), []);

  const context = useMemo(
    () => ({
      state,
      dispatch,
      tolerance,
      refs,
    }),
    [refs, state, tolerance]
  );

  useEffect(() => {
    if (onStateChange) {
      onStateChange(state, refs);
    }
  }, [onStateChange, refs, state]);

  return (
    <div data-overflow-wrapper="" style={style} {...rest}>
      <Context.Provider value={context}>{children}</Context.Provider>
    </div>
  );
}

Overflow.propTypes = {
  children: PropTypes.node,
  onStateChange: PropTypes.func,
  tolerance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const threshold = [0, 1e-12];

function OverflowContent({ children, style: styleProp, ...rest }) {
  const { dispatch, tolerance, refs } = useOverflow();
  const { viewport: viewportRef } = refs;
  const contentRef = useRef();
  const toleranceRef = useRef();
  const watchRef = tolerance ? toleranceRef : contentRef;
  const observersRef = useRef();

  useEffect(() => {
    let ignore = false;

    const root = viewportRef.current;

    const createObserver = (direction, rootMargin) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (ignore) {
            return;
          }

          const hasSize = Boolean(
            entry.boundingClientRect.width || entry.boundingClientRect.height
          );
          const canScroll =
            hasSize && entry.intersectionRatio !== 0 && entry.isIntersecting;
          dispatch({ type: "CHANGE", direction, canScroll });
        },
        {
          root,
          rootMargin,
          threshold,
        }
      );
    };

    const observers = {
      up: createObserver("up", "100% 0px -100% 0px"),
      left: createObserver("left", "0px -100% 0px 100%"),
      right: createObserver("right", "0px 100% 0px -100%"),
      down: createObserver("down", "-100% 0px 100% 0px"),
    };

    observersRef.current = observers;

    return () => {
      ignore = true;
      observers.up.disconnect();
      observers.left.disconnect();
      observers.right.disconnect();
      observers.down.disconnect();
    };
  }, [dispatch, viewportRef]);

  useEffect(() => {
    const observers = observersRef.current;
    const watchNode = watchRef.current;

    observers.up.observe(watchNode);
    observers.left.observe(watchNode);
    observers.right.observe(watchNode);
    observers.down.observe(watchNode);

    return () => {
      observers.up.unobserve(watchNode);
      observers.left.unobserve(watchNode);
      observers.right.unobserve(watchNode);
      observers.down.unobserve(watchNode);
    };
  }, [watchRef]);

  const style = useMemo(() => {
    return {
      ...styleProp,
      ...contentStyle,
    };
  }, [styleProp]);

  const toleranceElement = useMemo(
    () =>
      tolerance ? (
        <div
          data-overflow-tolerance
          ref={toleranceRef}
          style={{
            position: "absolute",
            top: tolerance,
            left: tolerance,
            right: tolerance,
            bottom: tolerance,
            background: "transparent",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      ) : null,
    [tolerance]
  );

  return (
    <div ref={viewportRef} data-overflow-viewport="" style={viewportStyle}>
      <div ref={contentRef} data-overflow-content="" style={style} {...rest}>
        {toleranceElement}
        {children}
      </div>
    </div>
  );
}

OverflowContent.displayName = "Overflow.Content";

OverflowContent.propTypes = {
  children: PropTypes.node,
};

function OverflowIndicator({ children, direction }) {
  const { state, refs } = useOverflow();
  const { canScroll } = state;
  const isActive = direction
    ? canScroll[direction]
    : canScroll.up || canScroll.left || canScroll.right || canScroll.down;

  let shouldRender = isActive;

  if (typeof children === "function") {
    shouldRender = true;
    const stateArg = direction ? isActive : canScroll;
    children = children(stateArg, refs);
  }

  return shouldRender ? <>{children}</> : null;
}

OverflowIndicator.displayName = "Overflow.Indicator";

OverflowIndicator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
};

Overflow.Indicator = OverflowIndicator;
Overflow.Content = OverflowContent;
