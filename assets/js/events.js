document
  .getElementById("nav-mobile")
  .addEventListener("click", function (event) {
    const navMobile = document.getElementById("nav-mobile");
    if (navMobile.classList.contains("hidden")) return;

    if (!document.getElementById("nav-mobile-list").contains(event.target)) {
      navMobile.classList.toggle("hidden");
    }
  });
