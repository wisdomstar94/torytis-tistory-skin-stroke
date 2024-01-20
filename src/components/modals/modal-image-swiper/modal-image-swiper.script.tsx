import { hideModal, isModalHide, showModal } from "../../forms/modal/modal.script";
import { generateModalImageSwiper_BottomImageListItemElement, generateModalImageSwiper_SlideItemElement, getModalImageSwiperElements, getModalImageSwiperWrapperElement, getModalImageSwiper_BottomImageItemElements, getModalImageSwiper_BottomImageListContainerElement, getModalImageSwiper_BottomImageListElement } from "./modal-image-swiper.element";
import { IModalImageSwiper } from "./modal-image-swiper.interface";
import Swiper from 'swiper';

export const swipers: IModalImageSwiper.SwiperItem[] = [];
const imageCountMap: Map<string, number> = new Map();

window.addEventListener('load', () => {
  getModalImageSwiperElements().forEach(swiperElement => {
    const swiper = new Swiper(swiperElement, {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      // touchRatio: 0,
      allowTouchMove: false,
  
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    const id = swiperElement.getAttribute('data-id')?.toString() ?? '';
    swipers.push({
      id,
      swiper,
    });

    window.addEventListener('keydown', function(event) {
      if (isModalHide(id)) return;

      const key = event.key.toLowerCase();

      if (key === 'arrowleft') {
        slideToIndex(id, swiper.realIndex - 1, true);
      }

      if (key === 'arrowright') {
        slideToIndex(id, swiper.realIndex + 1, true);
      }
    });
  });

  showModalImageSwiper(undefined, 0);
  hideModalImageSwiper(undefined);

  const closeButtonElement = document.querySelector<HTMLElement>(`.modal-image-swiper-container-close-button`);
  closeButtonElement?.addEventListener('click', () => {
    const modalImageSwiperElement = closeButtonElement.parentElement?.parentElement;
    const modalImageSwiperId = modalImageSwiperElement?.id;
    hideModalImageSwiper(modalImageSwiperId);
  });
});

export function showModalImageSwiper(id: string | undefined, index: number) {
  if (id === undefined) return;
  showModal(id);
  slideToIndex(id, index, true);
} 

export function hideModalImageSwiper(id: string | undefined) {
  if (id === undefined) return;
  hideModal(id);
}

export function initModalImageSwiperContent(id: string, imageItems: IModalImageSwiper.ImageItem[]) {
  if (imageItems.length === 0) return;  

  const targetModalImageSwiperContainer = document.querySelector<HTMLElement>(`#${id}`);
  if (targetModalImageSwiperContainer === null) return;

  // const bottomImageListContainer = targetModalImageSwiperContainer.querySelector<HTMLElement>(`.bottom-image-list-container`);
  const bottomImageListElement = getModalImageSwiper_BottomImageListElement(id);
  const swiperWrapperElement = getModalImageSwiperWrapperElement(id);

  imageCountMap.set(id, imageItems.length);

  imageItems.forEach(k => {
    const bottomitem = generateModalImageSwiper_BottomImageListItemElement(id, k);
    bottomImageListElement?.appendChild(bottomitem);

    const swiperItem = generateModalImageSwiper_SlideItemElement(k);
    swiperWrapperElement?.appendChild(swiperItem);
  });
}

export function slideToIndex(id: string, index: number, isBottomItemAutoFocus?: boolean) {
  if (index < 0) {
    return;
  }
  const targetSwiper = swipers?.find(k => k.id === id);
  if (targetSwiper === undefined) {
    return;
  }
  const itemCount = imageCountMap.get(id);

  if (index > (itemCount ?? 0) - 1) {
    return;
  }
  targetSwiper.swiper.slideTo(index, 300);

  const bottomItemElements = getModalImageSwiper_BottomImageItemElements(id);
  bottomItemElements?.forEach((item, itemIndex) => {
    if (itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }); 

  if (isBottomItemAutoFocus === true) {
    const bottomUlContainer = getModalImageSwiper_BottomImageListContainerElement(id);
    const applyScrollLeft = bottomItemElements?.find((k, _index) => _index === index)?.offsetLeft;
    if (applyScrollLeft !== undefined && bottomUlContainer !== undefined && bottomUlContainer !== null) {
      bottomUlContainer.scrollLeft = applyScrollLeft;
    }
  }
}