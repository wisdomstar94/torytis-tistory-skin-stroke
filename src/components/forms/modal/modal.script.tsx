window.addEventListener('load', () => {
  showModal(undefined);
  hideModal(undefined);
});

export function showModal(id: string | undefined) {
  if (id === undefined) return;

  const modal = document.querySelector<HTMLElement>(`#${id}`);
  modal.classList.add('my-show');
  modal.classList.remove('my-hide');
}

export function hideModal(id: string | undefined) {
  if (id === undefined) return;

  const modal = document.querySelector<HTMLElement>(`#${id}`);
  modal.classList.add('my-hide');
  modal.classList.remove('my-show');
}