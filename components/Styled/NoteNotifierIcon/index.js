export default function NoteNotifierIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_f_38_2)">
        <circle cx={28} cy={28} r={24} fill="#9EFD9C" />
        <circle cx={28} cy={28} r={22} stroke="#000" strokeWidth={4} />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f_38_2"
          x={0}
          y={0}
          width={56}
          height={56}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={2}
            result="effect1_foregroundBlur_38_2"
          />
        </filter>
      </defs>
    </svg>
  );
}
