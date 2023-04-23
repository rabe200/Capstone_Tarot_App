import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: aqua;
  &:hover {
    fill: yellow;
  }
`;

export default function DailyCardIcon(props) {
  return (
    <StyledSvg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M235.047 281.12c-.102-.014-.133-.154-.116-.377a126.08 126.08 0 00-1.434-4.395 99.23 99.23 0 00-2.148-5.669c-.295-.705-.79-1.603-1.36-2.121-.223-.202-.69-.866-1.039-.81-.922.147-1.831.224-2.754.424l-4.285.928c-2.224.482-4.265 1.213-6.402 1.904-1.094 2.066 1.545 31.434 2.294 33.251.453 1.099 1.039 3.193 2.578 3.142 2.615-.088 4.859-.604 7.41-1.279 3.415-.904 6.909-1.1 10.221-2.377 1.561-.602 2.709-1.396 2.841-3.165.117-1.555-.589-3.095-.955-4.586-.561-2.292-1.776-4.422-2.447-6.697-.797-2.705-1.572-5.454-2.404-8.173z"
        fill="#FF0EF5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.92 36.25s-4.912 11.8-6.554 21.434c-.33 1.935-.528 3.783-.528 5.43 0 14.475 7.856 23.413 15.198 32.935a58.386 58.386 0 002.034 2.495c.166.103.34.307.519.592 4.256 4.794 8.708 8.173 13.807 12.035 2.138 1.619 7.658 4.882 9.717 2.589 2.898-3.228 6.008 0 10.547-8.234 1.073-1.946 3.34-6.982 3.34-6.982 9.594-15.171 3.5-41.438 3.5-41.438C174 41 154.913 15.306 151.386 15.16c-3.382-.14-6.79 0-10.173 0-3.873 0-8.081 2.17-10.506 6.059-1.513 2.426-3.455 5.812-4.932 9.321-.805 1.912-1.471 3.86-1.855 5.71zm5.624 21.788c-4.195.654-4.431 12.88 1.869 11.134 4.49-1.244 4.097-14.854-1.869-11.133zm17.939 4.661c0-2.544 2.377-3.898 3.737-5.593 4.475 0 3.968 10.254 0 10.254-2.617 0-3.737-1.601-3.737-4.66z"
        fill="#fff"
      />
      <path
        d="M5.207 395.968c-2.902 0 .306-12.138.581-13.464 5.979-28.757 16.516-56.137 28.818-81.407 9.74-20.004 24.832-29.778 24.832-54.271 7.44-4.64 17.006-3.729 25.413-3.729l22.155-2.423M5.206 395.968c4.888 0 9.925-1.386 14.7-2.537 20.512-4.942 41.127-9.197 61.623-14.241 16.12-3.967 32.237-8.91 48.542-11.548 25.46-4.121 51.204-6.099 76.778-8.752 29.822-3.094 59.751-4.904 89.527-8.596 27.439-3.404 54.233-12.726 81.429-18.177 9.044-1.813 18.493-2.331 27.656-2.331 2.961 0 7.175.987 10.09-.051M5.207 395.968c0 5.861 4.51 19.667 9.231 20.013 4.071.299 7.84-2.988 11.544-4.557 6.722-2.847 13.348-5.238 20.347-6.629 16.755-3.328 337.708-50.926 354.689-51.216 9.45-.873 5.051-23.844 14.533-23.844m0 0c.116-.042-12.876-62.019-14.533-66.597-3.09-8.532-6.471-17.436-8.554-26.41-1.56-6.72-2.186-13.817-3.405-20.663-1.422-7.979-5.208-14.209-9.136-20.507-1.432-2.296-3.714-6.796-5.813-8.182-3.397-2.243-11.892-.263-15.281 0-25.448 1.97-52.44 8.662-77.488 14.304m-163.008-22.463c0 18.658-6.13 36.171-9.717 54.064-1.34 6.681-2.994 13.066-4.485 19.575-1.087 4.747-.747 7.203-.747 11.704 0 2.262-.201 4.686 0 6.939.293 3.287 9.502 4.11 11.71 4.661 8.984 2.24 19.644 1.932 27.904-3.522 1.549-1.023.747-6.085.747-7.819 0-11.265 1.495-22.451 1.495-33.713 0-13.571.748-54.275.748-40.703m-28.403-12.118c0-7.244-.077-14.384 1.495-21.439.504-2.265 2.123-17.365 4.485-17.711 3.012-.442 7.844-4.342 10.422-6.111 2.06-1.413 4.99-17.417 6.021-19.989-1.281-.2-3.638-11.066-5.419-13.9m98.102 61.439c4.525 1.881 5.432 2.513 7.1 7.923 1.264 4.097.159 9.656.416 13.982.421 7.092.963 14.801 2.325 21.699 2.071 10.492 4.397 23.247 9.011 32.625.919 1.867 2.686 3.756 4.318 4.66 2.577 1.428 6.486-.673 9.136-.725 5.423-.105 13.843-3.728 19.267-3.728-.773-12.538-2.266-24.934-3.031-37.338-.953-15.445-7.732-32.462-13.371-46.089-2.195-5.303-3.367-11.311-5.315-16.779-1.941-5.446-4.925-10.426-6.229-16.208-.619-2.747.772-8.493-2.118-8.493h-46.922c-2.853.79-15.338 6.055-18.105 7.25-3.391 1.463-7.685 3.687-10.672 6.266-2.888 2.493-9.642 6.626-10.09 11.652m-28.403-9.322c10.5 0 19.617 4.557 29.109 9.736 8.356 4.559 8.735 19.265 12.167 28.482 4.663 12.527 3.545 25.721 5.855 38.684.545 3.063 1.037 6.885 2.034 9.787 1.036 3.015-.331 3.912 1.059 6.513m-65.92-185.484a31.22 31.22 0 00-.392.583m0 0s-7.082 17.016-7.082 26.864m7.082-26.864c1.089-5.246 4.45-11.284 6.787-15.031m-6.787 15.03s-4.912 11.801-6.554 21.435m6.554-21.434c.384-1.85 1.05-3.798 1.855-5.71m-8.937 32.573c0 14.476 7.856 23.414 15.198 32.936m-15.198-32.936c0-1.646.198-3.494.528-5.429m14.67 38.365a58.386 58.386 0 002.034 2.495c.166.103.34.307.519.592m-2.553-3.087a57.426 57.426 0 002.553 3.087M172 98.544s-2.267 5.036-3.34 6.982c-4.539 8.234-7.649 5.006-10.547 8.234-2.059 2.293-7.579-.97-9.717-2.589-5.099-3.862-9.551-7.241-13.807-12.035M172 98.544c9.594-15.171 3.5-41.438 3.5-41.438C174 41 154.913 15.306 151.386 15.16c-3.382-.14-6.79 0-10.173 0-3.873 0-8.081 2.17-10.506 6.059M172 98.544c1.314 3.824 12.111 18.754 14 22.289m-55.293-99.614c-1.513 2.426-3.455 5.812-4.932 9.321m22.455 60.123c-.91.142 2.679 7.102 3.696 1.399.084-.47-.872-4.054-1.121-4.143-1.514-.54-2.197 1.11-3.322 1.812m-21.708-59.19c-2.781-2.313-9.379-6.855-12.275-9.04-1.385-1.046-8.621-7.192-8.621-2.405 0 12.884 11.512 26.427 12.487 38.588m29.96-42.585c1.354-.211 7.979-14.675 8.379-10.193.292 3.282.899 12.362 3.295 13.856m-51.994 255.642c0 8.705-2.578 22.143-5.491 30.134-2.729 7.488 6.358-2.18 7.848-2.278 8.893-.584 7.495 8.31 12.333 14.344.161.201.374-6.665.374-7.612 0-3.181 1.556-3.147 3.737-3.004 2.221.146 4.222 2.154 6.353 2.745 1.595.442 1.566-5.386 1.91-6.888.209-.91 12.697 2.906 8.928-2.382-3.774-5.295-10.495-16.194-12.927-22.261m124.12-36.528c-2.237 3.139-3.142 7.835-5.232 11.186-3.167 5.077-6.124 10.473-8.969 15.846-1.66 3.135-2.873 6.443-4.111 9.84-.367 1.006-.894 2.503-.948 3.197m40.936-24.688c0 3.22 1.603 10.978-2.99 11.651-2.918.429-4.314-4.531-8.222-1.398-2.02 1.62-4.175 4.382-6.727 4.195-.927-.068-2.2-4.452-2.657-5.593-2.217-5.529-4.347.081-7.06 2.071-2.614 1.918-4.228 5.828-6.56 8.183-1.77 1.786-4.15 3.207-5.731 5.178-.46.575-.733.796-.873.778m40.82-25.065v-17.638m0 17.638v-17.547M243.232 209.5c-22.7 4.807-76.294 15.048-98.025 24.59m89.84 47.03c-.102-.014-.133-.154-.116-.377m.116.377c.832 2.719 1.607 5.468 2.404 8.173.671 2.275 1.886 4.405 2.447 6.697.366 1.491 1.072 3.031.955 4.586-.132 1.769-1.28 2.563-2.841 3.165-3.312 1.277-6.806 1.473-10.221 2.377-2.551.675-4.795 1.191-7.41 1.279-1.539.051-2.125-2.043-2.578-3.142-.749-1.817-3.388-31.185-2.294-33.251 2.137-.691 4.178-1.422 6.402-1.904l4.285-.928c.923-.2 1.832-.277 2.754-.424.349-.056.816.608 1.039.81.57.518 1.065 1.416 1.36 2.121a99.23 99.23 0 012.148 5.669 126.08 126.08 0 011.434 4.395m.116.377a41.494 41.494 0 00-.116-.377M129.544 58.039c-4.195.653-4.431 12.88 1.869 11.133 4.49-1.244 4.097-14.854-1.869-11.133zm21.676-.933c-1.36 1.695-3.737 3.048-3.737 5.593 0 3.06 1.12 4.66 3.737 4.66 3.968 0 4.475-10.253 0-10.253zM50.548 340.451c2.138-.688 4.18-1.415 6.404-1.896l4.284-.928c.923-.2 1.832-.28 2.755-.427.348-.056.813.596 1.034.794.569.508 1.06 1.39 1.352 2.083a96.063 96.063 0 012.128 5.573c1.459 4.158 2.654 8.499 3.907 12.731.662 2.237 1.87 4.33 2.423 6.584.36 1.466 1.06 2.98.939 4.511-.138 1.742-1.288 2.527-2.85 3.125-3.314 1.269-6.806 1.473-10.221 2.375-2.552.673-4.796 1.189-7.41 1.284-1.537.056-2.116-2.005-2.565-3.084-.742-1.786-3.28-30.688-2.18-32.725zm26.03-6.052c2.201-.449 4.311-.947 6.575-1.178l4.361-.443c.94-.096 1.852-.071 2.785-.114.353-.016.743.696.941.921.51.579.901 1.526 1.115 2.259a99.195 99.195 0 011.502 5.874c.993 4.367 1.704 8.888 2.483 13.306.412 2.336 1.382 4.588 1.684 6.929.197 1.522.727 3.131.437 4.663-.329 1.743-1.558 2.404-3.177 2.828-3.434.899-6.927.704-10.422 1.22-2.61.386-4.898.649-7.506.444-1.536-.121-1.885-2.268-2.212-3.41-.54-1.889.116-31.369 1.434-33.299zm-48.027 7.107c2.236-.224 4.385-.506 6.66-.506h4.385c.944 0 1.849.117 2.782.169.352.019.669.767.843 1.011.448.628.742 1.61.88 2.361.37 1.994.653 3.982.9 5.995.546 4.445.796 9.015 1.124 13.49.174 2.365.91 4.704.974 7.063.042 1.534.406 3.189-.037 4.684-.504 1.701-1.794 2.234-3.447 2.492-3.507.546-6.963-.002-10.492.159-2.636.12-4.939.149-7.513-.319-1.515-.275-1.645-2.447-1.855-3.616-.347-1.934 3.29-31.196 4.796-32.983zm132-20c2.236-.224 4.385-.506 6.661-.506h4.384c.944 0 1.849.117 2.782.169.352.019.669.767.843 1.011.448.628.742 1.61.881 2.361.369 1.994.652 3.982.899 5.995.546 4.445.796 9.015 1.124 13.49.174 2.365.911 4.704.974 7.063.042 1.534.406 3.189-.037 4.684-.504 1.701-1.794 2.234-3.447 2.492-3.507.546-6.963-.002-10.492.159-2.636.12-4.939.149-7.513-.319-1.515-.275-1.645-2.447-1.855-3.616-.347-1.934 3.29-31.196 4.796-32.983zm21.432-.519c2.097-.805 4.096-1.645 6.291-2.245l4.229-1.156c.911-.25 1.814-.376 2.728-.572.344-.074.847.564 1.08.754.597.486 1.14 1.356 1.472 2.044a99.914 99.914 0 012.449 5.546c1.699 4.143 3.146 8.485 4.643 12.715.792 2.236 2.119 4.297 2.803 6.556.445 1.469 1.232 2.969 1.2 4.528-.038 1.773-1.141 2.628-2.668 3.313-3.238 1.452-6.717 1.835-10.078 2.921-2.511.811-4.725 1.447-7.331 1.675-1.534.134-2.232-1.926-2.743-2.999-.845-1.774-5.056-30.959-4.075-33.08zm30.789-5.405c2.153-.64 4.211-1.322 6.446-1.75l4.306-.825c.928-.178 1.838-.233 2.764-.358.35-.047.801.628 1.019.835.558.532 1.031 1.441 1.309 2.153a98.572 98.572 0 012.011 5.719c1.373 4.263 2.478 8.703 3.643 13.036.616 2.291 1.779 4.449 2.286 6.754.33 1.499.998 3.056.845 4.607-.175 1.766-1.341 2.532-2.917 3.096-3.341 1.197-6.839 1.31-10.274 2.131-2.567.614-4.823 1.077-7.439 1.101-1.54.015-2.076-2.093-2.502-3.202-.705-1.835-2.64-31.258-1.497-33.297zm27.45-4.935c2.226-.303 4.364-.662 6.638-.744l4.381-.157c.944-.034 1.852.051 2.786.069.353.007.696.743.879.981.47.611.799 1.582.965 2.328a99.33 99.33 0 011.113 5.959c.705 4.422 1.118 8.98 1.607 13.44.258 2.358 1.078 4.669 1.227 7.024.096 1.532.519 3.173.13 4.682-.443 1.718-1.712 2.297-3.356 2.614-3.485.672-6.958.248-10.479.535-2.63.214-4.93.326-7.52-.049-1.524-.221-1.731-2.387-1.983-3.547-.416-1.921 2.171-31.295 3.612-33.135zm22.878-.778c2.193-.487 4.294-1.022 6.553-1.292l4.354-.52c.937-.112 1.849-.103 2.782-.162.352-.023.755.682.957.904.519.57.927 1.51 1.155 2.24a99.782 99.782 0 011.604 5.846c1.069 4.349 1.859 8.856 2.716 13.261.453 2.328 1.462 4.563 1.805 6.898.223 1.518.781 3.118.518 4.655-.298 1.748-1.515 2.431-3.127 2.883-3.417.959-6.914.825-10.399 1.402-2.603.432-4.886.735-7.497.575-1.537-.094-1.924-2.234-2.271-3.37-.574-1.88-.433-31.366.85-33.32zm23.477-4.145c2.193-.487 4.294-1.023 6.554-1.293l4.353-.52c.938-.112 1.85-.103 2.782-.162.352-.022.755.683.958.904.519.57.927 1.51 1.154 2.24a99.217 99.217 0 011.604 5.846c1.069 4.349 1.859 8.857 2.716 13.261.453 2.328 1.462 4.563 1.805 6.898.223 1.518.781 3.118.519 4.655-.299 1.749-1.516 2.431-3.128 2.883-3.417.959-6.914.825-10.398 1.403-2.604.431-4.887.734-7.498.575-1.537-.094-1.924-2.235-2.271-3.371-.574-1.88-.433-31.366.85-33.319zm24.033-1.816c2.121-.741 4.144-1.52 6.357-2.053l4.262-1.027c.918-.221 1.825-.32 2.744-.488.347-.063.83.59 1.057.786.582.505 1.097 1.391 1.409 2.089a99.354 99.354 0 012.279 5.617c1.572 4.194 2.886 8.577 4.253 12.851.723 2.259 1.988 4.359 2.603 6.638.399 1.482 1.141 3.005 1.061 4.562-.092 1.772-1.22 2.592-2.768 3.23-3.281 1.354-6.769 1.631-10.162 2.614-2.535.734-4.766 1.302-7.378 1.45-1.538.088-2.173-1.993-2.651-3.08-.791-1.8-4.111-31.099-3.066-33.189zm22.926-6.028c2.12-.741 4.144-1.519 6.356-2.052l4.262-1.028c.918-.221 1.825-.319 2.744-.488.347-.063.83.59 1.057.786.583.505 1.098 1.391 1.409 2.089a98.346 98.346 0 012.279 5.618c1.573 4.193 2.886 8.577 4.254 12.85.723 2.259 1.987 4.36 2.602 6.638.4 1.482 1.141 3.006 1.061 4.563-.091 1.771-1.22 2.592-2.767 3.23-3.281 1.353-6.77 1.63-10.163 2.613-2.534.734-4.766 1.303-7.378 1.451-1.537.087-2.172-1.994-2.65-3.081-.791-1.799-4.112-31.099-3.066-33.189zm32.03-4.151c2.164-.606 4.232-1.255 6.474-1.647l4.318-.756c.93-.163 1.842-.204 2.77-.314.35-.042.791.64 1.005.851.549.54 1.007 1.457 1.274 2.173a99.348 99.348 0 011.92 5.75c1.305 4.285 2.339 8.743 3.434 13.094.579 2.3 1.709 4.476 2.179 6.789.305 1.504.949 3.071.771 4.62-.203 1.762-1.382 2.51-2.966 3.049-3.36 1.144-6.859 1.2-10.307 1.967-2.576.573-4.839.999-7.455.982-1.54-.01-2.043-2.126-2.451-3.242-.676-1.845-2.141-31.296-.966-33.316zm25-3c2.164-.606 4.232-1.255 6.474-1.647l4.318-.756c.93-.163 1.842-.204 2.77-.314.35-.042.791.64 1.005.851.549.54 1.007 1.457 1.274 2.173a99.348 99.348 0 011.92 5.75c1.305 4.285 2.339 8.743 3.434 13.094.579 2.3 1.709 4.476 2.179 6.789.305 1.504.949 3.071.771 4.62-.203 1.762-1.382 2.51-2.966 3.049-3.36 1.144-6.859 1.2-10.307 1.967-2.576.573-4.839.999-7.455.982-1.54-.01-2.043-2.126-2.451-3.242-.676-1.845-2.141-31.296-.966-33.316zM128.577 326.78c2.192-.494 4.291-1.036 6.55-1.312l4.351-.534c.937-.114 1.85-.109 2.782-.171.352-.023.757.681.96.902.521.568.932 1.507 1.161 2.236a99.033 99.033 0 011.622 5.842c1.082 4.345 1.886 8.85 2.756 13.252.46 2.327 1.476 4.559 1.826 6.892.228 1.518.79 3.117.532 4.654-.293 1.75-1.508 2.435-3.118 2.893-3.414.969-6.912.845-10.395 1.434-2.602.439-4.884.749-7.496.597-1.537-.089-1.93-2.229-2.28-3.363-.58-1.879-.528-31.365.749-33.322zm-30.47 2.857c2.182-.529 4.273-1.105 6.527-1.418l4.342-.603c.935-.13 1.848-.139 2.779-.216.351-.029.768.668.974.886.53.559.956 1.492 1.197 2.217a99.315 99.315 0 011.716 5.814c1.152 4.328 2.029 8.82 2.97 13.207.497 2.319 1.549 4.534 1.936 6.862.253 1.513.841 3.103.608 4.644-.265 1.754-1.469 2.46-3.072 2.943-3.398 1.024-6.896.957-10.37 1.601-2.594.482-4.871.828-7.485.718-1.539-.064-1.966-2.197-2.335-3.326-.61-1.868-1.034-31.352.212-33.329z"
        stroke="#000"
        strokeWidth={7}
        strokeLinecap="round"
      />
    </StyledSvg>
  );
}
