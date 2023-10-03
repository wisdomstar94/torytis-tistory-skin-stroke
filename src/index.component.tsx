import React from "react";
import './index.scss';
import { TopBar } from "./components/layout/top-bar/top-bar.component";
import { SideBar } from "./components/layout/side-bar/side-bar.component";
import { ContentContainer } from "./components/layout/content-container/content-container.component";
import { AdRow } from "./components/content/ad-row/ad-row.component";
import { NormalPageTitleRow } from "./components/content/normal-page-title-row/normal-page-title-row.component";
import { CategoryPageTitleRow } from "./components/content/category-page-title-row/category-page-title-row.component";
import { GuestbookPageTitleRow } from "./components/content/guestbook-page-title-row/guestbook-page-title-row.component";
import { TagPageTitleRow } from "./components/content/tag-page-title-row/tag-page-title-row.component";
import { Posts } from "./components/content/posts/posts.component";
import { Guestbook } from "./components/content/guestbook/guestbook.component";
import { Tags } from "./components/content/tags/tags.component";
import { Pagination } from "./components/content/pagination/pagination.component";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no" />
        <meta property="og:title" content="[##_page_title_##] :: [##_title_##]" />
        <title>[##_page_title_##] :: [##_title_##]</title>
        <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/highlight.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.8.0/dist/highlightjs-line-numbers.min.js"></script>
      </head>
      <body id="[##_body_id_##]">
        <s_t3>
          <TopBar />
          <SideBar />
          <ContentContainer>
            <AdRow />

            <NormalPageTitleRow />
            <CategoryPageTitleRow />
            <GuestbookPageTitleRow />
            <TagPageTitleRow />

            <Posts />

            <Guestbook />

            <Tags />

            <Pagination />
          </ContentContainer>
        </s_t3>
      </body>
    </html>
  );
}