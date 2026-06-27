// Velora Movement — "Liity asiakkaaksi" -modaali.
// Rakentaa modaalin ja kytkee sen kaikkiin "Liity asiakkaaksi" -painikkeisiin.
document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.createElement("dialog");
  dialog.className = "join-modal";
  dialog.innerHTML =
    '<button class="join-modal__close" type="button" aria-label="Sulje">×</button>' +
    '<div class="join-modal__inner">' +
    '<div class="join-modal__media" aria-hidden="true"></div>' +
    '<div class="join-modal__body">' +
    '<span class="eyebrow">Kanta-asiakkuus</span>' +
    "<h2>Tervetuloa Veloran kanta-asiakkaaksi</h2>" +
    "<p>Kanta-asiakkuutemme hoituu [järjestelmä]-palvelussa, joka pitää huolta jäsenyydestäsi, varauksistasi ja eduistasi — kaikki helposti yhdessä paikassa.</p>" +
    "<p>Jäsenenä saat joustavat tunnit, jäsenhinnat ja ennakkovaraukset sekä kutsut workshoppeihin ja tapahtumiin.</p>" +
    '<a class="btn join-modal__cta" href="index.html#liity">Siirry liittymään →</a>' +
    "</div>" +
    "</div>";
  document.body.appendChild(dialog);

  function open(e) {
    e.preventDefault();
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  // Kytke: yläpalkin jäsennappi + kaikki "Liity asiakkaaksi" -linkit
  var triggers = [];
  document.querySelectorAll(".btn--member").forEach(function (b) {
    if (triggers.indexOf(b) === -1) triggers.push(b);
  });
  document.querySelectorAll("a.btn").forEach(function (a) {
    if (a.textContent.trim().toLowerCase().indexOf("liity asiakkaaksi") === 0) {
      if (triggers.indexOf(a) === -1) triggers.push(a);
    }
  });
  triggers.forEach(function (t) {
    t.addEventListener("click", open);
  });

  // Sulkeminen: rasti + taustaklikkaus (Esc toimii natiivisti)
  dialog
    .querySelector(".join-modal__close")
    .addEventListener("click", function () {
      dialog.close();
    });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
});
