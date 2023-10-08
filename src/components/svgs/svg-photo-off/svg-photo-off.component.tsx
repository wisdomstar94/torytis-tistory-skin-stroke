import { classes } from "../../../functions/common/common";

export function SvgPhotoOff(props: { className?: string; width?: number; height?: number; strokeWidth?: number; }) {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={classes(
          "icon icon-tabler icon-tabler-photo-off",
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
        <path d="M15 8h.01"></path>
        <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"></path>
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
        <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"></path>
        <path d="M3 3l18 18"></path>
      </svg>
    </>
  );
}