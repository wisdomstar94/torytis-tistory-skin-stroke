import { classes } from "../../../functions/common/common";

export function AdRowUpper() {
  return (
    <>
      <tt_html_comment>블로그 홈/목록 상단</tt_html_comment>
      <div 
        className={classes(
          "w-full block relative box-border",
        )}
        >
        [##_revenue_list_upper_##]
      </div>
    </>
  );
}