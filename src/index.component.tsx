import "./index.css";
import "swiper/css";
import { TopBar } from "./components/layout/top-bar/top-bar.component";
import { SideBar } from "./components/layout/side-bar/side-bar.component";
import { ContentContainer } from "./components/layout/content-container/content-container.component";
import { AdRowUpper } from "./components/content/ad-row-upper/ad-row-upper.component";
import { CategoryPageTitleRow } from "./components/content/category-page-title-row/category-page-title-row.component";
import { GuestbookPageTitleRow } from "./components/content/guestbook-page-title-row/guestbook-page-title-row.component";
import { TagPageTitleRow } from "./components/content/tag-page-title-row/tag-page-title-row.component";
import { Posts } from "./components/content/posts/posts.component";
import { Guestbook } from "./components/content/guestbook/guestbook.component";
import { Tags } from "./components/content/tags/tags.component";
import { Pagination } from "./components/content/pagination/pagination.component";
import { AdRowLower } from "./components/content/ad-row-lower/ad-row-lower.component";
import { PostsIndexContainer } from "./components/layout/posts-index-container/posts-index-container.component";
import { classes } from "./functions/common/common";
import { HomeCover } from "./components/content/home-cover/home-cover.component";
import { version } from "../package.json";
import { LatestVersionNotice } from "./components/latest-version-notice/latest-version-notice.component";
import { RootContainer } from "./components/layout/root-container/root-container.component";
import { Var } from "@/consts/torytis-variable-object";

export default function App() {
  return (
    <html
      lang="ko"
      // className="dark"
    >
      <head>
        <meta charSet="utf-8" />
        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self' daumcdn.net *.daumcdn.net jsdelivr.net *.jsdelivr.net cloudflare.com *.cloudflare.com kakao.com *.kakao.com kakaocdn.net *.kakaocdn.net daum.net *.daum.net tistory.com *.tistory.com; script-src 'unsafe-inline'; script-src-elem https://cdn.jsdelivr.net/ https://tistory1.daumcdn.net/ https://search1.daumcdn.net/ https://cdnjs.cloudflare.com/ https://t1.daumcdn.net/; style-src 'unsafe-inline'; style-src-elem https://tistory1.daumcdn.net/ https://t1.daumcdn.net/ https://cdnjs.cloudflare.com/; font-src 'unsafe-inline';" /> */}
        {/* <meta httpEquiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="[##_page_title_##] :: [##_title_##]"
        />
        <title>[##_page_title_##] :: [##_title_##]</title>
        <script
          src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/highlight.min.js"
          defer
        ></script>
        <script
          src="//cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.8.0/dist/highlightjs-line-numbers.min.js"
          defer
        ></script>

        <s_if_var_google_adsense_script_url>
          <script
            async
            src={Var["[##_var_google_adsense_script_url_##]"]}
            crossOrigin="anonymous"
          ></script>
        </s_if_var_google_adsense_script_url>

        <s_if_var_side_bar_scrollbar_track_color
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #common-side-bar::-webkit-scrollbar-track {
                  background-color: ${Var["[##_var_side_bar_scrollbar_track_color_##]"]};
                }
              </style>
            `,
          }}
        ></s_if_var_side_bar_scrollbar_track_color>

        <s_if_var_side_bar_scrollbar_thumb_color
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #common-side-bar::-webkit-scrollbar-thumb {
                  background-color: ${Var["[##_var_side_bar_scrollbar_thumb_color_##]"]};
                }
              </style>
            `,
          }}
        ></s_if_var_side_bar_scrollbar_thumb_color>

        <s_if_var_post_index_item_border_color
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #[##_body_id_##] .common-post-index-item {
                  border-color: ${Var["[##_var_post_index_item_border_color_##]"]};
                }
              </style>
            `,
          }}
        ></s_if_var_post_index_item_border_color>

        <s_if_var_post_index_item_border_active_color
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #[##_body_id_##] .common-post-index-item:hover {
                  border-color: ${Var["[##_var_post_index_item_border_active_color_##]"]};
                  outline-color: ${Var["[##_var_post_index_item_border_active_color_##]"]};
                }
              </style>
            `,
          }}
        ></s_if_var_post_index_item_border_active_color>

        {/* background_color_at_blog */}
        <s_if_var_background_color_at_blog_light
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                body {
                  background-color: ${Var["[##_var_background_color_at_blog_light_##]"]} !important;
                }
              </style>
            `,
          }}
        ></s_if_var_background_color_at_blog_light>

        <s_if_var_background_color_at_blog_dark
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .dark body {
                  background-color: ${Var["[##_var_background_color_at_blog_dark_##]"]} !important;
                }
              </style>
            `,
          }}
        ></s_if_var_background_color_at_blog_dark>

        <s_if_var_post_index_item_title_font_size
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                #post-index-item-title {
                  font-size: ${Var["[##_var_post_index_item_title_font_size_##]"]}px !important;
                }
              </style>
            `,
          }}
        ></s_if_var_post_index_item_title_font_size>
      </head>
      <body
        id="[##_body_id_##]"
        data-skin-name="stroke"
        data-skin-version={version}
        data-post-image-viewer-type={Var["[##_var_post_image_viewer_type_##]"]}
        className={classes(
          "!transition-colors !duration-300 bg-white dark:bg-black dark-c:bg-black",
          Var["[##_var_post_index_item_summary_on_off_flag_##]"],
          Var["[##_var_post_index_item_tag_on_off_flag_##]"],
          Var["[##_var_main_layout_order_type_##]"],
          Var["[##_var_post_index_item_layout_type_##]"]
        )}
      >
        <s_t3>
          <RootContainer>
            <TopBar />

            <SideBar />

            <ContentContainer>
              <AdRowUpper />

              <HomeCover />

              <CategoryPageTitleRow />
              <GuestbookPageTitleRow />
              <TagPageTitleRow />

              <Posts />

              <Guestbook />

              <Tags />

              <Pagination />

              <AdRowLower />
            </ContentContainer>

            <PostsIndexContainer />

            <LatestVersionNotice />
          </RootContainer>
        </s_t3>
      </body>
    </html>
  );
}
