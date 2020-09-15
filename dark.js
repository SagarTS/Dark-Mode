$(window).scroll(function () {
  $(".nav").toggleClass("active", $(this).scrollTop() > 10);
});

const dark = document.querySelector("input");
let nav = document.querySelector(".nav");
let link = document.querySelectorAll("#link");
const wrap = document.querySelector(".wrapper");
const page = document.querySelector(".page");
const about = document.querySelector(".about-text");
const para = document.querySelectorAll("#para");
const info_title = document.querySelector(".infotitle");
const foot_head = document.querySelector(".footer>h2");
const foot_link = document.querySelectorAll(".footerlinks>a");
const last = document.querySelector(".last");
const card = document.querySelectorAll(".infocard>.card");

dark.addEventListener("click", () => {
  nav.classList.toggle("dark");

  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle("dark");
  }

  wrap.classList.toggle("dark");

  page.classList.toggle("dark");

  about.classList.toggle("dark");

  for (let i = 0; i < para.length; i++) {
    para[i].classList.toggle("dark");
  }

  info_title.classList.toggle("dark");

  foot_head.classList.toggle("dark");

  for (let i = 0; i < foot_link.length; i++) {
    foot_link[i].classList.toggle("dark");
  }

  last.classList.toggle("dark");

  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("dark");
  }

  console.log("clicked");
});
