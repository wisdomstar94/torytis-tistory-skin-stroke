function getPostsTotalCountText() {
  const target = document.querySelector('.sidebar-element-row a.link_tit span.c_cnt');
  if (target === null) {
    return 0;
  }
  const text = target.textContent;
  if (text === null) {
    return 0;
  }
  return text;
}

function getCategoryCntText() {
  const pathnameSplit = location.pathname.split('/');
  const categoryName = decodeURIComponent(pathnameSplit[pathnameSplit.length - 1]).trim();

  const linkItemAElements = document.querySelectorAll('ul.category_list a.link_item');
  const linkItemASubElements = document.querySelectorAll('ul.category_list a.link_sub_item');
  
  const linkElements = [];
  linkItemAElements.forEach((element) => {
    linkElements.push(element);
  });
  linkItemASubElements.forEach((element) => {
    linkElements.push(element);
  });

  let targetElement = null;

  for (const element of linkElements) {
    const childNodes = element.childNodes;
    const firstNode = childNodes[0];
    const data = firstNode.data;
    if (typeof data !== 'string') {
      continue;
    }
    if (data.trim() === categoryName) {
      targetElement = element;
      break;
    }
  }

  if (targetElement === null) {
    return;
  }

  const c_cnt_element = targetElement.querySelector('span.c_cnt');
  if (c_cnt_element === null) {
    return;
  }

  const cntText = c_cnt_element.textContent;
  if (typeof cntText !== 'string') {
    return;
  }

  return cntText;
}