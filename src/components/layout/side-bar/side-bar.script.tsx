import { getSidebar, getSidebarBackground } from "../../../functions/element/element";

window.addEventListener('load', () => {
  const sidebarBackground = getSidebarBackground();
  if (sidebarBackground !== null) {
    sidebarBackground.addEventListener('click', () => {
      const sidebar = getSidebar();
      if (sidebar !== null) {
        sidebar.classList.remove('my-show');
      }
      sidebarBackground.classList.remove('my-show');
      sidebarBackground.classList.add('my-hide');
    });
  }
});
