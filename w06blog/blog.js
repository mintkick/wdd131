const articles = [
  // JS file that contains an array of two objects
  // it's JS's version of a dictionary
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk then this is the book for you!",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
];

let section = document.querySelector(".articles-container");

//   For each article in our list:
articles.forEach(function (book) {
  // Create a new article element
  let newArticle = document.createElement("article");
  // Create a template literal string and store it in a variable
  articleTemplate = `<article>
          <section class="details">
            <div class="date">${book.date}</div>
            <div>${book.ages}</div>
            <div>${book.genre}</div>
            <div>${book.stars}</div>
          </section>
          <section class="content">
            <h2>${book.title}</h2>
            <section class="img-container">
              <img
                src="${book.imgSrc}"
                alt="${book.imgAlt}"
              />
            </section>
            ${book.description}
          </section>
        </article>`;
  // Set the innerHTML of the new article to the template literal string we just built
  newArticle.innerHTML = articleTemplate;
  // Append the new article to the output element so it will show on the page
  section.appendChild(newArticle);
  // section.appendChild(document.createElement("article").innerHTML = articleTemplate)
});

/* For some reason, the CSS layout isn't working like it used to when it was static HTML articles (it's now broken). I wonder how the JS-generated ones are different. */
