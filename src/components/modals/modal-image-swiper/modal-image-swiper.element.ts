import { element, elementSvg } from "../../../functions/logic/logic";
import { IModalImageSwiper } from "./modal-image-swiper.interface";
import { select, zoom, zoomIdentity } from 'd3';
import { slideToIndex, swipers } from "./modal-image-swiper.script";

export function getModalImageSwiperElements() {
  const elements: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(`.modal-image-swiper-container .modal-image-siwper`).forEach(k => elements.push(k));
  return elements;
}

export function getModalImageSwiperContainer(id: string) {
  return document.querySelector<HTMLElement>(`#${id}`);
}

export function getModalImageSwiperWrapperElement(id: string) {
  const container = getModalImageSwiperContainer(id);
  if (container === null) {
    return;
  }

  const target = container.querySelector('.swiper-wrapper');
  return target;
}

export function generateModalImageSwiper_BottomImageListItemElement(id: string, imageItem: IModalImageSwiper.ImageItem) {
  const item = element({
    tagName: 'li',
    className: "bottom-image-list-item inline-flex relative border border-black",
    children: [
      element({
        tagName: 'img',
        className: 'w-auto h-full object-fit',
        attrs: {
          src: imageItem.src,
          'data-index': imageItem.index.toString(),
        },
      }),
      element({
        tagName: 'div',
        className: 'w-full h-full absolute top-0 left-0 cursor-pointer hidden hover:bg-black/50 hover:flex parent-1-active:bg-black/50 parent-1-active:flex flex-wrap items-center justify-center',
        children: element({
          tagName: 'div',
          className: 'inline-flex flex-wrap relative stroke-white',
          innerHTML: `
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-white icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
          `,
        }),
      }),
    ],
  });
  item.addEventListener('click', (event) => {
    slideToIndex(id, imageItem.index);
  });
  return item;
}

export function generateModalImageSwiper_SlideItemElement(imageItem: IModalImageSwiper.ImageItem) {
  const item = element({
    tagName: 'div',
    className: 'swiper-slide',
    children: elementSvg({
      namespaceURI: 'http://www.w3.org/2000/svg',
      tagName: 'svg',
      className: 'w-full h-full relative',
      onElement(element) {
        const svg = select(element);
        // const g = svg.append('g');
        const image = svg.append('image');
        image.attr('href', imageItem.src);

        const _zoom = zoom<SVGSVGElement, any>().on("zoom", (e: any) => {
          console.log('zoom.e', e);
          const transform = e.transform; // {k: 1, x: -4, y: -85}
          image.attr("transform", `translate(${transform.x} ${transform.y}) scale(${transform.k})`)
        });

        svg
          .call(_zoom, zoomIdentity)
        ;
      },
    }),
  });
  return item;
}

export function getModalImageSwiper_BottomImageListContainerElement(id: string) {
  const container = getModalImageSwiperContainer(id);
  if (container === null) {
    console.error(`[getModalImageSwiperBottomImageListContainerElement] ${id} id 에 해당하는 modal-image-swiper 요소가 없습니다.`);
    return;
  }

  const target = container.querySelector<HTMLElement>(`.bottom-image-list-container`);
  return target;
}

export function getModalImageSwiper_BottomImageListElement(id: string) {
  const container = getModalImageSwiper_BottomImageListContainerElement(id);
  if (container === null) return null;
  return container.querySelector<HTMLUListElement>(`.bottom-image-list`);
}

export function getModalImageSwiper_BottomImageItemElements(id: string) {
  const target = getModalImageSwiper_BottomImageListContainerElement(id);
  if (target === null) {
    return;
  }
  const elements: HTMLElement[] = [];
  target.querySelectorAll<HTMLElement>(`.bottom-image-list-item`).forEach(t => elements.push(t));
  return elements;
}

