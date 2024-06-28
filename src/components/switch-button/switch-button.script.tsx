import { findClassMatchElementByRootParent } from "../../functions/common/common";

window.addEventListener('load', () => {
  switchButtonBodyClick(false, undefined);
});

function switchButtonBodyClick(isExecute: boolean, thisObj: HTMLElement | undefined) {
  if (isExecute !== true) {
    return;
  }

  if (thisObj === undefined) return;

  const switchButtonComponent = findClassMatchElementByRootParent('switch-button-component', thisObj);
  if (switchButtonComponent === null) return;

  const switchButtonBody = switchButtonComponent.querySelector<HTMLElement>('.switch-button-body');
  const checkbox = switchButtonComponent.querySelector<HTMLInputElement>('.switch-button-hidden-checkbox');
  if (switchButtonComponent === null) {
    return;
  }
  if (checkbox?.checked === true) {
    switchButtonBody?.classList.remove('active');
  } else {
    switchButtonBody?.classList.add('active');
  }
}
(window as any).switchButtonBodyClick = switchButtonBodyClick;