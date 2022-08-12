import { FunctionComponent, SVGProps } from "react";

const GoogleMail: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_69)">
        <path
          d="M2.04545 23.9999H6.81818V11.6363L0 6.18176V21.8181C0 23.0254 0.917045 23.9999 2.04545 23.9999Z"
          fill="#4285F4"
        />
        <path
          d="M23.1836 24.0001H27.9563C29.0881 24.0001 30.0018 23.0219 30.0018 21.8182V6.18188L23.1836 11.6364"
          fill="#34A853"
        />
        <path
          d="M23.1836 2.18215V11.6367L30.0018 6.18215V3.27306C30.0018 0.574876 27.1143 -0.963306 25.0927 0.654875"
          fill="#FBBC04"
        />
        <path
          d="M6.81641 11.6364V2.18188L14.9982 8.72734L23.18 2.18188V11.6364L14.9982 18.1819"
          fill="#EA4335"
        />
        <path
          d="M0 3.27306V6.18215L6.81818 11.6367V2.18215L4.90909 0.654875C2.88409 -0.963306 0 0.574876 0 3.27306"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_69">
          <rect width="30" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoogleMail;
