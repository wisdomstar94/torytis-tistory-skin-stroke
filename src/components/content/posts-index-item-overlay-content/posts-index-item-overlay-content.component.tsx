import { classes } from "../../../functions/common/common";
import { SvgShieldLockFilled } from "../../svgs/svg-shield-lock-filled/svg-shield-lock-filled.component";
import './posts-index-item-overlay-content.scss';

export function PostsIndexItemOverlayContent() {
  return (
    <>
      <div 
        className={classes(
          "overlay-info-area flex flex-wrap w-[80px] gap-1",
          "absolute -top-[6px] -left-[6px] z-[2]",
        )}
        >

        {/* NEW */}
        <div 
          className={classes(
            "new-post-symbol",
            "w-full relative bg-black justify-center items-center overflow-hidden box-border",
            "hidden my-show:inline-flex",

            // "border-black dark:border-white dark-c:border-white",
            "dark:outline-white dark-c:outline-white",
            "dark:outline dark-c:outline",
            "dark:outline-4 dark-c:outline-4",
            "dark:outline-offset-0 dark-c:outline-offset-0",
          )}
          >
          <div 
            // white-effect
            className={classes(
              "white-effect",
              "w-2 h-[40px] flex bg-white transform-rotate-15deg absolute",
              "animate-[new-post-symbol-white-effect-animation_3000ms_cubic-bezier(0.25,_1,_0.5,_1)_0ms_infinite_normal_both]",
            )}
            />
          <div
            // text-area
            className={classes(
              "text-sm text-white flex flex-wrap",
              "justify-center items-center relative p-1",
            )}
            >
            NEW
          </div>
        </div>

        {/* 비밀글 */}
        <s_ad_div>
          <div
            data-status="[##_s_ad_s1_label_##]"
            className={classes(
              "secret-post-symbol",
              "w-full relative bg-black justify-center items-center overflow-hidden box-border py-0.5",

              "dark:outline-white dark-c:outline-white",
              "dark:outline dark-c:outline",
              "dark:outline-4 dark-c:outline-4",
              "dark:outline-offset-0 dark-c:outline-offset-0",
            )}>
            <SvgShieldLockFilled 
              width={24}
              height={24}
              className="fill-white"
              />
          </div>
        </s_ad_div>
      </div>
    </>
  );
}