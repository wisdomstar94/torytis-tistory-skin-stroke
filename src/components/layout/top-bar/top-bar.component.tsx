import { classes } from '../../../functions/common/common';
import { SvgHamburger } from '../../svgs/svg-hamburger/svg-hamburger.component';

export function TopBar() {
  return (
    <>
      <header 
        className={classes(
          "top-bar",
          "w-full block fixed top-0 left-0 z-[2]",
          "lg:hidden",
          "!transition-colors !duration-300",
          "bg-white dark:bg-black dark-c:bg-black",
        )}>
        <div
          // container
          className={classes(
            "w-full h-[52px] flex flex-wrap relative items-center justify-start box-border",
            "p-3 border-b ",
            "border-b-black dark:border-b-white dark-c:border-b-white",
          )}
          >
          <div
            // left
            className={classes(
              "w-full flex flex-1 relative",
            )}
            >
            <div
              // blog-title
              className={classes(
                "flex justify-start text-base font-bold whitespace-pre-line break-all relative",
                "text-left tracking-tight overflow-ellipsis whitespace-nowrap overflow-hidden",
                "text-black dark:text-white dark-c:text-white",
              )}
              >
              [##_title_##]
            </div>
          </div>
          <div
            // right
            className={classes(
              "w-[46px] flex flex-wrap justify-end items-center relative",
            )}
            >
            <button
              // sidebar-show-button
              aria-label="side bar show button"
              className={classes(
                "sidebar-show-button",
                "border-0 bg-transparent outline-none cursor-pointer relative",
                "",
              )}
              >
              <SvgHamburger 
                className="dark:stroke-white dark-c:stroke-white" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}