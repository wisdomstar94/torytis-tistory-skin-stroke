import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";
import { ModalImageSwiper } from "../../modals/modal-image-swiper/modal-image-swiper.component";
import { SvgArrowBadgeLeftFilled } from "../../svgs/svg-arrow-badge-left-filled/svg-arrow-badge-left-filled.component";
import { SvgArrowBadgeRightFilled } from "../../svgs/svg-arrow-badge-right-filled/svg-arrow-badge-right-filled.component";
import { SvgShieldLockFilled } from "../../svgs/svg-shield-lock-filled/svg-shield-lock-filled.component";
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
            "block m-0 mb-1 p-0 relative font-normal text-base",
          )}>
          <a 
            className={classes(
              "inline-flex flex-wrap relative cursor-pointer",
              "no-underline hover:underline",
            )}
            href="[##_article_rep_category_link_##]"
            title="카테고리 페이지 이동 링크"
            >
            { `[ [##_article_rep_category_##] ]` }
          </a>
        </div>
        <div
          className={classes(
            "flex flex-wrap gap-2 items-start m-0 mb-3 p-0 relative font-bold text-4xl",
          )}>
          <s_ad_div>
            <span className="post-permalink-secret-status-icon" data-status="[##_s_ad_s1_label_##]">
              <SvgShieldLockFilled 
                width={36}
                height={36}
                className="fill-black dark:fill-white dark-c:fill-white"
                />
            </span>
          </s_ad_div>
          <span className="whitespace-pre-wrap break-all">
            [##_article_rep_title_##]
          </span>
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
        <s_ad_div>
          <div
            className={classes(
              "w-full flex flex-wrap m-0 mt-2 p-0 relative font-normal text-xs gap-1",
            )}>
            <a id="real_post_delete_button" className="hidden" tt-onclick="[##_s_ad_d_onclick_##]"></a>
            <a
              className="inline-flex cursor-pointer no-underline hover:underline text-slate-400 dark:text-white dark-c:text-white"
              tt-onclick="postDeleteButtonClick(true)"
              title="해당 글을 삭제합니다.">
              [글 삭제]
            </a>
            <a
              className="inline-flex cursor-pointer no-underline hover:underline text-slate-400 dark:text-white dark-c:text-white"
              href="[##_s_ad_m_link_##]"
              // tt-onclick="[##_s_ad_m_onclick_##]"
              title="해당 글의 수정 페이지로 이동합니다."
              >
              [글 수정]
            </a>
          </div>
          <div
            className={classes(
              "w-full flex flex-wrap m-0 mt-2 p-0 relative font-normal text-xs gap-1",
            )}>
            <span 
              className="inline-flex flex-wrap whitespace-pre-line break-all text-slate-400 dark:text-white/70 dark-c:text-white/70"
              >
              ※ 이 글은 현재 [##_s_ad_s1_label_##] 상태입니다.
            </span>
            <a
              tt-onclick="[##_s_ad_s2_onclick_##]"
              className="inline-flex cursor-pointer no-underline hover:underline text-slate-400 dark:text-white/70 dark-c:text-white/70"
              title="글의 상태를 변경합니다."
              >
              [상태 변경]
            </a>
          </div>
        </s_ad_div>
        <div 
          className={classes(
            "block h-px my-10 mx-0 p-0 relative",
            "bg-black dark:bg-white dark-c:bg-white",
          )} 
          />
        <div
          className={classes(
            "contents-wrapper-container",
            "[##_var_is_codeblock_copy_button_show_##]",
            "block m-0 p-0 relative [##_var_post_youtube_horizontal_align_##]",
            "[##_var_is_post_codeblock_darkmode_text_color_all_white_##]",
          )}>
          [##_article_rep_desc_##]

          <div className="w-full flex flex-wrap items-stretch relative mt-12 gap-4">
            <div 
              className={classes(
                "w-full flex flex-wrap relative items-stretch justify-start",
                "flex-auto sm:flex-1",
              )}>
              <div 
                className={classes(
                  "next-post-not-exist",
                  "border border-dashed",
                  "w-full box-border p-2 text-xs flex flex-wrap justify-start items-center",
                  "text-gray-400 dark:text-white/80 dark-c:text-white/80",
                  "border-gray-400 dark:border-white/80 dark-c:border-white/80",
                )}>
                다음글이 없습니다.
              </div>
              <s_article_next>
                <div 
                  className="hidden"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <style>
                        .next-post-not-exist {
                          display: none !important;
                        }
                      </style>
                    `,
                  }}
                  />
                <a 
                  className={classes(
                    "group/item",
                    "w-full box-border flex flex-wrap relative cursor-pointer",
                    "no-underline",
                    "text-xs border",
                    "text-gray-600 dark:text-white dark-c:text-white",
                    "border-gray-600 dark:border-white dark-c:border-white",
                  )}
                  href="[##_article_next_link_##]"
                  title="다음글 페이지로 이동합니다."
                  >
                  <div className="w-full flex flex-nowrap items-stretch justify-start relative">
                    <div 
                      className={classes(
                        "w-[30px] flex-shrink flex flex-wrap items-center justify-center relative",
                        "bg-gray-600 dark:bg-white dark-c:bg-white",
                      )}>
                      <SvgArrowBadgeLeftFilled className="fill-white dark:fill-black dark-c:fill-black" />
                    </div>
                    <div className="w-full relative flex flex-wrap gap-0.5 box-border p-2">
                      <div className="w-full relative flex flex-wrap justify-start">
                        (다음글)
                      </div>
                      <div className="w-full relative flex flex-wrap justify-start whitespace-pre-line break-all group-hover/item:underline">
                        [##_article_next_title_##]
                      </div>
                    </div>
                  </div>
                </a>
              </s_article_next>
            </div>
            <div 
              className={classes(
                "w-full flex flex-wrap relative items-stretch justify-end",
                "flex-auto sm:flex-1",
              )}>
              <div 
                className={classes(
                  "prev-post-not-exist",
                  "border border-dashed",
                  "w-full box-border p-2 text-xs flex flex-wrap justify-end items-center",
                  "text-gray-400 dark:text-white/80 dark-c:text-white/80",
                  "border-gray-400 dark:border-white/80 dark-c:border-white/80",
                )}>
                이전글이 없습니다.
              </div>
              <s_article_prev>
                <div 
                  className="hidden"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <style>
                        .prev-post-not-exist {
                          display: none !important;
                        }
                      </style>
                    `,
                  }}
                  />
                <a 
                  className={classes(
                    "group/item",
                    "w-full box-border flex flex-wrap relative cursor-pointer",
                    "no-underline",
                    "text-xs gap-1 border",
                    "text-gray-600 dark:text-white dark-c:text-white",
                    "border-gray-600 dark:border-white dark-c:border-white",
                  )}
                  href="[##_article_prev_link_##]"
                  title="이전글 페이지로 이동합니다."
                  >
                  <div className="w-full flex flex-nowrap items-stretch justify-start relative">
                    <div className="w-full relative flex flex-wrap gap-0.5 box-border p-2">
                      <div className="w-full relative flex flex-wrap justify-end">
                        (이전글)
                      </div>
                      <div className="w-full relative flex flex-wrap justify-end whitespace-pre-line break-all group-hover/item:underline">
                        [##_article_prev_title_##]
                      </div>
                    </div>
                    <div 
                      className={classes(
                        "w-[30px] flex-shrink flex flex-wrap items-center justify-center relative",
                        "bg-gray-600 dark:bg-white dark-c:bg-white",
                      )}>
                      <SvgArrowBadgeRightFilled className="fill-white dark:fill-black dark-c:fill-black" />
                    </div>
                  </div>
                </a>
              </s_article_prev>
            </div>
          </div>

          <CallJavascript code="disposePermalinkContent(true)" />
          <ModalImageSwiper
            id="post-image-swiper-modal"
            // initShowState="show"
            />
          <CallJavascript code="postImageSwiperModalInit(true)" />
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
