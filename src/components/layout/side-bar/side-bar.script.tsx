import { getSidebar, getSidebarBackground } from "../../../functions/element/element";
import { isDarkMode } from "../../../functions/logic/logic";

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

  applyForceDarkMode(false);
  checkDarkMode(false);
});

function applyForceDarkMode(isExecute: boolean) {
  if (isExecute === false) {
    return;
  }

  localStorage.setItem('is_dark_mode', 'true');
  const htmlElement = document.querySelector<HTMLElement>('html');
  htmlElement?.classList.add('dark');
}

function checkDarkMode(isExecute: boolean) {
  if (isExecute === false) {
    return;
  }

  const darkModeCheckbox = document.querySelector<HTMLInputElement>('input#dark_mode_switch');
  const darkModeSwitchButtonComponent = darkModeCheckbox.parentElement;
  const darkModeSwitchButtonBody = darkModeSwitchButtonComponent.querySelector<HTMLDivElement>('.switch-button-body');
  // console.log('@darkModeSwitchButtonComponent', darkModeSwitchButtonComponent);

  if (isDarkMode()) {
    if (darkModeCheckbox !== null) {
      darkModeCheckbox.checked = true;
    }
    darkModeSwitchButtonBody?.classList.add('active');
  }

  darkModeSwitchButtonBody?.addEventListener('click', () => {
    const finallyChecked = !darkModeCheckbox.checked;
    localStorage.setItem('is_dark_mode', finallyChecked === true ? 'true' : 'false');

    const htmlElement = document.querySelector<HTMLElement>('html');
    if (finallyChecked) {
      htmlElement?.classList.add('dark');
    } else {
      htmlElement?.classList.remove('dark');
    }
  });
}
