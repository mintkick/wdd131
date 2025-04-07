import songs from "./songs.mjs";

// console.log(songs);

// target a place to render all songs in list
function renderSongs(songs) {
  let target = document.querySelector(".song-grid");
  let html = "";
  // let length = songs.length - 1;
  songs.forEach((entry) => {
    if (entry.status == "done") html += songTemplate(entry);
    else html += songTemplateWIP(entry);
    // i++;
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
// the difference between these two is that "NEW!!"
// will be added to the title in the function below
function songTemplateWIP(entry) {
  return `<article class="song-entry">
              <a href="${entry.link}"
                target="_blank">
                <h3 class="wip">${entry.title} [WIP]</h3>
                <p>
                  ${entry.description}
                </p></a>
            </article>`;
}

renderSongs(songs);
