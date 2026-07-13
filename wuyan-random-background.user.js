// ==UserScript==
// @name         Wuyan random Discord background
// @namespace    https://github.com/xinyiheng/wuyan-background-assets
// @version      1.0.0
// @description  Randomly choose one Wuyan animated profile background on each Discord page load.
// @match        https://discord.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  const backgrounds = [
    "https://raw.githubusercontent.com/xinyiheng/wuyan-background-assets/main/assets/wuyan-grapes.webp",
    "https://raw.githubusercontent.com/xinyiheng/wuyan-background-assets/main/assets/wuyan-tea.webp",
  ];

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedBackground = backgrounds[randomIndex];

  document.documentElement.style.setProperty(
    "--wuyan-profile-bg",
    `url("${selectedBackground}")`,
  );
})();
