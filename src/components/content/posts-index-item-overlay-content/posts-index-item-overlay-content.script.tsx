import { getPostsIndexItemLiElements } from "../../../functions/element/element";

window.addEventListener('load', () => {
  getPostsIndexItemLiElements().forEach(element => {
    const datetimeString = element.querySelector('.index-item-datetime-text')?.textContent;
    if (typeof datetimeString !== 'string') return;
    const date = new Date(datetimeString);
    if (isNaN(date.getFullYear())) return;
    if (Date.now() - date.getTime() > (1000 * 60 * 60 * 24 * 3)) return;
    element.querySelector('.overlay-info-area .new-post-symbol')?.classList.add('my-show');
  });
});