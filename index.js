//datanın çekilmesi
const news = [];

const getData = () => {
  $.ajax({
    type: "GET",
    url: "news.php",
    dataType: "json",

    success: function (result) {
      for (let index = 0; index < result.length; index++) {
        news.push([
          result[index].title,
          result[index].date,
          result[index].news,
        ]);
      }
      setNews();
    },
  });
};

getData();

//mevcut sayfa
var currentPage = 1;

const navLeft = document.getElementById("news__navLeft");
const navRight = document.getElementById("news__navRight");
const navCount = document.getElementById("news__navCount");

const n1Title = document.getElementById("n1Title");
const n1Date = document.getElementById("n1Date");
const n1Text = document.getElementById("n1Text");
const n2Title = document.getElementById("n2Title");
const n2Date = document.getElementById("n2Date");
const n2Text = document.getElementById("n2Text");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");

navRight.onclick = () => {
  currentPage += 1;
  setNews();
};

navLeft.onclick = () => {
  currentPage -= 1;
  setNews();
};

//haber içeriklerini oluşturan fonksiyon
const setNews = () => {
  //sayfa sayısının hesaplanması
  const pageCount = Math.floor(news.length / 2 + 0.9);

  if (pageCount > 1 && currentPage < pageCount) {
    navRight.style.display = "flex";
  } else {
    navRight.style.display = "none";
  }

  if (pageCount > 1 && currentPage > 1) {
    navLeft.style.display = "flex";
  } else {
    navLeft.style.display = "none";
  }

  if (pageCount > 1) {
    navCount.style.display = "flex";
  } else {
    navCount.style.display = "none";
  }
  navCount.innerHTML = currentPage;

  var pages = [];
  for (let i = 0; i < pageCount + 1; i++) {
    pages.push([i, i + 1]);
  }

  //sayfa geçişleri
  let selectedPages = pages[currentPage - 1];

  if (selectedPages[1] < news.length) {
    n1Title.innerHTML = news[selectedPages[0]][0];
    n1Date.innerHTML = news[selectedPages[0]][1];
    n1Text.innerHTML = news[selectedPages[0]][2];

    n2Title.innerHTML = news[selectedPages[1]][0];
    n2Date.innerHTML = news[selectedPages[1]][1];
    n2Text.innerHTML = news[selectedPages[1]][2];

    n2.style.display = "flex";
  } else {
    n1Title.innerHTML = news[selectedPages[0]][0];
    n1Date.innerHTML = news[selectedPages[0]][1];
    n1Text.innerHTML = news[selectedPages[0]][2];

    n2.style.display = "none";
  }
};
