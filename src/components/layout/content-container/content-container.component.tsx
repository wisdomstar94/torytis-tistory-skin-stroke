import { ReactNode } from "react";
import { classes } from "../../../functions/common/common";

export function ContentContainer(props: { children: ReactNode }) {
  return (
    <>
      <main
        className={classes(
          "content-container",
          "block relative m-0 box-border transition-all-300ms",
          "ml-0 lg:ml-[320px]",
          "p-5 pt-[72px] lg:p-10 lg:pt-10",
          "tt-body-page:mr-0 lg:tt-body-page:mr-[320px]",
        )}
        >
        { props.children }
      </main>
    </>
  );
}