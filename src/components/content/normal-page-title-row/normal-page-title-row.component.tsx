import { classes } from "../../../functions/common/common";

export function NormalPageTitleRow() {
  return (
    <>
      <div
        className={classes(
          "relative text-xl font-bold mb-9",
          "hidden tt-body-index:block",

          "text-black dark:text-white dark-c:text-white",
        )}>
        <span className="normal-page-title-row-title"></span>
        <span>&nbsp;</span>
        <span className="normal-page-title-row-count-info"></span>
      </div>
    </>
  );
}