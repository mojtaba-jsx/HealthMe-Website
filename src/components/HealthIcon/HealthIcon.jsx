import React from "react";

function HealthIcon() {
  return (
    <svg
     className="health-icon__custom"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 85 85"
    >
      <g filter="url(#filter0_di_1_1081)">
        <circle
          cx="42.793"
          cy="37.207"
          r="16.207"
          fill="url(#paint0_linear_1_1081)"
        ></circle>
      </g>
      <rect
        width="7.047"
        height="18.321"
        x="39.269"
        y="28.047"
        fill="#fff"
        rx="1.057"
      ></rect>
      <rect
        width="7.047"
        height="18.321"
        x="51.953"
        y="33.684"
        fill="#fff"
        rx="1.057"
        transform="rotate(90 51.953 33.684)"
      ></rect>
      <defs>
        <filter
          id="filter0_di_1_1081"
          width="83.738"
          height="83.738"
          x="0.924"
          y="0.741"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="5.402"></feOffset>
          <feGaussianBlur stdDeviation="12.831"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1081"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1081"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="5.402"></feOffset>
          <feGaussianBlur stdDeviation="2.701"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1_1081"></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_1_1081"
          x1="24.062"
          x2="97.733"
          y1="8.288"
          y2="16.215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A8EF6"></stop>
          <stop offset="1" stopColor="#6F3AFA"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HealthIcon;
