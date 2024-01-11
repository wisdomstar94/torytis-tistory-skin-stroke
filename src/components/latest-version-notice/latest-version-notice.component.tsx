import { classes } from "../../functions/common/common";
import './latest-version-notice.scss';
import { version } from '../../../package.json';

export function LatestVersionNotice() {
  return (
    <>
      {/* <div 
        className={classes(
          "latest-version-notice",
          "w-full hidden relative h-[400px] text-black dark:text-white",
        )}>
        현재 적용된 스킨이 최신 버전이 아닙니다.
      </div> */}
      <div
        className={classes(
          "latest-version-notice",
          "hidden",
          "w-full h-full fixed top-0 left-0 z-20",
          "flex flex-wrap justify-center items-center",
        )}>
        <div
          className={classes(
            "w-full h-full absolute top-0 left-0 bg-black/70",
          )}
          />
        <div 
          className={classes(
            "w-full--40px max-w-[400px] max-h-full--40px relative flex flex-wrap",
            "border",
            "border-black dark:border-white",
            "bg-white dark:bg-black",
          )}>
          <div 
            className={classes(
              "w-full flex flex-wrap p-4",
              "bg-black dark:bg-white",
              "border-b text-base",
              "border-b-black dark:border-b-white",
              "text-white dark:text-black",
            )}>
            최신버전 안내
          </div>
          <div
            className={classes(
              "w-full flex flex-wrap p-4",
              "text-sm",
              "text-black dark:text-white",
            )}>
            <div className="w-full">
              현재 적용된 Stroke 스킨의 버전이 최신버전이 아닙니다.
            </div>
            {/* <div className="w-full block mb-4">
              <span>(현재버전: </span>
              <span className="current-stroke-version inline">{ version }</span>
              <span>, 최신버전: </span>
              <span className="latest-stroke-version inline"></span>)
            </div> */}
            <div className="w-full">
              최신버전의 스킨 파일을 다운로드 받을 수 있는 페이지로 이동하시겠습니까?
            </div>
            <div className="w-full text-gray-500">
              (* 이 모달창은 블로그 관리자에게만 표시됩니다.)
            </div>
          </div>
          <div className="w-full flex flex-wrap px-4 pb-4 gap-2 justify-end items-start">
            <button
              className={classes(
                "hide-30-days-button",
                "inline-flex py-1 px-2.5 text-sm cursor-pointer",
                "hover:underline",
                "border",
                "border-black dark:border-white",
                "text-black dark:text-white",
              )}>
              30일 동안 열지 않음
            </button>
            <button
              className={classes(
                "go-to-the-skin-latest-page-button",
                "inline-flex py-1 px-2.5 text-sm cursor-pointer",
                "hover:underline",
                "border",
                "border-black dark:border-white",
                "text-black dark:text-white",
              )}>
              예
            </button>
          </div>
        </div>
      </div>
    </>
  );
}