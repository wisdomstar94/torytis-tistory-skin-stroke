import { getPostModifiedDateTimeInfo } from "@/functions/common/common";

function checkModifiedPostDatetimeArea() {
  const modifiedDateTimeInfo = getPostModifiedDateTimeInfo();
  if (modifiedDateTimeInfo === undefined) return;

  const targetElement = document.querySelector<HTMLDivElement>(
    `#post-permalink-modified-datetime-area`
  );
  if (targetElement === null) return;

  targetElement.classList.remove("hidden");
  targetElement.classList.add("block");
  targetElement.textContent = `이 글은 ${modifiedDateTimeInfo.YYYY}년 ${modifiedDateTimeInfo.MM}월 ${modifiedDateTimeInfo.DD}일 ${modifiedDateTimeInfo.HH}시 ${modifiedDateTimeInfo.II}분 ${modifiedDateTimeInfo.SS}초에 마지막으로 수정되었습니다.`;
}

(window as any).checkModifiedPostDatetimeArea = checkModifiedPostDatetimeArea;
