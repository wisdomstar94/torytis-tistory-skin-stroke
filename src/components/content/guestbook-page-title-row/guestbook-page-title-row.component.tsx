import { classes } from "../../../functions/common/common";

export function GuestbookPageTitleRow() {
  return (
    <>
      <div 
        className={classes(
          "relative text-xl font-bold mb-9",
          "hidden tt-body-guestbook:block",

          "text-black dark:text-white dark-c:text-white",
        )}>
        방명록
      </div>
    </>
  );
}