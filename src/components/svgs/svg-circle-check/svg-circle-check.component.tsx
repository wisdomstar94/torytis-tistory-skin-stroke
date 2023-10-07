import { classes } from "../../../functions/common/common";

export function SvgCircleCheck(props: { className?: string }) {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={classes(
          "icon icon-tabler icon-tabler-circle-check", 
          typeof props.className === 'string' ? props.className : ""
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
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M9 12l2 2l4 -4"></path>
      </svg>
    </>
  );
}