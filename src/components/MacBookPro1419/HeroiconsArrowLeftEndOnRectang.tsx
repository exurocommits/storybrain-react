import { memo, SVGProps } from 'react';

const HeroiconsArrowLeftEndOnRectang = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.5297 12.361L19.7414 7.83466C19.7751 7.11439 19.5311 6.4107 19.0632 5.87839C18.5953 5.34609 17.9417 5.02877 17.2463 4.99624L10.2539 4.66922C9.55847 4.6367 8.87814 4.89163 8.36257 5.37794C7.84701 5.86425 7.53844 6.5421 7.50475 7.26237L6.74268 23.5571C6.70899 24.2773 6.95295 24.981 7.42087 25.5133C7.8888 26.0456 8.54237 26.363 9.2378 26.3955L16.2302 26.7225C16.9256 26.755 17.6059 26.5001 18.1215 26.0138C18.637 25.5275 18.9456 24.8496 18.9793 24.1293L19.191 19.603M15.1595 12.1566L11.4939 15.6141M11.4939 15.6141L14.8208 19.3987M11.4939 15.6141L26.3527 16.309'
      stroke='#F8F8F8'
      strokeWidth={2.75}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(HeroiconsArrowLeftEndOnRectang);
export { Memo as HeroiconsArrowLeftEndOnRectang };
