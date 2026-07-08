/* ============================================================
   Velora Movement — jaettu skripti
   - Mobiilivalikon avaus/sulku
   - Demo-ilmoitus (Varaa / Lisää koriin -napit)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Mobiilivalikko ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-header nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Sulje valikko kun linkkiä klikataan
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Demo-ilmoitus ---------- */
  var toast = document.getElementById("demo-toast");
  var toastTimer = null;

  function showDemoToast(msg) {
    if (!toast) return;
    toast.textContent = msg || "Tämä on demosivu — varaus- ja ostotoiminnot eivät ole käytössä.";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 3500);
  }

  // Kaikki demo-napit (data-demo attribuutilla)
  document.querySelectorAll("[data-demo]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var msg = el.getAttribute("data-demo");
      showDemoToast(msg && msg.length > 1 ? msg : null);
    });
  });
});
