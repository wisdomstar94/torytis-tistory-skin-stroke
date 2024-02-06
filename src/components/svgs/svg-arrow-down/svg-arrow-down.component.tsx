import { ICommon } from "../../../interfaces/common.interface";

export function SvgArrowDown(props: ICommon.SvgProps) {
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
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 5l0 14" />
        <path d="M18 13l-6 6" />
        <path d="M6 13l6 6" />
      </svg>
    </>
  );
}