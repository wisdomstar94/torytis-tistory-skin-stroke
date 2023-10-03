import { classes } from "../../../functions/common/common";

export function PostsProtectedPermalinkItem() {
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
          보호글 입니다.
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
          <div
            className={classes(
              "block m-0 p-0 relative",
            )}>
            <div
              className={classes(
                "block text-xs text-888 mb-10",
              )}>
              보호되어 있는 글입니다. 내용을 보시려면 비밀번호를 입력하세요.
            </div>
            <div
              className={classes(
                "block w-full relative",
              )}>
              <ul
                className={classes(
                  "w-full flex flex-wrap m-0 my-6 p-0 relative items-stretch justify-start",
                )}>
                <li
                  className={classes(
                    "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative",
                    "items-start justify-start content-start",
                  )}>
                  <div
                    className={classes(
                      "w-full block text-sm text-black mb-1",
                    )}>
                    <label htmlFor="[##_article_password_##]">비밀번호</label>
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
                      id="[##_article_password_##]" 
                      name="[##_article_password_##]" 
                      tt-value="" 
                      tt-onkeydown="if (event.keyCode == 13)[##_article_dissolve_##]" 
                      />
                  </div>
                </li>
                <li
                  className={classes(
                    "w-full list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative",
                    "items-start justify-start content-start",
                  )}>
                  <button 
                    className={classes(
                      "inline-flex flex-wrap text-white text-sm font-bold px-6 py-2.5 m-0 border-0 bg-black cursor-pointer box-border decoration-transparent",
                    )}
                    type="submit" 
                    tt-onclick="[##_article_dissolve_##]">
                    확인
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes("block h-px bg-black my-10 mx-0 p-0 relative")} />
      </li>
    </>
  );
}