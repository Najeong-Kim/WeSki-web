import React from 'react';
import { cn } from '@/shared/lib';

const YamagaPath = ({ color }: { color?: string }) => {
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
        d="M268.23 101.826C268.134 101.423 267.729 101.174 267.326 101.27C266.923 101.366 266.674 101.771 266.77 102.174L268.23 101.826ZM261 124L260.409 123.538L261 124ZM227 162.5L235.271 159.933L228.912 154.054L227 162.5ZM228.516 161.965C228.797 161.661 228.778 161.187 228.473 160.906C228.169 160.625 227.695 160.644 227.414 160.948L228.516 161.965ZM229.345 158.851C229.065 159.156 229.085 159.63 229.39 159.911C229.695 160.191 230.169 160.171 230.45 159.866L229.345 158.851ZM232.381 157.76C232.661 157.455 232.64 156.98 232.334 156.701C232.029 156.421 231.555 156.442 231.275 156.747L232.381 157.76ZM233.202 154.638C232.923 154.944 232.945 155.419 233.251 155.698C233.557 155.977 234.031 155.955 234.31 155.649L233.202 154.638ZM236.231 153.54C236.51 153.233 236.487 152.759 236.18 152.48C235.874 152.202 235.4 152.224 235.121 152.531L236.231 153.54ZM237.038 150.418C236.76 150.725 236.783 151.199 237.09 151.477C237.397 151.755 237.872 151.732 238.15 151.425L237.038 150.418ZM240.067 149.304C240.344 148.997 240.32 148.522 240.012 148.245C239.705 147.967 239.231 147.992 238.953 148.299L240.067 149.304ZM240.861 146.181C240.584 146.489 240.609 146.963 240.918 147.24C241.226 147.517 241.7 147.491 241.977 147.183L240.861 146.181ZM243.884 145.056C244.16 144.747 244.134 144.273 243.825 143.997C243.517 143.721 243.042 143.747 242.766 144.056L243.884 145.056ZM244.666 141.927C244.391 142.237 244.418 142.711 244.727 142.986C245.037 143.262 245.511 143.234 245.786 142.925L244.666 141.927ZM247.683 140.789C247.958 140.479 247.929 140.005 247.619 139.73C247.309 139.456 246.835 139.484 246.56 139.794L247.683 140.789ZM248.448 137.656C248.175 137.967 248.205 138.441 248.516 138.715C248.827 138.988 249.301 138.958 249.574 138.647L248.448 137.656ZM251.459 136.498C251.732 136.186 251.7 135.712 251.388 135.44C251.076 135.167 250.602 135.199 250.33 135.511L251.459 136.498ZM252.199 133.363C251.928 133.676 251.962 134.15 252.275 134.421C252.588 134.692 253.062 134.658 253.333 134.345L252.199 133.363ZM255.201 132.177C255.47 131.862 255.434 131.389 255.119 131.119C254.805 130.85 254.331 130.886 254.062 131.201L255.201 132.177ZM255.91 129.029C255.643 129.346 255.682 129.819 255.999 130.086C256.315 130.353 256.789 130.313 257.056 129.997L255.91 129.029ZM258.893 127.801C259.157 127.482 259.112 127.009 258.793 126.745C258.474 126.481 258.001 126.526 257.737 126.845L258.893 127.801ZM259.533 124.643C259.274 124.966 259.326 125.438 259.649 125.697C259.972 125.957 260.444 125.905 260.703 125.582L259.533 124.643ZM262.496 123.255C262.738 122.918 262.661 122.45 262.324 122.208C261.988 121.967 261.519 122.043 261.278 122.38L262.496 123.255ZM262.86 119.967C262.648 120.323 262.765 120.783 263.121 120.995C263.476 121.207 263.937 121.091 264.149 120.735L262.86 119.967ZM265.576 118.076C265.755 117.703 265.598 117.255 265.224 117.075C264.851 116.896 264.403 117.053 264.224 117.427L265.576 118.076ZM265.348 114.775C265.205 115.164 265.403 115.595 265.792 115.739C266.18 115.882 266.612 115.684 266.755 115.295L265.348 114.775ZM267.665 112.414C267.77 112.013 267.531 111.603 267.13 111.498C266.73 111.393 266.32 111.632 266.214 112.033L267.665 112.414ZM266.801 109.221C266.738 109.63 267.018 110.014 267.428 110.077C267.837 110.14 268.22 109.86 268.284 109.451L266.801 109.221ZM268.58 106.428C268.597 106.014 268.274 105.666 267.86 105.65C267.446 105.633 267.098 105.956 267.082 106.37L268.58 106.428ZM266.997 103.534C267.042 103.945 267.413 104.243 267.824 104.197C268.236 104.152 268.533 103.781 268.488 103.37L266.997 103.534ZM230.45 159.866C231.066 159.195 231.712 158.492 232.381 157.76L231.275 156.747C230.606 157.478 229.961 158.181 229.345 158.851L230.45 159.866ZM234.31 155.649C234.936 154.963 235.578 154.259 236.231 153.54L235.121 152.531C234.468 153.249 233.827 153.953 233.202 154.638L234.31 155.649ZM238.15 151.425C238.782 150.727 239.422 150.019 240.067 149.304L238.953 148.299C238.309 149.014 237.669 149.721 237.038 150.418L238.15 151.425ZM241.977 147.183C242.611 146.478 243.247 145.768 243.884 145.056L242.766 144.056C242.13 144.767 241.494 145.476 240.861 146.181L241.977 147.183ZM245.786 142.925C246.422 142.211 247.055 141.498 247.683 140.789L246.56 139.794C245.933 140.503 245.301 141.215 244.666 141.927L245.786 142.925ZM249.574 138.647C250.211 137.924 250.84 137.206 251.459 136.498L250.33 135.511C249.712 136.218 249.084 136.934 248.448 137.656L249.574 138.647ZM253.333 134.345C253.972 133.607 254.596 132.883 255.201 132.177L254.062 131.201C253.459 131.905 252.836 132.627 252.199 133.363L253.333 134.345ZM257.056 129.997C257.699 129.236 258.313 128.502 258.893 127.801L257.737 126.845C257.161 127.541 256.55 128.271 255.91 129.029L257.056 129.997ZM260.703 125.582C261.015 125.193 261.311 124.82 261.591 124.462L260.409 123.538C260.134 123.89 259.841 124.259 259.533 124.643L260.703 125.582ZM261.591 124.462C261.905 124.06 262.207 123.657 262.496 123.255L261.278 122.38C261.001 122.766 260.711 123.152 260.409 123.538L261.591 124.462ZM264.149 120.735C264.681 119.841 265.155 118.953 265.576 118.076L264.224 117.427C263.822 118.264 263.369 119.112 262.86 119.967L264.149 120.735ZM266.755 115.295C267.12 114.309 267.421 113.345 267.665 112.414L266.214 112.033C265.982 112.918 265.696 113.835 265.348 114.775L266.755 115.295ZM268.284 109.451C268.451 108.373 268.544 107.36 268.58 106.428L267.082 106.37C267.047 107.244 266.96 108.2 266.801 109.221L268.284 109.451ZM268.488 103.37C268.424 102.787 268.335 102.269 268.23 101.826L266.77 102.174C266.859 102.547 266.939 103.003 266.997 103.534L268.488 103.37Z"
      />
    </svg>
  );
};

export default YamagaPath;