import React from 'react';
import { cn } from '@/shared/lib';

const ConnectionSlopePath = ({ color }: { color?: string }) => {
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
        d="M146 163L154.65 162.576L149.958 155.297L146 163ZM148.077 162.554C148.425 162.33 148.527 161.867 148.304 161.518C148.08 161.169 147.616 161.067 147.268 161.291L148.077 162.554ZM150.643 159.154C150.292 159.374 150.185 159.837 150.405 160.188C150.625 160.539 151.088 160.645 151.439 160.425L150.643 159.154ZM154.836 158.316C155.188 158.099 155.298 157.637 155.081 157.285C154.864 156.932 154.402 156.822 154.049 157.039L154.836 158.316ZM157.452 154.958C157.098 155.173 156.985 155.635 157.201 155.989C157.416 156.343 157.877 156.455 158.231 156.24L157.452 154.958ZM161.65 154.176C162.006 153.962 162.121 153.502 161.907 153.146C161.694 152.791 161.233 152.676 160.878 152.89L161.65 154.176ZM164.307 150.841C163.951 151.053 163.834 151.513 164.046 151.869C164.257 152.225 164.718 152.342 165.074 152.13L164.307 150.841ZM168.507 150.098C168.863 149.887 168.982 149.427 168.772 149.071C168.561 148.714 168.102 148.595 167.745 148.806L168.507 150.098ZM171.192 146.781C170.835 146.99 170.715 147.449 170.924 147.807C171.133 148.164 171.592 148.284 171.95 148.075L171.192 146.781ZM175.397 146.065C175.755 145.857 175.877 145.398 175.668 145.039C175.46 144.681 175.001 144.56 174.643 144.768L175.397 146.065ZM178.099 142.765C177.741 142.972 177.618 143.431 177.825 143.79C178.032 144.148 178.491 144.271 178.85 144.064L178.099 142.765ZM182.309 142.071C182.668 141.865 182.792 141.406 182.585 141.047C182.379 140.688 181.92 140.564 181.561 140.77L182.309 142.071ZM185.027 138.784C184.667 138.99 184.542 139.448 184.748 139.808C184.953 140.167 185.412 140.292 185.771 140.087L185.027 138.784ZM189.24 138.108C189.6 137.904 189.726 137.446 189.521 137.086C189.317 136.726 188.859 136.6 188.499 136.805L189.24 138.108ZM191.973 134.833C191.613 135.037 191.486 135.495 191.69 135.855C191.894 136.215 192.352 136.342 192.712 136.138L191.973 134.833ZM196.184 134.176C196.545 133.973 196.672 133.516 196.469 133.155C196.265 132.794 195.808 132.666 195.447 132.87L196.184 134.176ZM198.933 130.909C198.572 131.111 198.444 131.569 198.646 131.93C198.849 132.291 199.306 132.419 199.668 132.217L198.933 130.909ZM203.15 130.266C203.511 130.064 203.64 129.607 203.438 129.245C203.236 128.884 202.779 128.754 202.418 128.957L203.15 130.266ZM205.905 127.011C205.543 127.213 205.413 127.669 205.614 128.031C205.816 128.393 206.272 128.523 206.634 128.322L205.905 127.011ZM210.127 126.382C210.489 126.181 210.62 125.724 210.419 125.362C210.218 125 209.762 124.869 209.399 125.07L210.127 126.382ZM212.895 123.136C212.533 123.336 212.401 123.792 212.601 124.155C212.801 124.518 213.258 124.649 213.62 124.449L212.895 123.136ZM217.107 122.529C217.471 122.33 217.603 121.874 217.404 121.511C217.204 121.148 216.749 121.015 216.385 121.215L217.107 122.529ZM219.891 119.295C219.528 119.493 219.394 119.949 219.592 120.313C219.791 120.676 220.246 120.81 220.61 120.612L219.891 119.295ZM151.439 160.425C152.537 159.737 153.671 159.034 154.836 158.316L154.049 157.039C152.881 157.758 151.744 158.464 150.643 159.154L151.439 160.425ZM158.231 156.24C159.349 155.561 160.49 154.872 161.65 154.176L160.878 152.89C159.716 153.587 158.573 154.278 157.452 154.958L158.231 156.24ZM165.074 152.13C166.205 151.458 167.35 150.78 168.507 150.098L167.745 148.806C166.587 149.488 165.44 150.167 164.307 150.841L165.074 152.13ZM171.95 148.075C173.092 147.407 174.242 146.736 175.397 146.065L174.643 144.768C173.487 145.44 172.336 146.111 171.192 146.781L171.95 148.075ZM178.85 144.064C180.001 143.398 181.155 142.734 182.309 142.071L181.561 140.77C180.407 141.434 179.252 142.099 178.099 142.765L178.85 144.064ZM185.771 140.087C186.931 139.423 188.089 138.764 189.24 138.108L188.499 136.805C187.346 137.46 186.188 138.121 185.027 138.784L185.771 140.087ZM192.712 136.138C193.879 135.477 195.037 134.823 196.184 134.176L195.447 132.87C194.3 133.517 193.141 134.172 191.973 134.833L192.712 136.138ZM199.668 132.217C200.845 131.555 202.007 130.904 203.15 130.266L202.418 128.957C201.274 129.596 200.112 130.247 198.933 130.909L199.668 132.217ZM206.634 128.322C207.827 127.658 208.992 127.01 210.127 126.382L209.399 125.07C208.264 125.699 207.098 126.347 205.905 127.011L206.634 128.322ZM213.62 124.449C214.831 123.781 215.996 123.14 217.107 122.529L216.385 121.215C215.273 121.825 214.107 122.467 212.895 123.136L213.62 124.449ZM220.61 120.612C221.216 120.281 221.799 119.963 222.358 119.659L221.642 118.341C221.082 118.646 220.498 118.964 219.891 119.295L220.61 120.612Z"
      />
    </svg>
  );
};

export default ConnectionSlopePath;