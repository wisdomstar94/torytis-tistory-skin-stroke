import { getPostsTotalCountText } from "../../../functions/logic/logic";

window.addEventListener('load', () => {
  disposeNormalPageTitle(false);
}); 

function disposeNormalPageTitle(isExecute: boolean) {
  if (isExecute !== true) {
    return;
  }

  const titleSpan = document.querySelector<HTMLElement>(`.normal-page-title-row-title`);
  const countInfoSpan = document.querySelector<HTMLElement>(`.normal-page-title-row-count-info`);

  const title = location.pathname.startsWith('/notice') ? '전체 공지사항 글' : '전체 글';
  if (titleSpan !== null) {
    titleSpan.textContent = title;
  }

  if (!location.pathname.startsWith('/notice')) {
    const countText = getPostsTotalCountText();
    if (typeof countText === 'string' && countInfoSpan !== null) {
      countInfoSpan.textContent = countText;
    }
  }
}
(window as any).disposeNormalPageTitle = disposeNormalPageTitle;