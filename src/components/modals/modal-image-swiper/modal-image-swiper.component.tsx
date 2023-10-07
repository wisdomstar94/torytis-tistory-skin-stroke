import { classes } from "../../../functions/common/common";
import { Modal } from "../../forms/modal/modal.component";
import { SvgX } from "../../svgs/svg-x/svg-x.component";
import { IModalImageSwiper } from "./modal-image-swiper.interface";

export function ModalImageSwiper(props: IModalImageSwiper.Props) {
  const {
    id,
    initShowState,
  } = props;

  return (
    <>
      <Modal
        id={id}
        defaultWidth={1280}
        defaultHeight={1280}
        initShowState={initShowState}
        className="modal-image-swiper-container"
        >
        <div className={classes("w-full h-full flex flex-wrap relative")}>
          <div className={classes("w-full h-full--60px relative")}>
            <div className={classes("w-full h-full--20px relative overflow-hidden")}>
              {/* Slider main container */}
              <div className="swiper modal-image-siwper" data-id={id}>
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Slides */}
                  {/* <div className="swiper-slide">Slide 1</div>
                  <div className="swiper-slide">Slide 2</div>
                  <div className="swiper-slide">Slide 3</div>
                  ... */}
                </div>
                {/* If we need pagination */}
                {/* <div className="swiper-pagination"></div> */}

                {/* If we need navigation buttons */}
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}

                {/* If we need scrollbar */}
                {/* <div className="swiper-scrollbar"></div> */}
              </div>
            </div>
          </div>
          <div 
            className={classes(
              "bottom-image-list-container",
              "w-full h-[60px] relative flex flex-nowrap overflow-x-scroll whitespace-nowrap flex-shrink-0"
            )}>
            <ul className="bottom-image-list flex flex-nowrap flex-shrink-0">

            </ul>
            {/* ... */}
          </div>
        </div>
        <div 
          className={classes(
            "w-[30px] h-[30px] flex flex-wrap items-center cursor-pointer justify-center absolute -top-[10px] -right-[10px] z-10",
            "modal-image-swiper-container-close-button",
          )}
          >
          <SvgX 
            className="stroke-white"
            />
        </div>
      </Modal>
    </>
  );
}