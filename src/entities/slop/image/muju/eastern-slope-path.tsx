import React from 'react';
import { cn } from '@/shared/lib';

const EasternSlopePath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#FF9928]')}
        d="M200.5 164.5L199.201 155.938L192.435 161.344L200.5 164.5ZM200.061 162.75C199.818 162.415 199.349 162.34 199.013 162.583C198.678 162.826 198.603 163.295 198.846 163.63L200.061 162.75ZM197.11 160.592C197.272 160.973 197.713 161.151 198.094 160.989C198.475 160.826 198.653 160.386 198.49 160.005L197.11 160.592ZM197.659 156.991C197.605 156.581 197.228 156.292 196.818 156.346C196.407 156.4 196.118 156.777 196.172 157.187L197.659 156.991ZM196.2 153.653C196.141 154.063 196.426 154.444 196.836 154.503C197.246 154.562 197.626 154.277 197.685 153.867L196.2 153.653ZM198.512 150.82C198.665 150.435 198.476 149.999 198.091 149.847C197.706 149.694 197.27 149.882 197.118 150.267L198.512 150.82ZM198.705 147.175C198.484 147.525 198.588 147.988 198.938 148.21C199.288 148.431 199.751 148.327 199.973 147.977L198.705 147.175ZM201.903 145.394C202.175 145.081 202.142 144.607 201.829 144.336C201.516 144.064 201.043 144.097 200.771 144.41L201.903 145.394ZM203.208 141.974C202.894 142.246 202.861 142.719 203.132 143.032C203.403 143.345 203.877 143.379 204.19 143.108L203.208 141.974ZM198.49 160.005C198.056 158.984 197.789 157.977 197.659 156.991L196.172 157.187C196.32 158.308 196.623 159.447 197.11 160.592L198.49 160.005ZM197.685 153.867C197.836 152.82 198.123 151.8 198.512 150.82L197.118 150.267C196.691 151.343 196.37 152.476 196.2 153.653L197.685 153.867ZM199.973 147.977C200.56 147.048 201.218 146.182 201.903 145.394L200.771 144.41C200.041 145.249 199.337 146.176 198.705 147.175L199.973 147.977ZM204.19 143.108C204.622 142.734 205.043 142.398 205.444 142.105L204.557 140.895C204.122 141.214 203.669 141.575 203.208 141.974L204.19 143.108Z"
      />
    </svg>
  );
};

export default EasternSlopePath;
