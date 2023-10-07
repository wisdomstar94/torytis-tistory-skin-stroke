import { classes } from "../../functions/common/common";
import { IModal } from "./modal.interface";
import './modal.scss';

export function Modal(props: IModal.Props) {
  const {
    id, 
    children,
    defaultWidth,
    defaultHeight,
    isOverflowXScroll,
    isOverflowYScroll,
    className,
    initShowState,
    isTestMode,
  } = props;

  return (
    <>
      <div
        className={classes(
          "modal-container",
          "fixed top-0 left-0 overflow-hidden flex items-center justify-center content-center z-10",
          initShowState === 'show' ? "my-show" : "",
          initShowState === 'hide' ? "my-hide" : "",
          "my-show:animate-[modal-container-show-animation_300ms_linear_0ms_1_normal_both]",
          "my-hide:animate-[modal-container-hide-animation_300ms_linear_0ms_1_normal_both]",
        )}
        id={id}>
        <div
          className={classes(
            "bg-black/70 w-screen h-screen absolute top-0 left-0",
            "parent-1-my-show:animate-[modal-bg-show-animation_300ms_linear_0ms_1_normal_both]",
            "parent-1-my-hide:animate-[modal-bg-hide-animation_300ms_linear_0ms_1_normal_both]",
          )}
          tt-onclick={`hideModal('${id}')`}
          />

        {/* <div
          className={classes(
            "w-screen h-screen relative flex items-center justify-center content-center z-10",
          )}> */}
        <div
          className={classes(
            "relative inline-block",
            defaultWidth === 'full' ? "w-full" : "max-w-full--20px",
            defaultHeight === 'full' ? "h-full" : "max-h-full--20px",
            isOverflowXScroll === true ? "overflow-x-scroll" : "",
            isOverflowYScroll === true ? "overflow-y-scroll" : "",
            typeof className === 'string' ? className : "",

            "parent-1-my-show:animate-[modal-show-animation_300ms_linear_0ms_1_normal_both]",
            "parent-1-my-hide:animate-[modal-hide-animation_300ms_linear_0ms_1_normal_both]",
          )}
          style={{ 
            width: typeof defaultWidth === 'number' ? `${defaultWidth}px` : undefined, 
            height: typeof defaultHeight === 'number' ? `${defaultHeight}px` : undefined, 
          }}
          >
          { children }
        </div>
        {/* </div> */}
      </div>

      {
        isTestMode ? 
        <>
          <button tt-onclick={`showModal('${id}')`}>{ id } modal 띄우기</button>
        </>
        : null
      }
    </>
  )
}