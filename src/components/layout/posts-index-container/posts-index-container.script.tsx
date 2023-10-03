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

  function hashCheck() {
    const hash = location.hash;
    if (hash.startsWith(`#comment`)) {
      const targetCommnetElement = document.querySelector<HTMLElement>(hash);
      const positionInfo = getElementAbsoluteXY(targetCommnetElement);
      if (positionInfo !== undefined) {
        window.scrollTo({
          top: positionInfo.start.y - 20,
          behavior: 'smooth',
        });
      }
    }
  }

  setTimeout(() => {
    hashCheck();
  }, 150);
  
  window.addEventListener("hashchange", () => {
    hashCheck();
  }); 
});

function getItemElement(text: string, className: string) {
  console.log('@getItemElement.text', text);
  const li = document.createElement('li');
  li.classList.add(
    "posts-index-item",
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
    className,
  );

  const span = document.createElement('span');
  span.classList.add(
    "text-aaa",
    "parent-active:text-black",
  );
  span.textContent = text;

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
    "text-aaa",
  );
  span.textContent = '표시할 목차가 없습니다.';

  li.appendChild(span);

  return li;
}

function getMl(headingTag: string) {
  if (Array.from<string>(['h1', 'h2']).includes(headingTag)) {
    return 'ml-0';
  }
  if (Array.from<string>(['h3', 'h4']).includes(headingTag)) {
    return 'ml-4';
  }
  if (Array.from<string>(['h5', 'h6']).includes(headingTag)) {
    return 'ml-8';
  }
  return '0';
}