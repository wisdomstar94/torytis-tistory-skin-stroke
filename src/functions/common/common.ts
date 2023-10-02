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
