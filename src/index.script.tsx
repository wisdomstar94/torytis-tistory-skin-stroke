import { getPermalinkContentDivElements } from "./functions/element/element";
import { isDarkMode } from "./functions/logic/logic";

if (isDarkMode()) {
  document.querySelector<HTMLElement>('html').classList.add('dark');
}

window.addEventListener('load', () => {
  disposePermalinkContent(false);
});

function disposePermalinkContent(isExecute: boolean) {
  if (!isExecute) {
    return;
  }

  window.hljs.highlightAll();
  window.hljs.initLineNumbersOnLoad();

  const permalinkContentDivElements = getPermalinkContentDivElements();
  permalinkContentDivElements.forEach(element => {
    element.style.backgroundColor = 'transparent';
  });
}