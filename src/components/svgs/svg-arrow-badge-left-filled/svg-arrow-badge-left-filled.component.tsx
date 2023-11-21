import { ICommon } from "../../../interfaces/common.interface";

export function SvgArrowBadgeLeftFilled(props: ICommon.SvgProps) {
  const {
    className,
    width,
    height,
    strokeWidth,
  } = props;

  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        width={width ?? 24} 
        height={height ?? 24} 
        viewBox="0 0 24 24" 
        strokeWidth={strokeWidth ?? 2} 
        stroke="currentColor" 
        fill="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path className={className} d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="currentColor" />
      </svg>
    </>
  );
}