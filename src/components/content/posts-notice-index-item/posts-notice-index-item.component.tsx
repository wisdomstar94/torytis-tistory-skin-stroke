import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";
import { SvgPhotoOff } from "../../svgs/svg-photo-off/svg-photo-off.component";
import { PostsIndexItemOverlayContent } from "../posts-index-item-overlay-content/posts-index-item-overlay-content.component";

export function PostsNoticeIndexItem() {
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
          "common-post-index-item",
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
              "border-b bg-no-repeat bg-center bg-contain overflow-hidden",
              // "bg-[url('./images/tistory_logo_image.png')]",
              "border-b-black dark:border-b-white dark-c:border-b-white",
              "text-black dark:text-white dark-c:text-white",
            )}
            >
            <div
              className={classes(
                "posts-index-item-thumbnail-img-default-container",
                "w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center",
              )}>
              <SvgPhotoOff width={100} height={100} strokeWidth={1} className="stroke-slate-400" />
            </div>

            <s_notice_rep_thumbnail>
              <img 
                className={classes(
                  "posts-index-item-image",
                  "w-full h-full block relative object-cover",
                )} 
                sizes="100% 100%"
                src="[##_article_rep_thumbnail_url_##]" 
                alt="게시글 대표 이미지 썸네일 주소" 
                title="게시글 대표 이미지 썸네일 주소" 
                loading="lazy" 
                tt-onerror="checkPostsIndexItemThumbnailImageError(true, this)"
                tt-onload="checkPostsIndexItemThumbnailImageLoad(true, this)"
                />
            </s_notice_rep_thumbnail>
            
            <CallJavascript code="checkPostsIndexItemThumbnailImage(true)" />
          </div>
          <div
            className={classes(
              "w-full block m-0 p-5 relative box-border",
              "bg-white dark:bg-black dark-c:bg-black",
              "text-black dark:text-white dark-c:text-white",
            )}>
            <div
              className={classes(
                "block m-0 mb-0.5 p-0 relative text-sm font-normal",
              )}>
              { `[ [##_article_rep_category_##] ]` }
            </div>
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
                  "text-xs",
                  "text-666 dark:text-white dark-c:text-white",
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