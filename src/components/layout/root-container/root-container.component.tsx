import { ReactNode } from "react";
import { classes } from "../../../functions/common/common";

export function RootContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className={classes(
          "blog-root-container box-border",
          "w-full min-h-screen relative block mx-auto",
          "overflow-hidden",
          "outline outline-1",
          "outline-black dark:outline-white",
        )}>
        { children }
      </div>
      <s_if_var_blog_screen_max_width>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                .blog-root-container {
                  max-width: [##_var_blog_screen_max_width_##]px;
                }
              </style>
            `,
          }}
          />
      </s_if_var_blog_screen_max_width>
    </>
  );
}