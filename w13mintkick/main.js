import songs from "./songs.mjs";

// console.log(songs);

// target a place to render all songs in list
function renderSongs(songs) {
  let target = document.querySelector(".song-grid");
  let html = "";
  songs.forEach((entry) => {
    if (entry.status == "done") html += songTemplate(entry);
    else html += songTemplateWIP(entry);
  });
  target.innerHTML = html;
}
// let length = songs.length - 1;
// i++;

function songTemplate(entry) {
  return `<article class="song-entry">
              <a href="${entry.link}"
                target="_blank">
                <p class="song-title">${entry.title}</p>
                <p>
                  ${entry.description}
                </p></a>
            </article>`;
}
// the difference between these two is that "NEW!!"
// will be added to the title in the function below
function songTemplateWIP(entry) {
  return `<article class="song-entry">
              <a href="${entry.link}"
                target="_blank">
                <p class="wip song-title">${entry.title} [WIP]</p>
                <p>
                  ${entry.description}
                </p></a>
            </article>`;
}

renderSongs(songs);
