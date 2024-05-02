import { getPostsHeadingTextElementItems, getPostsIndexItemLiElements, getPostsIndexLiElement, getPostsIndexLiElements, getPostsIndexUlListElement } from "../../../functions/element/element";
import { getElementAbsoluteXY, getPostsHeadingTextElementsDisplayRange } from "../../../functions/logic/logic";

window.addEventListener('load', () => {
  const postsIndexUlListElement = getPostsIndexUlListElement();
  if (postsIndexUlListElement !== null) {
    const postsHeadingTextElementItems = getPostsHeadingTextElementItems();
    // console.log('@@@ @@@postsHeadingTextElementItems', postsHeadingTextElementItems);

    if (postsHeadingTextElementItems.length > 0) {
      for (const item of postsHeadingTextElementItems) {
        const text = item.element.textContent ?? '';
        const li = getItemElement(text, getMl(item.element.nodeName.toLowerCase()));
        li.addEventListener('click', () => {
          const postsHeadingTextElementsDisplayRange = getPostsHeadingTextElementsDisplayRange();
          const target = postsHeadingTextElementsDisplayRange.find(x => x.element === item.element);
          if (target === undefined){
            return;
          }
          window.scrollTo({
            behavior: 'smooth',
            top: target.start + 30,
          });
        });
        postsIndexUlListElement.appendChild(li);
      }
    } else {
      const li = getEmptyItemElement();
      postsIndexUlListElement.appendChild(li);
    } 
  }

  function postsIndexCheck() {
    const postsHeadingTextElementsDisplayRange = getPostsHeadingTextElementsDisplayRange();
    // console.log('@postsHeadingTextElementsDisplayRange', postsHeadingTextElementsDisplayRange);
    if (postsHeadingTextElementsDisplayRange.length === 0) return;

    const scrollTop = window.scrollY;
    getPostsIndexLiElements()?.forEach((element) => {
      element.classList.remove('active');
    });
    // console.log('@scrollTop', scrollTop);
    postsHeadingTextElementsDisplayRange.forEach((item, index) => {
      // console.log('@item', item);
      if (scrollTop > item.start && scrollTop <= item.end) {
        // console.log('matched', item);
        const postsIndexLi = getPostsIndexLiElement(item.element.textContent, index);
        postsIndexLi?.classList.add('active');
      } 
    });
  }
  postsIndexCheck();

  window.addEventListener('scroll', () => {
    postsIndexCheck();
  });

  // console.log('@1. performance.now()', performance.now());
  // const observer = new MutationObserver((record) => {
  //   // console.log('@2. performance.now()', performance.now());
  //   hashCheck();
  // });
  // observer.observe(document.querySelector('.comment-list'), {
  //   childList: true,
  // });
  setTimeout(() => {
    hashCheck();
  }, 500);
  setTimeout(() => {
    hashCheck();
  }, 1000);
});

window.addEventListener("hashchange", () => {
  hashCheck();
}); 

function hashCheck() {
  const hash = location.hash;
  if (hash.startsWith(`#comment`)) {
    const targetCommnetElement = document.querySelector<HTMLElement>(hash);
    const positionInfo = getElementAbsoluteXY(targetCommnetElement);
    if (positionInfo !== undefined) {
      window.scrollTo({
        top: positionInfo.start.y - 20,
        // behavior: 'smooth',
      });
    }
  }
}

function getItemElement(text: string, className: string) {
  const li = document.createElement('li');
  li.classList.add(
    "posts-index-item",
    "flex",
    "flex-nowrap",
    "m-0",
    // "py-3",
    "px-0",
    "relative",
    "list-none",
    "cursor-pointer",
    "text-aaa", "dark:text-777", "dark-c:text-777",
    "active:text-black", "dark:active:text-white", "dark-c:active:text-white",
  );
  for (const item of className.split(' ')) {
    if (item.trim() !== '') {
      li.classList.add(item)
    };
  }

  const span2 = document.createElement('span');
  span2.classList.add(
    "overflow-hidden", "w-0",
    "parent-title-1depth:w-[36px]", 
    "parent-title-2depth:w-[72px]",
    "parent-title-3depth:w-[108px]",
    "flex", "flex-wrap", "flex-shrink", "justify-end",
    "box-border", "pr-2",
  );
  // span2.textContent = '⤷';

  const span = document.createElement('span');
  span.classList.add(
    "only-text",
    "py-3",
    "whitespace-pre-line",
    "break-all",
    "w-full", "flex", "flex-wrap",
    "border-b",
    "border-dotted",
    "border-b-ccc",
  );
  span.textContent = text;

  li.appendChild(span2);
  li.appendChild(span);

  return li;
}

function getEmptyItemElement() {
  const li = document.createElement('li');
  li.classList.add(
    "posts-index-item", "h4",
    "block",
    "m-0",
    "py-3",
    "px-0",
    "relative",
    "list-none",
    "cursor-pointer",
    "border-b",
    "border-dotted",
    "border-b-ccc",
  );

  const span = document.createElement('span');
  span.classList.add(
    "text-aaa", "dark:text-ccc", "dark-c:text-ccc",
  );
  span.textContent = '표시할 목차가 없습니다.';

  li.appendChild(span);

  return li;
}

function getMl(headingTag: string) {
  if (isH1Exist()) {
    if (Array.from<string>(['h2']).includes(headingTag)) {
      return 'title-1depth';
    }
    if (Array.from<string>(['h3']).includes(headingTag)) {
      return 'title-2depth';
    }
    if (Array.from<string>(['h4']).includes(headingTag)) {
      return 'title-3depth';
    }
    return '';
  } else {
    if (Array.from<string>(['h3']).includes(headingTag)) {
      return 'title-1depth';
    }
    if (Array.from<string>(['h4']).includes(headingTag)) {
      return 'title-2depth';
    }
    return '';
  }
}

function isH1Exist() {
  const h1Tag = document.querySelector('#tt-body-page .contents_style > h1');
  return h1Tag !== null;
}