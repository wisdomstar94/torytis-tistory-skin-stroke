import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";

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
        <CallJavascript code="disposeNormalPageTitle(true)" />
      </div>
    </>
  );
}