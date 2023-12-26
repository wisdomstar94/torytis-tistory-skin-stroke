import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";
import { ModalImageSwiper } from "../../modals/modal-image-swiper/modal-image-swiper.component";
import { SvgArrowBadgeLeftFilled } from "../../svgs/svg-arrow-badge-left-filled/svg-arrow-badge-left-filled.component";
import { SvgArrowBadgeRightFilled } from "../../svgs/svg-arrow-badge-right-filled/svg-arrow-badge-right-filled.component";
import { SvgArrowForward } from "../../svgs/svg-arrow-forward/svg-arrow-forward.component";
import { SvgShieldLockFilled } from "../../svgs/svg-shield-lock-filled/svg-shield-lock-filled.component";
import { SwitchButton } from "../../switch-button/switch-button.component";
import './posts-normal-permalink-item.scss';

export function PostsNormalPermalinkItem() {
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
          className={classes('tag-row')}>
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
            "[##_var_darkmode_post_table_style_##]",
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
          <CallJavascript code="checkFigureTags(true)" />
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
        <div 
          className={classes(
            "comment-row",
            "block relative m-0 p-0",
          )}>
          <div
            className={classes(
              "block m-0 mb-7 p-0 relative text-xl font-bold",
            )}>
            댓글 
            <s_rp_count>
              ([##_article_rep_rp_cnt_##])
            </s_rp_count>
          </div>
          <s_rp>
            <s_rp_container>
              <ol
                className={classes(
                  "comment-list",
                  "block m-0 p-0 relative"
                )}>
                <s_rp_rep>
                  <li 
                    id="[##_rp_rep_id_##]"
                    className={classes(
                      "list-none m-0 p-0 relative block",
                    )}>
                    <div
                      className={classes(
                        "w-full flex items-stretch justify-start box-border p-4 border-b",
                        "flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap",
                        "border-b-black dark:border-b-white dark-c:border-b-white",
                      )}>
                      <div 
                        className={classes(
                          "w-full border-r-0 mb-1",
                          "md:w-[190px]",
                          "lg:w-full",
                          "xl:w-[190px]",
                        )}>
                        <div
                          className={classes(
                            "w-full flex flex-nowrap items-start justify-start relative",
                          )}>
                          <div
                            className={classes(
                              "w-[46px] h-[46px] mr-2 block relative"
                            )}>
                            <img 
                              src="[##_rp_rep_logo_##]" 
                              alt="프로필 이미지" 
                              title="프로필 이미지" 
                              sizes="100% 100%"
                              className={classes(
                                "w-full h-full block object-cover rounded-full overflow-hidden",
                              )}
                              />
                          </div>
                          <div
                            className={classes(
                              "w-full block relative",
                              "flex-1",
                            )}>
                            <div
                              className={classes(
                                "block text-xs mb-1",
                              )}>
                              [##_rp_rep_name_##]
                            </div>
                            <div
                              className={classes(
                                'time',
                                "block text-xs mb-1",
                                "text-888 dark:text-ccc dark-c:text-ccc",
                              )}>
                              [##_rp_rep_date_##]
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={classes(
                          "w-full pl-0 text-xs",
                          "flex-auto md:flex-1 lg:flex-auto xl:flex-1",
                        )}>
                        <div className="comment-desc whitespace-pre-wrap">[##_rp_rep_desc_##]</div>
                        {/* <CallJavascript 
                          code="removeHTMLTag({ className: 'comment-desc', isExecute: true })"
                          /> */}
                        <div
                          className={classes(
                            "block mt-1 relative",
                          )}>
                          <a 
                            href="#" 
                            tt-onclick="[##_rp_rep_onclick_reply_##]"
                            className={classes(
                              "inline-block mr-1 cursor-pointer decoration-transparent relative",
                              "hover:underline",
                            )}
                            >
                            [답글]
                          </a>
                          <a 
                            href="#" 
                            tt-onclick="[##_rp_rep_onclick_delete_##]"
                            className={classes(
                              "inline-block mr-1 cursor-pointer decoration-transparent relative",
                              "hover:underline",
                            )}
                            >
                            [수정/삭제]
                          </a>
                        </div>
                      </div>
                    </div>
                    <s_rp2_container>
                      <ol 
                        className={classes(
                          "block m-0 p-0 relative",
                        )}>
                        <s_rp2_rep>
                          <li 
                            id="[##_rp_rep_id_##]"
                            className={classes(
                              "list-none m-0 p-0 relative block",
                            )}>
                            <div
                              className={classes(
                                "w-full flex items-stretch justify-start box-border p-4 border-b border-b-aaa",
                                "flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap",
                              )}>
                              <div
                                className={classes(
                                  "flex flex-nowrap",
                                  "w-full md:w-[224px] lg:w-full xl:w-[224px]",
                                )}>
                                <div
                                  className={classes(
                                    "w-[54px] flex flex-wrap items-start justify-end relative",
                                    "stroke-aaa",
                                  )}>
                                  <SvgArrowForward />                  
                                </div>
                                <div
                                  className={classes(
                                    "w-full flex-1"
                                  )}>
                                  <div
                                    className={classes(
                                      "w-full flex items-start justify-start relative",
                                      "flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap",
                                    )}>
                                    <div
                                      className={classes(
                                        "w-[46px] h-[46px] mr-2 block relative",
                                      )}>
                                      <img 
                                        src="[##_rp_rep_logo_##]" 
                                        alt="프로필 이미지" 
                                        title="프로필 이미지" 
                                        sizes="100% 100%"
                                        className={classes(
                                          "w-full h-full block object-cover rounded-full overflow-hidden",
                                        )}
                                        />
                                    </div>
                                    <div
                                      className={classes(
                                        "inline-block relative",
                                      )}>
                                      <div 
                                        className={classes(
                                          "block text-xs mb-1 relative",
                                        )}>
                                        [##_rp_rep_name_##]
                                      </div>
                                      <div 
                                        className={classes(
                                          'time',
                                          "block text-xs mb-1 relative",
                                          "text-888 dark:text-ccc dark-c:text-ccc",
                                        )}>
                                        [##_rp_rep_date_##]
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={classes(
                                  "w-full box-border text-xs block relative",
                                  "flex-auto md:flex-1 lg:flex-auto xl:flex-1",
                                  "pl-14 md:pl-3 lg:pl-14 xl:pl-3",
                                  "mt-2 md:mt-0 lg:mt-2 xl:mt-0",
                                )}>
                                <div className="comment-desc whitespace-pre-wrap">[##_rp_rep_desc_##]</div>
                                {/* <CallJavascript 
                                  code="removeHTMLTag({ className: 'comment-desc', isExecute: true })"
                                  /> */}
                                <div
                                  className={classes(
                                    "block mt-1 relative",
                                  )}>
                                  <a 
                                    href="#" 
                                    tt-onclick="[##_rp_rep_onclick_reply_##]"
                                    className={classes(
                                      "inline-block mr-1 cursor-pointer decoration-transparent",
                                      "hover:underline",
                                    )}>
                                    [답글]
                                  </a>
                                  <a 
                                    href="#" 
                                    tt-onclick="[##_rp_rep_onclick_delete_##]"
                                    className={classes(
                                      "inline-block mr-1 cursor-pointer decoration-transparent",
                                      "hover:underline",
                                    )}>
                                    [수정/삭제]
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </s_rp2_rep>
                      </ol>
                    </s_rp2_container> 
                  </li>
                </s_rp_rep>
              </ol>
              <div
                className={classes(
                  "comment-list-empty",
                  "w-full text-xs mb-3 relative hidden",
                  "text-aaa",
                )}>
                등록된 댓글이 없습니다.
              </div>
              {/* <CallJavascript 
                code="subscribeCommnetListDomEvent(true)"
                /> */}
            </s_rp_container>
            <s_rp_input_form>
              <ul
                className={classes(
                  "w-full flex flex-wrap m-0 my-6 p-0 relative items-stretch justify-start",
                )}>
                <s_rp_guest>
                  <li
                    className={classes(
                      "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                    )}>
                    <div
                      className={classes(
                        "w-full block text-sm mb-1 relative",
                      )}>
                      <label htmlFor="[##_rp_input_name_##]">이름</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs relative",
                      )}>
                      <input 
                        type="text" 
                        className={classes(
                          "w-full inline-block border rounded-none px-2 py-1.5 text-xs box-border h-[30px]",
                          "border-black dark:border-white dark-c:border-white",
                        )}
                        id="[##_rp_input_name_##]" 
                        name="[##_rp_input_name_##]" 
                        tt-value="[##_guest_name_##]" />
                    </div>
                  </li>
                  <li
                    className={classes(
                      "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                    )}>
                    <div
                      className={classes(
                        "w-full block text-sm mb-1 relative",
                      )}>
                      <label htmlFor="[##_rp_input_password_##]">비밀번호</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs relative",
                      )}>
                      <input 
                        type="password" 
                        className={classes(
                          "w-full inline-block border rounded-none px-2 py-1.5 text-xs box-border h-[30px]",
                          "border-black dark:border-white dark-c:border-white",
                        )}
                        id="[##_rp_input_password_##]" 
                        name="[##_rp_input_password_##]" 
                        tt-value="[##_rp_admin_check_##]" />
                    </div>
                  </li>
                </s_rp_guest>
                
                <s_rp_member>
                  <li 
                    className={classes(
                      "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0",
                      "relative items-start justify-start content-start",
                    )}>
                    <div
                      className={classes(
                        "w-full block text-sm mb-1 relative",
                      )}>
                      <label htmlFor="">비밀글</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs relative",
                      )}>
                      <SwitchButton 
                        id={"[##_rp_input_is_secret_##]"} 
                        name={"[##_rp_input_is_secret_##]"} 
                        />
                    </div>
                  </li>
                </s_rp_member>
                <li 
                  className={classes(
                    "w-full list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0",
                    "relative items-start justify-start content-start",
                  )}
                  >
                  <div
                    className={classes(
                      "w-full block text-sm mb-1 relative",
                    )}>
                    <label htmlFor="[##_rp_input_comment_##]">내용</label>
                  </div>
                  <div 
                    className={classes(
                      "w-full block text-xs relative",
                    )}>
                    <textarea 
                      id="[##_rp_input_comment_##]" 
                      className={classes(
                        "w-full inline-block border rounded-none px-2 py-1.5 text-xs min-h-[180px] max-h-[180px] box-border",
                        "focus:outline-2 focus:outline-offset-1",
                        "border-black dark:border-white dark-c:border-white",
                        "focus:outline-black dark:focus:outline-white dark-c:focus:outline-white",
                        "dark:bg-transparent dark-c:bg-transparent",
                      )} 
                      name="[##_rp_input_comment_##]"
                      ></textarea>
                  </div>
                </li>
                <li 
                  className={classes(
                    "w-full list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0",
                    "relative items-start justify-start content-start",
                  )}
                  >
                  <button 
                    className={classes(
                      "inline-flex flex-wrap text-sm font-bold px-6 py-2.5 m-0 border cursor-pointer box-border decoration-transparent",
                      "border-black dark:border-white dark-c:border-white",
                      "bg-black",
                      "text-white",
                    )}
                    type="submit" 
                    tt-onclick="[##_rp_onclick_submit_##]">
                    댓글 작성하기
                  </button>
                </li>
              </ul>
            </s_rp_input_form>
          </s_rp>
        </div>
      </li>
    </>
  );
}
