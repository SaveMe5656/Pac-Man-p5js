function saveCookie(label, value) {
  out = label + "=" + value + "; max-age=34560000";
  document.cookie = out;
  return out;
}

function loadCookie(label) {
  let header = label + "=";
  let index = decodeURIComponent(document.cookie).split(";");

  for(let i = 0; i < index.length; i++) {
    let cookieValue = index[i];
    while (cookieValue.charAt(0) == ' ') {
      cookieValue = cookieValue.substring(1);
    }
    if (cookieValue.indexOf(header) == 0) {
      return cookieValue.substring(header.length, cookieValue.length);
    }
  }

  return undefined;
}

function killCookie(label) {
  out = label + "=; max-age=0";
  document.cookie = out;
  return out;
}