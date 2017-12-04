function el(pID) {
  return document.getElementById(pID);
}
function cr(pTag) {
  return document.createElement(pTag);
}

function setDefaultPanorama() {
  var vFile = el("panoselect").value || 'Panorama_Schloss_Durlach.jpg';
  var vName = "Regensburg";
  el('imgfilename').value = vFile;
  var vURL = "https://en.wikipedia.org/wiki/Special:Redirect/file/"+vFile;
  //var vURL = "https://upload.wikimedia.org/wikipedia/commons/4/43/Panorama_Schloss_Durlach.jpg";
  console.log("setLoadImageURL('"+vURL+"') for WikiMedia");
  el('imgurl').value = vURL;
  el('height').value = "1500";
  el('width').value = "7600";
  el("infolabel").value = "Panorama360";
  el("infourl").value = "https://commons.wikimedia.org/wiki/File:"+vName;
  el("imgmap").value = "<area shape=\"rect\" alt=\"(1) Click for Info about "+vName+"\" title=\""+vName+"\" coords=\"504,12,596,162\" href=\"https://en.wikipedia.org/wiki/"+vName+"\" target=\"_blank\"/>\n<area shape=\"rect\" alt=\"(2) Click for Info about "+vName+"\" title=\""+vName+"\" coords=\"1513,244,1669,353\" href=\"https://en.wikipedia.org/wiki/"+vName+"\" target=\"_blank\" />";
};

function getTemplate(pPath) {
  var vTpl = el("template").value;
  vTpl = vTpl.replace(/___IMGURL___/g,el('imgurl').value);
  vTpl = vTpl.replace(/___HEIGHT___/g,el('height').value);
  vTpl = vTpl.replace(/___WIDTH___/g,el('width').value);
  vTpl = vTpl.replace(/___IMGMAP___/g,el('imgmap').value);
  vTpl = vTpl.replace(/___INFOURL___/g,el('infourl').value);
  vTpl = vTpl.replace(/___INFOLABEL___/g,el('infolabel').value);
  vTpl = vTpl.replace(/___PATH___/g,pPath);
  return vTpl
}

function saveOnlineHTML(pFilename) {
  if (el('imgurl').value == "") {
    alert("ERROR: Image URL is not defined.\nWill insert default value for you!");
    setDefaultPanorama();
  };
  console.log("Panorama360 export('"+pFilename+"')-Call");
  var vContent = getTemplate("https://niebert.github.io/panorama360/");
  saveSourceHTML(pFilename,vContent);
};

function saveOfflineHTML(pFilename) {
  if (el('imgurl').value == "") {
    alert("ERROR: Image URL is not defined.\nWill insert default value for you!");
    setDefaultPanorama();
  };
  console.log("Panorama360 export('"+pFilename+"')-Call");
  var vContent = getTemplate("");
  saveSourceHTML(pFilename,vContent);
}

function saveSourceHTML(pFilename,pContent) {
  // File is a Javascript Class defined in FileSaver.js
  var file = new File([pContent], {type: "text/plain;charset=utf-8"});
  // method saveAs() is defined in FileSaver.js so import filesaver.js and blob.js to your Javascript project
  saveAs(file,pFilename);
}
