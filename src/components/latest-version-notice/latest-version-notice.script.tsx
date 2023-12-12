import axios from "axios";
import { version } from '../../../package.json';
import { compareVersion, isAdmin } from "../../functions/common/common";

window.addEventListener('load', () => {
  checkSkinVersion();
});

function checkSkinVersion() {
  if (!isAdmin()) {
    return;
  }

  const latestVersionNoticeDiv = document.querySelector('.latest-version-notice');
  if (latestVersionNoticeDiv === null) return;

  const checkAtTime = getLatestVersionCheckAtTime();
  if (Date.now() - checkAtTime <= (1000 * 60 * 5)) {
    // 가장 마지막으로 체크한 시간으로부터 아직 5분이 지나지 않은 경우에는 체크 막기
    console.log('#latest version check holding..');
    return;
  }

  console.log('#latest version check start..');
  localStorage.setItem('latest-version-check-at-time', Date.now().toString());

  axios
    // .get('https://github.com/wisdomstar94/torytis-tistory-skin-stroke/releases/latest')
    .get('https://cdn.jsdelivr.net/gh/wisdomstar94/torytis-tistory-skin-stroke/package.json')
    .then(res => {
      const result = res.data;
      // const domParser = new DOMParser();
      // const dom = domParser.parseFromString(result, "text/html");
      const latestVersion = result.version;
      if (typeof latestVersion !== 'string') {
        console.warn(`스킨 최신 버전 정보를 가져올 수 없습니다.`);
        return;
      }

      const latestStrokeVersionSpan = document.querySelector('.latest-stroke-version');
      if (latestStrokeVersionSpan !== null) {
        latestStrokeVersionSpan.textContent = latestVersion;
      }

      const onlyLatestVersion = latestVersion.replace('v', '');
      const versionCompareResult = compareVersion(version, onlyLatestVersion);
      if (versionCompareResult === 'same') {
        // 최신 버전
        // ..
        return;
      }

      
      if (versionCompareResult === 'right-higher') {
        // 최신 버전 아님
        // ..
        if (getLatestVversionHideTargetTime() <= Date.now()) {
          latestVersionNoticeDiv.classList.remove('hidden');
          latestVersionNoticeDiv.classList.add('block');
        }

        document.querySelector('.hide-30-days-button')?.addEventListener('click', () => {
          localStorage.setItem('latest-version-hide-target-time', (Date.now() + (1000 * 60 * 60 * 24 * 30)).toString());
          latestVersionNoticeDiv.classList.remove('block');
          latestVersionNoticeDiv.classList.add('hidden');
        });

        document.querySelector('.go-to-the-skin-latest-page-button')?.addEventListener('click', () => {
          window.open(`https://github.com/wisdomstar94/torytis-tistory-skin-stroke/releases/latest`, '_blank');
          latestVersionNoticeDiv.classList.remove('block');
          latestVersionNoticeDiv.classList.add('hidden');
        });
        return;
      }
    })
  ;
}

function getLatestVversionHideTargetTime() {
  const latestVversionHideTargetTime = localStorage.getItem('latest-version-hide-target-time');
  if (latestVversionHideTargetTime === null) return 0;

  const number = Number(latestVversionHideTargetTime);
  if (isNaN(number)) {
    return 0;
  }

  return number;
}

function getLatestVersionCheckAtTime() {
  const time = localStorage.getItem('latest-version-check-at-time');
  if (time === null) {
    const value = Date.now() - (1000 * 60 * 6);
    localStorage.setItem('latest-version-check-at-time', value.toString())
    return value;
  }

  const number = Number(time);
  if (isNaN(number)) {
    const value = Date.now() - (1000 * 60 * 6);
    localStorage.setItem('latest-version-check-at-time', value.toString())
    return value;
  }

  return number;
}