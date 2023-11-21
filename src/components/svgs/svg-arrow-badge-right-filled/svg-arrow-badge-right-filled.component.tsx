import { ICommon } from "../../../interfaces/common.interface";

export function SvgArrowBadgeRightFilled(props: ICommon.SvgProps) {
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
        strokeWidth={strokeWidth}
        stroke="currentColor" 
        fill="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path className={className} d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="currentColor" />
      </svg>
    </>
  );
}