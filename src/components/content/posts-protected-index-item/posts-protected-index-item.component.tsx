import { classes } from "../../../functions/common/common";

export function PostsProtectedIndexItem() {
  return (
    <>
      <li 
        className={classes(
          "w-full h-auto border border-solid border-black cursor-pointer relative",
          "hover:outline-2 hover:outline-black hover:outline",

          "md:w-1/2-space-20px",
          "2xl:w-1/4-space-20px",
        )}>
        <a 
          href="[##_article_rep_link_##]" 
          className={classes(
            "w-full flex flex-wrap relative text-inherit decoration-transparent",
          )}>
          <div
            className={classes(
              "w-full block min-h-[180px] aspect-video relative",
              "border-b border-b-black bg-no-repeat bg-center bg-contain",
              "bg-[url('./images/shield-lock.png')]",
            )}
            >
            
          </div>
          <div 
            className={classes(
              "w-full block m-0 p-5 relative box-border bg-white",
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
        </a>
      </li>
    </>
  );
}