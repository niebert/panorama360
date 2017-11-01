function el(pID) {
  return document.getElementById(pID);
}
function cr(pTag) {
  return document.createElement(pTag);
}

function setDefaultPanorama() {
  var vFile = 'Panorama_Schloss_Durlach.jpg';
  el('imgfilename').value = vFile;
  var vURL = "https://en.wikipedia.org/wiki/Special:Redirect/file/"+vFile;
  //var vURL = "https://upload.wikimedia.org/wikipedia/commons/4/43/Panorama_Schloss_Durlach.jpg";
  console.log("setLoadImageURL('"+vURL+"') for WikiMedia");
  el('imgurl').value = vURL;
  el('height').value = "560";
  el('width').value = "5552";
  el("infolabel").value = "Panorama360";
  el("infourl").value = "https://en.wikiversity.org/wiki/3D_Modelling/Examples";
}
