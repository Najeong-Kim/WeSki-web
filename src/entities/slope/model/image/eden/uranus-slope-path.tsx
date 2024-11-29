import React from 'react';
import { cn } from '@/shared/lib';

const UranusSlopePath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 375 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#447EFF]')}
        d="M261.5 13.9995L261.429 14.7461C261.5 14.7529 261.572 14.7495 261.642 14.736L261.5 13.9995ZM291 27.4997L290.321 27.8191L291 27.4997ZM242.5 153L248.26 146.533L239.78 144.778L242.5 153ZM242.214 15.806C241.831 15.9637 241.649 16.4021 241.806 16.7851C241.964 17.1681 242.403 17.3507 242.786 17.193L242.214 15.806ZM244.25 16.6426C244.642 16.5084 244.85 16.0819 244.716 15.69C244.582 15.2982 244.155 15.0893 243.764 15.2236L244.25 16.6426ZM246.93 14.3179C246.527 14.4128 246.277 14.8167 246.372 15.2198C246.467 15.623 246.871 15.8729 247.274 15.778L246.93 14.3179ZM250.378 15.1786C250.787 15.1155 251.068 14.7325 251.005 14.3231C250.942 13.9138 250.559 13.633 250.149 13.6961L250.378 15.1786ZM253.396 13.3074C252.983 13.3433 252.678 13.707 252.714 14.1196C252.749 14.5323 253.113 14.8377 253.526 14.8018L253.396 13.3074ZM256.696 14.623C257.11 14.6123 257.437 14.2679 257.426 13.8538C257.415 13.4397 257.071 13.1128 256.657 13.1235L256.696 14.623ZM259.926 13.1444C259.513 13.127 259.163 13.4484 259.146 13.8623C259.128 14.2761 259.45 14.6257 259.864 14.6431L259.926 13.1444ZM262.973 14.5747C263.386 14.5446 263.697 14.1854 263.667 13.7723C263.637 13.3591 263.277 13.0486 262.864 13.0786L262.973 14.5747ZM265.815 13.0334C265.401 13.0201 265.054 13.3449 265.041 13.7589C265.027 14.1729 265.352 14.5194 265.766 14.5327L265.815 13.0334ZM268.577 14.7323C268.989 14.7769 269.359 14.4793 269.403 14.0675C269.448 13.6557 269.15 13.2857 268.738 13.241L268.577 14.7323ZM271.635 13.6599C271.227 13.586 270.837 13.8565 270.763 14.2641C270.689 14.6717 270.96 15.062 271.367 15.1359L271.635 13.6599ZM274.122 15.7405C274.523 15.8445 274.932 15.6037 275.036 15.2027C275.14 14.8018 274.899 14.3925 274.498 14.2885L274.122 15.7405ZM277.304 15.1367C276.913 15.0006 276.486 15.2075 276.35 15.5987C276.214 15.9899 276.421 16.4174 276.812 16.5534L277.304 15.1367ZM279.417 17.5915C279.795 17.7624 280.239 17.5952 280.41 17.2179C280.581 16.8406 280.414 16.3962 280.037 16.2252L279.417 17.5915ZM282.659 17.5764C282.301 17.3676 281.842 17.4883 281.633 17.8461C281.424 18.2038 281.545 18.6631 281.902 18.8719L282.659 17.5764ZM284.222 20.41C284.553 20.659 285.024 20.5925 285.273 20.2615C285.522 19.9305 285.455 19.4603 285.124 19.2113L284.222 20.41ZM287.377 21.1436C287.081 20.8538 286.606 20.8588 286.317 21.1548C286.027 21.4508 286.032 21.9256 286.328 22.2154L287.377 21.1436ZM288.165 24.2829C288.418 24.6112 288.889 24.6726 289.217 24.42C289.545 24.1675 289.607 23.6966 289.354 23.3683L288.165 24.2829ZM290.996 25.8552C290.794 25.494 290.337 25.3654 289.975 25.5681C289.614 25.7708 289.486 26.2279 289.688 26.5891L290.996 25.8552ZM291.001 29.2074C291.189 29.5767 291.64 29.724 292.009 29.5365C292.379 29.3489 292.526 28.8975 292.338 28.5282L291.001 29.2074ZM293.769 31.1805C293.565 30.8203 293.107 30.6943 292.747 30.8989C292.387 31.1036 292.26 31.5614 292.465 31.9215L293.769 31.1805ZM294.03 34.5692C294.246 34.9226 294.708 35.0339 295.061 34.8179C295.415 34.6019 295.526 34.1402 295.31 33.7868L294.03 34.5692ZM296.921 36.3603C296.698 36.0111 296.234 35.9086 295.885 36.1314C295.536 36.3542 295.433 36.8179 295.656 37.1671L296.921 36.3603ZM297.313 39.7361C297.538 40.0835 298.003 40.1823 298.35 39.9568C298.698 39.7313 298.797 39.2668 298.571 38.9194L297.313 39.7361ZM300.231 41.481C300.007 41.1328 299.543 41.0324 299.194 41.2568C298.846 41.4811 298.746 41.9452 298.97 42.2934L300.231 41.481ZM300.6 44.8598C300.819 45.2114 301.281 45.3188 301.633 45.0998C301.984 44.8809 302.092 44.4183 301.873 44.0667L300.6 44.8598ZM303.463 46.6968C303.254 46.339 302.795 46.2181 302.437 46.4268C302.08 46.6355 301.959 47.0947 302.167 47.4525L303.463 46.6968ZM303.63 50.088C303.822 50.455 304.275 50.597 304.642 50.405C305.009 50.2131 305.151 49.7599 304.959 49.3929L303.63 50.088ZM306.305 52.1836C306.139 51.8042 305.697 51.6313 305.317 51.7975C304.938 51.9637 304.765 52.406 304.931 52.7854L306.305 52.1836ZM305.995 55.5639C306.123 55.9581 306.545 56.1745 306.94 56.0473C307.334 55.92 307.55 55.4973 307.423 55.1031L305.995 55.5639ZM308.186 58.1643C308.117 57.756 307.729 57.4813 307.321 57.5508C306.913 57.6203 306.638 58.0077 306.707 58.416L308.186 58.1643ZM306.926 61.3064C306.915 61.7205 307.241 62.0652 307.656 62.0763C308.07 62.0874 308.414 61.7608 308.425 61.3467L306.926 61.3064ZM307.966 64.5327C308.074 64.1329 307.837 63.7211 307.437 63.6131C307.037 63.505 306.626 63.7416 306.518 64.1414L307.966 64.5327ZM305.442 66.7921C305.243 67.155 305.375 67.6111 305.738 67.8107C306.101 68.0103 306.557 67.8779 306.757 67.515L305.442 66.7921ZM304.932 70.1395C305.2 69.8239 305.162 69.3505 304.846 69.0823C304.531 68.814 304.057 68.8524 303.789 69.168L304.932 70.1395ZM301.717 71.2414C301.404 71.5123 301.369 71.986 301.64 72.2992C301.911 72.6125 302.385 72.6468 302.698 72.3759L301.717 71.2414ZM300.219 74.2761C300.561 74.0422 300.648 73.5755 300.414 73.2336C300.18 72.8918 299.713 72.8043 299.372 73.0383L300.219 74.2761ZM296.861 74.6355C296.51 74.855 296.403 75.3177 296.622 75.669C296.842 76.0203 297.304 76.1272 297.656 75.9077L296.861 74.6355ZM295.181 77.4714C295.53 77.2482 295.632 76.7844 295.408 76.4355C295.185 76.0865 294.721 75.9845 294.372 76.2077L295.181 77.4714ZM291.903 77.8098C291.557 78.0376 291.461 78.5027 291.689 78.8487C291.917 79.1946 292.382 79.2904 292.728 79.0626L291.903 77.8098ZM290.302 80.6868C290.644 80.4536 290.733 79.987 290.499 79.6447C290.266 79.3024 289.8 79.2141 289.457 79.4473L290.302 80.6868ZM287.038 81.1281C286.7 81.3676 286.62 81.8357 286.859 82.1737C287.099 82.5117 287.567 82.5915 287.905 82.3521L287.038 81.1281ZM285.541 84.0627C285.874 83.8164 285.944 83.3468 285.698 83.0137C285.452 82.6807 284.982 82.6103 284.649 82.8565L285.541 84.0627ZM282.296 84.6362C281.968 84.8897 281.908 85.3608 282.161 85.6884C282.415 86.0159 282.886 86.076 283.214 85.8225L282.296 84.6362ZM280.928 87.6345C281.249 87.3733 281.298 86.901 281.037 86.5795C280.776 86.258 280.304 86.2091 279.982 86.4703L280.928 87.6345ZM277.713 88.3612C277.398 88.6303 277.361 89.1038 277.63 89.4186C277.9 89.7334 278.373 89.7704 278.688 89.5013L277.713 88.3612ZM276.498 91.4233C276.806 91.146 276.831 90.6717 276.553 90.3641C276.276 90.0564 275.802 90.0319 275.494 90.3093L276.498 91.4233ZM273.328 92.3161C273.028 92.6018 273.017 93.0765 273.303 93.3765C273.588 93.6764 274.063 93.6879 274.363 93.4022L273.328 92.3161ZM272.283 95.4396C272.575 95.1455 272.573 94.6706 272.279 94.3789C271.985 94.0872 271.51 94.0891 271.219 94.3831L272.283 95.4396ZM269.168 96.5102C268.885 96.8126 268.901 97.2872 269.203 97.5703C269.506 97.8534 269.98 97.8377 270.263 97.5354L269.168 96.5102ZM268.306 99.6892C268.58 99.3786 268.55 98.9047 268.239 98.6306C267.929 98.3566 267.455 98.3862 267.181 98.6968L268.306 99.6892ZM265.259 100.942C264.994 101.26 265.038 101.733 265.356 101.998C265.675 102.263 266.148 102.219 266.412 101.9L265.259 100.942ZM264.586 104.167C264.841 103.841 264.783 103.369 264.457 103.114C264.13 102.859 263.659 102.917 263.404 103.244L264.586 104.167ZM261.619 105.6C261.374 105.934 261.446 106.404 261.78 106.649C262.114 106.894 262.583 106.822 262.828 106.488L261.619 105.6ZM261.141 108.861C261.376 108.52 261.289 108.053 260.948 107.818C260.607 107.583 260.14 107.669 259.905 108.01L261.141 108.861ZM258.264 110.47C258.039 110.818 258.139 111.282 258.487 111.507C258.835 111.731 259.299 111.632 259.524 111.284L258.264 110.47ZM257.982 113.749C258.196 113.395 258.083 112.934 257.729 112.719C257.374 112.505 256.913 112.618 256.699 112.972L257.982 113.749ZM255.207 115.519C255.002 115.879 255.129 116.337 255.489 116.541C255.85 116.746 256.307 116.619 256.512 116.259L255.207 115.519ZM255.113 118.81C255.307 118.444 255.167 117.99 254.801 117.796C254.435 117.602 253.982 117.741 253.788 118.107L255.113 118.81ZM252.441 120.735C252.257 121.106 252.409 121.556 252.78 121.74C253.151 121.924 253.601 121.772 253.785 121.401L252.441 120.735ZM252.526 124.029C252.7 123.653 252.536 123.207 252.16 123.034C251.784 122.86 251.339 123.024 251.165 123.399L252.526 124.029ZM249.959 126.1C249.795 126.481 249.97 126.922 250.35 127.086C250.731 127.25 251.172 127.074 251.336 126.694L249.959 126.1ZM250.216 129.386C250.37 129.001 250.184 128.565 249.799 128.41C249.415 128.256 248.978 128.442 248.824 128.827L250.216 129.386ZM247.761 131.572C247.616 131.96 247.813 132.392 248.201 132.537C248.589 132.682 249.021 132.485 249.166 132.097L247.761 131.572ZM248.18 134.838C248.316 134.447 248.108 134.019 247.717 133.884C247.325 133.748 246.898 133.955 246.763 134.347L248.18 134.838ZM245.827 137.15C245.7 137.544 245.917 137.967 246.312 138.093C246.706 138.22 247.128 138.003 247.255 137.609L245.827 137.15ZM246.393 140.4C246.51 140.003 246.284 139.585 245.887 139.467C245.49 139.349 245.073 139.576 244.955 139.973L246.393 140.4ZM244.148 142.799C244.038 143.198 244.273 143.611 244.673 143.72C245.072 143.83 245.485 143.595 245.594 143.195L244.148 142.799ZM244.852 146.018C244.953 145.616 244.71 145.208 244.308 145.107C243.906 145.005 243.499 145.249 243.397 145.651L244.852 146.018ZM242.701 148.53C242.607 148.933 242.859 149.336 243.262 149.43C243.666 149.523 244.069 149.272 244.162 148.868L242.701 148.53ZM243.534 151.703C243.62 151.298 243.361 150.9 242.956 150.814C242.551 150.728 242.153 150.987 242.067 151.393L243.534 151.703ZM242.786 17.193C243.264 16.9961 243.753 16.8129 244.25 16.6426L243.764 15.2236C243.24 15.403 242.722 15.5968 242.214 15.806L242.786 17.193ZM247.274 15.778C248.306 15.5349 249.348 15.3374 250.378 15.1786L250.149 13.6961C249.085 13.8602 248.004 14.0649 246.93 14.3179L247.274 15.778ZM253.526 14.8018C254.638 14.7049 255.705 14.6488 256.696 14.623L256.657 13.1235C255.638 13.15 254.54 13.2077 253.396 13.3074L253.526 14.8018ZM259.864 14.6431C260.464 14.6682 260.991 14.7044 261.429 14.7461L261.571 13.2529C261.103 13.2083 260.55 13.1705 259.926 13.1444L259.864 14.6431ZM261.642 14.736C261.977 14.6716 262.424 14.6146 262.973 14.5747L262.864 13.0786C262.277 13.1213 261.768 13.1843 261.358 13.263L261.642 14.736ZM265.766 14.5327C266.629 14.5604 267.573 14.6236 268.577 14.7323L268.738 13.241C267.697 13.1282 266.714 13.0624 265.815 13.0334L265.766 14.5327ZM271.367 15.1359C272.265 15.2987 273.188 15.4984 274.122 15.7405L274.498 14.2885C273.526 14.0365 272.567 13.829 271.635 13.6599L271.367 15.1359ZM276.812 16.5534C277.686 16.8574 278.558 17.202 279.417 17.5915L280.037 16.2252C279.133 15.8157 278.218 15.4544 277.304 15.1367L276.812 16.5534ZM281.902 18.8719C282.701 19.3378 283.477 19.8492 284.222 20.41L285.124 19.2113C284.329 18.6132 283.504 18.0697 282.659 17.5764L281.902 18.8719ZM286.328 22.2154C286.98 22.8538 287.595 23.5418 288.165 24.2829L289.354 23.3683C288.74 22.5693 288.077 21.829 287.377 21.1436L286.328 22.2154ZM289.688 26.5891C289.911 26.9863 290.122 27.3961 290.321 27.8191L291.679 27.1804C291.464 26.725 291.237 26.2834 290.996 25.8552L289.688 26.5891ZM290.321 27.8191C290.539 28.2824 290.766 28.7452 291.001 29.2074L292.338 28.5282C292.11 28.0784 291.89 27.6291 291.679 27.1804L290.321 27.8191ZM292.465 31.9215C292.968 32.8065 293.492 33.6894 294.03 34.5692L295.31 33.7868C294.779 32.9177 294.263 32.0489 293.769 31.1805L292.465 31.9215ZM295.656 37.1671C296.205 38.0264 296.759 38.8833 297.313 39.7361L298.571 38.9194C298.018 38.0672 297.466 37.2144 296.921 36.3603L295.656 37.1671ZM298.97 42.2934C299.524 43.1535 300.07 44.0089 300.6 44.8598L301.873 44.0667C301.337 43.207 300.787 42.3447 300.231 41.481L298.97 42.2934ZM302.167 47.4525C302.684 48.338 303.174 49.2166 303.63 50.088L304.959 49.3929C304.491 48.4972 303.989 47.5982 303.463 46.6968L302.167 47.4525ZM304.931 52.7854C305.342 53.7232 305.7 54.6495 305.995 55.5639L307.423 55.1031C307.11 54.1336 306.733 53.16 306.305 52.1836L304.931 52.7854ZM306.707 58.416C306.874 59.397 306.951 60.3604 306.926 61.3064L308.425 61.3467C308.454 60.2919 308.368 59.2302 308.186 58.1643L306.707 58.416ZM306.518 64.1414C306.276 65.0349 305.923 65.9185 305.442 66.7921L306.757 67.515C307.294 66.5378 307.693 65.543 307.966 64.5327L306.518 64.1414ZM303.789 69.168C303.197 69.8644 302.509 70.5559 301.717 71.2414L302.698 72.3759C303.544 71.6448 304.286 70.8993 304.932 70.1395L303.789 69.168ZM299.372 73.0383C298.968 73.3141 298.547 73.5887 298.105 73.8619L298.895 75.1373C299.355 74.8526 299.796 74.5655 300.219 74.2761L299.372 73.0383ZM298.105 73.8619C297.692 74.1175 297.277 74.3754 296.861 74.6355L297.656 75.9077C298.07 75.6487 298.483 75.392 298.895 75.1373L298.105 73.8619ZM294.372 76.2077C293.554 76.7312 292.73 77.2648 291.903 77.8098L292.728 79.0626C293.549 78.5216 294.367 77.9917 295.181 77.4714L294.372 76.2077ZM289.457 79.4473C288.653 79.9955 287.846 80.5554 287.038 81.1281L287.905 82.3521C288.705 81.7849 289.505 81.2302 290.302 80.6868L289.457 79.4473ZM284.649 82.8565C283.865 83.4363 283.08 84.0292 282.296 84.6362L283.214 85.8225C283.989 85.2225 284.765 84.6362 285.541 84.0627L284.649 82.8565ZM279.982 86.4703C279.224 87.0861 278.468 87.716 277.713 88.3612L278.688 89.5013C279.433 88.8646 280.18 88.2426 280.928 87.6345L279.982 86.4703ZM275.494 90.3093C274.769 90.9629 274.047 91.6316 273.328 92.3161L274.363 93.4022C275.071 92.7274 275.783 92.068 276.498 91.4233L275.494 90.3093ZM271.219 94.3831C270.531 95.0763 269.847 95.785 269.168 96.5102L270.263 97.5354C270.932 96.821 271.606 96.1226 272.283 95.4396L271.219 94.3831ZM267.181 98.6968C266.535 99.4289 265.894 100.177 265.259 100.942L266.412 101.9C267.038 101.147 267.669 100.41 268.306 99.6892L267.181 98.6968ZM263.404 103.244C262.803 104.013 262.208 104.798 261.619 105.6L262.828 106.488C263.408 105.698 263.994 104.925 264.586 104.167L263.404 103.244ZM259.905 108.01C259.352 108.814 258.804 109.634 258.264 110.47L259.524 111.284C260.056 110.46 260.595 109.653 261.141 108.861L259.905 108.01ZM256.699 112.972C256.194 113.805 255.697 114.654 255.207 115.519L256.512 116.259C256.995 115.406 257.485 114.57 257.982 113.749L256.699 112.972ZM253.788 118.107C253.331 118.968 252.882 119.843 252.441 120.735L253.785 121.401C254.22 120.521 254.663 119.658 255.113 118.81L253.788 118.107ZM251.165 123.399C250.755 124.285 250.353 125.185 249.959 126.1L251.336 126.694C251.726 125.791 252.122 124.902 252.526 124.029L251.165 123.399ZM248.824 128.827C248.462 129.728 248.108 130.643 247.761 131.572L249.166 132.097C249.509 131.179 249.859 130.275 250.216 129.386L248.824 128.827ZM246.763 134.347C246.443 135.267 246.131 136.202 245.827 137.15L247.255 137.609C247.556 136.671 247.864 135.748 248.18 134.838L246.763 134.347ZM244.955 139.973C244.679 140.902 244.41 141.844 244.148 142.799L245.594 143.195C245.853 142.25 246.12 141.319 246.393 140.4L244.955 139.973ZM243.397 145.651C243.158 146.598 242.926 147.558 242.701 148.53L244.162 148.868C244.385 147.905 244.615 146.955 244.852 146.018L243.397 145.651Z"
      />
    </svg>
  );
};

export default UranusSlopePath;