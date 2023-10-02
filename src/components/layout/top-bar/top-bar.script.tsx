import { getSidebar, getSidebarBackground, getSidebarShowButton } from "../../../functions/element/element";

window.addEventListener('load', () => {
  const sidebarShowButton = getSidebarShowButton();
  console.log('@sidebarShowButton', sidebarShowButton);
  sidebarShowButton.addEventListener('click', () => {
    const sidebar = getSidebar();
    if (sidebar !== null) {
      sidebar.classList.add('my-show');
    }

    const sidebarBackground = getSidebarBackground();
    if (sidebarBackground !== null) {
      sidebarBackground.classList.remove('my-hide'); 
      sidebarBackground.classList.add('my-show');
    }
  });
});