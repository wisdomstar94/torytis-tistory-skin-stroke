import { initModalImageSwiperContent, showModalImageSwiper } from "./components/modals/modal-image-swiper/modal-image-swiper.script";
import { getPermalinkContentDivElements, getPermalinkContentDivSpanElements, getPermalinkContentHeadingElements, getPermalinkContentPElements, getPostsIndexItemLiElements } from "./functions/element/element";
import { getPostImageElements, isDarkMode } from "./functions/logic/logic";

if (isDarkMode()) {
  document.querySelector<HTMLElement>('html').classList.add('dark');
}

window.addEventListener('load', () => {
  disposePermalinkContent(false);
  disposeIndexItemNewSymbol(false);
  postImageSwiperModalInit(false);
  checkPostsIndexItemThumbnailImageError(false, undefined);
  checkPostsIndexItemThumbnailImageLoad(false, undefined);
  subscribeCommnetListDomEvent(true);
  window.hljs.highlightAll();
  window.hljs.initLineNumbersOnLoad();
});

function disposePermalinkContent(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  const permalinkContentDivElements = getPermalinkContentDivElements();
  permalinkContentDivElements.forEach(element => {
    element.style.backgroundColor = 'transparent';
    element.style.opacity = '1';
  });

  const permalinkContentPElements = getPermalinkContentPElements();
  permalinkContentPElements.forEach(element => {
    if (Array.from<string>(['#000', '#000000', 'rgb(0, 0, 0)']).includes(element.style.color)) {
      element.style.color = 'inherit';
    }
  });

  const permalinkContentDivSpanElements = getPermalinkContentDivSpanElements();
  permalinkContentDivSpanElements.forEach(element => {
    element.style.backgroundColor = 'transparent';
    element.style.opacity = '1';
  });

  const permalinkContentHeadingElements = getPermalinkContentHeadingElements();
  permalinkContentHeadingElements.forEach(element => {
    if (Array.from<string>(['#000', '#000000', 'rgb(0, 0, 0)']).includes(element.style.color)) {
      element.style.color = 'inherit';
    }
  });

  const postImageElements = getPostImageElements();
  postImageElements.forEach((imgElement, index) => {
    imgElement.addEventListener('click', () => {
      showModalImageSwiper('post-image-swiper-modal', index);
    });
  });
}

function disposeIndexItemNewSymbol(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  getPostsIndexItemLiElements().forEach(element => {
    const datetimeString = element.querySelector('.index-item-datetime-text')?.textContent;
    if (typeof datetimeString !== 'string') return;
    const date = new Date(datetimeString);
    if (isNaN(date.getFullYear())) return;
    if (Date.now() - date.getTime() > (1000 * 60 * 60 * 24 * 3)) return;
    element.querySelector('.overlay-info-area .new-post-symbol')?.classList.add('my-show');
  });
}

function postImageSwiperModalInit(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  const postImageElements = getPostImageElements();
  if (postImageElements.length === 0) {
    return;
  }

  initModalImageSwiperContent('post-image-swiper-modal', postImageElements.map((x, index) => {
    return {
      src: x.src,
      index,
    };
  }));
} 

function checkPostsIndexItemThumbnailImageError(isExecute: boolean, thisObj: HTMLElement | undefined) {
  if (isExecute !== true) {
    return;
  }

  thisObj.style.display = 'none';
}

function checkPostsIndexItemThumbnailImageLoad(isExecute: boolean, thisObj: HTMLElement | undefined) {
  if (isExecute !== true) {
    return;
  }

  const defaultImgContainer = thisObj.parentElement.querySelector<HTMLElement>(`.posts-index-item-thumbnail-img-default-container`);
  if (defaultImgContainer !== null) {
    defaultImgContainer.style.display = 'none';
  }
}

function removeHTMLTag(obj: {
  isExecute?: boolean;
  className: string;
}) {
  // console.log('@removeHTMLTag', obj);
  const {
    isExecute,
    className,
  } = obj;

  if (isExecute !== true) {
    return;
  }

  // console.log('@className', className);

  const elements = document.querySelectorAll(`.${className}`);

  // console.log('@elements', elements);
  elements.forEach((element: HTMLElement) => {
    element.innerHTML = element.textContent;
  });
}

function convertCommentDesc() {
  // console.log(`document.querySelector('.comment-list')`, document.querySelector('.comment-list'));
  // console.log(`document.querySelector('.comment-list').children`, document.querySelector('.comment-list').children);
  removeHTMLTag({ isExecute: true, className: 'comment-desc' });
}

function subscribeCommnetListDomEvent(isExecute: boolean) {
  // console.log('@subscribeCommnetListDomEvent called!!', isExecute);

  if (isExecute !== true) {
    return;
  }

  const observer = new MutationObserver((record) => {
    // console.log('@record', record);
    convertCommentDesc();
  });
  observer.observe(document.querySelector('.comment-list'), {
    childList: true,
    
  });
}