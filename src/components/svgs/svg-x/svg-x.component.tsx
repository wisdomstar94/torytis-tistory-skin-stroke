import { classes } from "../../../functions/common/common";

export function SvgX(props: { className?: string }) {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={classes(
          "icon icon-tabler icon-tabler-x",
          typeof props.className === 'string' ? props.className : "",
        )} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </>
  );
}