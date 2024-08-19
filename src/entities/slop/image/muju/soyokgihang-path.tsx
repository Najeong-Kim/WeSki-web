import React from 'react';
import { cn } from '@/shared/lib';

const SoyokgihangPath = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'stroke-[#FF9928]';
  const strokeColorClass = color ? color.replace('fill-', 'stroke-') : defaultStrokeColor;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('stroke-current', strokeColorClass)}
        d="M271.5 100.5C279.167 102.167 296.1 106.5 302.5 110.5C308.9 114.5 321.167 114.167 326.5 113.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path
        className={cn('fill-current', color ? color : 'fill-[#FF9928]')}
        d="M333 117L332.655 117.666L332.677 117.677L332.699 117.687L333 117ZM348.5 129.5L349.247 129.568L348.5 129.5ZM237.5 176L245.463 179.403L244.429 170.805L237.5 176ZM239.037 176.57C239.447 176.511 239.731 176.131 239.672 175.721C239.613 175.311 239.232 175.027 238.822 175.086L239.037 176.57ZM241.607 174.58C241.202 174.667 240.944 175.065 241.03 175.47C241.117 175.875 241.515 176.133 241.92 176.047L241.607 174.58ZM244.778 175.366C245.179 175.262 245.42 174.852 245.315 174.451C245.211 174.051 244.802 173.81 244.401 173.914L244.778 175.366ZM247.154 173.15C246.757 173.266 246.529 173.683 246.646 174.081C246.763 174.478 247.179 174.706 247.577 174.589L247.154 173.15ZM250.36 173.733C250.754 173.607 250.972 173.185 250.845 172.791C250.719 172.396 250.297 172.179 249.903 172.305L250.36 173.733ZM252.64 171.399C252.248 171.533 252.038 171.959 252.172 172.351C252.306 172.743 252.732 172.953 253.124 172.819L252.64 171.399ZM255.866 171.86C256.255 171.72 256.458 171.291 256.319 170.901C256.179 170.511 255.75 170.308 255.36 170.448L255.866 171.86ZM258.064 169.458C257.676 169.603 257.478 170.035 257.623 170.423C257.768 170.811 258.2 171.009 258.588 170.864L258.064 169.458ZM261.299 169.835C261.685 169.686 261.878 169.252 261.728 168.865C261.579 168.479 261.145 168.286 260.759 168.436L261.299 169.835ZM263.445 167.384C263.06 167.537 262.872 167.973 263.025 168.358C263.178 168.743 263.614 168.931 263.999 168.778L263.445 167.384ZM266.688 167.697C267.072 167.541 267.257 167.104 267.101 166.72C266.944 166.336 266.507 166.152 266.123 166.308L266.688 167.697ZM268.793 165.21C268.411 165.369 268.23 165.808 268.388 166.19C268.547 166.573 268.986 166.754 269.369 166.595L268.793 165.21ZM272.041 165.474C272.422 165.312 272.6 164.872 272.439 164.491C272.277 164.109 271.837 163.931 271.456 164.093L272.041 165.474ZM274.111 162.958C273.731 163.122 273.555 163.563 273.719 163.944C273.883 164.324 274.324 164.5 274.704 164.336L274.111 162.958ZM277.36 163.183C277.74 163.017 277.913 162.575 277.747 162.195C277.581 161.816 277.139 161.643 276.759 161.809L277.36 163.183ZM279.4 160.645C279.021 160.813 278.85 161.256 279.018 161.635C279.186 162.013 279.629 162.184 280.008 162.016L279.4 160.645ZM282.654 160.835C283.032 160.665 283.2 160.221 283.031 159.843C282.861 159.465 282.417 159.297 282.039 159.467L282.654 160.835ZM284.675 158.275C284.298 158.446 284.131 158.891 284.303 159.268C284.474 159.645 284.919 159.812 285.296 159.641L284.675 158.275ZM287.931 158.436C288.307 158.263 288.472 157.818 288.299 157.441C288.126 157.065 287.681 156.9 287.305 157.073L287.931 158.436ZM289.923 155.864C289.547 156.038 289.384 156.484 289.559 156.86C289.733 157.235 290.179 157.399 290.555 157.224L289.923 155.864ZM293.18 156C293.555 155.825 293.717 155.378 293.541 155.003C293.365 154.628 292.919 154.466 292.544 154.642L293.18 156ZM295.161 153.411C294.787 153.588 294.626 154.035 294.803 154.41C294.98 154.784 295.427 154.945 295.801 154.768L295.161 153.411ZM298.422 153.528C298.796 153.35 298.955 152.903 298.778 152.528C298.6 152.154 298.153 151.995 297.779 152.172L298.422 153.528ZM300.392 150.931C300.018 151.109 299.858 151.556 300.036 151.93C300.214 152.304 300.661 152.464 301.035 152.286L300.392 150.931ZM303.672 151.081C304.055 150.923 304.236 150.484 304.077 150.101C303.918 149.719 303.479 149.537 303.097 149.696L303.672 151.081ZM305.98 148.607C305.588 148.743 305.381 149.17 305.517 149.561C305.653 149.952 306.08 150.16 306.471 150.024L305.98 148.607ZM309.334 149.093C309.73 148.972 309.952 148.553 309.831 148.157C309.71 147.761 309.29 147.538 308.894 147.659L309.334 149.093ZM311.829 146.801C311.43 146.913 311.197 147.327 311.309 147.726C311.421 148.125 311.835 148.358 312.234 148.246L311.829 146.801ZM315.152 147.456C315.552 147.351 315.792 146.941 315.687 146.54C315.582 146.14 315.172 145.9 314.771 146.005L315.152 147.456ZM317.721 145.249C317.319 145.35 317.076 145.757 317.176 146.159C317.277 146.561 317.685 146.805 318.087 146.704L317.721 145.249ZM321.03 145.975C321.433 145.876 321.679 145.47 321.581 145.068C321.482 144.665 321.076 144.419 320.674 144.518L321.03 145.975ZM323.626 143.798C323.224 143.896 322.977 144.302 323.074 144.704C323.172 145.107 323.578 145.354 323.98 145.256L323.626 143.798ZM326.932 144.535C327.334 144.436 327.58 144.03 327.481 143.628C327.382 143.226 326.976 142.98 326.574 143.079L326.932 144.535ZM329.515 142.344C329.114 142.446 328.872 142.854 328.974 143.256C329.076 143.657 329.485 143.899 329.886 143.797L329.515 142.344ZM332.836 143.022C333.236 142.913 333.471 142.501 333.362 142.101C333.254 141.701 332.841 141.466 332.442 141.574L332.836 143.022ZM335.339 140.742C334.943 140.863 334.72 141.283 334.841 141.679C334.962 142.075 335.381 142.298 335.777 142.177L335.339 140.742ZM338.642 141.223C339.031 141.081 339.232 140.651 339.09 140.262C338.949 139.872 338.518 139.672 338.129 139.813L338.642 141.223ZM340.784 138.736C340.408 138.909 340.242 139.354 340.414 139.73C340.586 140.107 341.031 140.273 341.408 140.101L340.784 138.736ZM344.076 138.669C344.424 138.445 344.526 137.981 344.303 137.633C344.079 137.284 343.615 137.182 343.266 137.406L344.076 138.669ZM345.383 135.682C345.1 135.985 345.117 136.46 345.42 136.742C345.723 137.025 346.197 137.009 346.48 136.706L345.383 135.682ZM348.219 134.062C348.385 133.683 348.212 133.24 347.832 133.075C347.453 132.909 347.011 133.082 346.845 133.462L348.219 134.062ZM347.58 130.832C347.514 131.241 347.791 131.626 348.2 131.692C348.609 131.759 348.994 131.481 349.061 131.072L347.58 130.832ZM348.868 127.526C348.702 127.146 348.259 126.974 347.88 127.141C347.501 127.307 347.328 127.75 347.495 128.129L348.868 127.526ZM345.602 125.628C345.898 125.917 346.373 125.912 346.662 125.615C346.952 125.319 346.947 124.844 346.65 124.555L345.602 125.628ZM343.925 122.286C343.59 122.042 343.121 122.115 342.877 122.449C342.632 122.783 342.705 123.253 343.04 123.497L343.925 122.286ZM340.227 121.622C340.58 121.839 341.042 121.728 341.259 121.375C341.475 121.022 341.365 120.561 341.012 120.344L340.227 121.622ZM337.99 118.608C337.626 118.412 337.171 118.548 336.974 118.913C336.778 119.278 336.914 119.732 337.279 119.929L337.99 118.608ZM334.243 118.392C334.617 118.569 335.064 118.41 335.242 118.035C335.419 117.661 335.26 117.214 334.885 117.036L334.243 118.392ZM332.158 115.726C331.789 115.538 331.337 115.685 331.15 116.055C330.962 116.424 331.109 116.875 331.478 117.063L332.158 115.726ZM329.103 115.873C329.475 116.057 329.925 115.905 330.108 115.533C330.291 115.162 330.139 114.712 329.768 114.529L329.103 115.873ZM327.365 113.357C326.991 113.178 326.543 113.335 326.364 113.708C326.184 114.081 326.341 114.529 326.715 114.709L327.365 113.357ZM324.315 113.572C324.691 113.747 325.137 113.585 325.312 113.209C325.487 112.834 325.325 112.388 324.949 112.213L324.315 113.572ZM322.517 111.1C322.139 110.93 321.695 111.099 321.526 111.477C321.356 111.855 321.525 112.299 321.903 112.468L322.517 111.1ZM319.475 111.408C319.856 111.569 320.296 111.391 320.458 111.01C320.62 110.629 320.441 110.188 320.06 110.027L319.475 111.408ZM317.568 109.015C317.181 108.866 316.747 109.059 316.599 109.445C316.45 109.832 316.643 110.266 317.029 110.415L317.568 109.015ZM314.57 109.552C314.967 109.672 315.386 109.449 315.506 109.052C315.627 108.656 315.403 108.237 315.007 108.117L314.57 109.552ZM311.779 107.494C311.367 107.452 310.999 107.753 310.957 108.165C310.915 108.577 311.216 108.945 311.628 108.987L311.779 107.494ZM308.065 108.811C308.479 108.815 308.819 108.483 308.823 108.069C308.827 107.654 308.494 107.315 308.08 107.311L308.065 108.811ZM304.409 107.371C303.995 107.388 303.673 107.736 303.689 108.15C303.705 108.564 304.054 108.886 304.468 108.87L304.409 107.371ZM300.868 109.083C301.281 109.05 301.589 108.689 301.557 108.276C301.524 107.863 301.163 107.555 300.75 107.588L300.868 109.083ZM241.92 176.047C242.834 175.852 243.789 175.623 244.778 175.366L244.401 173.914C243.43 174.167 242.497 174.39 241.607 174.58L241.92 176.047ZM247.577 174.589C248.483 174.323 249.412 174.037 250.36 173.733L249.903 172.305C248.965 172.605 248.047 172.887 247.154 173.15L247.577 174.589ZM253.124 172.819C254.025 172.512 254.94 172.192 255.866 171.86L255.36 170.448C254.441 170.777 253.533 171.095 252.64 171.399L253.124 172.819ZM258.588 170.864C259.485 170.529 260.389 170.186 261.299 169.835L260.759 168.436C259.854 168.784 258.955 169.126 258.064 169.458L258.588 170.864ZM263.999 168.778C264.893 168.423 265.79 168.062 266.688 167.697L266.123 166.308C265.229 166.672 264.336 167.031 263.445 167.384L263.999 168.778ZM269.369 166.595C270.262 166.224 271.153 165.85 272.041 165.474L271.456 164.093C270.571 164.467 269.683 164.84 268.793 165.21L269.369 166.595ZM274.704 164.336C275.596 163.952 276.483 163.567 277.36 163.183L276.759 161.809C275.884 162.191 275 162.575 274.111 162.958L274.704 164.336ZM280.008 162.016C280.902 161.619 281.785 161.225 282.654 160.835L282.039 159.467C281.172 159.856 280.292 160.249 279.4 160.645L280.008 162.016ZM285.296 159.641C286.194 159.232 287.074 158.83 287.931 158.436L287.305 157.073C286.449 157.466 285.572 157.867 284.675 158.275L285.296 159.641ZM290.555 157.224C291.464 156.802 292.34 156.393 293.18 156L292.544 154.642C291.706 155.034 290.831 155.443 289.923 155.864L290.555 157.224ZM295.801 154.768C296.744 154.323 297.62 153.908 298.422 153.528L297.779 152.172C296.978 152.553 296.102 152.967 295.161 153.411L295.801 154.768ZM301.035 152.286C301.521 152.056 301.95 151.852 302.319 151.679L301.681 150.321C301.309 150.496 300.878 150.7 300.392 150.931L301.035 152.286ZM302.319 151.679C302.746 151.478 303.198 151.279 303.672 151.081L303.097 149.696C302.604 149.901 302.131 150.11 301.681 150.321L302.319 151.679ZM306.471 150.024C307.381 149.708 308.338 149.398 309.334 149.093L308.894 147.659C307.884 147.968 306.909 148.284 305.98 148.607L306.471 150.024ZM312.234 148.246C313.187 147.979 314.162 147.716 315.152 147.456L314.771 146.005C313.775 146.267 312.792 146.532 311.829 146.801L312.234 148.246ZM318.087 146.704C319.065 146.458 320.049 146.215 321.03 145.975L320.674 144.518C319.69 144.758 318.703 145.002 317.721 145.249L318.087 146.704ZM323.98 145.256C324.977 145.014 325.963 144.774 326.932 144.535L326.574 143.079C325.607 143.316 324.622 143.556 323.626 143.798L323.98 145.256ZM329.886 143.797C330.904 143.537 331.891 143.279 332.836 143.022L332.442 141.574C331.507 141.829 330.528 142.085 329.515 142.344L329.886 143.797ZM335.777 142.177C336.284 142.022 336.771 141.867 337.237 141.712L336.763 140.288C336.31 140.439 335.835 140.59 335.339 140.742L335.777 142.177ZM337.237 141.712C337.725 141.549 338.193 141.386 338.642 141.223L338.129 139.813C337.694 139.972 337.238 140.13 336.763 140.288L337.237 141.712ZM341.408 140.101C342.415 139.64 343.299 139.166 344.076 138.669L343.266 137.406C342.56 137.858 341.74 138.3 340.784 138.736L341.408 140.101ZM346.48 136.706C347.238 135.893 347.802 135.017 348.219 134.062L346.845 133.462C346.494 134.264 346.023 134.996 345.383 135.682L346.48 136.706ZM349.061 131.072C349.139 130.587 349.2 130.086 349.247 129.568L347.753 129.432C347.708 129.922 347.652 130.388 347.58 130.832L349.061 131.072ZM349.247 129.568C349.31 128.872 349.157 128.183 348.868 127.526L347.495 128.129C347.709 128.616 347.788 129.048 347.753 129.432L349.247 129.568ZM346.65 124.555C345.858 123.781 344.927 123.018 343.925 122.286L343.04 123.497C344.002 124.2 344.874 124.917 345.602 125.628L346.65 124.555ZM341.012 120.344C340.009 119.727 338.986 119.144 337.99 118.608L337.279 119.929C338.253 120.453 339.251 121.022 340.227 121.622L341.012 120.344ZM334.885 117.036C334.323 116.77 333.79 116.527 333.301 116.313L332.699 117.687C333.175 117.895 333.693 118.131 334.243 118.392L334.885 117.036ZM333.345 116.334C332.98 116.145 332.583 115.942 332.158 115.726L331.478 117.063C331.9 117.277 332.294 117.479 332.655 117.666L333.345 116.334ZM329.768 114.529C329.004 114.151 328.196 113.757 327.365 113.357L326.715 114.709C327.541 115.106 328.344 115.498 329.103 115.873L329.768 114.529ZM324.949 112.213C324.14 111.835 323.324 111.461 322.517 111.1L321.903 112.468C322.702 112.827 323.512 113.198 324.315 113.572L324.949 112.213ZM320.06 110.027C319.192 109.659 318.354 109.317 317.568 109.015L317.029 110.415C317.796 110.71 318.618 111.045 319.475 111.408L320.06 110.027ZM315.007 108.117C314.511 107.966 314.053 107.846 313.647 107.764L313.353 109.235C313.696 109.304 314.104 109.41 314.57 109.552L315.007 108.117ZM313.647 107.764C313.074 107.65 312.444 107.561 311.779 107.494L311.628 108.987C312.259 109.05 312.839 109.132 313.353 109.235L313.647 107.764ZM308.08 107.311C306.854 107.299 305.602 107.324 304.409 107.371L304.468 108.87C305.642 108.824 306.869 108.799 308.065 108.811L308.08 107.311ZM300.75 107.588C300.055 107.643 299.435 107.7 298.921 107.754L299.079 109.246C299.578 109.193 300.185 109.137 300.868 109.083L300.75 107.588Z"
      />
    </svg>
  );
};

export default SoyokgihangPath;
