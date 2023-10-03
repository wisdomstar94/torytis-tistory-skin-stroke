import { getPermalinkContentDivElements, getPostsIndexItemLiElements } from "./functions/element/element";
import { isDarkMode } from "./functions/logic/logic";

if (isDarkMode()) {
  document.querySelector<HTMLElement>('html').classList.add('dark');
}

window.addEventListener('load', () => {
  disposePermalinkContent(false);
  disposeIndexItemNewSymbol(false);
  window.hljs.highlightAll();
  window.hljs.initLineNumbersOnLoad();
});

function disposePermalinkContent(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  const permalinkContentDivElements = getPermalinkContentDivElements();
  console.log('@permalinkContentDivElements', permalinkContentDivElements);
  permalinkContentDivElements.forEach(element => {
    element.style.backgroundColor = 'transparent';
    element.style.opacity = '1';
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