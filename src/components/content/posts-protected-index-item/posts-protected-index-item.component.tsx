import { classes } from "../../../functions/common/common";
import { PostsIndexItemOverlayContent } from "../posts-index-item-overlay-content/posts-index-item-overlay-content.component";

export function PostsProtectedIndexItem() {
  return (
    <>
      <li 
        className={classes(
          "posts-index-item",
          "w-full h-auto border border-solid cursor-pointer relative",
          "hover:outline-2 hover:outline",
          "hover:outline-black dark:hover:outline-white dark-c:outline-white",
          "border-black dark:border-white dark-c:border-white",
        )}>
        <a 
          href="[##_article_rep_link_##]" 
          className={classes(
            "w-full flex flex-wrap relative text-inherit decoration-transparent",
          )}>
          <div
            className={classes(
              "w-full block min-h-[180px] aspect-video relative",
              "border-b bg-no-repeat bg-center bg-contain",
              "bg-[url('./images/shield-lock.png')]",
              "border-b-black dark:border-b-white dark-c:border-b-white",
              "text-black dark:text-white dark-c:text-white",
            )}
            >
            
          </div>
          <div 
            className={classes(
              "w-full block m-0 p-5 relative box-border",
              "bg-white dark:bg-black dark-c:bg-black",
              "text-black dark:text-white dark-c:text-white",
            )}>
            <div 
              className={classes(
                "block m-0 mb-1 p-0 relative text-base font-bold",
              )}
              >
              보호글 입니다.
            </div>
            <div 
              className={classes(
                "block m-0 mb-4 p-0 relative",
              )}
              >
              <span
                className={classes(
                  "index-item-datetime-text",
                  "text-xs opacity-40",
                )}>
                [##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##]&nbsp;[##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]:[##_article_rep_date_second_##]
              </span>
            </div>
            <div
              className={classes(
                "w-full block m-0 p-0 relative text-sm whitespace-pre-line break-all overflow-hidden max-h-[120px]",
              )}>보호되어 있는 글입니다.</div>
          </div>
          <PostsIndexItemOverlayContent />
        </a>
      </li>
    </>
  );
}