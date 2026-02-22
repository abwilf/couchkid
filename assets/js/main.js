document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("click-overlay");
  var title = document.getElementById("title");
  var logo = document.getElementById("logo");
  var navHome = document.getElementById("nav-home");
  var navStory = document.getElementById("nav-story");
  var merch = document.getElementById("main-merch");

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";

    title.classList.add("animate-in");

    setTimeout(function () {
      logo.classList.add("animate-in");
    }, 600);

    setTimeout(function () {
      merch.classList.add("animate-in");
    }, 1100);

    setTimeout(function () {
      navHome.classList.add("animate-in");
    }, 1100);

    setTimeout(function () {
      navStory.classList.add("animate-in");
    }, 1200);
  });
});
