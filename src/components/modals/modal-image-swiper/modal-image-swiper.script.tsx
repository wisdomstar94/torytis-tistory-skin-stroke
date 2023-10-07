import { hideModal, showModal } from "../../forms/modal/modal.script";
import { generateModalImageSwiper_BottomImageListItemElement, generateModalImageSwiper_SlideItemElement, getModalImageSwiperElements, getModalImageSwiperWrapperElement, getModalImageSwiper_BottomImageItemElements, getModalImageSwiper_BottomImageListContainerElement, getModalImageSwiper_BottomImageListElement } from "./modal-image-swiper.element";
import { IModalImageSwiper } from "./modal-image-swiper.interface";
import Swiper from 'swiper';

export const swipers: IModalImageSwiper.SwiperItem[] = [];

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
    swipers.push({
      id: swiperElement.getAttribute('data-id').toString(),
      swiper,
    });
  });

  showModalImageSwiper(undefined, 0);
  hideModalImageSwiper(undefined);

  const closeButtonElement = document.querySelector<HTMLElement>(`.modal-image-swiper-container-close-button`);
  closeButtonElement.addEventListener('click', () => {
    const modalImageSwiperElement = closeButtonElement.parentElement.parentElement;
    const modalImageSwiperId = modalImageSwiperElement.id;
    hideModalImageSwiper(modalImageSwiperId);
  });
});

export function showModalImageSwiper(id: string | undefined, index: number) {
  if (id === undefined) return;
  showModal(id);
  slideToIndex(id, index);
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

  imageItems.forEach(k => {
    const bottomitem = generateModalImageSwiper_BottomImageListItemElement(id, k);
    bottomImageListElement?.appendChild(bottomitem);

    const swiperItem = generateModalImageSwiper_SlideItemElement(k);
    swiperWrapperElement?.appendChild(swiperItem);
  });
}

export function slideToIndex(id: string, index: number) {
  swipers.find(k => k.id === id).swiper.slideTo(index, 300);

  const bottomItemElements = getModalImageSwiper_BottomImageItemElements(id);
  bottomItemElements.forEach((item, itemIndex) => {
    if (itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }); 

  const bottomUlContainer = getModalImageSwiper_BottomImageListContainerElement(id);
  // const bottomUl = getModalImageSwiper_BottomImageListElement(id);
  const applyScrollLeft = bottomItemElements.find((k, _index) => _index === index).offsetLeft;
  // console.log('bottomUlContainer', bottomUlContainer);
  // console.log('applyScrollLeft', applyScrollLeft);
  bottomUlContainer.scrollLeft = applyScrollLeft;
}