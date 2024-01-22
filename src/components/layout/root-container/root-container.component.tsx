import { ReactNode } from "react";
import { classes } from "../../../functions/common/common";
import { GoToScrollTopButton } from "../../go-to-scroll-top-button/go-to-scroll-top-button.component";
import { Var } from "../../../../torytis-variable-object";

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
                  max-width: ${Var['[##_var_blog_screen_max_width_##]']}px;
                }
              </style>
            `,
          }}
          />
      </s_if_var_blog_screen_max_width>
      <GoToScrollTopButton />
    </>
  );
}