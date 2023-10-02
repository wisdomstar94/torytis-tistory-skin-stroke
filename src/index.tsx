import React from "react";
import './index.scss';
import { TopBar } from "./components/layout/top-bar/top-bar.component";
import { SideBar } from "./components/layout/side-bar/side-bar.component";

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
        </s_t3>
      </body>
    </html>
  );
}