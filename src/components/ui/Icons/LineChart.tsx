import { FunctionComponent, SVGProps } from "react";

const LineChart: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4V28H28"
        stroke="#505ECE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.334 12L18.6673 18.6667L13.334 13.3333L9.33398 17.3333"
        stroke="#505ECE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LineChart;
