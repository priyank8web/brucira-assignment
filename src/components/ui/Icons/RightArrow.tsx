import { FunctionComponent, SVGProps } from "react";

const RightArrow: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.778 5.25781L10.7199 6.32095L13.1725 8.76218L2.96875 8.77245L2.97026 10.2724L13.1461 10.2622L10.7347 12.6849L11.7979 13.7431L16.0306 9.49051L11.778 5.25781Z"
        fill="white"
      />
    </svg>
  );
};

export default RightArrow;
