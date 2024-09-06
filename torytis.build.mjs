import { exec } from "child_process";
import { join } from "path";
import jsx_runtime from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import fs from "fs";
const dirname = import.meta.dirname;

const disposeIndexComponent = async () => {
  await new Promise(function (resolve, reject) {
    const command = `npx vite build --config ${join(
      dirname,
      "torytis.index.vite.config.ts"
    )}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(error);
        return;
      }
      if (stderr) {
        resolve(stderr);
        return;
      }

      resolve(stdout);
    });
  });

  const indexJsxPath = join(dirname, ".torytis", "index.mjs");
  const skinHtmlPath = join(dirname, ".torytis", "skin.html");

  const indexJsx = await import(indexJsxPath);
  const App = indexJsx.default;
  const html = renderToString(jsx_runtime.jsx(App, {}));
  fs.writeFileSync(skinHtmlPath, html);
  fs.rmSync(indexJsxPath);
};

const disposeIndexScript = async () => {
  await new Promise(function (resolve, reject) {
    const command = `npx vite build --config ${join(
      dirname,
      "torytis.script.vite.config.ts"
    )}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(error);
        return;
      }
      if (stderr) {
        resolve(stderr);
        return;
      }

      resolve(stdout);
    });
  });
};

(async () => {
  const start = Date.now();
  console.log("torytis building...");
  await Promise.all([disposeIndexComponent(), disposeIndexScript()]);

  const end = Date.now();
  console.log(`torytis build success! [${end - start} ms]`);
})();
