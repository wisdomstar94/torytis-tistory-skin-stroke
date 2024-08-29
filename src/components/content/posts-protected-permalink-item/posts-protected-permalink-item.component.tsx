import { classes } from "../../../functions/common/common";
import { SvgShieldLockFilled } from "../../svgs/svg-shield-lock-filled/svg-shield-lock-filled.component";

export function PostsProtectedPermalinkItem() {
  return (
    <>
      <li
        className={classes(
          "w-full block m-0 p-0 relative list-none",
          "text-black dark:text-white dark-c:text-white"
        )}
      >
        <div
          className={classes(
            "block m-0 mb-1 p-0 relative font-normal text-base"
          )}
        >
          <a
            className={classes(
              "inline-flex flex-wrap relative cursor-pointer",
              "no-underline hover:underline"
            )}
            href="[##_article_rep_category_link_##]"
            title="카테고리 페이지 이동 링크"
          >
            {`[ [##_article_rep_category_##] ]`}
          </a>
        </div>
        <div
          className={classes("block m-0 mb-3 p-0 relative font-bold text-4xl")}
        >
          <span
            className="post-permalink-secret-status-icon"
            data-status="[##_s_ad_s1_label_##]"
          >
            <SvgShieldLockFilled className="fill-black dark:fill-white dark-c:fill-white" />
          </span>
          <span>보호글 입니다.</span>
        </div>
        <div
          className={classes("block m-0 mb-2 p-0 relative font-normal text-xs")}
        >
          [##_article_rep_date_year_##]년 [##_article_rep_date_month_##]월
          [##_article_rep_date_day_##]일 [##_article_rep_date_hour_##]시
          [##_article_rep_date_minute_##]분 [##_article_rep_date_second_##]초에
          업로드 된 글입니다.
        </div>
        <div className={classes("block m-0 p-0 relative font-normal text-xs")}>
          작성자: [##_article_rep_author_##]
        </div>
        <div
          className={classes(
            "block h-px my-10 mx-0 p-0 relative",
            "bg-black dark:bg-white dark-c:bg-white"
          )}
        />
        <div className={classes("block m-0 p-0 relative")}>
          <div className={classes("block m-0 p-0 relative")}>
            <div
              className={classes(
                "block text-xs mb-10",
                "text-888 dark:text-ccc dark-c:text-ccc"
              )}
            >
              보호되어 있는 글입니다. 내용을 보시려면 비밀번호를 입력하세요.
            </div>
            <div className={classes("block w-full relative")}>
              <ul
                className={classes(
                  "w-full flex flex-wrap m-0 my-6 p-0 relative items-stretch justify-start"
                )}
              >
                <li
                  className={classes(
                    "w-[160px] list-none inline-flex flex-wrap m-0 mr-1 mb-1 p-0 relative",
                    "items-start justify-start content-start"
                  )}
                >
                  <div className={classes("w-full block text-sm mb-1")}>
                    <label htmlFor="[##_article_password_##]">비밀번호</label>
                  </div>
                  <div className={classes("w-full block text-xs relative")}>
                    <input
                      type="password"
                      className={classes(
                        "w-full inline-block border rounded-none px-2 py-1.5 text-xs box-border h-[30px] bg-transparent",
                        "border-black dark:border-white dark-c:border-white"
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
                    "items-start justify-start content-start"
                  )}
                >
                  <button
                    className={classes(
                      "inline-flex flex-wrap text-white text-sm font-bold px-6 py-2.5 m-0 bg-black cursor-pointer box-border decoration-transparent",
                      "border-black dark:border-white dark-c:border-white"
                    )}
                    type="submit"
                    tt-onclick="[##_article_dissolve_##]"
                  >
                    확인
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* 보호글 퍼머링크 페이지에서는 이전글, 다음글 치환자 작동 안함..! */}
        </div>
        <div
          className={classes(
            "block h-px my-10 mx-0 p-0 relative",
            "bg-black dark:bg-white dark-c:bg-white"
          )}
        />
      </li>
    </>
  );
}
