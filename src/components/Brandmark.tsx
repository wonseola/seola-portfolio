import * as React from "react";

type BrandmarkProps = React.SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

export default function Brandmark({
  strokeWidth = 4,
  className,
  ...props
}: BrandmarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* O */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Heart inside the circle */}
      <path
        d="M24 30 
     C 17 23, 10 18, 14 12 
     C 17 9, 24 12, 24 15 
     C 24 12, 31 9, 34 12 
     C 38 18, 31 23, 24 30 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(0, 4)"
      />
    </svg>
  );
}

// import * as React from "react";

// type BrandmarkProps = React.SVGProps<SVGSVGElement>;

// export function Brandmark({ className, ...props }: BrandmarkProps) {
//   return (
//     <svg
//       viewBox="0 0 300 252"
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.1"
//       className={`fill-current ${className}`}
//       {...props}
//     >
//       <path d="M280.14,54v-18h-19.25v-18h-19.5V0H54.38v18h-19.5v18H15.63v18H0v198h223.38v-18h18.75v-18h18.75v-72h19.25v-18h19.86V54h-19.86ZM241.38,144h-37.15v18h37.15v54h-18.75v18h-111.84v-18h-17.35v-18h-38.05v-36h18.55v18h19.5v-36h17.35v-18h130.59v18ZM241.38,72v18H93.45v-18h-20.78v-18h20.78v18h147.94v-18h19.5v18h-19.5Z" />
//       <rect x="129.11" y="144" width="38.31" height="18" />
//       <rect x="167.41" y="186.38" width="38.31" height="18" />
//     </svg>
//   );
// }
// export default Brandmark;
