// ==UserScript==
// @name        Better Taginfo
// @namespace   https://github.com/wcedmisten/better-osm-taginfo
// @match       https://taginfo.openstreetmap.org/keys/*
// @grant       none
// @version     0.1
// @author      wcedmisten
// @description Userscript adding UI improvments for taginfo.openstreetmap.org
// ==/UserScript==

const isDesktop = window.matchMedia('(width >= 768px)');

const applyGridLayout = () => {
  document.getElementsByClassName("overview-container")[0].style.display = "grid";
  document.getElementsByClassName("overview-container")[0].style["grid-template-columns"] = "1fr 1fr";

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "unset";
  });
}

const applyFlexLayout = () => {
  document.getElementsByClassName("overview-container")[0].style.display = "flex";
  document.getElementsByClassName("overview-container")[0].style["grid-template-columns"] = "unset";

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "100%";
  });
}

if (isDesktop.matches) {
  applyGridLayout();
}


isDesktop.onchange = (e) => {
  if (e.matches) {
    applyGridLayout();
  } else {
    applyFlexLayout();
  }
};
