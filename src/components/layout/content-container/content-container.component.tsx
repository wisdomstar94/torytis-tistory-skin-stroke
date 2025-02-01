import { ReactNode } from "react";
import { classes } from "../../../functions/common/common";

export function ContentContainer(props: { children: ReactNode }) {
  return (
    <>
      <main
        className={classes(
          "content-container",
          "block relative m-0 box-border transition-all-300ms",
          "ml-0",
          "tt-body-page:lg:ml-[320px]",
          "main_layout_order_type_reverse:lg:mr-[320px]",
          "p-5 pt-[72px] lg:p-10 lg:pt-10",
          "tt-body-page:mr-0 lg:tt-body-page:mr-[320px]",
          "tt-body-page:main_layout_order_type_reverse:ml-0 tt-body-page:main_layout_order_type_reverse:lg:ml-[320px]"
        )}
      >
        {props.children}
      </main>
    </>
  );
}
