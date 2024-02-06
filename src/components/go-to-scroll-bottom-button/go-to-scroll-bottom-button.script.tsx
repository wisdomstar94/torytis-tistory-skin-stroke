function checkGoToScrollTopButtonWhenScroll() {
  

  const scrollTop = window.scrollY;
  const button = document.querySelector<HTMLButtonElement>(`.go-to-scroll-bottom-button`);
  if (button !== null) {
    if (scrollTop <= getMaxScrollTop() - 100) {
      button.classList.add('my-show');
      button.classList.remove('my-hide');
    } else {
      button.classList.add('my-hide');
      button.classList.remove('my-show');
    }
  }
}

window.addEventListener('scroll', function(event) {
  checkGoToScrollTopButtonWhenScroll();
});

window.addEventListener('load', () => {
  checkGoToScrollTopButtonWhenScroll();

  const button = document.querySelector<HTMLButtonElement>(`.go-to-scroll-bottom-button`);
  button?.addEventListener('click', () => {
    
    window.scrollTo({
      top: getMaxScrollTop(),
    });
  });
});

function getMaxScrollTop() {
  return document.body.clientHeight - window.innerHeight;
}