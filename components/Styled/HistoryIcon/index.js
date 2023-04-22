import styled from "styled-components";

const StyledSvg = styled.svg`
  &:hover {
    fill: yellow;
  }
`;

export default function HistoryIcon(props) {
  return (
    <StyledSvg
      width="90%"
      height="90%"
      viewBox="0 0 378 607"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M90.896 2.097c0 46.598-14.322 94.867-25.737 139.522-18.912 73.983-43.15 146.595-59.432 221.22-3.886 17.809-1.888 33.65-1.693 51.558.116 10.688-1.524 21.157-1.524 31.833 0 16.087-1.843 33.458 1.185 49.273 1.41 7.36 1.456 15.103 4.064 22.181 2.683 7.283 3.833 7.485 12.868 10.837 55.224 20.486 115.196 29.656 172.286 43.685 47.507 11.674 94.912 22.805 143.501 28.785 3.317.408 31.126 6.59 32.679 2.709.755-1.887-.777-10.715-.677-12.615 1.048-19.917 4.937-39.659 6.773-59.517 3.996-43.238-6.83-84.107-9.906-126.907-3.468-48.261-3.132-96.833-3.132-145.194 0-49.084 1.936-97.909.084-146.972-1.096-29.069-6.367-56.591-11.83-85.118l-.107-.56c-.431-2.249.581-6.868-1.185-8.634-4.892-4.892-21.208-3.978-27.092-4.742-18.286-2.373-36.841-2.858-55.199-4.571-15.615-1.458-31.045-4.4-46.733-5.165-28.751-1.402-57.364-1.608-86.185-1.608-13.038 0-27.339-1.631-39.96 1.524m15.239 18.287c.968 7.748 3.3 14.874 3.048 23.705-.233 8.157-5.287 28.076-12.192 32.679m-1.523-25.906c10.538 0 21.223 1.523 32.001 1.523m-4.571-25.906c10.519 12.857 5.076 41.151-3.048 53.337m30.478-42.67c5.014 6.267 3.048 18.34 3.048 25.907 0 5.99 1.524 12.063 1.524 18.287m35.05-41.146c-13.261 1.658-11.682 24.58.762 27.346 6.752 1.5 15.374 1.913 14.392 10.752-1.02 9.18-12.384 10.667-19.726 10.667m47.241-35.05c7.406 14.812 3.048 37.174 3.048 53.337M209.76 52.386c7.823 7.04 32.247 12.069 41.146 7.62m28.954 9.143c-8.745 7.773-24.382 8.02-24.382 23.62 0 7.829 7.969 21.608 16.762 22.097 11.981.665 25.907-2.872 25.907-16.848 0-9.74-5.09-24.298-16.763-24.298m27.43 45.717c-3.374-7.592-19.094-41.842-7.619-47.58 11.034-5.516 39.009 12.193 20.572 22.436-4.139 2.3-4.092 1.37-5.418 6.011-1.19 4.164-11.576-3.013-2.201 3.894 6.823 5.028 19.836 15.289 23.62 22.859m-7.619-51.813c3.952 4.392 18.287 34.152 18.287 12.191 0-7.737 1.553 14.934 1.524 17.271-.161 12.804-5.621 23.202-3.048 36.066m-239.253 7.62c11.986-11.987 22.301-28.773 38.944-16.509 4.841 3.567 6.253 9.987 11.006 13.461 4.11 3.003 9.24-1.173 13.377-2.709 15.573-5.785 16.073-.709 27.43 9.566 7.775 7.035 13.481 7.587 23.62 6.096 3.237-.476 12.138-3.39 15.155-1.947 7.62 3.644 13.321 14.988 19.641 20.488 9.841 8.563 14.765-3.01 23.959-.847 9.803 2.307 13.81 10.498 24.975 10.498M75.657 229.158c.934-7.473 18.043-16.28 23.367-20.657 11.009-9.052 6.454-1.86 13.545 6.942 7.818 9.705 23.125-12.906 32.849-9.313 7.135 2.637 13.783 12.518 19.303 17.441 2.774 2.474 8.293 8.635 12.36 8.635 12.381 0 22.391 3.427 31.156 12.191 8.996 8.997 26.774 3.72 37.928 3.133l.345-.018c11.303-.596 26.245-1.384 32.588 9.839 4.691 8.299 7.886 6.679 14.477 2.285M39.083 288.591c7.716 0 17.51-8.115 24.214-11.176 6.725-3.07 13.94-5.01 21.334-5.503 8.234-.549 10.717 5.787 15.408 11.26 8.815 10.284 26.867 1.992 38.606 2.371 5.064.163 9.233 3.775 12.276 7.619 4.731 5.977 7.639 7.291 15.832 8.297 12.024 1.477 24.312.847 36.404.847 5.767 0 7.867-.521 10.498 4.741 5.969 11.939 16.987 14.44 29.801 10.498 10.747-3.307 15.274 9.952 25.991 10.582 9.519.56 16.833-2.363 24.128-6.011M39.083 355.642c9.562 0 19.282-13.81 29.293-7.281 8.795 5.736 10.905 20.346 22.52 13.377m6.096-4.572c10.632 10.633 15.159 14.542 30.308 13.377 8.918-.686 17.829-1.336 26.753-1.947 4.747-.326 11.943-2.055 16.763-.678 2.419.691 5.874 7.408 7.451 9.228 4.35 5.026 8.617 8.253 15.239 9.821 6.384 1.512 12.6-2.498 18.625.085 7.201 3.086 11.08 9.36 16.594 14.307 9.984 8.961 27.784 5.268 39.706 4.657 10.151-.521 19.62 2.963 29.716 2.963M42.131 428.79c13.95-1.55 25.463-3.236 39.79 0 7.086 1.6 15.69 1.793 22.182 5.249l.337.179c5.027 2.676 10.09 5.371 15.41 7.44 9.04 3.516 20.773-1.927 30.478-.339 9.49 1.553 17.331 7.64 26.753 9.821 8.942 2.07 17.632 4.657 26.753 5.926 3.501.488 11.248-.856 14.308 1.524 9.027 7.022 22.141 9.719 33.441 8.213 8.102-1.081 23.939-4.02 28.277 4.656m13.715 45.717c-9.991 0-37.377-1.547-36.574 13.715.497 9.436 10.915 17.308 19.049 19.811 6.11 1.88 17.657 2.746 22.774-2.371 8.896-8.895-6.197-24.535-14.392-26.583m0 15.239c2.296 2.583 9.55 19.257 12.191 16.763 7.769-7.338 19.811-15.549 19.811-27.431M45.179 492.794c12.466-12.466 16.388-9.688 28.192 2.116 2.79 2.79 9.77-1.347 13.546-.508 1.644.365 1.75 2.56 3.979 2.879 2.559.365 5.186-.831 7.62-1.44m62.48 25.907c.671-5.368 32.939-5.041 37.335-1.524 3.271 2.617 4.25 3.539 9.144 2.963 7.103-.836 5.905-.233 11.429 1.609"
        stroke="black"
        strokeWidth={10}
        strokeLinecap="round"
      />
    </StyledSvg>
  );
}
