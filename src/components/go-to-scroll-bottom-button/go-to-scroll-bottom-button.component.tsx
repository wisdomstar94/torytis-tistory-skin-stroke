import { classes } from "../../functions/common/common";
import { SvgArrowDown } from "../svgs/svg-arrow-down/svg-arrow-down.component";

export function GoToScrollBottomButton() {
  return (
    <>
      <button 
        className={classes(
          "go-to-scroll-bottom-button",
          "w-10 h-10 border cursor-pointer",
          "bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800",
          "border-black dark:border-white",
          "flex",
          "flex-wrap items-center justify-center",
          "my-show:inline-flex",
          "rounded-full"
        )}>
        <SvgArrowDown
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