// ==UserScript==
// @name        Better Taginfo
// @namespace   https://github.com/wcedmisten/better-osm-taginfo
// @match       https://taginfo.openstreetmap.org/keys/*
// @match       https://taginfo.openstreetmap.org/relations/*
// @match       https://taginfo.openstreetmap.org/tags/*
// @grant       none
// @version     0.1
// @author      wcedmisten
// @description Userscript adding UI improvments for taginfo.openstreetmap.org
// ==/UserScript==
const isDesktop = window.matchMedia("(width >= 768px)");

const applyGridLayout = () => {
  document.getElementById("overview").style.padding = "20px";
  document.getElementsByClassName("overview-container")[0].style.display = "grid";
  document.getElementsByClassName("overview-container")[0].style.height = "90%";
  document.getElementsByClassName("overview-container")[0].style.gap = "20px";
  document.getElementsByClassName("overview-container")[0].style["grid-template-columns"] = "1fr 1fr";

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "unset";
    i.style.height = "90%";
  });

  // TODO: put max-width on div containing langauge codes under the wiki section
  languagesDiv = document.getElementsByClassName("overview-item-wiki")[0].getElementsByTagName("div")[0]
  if (!!languagesDiv) {
    languagesDiv.style["max-width"] = "500px";
  }


  document.getElementsByClassName("overview-item-wiki")[0].style["align-items"] = "center";

  document.getElementsByClassName("overview-item-wiki-image")[0].style.width = "100%";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["min-height"] = "100px";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["margin-top"] = "12px";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["margin-bottom"] = "12px";
}

// NOTE: for every CSS prop we apply on the new grid layout, we need to unset it on the flex layout to restore the original CSS
const applyFlexLayout = () => {
  document.getElementById("overview").style.padding = "10px";

  document.getElementsByClassName("overview-container")[0].style.display = "flex";
  document.getElementsByClassName("overview-container")[0].style.removeProperty("height");
  document.getElementsByClassName("overview-container")[0].style.removeProperty("gap");
  document.getElementsByClassName("overview-container")[0].style.removeProperty("grid-template-columns");

  Array.from(document.getElementsByClassName("overview-item")).forEach((i) => {
    i.style.width = "100%";
    i.style["min-height"] = "250px";
    i.style.height = "unset";
  });

  languagesDiv = document.getElementsByClassName("overview-item-wiki")[0].getElementsByTagName("div")[0]
  if (!!languagesDiv) {
    languagesDiv.style["max-width"] = "300px";
  }


  document.getElementsByClassName("overview-item-wiki")[0].style["align-items"] = "center";

  document.getElementsByClassName("overview-item-wiki-image")[0].style.width = "100%";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["min-height"] = "200px";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["margin-top"] = "12px";
  document.getElementsByClassName("overview-item-wiki-image")[0].style["margin-bottom"] = "12px";
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
