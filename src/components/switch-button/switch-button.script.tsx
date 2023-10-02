import { findClassMatchElementByRootParent } from "../../functions/common/common";

window.addEventListener('load', () => {
  const switchButtonBody = document.querySelectorAll<HTMLElement>(`.switch-button-body`);
  switchButtonBody.forEach(element => {
    element.addEventListener('click', (event) => {
      const thisObj = event.target as HTMLElement;
      const switchButtonComponent = findClassMatchElementByRootParent('switch-button-component', thisObj);
      const switchButtonBody = switchButtonComponent.querySelector<HTMLElement>('.switch-button-body');
      const checkbox = switchButtonComponent.querySelector<HTMLInputElement>('.switch-button-hidden-checkbox');
      if (switchButtonComponent === null) {
        return;
      }
      if (checkbox.checked) {
        switchButtonBody.classList.remove('active');
        checkbox.checked = false;
      } else {
        switchButtonBody.classList.add('active');
        checkbox.checked = true;
      }
    });
  });
});