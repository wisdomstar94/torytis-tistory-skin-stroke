import { classes } from "../../../functions/common/common";
import { SvgArrowForward } from "../../svgs/svg-arrow-forward/svg-arrow-forward.component";
import { SwitchButton } from "../../switch-button/switch-button.component";
import styles from './posts-normal-permalink-item.module.scss';

export function PostsNormalPermalinkItem() {
  return (
    <>
      <li
        className={classes(
          "w-full block m-0 p-0 relative list-none",
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
        <div className={classes("block h-px bg-black my-10 mx-0 p-0 relative")} />
        <div
          className={classes(
            "block m-0 p-0 relative",
          )}>
          [##_article_rep_desc_##]
        </div>
        <div className={classes("block h-px bg-black my-10 mx-0 p-0 relative")} />
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
                        "w-full flex items-stretch justify-start box-border p-4 border-b border-b-black",
                        "flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap",
                      )}>
                      <div 
                        className={classes(
                          "w-full border-r-0 mb-1",
                          "md:w-[170px]",
                          "lg:w-full",
                          "xl:w-[170px]",
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
                                "block text-xs text-black mb-1",
                              )}>
                              [##_rp_rep_name_##]
                            </div>
                            <div
                              className={classes(
                                styles['time'],
                                "block text-xs text-888 mb-1",
                              )}>
                              [##_rp_rep_date_##]
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={classes(
                          "w-full pl-0",
                          "flex-auto md:flex-1 lg:flex-auto xl:flex-1 text-sm",
                        )}>
                        <div>[##_rp_rep_desc_##]</div>
                        <div
                          className={classes(
                            "block mt-1 relative",
                          )}>
                          <a 
                            href="#" 
                            tt-onclick="[##_rp_rep_onclick_reply_##]"
                            className={classes(
                              "inline-block mr-1 cursor-pointer decoration-transparent text-black relative",
                              "hover:underline",
                            )}
                            >
                            [답글]
                          </a>
                          <a 
                            href="#" 
                            tt-onclick="[##_rp_rep_onclick_delete_##]"
                            className={classes(
                              "inline-block mr-1 cursor-pointer decoration-transparent text-black relative",
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
                                  )}>
                                  <SvgArrowForward />                                  
                                </div>
                                <div
                                  className={classes(
                                    "w-full flex-1"
                                  )}>
                                  <div
                                    className={classes(
                                      "w-full flex flex-wrap items-start justify-start relative",
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
                                        "w-full-54px block",
                                      )}>
                                      <div 
                                        className={classes(
                                          "block text-xs text-black mb-1 relative",
                                        )}>
                                        [##_rp_rep_name_##]
                                      </div>
                                      <div 
                                        className={classes(
                                          "block text-xs text-888 mb-1 relative",
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
                                )}>
                                <div>[##_rp_rep_desc_##]</div>
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
                  "w-full text-xs text-aaa mb-3 relative hidden",
                )}>
                등록된 댓글이 없습니다.
              </div>
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
                        "w-full block text-sm text-black mb-1 relative",
                      )}>
                      <label htmlFor="[##_rp_input_name_##]">이름</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs text-black relative",
                      )}>
                      <input 
                        type="text" 
                        className={classes(
                          "w-full inline-block border border-black rounded-none px-2 py-1.5 text-xs text-black box-border h-[30px]",
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
                        "w-full block text-sm text-black mb-1 relative",
                      )}>
                      <label htmlFor="[##_rp_input_password_##]">비밀번호</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs text-black relative",
                      )}>
                      <input 
                        type="password" 
                        className={classes(
                          "w-full inline-block border border-black rounded-none px-2 py-1.5 text-xs text-black box-border h-[30px]",
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
                        "w-full block text-sm text-black mb-1 relative",
                      )}>
                      <label htmlFor="">비밀글</label>
                    </div>
                    <div
                      className={classes(
                        "w-full block text-xs text-black relative",
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
                      "w-full block text-sm text-black mb-1 relative",
                    )}>
                    <label htmlFor="[##_rp_input_comment_##]">내용</label>
                  </div>
                  <div 
                    className={classes(
                      "w-full block text-xs text-black relative",
                    )}>
                    <textarea 
                      id="[##_rp_input_comment_##]" 
                      className={classes(
                        "w-full inline-block border border-black rounded-none px-2 py-1.5 text-xs text-black min-h-[180px] max-h-[180px] box-border",
                        "focus:outline-2 focus:outline-black focus:outline-offset-1",
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
                      "inline-flex flex-wrap text-white text-sm font-bold px-6 py-2.5 m-0 border-0 bg-black cursor-pointer box-border decoration-transparent",
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
