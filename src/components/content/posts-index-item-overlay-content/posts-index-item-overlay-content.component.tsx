import { classes } from "../../../functions/common/common";
import './posts-index-item-overlay-content.scss';

export function PostsIndexItemOverlayContent() {
  return (
    <>
      <div 
        className={classes(
          "overlay-info-area",
          "absolute -top-[6px] -left-[6px] z-[2]",
        )}
        >
        <div 
          className={classes(
            "new-post-symbol",
            "w-[80px] relative bg-black justify-center items-center overflow-hidden box-border",
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
      </div>
    </>
  );
}