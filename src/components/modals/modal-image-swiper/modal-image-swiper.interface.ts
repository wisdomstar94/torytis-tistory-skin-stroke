import Swiper from "swiper";
import { IModal } from "../../forms/modal/modal.interface";

export declare namespace IModalImageSwiper {
  export interface ImageItem {
    src: string;
    index: number;
  }

  export interface SwiperItem {
    id: string;
    swiper: Swiper;
  }

  export interface Props {
    id: string;
    initShowState?: IModal.ShowState;
  }
}