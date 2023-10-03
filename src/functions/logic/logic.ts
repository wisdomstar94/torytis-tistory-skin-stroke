import { ICommon } from "../../interfaces/common.interface";
import { getPostsHeadingTextElementItems } from "../element/element";

export function getPostsTotalCountText() {
  const target = document.querySelector('.side-bar a.link_tit span.c_cnt');
  if (target === null) {
    return '0';
  }
  const text = target.textContent;
  if (text === null) {
    return '0';
  }
  return text;
}

export function getCategoryCntText() {
  const pathnameSplit = location.pathname.split('/');
  const categoryName = decodeURIComponent(pathnameSplit[pathnameSplit.length - 1]).trim();

  const linkItemAElements = document.querySelectorAll('ul.category_list a.link_item');
  const linkItemASubElements = document.querySelectorAll('ul.category_list a.link_sub_item');
  
  const linkElements = [];
  linkItemAElements.forEach((element) => {
    linkElements.push(element);
  });
  linkItemASubElements.forEach((element) => {
    linkElements.push(element);
  });

  let targetElement = null;

  for (const element of linkElements) {
    const childNodes = element.childNodes;
    const firstNode = childNodes[0];
    const data = firstNode.data;
    if (typeof data !== 'string') {
      continue;
    }
    if (data.trim() === categoryName) {
      targetElement = element;
      break;
    }
  }

  if (targetElement === null) {
    return;
  }

  const c_cnt_element = targetElement.querySelector('span.c_cnt');
  if (c_cnt_element === null) {
    return;
  }

  const cntText = c_cnt_element.textContent;
  if (typeof cntText !== 'string') {
    return;
  }

  return cntText;
}

export function getPostsHeadingTextElementsDisplayRange() {
  const items: ICommon.PostsHeadingTextElementDisplayRangeItem[] = [];
  const elementItems = getPostsHeadingTextElementItems();
  const scrollTop = window.scrollY;
  elementItems.forEach((item, index) => {
    
    const rect = item.element.getBoundingClientRect();
    const start = rect.top + scrollTop;

    const nextElement = elementItems[index + 1]?.element ?? document.querySelector<HTMLElement>('.container_postbtn');
    const nextElementRect = nextElement.getBoundingClientRect();
    const end = nextElementRect.top + scrollTop;

    items.push({
      element: item.element,
      index: item.index,
      start: start - 50,
      end: end - 50,
    });
  });
  return items;
}

export function getElementAbsoluteXY(element: HTMLElement | null) {
	if (element === null) return undefined;
	const rect = element.getBoundingClientRect();
	const startY = rect.top + window.scrollY;
	const startX = rect.left + window.scrollX;
	const endY = startY + rect.height;
	const endX = startX + rect.width;
	return { 
		start: {
			x: startX,
			y: startY,
		},
		end: {
			x: endX,
			y: endY,
		},
	};
}