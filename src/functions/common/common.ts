export function classes(...args: string[] | string[][]) {
  const classes: string[] = [];

  for (const item of args) {
    if (Array.isArray(item)) {
      // string[]
      for (const inItem of item) {
        classes.push(inItem);
      }
    } else {
      // string
      classes.push(item);
    }
  }

  return classes.join(' ');
}

export function findClassMatchElementByRootParent(className: string, startElement: HTMLElement | null) {
  let targetElement: HTMLElement | null = null;

  let currentElement = startElement;
  while (currentElement !== null) {
    if (currentElement.classList.contains(className)) {
      targetElement = currentElement;
      break;
    }
    currentElement = currentElement.parentElement;
  }

  return targetElement;
}