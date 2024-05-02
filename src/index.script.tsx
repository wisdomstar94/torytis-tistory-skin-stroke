import { initModalImageSwiperContent, showModalImageSwiper } from "./components/modals/modal-image-swiper/modal-image-swiper.script";
import { classes } from "./functions/common/common";
import { getPermalinkContentDivElements, getPermalinkContentDivSpanElements, getPermalinkContentHeadingElements, getPermalinkContentPElements, getPostsIndexItemLiElements } from "./functions/element/element";
import { element, getPostImageElements, isDarkMode } from "./functions/logic/logic";
import copy from 'copy-to-clipboard';

if (isDarkMode()) {
  document.querySelector<HTMLElement>('html')?.classList.add('dark');
}

window.addEventListener('load', () => {
  disposePermalinkContent(false);
  disposeIndexItemNewSymbol(false, '');
  postImageSwiperModalInit(false);
  checkPostsIndexItemThumbnailImageError(false, undefined);
  checkPostsIndexItemThumbnailImageLoad(false, undefined);
  subscribeCommnetListDomEvent(true);
  postDeleteButtonClick(false);
  checkCodeBlock();
  window.hljs.highlightAll();
  window.hljs.initLineNumbersOnLoad();
  checkDarkModeFontColor();
  checkFigureTags(false);
  checkHTags();
});

function disposePermalinkContent(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  document.querySelector<HTMLElement>(`.contents-wrapper-container`)?.classList.remove(`div-and-span-opacity-0`);

  // const permalinkContentDivElements = getPermalinkContentDivElements();
  // permalinkContentDivElements.forEach(element => {
  //   element.style.backgroundColor = 'transparent';
  //   element.style.opacity = '1';
  // });

  const permalinkContentPElements = getPermalinkContentPElements();
  permalinkContentPElements.forEach(element => {
    if (Array.from<string>(['#000', '#000000', 'rgb(0, 0, 0)']).includes(element.style.color)) {
      element.style.color = 'inherit';
    }
  });

  // const permalinkContentDivSpanElements = getPermalinkContentDivSpanElements();
  // permalinkContentDivSpanElements.forEach(element => {
  //   element.style.backgroundColor = 'transparent';
  //   element.style.opacity = '1';
  // });

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

function disposeIndexItemNewSymbol(isExecute: boolean, itemsParentSelector: string) {
  if (isExecute !== true) {
    return;
  }

  if (typeof itemsParentSelector !== 'string') {
    console.error(`itemsParentSelector 인자가 주어지지 않았습니다.`);
    return;
  }

  const elements = document.querySelectorAll(itemsParentSelector);
  // console.log(`@document.querySelectorAll('${itemsParentSelector}')`, elements);
  // getPostsIndexItemLiElements().forEach(element => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const datetimeString = element.querySelector('.index-item-datetime-text')?.textContent;
    // console.log('@element', element);
    // console.log('@datetimeString', datetimeString);
    if (typeof datetimeString !== 'string') continue;
    const date = new Date(datetimeString);
    if (isNaN(date.getFullYear())) continue;
    if (Date.now() - date.getTime() > (1000 * 60 * 60 * 24 * 3)) continue;
    element.querySelector('.overlay-info-area .new-post-symbol')?.classList.add('my-show');
  }
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

  if (thisObj === undefined) return;

  thisObj.style.display = 'none';
}

function checkPostsIndexItemThumbnailImageLoad(isExecute: boolean, thisObj: HTMLElement | undefined) {
  if (isExecute !== true) {
    return;
  }

  const defaultImgContainer = thisObj?.parentElement?.querySelector<HTMLElement>(`.posts-index-item-thumbnail-img-default-container`);
  if (defaultImgContainer !== null && defaultImgContainer !== undefined) {
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

  const elements = document.querySelectorAll<HTMLElement>(`.${className}`);

  // console.log('@elements', elements);
  elements.forEach((element: HTMLElement) => {
    if (element.textContent) {
      element.innerHTML = element.textContent;
    }
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

  const target = document.querySelector('.comment-list');
  if (target !== null) {
    observer.observe(target, {
      childList: true,
    });
  }
}

function postDeleteButtonClick(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  const result = prompt('해당 글을 삭제하시려면 "삭제" 라고 입력 후 확인을 클릭해주세요.');
  if (result !== '삭제') {
    return;
  }

  const realDeleteButton = document.querySelector<HTMLAnchorElement>('#real_post_delete_button');
  if (realDeleteButton === null) return;
  realDeleteButton.click();
}

function checkCodeBlock() {
  const contentsWrapperContainer = document.querySelector('.contents-wrapper-container.is_codeblock_copy_button_show_true');
  if (contentsWrapperContainer === null) return;

  const postBody = document.body.querySelector('.contents_style');
  if (postBody === null) return;

  const preElements = postBody.querySelectorAll('pre');
  preElements.forEach(elem => {
    const codeElement = elem.querySelector('code');
    if (codeElement !== null && typeof elem.getAttribute('data-ke-type') !== 'string') {
      elem.setAttribute('data-ke-type', 'codeblock');
    }
  });

  const codeblocks: Element[] = [];

  const codeBlockElements = postBody.querySelectorAll(`pre[data-ke-type='codeblock'], pre[data-ke-language], pre[class='gml']`);
  codeBlockElements.forEach((element) => {
    codeblocks.push(element);
  });

  // const codeBlockElements2 = postBody.querySelectorAll(`li > code`);
  // codeBlockElements2.forEach((element) => {
  //   if (element.parentElement !== null) {
  //     element.parentElement.classList.add('codeblock');
  //     if (codeblocks.find(x => x === element.parentElement) === undefined) {
  //       codeblocks.push(element.parentElement);
  //     }
  //   }
  // });

  const codeBlockElements2 = postBody.querySelectorAll(`code`);
  codeBlockElements2.forEach((element) => {
    // console.log('@element.classList.value', element.classList.value);
    const classString = element.classList.value.trim();
    // console.log('@classString', classString);
    if (classString !== '') {
      return;
    }

    // console.log('@...', { element, 'small-codeblock': '' });
    element.classList.add('small-codeblock');
  });

  // console.log('@codeBlockElements', codeBlockElements);

  // console.log('@codeblocks...', codeblocks);

  codeblocks.forEach(element => {
    // console.log('@codeblocks.element', element);
    const div = Element({
      tag: 'div',
      className: classes("absolute inline-flex top-2 right-2 cursor-pointer group/copy-button"),
      attrs: {
        onclick: "codeBlockCopyButtonClick(true, this)",
      },
      innerHTML: `
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="${
            classes(
              "w-6 h-6",
              "stroke-black/60 group-hover/copy-button:stroke-black",
              "dark:stroke-white/70 dark:group-hover/copy-button:stroke-white",
              "inline-flex parent-1-my-copyed:hidden",
            )
          }" 
          view-box="0 0 24 24" 
          stroke-width="2"
          stroke="currentColor" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </svg>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="${
            classes(
              "w-6 h-6",
              "stroke-black/60 group-hover/copy-button:stroke-black",
              "dark:stroke-white/70 dark:group-hover/copy-button:stroke-white",
              "hidden parent-1-my-copyed:inline-flex",
            )
          }" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          stroke-width="2" 
          stroke="currentColor" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          <path d="M11 14l2 2l4 -4" />
        </svg>
      `,
    });

    element.appendChild(div);
  });
}

function checkHTags() {
  document.querySelectorAll('.contents-wrapper-container h1, .contents-wrapper-container h2, .contents-wrapper-container h3, .contents-wrapper-container h4, .contents-wrapper-container h5, .contents-wrapper-container h6').forEach(item => {
    const value = item.getAttribute('data-ke-size');
    if (typeof value !== 'string') {
      item.setAttribute('data-ke-size', '');
    }
  });
}

function checkDarkModeFontColor() {
  const targetNode = document.querySelector('html');

  const check = () => {
    // console.log('@@dark 변동');
    const pNodes = document.querySelectorAll<HTMLElement>(`.contents-wrapper-container .contents_style p`);
    const spanNodes = document.querySelectorAll<HTMLElement>(`.contents-wrapper-container .contents_style span`);

    const nodeCallback = (node: HTMLElement) => {
      const styleColor = node.style.color;

      let dataOriginalColor = node.getAttribute('data-original-color');
      if (dataOriginalColor === null) {
        node.setAttribute('data-original-color', styleColor);
        dataOriginalColor = styleColor;
      }

      if (targetNode?.classList.contains('dark') === true) {
        // 다크모드일 경우 처리할 내용 작성..
        if (['rgb(51, 51, 51)', '#333'].includes(dataOriginalColor)) {
          node.style.color = '#fff';
        }
      } else {
        node.style.color = dataOriginalColor;
      }
    };

    pNodes.forEach((pNode) => {
      nodeCallback(pNode);
    });  

    spanNodes.forEach((pNode) => {
      nodeCallback(pNode);
    });  
  };

  check();

  const observer = new MutationObserver((mutations, observer) => {
    check();
  });
  if (targetNode !== null) {
    observer.observe(targetNode, {
      attributes: true,
      childList: false,
      subtree: false,
    });
  }  
}

function checkFigureTags(isExecute?: boolean) {
  if (isExecute !== true) return;

  // 정렬 셋팅
  const figuresEmoticon = document.querySelectorAll<HTMLElement>('.contents-wrapper-container .contents_style > figure[data-ke-type="emoticon"]');
  const figuresYoutubePlugin = document.querySelectorAll<HTMLElement>('.contents-wrapper-container .contents_style > figure[data-ke-type="video"]');
  
  const callback = (element: HTMLElement) => {
    const dataKeStyle = element.getAttribute('data-ke-style');
    const dataKeAlign = element.getAttribute('data-ke-align');
    const dataKeType = element.getAttribute('data-ke-type');
    if (dataKeType?.trim() === 'opengraph') return;

    const dataKe = (function() {
      if (typeof dataKeStyle === 'string') return dataKeStyle;
      if (typeof dataKeAlign === 'string') return dataKeAlign;
      return undefined;
    })();

    const alignItems = (function() {
      if (dataKe === 'alignLeft') {
        return '!items-start';
      }
      if (dataKe === 'alignCenter') {
        return '!items-center';
      }
      if (dataKe === 'alignRight') {
        return '!items-end';
      }
      return undefined;
    })();

    if (typeof alignItems !== 'string') return;
    element.style.removeProperty('text-align');
    element.classList.add(
      '!flex', 
      'flex-wrap', 
      'flex-col',
      alignItems,
    );
  };

  figuresEmoticon.forEach((element) => {
    callback(element);
  });
  figuresYoutubePlugin.forEach((element) => {
    callback(element);
  });
}

function Element(props: {
  tag: keyof HTMLElementTagNameMap;
  className?: string;
  attrs?: Record<string, string>;
  children?: HTMLElement[];
  innerHTML?: string;
}): HTMLElement {
  const {
    tag,
    className,
    attrs,
    children,
    innerHTML,
  } = props;

  const element = document.createElement(tag);

  if (typeof className === 'string') {
    const classNameSplit = className.split(' ');
    for (const cn of classNameSplit) {
      if (cn.trim() === '') {
        continue;
      }
      element.classList.add(cn);
    }
  }

  if (attrs !== undefined) {
    const keys = Object.keys(attrs);
    for (const key of keys) {
      const value = attrs[key];
      element.setAttribute(key, value);
    }
  }

  if (children !== undefined) {
    for (const child of children) {
      element.appendChild(child);
    }
  }

  if (typeof innerHTML === 'string') {
    element.innerHTML = innerHTML;
  }

  return element;
}

function codeBlockCopyButtonClick(isExecute: boolean, thisObj?: HTMLElement) {
  if (isExecute !== true) {
    return;
  }

  if (thisObj === undefined) {
    return;
  }

  // console.log('@thisObj', thisObj);
  const preElement = thisObj.parentElement;
  
  if (preElement === null) {
    alert('복사할 수 없습니다.');
    return;
  }

  const codes = preElement.querySelectorAll('code');
  const code = codes[0];
  const codeRows = preElement.querySelectorAll('code > table > tbody > tr > td.hljs-ln-code');
  
  let copyText = '';
  
  if (codes.length > 1) {
    copyText += preElement.textContent;
  } else if (codeRows.length > 0) {
    codeRows?.forEach(row => {
      copyText += row.textContent + '\n';
    });
  } else if (code !== null) {
    copyText += code.textContent + '\n';
  } 
  // console.log('@copyText', copyText);

  copy(copyText);
  // alert('코드가 복사되었습니다.');

  if (!thisObj.classList.contains('my-copyed')) {
    thisObj.classList.add('my-copyed');
    setTimeout(() => {
      thisObj.classList.remove('my-copyed');
    }, 1000);
  }
}
codeBlockCopyButtonClick(false);

