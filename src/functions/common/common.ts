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

  return classes.join(" ");
}

export function findClassMatchElementByRootParent(
  className: string,
  startElement: HTMLElement | null
) {
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

export function compareVersion(
  target1: string,
  target2: string
): "left-higher" | "right-higher" | "same" {
  const target1Split = target1
    .replace("v", "")
    .split(".")
    .map((k) => Number(k));
  const target2Split = target2
    .replace("v", "")
    .split(".")
    .map((k) => Number(k));

  // major version check
  if (target1Split[0] > target2Split[0]) {
    return "left-higher";
  }

  if (target1Split[0] < target2Split[0]) {
    return "right-higher";
  }

  // minor version check
  if (target1Split[1] > target2Split[1]) {
    return "left-higher";
  }

  if (target1Split[1] < target2Split[1]) {
    return "right-higher";
  }

  // patch version check
  if (target1Split[2] > target2Split[2]) {
    return "left-higher";
  }

  if (target1Split[2] < target2Split[2]) {
    return "right-higher";
  }

  return "same";
}

export function isAdmin() {
  if (window.tiara !== undefined) {
    if (window.tiara.customProps?.role === "owner") {
      return true;
    }
  }
  return false;
}

export function getPostPublishedDateTimeInfo() {
  const meta = document.querySelector<HTMLMetaElement>(
    `meta[property="article:published_time"]`
  );
  if (meta === null) return undefined;
  const dateISOString = meta.getAttribute("content");
  if (typeof dateISOString !== "string") return undefined;
  if (dateISOString.trim() === "") return undefined;
  const dateObj = new Date(dateISOString);

  const year = dateObj.getFullYear();
  const YYYY = year.toString();

  const month = dateObj.getMonth() + 1;
  const MM = month.toString().padStart(2, "0");

  const date = dateObj.getDate();
  const DD = date.toString().padStart(2, "0");

  const hour = dateObj.getHours();
  const HH = hour.toString().padStart(2, "0");

  const minute = dateObj.getMinutes();
  const II = minute.toString().padStart(2, "0");

  const second = dateObj.getSeconds();
  const SS = second.toString().padStart(2, "0");

  const datetime = `${YYYY}-${MM}-${DD} ${HH}:${II}:${SS}`;

  return {
    metaContent: dateISOString,
    datetime,
    year,
    month,
    date,
    hour,
    minute,
    second,
    YYYY,
    MM,
    DD,
    HH,
    II,
    SS,
  };
}

export function getPostModifiedDateTimeInfo() {
  const meta = document.querySelector<HTMLMetaElement>(
    `meta[property="article:modified_time"]`
  );
  if (meta === null) return undefined;
  const dateISOString = meta.getAttribute("content");
  if (typeof dateISOString !== "string") return undefined;
  if (dateISOString.trim() === "") return undefined;

  const publishedDateInfo = getPostPublishedDateTimeInfo();
  if (publishedDateInfo?.metaContent === dateISOString) return undefined;

  const dateObj = new Date(dateISOString);

  const year = dateObj.getFullYear();
  const YYYY = year.toString();

  const month = dateObj.getMonth() + 1;
  const MM = month.toString().padStart(2, "0");

  const date = dateObj.getDate();
  const DD = date.toString().padStart(2, "0");

  const hour = dateObj.getHours();
  const HH = hour.toString().padStart(2, "0");

  const minute = dateObj.getMinutes();
  const II = minute.toString().padStart(2, "0");

  const second = dateObj.getSeconds();
  const SS = second.toString().padStart(2, "0");

  const datetime = `${YYYY}-${MM}-${DD} ${HH}:${II}:${SS}`;

  return {
    metaContent: dateISOString,
    datetime,
    year,
    month,
    date,
    hour,
    minute,
    second,
    YYYY,
    MM,
    DD,
    HH,
    II,
    SS,
  };
}
