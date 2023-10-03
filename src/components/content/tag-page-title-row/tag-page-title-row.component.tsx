import { classes } from "../../../functions/common/common";

export function TagPageTitleRow() {
  return (
    <>
      <div
        className={classes(
          "relative text-xl font-bold mb-9",
          "hidden tt-body-tag:block",

          "text-black dark:text-white dark-c:text-white",
        )}>
        <span className="tag-page-title-row-title"></span>
      </div>
    </>
  );
}