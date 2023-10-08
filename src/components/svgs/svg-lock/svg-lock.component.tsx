import { classes } from "../../../functions/common/common";

export function SvgLock(props: { className?: string; width?: number; height?: number; strokeWidth?: number; }) {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className={classes(
          "icon icon-tabler icon-tabler-lock",
          typeof props.className === 'string' ? props.className : "",
        )} 
        width={props.width !== undefined ? props.width : 24} 
        height={props.height !== undefined ? props.height : 24}
        viewBox="0 0 24 24" 
        strokeWidth={props.strokeWidth !== undefined ? props.strokeWidth : 2} 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
        <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
      </svg>
    </>
  );
}