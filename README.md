# assets/ — kuvat, logot ja grafiikat

Näin annat minulle brändimateriaalit niin, että ne löytyvät heti oikeasta
paikasta ja menevät suoraan sivupohjaan.

## Kansiot

| Kansio              | Mitä tänne          | Formaatti        |
| ------------------- | ------------------- | ---------------- |
| `assets/images/`    | Valokuvat           | `.jpg` / `.webp` |
| `assets/logos/`     | Logot               | `.svg` (+ `.png`)|
| `assets/graphics/`  | Ikonit, kuviot      | `.svg`           |

---

## Miten siirrät tiedostot GitHubiin

**Tapa 1 — selaimessa (helpoin):**
1. Mene repoon GitHubissa → avaa kansio (esim. `assets/images`).
2. **Add file → Upload files** → raahaa tiedostot → **Commit changes**.
   - Varmista että committaat branchille `claude/cool-edison-z7rt2r`
     (tai kerro minulle, niin yhdistän).

**Tapa 2 — raahaa suoraan editoriin:** voit raahata kuvan kansionäkymään,
GitHub lataa sen automaattisesti.

Kun tiedostot ovat repossa, sano *"kuvat on lisätty"* — kytken ne sivuun.

---

## Nimeämisohje (tärkeä)

Käytä **pieniä kirjaimia, väliviivoja, ei ääkkösiä, ei välilyöntejä.**
Nimi kuvaa sisältöä:

```
hero.jpg            slow-flow.jpg       reformer.jpg
restore.jpg         studio-interior.jpg community-01.jpg
```

`index.html` etsii jo näitä nimiä:
`hero.jpg`, `slow-flow.jpg`, `reformer.jpg`, `restore.jpg`.
Jos käytät samoja nimiä, kuvat ilmestyvät ilman koodimuutoksia. Muuten
kerro nimet, niin päivitän viittaukset.

---

## Kuvien tekniset suositukset (pitää brändissä + nopeana)

- **Suunta/koko:**
  - Hero: pysty tai vaaka, väh. **1600 px** leveä.
  - Kortit: pystykuva (3:4), väh. **1000 px** leveä.
- **Formaatti:** `.webp` on kevyin; `.jpg` toimii myös. Laatu ~80 %.
- **Tiedostokoko:** mielellään alle **400 kB** / kuva.
- **Tyyli:** filmirae, mustavalko + lämpimät neutraalit (taupe, oat, savi),
  intiimi luonnonvalo. **Ei steriiliä studiolookia.**
  - (CSS lisää kuviin kevyen grayscale/kontrastin, jotta ilme pysyy yhtenäisenä.)

## Logot

- Anna **vektorilogo `.svg`-muodossa** (skaalautuu terävänä joka koossa).
- Jos sinulla on light- ja dark-versiot (cream-taustalle ja espresso-taustalle),
  nimeä:
  ```
  velora-logo.svg            (oletus, espresso teksti)
  velora-logo-cream.svg      (vaalea, tummalle taustalle)
  velora-mark.svg            (pelkkä symboli/monogrammi)
  ```
- Lisää `.png`-fallbackit (esim. 512 px) jos tarvitaan somea varten.

## Grafiikat

- Ikonit ja koristekuviot `.svg`-muodossa.
- Pidä viivat ohuina ja muodot pelkistettyinä — sama hillitty editorial-linja.

---

### Vaihtoehto: voit myös jakaa Drive/Figma-linkin

Jos materiaali on Google Drivessa, Figmassa tai Canvassa, anna linkki — voin
hakea ne sieltä ja viedä repoon puolestasi. GitHub-upload on silti varmin tapa
isoille kuvakokoelmille.
