import { ReactNode } from "react";
import { classes } from "../../../functions/common/common";
import { Var } from "@/consts/torytis-variable-object";
import { FloatButtonArea } from "../../content/float-button-area/float-button-area.component";

export function RootContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className={classes(
          "blog-root-container box-border",
          "w-full min-h-screen relative block mx-auto",
          "overflow-hidden",
          "outline outline-1",
          "outline-black dark:outline-white"
        )}
      >
        {children}
      </div>
      <s_if_var_blog_screen_max_width>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .blog-root-container {
                  max-width: ${Var["[##_var_blog_screen_max_width_##]"]}px;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_screen_max_width>
      <FloatButtonArea />
      <s_if_var_blog_index_post_item_content_summary_minimum_height>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .posts-index-item .post-index-item-content-summary-area {
                  min-height: ${Var["[##_var_blog_index_post_item_content_summary_minimum_height_##]"]}px;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_index_post_item_content_summary_minimum_height>
      <s_if_var_blog_index_post_item_content_summary_maximum_height>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .posts-index-item .post-index-item-content-summary-area {
                  max-height: ${Var["[##_var_blog_index_post_item_content_summary_maximum_height_##]"]}px;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_index_post_item_content_summary_maximum_height>
      <s_if_var_blog_index_post_item_thumbnail_img_minimum_height>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .posts-index-item .post-index-item-thumbnail-img-area {
                  min-height: ${Var["[##_var_blog_index_post_item_thumbnail_img_minimum_height_##]"]}px !important;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_index_post_item_thumbnail_img_minimum_height>
      <s_if_var_blog_index_post_item_thumbnail_img_maximum_height>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .posts-index-item .post-index-item-thumbnail-img-area {
                  max-height: ${Var["[##_var_blog_index_post_item_thumbnail_img_maximum_height_##]"]}px;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_index_post_item_thumbnail_img_maximum_height>
      <s_if_var_blog_index_post_item_display_tag_max_count>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .posts-index-item .tag-row > a:nth-child(n+${Var["[##_var_blog_index_post_item_display_tag_max_count_##]"]}) {
                  display: none;
                }
              </style>
            `,
          }}
        />
      </s_if_var_blog_index_post_item_display_tag_max_count>
    </>
  );
}
