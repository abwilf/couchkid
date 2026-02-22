document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("click-overlay");
  var title = document.getElementById("title");
  var logo = document.getElementById("logo");
  var merch = document.getElementById("nav-merch");
  var story = document.getElementById("nav-story");

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
      story.classList.add("animate-in");
    }, 1200);
  });
});
