import { CallJavascript } from "@/components/call-javascript-function/call-javascript-function.component";
import { classes } from "@/functions/common/common";

export function PostPermalinkModifiedDatetimeRow() {
  return (
    <>
      <div
        id="post-permalink-modified-datetime-area"
        className={classes(
          "hidden m-0 mb-2 p-0 relative font-normal text-xs text-blue-500"
        )}
      ></div>
      <CallJavascript
        code={`
          checkModifiedPostDatetimeArea();
        `}
      />
    </>
  );
}
