window.addEventListener('load', () => {
  const titleSpan = document.querySelector<HTMLElement>(`.tag-page-title-row-title`);
  const title = (() => {
    if (location.pathname === '/tag') {
      return '태그';
    } else if (location.pathname.startsWith('/tag')) {
      const pathnameSplit = location.pathname.split('/');
      const lastItem = pathnameSplit[pathnameSplit.length - 1];
      const tag = decodeURIComponent(lastItem).trim();
      return '#' + tag;
    }
  })();
  if (titleSpan !== null) {
    titleSpan.textContent = title;
  }
}); 
