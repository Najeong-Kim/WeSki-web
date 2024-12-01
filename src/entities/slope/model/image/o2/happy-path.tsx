import React from 'react';
import { cn } from '@/shared/lib';

const HappyPath = ({ color }: { color?: string }) => {
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
        d="M277.237 21.2115C277.63 21.0805 277.842 20.6558 277.711 20.2628C277.58 19.8699 277.156 19.6575 276.763 19.7885L277.237 21.2115ZM259 26.5L258.763 25.7885C258.729 25.7997 258.696 25.8133 258.664 25.8292L259 26.5ZM250 32L249.52 31.4238L250 32ZM262 99.5L262.735 99.6471L262 99.5ZM245 113.5L253.44 111.559L247.539 105.22L245 113.5ZM246.512 113.117C246.823 112.845 246.855 112.371 246.583 112.059C246.31 111.747 245.836 111.715 245.525 111.988L246.512 113.117ZM247.744 110.215C247.411 110.462 247.342 110.932 247.589 111.264C247.836 111.597 248.305 111.666 248.638 111.419L247.744 110.215ZM250.885 109.826C251.227 109.593 251.314 109.126 251.081 108.784C250.847 108.442 250.38 108.354 250.038 108.588L250.885 109.826ZM252.359 107.032C252.014 107.261 251.919 107.726 252.148 108.071C252.377 108.417 252.842 108.511 253.188 108.282L252.359 107.032ZM255.509 106.737C255.852 106.506 255.943 106.04 255.711 105.696C255.48 105.353 255.014 105.262 254.67 105.493L255.509 106.737ZM256.934 103.918C256.599 104.162 256.525 104.631 256.769 104.966C257.012 105.301 257.481 105.375 257.816 105.131L256.934 103.918ZM260.055 103.367C260.367 103.094 260.398 102.62 260.125 102.309C259.852 101.997 259.379 101.966 259.067 102.239L260.055 103.367ZM260.816 100.35C260.588 100.696 260.684 101.162 261.03 101.389C261.376 101.617 261.841 101.521 262.069 101.175L260.816 100.35ZM262.432 97.4928C262.208 97.145 261.743 97.0455 261.395 97.2704C261.048 97.4954 260.948 97.9598 261.173 98.3075L262.432 97.4928ZM258.777 97.5692C259.191 97.5855 259.54 97.2633 259.556 96.8494C259.573 96.4355 259.251 96.0867 258.837 96.0704L258.777 97.5692ZM255.439 96.2159C255.026 96.2548 254.723 96.6206 254.762 97.033C254.801 97.4454 255.167 97.7481 255.579 97.7093L255.439 96.2159ZM252.314 98.0755C252.726 98.026 253.019 97.6525 252.969 97.2412C252.92 96.83 252.546 96.5368 252.135 96.5863L252.314 98.0755ZM248.867 96.9598C248.455 97.0018 248.155 97.3699 248.197 97.782C248.239 98.194 248.607 98.494 249.019 98.452L248.867 96.9598ZM245.685 98.7095C246.098 98.6905 246.418 98.3397 246.4 97.9259C246.381 97.5122 246.03 97.1921 245.616 97.211L245.685 98.7095ZM242.58 97.2401C242.166 97.2342 241.825 97.5651 241.819 97.9793C241.813 98.3935 242.144 98.734 242.558 98.74L242.58 97.2401ZM239.67 98.6492C240.084 98.67 240.436 98.3515 240.457 97.9378C240.478 97.5241 240.159 97.1719 239.745 97.1511L239.67 98.6492ZM236.927 96.9444C236.514 96.9036 236.147 97.2047 236.106 97.6169C236.066 98.0292 236.367 98.3963 236.779 98.4371L236.927 96.9444ZM233.891 98.0597C234.3 98.1277 234.686 97.8516 234.754 97.4431C234.822 97.0345 234.546 96.6481 234.137 96.5801L233.891 98.0597ZM231.409 95.9998C231.009 95.8931 230.598 96.131 230.491 96.5313C230.384 96.9315 230.622 97.3425 231.023 97.4492L231.409 95.9998ZM228.211 96.4908C228.591 96.6549 229.033 96.4796 229.197 96.0993C229.361 95.719 229.186 95.2777 228.805 95.1136L228.211 96.4908ZM226.479 93.7913C226.148 93.5412 225.678 93.6062 225.428 93.9365C225.178 94.2667 225.243 94.7371 225.573 94.9871L226.479 93.7913ZM223.457 92.6851C223.671 93.0397 224.132 93.1535 224.487 92.9393C224.841 92.7251 224.955 92.2641 224.741 91.9095L223.457 92.6851ZM224.018 89.4824C224.03 89.0683 223.704 88.7231 223.29 88.7113C222.876 88.6994 222.531 89.0255 222.519 89.4395L224.018 89.4824ZM223.632 86.1378C223.41 86.4876 223.514 86.951 223.863 87.1729C224.213 87.3947 224.677 87.2909 224.898 86.9411L223.632 86.1378ZM226.795 84.688C227.092 84.3991 227.098 83.9243 226.809 83.6274C226.521 83.3306 226.046 83.3241 225.749 83.613L226.795 84.688ZM228.164 81.5149C227.841 81.7731 227.787 82.245 228.046 82.5689C228.304 82.8927 228.776 82.946 229.1 82.6878L228.164 81.5149ZM231.565 80.7892C231.895 80.5378 231.958 80.0672 231.706 79.738C231.455 79.4088 230.984 79.3457 230.655 79.597L231.565 80.7892ZM233.002 77.6691C232.703 77.9561 232.694 78.4309 232.981 78.7296C233.268 79.0283 233.743 79.0377 234.041 78.7507L233.002 77.6691ZM235.904 76.1581C236.15 75.8248 236.079 75.3552 235.746 75.1094C235.412 74.8635 234.943 74.9344 234.697 75.2678L235.904 76.1581ZM236.866 72.9289C236.556 73.2039 236.527 73.6779 236.802 73.9877C237.077 74.2975 237.551 74.3258 237.861 74.0509L236.866 72.9289ZM240.191 72.3154C240.543 72.0977 240.652 71.6356 240.435 71.2831C240.217 70.9307 239.755 70.8215 239.402 71.0392L240.191 72.3154ZM242.287 69.6508C241.895 69.7835 241.684 70.2091 241.817 70.6015C241.95 70.9939 242.376 71.2044 242.768 71.0717L242.287 69.6508ZM245.715 70.444C246.119 70.3531 246.373 69.9519 246.282 69.5477C246.191 69.1436 245.79 68.8896 245.386 68.9805L245.715 70.444ZM248.311 68.1106C247.924 68.256 247.727 68.6883 247.872 69.0761C248.018 69.464 248.45 69.6605 248.838 69.5151L248.311 68.1106ZM251.811 68.0956C252.165 67.8797 252.276 67.4182 252.06 67.0646C251.845 66.7111 251.383 66.5994 251.03 66.8152L251.811 68.0956ZM253.189 64.9555C252.943 65.2887 253.014 65.7583 253.347 66.0043C253.68 66.2504 254.15 66.1797 254.396 65.8464L253.189 64.9555ZM254.556 62.1605C254.272 61.8591 253.798 61.845 253.496 62.129C253.195 62.4131 253.181 62.8878 253.465 63.1892L254.556 62.1605ZM251.227 61.7116C251.597 61.8969 252.048 61.7469 252.233 61.3765C252.419 61.0061 252.269 60.5555 251.898 60.3702L251.227 61.7116ZM249.116 59.1648C248.729 59.0165 248.295 59.2097 248.147 59.5965C247.998 59.9832 248.192 60.417 248.578 60.5653L249.116 59.1648ZM245.818 59.5937C246.212 59.722 246.635 59.5067 246.763 59.1129C246.892 58.719 246.676 58.2958 246.283 58.1675L245.818 59.5937ZM243.43 57.2948C243.032 57.1799 242.617 57.4095 242.502 57.8074C242.387 58.2054 242.617 58.6211 243.015 58.736L243.43 57.2948ZM240.177 57.958C240.578 58.0626 240.987 57.8225 241.092 57.4217C241.197 57.0209 240.957 56.6112 240.556 56.5066L240.177 57.958ZM237.667 55.7858C237.264 55.6896 236.86 55.9383 236.764 56.3412C236.667 56.7441 236.916 57.1487 237.319 57.2448L237.667 55.7858ZM234.446 56.5873C234.851 56.6761 235.251 56.4201 235.34 56.0155C235.428 55.6109 235.172 55.2109 234.768 55.1222L234.446 56.5873ZM231.858 54.5098C231.452 54.4279 231.057 54.6907 230.975 55.0967C230.893 55.5028 231.156 55.8983 231.562 55.9802L231.858 54.5098ZM228.667 55.4213C229.074 55.4964 229.465 55.2272 229.541 54.8198C229.616 54.4125 229.347 54.0214 228.939 53.9462L228.667 55.4213ZM226.011 53.4312C225.603 53.363 225.216 53.6388 225.148 54.0474C225.079 54.4559 225.355 54.8425 225.764 54.9107L226.011 53.4312ZM222.854 54.4515C223.264 54.5122 223.645 54.2293 223.706 53.8196C223.767 53.4099 223.484 53.0285 223.074 52.9677L222.854 54.4515ZM220.245 52.5598C219.836 52.497 219.453 52.778 219.39 53.1874C219.328 53.5968 219.609 53.9796 220.018 54.0424L220.245 52.5598ZM217.257 53.5612C217.663 53.6423 218.058 53.3788 218.139 52.9726C218.22 52.5664 217.957 52.1714 217.55 52.0903L217.257 53.5612ZM214.942 51.4614C214.545 51.3425 214.127 51.5679 214.008 51.9647C213.889 52.3615 214.115 52.7795 214.512 52.8983L214.942 51.4614ZM211.718 51.5233C212.005 51.822 212.48 51.8315 212.778 51.5445C213.077 51.2575 213.086 50.7827 212.799 50.484L211.718 51.5233ZM213.815 49.7919C214.194 49.6268 214.368 49.185 214.203 48.8051C214.038 48.4252 213.596 48.2512 213.216 48.4163L213.815 49.7919ZM215.977 47.5495C215.574 47.6438 215.323 48.0472 215.417 48.4505C215.512 48.8539 215.915 49.1044 216.318 49.0101L215.977 47.5495ZM219.091 48.4409C219.495 48.3496 219.749 47.9481 219.657 47.544C219.566 47.14 219.165 46.8865 218.761 46.9777L219.091 48.4409ZM221.511 46.2355C221.116 46.3599 220.896 46.781 221.021 47.1761C221.145 47.5712 221.566 47.7907 221.961 47.6664L221.511 46.2355ZM224.758 46.6546C225.142 46.4971 225.324 46.0589 225.167 45.6758C225.009 45.2927 224.571 45.1098 224.188 45.2673L224.758 46.6546ZM226.764 44.0686C226.397 44.2609 226.256 44.7142 226.448 45.081C226.64 45.4479 227.094 45.5894 227.46 45.3971L226.764 44.0686ZM230.033 43.8742C230.377 43.6442 230.47 43.1784 230.24 42.834C230.01 42.4895 229.544 42.3967 229.2 42.6267L230.033 43.8742ZM231.443 40.924C231.13 41.1952 231.096 41.6688 231.367 41.9819C231.638 42.295 232.112 42.329 232.425 42.0578L231.443 40.924ZM234.656 40.074C234.99 39.8283 235.061 39.3588 234.816 39.0253C234.57 38.6918 234.1 38.6205 233.767 38.8661L234.656 40.074ZM236.598 37.1593C236.228 37.3473 236.082 37.7989 236.27 38.168C236.458 38.5371 236.909 38.6839 237.278 38.4959L236.598 37.1593ZM240.124 37.1976C240.506 37.0382 240.687 36.599 240.527 36.2167C240.368 35.8344 239.929 35.6537 239.546 35.8131L240.124 37.1976ZM242.529 34.6312C242.142 34.7796 241.949 35.2134 242.097 35.6001C242.245 35.9869 242.679 36.1801 243.066 36.0317L242.529 34.6312ZM246.048 34.8753C246.433 34.7207 246.619 34.2838 246.464 33.8995C246.31 33.5152 245.873 33.329 245.488 33.4836L246.048 34.8753ZM248.313 32.2071C247.948 32.4041 247.813 32.8592 248.01 33.2236C248.207 33.5879 248.662 33.7235 249.026 33.5265L248.313 32.2071ZM251.484 31.8008C251.82 31.5578 251.895 31.0889 251.652 30.7534C251.409 30.418 250.94 30.3431 250.604 30.5861L251.484 31.8008ZM252.844 29.0913C252.493 29.3107 252.386 29.7734 252.605 30.1247C252.825 30.4761 253.287 30.5831 253.639 30.3637L252.844 29.0913ZM255.883 29.0275C256.243 28.8222 256.368 28.3642 256.163 28.0044C255.957 27.6446 255.499 27.5193 255.14 27.7246L255.883 29.0275ZM257.477 26.4411C257.11 26.6345 256.97 27.0883 257.164 27.4546C257.357 27.8208 257.811 27.961 258.177 27.7676L257.477 26.4411ZM260.737 26.7115C261.13 26.5805 261.342 26.1558 261.211 25.7628C261.08 25.3699 260.656 25.1575 260.263 25.2885L260.737 26.7115ZM263.263 24.2885C262.87 24.4195 262.657 24.8442 262.788 25.2372C262.919 25.6301 263.344 25.8425 263.737 25.7115L263.263 24.2885ZM266.737 24.7115C267.13 24.5805 267.342 24.1558 267.211 23.7628C267.08 23.3699 266.656 23.1575 266.263 23.2885L266.737 24.7115ZM269.263 22.2885C268.87 22.4195 268.657 22.8442 268.788 23.2372C268.919 23.6301 269.344 23.8425 269.737 23.7115L269.263 22.2885ZM272.737 22.7115C273.13 22.5805 273.342 22.1558 273.211 21.7628C273.08 21.3699 272.656 21.1575 272.263 21.2885L272.737 22.7115ZM275.263 20.2885C274.87 20.4195 274.657 20.8442 274.788 21.2372C274.919 21.6301 275.344 21.8425 275.737 21.7115L275.263 20.2885ZM248.638 111.419C249.354 110.888 250.109 110.357 250.885 109.826L250.038 108.588C249.253 109.125 248.48 109.668 247.744 110.215L248.638 111.419ZM253.188 108.282C253.969 107.764 254.751 107.248 255.509 106.737L254.67 105.493C253.919 106 253.143 106.512 252.359 107.032L253.188 108.282ZM257.816 105.131C258.631 104.539 259.39 103.95 260.055 103.367L259.067 102.239C258.447 102.781 257.727 103.341 256.934 103.918L257.816 105.131ZM262.069 101.175C262.388 100.69 262.629 100.179 262.735 99.6471L261.264 99.3529C261.206 99.6423 261.064 99.9739 260.816 100.35L262.069 101.175ZM262.735 99.6471C262.896 98.843 262.827 98.1031 262.432 97.4928L261.173 98.3075C261.291 98.4891 261.376 98.7955 261.264 99.3529L262.735 99.6471ZM258.837 96.0704C257.834 96.0307 256.676 96.0992 255.439 96.2159L255.579 97.7093C256.796 97.5946 257.875 97.5335 258.777 97.5692L258.837 96.0704ZM252.135 96.5863C251.067 96.715 249.971 96.8472 248.867 96.9598L249.019 98.452C250.139 98.3379 251.249 98.2039 252.314 98.0755L252.135 96.5863ZM245.616 97.211C245.07 97.236 244.53 97.25 244 97.25V98.75C244.556 98.75 245.119 98.7354 245.685 98.7095L245.616 97.211ZM244 97.25C243.53 97.25 243.056 97.2469 242.58 97.2401L242.558 98.74C243.043 98.7469 243.524 98.75 244 98.75V97.25ZM239.745 97.1511C238.799 97.1035 237.855 97.0362 236.927 96.9444L236.779 98.4371C237.735 98.5317 238.703 98.6005 239.67 98.6492L239.745 97.1511ZM234.137 96.5801C233.189 96.4222 232.275 96.2306 231.409 95.9998L231.023 97.4492C231.942 97.6942 232.904 97.8953 233.891 98.0597L234.137 96.5801ZM228.805 95.1136C227.925 94.7337 227.144 94.2949 226.479 93.7913L225.573 94.9871C226.353 95.5776 227.244 96.0734 228.211 96.4908L228.805 95.1136ZM224.741 91.9095C224.525 91.5522 224.347 91.1708 224.211 90.7628L222.788 91.2372C222.96 91.752 223.184 92.2342 223.457 92.6851L224.741 91.9095ZM224.211 90.7628C224.065 90.3254 224.006 89.8997 224.018 89.4824L222.519 89.4395C222.502 90.0323 222.587 90.6331 222.788 91.2372L224.211 90.7628ZM224.898 86.9411C225.381 86.1803 226.034 85.4282 226.795 84.688L225.749 83.613C224.938 84.4019 224.198 85.2448 223.632 86.1378L224.898 86.9411ZM229.1 82.6878C229.932 82.0239 230.772 81.3955 231.565 80.7892L230.655 79.597C229.876 80.1921 229.014 80.838 228.164 81.5149L229.1 82.6878ZM234.041 78.7507C234.511 78.2994 234.926 77.8243 235.171 77.3354L233.829 76.6646C233.7 76.9217 233.433 77.2545 233.002 77.6691L234.041 78.7507ZM235.171 77.3354C235.359 76.9581 235.606 76.5625 235.904 76.1581L234.697 75.2678C234.357 75.7283 234.063 76.1972 233.829 76.6646L235.171 77.3354ZM237.861 74.0509C238.579 73.4136 239.372 72.8207 240.191 72.3154L239.402 71.0392C238.509 71.5911 237.646 72.2359 236.866 72.9289L237.861 74.0509ZM242.768 71.0717C243.234 70.914 243.683 70.8028 244.106 70.7425L243.894 69.2575C243.365 69.333 242.826 69.4686 242.287 69.6508L242.768 71.0717ZM244.106 70.7425C244.604 70.6714 245.146 70.5717 245.715 70.444L245.386 68.9805C244.853 69.1002 244.349 69.1924 243.894 69.2575L244.106 70.7425ZM248.838 69.5151C249.866 69.1298 250.89 68.6578 251.811 68.0956L251.03 66.8152C250.207 67.317 249.273 67.75 248.311 68.1106L248.838 69.5151ZM254.396 65.8464C254.763 65.3491 255.051 64.8023 255.221 64.206L253.779 63.794C253.665 64.1923 253.467 64.5794 253.189 64.9555L254.396 65.8464ZM255.221 64.206C255.449 63.4093 255.063 62.6986 254.556 62.1605L253.465 63.1892C253.821 63.5677 253.792 63.7457 253.779 63.794L255.221 64.206ZM251.898 60.3702C251.091 59.9661 250.154 59.5631 249.116 59.1648L248.578 60.5653C249.585 60.9515 250.475 61.3352 251.227 61.7116L251.898 60.3702ZM246.283 58.1675C245.378 57.8729 244.424 57.5814 243.43 57.2948L243.015 58.736C243.994 59.0185 244.932 59.305 245.818 59.5937L246.283 58.1675ZM240.556 56.5066C239.614 56.2609 238.649 56.0202 237.667 55.7858L237.319 57.2448C238.291 57.477 239.246 57.7151 240.177 57.958L240.556 56.5066ZM234.768 55.1222C233.805 54.9109 232.833 54.7064 231.858 54.5098L231.562 55.9802C232.528 56.1752 233.492 56.3779 234.446 56.5873L234.768 55.1222ZM228.939 53.9462C227.958 53.765 226.979 53.593 226.011 53.4312L225.764 54.9107C226.724 55.0711 227.694 55.2416 228.667 55.4213L228.939 53.9462ZM223.074 52.9677C222.579 52.8943 222.088 52.824 221.602 52.757L221.397 54.243C221.878 54.3092 222.363 54.3788 222.854 54.4515L223.074 52.9677ZM221.602 52.757C221.129 52.6917 220.677 52.626 220.245 52.5598L220.018 54.0424C220.457 54.1098 220.917 54.1767 221.397 54.243L221.602 52.757ZM217.55 52.0903C216.499 51.8804 215.637 51.6697 214.942 51.4614L214.512 52.8983C215.264 53.1236 216.173 53.3449 217.257 53.5612L217.55 52.0903ZM212.799 50.484C212.715 50.3966 212.741 50.3819 212.745 50.4378C212.749 50.4971 212.721 50.5078 212.763 50.4506C212.877 50.2979 213.199 50.0595 213.815 49.7919L213.216 48.4163C212.562 48.701 211.924 49.0675 211.561 49.554C211.365 49.8164 211.219 50.1554 211.249 50.5492C211.278 50.9397 211.47 51.2658 211.718 51.5233L212.799 50.484ZM216.318 49.0101C216.745 48.9102 217.187 48.8191 217.634 48.7379L217.366 47.2621C216.896 47.3474 216.43 47.4435 215.977 47.5495L216.318 49.0101ZM217.634 48.7379C218.117 48.6502 218.603 48.5511 219.091 48.4409L218.761 46.9777C218.293 47.0834 217.827 47.1782 217.366 47.2621L217.634 48.7379ZM221.961 47.6664C222.901 47.3708 223.837 47.0336 224.758 46.6546L224.188 45.2673C223.307 45.6295 222.411 45.9523 221.511 46.2355L221.961 47.6664ZM227.46 45.3971C228.347 44.9324 229.208 44.4249 230.033 43.8742L229.2 42.6267C228.422 43.146 227.607 43.6268 226.764 44.0686L227.46 45.3971ZM232.425 42.0578C232.807 41.7272 233.176 41.3847 233.53 41.0303L232.469 39.9697C232.141 40.2977 231.799 40.6158 231.443 40.924L232.425 42.0578ZM233.53 41.0303C233.858 40.7028 234.235 40.3843 234.656 40.074L233.767 38.8661C233.296 39.2127 232.86 39.5796 232.469 39.9697L233.53 41.0303ZM237.278 38.4959C238.175 38.0391 239.137 37.6091 240.124 37.1976L239.546 35.8131C238.538 36.2335 237.54 36.6795 236.598 37.1593L237.278 38.4959ZM243.066 36.0317C244.094 35.6374 245.109 35.2532 246.048 34.8753L245.488 33.4836C244.564 33.8557 243.566 34.2333 242.529 34.6312L243.066 36.0317ZM249.026 33.5265C249.577 33.2287 250.074 32.9142 250.48 32.5762L249.52 31.4238C249.218 31.6748 248.815 31.9354 248.313 32.2071L249.026 33.5265ZM250.48 32.5762C250.778 32.3276 251.116 32.0678 251.484 31.8008L250.604 30.5861C250.215 30.868 249.85 31.1488 249.52 31.4238L250.48 32.5762ZM253.639 30.3637C254.38 29.9009 255.146 29.4481 255.883 29.0275L255.14 27.7246C254.389 28.1529 253.606 28.616 252.844 29.0913L253.639 30.3637ZM258.177 27.7676C258.62 27.5339 259.013 27.3321 259.335 27.1708L258.664 25.8292C258.331 25.996 257.928 26.203 257.477 26.4411L258.177 27.7676ZM259.237 27.2115L260.737 26.7115L260.263 25.2885L258.763 25.7885L259.237 27.2115ZM263.737 25.7115L266.737 24.7115L266.263 23.2885L263.263 24.2885L263.737 25.7115ZM269.737 23.7115L272.737 22.7115L272.263 21.2885L269.263 22.2885L269.737 23.7115ZM275.737 21.7115L277.237 21.2115L276.763 19.7885L275.263 20.2885L275.737 21.7115Z"
      />
    </svg>
  );
};

export default HappyPath;