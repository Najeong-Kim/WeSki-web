import React from 'react';
import { cn } from '@/shared/lib';

const GoldValleyPath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#171D23]')}
        d="M117.5 74.5L116.767 74.3429L117.5 74.5ZM79 133.5L84.1324 126.524L75.5252 125.567L79 133.5ZM79.9074 132.126C79.9579 131.715 79.6655 131.34 79.2544 131.29C78.8433 131.239 78.469 131.532 78.4185 131.943L79.9074 132.126ZM78.8571 128.999C78.7847 129.407 79.0567 129.796 79.4645 129.869C79.8724 129.941 80.2617 129.669 80.334 129.261L78.8571 128.999ZM80.9286 126.443C81.0282 126.041 80.783 125.634 80.381 125.534C79.9789 125.435 79.5722 125.68 79.4726 126.082L80.9286 126.443ZM80.3115 123.206C80.1781 123.598 80.3878 124.024 80.78 124.158C81.1721 124.291 81.5981 124.081 81.7316 123.689L80.3115 123.206ZM82.7861 121.04C82.96 120.664 82.7961 120.218 82.4202 120.044C82.0442 119.871 81.5985 120.034 81.4246 120.41L82.7861 121.04ZM82.856 117.75C82.6372 118.102 82.7449 118.564 83.0966 118.783C83.4483 119.002 83.9108 118.894 84.1296 118.542L82.856 117.75ZM85.7811 116.24C86.0442 115.921 85.9981 115.448 85.6781 115.185C85.3582 114.922 84.8855 114.968 84.6225 115.288L85.7811 116.24ZM86.6846 113.078C86.3844 113.364 86.3724 113.838 86.6578 114.138C86.9432 114.439 87.4179 114.451 87.7181 114.165L86.6846 113.078ZM89.8888 112.305C90.2155 112.05 90.2739 111.579 90.0192 111.252C89.7646 110.926 89.2933 110.867 88.9666 111.122L89.8888 112.305ZM91.3829 109.375C91.0399 109.607 90.9502 110.073 91.1825 110.416C91.4147 110.759 91.881 110.849 92.224 110.617L91.3829 109.375ZM94.6631 109.038C95.0146 108.819 95.1216 108.356 94.9024 108.005C94.6831 107.653 94.2204 107.546 93.869 107.766L94.6631 109.038ZM96.3781 106.229C96.0238 106.444 95.9105 106.905 96.1251 107.259C96.3397 107.613 96.8009 107.727 97.1552 107.512L96.3781 106.229ZM99.667 105.987C100.02 105.771 100.131 105.309 99.9152 104.956C99.6989 104.603 99.2372 104.491 98.884 104.708L99.667 105.987ZM101.364 103.162C101.015 103.385 100.912 103.848 101.134 104.198C101.357 104.547 101.82 104.65 102.17 104.428L101.364 103.162ZM104.578 102.829C104.915 102.587 104.992 102.119 104.751 101.782C104.51 101.445 104.041 101.368 103.704 101.609L104.578 102.829ZM105.822 99.9432C105.509 100.214 105.474 100.688 105.745 101.001C106.016 101.314 106.49 101.349 106.803 101.078L105.822 99.9432ZM108.858 99.1204C109.143 98.8202 109.131 98.3455 108.831 98.06C108.531 97.7746 108.056 97.7865 107.771 98.0866L108.858 99.1204ZM109.523 96.0476C109.269 96.375 109.329 96.8461 109.657 97.0997C109.984 97.3534 110.455 97.2935 110.709 96.966L109.523 96.0476ZM112.33 94.637C112.549 94.2855 112.442 93.8229 112.091 93.6037C111.739 93.3845 111.277 93.4917 111.057 93.8432L112.33 94.637ZM112.367 91.4933C112.183 91.8644 112.335 92.3144 112.706 92.4985C113.077 92.6825 113.527 92.5308 113.711 92.1598L112.367 91.4933ZM114.852 89.5704C115.002 89.1843 114.811 88.7496 114.425 88.5994C114.039 88.4492 113.604 88.6404 113.454 89.0264L114.852 89.5704ZM114.333 86.4673C114.213 86.8639 114.438 87.2823 114.834 87.402C115.231 87.5216 115.65 87.2972 115.769 86.9006L114.333 86.4673ZM116.492 84.1833C116.586 83.7799 116.335 83.3766 115.932 83.2825C115.528 83.1884 115.125 83.4392 115.031 83.8426L116.492 84.1833ZM115.584 81.17C115.509 81.5773 115.778 81.9685 116.186 82.0438C116.593 82.1191 116.984 81.8499 117.059 81.4426L115.584 81.17ZM117.527 78.7002C117.593 78.2913 117.315 77.9063 116.907 77.8403C116.498 77.7743 116.113 78.0523 116.047 78.4613L117.527 78.7002ZM116.499 75.7248C116.426 76.1326 116.698 76.522 117.106 76.5946C117.513 76.6672 117.903 76.3955 117.975 75.9877L116.499 75.7248ZM118.466 73.3798C118.528 72.9702 118.245 72.5884 117.836 72.5271C117.426 72.4658 117.044 72.7482 116.983 73.1578L118.466 73.3798ZM117.163 70.7847C117.165 71.1989 117.502 71.533 117.916 71.5309C118.331 71.5288 118.665 71.1914 118.663 70.7772L117.163 70.7847ZM118.387 68.1398C118.299 67.735 117.9 67.4782 117.495 67.5662C117.09 67.6542 116.833 68.0537 116.921 68.4584L118.387 68.1398ZM116.133 66.3511C116.345 66.7074 116.805 66.825 117.161 66.6137C117.517 66.4025 117.635 65.9424 117.424 65.5861L116.133 66.3511ZM80.334 129.261C80.5103 128.268 80.7087 127.33 80.9286 126.443L79.4726 126.082C79.2441 127.004 79.0388 127.975 78.8571 128.999L80.334 129.261ZM81.7316 123.689C82.0534 122.743 82.4054 121.863 82.7861 121.04L81.4246 120.41C81.0207 121.284 80.6494 122.213 80.3115 123.206L81.7316 123.689ZM84.1296 118.542C84.6424 117.718 85.1933 116.955 85.7811 116.24L84.6225 115.288C83.9938 116.052 83.4043 116.869 82.856 117.75L84.1296 118.542ZM87.7181 114.165C88.4021 113.515 89.1258 112.9 89.8888 112.305L88.9666 111.122C88.1708 111.742 87.4091 112.389 86.6846 113.078L87.7181 114.165ZM92.224 110.617C93.0049 110.088 93.8179 109.566 94.6631 109.038L93.869 107.766C93.0137 108.299 92.184 108.832 91.3829 109.375L92.224 110.617ZM97.1552 107.512C97.9681 107.02 98.8071 106.513 99.667 105.987L98.884 104.708C98.028 105.232 97.1937 105.735 96.3781 106.229L97.1552 107.512ZM102.17 104.428C102.579 104.167 102.993 103.901 103.41 103.628L102.59 102.372C102.177 102.642 101.769 102.905 101.364 103.162L102.17 104.428ZM103.41 103.628C103.811 103.366 104.2 103.099 104.578 102.829L103.704 101.609C103.344 101.867 102.973 102.122 102.59 102.372L103.41 103.628ZM106.803 101.078C107.54 100.441 108.223 99.7875 108.858 99.1204L107.771 98.0866C107.17 98.7184 106.522 99.3383 105.822 99.9432L106.803 101.078ZM110.709 96.966C111.302 96.1998 111.841 95.4219 112.33 94.637L111.057 93.8432C110.594 94.5865 110.084 95.3227 109.523 96.0476L110.709 96.966ZM113.711 92.1598C114.139 91.2968 114.516 90.4317 114.852 89.5704L113.454 89.0264C113.133 89.8493 112.774 90.6733 112.367 91.4933L113.711 92.1598ZM115.769 86.9006C116.047 85.9808 116.284 85.0724 116.492 84.1833L115.031 83.8426C114.83 84.7052 114.6 85.5823 114.333 86.4673L115.769 86.9006ZM117.059 81.4426C117.235 80.4907 117.387 79.5719 117.527 78.7002L116.047 78.4613C115.906 79.3304 115.757 80.2355 115.584 81.17L117.059 81.4426ZM117.975 75.9877C118.059 75.5202 118.144 75.0763 118.233 74.6571L116.767 74.3429C116.672 74.7842 116.584 75.2461 116.499 75.7248L117.975 75.9877ZM118.233 74.6571C118.328 74.2173 118.405 73.7915 118.466 73.3798L116.983 73.1578C116.926 73.5379 116.855 73.9328 116.767 74.3429L118.233 74.6571ZM118.663 70.7772C118.658 69.7861 118.554 68.9076 118.387 68.1398L116.921 68.4584C117.065 69.1197 117.158 69.8937 117.163 70.7847L118.663 70.7772ZM117.424 65.5861C117.125 65.0816 116.797 64.688 116.48 64.4238L115.52 65.5762C115.675 65.7057 115.899 65.9553 116.133 66.3511L117.424 65.5861Z"
      />
    </svg>
  );
};

export default GoldValleyPath;