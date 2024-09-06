import { Var } from "@/consts/torytis-variable-object";
import { classes } from "../../../functions/common/common";

export function PostsIndexContainer() {
  return (
    <>
      <div
        className={classes(
          "posts-index-container",
          "hidden tt-body-page:hidden tt-body-page:lg:block",
          "w-[320px] h-screen absolute top-0 right-0"
        )}
      >
        {/* background_color_at_post_index */}
        <s_if_var_background_color_at_post_index_light
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #common-post-index-container {
                  background-color: ${Var["[##_var_background_color_at_post_index_light_##]"]} !important;
                }
              </style>
            `,
          }}
        ></s_if_var_background_color_at_post_index_light>

        <s_if_var_background_color_at_post_index_dark
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .dark #common-post-index-container {
                  background-color: ${Var["[##_var_background_color_at_post_index_dark_##]"]} !important;
                }
              </style>
            `,
          }}
        ></s_if_var_background_color_at_post_index_dark>

        <aside
          id="common-post-index-container"
          className={classes(
            "w-[320px] h-screen m-0 py-10 px-6 fixed top-0 left-auto box-border border-l overflow-y-scroll",
            "scrollbar-w-1",
            "hidden tt-body-page:hidden tt-body-page:lg:block",

            "!transition-colors !duration-300 bg-white dark:bg-black dark-c:bg-black",
            "text-black dark:text-white dark-c:text-white",
            "border-l-black dark:border-l-white dark-c:border-l-white",
            "scrollbar-track-eee dark:scrollbar-track-333 dark-c:scrollbar-track-333",
            "scrollbar-thumb-ccc dark:scrollbar-thumb-888 dark-c:scrollbar-thumb-888"
          )}
        >
          <div className={classes("block text-[32px] font-bold mb-8 relative")}>
            목차
          </div>
          <ul className={classes("list-row", "block m-0 p-0 relative")}>
            {/* <li
              className={classes(
                "posts-index-item",
                "block m-0 py-3 px-0 relative list-none cursor-pointer border-b border-dotted border-b-ccc",
              )}>
              <span
                className={classes(
                  "text-aaa parent-1-active:text-black",
                )}>
                item.text
              </span>
            </li> */}
            {/* {
              headTextItems.length === 0 ? 
              <li
                className={classes(
                  "block m-0 py-3 px-0 relative list-none cursor-pointer border-b border-dotted border-b-ccc",
                )}>
                <span className="text-aaa text-sm">목차가 없습니다.</span>
              </li>
              : null
            } */}
          </ul>
        </aside>
      </div>
    </>
  );
}
