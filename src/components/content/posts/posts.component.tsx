import { classes } from "../../../functions/common/common";
import { PostsNormalIndexItem } from "../posts-normal-index-item/posts-normal-index-item.component";
import { PostsNormalPermalinkItem } from "../posts-normal-permalink-item/posts-normal-permalink-item.component";
import { PostsNoticeIndexItem } from "../posts-notice-index-item/posts-notice-index-item.component";
import { PostsNoticePermalinkItem } from "../posts-notice-permalink-item/posts-notice-permalink-item.component";

export function Posts() {
  return (
    <>
      <ul
        // posts-list
        className={classes(
          "w-full grid m-0 p-0 relative items-stretch gap-5",
          "md:grid-cols-2",
          "2xl:grid-cols-4",
          "tt-body-page:!grid-cols-1",
        )}>
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

          </s_index_article_rep>

          {/* permalink item */}
          <s_permalink_article_rep>

          </s_permalink_article_rep>
        </s_article_protected>
      </ul>
    </>
  );
}