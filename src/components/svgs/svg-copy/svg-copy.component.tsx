import { ICommon } from "../../../interfaces/common.interface";

export function SvgCopy(props: ICommon.SvgProps) {
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
      </svg>
    </>
  );
}