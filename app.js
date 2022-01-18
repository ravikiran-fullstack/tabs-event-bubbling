const btns = document.querySelectorAll(".tab-btn");

const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  console.log(e.target);

  const id = e.target.dataset.id;
  console.log(id);

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const ele = document.getElementById(id);
    ele.classList.add("active");
  }
});
