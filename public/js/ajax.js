let parseLink = (link) => {
  let quest = link.lastIndexOf("?");
  let gt = link.lastIndexOf(">");

  let href = link.slice(quest, gt);

  let quote1 = Number(link.indexOf('"')) + 1;
  let quote2 = link.indexOf('"', quote1);

  let rel = link.slice(quote1, quote2);
  return { [rel]: href };
};

export default function ({ method, uri, body, onerror, onsuccess }) {
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.open(method, uri);

  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onload = () => {
    let link = xhr.getResponseHeader("link");

    if (link) {
      link = link.split(", ").map((l) => parseLink(l));
      link = Object.assign({}, ...link);
    }

    let total = xhr.getResponseHeader("x-total-count");

    onsuccess({
      link,
      total,
      data: xhr.response,
    });
  };
  onerror = onerror ? onerror : () => "Can not send a request";
  xhr.send(body);
}
