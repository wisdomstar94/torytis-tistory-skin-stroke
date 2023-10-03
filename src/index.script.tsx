import { getPermalinkContentDivElements } from "./functions/element/element";
import { isDarkMode } from "./functions/logic/logic";

if (isDarkMode()) {
  document.querySelector<HTMLElement>('html').classList.add('dark');
}

window.addEventListener('load', () => {
  disposePermalinkContent(false);
  window.hljs.highlightAll();
  window.hljs.initLineNumbersOnLoad();
});

function disposePermalinkContent(isExecute: boolean) {
  if (!isExecute) {
    return;
  }

  const permalinkContentDivElements = getPermalinkContentDivElements();
  console.log('@permalinkContentDivElements', permalinkContentDivElements);
  permalinkContentDivElements.forEach(element => {
    element.style.backgroundColor = 'transparent';
    element.style.opacity = '1';
  });
}