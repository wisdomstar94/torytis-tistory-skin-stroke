import plugin from "tailwindcss/plugin";

const tailwindPlugin = plugin.withOptions(function () {
  return function ({ addComponents }) {
    addComponents({
      ".scrollbar-w-1::-webkit-scrollbar": { width: "4px" },
      ".scrollbar-h-1::-webkit-scrollbar": { height: "4px" },
    });

    addComponents({
      ".scrollbar-track-eee::-webkit-scrollbar-track": {
        "background-color": "#eee",
      },
      ".scrollbar-track-333::-webkit-scrollbar-track": {
        "background-color": "#333",
      },
      ".scrollbar-track-666::-webkit-scrollbar-track": {
        "background-color": "#666",
      },
      ".scrollbar-track-888::-webkit-scrollbar-track": {
        "background-color": "#888",
      },
      ".scrollbar-track-transparent::-webkit-scrollbar-track": {
        "background-color": "transparent",
      },
    });

    addComponents({
      ".scrollbar-thumb-ccc::-webkit-scrollbar-thumb": {
        "background-color": "#ccc",
      },
      ".scrollbar-thumb-333::-webkit-scrollbar-thumb": {
        "background-color": "#333",
      },
      ".scrollbar-thumb-888::-webkit-scrollbar-thumb": {
        "background-color": "#888",
      },
    });

    addComponents({
      ".transition-all-300ms": { transition: "300ms all" },
      ".transition-all-none": { transition: "none" },
    });

    addComponents({
      ".animation-0ms-both": {
        "animation-duration": "0ms",
        "animation-fill-mode": "both",
      },
      ".animation-300ms-both": {
        "animation-duration": "300ms",
        "animation-fill-mode": "both",
      },
    });

    addComponents({
      ".transform-rotate-15deg": {
        transform: "rotate(15deg)",
      },
    });
  };
});

export default tailwindPlugin;
