import { getCategoryCntText, getPostsTotalCountText } from "../../../functions/logic/logic";

window.addEventListener('load', () => {
  const titleSpan = document.querySelector<HTMLElement>(`.category-page-title-row-title`);
  const countInfoSpan = document.querySelector<HTMLElement>(`.category-page-title-row-count-info`);

  const title = (() => {
    if (location.pathname === '/category') {
      return '전체 글';
    } else if (location.pathname.startsWith('/category')) {
      const pathnameSplit = location.pathname.split('/');
      return decodeURIComponent(pathnameSplit[pathnameSplit.length - 1]);
    }
  })();
  if (titleSpan !== null) {
    titleSpan.textContent = title;
  }

  if (location.pathname === '/category') {
    const countText = getPostsTotalCountText();
    if (typeof countText === 'string') {
      countInfoSpan.textContent = countText;
    }
  } else if (location.pathname.startsWith('/category')) {
    const countText = getCategoryCntText();
    if (typeof countText === 'string') {
      countInfoSpan.textContent = countText;
    }
  }
}); 
