let links = JSON.parse(localStorage.getItem("links")) || [];

function shorten() {
  const url = document.getElementById("url").value;
  if (!url) return;

  const short = Math.random().toString(36).substring(2, 8);
  links.push({ url, short });
  localStorage.setItem("links", JSON.stringify(links));

  document.getElementById("url").value = "";
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  links.forEach(l => {
    list.innerHTML += `<li>
      <strong>${location.origin}/${l.short}</strong><br>
      ${l.url}
    </li>`;
  });
}

render();
