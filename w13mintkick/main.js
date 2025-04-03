import songs from "./songs.mjs";

console.log(songs);

// target a place to render all songs in list
function renderSongs(songs) {
  let target = document.querySelector(".song-grid");
  let html = "";
  songs.forEach((entry) => {
    html += songTemplate(entry);
  });
  target.innerHTML = html;
}

function songTemplate(entry) {
  return `<article class="song-entry">
              <a href="${entry.link}"
                target="_blank">
                <h3>${entry.title}</h3>
                <p>
                  ${entry.description}
                </p></a>
            </article>`;
}

renderSongs(songs);
