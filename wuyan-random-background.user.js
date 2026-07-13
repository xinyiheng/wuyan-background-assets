// ==UserScript==
// @name         Wuyan random Discord background
// @namespace    https://github.com/xinyiheng/wuyan-background-assets
// @version      1.0.1
// @description  Randomly choose one Wuyan animated profile background on each Discord page load.
// @match        https://discord.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  const backgrounds = [
    "https://cdn.jsdelivr.net/gh/xinyiheng/wuyan-background-assets@9cde8047570650c28ff33bb7249bcf7afb356e4e/assets/wuyan-grapes.webp",
    "https://cdn.jsdelivr.net/gh/xinyiheng/wuyan-background-assets@9cde8047570650c28ff33bb7249bcf7afb356e4e/assets/wuyan-tea.webp",
  ];

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedBackground = backgrounds[randomIndex];

  const applyBackground = () => {
    if (!document.documentElement) return false;

    document.documentElement.style.setProperty(
      "--wuyan-profile-bg",
      `url("${selectedBackground}")`,
    );
    return true;
  };

  if (!applyBackground()) {
    const observer = new MutationObserver(() => {
      if (applyBackground()) observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
})();
