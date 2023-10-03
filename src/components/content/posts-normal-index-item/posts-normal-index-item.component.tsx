import { classes } from "../../../functions/common/common";
import { PostsIndexItemOverlayContent } from "../posts-index-item-overlay-content/posts-index-item-overlay-content.component";

export function PostsNormalIndexItem() {
  return (
    <>
      <li
        // posts-index-item
        className={classes(
          "posts-index-item",
          "w-full h-auto border border-solid cursor-pointer relative",
          "hover:outline-2 hover:outline",
          "hover:outline-black dark:hover:outline-white dark-c:outline-white",
          "border-black dark:border-white dark-c:border-white",
        )}
        >
        <a 
          href="[##_article_rep_link_##]" 
          className={classes(
            "w-full flex flex-wrap relative text-inherit decoration-transparent",
          )}
          >
          <div
            className={classes(
              "w-full block min-h-[180px] aspect-video relative",
              "border-b bg-no-repeat bg-center bg-contain",
              "bg-[url('./images/tistory_logo_image.png')]",
              "border-b-black dark:border-b-white dark-c:border-b-white",
              "text-black dark:text-white dark-c:text-white",
            )}
            // style={{
            //   backgroundImage: `url('./images/tistory_logo_image.png')`,
            // }}
            >
            <s_article_rep_thumbnail>
              <img 
                className={classes(
                  "w-full h-full block relative object-cover",
                )} 
                sizes="100% 100%"
                src="[##_article_rep_thumbnail_url_##]" 
                alt="게시글 대표 이미지 썸네일 주소" 
                title="게시글 대표 이미지 썸네일 주소" 
                loading="lazy" />
            </s_article_rep_thumbnail>
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
              )}>
              [##_article_rep_title_##]
            </div>
            <div
              className={classes(
                "w-full block m-0 mb-4 p-0 relative",
              )}>
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
              )}>[##_article_rep_summary_##]</div>
          </div>
          <PostsIndexItemOverlayContent />
        </a>
      </li>
    </>
  );
}