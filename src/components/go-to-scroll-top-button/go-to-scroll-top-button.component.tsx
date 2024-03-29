import { classes } from "../../functions/common/common";
import { SvgArrowUp } from "../svgs/svg-arrow-up/svg-arrow-up.component";

export function GoToScrollTopButton() {
  return (
    <>
      <button 
        className={classes(
          "go-to-scroll-top-button",
          "w-10 h-10 border cursor-pointer",
          "bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800",
          "border-black dark:border-white",
          "flex",
          "flex-wrap items-center justify-center",
          "my-show:inline-flex",
          "rounded-full"
        )}>
        <SvgArrowUp
          width={20}
          height={20}
          className={classes(
            "stroke-black dark:stroke-white",
            "fill-black dark:fill-white",
          )} 
          />
      </button>
    </>
  );
}