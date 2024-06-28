window.addEventListener('load', () => {
  showModal(undefined);
  hideModal(undefined);
  isModalHide(undefined);
  getModalElement(undefined);
});

export function showModal(id: string | undefined) {
  if (id === undefined) return;

  const modal = document.querySelector<HTMLElement>(`#${id}`);
  if (modal === null) return;

  modal.classList.add('my-show');
  modal.classList.remove('my-hide');
}
(window as any).showModal = showModal;

export function hideModal(id: string | undefined) {
  if (id === undefined) return;

  const modal = document.querySelector<HTMLElement>(`#${id}`);
  if (modal === null) return;

  modal.classList.add('my-hide');
  modal.classList.remove('my-show');
}
(window as any).hideModal = hideModal;

export function isModalHide(id: string | undefined) {
  if (id === undefined) return true;
  const modal = document.querySelector<HTMLElement>(`#${id}`);
  if (modal === null) return true;

  if (!modal.classList.contains('my-show') && !modal.classList.contains('my-hide')) {
    return true;
  }

  return modal.classList.contains('my-hide');
}

export function getModalElement(id: string | undefined) {
  const modal = document.querySelector<HTMLElement>(`#${id}`);
  return modal;
}