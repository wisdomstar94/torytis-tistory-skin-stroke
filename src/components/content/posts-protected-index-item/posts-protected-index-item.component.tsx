import { classes } from "../../../functions/common/common";
import { SvgLock } from "../../svgs/svg-lock/svg-lock.component";
import { PostsIndexItemOverlayContent } from "../posts-index-item-overlay-content/posts-index-item-overlay-content.component";

export function PostsProtectedIndexItem() {
  return (
    <>
      <li
        className={classes(
          "posts-index-item",
          "w-full h-auto border border-solid cursor-pointer relative",
          "hover:outline-2",
          "hover:outline-black dark:hover:outline-white dark-c:outline-white",
          "border-black dark:border-white dark-c:border-white",
          "common-post-index-item",

          "post_index_item_layout_type_row:md:flex"
        )}
        tt-onclick="goToLink('[##_article_rep_link_##]')"
      >
        <a
          href="[##_article_rep_link_##]"
          className={classes(
            "w-full flex flex-wrap relative text-inherit decoration-transparent",
            "post_index_item_layout_type_row:md:flex-nowrap",
            "post_index_item_layout_type_row:md:w-1/2 post_index_item_layout_type_row:md:max-w-[400px]"
          )}
        >
          <div
            className={classes(
              "post-index-item-thumbnail-img-area",
              "w-full block aspect-video relative",
              "min-h-[180px] total_list_max_col_count_5:min-h-[160px] total_list_max_col_count_6:min-h-[140px] total_list_max_col_count_7:min-h-[130px] total_list_max_col_count_8:min-h-[120px]",
              "bg-no-repeat bg-center bg-contain",

              "border-b",
              "post_index_item_layout_type_row:md:border-b-0 post_index_item_layout_type_row:md:border-r",
              // "bg-[url('./images/shield-lock.png')]",
              "border-b-black dark:border-b-white dark-c:border-b-white",
              "border-r-black dark:border-r-white dark-c:border-r-white",
              "post_index_item_layout_type_row:md:aspect-square",

              "text-black dark:text-white dark-c:text-white"
            )}
          >
            <div className="w-full h-full flex flex-wrap items-center justify-center">
              <SvgLock
                className="stroke-black dark:stroke-white"
                width={100}
                height={100}
                strokeWidth={1}
              />
            </div>
          </div>
        </a>
        <div
          className={classes(
            "w-full block m-0 p-5 relative box-border",
            // "bg-white dark:bg-black dark-c:bg-black",
            "text-black dark:text-white dark-c:text-white",

            "post_index_item_layout_type_row:md:flex post_index_item_layout_type_row:md:flex-col"
          )}
        >
          <div
            className={classes(
              "block m-0 mb-0.5 p-0 relative text-sm font-normal"
            )}
          >
            {`[ [##_article_rep_category_##] ]`}
          </div>
          <div
            className={classes(
              "block m-0 mb-1 p-0 relative text-base font-bold"
            )}
          >
            <span
              className="inline-flex break-all whitespace-pre-wrap"
              id="post-index-item-title"
            >
              보호글 입니다.
            </span>
          </div>
          <div className={classes("block m-0 mb-4 p-0 relative")}>
            <span
              className={classes(
                "index-item-datetime-text",
                "text-xs",
                "text-666 dark:text-white dark-c:text-white"
              )}
            >
              [##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##]&nbsp;[##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]:[##_article_rep_date_second_##]
            </span>
          </div>
          <div
            className={classes(
              "post-index-item-content-summary-area",
              "w-full block m-0 p-0 relative text-sm whitespace-pre-line break-all overflow-hidden max-h-[120px]"
            )}
          >
            보호되어 있는 글입니다.
          </div>
        </div>
        <PostsIndexItemOverlayContent />
      </li>
    </>
  );
}
