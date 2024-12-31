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
  document.getElementsByClassName("overview-container")[0].style.height = "90%";
  document.getElementsByClassName("overview-container")[0].style["grid-template-columns"] = "1fr 1fr";

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "unset";
    i.style.height = "90%";
  });


  document.getElementsByClassName("overview-item-wiki")[0].style["align-items"] = "center";

  const languagesDiv = document.querySelector("div.overview-item:nth-child(4) > div:nth-child(3)");
  languagesDiv.style["max-width"] = "500px"


  document.getElementsByClassName("overview-item-wiki-image")[0].style.width = "100%";
}

// NOTE: for every CSS prop we apply on the new grid layout, we need to unset it on the flex layout to restore the original CSS
const applyFlexLayout = () => {
  document.getElementsByClassName("overview-container")[0].style.display = "flex";
  document.getElementsByClassName("overview-container")[0].style.height = "unset";
  document.getElementsByClassName("overview-container")[0].style["grid-template-columns"] = "unset";

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "100%";
    i.style.height = "unset";
  });

  document.getElementsByClassName("overview-item-wiki")[0].style["align-items"] = "unset";

  const languagesDiv = document.querySelector("div.overview-item:nth-child(4) > div:nth-child(3)");
  languagesDiv.style["max-width"] = "unset"


  document.getElementsByClassName("overview-item-wiki-image")[0].style.width = "unset";
}

if (isDesktop.matches) {
  applyGridLayout();
} else {
  applyFlexLayout();
}


isDesktop.onchange = (e) => {
  if (e.matches) {
    applyGridLayout();
  } else {
    applyFlexLayout();
  }
};
