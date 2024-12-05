import React from 'react';
import { cn } from '@/shared/lib';

const Techno2Path = ({ color }: { color?: string }) => {
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
        d="M169.5 52.5005L170.14 52.1094L169.5 52.5005ZM204 70.0005L203.408 70.4609L204 70.0005ZM214.5 83.5005L213.313 74.9219L206.477 80.2388L214.5 83.5005ZM148.625 46.0816C149.038 46.0607 149.357 45.7084 149.336 45.2947C149.315 44.881 148.963 44.5626 148.549 44.5835L148.625 46.0816ZM152.821 44.5852C152.407 44.5646 152.055 44.8832 152.035 45.2969C152.014 45.7106 152.333 46.0627 152.746 46.0834L152.821 44.5852ZM156.838 46.5015C157.247 46.5664 157.631 46.2874 157.696 45.8783C157.761 45.4692 157.482 45.085 157.073 45.0201L156.838 46.5015ZM161.263 45.9737C160.867 45.8521 160.448 46.0746 160.326 46.4706C160.205 46.8666 160.427 47.2861 160.823 47.4077L161.263 45.9737ZM164.548 48.9544C164.911 49.1546 165.367 49.0229 165.567 48.6603C165.768 48.2977 165.636 47.8415 165.273 47.6412L164.548 48.9544ZM168.78 50.323C168.498 50.0198 168.024 50.0028 167.72 50.285C167.417 50.5672 167.4 51.0418 167.682 51.345L168.78 50.323ZM170.15 54.5729C170.433 54.8749 170.908 54.8901 171.21 54.6067C171.512 54.3233 171.527 53.8487 171.244 53.5466L170.15 54.5729ZM174.168 55.8399C173.813 55.626 173.352 55.7401 173.138 56.0948C172.924 56.4495 173.038 56.9104 173.393 57.1244L174.168 55.8399ZM177.012 58.9316C177.393 59.0925 177.833 58.9135 177.994 58.5318C178.155 58.1501 177.976 57.7102 177.594 57.5494L177.012 58.9316ZM181.23 58.9099C180.838 58.7773 180.412 58.9878 180.279 59.3802C180.147 59.7726 180.357 60.1982 180.749 60.3309L181.23 58.9099ZM184.522 61.5307C184.919 61.6513 185.338 61.4279 185.458 61.0316C185.579 60.6353 185.355 60.2163 184.959 60.0957L184.522 61.5307ZM188.729 61.2345C188.333 61.1136 187.913 61.3368 187.792 61.733C187.672 62.1291 187.895 62.5483 188.291 62.6692L188.729 61.2345ZM192.02 63.8599C192.412 63.9931 192.838 63.7831 192.971 63.3909C193.105 62.9987 192.895 62.5727 192.502 62.4396L192.02 63.8599ZM196.238 63.8381C195.856 63.6781 195.417 63.8582 195.257 64.2403C195.097 64.6223 195.277 65.0618 195.659 65.2217L196.238 63.8381ZM199.109 66.9045C199.468 67.1117 199.927 66.9888 200.134 66.6301C200.341 66.2714 200.218 65.8127 199.859 65.6056L199.109 66.9045ZM203.178 68.0058C202.875 67.724 202.4 67.7418 202.118 68.0454C201.837 68.349 201.854 68.8236 202.158 69.1053L203.178 68.0058ZM204.722 72.1502C204.976 72.4772 205.447 72.5361 205.774 72.2818C206.101 72.0275 206.16 71.5563 205.906 71.2293L204.722 72.1502ZM208.531 74.6039C208.276 74.2769 207.805 74.218 207.478 74.4723C207.151 74.7266 207.092 75.1979 207.347 75.5248L208.531 74.6039ZM209.971 78.8987C210.225 79.2256 210.696 79.2845 211.023 79.0302C211.35 78.7759 211.409 78.3047 211.155 77.9778L209.971 78.8987ZM213.78 81.3537C213.526 81.0267 213.055 80.9678 212.728 81.2221C212.401 81.4764 212.342 81.9476 212.596 82.2746L213.78 81.3537ZM146.585 46.2456C147.191 46.1764 147.877 46.1194 148.625 46.0816L148.549 44.5835C147.772 44.6227 147.055 44.6822 146.415 44.7553L146.585 46.2456ZM152.746 46.0834C154.069 46.1494 155.453 46.2818 156.838 46.5015L157.073 45.0201C155.628 44.7909 154.19 44.6536 152.821 44.5852L152.746 46.0834ZM160.823 47.4077C162.146 47.8138 163.406 48.3235 164.548 48.9544L165.273 47.6412C164.024 46.9512 162.665 46.404 161.263 45.9737L160.823 47.4077ZM167.682 51.345C168.125 51.8209 168.52 52.3354 168.86 52.8916L170.14 52.1094C169.745 51.4628 169.288 50.8685 168.78 50.323L167.682 51.345ZM168.86 52.8916C169.228 53.4935 169.661 54.0523 170.15 54.5729L171.244 53.5466C170.819 53.0938 170.45 52.6161 170.14 52.1094L168.86 52.8916ZM173.393 57.1244C174.501 57.7926 175.72 58.3874 177.012 58.9316L177.594 57.5494C176.35 57.0247 175.198 56.4613 174.168 55.8399L173.393 57.1244ZM180.749 60.3309C181.98 60.7469 183.246 61.1424 184.522 61.5307L184.959 60.0957C183.689 59.709 182.439 59.3187 181.23 58.9099L180.749 60.3309ZM188.291 62.6692C189.554 63.0546 190.803 63.4467 192.02 63.8599L192.502 62.4396C191.264 62.0191 189.998 61.6219 188.729 61.2345L188.291 62.6692ZM195.659 65.2217C196.892 65.7378 198.051 66.2931 199.109 66.9045L199.859 65.6056C198.732 64.9547 197.514 64.3721 196.238 63.8381L195.659 65.2217ZM202.158 69.1053C202.62 69.5337 203.038 69.9846 203.408 70.4609L204.592 69.54C204.167 68.9941 203.694 68.4841 203.178 68.0058L202.158 69.1053ZM203.408 70.4609C203.858 71.0397 204.296 71.6029 204.722 72.1502L205.906 71.2293C205.48 70.682 205.042 70.1188 204.592 69.54L203.408 70.4609ZM207.347 75.5248C208.314 76.769 209.191 77.8964 209.971 78.8987L211.155 77.9778C210.375 76.9755 209.498 75.8481 208.531 74.6039L207.347 75.5248Z"
      />
    </svg>
  );
};

export default Techno2Path;