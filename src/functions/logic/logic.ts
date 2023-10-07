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

export function isDarkMode() {
  const is_dark_mode = localStorage.getItem('is_dark_mode');
  if (is_dark_mode !== null) {
    if (is_dark_mode === 'true') {
      return true;
    } else {
      return false;
    }
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }

  return false;
}

export function setDarkMode(v: boolean) {
  localStorage.setItem('is_dark_mode', v === true ? 'true' : 'false');
}

export function element<K extends keyof HTMLElementTagNameMap>(params: {
  tagName: K;
  id?: string;
  className?: string;
  attrs?: Record<string, string>;
  children?: HTMLElement[] | HTMLElement | Element;
  onElement?: (element: HTMLElementTagNameMap[K]) => void;
  innerHTML?: string;
}) {
  const target = document.createElement(params.tagName);

  if (typeof params.id === 'string') {
    target.id = params.id;
  }

  if (typeof params.className === 'string') {
    params.className.split(' ').forEach(v => target.classList.add(v));
  }

  if (params.attrs !== undefined) {
    const keys = Object.keys(params.attrs);
    for (const key of keys) {
      const value = params.attrs[key];
      target.setAttribute(key, value);
    }
  }

  const applyChildren: (HTMLElement | Element)[] = [];
  if (params.children !== undefined) {
    if (Array.isArray(params.children)) {
      params.children.forEach(child => applyChildren.push(child));
    } else {
      applyChildren.push(params.children);
    }
  }
  
  if (applyChildren.length > 0) {
    applyChildren.forEach(child => target.appendChild(child));
  }

  if (typeof params.onElement === 'function') {
    params.onElement(target);
  }

  if (typeof params.innerHTML === 'string') {
    target.innerHTML = params.innerHTML;
  }

  return target;
}

export function elementSvg<K extends keyof SVGElementTagNameMap>(params: {
  namespaceURI: "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | "http://www.w3.org/1998/Math/MathML";
  tagName: K;
  id?: string;
  className?: string;
  attrs?: Record<string, string>;
  children?: HTMLElement[] | HTMLElement | Element;
  onElement?: (element: Element) => void;
}) {
  const target = document.createElementNS(params.namespaceURI, params.tagName);

  if (typeof params.id === 'string') {
    target.id = params.id;
  }

  if (typeof params.className === 'string') {
    params.className.split(' ').forEach(v => target.classList.add(v));
  }

  if (params.attrs !== undefined) {
    const keys = Object.keys(params.attrs);
    for (const key of keys) {
      const value = params.attrs[key];
      target.setAttribute(key, value);
    }
  }

  const applyChildren: (HTMLElement | Element)[] = [];
  if (params.children !== undefined) {
    if (Array.isArray(params.children)) {
      params.children.forEach(child => applyChildren.push(child));
    } else {
      applyChildren.push(params.children);
    }
  }
  
  if (applyChildren.length > 0) {
    applyChildren.forEach(child => target.appendChild(child));
  }

  if (typeof params.onElement === 'function') {
    params.onElement(target);
  }

  return target;
}

export function getPostImageElements() {
  const elementList: HTMLImageElement[] = [];
  const result = document.querySelectorAll<HTMLImageElement>(`.tt_article_useless_p_margin > figure.imageblock img`);
  result.forEach(v => elementList.push(v));
  return elementList;
}