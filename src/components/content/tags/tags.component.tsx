import { classes } from "../../../functions/common/common";

export function Tags() {
  return (
    <>
      <s_tag>
        <div
          className={classes(
            "block m-0 mb-1 p-0 relative text-none",
          )}>
          <s_tag_rep>
            <a 
              href="[##_tag_link_##]" 
              rel="tag"
              className={classes(
                "inline-flex flex-nowrap whitespace-nowrap break-all text-xs border",
                "box-border decoration-transparent rounded-full mr-2 mb-2 px-3 py-1 cursor-pointer",

                "border-black dark:border-white dark-c:border-white",
                "text-black dark:text-white dark-c:text-white",
              )}>
              #[##_tag_name_##]
            </a>
          </s_tag_rep>
        </div>
      </s_tag>
    </>
  );
}