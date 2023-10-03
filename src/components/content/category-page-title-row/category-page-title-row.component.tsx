import { classes } from "../../../functions/common/common";

export function CategoryPageTitleRow() {
  return (
    <>
      <div
        className={classes(
          "relative text-xl font-bold mb-9",
          "hidden tt-body-category:block",

          "text-black dark:text-white dark-c:text-white",
        )}>
        <span className="category-page-title-row-title"></span>
        <span>&nbsp;</span>
        <span className="category-page-title-row-count-info"></span>
      </div>
    </>
  );
}