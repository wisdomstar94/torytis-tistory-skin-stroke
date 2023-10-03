import { classes } from "../../../functions/common/common";
import styles from './posts-notice-permalink-item.module.scss';

export function PostsNoticePermalinkItem() {
  return (
    <>
      <li
        className={classes(
          "w-full block m-0 p-0 relative list-none",
          "text-black dark:text-white dark-c:text-white",
        )}>
        <div
          className={classes(
            "block m-0 mb-3 p-0 relative font-bold text-4xl",
          )}>
          [##_article_rep_title_##]
        </div>
        <div 
          className={classes(styles['tag-row'])}>
          <s_tag_label>
            [##_tag_label_rep_##]
          </s_tag_label>
        </div>
        <div
          className={classes(
            "block m-0 mb-2 p-0 relative font-normal text-xs",
          )}>
          [##_article_rep_date_year_##]년 [##_article_rep_date_month_##]월 [##_article_rep_date_day_##]일 [##_article_rep_date_hour_##]시 [##_article_rep_date_minute_##]분 [##_article_rep_date_second_##]초에 업로드 된 글입니다.
        </div>
        <div
          className={classes(
            "block m-0 p-0 relative font-normal text-xs",
          )}>
          작성자: [##_article_rep_author_##]
        </div>
        <div 
          className={classes(
            "block h-px my-10 mx-0 p-0 relative",
            "bg-black dark:bg-white dark-c:bg-white",
          )} 
          />
        <div
          className={classes(
            "block m-0 p-0 relative",
          )}>
          [##_article_rep_desc_##]
          <div 
            dangerouslySetInnerHTML={{ 
              __html: `
                <script>disposePermalinkContent(true)</script>
              `, 
            }} 
          />
        </div>
        <div 
          className={classes(
            "block h-px my-10 mx-0 p-0 relative",
            "bg-black dark:bg-white dark-c:bg-white",
          )} 
          />
      </li>
    </>
  );
}
