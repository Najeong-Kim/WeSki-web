import React from 'react';

const FogIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 12C30 16.4183 26.4183 20 22 20C17.5817 20 14 16.4183 14 12C14 7.58172 17.5817 4 22 4C26.4183 4 30 7.58172 30 12Z"
        fill="#FF9928"
      />
      <g filter="url(#filter0_b_971_82079)">
        <path
          d="M4.81944 13.6C4.81944 12.7163 5.54076 12 6.43056 12H21.3333C22.2231 12 22.9444 12.7163 22.9444 13.6C22.9444 14.4837 22.2231 15.2 21.3333 15.2H19.7222C18.8324 15.2 18.1111 15.9163 18.1111 16.8C18.1111 17.6837 18.8324 18.4 19.7222 18.4H29.3889C30.2787 18.4 31 19.1163 31 20C31 20.8837 30.2787 21.6 29.3889 21.6H24.5556C23.6658 21.6 22.9444 22.3163 22.9444 23.2C22.9444 24.0837 23.6658 24.8 24.5556 24.8H26.5694C27.4592 24.8 28.1806 25.5163 28.1806 26.4C28.1806 27.2837 27.4592 28 26.5694 28H11.6667C10.7769 28 10.0556 27.2837 10.0556 26.4C10.0556 25.5163 10.7769 24.8 11.6667 24.8H12.875C13.7648 24.8 14.4861 24.0837 14.4861 23.2C14.4861 22.3163 13.7648 21.6 12.875 21.6H3.61111C2.72132 21.6 2 20.8837 2 20C2 19.1163 2.72132 18.4 3.61111 18.4H8.04167C8.93146 18.4 9.65278 17.6837 9.65278 16.8C9.65278 15.9163 8.93146 15.2 8.04167 15.2H6.43056C5.54076 15.2 4.81944 14.4837 4.81944 13.6Z"
          fill="url(#paint0_linear_971_82079)"
          fillOpacity="0.3"
        />
        <path
          d="M5.06944 13.6C5.06944 12.856 5.6772 12.25 6.43056 12.25H21.3333C22.0867 12.25 22.6944 12.856 22.6944 13.6C22.6944 14.344 22.0867 14.95 21.3333 14.95H19.7222C18.696 14.95 17.8611 15.7766 17.8611 16.8C17.8611 17.8234 18.696 18.65 19.7222 18.65H29.3889C30.1422 18.65 30.75 19.256 30.75 20C30.75 20.744 30.1422 21.35 29.3889 21.35H24.5556C23.5293 21.35 22.6944 22.1766 22.6944 23.2C22.6944 24.2234 23.5293 25.05 24.5556 25.05H26.5694C27.3228 25.05 27.9306 25.656 27.9306 26.4C27.9306 27.144 27.3228 27.75 26.5694 27.75H11.6667C10.9133 27.75 10.3056 27.144 10.3056 26.4C10.3056 25.656 10.9133 25.05 11.6667 25.05H12.875C13.9012 25.05 14.7361 24.2234 14.7361 23.2C14.7361 22.1766 13.9012 21.35 12.875 21.35H3.61111C2.85776 21.35 2.25 20.744 2.25 20C2.25 19.256 2.85776 18.65 3.61111 18.65H8.04167C9.0679 18.65 9.90278 17.8234 9.90278 16.8C9.90278 15.7766 9.0679 14.95 8.04167 14.95H6.43056C5.6772 14.95 5.06944 14.344 5.06944 13.6Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_971_82079"
          x="0"
          y="10"
          width="33"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_971_82079" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_971_82079"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_971_82079"
          x1="0.26"
          y1="17"
          x2="33.5198"
          y2="26.3522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9898" />
          <stop offset="0.447036" stopColor="#FFDADA" stopOpacity="0.955296" />
          <stop offset="1" stopColor="#FF9898" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FogIcon;
