import { Var } from "../../../../torytis-variable-object";
import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";
import { SvgPencil } from "../../svgs/svg-pencil/svg-pencil.component";
import { SvgSetting } from "../../svgs/svg-setting/svg-setting.component";
import { SwitchButton } from "../../switch-button/switch-button.component";
import './side-bar.scss';

export function SideBar() {
  return (
    <>
      {/* side bar background */}
      <div
        className={classes(
          "sidebar-background",
          "w-0 h-0 fixed top-0 left-0 bg-black/70 z-[3] overflow-hidden",
          "block lg:hidden",
          "animation-300ms-both lg:animation-0ms-both",
          "my-show:animate-[sidebar-background-show_300ms_linear_0ms_1_normal_both]",
          "my-hide:animate-[sidebar-background-hide_300ms_linear_0ms_1_normal_both]"
        )}
      />

      {/* side bar */}
      <div
        className={classes(
          "absolute w-full mini:w-[320px]",
        )}>
        <aside
          id="common-side-bar"
          className={classes(
            "side-bar",
            "h-screen block fixed top-0 z-[3] overflow-y-scroll border-r border-r-black box-border scrollbar-w-1",
            "transition-all-300ms lg:transition-none",
            "-translate-x-[320px] lg:translate-x-0",
            "my-show:translate-x-0",
            "w-full--40px mini:w-[320px]",

            "bg-white dark:bg-black dark-c:bg-black",
            "dark:text-white dark-c:text-white",
            "scrollbar-track-eee dark:scrollbar-track-333 dark-c:scrollbar-track-333",
            "scrollbar-thumb-ccc dark:scrollbar-thumb-888 dark-c:scrollbar-thumb-888",
          )}>
          <nav
            // side-bar-content
            className={classes(
              "py-8 px-6 m-0 relative block",
            )}
            >
            <div
              className={classes(
                "block absolute top-2 right-2"
              )}>
              {/* write-button */}
              <a 
                href="/manage/post"
                aria-label="새 글을 작성하는 페이지로 이동하는 링크입니다."
                className={classes(
                  "inline-flex relative top-2 right-2 ml-4",
                  "stroke-888 dark:stroke-white dark-c:stroke-white",
                )}>
                <SvgPencil />
              </a>
              {/* setting-button */}
              <a 
                href="/manage" 
                aria-label="블로그 관리 페이지로 이동하는 링크입니다."
                className={classes(
                  "inline-flex relative top-2 right-2 ml-4",
                  "stroke-888 dark:stroke-white dark-c:stroke-white",
                )}>
                <SvgSetting />
              </a>
            </div>

            <div
              className={classes(
                "w-full mt-2 flex flex-wrap gap-6",
              )}>
                <s_sidebar>
                <s_sidebar_element>
                  <tt_html_comment>블로그명</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative",
                    )}>
                    <div
                      className={classes(
                        "w-full flex flex-wrap text-xl font-bold text-left items-center justify-start relative",
                        "dark:text-white dark-c:text-white",
                      )}>
                      <a href="/">[##_title_##]</a>
                    </div> 
                  </div>
                </s_sidebar_element>

                <s_sidebar_element>
                  <tt_html_comment>다크모드 스위치 버튼</tt_html_comment>
                  <div
                    className={classes(
                      "dark-mode-switch-button",
                      Var['[##_var_dark_mode_type_##]'],
                      "w-full flex flex-wrap relative items-center justify-start gap-2",
                    )}>
                    <div
                      className={classes(
                        "inline-flex relative text-sm",
                      )}>
                      다크모드 : 
                    </div>
                    <div
                      className={classes(
                        "inline-flex relative",
                      )}>
                      <SwitchButton 
                        id="dark_mode_switch"
                        name="dark_mode_switch"
                        />
                    </div>
                    <s_if_var_dark_mode_type>
                      <CallJavascript code={`if ("${Var['[##_var_dark_mode_type_##]']}".trim() === "darkmode_fixed") { applyForceDarkMode(true); }`} />
                    </s_if_var_dark_mode_type>
                    <CallJavascript code="checkDarkMode(true)" />
                  </div>
                </s_sidebar_element>

                <s_sidebar_element>
                  <tt_html_comment>카테고리</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      <a 
                        href="/category" 
                        className={classes(
                          "text-inherit",
                          "decoration-transparent visited:text-inherit",
                        )}>
                        카테고리
                      </a>
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      [##_category_list_##]
                    </div>
                  </div>  
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>방문자 수</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      방문자 수
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      <ul
                        className={classes(
                          "block m-0 p-0 relative"
                        )}>
                        <li
                          className={classes(
                            "block m-0 p-0 relative list-none",
                          )}>
                          <span>전체 :&nbsp;</span>
                          <span 
                            className={classes(
                              "text-666 dark:text-ddd dark-c:text-bbb",
                            )}
                            >
                            [##_count_total_##]
                          </span>
                        </li>
                        <li
                          className={classes(
                            "block m-0 p-0 relative list-none",
                          )}>
                          <span>오늘 :&nbsp;</span>
                          <span 
                            className={classes(
                              "text-666 dark:text-ddd dark-c:text-bbb",
                            )}
                            >
                            [##_count_today_##]
                          </span>
                        </li>
                        <li
                          className={classes(
                            "block m-0 p-0 relative list-none",
                          )}>
                          <span>어제 :&nbsp;</span>
                          <span 
                            className={classes(
                              "text-666 dark:text-ddd dark-c:text-bbb",
                            )}
                            >
                            [##_count_yesterday_##]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>  
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>최근 댓글</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      최근 댓글
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      <ul
                        className={classes(
                          "block m-0 p-0 relative",
                        )}>
                        <s_rctrp_rep>
                          <li
                            className={classes(
                              "block m-0 mb-3 p-0 relative list-none text-xs",
                              "last:mb-0",
                            )}>
                            <div
                              className={classes(
                                "block relative",
                              )}>
                              <span
                                className={classes(
                                  "inline-block mr-0.5",
                                  "text-666 dark:text-bbb dark-c:text-bbb",
                                )}>
                                [##_rctrp_rep_name_##]
                              </span>
                              <span
                                className={classes(
                                  "inline-block",
                                  "text-666 dark:text-bbb dark-c:text-bbb",
                                )}>
                                ([##_rctrp_rep_time_##])
                              </span>
                            </div>
                            <div
                              className={classes(
                                "block m-0 p-0 relative",
                              )}>
                              <a 
                                href="[##_rctrp_rep_link_##]"
                                className={classes(
                                  "text-inherit decoration-transparent hover:underline",
                                )}>
                                [##_rctrp_rep_desc_##]
                              </a>
                            </div>
                          </li>
                        </s_rctrp_rep>
                      </ul>
                    </div>
                  </div>  
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>검색</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      검색
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      <s_search>
                        <div 
                          className={classes(
                            "flex items-stretch justify-start relative",
                          )}>
                          <input
                            className={classes(
                              "w-full flex-1 py-1.5 px-2.5 m-0 box-border relative",
                              "border border-solid rounded-none text-xs",

                              "dark:bg-transparent dark-c:bg-transparent",
                              "border-black dark:border-white dark-c:border-white",
                            )}
                            type="text" 
                            name="[##_search_name_##]" 
                            tt-value="[##_search_text_##]" 
                            tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
                            placeholder="검색어를 입력하세요."
                            />
                          <button 
                            className={classes(
                              "w-[52px] ml-1 bg-black flex justify-center items-center box-border",
                              "text-white cursor-pointer border text-xs",

                              "border-black dark:border-white dark-c:border-white",
                            )}
                            tt-onclick="[##_search_onclick_submit_##]">
                            찾기
                          </button>
                        </div>
                      </s_search>
                    </div>
                  </div>  
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>블로그</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      블로그
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      <ul
                        className={classes(
                          "block m-0 mb-1 p-0 relative",
                        )}>
                        <li
                          className={classes(
                            "block m-0 mb-1 p-0 relative list-none",
                            "last:mb-0",
                          )}>
                          <a 
                            href="/notice"
                            className={classes(
                              "text-xs text-inherit decoration-transparent",
                              "hover:underline",
                            )}>
                            공지사항
                          </a>
                        </li>
                        <li
                          className={classes(
                            "block m-0 mb-1 p-0 relative list-none",
                            "last:mb-0",
                          )}>
                          <a 
                            href="/guestbook"
                            className={classes(
                              "text-xs text-inherit decoration-transparent",
                              "hover:underline",
                            )}>
                            방명록
                          </a>
                        </li>
                        <li
                          className={classes(
                            "block m-0 mb-1 p-0 relative list-none",
                            "last:mb-0",
                          )}>
                          <a 
                            href="/tag"
                            className={classes(
                              "text-xs text-inherit decoration-transparent",
                              "hover:underline",
                            )}>
                            태그
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>  
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>최근 공지사항</tt_html_comment>
                  <div
                    className={classes(
                      "w-full block relative border-b border-solid",
                      "border-b-black dark:border-white dark-c:border-white",
                    )}>
                    <div
                      className={classes(
                        "block text-base font-bold relative mb-5",
                      )}>
                      최근 공지사항
                    </div>
                    <div
                      className={classes(
                        "block text-xs font-normal relative mb-6",
                      )}>
                      <s_rct_notice>
                        <ul
                          className={classes(
                            "side-bar-recent-notice-ul",
                            "block m-0 p-0 relative",
                          )}>
                          <s_rct_notice_rep>
                            <li
                              className={classes(
                                "block m-0 mb-3 p-0 relative list-none",
                              )}>
                              <a 
                                href="[##_notice_rep_link_##]"
                                className={classes(
                                  "text-xs text-inherit decoration-transparent",
                                  "hover:underline",
                                )}>
                                [##_notice_rep_title_##]
                              </a>
                            </li>
                          </s_rct_notice_rep>
                        </ul>
                        <CallJavascript code="checkNoticeEmpty(true)" />
                      </s_rct_notice>
                    </div>
                  </div>  
                </s_sidebar_element>
              </s_sidebar>
            </div>
          </nav>
        </aside>
      </div>
        
    </>
  );
}