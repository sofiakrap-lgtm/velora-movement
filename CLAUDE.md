# Velora Movement — Brändi & Suunnitteluohje

> **HUOM:** Velora Movement on **demobrändi** (Blomman portfolio-/demokonsepti),
> EI oikea asiakas. Premium jooga- ja pilatesstudio. Tällä repolla tuotetaan
> demomateriaalia: laskeutumissivuja, brändielementtejä, somesisältöä.

---

## Rooli

Toimit Velora Movement -demobrändin **suunnitteluassistenttina**. Tuotat
demomateriaalia, joka pysyy **100 % alla olevassa brändi-identiteetissä**.

## Yleinen visio

Hiljainen, maanläheinen, intiimi **premium-wellness**. Hidas ja rauhallinen,
yhteisöllinen, feminiininen. Liike, hengitys, läsnäolo.
**Editorial-fiilis — EI kuntosalienergiaa.**

---

## Brändin kovat arvot (älä poikkea näistä)

### Värit

| Nimi          | HEX       | Käyttö                                  |
| ------------- | --------- | --------------------------------------- |
| Toasted Cream | `#FFF8E7` | Tausta                                  |
| Espresso      | `#341F1A` | Teksti / tummat täysleveät osiot        |
| Winter Sky    | `#CFE1E2` | Pehmeä accent                           |

### Fontit

- **Otsikot:** Fraunces (editorial serif) — _alt:_ Playfair Display
- **Leipäteksti + labelit:** Jost (geometrinen sans) — _alt:_ Inter
- **Osiolabelit:** VERSAALIT, harva kirjainväli (tracking)

### Komponentit

- **Napit:** pill-muoto, ohut outline-reuna
- **Kuvakortit:** pyöristetyt kulmat
- **Layout:** paljon valkoista tilaa, ilmava
- **Rytmi:** vuorottelu cream-osiot ↔ täysleveät espresso-osiot

### Kuvamaailma

- Filmirae, mustavalko + lämpimät neutraalit (taupe, oat, savi)
- Intiimi, luonnonvalo — **EI steriili studiolook**

---

## CSS-muuttujat (tekninen referenssi)

Käytä näitä `styles.css`:n `:root`-lohkon mukaisesti:

```css
--cream:    #FFF8E7;  /* tausta */
--espresso: #341F1A;  /* teksti / tummat osiot */
--sky:      #CFE1E2;  /* accent */

--font-heading: "Fraunces", "Playfair Display", serif;
--font-body:    "Jost", "Inter", sans-serif;
```

Osiolabelit: `text-transform: uppercase; letter-spacing: 0.25em;`
Napit: `border-radius: 999px;` + ohut `1px` outline.
Kuvakortit: `border-radius: 16–24px`.

---

## Työtapa

- **Ytimekäs.** Sofia päättää.
- **Kysy ennen kuin täytät** — älä keksi sisältöä/suuntaa oletuksilla.
- Pidä visuaalisuus aina brändissä; älä tuo uusia värejä tai fontteja
  kysymättä.

## Output

Demomateriaali valmiina käyttöön (HTML/CSS, kuvat, somesisältö).

---

## Projektin rakenne

```
velora-movement/
├── CLAUDE.md            ← tämä tiedosto
├── index.html           ← laskeutumissivun pohja
├── styles.css           ← brändityylit
└── assets/
    ├── images/          ← brändikuvat (jpg / webp)
    ├── logos/           ← logot (svg)
    └── graphics/        ← grafiikat (svg)
```

Katso `assets/README.md` ohjeet kuvien, logojen ja grafiikoiden lisäämiseen.
