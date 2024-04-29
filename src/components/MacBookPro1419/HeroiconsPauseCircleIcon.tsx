import { memo, SVGProps } from 'react';

const HeroiconsPauseCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.0908 12.4535L17.7521 19.6955M12.3206 19.4415L12.6593 12.1994M26.0688 16.4555C26.0021 17.8821 25.6551 19.2816 25.0475 20.574C24.4399 21.8665 23.5837 23.0266 22.5278 23.9881C21.4719 24.9497 20.237 25.6939 18.8935 26.1781C17.5499 26.6624 16.1242 26.8773 14.6976 26.8106C13.2711 26.7439 11.8716 26.3969 10.5792 25.7893C9.28673 25.1817 8.12661 24.3255 7.16505 23.2696C6.2035 22.2137 5.45933 20.9788 4.97505 19.6353C4.49076 18.2917 4.27585 16.866 4.34257 15.4394C4.47731 12.5584 5.75104 9.84881 7.88355 7.90685C10.0161 5.9649 12.8327 4.94962 15.7137 5.08436C18.5948 5.21911 21.3044 6.49284 23.2463 8.62535C25.1883 10.7579 26.2036 13.5745 26.0688 16.4555Z'
      stroke='#F8F8F8'
      strokeWidth={2.75}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(HeroiconsPauseCircleIcon);
export { Memo as HeroiconsPauseCircleIcon };
