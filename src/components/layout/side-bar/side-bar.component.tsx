import { classes } from "../../../functions/common/common";
import { SvgPencil } from "../../svgs/svg-pencil/svg-pencil.component";
import { SvgSetting } from "../../svgs/svg-setting/svg-setting.component";
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
      <aside
        className={classes(
          "side-bar",
          "h-full block fixed top-0 z-[3] overflow-y-scroll border-r border-r-black bg-white box-border scrollbar-w-1 scrollbar-track-eee scrollbar-thumb-ccc",
          "transition-all-300ms lg:transition-none",
          "-left-[320px] lg:left-0",
          "my-show:left-0",
          "w-full--40px mini:w-[320px]",
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
              className={classes(
                "inline-flex relative top-2 right-2 ml-4",
              )}>
              <SvgPencil />
            </a>
            {/* setting-button */}
            <a 
              href="/manage" 
              className={classes(
                "inline-flex relative top-2 right-2 ml-4",
              )}>
              <SvgSetting />
            </a>
          </div>

          <s_sidebar>
            <s_sidebar_element>
              <tt_html_comment>블로그명</tt_html_comment>
              <div
                className={classes(
                  "block relative mb-10 mt-2",
                )}>
                <div
                  className={classes(
                    "w-full flex flex-wrap text-xl font-bold text-left items-center justify-start relative",
                  )}>
                  <a href="/">[##_title_##]</a>
                </div> 
              </div>
            </s_sidebar_element>
            <s_sidebar_element>
              <tt_html_comment>카테고리</tt_html_comment>
              <div
                className={classes(
                  "block relative mb-6 border-b border-b-black border-solid",
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
                  "block relative mb-6 border-b border-b-black border-solid",
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
                      <span className={classes("text-666")}>[##_count_total_##]</span>
                    </li>
                    <li
                      className={classes(
                        "block m-0 p-0 relative list-none",
                      )}>
                      <span>오늘 :&nbsp;</span>
                      <span className={classes("text-666")}>[##_count_today_##]</span>
                    </li>
                    <li
                      className={classes(
                        "block m-0 p-0 relative list-none",
                      )}>
                      <span>어제 :&nbsp;</span>
                      <span className={classes("text-666")}>[##_count_yesterday_##]</span>
                    </li>
                  </ul>
                </div>
              </div>  
            </s_sidebar_element>
            <s_sidebar_element>
              <tt_html_comment>최근 댓글</tt_html_comment>
              <div
                className={classes(
                  "block relative mb-6 border-b border-b-black border-solid",
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
                              "inline-block mr-0.5 text-666"
                            )}>
                            [##_rctrp_rep_name_##]
                          </span>
                          <span
                            className={classes(
                              "inline-block text-666"
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
                  "block relative mb-6 border-b border-b-black border-solid",
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
                          "border border-solid border-black rounded-none text-xs",
                        )}
                        type="text" 
                        name="[##_search_name_##]" 
                        tt-value="[##_search_text_##]" 
                        tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
                        placeholder="검색어를 입력하세요."
                        />
                      <button 
                        className={classes(
                          "w-[52px] ml-1 bg-black flex justify-center items-center",
                          "text-white cursor-pointer border-0 text-xs",
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
                  "block relative mb-6 border-b border-b-black border-solid",
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
                        href="/notice"
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
                        href="/notice"
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
                  "block relative mb-6 border-b border-b-black border-solid",
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
                  </s_rct_notice>
                </div>
              </div>  
            </s_sidebar_element>
          </s_sidebar>
        </nav>
      </aside>
    </>
  );
}