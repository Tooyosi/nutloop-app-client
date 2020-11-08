// import html2canvas from 'html2canvas';

export const o = (o, f, d = '') => o && o[f] ? o[f] : d;

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const normalizeData = (arr = [], key = 'id') => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj
  }, {})
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  // currency: 'NGN',
  minimumFractionDigits: 2
});

export const checkNull = field => !!field ? field : '';
export const hasAttr = (obj, key) => !!obj && checkNull(obj[key]) ? obj[key] : '';

export const copyToClipboard = function (copyRef) {
  var copyText = copyRef.current;
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

// export const downloadFn = (name, container)=> {
//   window.scrollTo(-10,0);
//   html2canvas(container).then(function (canvas) {
//       if (window.navigator.userAgent.indexOf("Edg") > -1) {
//           var img = canvas.msToBlob();
//           window.navigator.msSaveBlob(img, `${name}.png`);
//       } else {
//           var link = document.createElement("a");
//           document.body.appendChild(link);
//           link.download = `${name}.png`;
//           link.href = canvas.toDataURL("image/png");
//           link.target = '_blank';
//           link.click();
//       }

//   });
// };

export const toSlug = (param) => {
  return param.toLowerCase().replace(/ /g, "_")
}

export const EmailValidator = (email) => {
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  if(filter.test(email)){
      return true
  } else {
      return false
  }
}