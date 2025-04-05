import { Var } from "@/consts/torytis-variable-object";
import { classes } from "../../../functions/common/common";
import { CallJavascript } from "../../call-javascript-function/call-javascript-function.component";
import { PostsNormalIndexItem } from "../posts-normal-index-item/posts-normal-index-item.component";
import { PostsNormalPermalinkItem } from "../posts-normal-permalink-item/posts-normal-permalink-item.component";
import { PostsNoticeIndexItem } from "../posts-notice-index-item/posts-notice-index-item.component";
import { PostsNoticePermalinkItem } from "../posts-notice-permalink-item/posts-notice-permalink-item.component";
import { PostsProtectedIndexItem } from "../posts-protected-index-item/posts-protected-index-item.component";
import { PostsProtectedPermalinkItem } from "../posts-protected-permalink-item/posts-protected-permalink-item.component";

export function Posts() {
  return (
    <>
      <div
        className={classes(
          "w-full block relative",
          Var["[##_var_total_list_max_col_count_##]"]
        )}
      >
        <ul
          // posts-list
          className={classes(
            "posts-list",
            "w-full grid m-0 p-0 relative items-stretch gap-5",

            "grid-cols-1",
            "md:total_list_max_col_count_2:grid-cols-2 md:total_list_max_col_count_3:grid-cols-2 md:total_list_max_col_count_4:grid-cols-2 md:total_list_max_col_count_5:grid-cols-2 md:total_list_max_col_count_6:grid-cols-4 md:total_list_max_col_count_7:grid-cols-4 md:total_list_max_col_count_8:grid-cols-4",
            "xl:total_list_max_col_count_1:grid-cols-1 xl:total_list_max_col_count_2:grid-cols-2 xl:total_list_max_col_count_3:grid-cols-3 xl:total_list_max_col_count_4:grid-cols-4 xl:total_list_max_col_count_5:grid-cols-5 xl:total_list_max_col_count_6:grid-cols-6 xl:total_list_max_col_count_7:grid-cols-7 xl:total_list_max_col_count_8:grid-cols-8",

            "post_index_item_layout_type_row:md:grid-cols-1",

            "tt-body-page:!grid-cols-1"
          )}
        >
          {/* 일반 포스트 */}
          <s_article_rep>
            {/* index item */}
            <s_index_article_rep>
              <PostsNormalIndexItem />
            </s_index_article_rep>

            {/* permalink item */}
            <s_permalink_article_rep>
              <PostsNormalPermalinkItem />
            </s_permalink_article_rep>
          </s_article_rep>

          {/* 공지사항 포스트 */}
          <s_notice_rep>
            {/* index item */}
            <s_index_article_rep>
              <PostsNoticeIndexItem />
            </s_index_article_rep>

            {/* permalink item */}
            <s_permalink_article_rep>
              <PostsNoticePermalinkItem />
            </s_permalink_article_rep>
          </s_notice_rep>

          {/* 보호글 포스트 */}
          <s_article_protected>
            {/* index item */}
            <s_index_article_rep>
              <PostsProtectedIndexItem />
            </s_index_article_rep>

            {/* permalink item */}
            <s_permalink_article_rep>
              <PostsProtectedPermalinkItem />
            </s_permalink_article_rep>
          </s_article_protected>
        </ul>
      </div>
      <CallJavascript code="disposeIndexItemNewSymbol(true, 'ul.posts-list > li')" />
    </>
  );
}
