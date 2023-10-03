import { classes } from "../../../functions/common/common";
import { SvgArrowForward } from "../../svgs/svg-arrow-forward/svg-arrow-forward.component";
import { SwitchButton } from "../../switch-button/switch-button.component";
import styles from './guestbook.module.scss';

export function Guestbook() {
  return (
    <>
      <div
        className={classes(
          "block m-0 p-0 relative",
          "text-black dark:text-white dark-c:text-white",
        )}>
        <s_guest>
          <s_guest_container>
            <ol 
              className={classes(
                "block m-0 p-0 relative",
              )}>
              <s_guest_rep>
                <li 
                  id="[##_guest_rep_id_##]"
                  className={classes(
                    "list-none m-0 p-0 relative block",
                  )}>
                  <div
                    className={classes(
                      "w-full flex items-stretch justify-start box-border p-4 border-b",
                      "border-b-black dark:border-b-white dark-c:border-b-white",
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
                          "w-full flex flex-wrap items-start justify-start relative",
                        )}>
                        <div
                          className={classes(
                            "w-[46px] h-[46px] mr-2 block relative",
                          )}>
                          <img 
                            className={classes(
                              "w-full h-full block object-cover rounded-full overflow-hidden",
                            )}
                            sizes="100% 100%"
                            src="[##_guest_rep_logo_##]" 
                            alt="프로필 이미지" 
                            title="프로필 이미지" 
                            />
                        </div>
                        <div 
                          className={classes(
                            "w-full block relative",
                            "flex-1"
                          )}>
                          <div 
                            className={classes(
                              "block text-xs mb-1 relative",
                            )}>
                            [##_guest_rep_name_##]
                          </div>
                          <div 
                            className={classes(
                              styles['time'],
                              "block text-xs mb-1 relative",
                            )}>
                            [##_guest_rep_date_##]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={classes(
                        "w-full pl-0 text-xs",
                        "flex-auto md:flex-1 lg:flex-auto xl:flex-1",
                      )}>
                      <div>[##_guest_rep_desc_##]</div>
                      <div
                        className={classes(
                          "block mt-1 relative",
                        )}>
                        <a 
                          href="#" 
                          className={classes(
                            "inline-block mr-1 cursor-pointer decoration-transparent",
                            "hover:underline",
                          )}
                          tt-onclick="[##_guest_rep_onclick_reply_##]">
                          [답글]
                        </a>
                        <a 
                          href="#" 
                          className={classes(
                            "inline-block mr-1 cursor-pointer decoration-transparent",
                            "hover:underline",
                          )}
                          tt-onclick="[##_guest_rep_onclick_delete_##]">
                          [수정/삭제]
                        </a>
                      </div>
                    </div>
                  </div>
                  <s_guest_reply_container>
                    <ol
                      className={classes(
                        "block m-0 p-0 relative",
                      )}>
                      <s_guest_reply_rep>
                        <li 
                          id="[##_guest_rep_id_##]"
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
                                  "stroke-aaa"
                                )}>
                                <SvgArrowForward />
                              </div>
                              <div
                                className={classes(
                                  "w-full flex-1 border-r-eee",
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
                                      className={classes(
                                        "w-full h-full block object-cover rounded-full overflow-hidden",
                                      )}
                                      sizes="100% 100%"
                                      src="[##_guest_rep_logo_##]" 
                                      alt="프로필 이미지" 
                                      title="프로필 이미지" 
                                      />
                                  </div>
                                  <div
                                    className={classes(
                                      "inline-block relative",
                                    )}>
                                    <div 
                                      className={classes(
                                        "block text-xs mb-1",
                                      )}>
                                      [##_guest_rep_name_##]
                                    </div>
                                    <div 
                                      className={classes(
                                        styles['time'],
                                        "block text-xs mb-1",
                                      )}>
                                      [##_guest_rep_date_##]
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>  
                            <div 
                              className={classes(
                                "w-full box-border text-xs block relative",
                                "flex-auto md:flex-1 lg:flex-auto xl:flex-1",
                                "mt-1 md:mt-0 lg:mt-1 xl:mt-0",
                                "pl-14 md:pl-3 lg:pl-14 xl:pl-3",
                              )}>
                              <div>[##_guest_rep_desc_##]</div>
                              <div
                                className={classes(
                                  "block mt-1 relative",
                                )}>
                                <a 
                                  href="#" 
                                  className={classes(
                                    "inline-block mr-1 cursor-pointer decoration-transparent",
                                    "hover:underline",
                                  )}
                                  tt-onclick="[##_guest_rep_onclick_reply_##]">
                                  [답글]
                                </a>
                                <a 
                                  href="#" 
                                  className={classes(
                                    "inline-block mr-1 cursor-pointer decoration-transparent",
                                    "hover:underline",
                                  )}
                                  tt-onclick="[##_guest_rep_onclick_delete_##]">
                                  [수정/삭제]
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </s_guest_reply_rep>
                    </ol>
                  </s_guest_reply_container> 
                </li>
              </s_guest_rep>
            </ol>
          </s_guest_container>
          <s_guest_input_form>
            <ul 
              className={classes(
                "w-full flex flex-wrap m-0 my-6 p-0 relative items-stretch justify-start",
              )}>
              <s_guest_form>
                <li
                  className={classes(
                    "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                  )}>
                  <div
                    className={classes(
                      "w-full block text-sm mb-1",
                    )}>
                    <label htmlFor="[##_guest_input_name_##]">이름</label>
                  </div>
                  <div 
                    className={classes(
                      "w-full block text-xs relative",
                    )}>
                    <input 
                      type="text" 
                      className={classes(
                        "w-full inline-block border border-black rounded-none px-2 py-1.5 text-xs box-border h-[30px]",
                      )}
                      id="[##_guest_input_name_##]" 
                      name="[##_guest_input_name_##]" 
                      tt-value="[##_guest_name_##]" 
                      />
                  </div>
                </li>
                <li
                  className={classes(
                    "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                  )}>
                  <div
                    className={classes(
                      "w-full block text-sm mb-1",
                    )}>
                    <label htmlFor="[##_guest_input_password_##]">비밀번호</label>
                  </div>
                  <div 
                    className={classes(
                      "w-full block text-xs relative",
                    )}>
                    <input 
                      type="password" 
                      className={classes(
                        "w-full inline-block border border-black rounded-none px-2 py-1.5 text-xs box-border h-[30px]",
                      )}
                      id="[##_guest_input_password_##]" 
                      name="[##_guest_input_password_##]" 
                      tt-value="[##_guest_password_##]" />
                  </div>
                </li>
              </s_guest_form>
              
              <s_rp_member>
                <li
                  className={classes(
                    "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                  )}>
                  <div
                    className={classes(
                      "w-full block text-sm mb-1",
                    )}>
                    <label htmlFor="">비밀글</label>
                  </div>
                  <div 
                    className={classes(
                      "w-full block text-xs relative",
                    )}>
                    <SwitchButton
                      id="[##_rp_input_is_secret_##]"
                      name="[##_rp_input_is_secret_##]"
                      />
                  </div>
                </li>
              </s_rp_member>

              <li 
                className={classes(
                  "w-full list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                )}>
                <div
                  className={classes(
                    "w-full block text-sm mb-1",
                  )}>
                  <label htmlFor="[##_guest_input_comment_##]">내용</label>
                </div>
                <div 
                  className={classes(
                    "w-full block text-xs relative",
                  )}>
                  <textarea 
                    id="[##_guest_input_comment_##]" 
                    className={classes(
                      "w-full inline-block border rounded-none px-2 py-1.5 text-xs min-h-[180px] max-h-[180px] box-border",
                      "focus:outline-2 focus:outline-offset-1",
                      "border-black dark:border-white dark-c:border-white",
                      "focus:outline-black dark:focus:outline-white dark-c:focus:outline-white",
                      "dark:bg-transparent dark-c:bg-transparent",
                    )} 
                    name="[##_guest_input_comment_##]"></textarea>
                </div>
              </li>
              <li 
                className={classes(
                  "w-full list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative items-start justify-start content-start",
                )}>
                <button 
                  className={classes(
                    "inline-flex flex-wrap text-white text-sm font-bold px-6 py-2.5 m-0 bg-black cursor-pointer box-border decoration-transparent",
                    "border-black dark:border-white dark-c:border-white",
                  )}
                  type="submit" 
                  tt-onclick="[##_guest_onclick_submit_##]">
                  방명록 작성하기
                </button>
              </li>
            </ul>
          </s_guest_input_form>
        </s_guest>
      </div>
    </>
  );
}