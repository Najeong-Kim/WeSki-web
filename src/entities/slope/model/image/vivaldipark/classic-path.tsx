import React from 'react';
import { cn } from '@/shared/lib';

const ClassicPath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#447EFF]')}
        d="M108.5 95L116.892 92.8627L110.845 86.6633L108.5 95ZM110.548 94.0495C110.842 93.7573 110.843 93.2824 110.551 92.9889C110.259 92.6953 109.784 92.6943 109.49 92.9865L110.548 94.0495ZM112.419 89.9542C112.137 90.2576 112.154 90.7322 112.457 91.0142C112.761 91.2961 113.235 91.2787 113.517 90.9753L112.419 89.9542ZM116.367 87.7927C116.638 87.4792 116.603 87.0056 116.29 86.7349C115.976 86.4642 115.503 86.4989 115.232 86.8124L116.367 87.7927ZM117.933 83.5719C117.673 83.8945 117.724 84.3666 118.047 84.6264C118.37 84.8862 118.842 84.8352 119.102 84.5126L117.933 83.5719ZM121.724 81.1444C121.973 80.8135 121.907 80.3433 121.576 80.0941C121.245 79.8449 120.775 79.9112 120.526 80.2421L121.724 81.1444ZM123.012 76.831C122.773 77.1694 122.854 77.6374 123.192 77.8762C123.531 78.115 123.999 78.0343 124.238 77.6958L123.012 76.831ZM126.645 74.1735C126.874 73.8281 126.779 73.3628 126.434 73.1341C126.089 72.9054 125.623 73 125.395 73.3453L126.645 74.1735ZM127.675 69.7908C127.457 70.1425 127.565 70.605 127.916 70.8237C128.268 71.0424 128.731 70.9345 128.949 70.5827L127.675 69.7908ZM131.151 66.9281C131.359 66.5703 131.239 66.1111 130.881 65.9024C130.523 65.6936 130.064 65.8145 129.855 66.1723L131.151 66.9281ZM131.932 62.4951C131.733 62.8586 131.867 63.3142 132.23 63.5129C132.594 63.7115 133.049 63.5778 133.248 63.2143L131.932 62.4951ZM135.238 59.4462C135.426 59.0772 135.279 58.6256 134.91 58.4374C134.541 58.2493 134.09 58.3959 133.902 58.765L135.238 59.4462ZM135.765 54.9702C135.588 55.3448 135.748 55.7918 136.123 55.9686C136.498 56.1454 136.945 55.9851 137.121 55.6105L135.765 54.9702ZM138.88 51.7177C139.043 51.3372 138.868 50.896 138.487 50.7323C138.107 50.5685 137.666 50.7442 137.502 51.1247L138.88 51.7177ZM139.081 47.2288C138.935 47.6163 139.131 48.0491 139.518 48.1954C139.906 48.3417 140.338 48.1462 140.485 47.7587L139.081 47.2288ZM113.517 90.9753C114.492 89.9267 115.442 88.8646 116.367 87.7927L115.232 86.8124C114.318 87.871 113.38 88.9195 112.419 89.9542L113.517 90.9753ZM119.102 84.5126C120.002 83.3949 120.876 82.2708 121.724 81.1444L120.526 80.2421C119.687 81.356 118.823 82.4672 117.933 83.5719L119.102 84.5126ZM124.238 77.6958C125.069 76.5182 125.871 75.3426 126.645 74.1735L125.395 73.3453C124.628 74.5025 123.834 75.6659 123.012 76.831L124.238 77.6958ZM128.949 70.5827C129.716 69.3497 130.45 68.1296 131.151 66.9281L129.855 66.1723C129.161 67.3619 128.434 68.57 127.675 69.7908L128.949 70.5827ZM133.248 63.2143C133.952 61.9252 134.616 60.6665 135.238 59.4462L133.902 58.765C133.286 59.9727 132.629 61.2187 131.932 62.4951L133.248 63.2143ZM137.121 55.6105C137.769 54.2391 138.355 52.9367 138.88 51.7177L137.502 51.1247C136.984 52.3275 136.405 53.6141 135.765 54.9702L137.121 55.6105ZM140.485 47.7587C140.759 47.0327 141.001 46.3583 141.21 45.741L139.79 45.259C139.586 45.8586 139.35 46.5169 139.081 47.2288L140.485 47.7587Z"
      />
    </svg>
  );
};

export default ClassicPath;
