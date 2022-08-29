<template>
  <div id="app">
    <router-view/>
         <div>
    <header>
      <nav class="nav__container">
        <div class="nav__brand">
          <img class="nav__brand--image" src="../src/assets/images/logo.svg" />
        </div>
        <div>
          <ul id="menu">
            <li><a class="nav-item" href="#mission">Mission</a></li>
            <li><a class="nav-item" href="#product">About the product</a></li>
            <li><a class="nav-item" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="nav__switch__language">
          <div>pl</div>
          <div>en</div>
        </div>
        <div class="burger__wrapper">
          <button id="burger" class="burger" onclick="this.classList.toggle('active');"></button>
        </div>
      </nav>
    </header></div>
    <main>
      <section id="ofert">
        <div class="hero__container">
          <div>
            <div class="hero__title ">Probiotic for special tasks</div>
            <div class="hero__subtitle ">A product created out of passion for research on the beneficial effects
              of bacteria with probiotic properties.</div>
          </div>
          <div class="hero__image">
            <img class="hero__image--bacteries"
                 src="../src/assets/images/bakterie 1.svg" />
            <img class="hero__image--dog" src="../src/assets/images/pies-1.png" />
          </div>
        </div>
        <div class=" ofert__container ">
          <div class="ofert__element "><img src="../src/assets/images/dla psow.svg" />
            <p>for</p> dogs
          </div>
          <div class="ofert__element "><img src="../src/assets/images/dla kotow.svg" />
            <p>for </p>cats
          </div>
          <div class="ofert__element "><img src="../src/assets/images/dla zajeczakow.svg" />
            <p>for </p> rabbits
          </div>
          <div class="ofert__element "><img src="../src/assets/images/dla gryzoni.svg" />
            <p>for</p> rodents
          </div>
        </div>
      </section>
      <section id="mission" class="mission__container">
        <div id="section__mission--header" class="section__header">
          <span>01</span>
          <span></span>
          <span>Mission</span>
        </div>
        <div class="mission__content">
          <div class="mission__description">A healthy microbiota is crucial for the proper development and
            function of the intestines of dogs and cats. Bacteria that live in the intestine perform a number of
            important functions. Their role is primarily to support digestive processes,
            nourish the intestinal epithelium, produce short-chain fatty acids, synthesize vitamins and regulate
            the immune system.
          </div>
          <div class="mission__content--icon">
            <img src="../src/assets/images/wskaźnik.svg" />
          </div>
          <div class="mission__description--quote">
            <img class="mission__description__quote--image " src="../src/assets/images/cudzyslow 1.svg" />
            <p>We fully understand that the probiotic products we passionately create can significantly reduce
              the amount of antibiotics used in everyday veterinary practice and support you during long-term
              treatment that carries a risk of dysbiosis.</p>
            <img class="mission__description__quote--image " src="../src/assets/images/cudzyslow 2.svg" />
          </div>
        </div>
      </section>
      <section id="product" class="product__container">
        <div class="product__container--background">
          <div class="product__container__hidden__container">
            <div><img src="../src/assets/images/napis wygodne saszetki en.svg" /></div>
            <div class="product__container__hidden__container--text">7x3g</div>
          </div>
          <div class="product__header__image--wrapper">
            <img class="product__header--image" src="../src/assets/images/produkt.png" />
          </div>
          <div id="section__product--header" class="section__header section__header__product">
            <span class="">02</span>
            <span class=""></span>
            <span class="">About the product</span>
          </div>
          <div class="product__content">
            <div class="product__description">
              PetBIOM is a probiotic product facilitating stabilization of the beneficial intestinal
              microbiota. It regulates digestive processes and facilitates the absorption of microelements.
              Contains two hundred billion (2x1011 cfu/kg) lactic acid bacteria and
              products produced by strains of bacteria with probiotic properties Lactobacillus plantarum and
              Bifidobacterium animals, which together have a beneficial effect on the microbiological balance
              and intestinal microbiota of animals.
              They also affect the immunity and general improvement of the animal’s condition.
            </div>
            <div class="product__description__image__wrapper">
              <div class="product__description__image__element tooltip">
                <img class="product__description__image__element--img"
                     src="../src/assets/images/nie zawiera substancji konserwujacych.svg" />
                <span class="tooltiptext">It does not contain preservatives</span>
              </div>
              <div class="product__description__image__element tooltip">
                <img class="product__description__image__element--img"
                     src="../src/assets/images/nie zawiera glutenu.svg" />
                <span class="tooltiptext">It does not contain gluten</span>
              </div>
              <div class="product__description__image__element tooltip">
                <img class="product__description__image__element--img"
                     src="../src/assets/images/nie zawiera substancji słodzacych.svg" />
                <span class="tooltiptext">It does not contain sweeteners</span>
              </div>
              <div class="product__description__image__element tooltip">
                <img class="product__description__image__element--img"
                     src="../src/assets/images/produkt weganski.svg" />
                <span class="tooltiptext">Vegan product</span>
              </div>
            </div>
          </div>
        </div>
        <div class=" product__list ">
          <div id="product__list--left" class="product__list">
            <div>
              <button class="product__list--button">Properties</button>
            </div>
            <div class="product__list--item">
              <ul>
                <li>
                  <div><img src="../src/assets/images/mark.svg" /></div>
                  <div>Improves the qualitative and quantitative composition of the intestinal microbiome.
                  </div>
                </li>
                <li>
                  <div><img src="../src/assets/images/mark.svg" /></div>
                  <div></div>Limits the multiplication of pathogenic bacteria, reduces toxin levels.
                </li>
                <li>
                  <div><img src="../src/assets/images/mark.svg" /></div>
                  <div>Regulates the motility of the digestive tract.</div>
                </li>
                <li>
                  <div><img src="../src/assets/images/mark.svg" /></div>
                  <div>Improves the body's natural immunity.</div>
                </li>
              </ul>
            </div>
          </div>
          <div id="product__list--left" class="product__list">
            <div><button class="product__list--button">Supportive in</button></div>
            <div>
              <div class="product__list--item">
                <ul>
                  <li>
                    <div><img src="../src/assets/images/mark.svg" /></div>
                    <div>Intestinal dysbiosis.</div>
                  </li>
                  <li>
                    <div><img src="../src/assets/images/mark.svg" /></div>
                    <div>Chronic inflammation of the intestines IBD, IBS, Colitis.</div>
                  </li>
                  <li>
                    <div><img src="../src/assets/images/mark.svg" /></div>
                    <div>Malabsorption syndromes.</div>
                  </li>
                  <li>
                    <div><img src="../src/assets/images/mark.svg" /></div>
                    <div>Mycosis of the digestive system.</div>
                  </li>
                </ul>
              </div>
              <div class="product__list--item">
                <p id="more" class="font__color--orange">+ more</p>
                <div id="hidden_text" class="product__list">
                  <ul>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Acute and chronic pancreatitis, and in exocrine pancreatic insufficiency
                        EPI.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Disorders of intestinal microbiota.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Problems with defecation, megacolon in cats.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Diarrhea.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Conditions of increased stress.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Antibiotic therapy.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Decreased immunity supporting the course of atopy.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>Unpleasant odor from the mouth.</div>
                    </li>
                    <li>
                      <div><img src="../src/assets/images/mark.svg" /></div>
                      <div>To enhance regeneration.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product__details">
          <div class="product__details__top--wrapper">
            <div class="product__details__top--element">
              <p class="font__weight--strong product__details__top__element--text">Lactobacillus plantarum
                AMT14.</p>
              <ul class="product__details__top__element--text ">
                <li><span class="font__color--orange font__size--small">Strain patented in Poland, EU and USA.</span></li>
              </ul>
            </div>
            <div class="product__details__top--element ">
              <p class="font__weight--strong product__details__top__element--text">Bifidobacterium animals
                AMT30.</p>
              <ul class="product__details__top__element--text ">
                <li><span class="font__color--orange font__size--small">Strain patented in Poland, EU and  USA.</span></li>
              </ul>
            </div>
            <div class="product__details__top--element">
              <p class="font__weight--strong product__details__top__element--text">Lactobacillus plantarum AMT4.</p>
              <ul class="product__details__top__element--text ">
                <li><span class="font__color--orange font__size--small">Unique strain secured in deposit patent in accordance with the Budapest Convention</span></li>
                     </ul>
            </div>
          </div>
          <div class="product__details__modal--wrapper">
            <div id="btn_modal" class="product__details__icon--plus">
              <img src="../src/assets/images/plus tooltip.svg" />
            </div>
            <div id="dashborad_modal" class="modal">
              <div class="modal-content">
                <p>Feed materials 13.3.1 Starch (bulking agent), 12.1.8. Product produced by Lactobacillus
                  species, rich in tok, 07379-PL Product produced by species of Bifidobacterium, rich in
                  tok.</p>
                <p>Feed additives 1 / k Lactobacillus plantarum ATCC 8014 2x1011jtk / g. 1g per kg of the
                  finished product.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="product__details__bottom--wrapper">
          <div class="product__details___bottom__wrapper--element">
            <div><button class="product__list--button">Directions for use</button></div>
            <div class="product__details___bottom__wrapper__element--left">
              <p>
                Cats and dogs up to 10 kg body weight: 1/2 sachet with food or water once a day. Dogs over
                10 kg body weight 1 sachet once a day. Rodents and rabbits: 1 g of the product once a day
                for animals up to 2 kg of body weight, over 2 kg - 1 sachet of 3 g.
              </p>
              <p>
                It is recommended to use the probiotic at least 2 weeks, in case of chronic conditions up to
                6 weeks.
              </p>
            </div>
          </div>
          <div class="product__details___bottom__wrapper--element">
            <div><button class="product__list--button">Storage</button></div>
            <div class="product__details___bottom__wrapper__element--right">
              <p>
                It is recommended to store the product at a temperature of 2-8 degrees Celsius. After
                opening the sachet, use immediately. If the sachet is damaged or unsealed, the product is
                not suitable for use. In case of using only a part of the product, the sachet
                should be tightly closed and store in a refrigerator at 2-8 degrees Celsius, not longer than
                48h.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact__container ">
        <div class="contact__description__image">
          <img class="contact__description__image--bacteries" src="../src/assets/images/bakterie 3.svg" />
          <img class="contact__description__image--cat " src="../src/assets/images/kot.png" />
        </div>
        <div id="section__contact--header" class="section__header">
          <span>03</span>
          <span></span>
          <span>Contact</span>
        </div>
        <div class="contact__content--wrapper">
          <div class="contact__content">
            <div class="contact__orders--contact">
              <div class="contact__orders__contact--list ">
                <p class="contact__orders__contact--title">orders</p>
                <ul>
                  <li>Owlie S.A.</li>
                  <li>ul. Jarzębinowa 24</li>
                  <li>11-034 Stawiguda</li>
                </ul>
                <button class="contact__support__button--light">map</button>
              </div>
              <div class="contact__orders__contact--list ">
                <ul>
                  <li>
                    <div><img src="./assets/images/telefon.svg" /></div>
                    <div><a href="tel:515 739 219">515 739 219</a></div>
                  </li>
                  <li>
                    <div><img src="./assets/images/mail.svg" /></div>
                    <div><a href="mailto:zamowienia@owlie.pl">zamowienia@owlie.pl</a></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="contact__support--contact">
              <p class="font__weight--strong contact__orders__contact--title">support</p>
              <div class="contact__support__contact--woman">
                <p>Karolina Malewska</p>
                <p class="font__color--orange font__size--small ">dr n wet.</p>
                <div class="contact__support__contact--list">
                  <ul>
                    <li>
                      <div><img src="./assets/images/telefon.svg" /></div>
                      <div><a href="tel:786 951 555">786 951 555</a></div>
                    </li>
                    <li>
                      <div><img src="./assets/images/mail.svg" /></div>
                      <div><a href="mailto:petbiom@owlie.pl">petbiom@owlie.pl</a></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="contact__support__contact--men">
                <p>Michał Dmoch</p>
                <p class="font__color--orange font__size--small ">product manager</p>
                <div class="contact__support__contact--list">
                  <ul>
                    <li>
                      <div><img src="./assets/images/telefon.svg" /></div>
                      <div><a href="tel:797 355 990">797 355 990</a></div>
                    </li>
                    <li>
                      <div><img src="./assets/images/mail.svg" /></div>
                      <div><a href="mailto:dmoch@owlie.pl">dmoch@owlie.pl</a></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__content__wrapper--button">
            <a href="contact.html" target="_self"><button class="contact__support__button--dark "> Write to us</button></a>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer__container ">
      <div id="dashborad_cookie" class="cookies__container">
        <div class="cookies__container--text">This website uses cookies to provide services at the highest level. By
          continuing to use the site, you agree to their use.</div>
        <div class="cookies__container--button"><button id="btn_cookie">ok</button></div>
      </div>
      <div class="footer__policy"><a href="privacy.html" target="_self">
        privacy policy
      </a></div>
      <div class="footer__copyright">&copy;2022 Pet Biom / realization <a href="https://www.solveit.pl/" target="_blank">solveit.pl</a> </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    let top_menu = document.getElementById("menu");
    let btn_burger = document.getElementById("burger");

    window.onresize = () => {
      location.reload();
      if (window.innerWidth < 1919) {
        top_menu.style.opacity = "0";
      } else {
        top_menu.style.opacity = "1";
      }
    };
    btn_burger.onclick = function () {
      if (top_menu.style.opacity == "0") {
        top_menu.style.opacity = "1";
        top_menu.style.transition = "opacity 0.5s ease-out";
      } else {
        top_menu.style.opacity = "0";
        top_menu.style.transition = "none";
      }
    }
    const div = document.getElementById("hidden_text");

    div.style.display = "none";
    document.getElementById("more").innerHTML = "+ more";
    document.getElementById("more").style.marginLeft = "0";
    document.getElementById("more").onclick = function () {
      if (div.style.display == "none") {
        div.style.display = "block";
        document.getElementById("more").style.marginLeft = "0";
        this.innerHTML = "- less";
      } else {
        div.style.display = "none";
        this.innerHTML = "+ more";
      }
    }
    let links = document.querySelectorAll("a");
    links.forEach((a) => {
      a.addEventListener("click", function () {
        links.forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      })
    })

    let modal = document.getElementById("dashborad_modal");
    let btn_modal = document.getElementById("btn_modal");
    modal.style.display = "none";
    btn_modal.onclick = function () {
      if (modal.style.display == "none") {
        modal.style.display = "block";
      } else {
        modal.style.display = "none";
      }
    }


    let cookie = document.getElementById("dashborad_cookie");
    let btn_cookie = document.getElementById("btn_cookie");
    cookie.style.display = "flex";
    btn_cookie.onclick = function () {
      if (cookie.style.display === "none") {
        cookie.style.display = "flex";
      } else {
        cookie.style.display = "none";
      }
    }
    function isCheck() {
      let checkBox = document.getElementById("checkbox_id"),
        btn_range = document.getElementById("button-slide"),
        currentVal = btn_range.value;
      let btn_send = document.getElementById("button-submit");

      if (checkBox.checked == true && currentVal == 100) {
        btn_send.classList.remove("button-light");
        btn_send.classList.add("button-dark");
        btn_send.disabled = false;
      } else {
        btn_send.classList.remove("button-dark");
        btn_send.classList.add("button-light");
        checkBox.removeAttribute("checked");
      }
    }
  }
}
</script>
<style>
html {
  font-family: Raleway, Arial, sans-serif;
}

@font-face {
  font-display: swap;
  font-family: "Raleway";
  src: url("assets/fonts/Raleway-Black.ttf");
}
@font-face {
  font-display: swap;
  font-family: "RalewayBold";
  src: url("assets/fonts/Raleway-Bold.ttf");
}
@font-face {
  font-display: swap;
  font-family: "RalewayExtraBold";
  src: url("assets/fonts/Raleway-ExtraBold.ttf");
}
@font-face {
  font-display: swap;
  font-family: "Raleway";
  src: url("assets/fonts/Raleway-Regular.ttf");
}
@font-face {
  font-display: swap;
  font-family: "RalewaySemiBold";
  src: url("assets/fonts/Raleway-SemiBold.ttf");
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  max-width: 375px;
  margin: 0 auto;
  font-family: 'Raleway', Arial, sans-serif;
  border: 1px solid #d4d4d4;
  position: relative;
}
@media (min-width:1920px) {
  body {
    width: 100%;
    max-width: 1920px;
  }
}
body::after {
  content: "";
  position: absolute;
  background-image: linear-gradient(360deg, #ef7d00 0%, #ffcf9a 100%);
  bottom: 0;
  left: 0;
  right: 0;
  height: 95.20rem;
  opacity: 0.13;
  z-index: -1;
}
@media (min-width:1920px) {
  body::after {
    content: "";
    height: 62.20rem;
  }
}
#main__body__page__form::after,
#main__body__page__error::after,
#main__body__page__privacy::after {
  content: '';
  background: none;
}
button {
  cursor: pointer;
}
.section__header {
  display: inline-flex;
  width: 100%;
  margin: 30px 0;
  padding: 20px;
}
.font__color--orange {
  color: #EF7D00;
}

.font__weight--strong {
  font-weight: 600;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: #000;
  transition: .3s;
}

a:hover {
  color: #EF7D00;
}

.section__header span:first-child {
  color: #EF7D00;
  font-size: 16px;
}

.section__header span:last-child {
  font-weight: 600;
  width: 20px;
  font-family: 'RalewayExtraBold';
  line-height: 38px;
  font-size: 33px;
}

.section__header span:nth-of-type(2) {
  display: block;
  height: 62px;
  width: 8.14px;
  margin: 0 15px;
  background-color: #EF7D00;
  font-weight: 600;
}

.section__header span:last-child {
  font-size: 33px;
  width: 100%;
  font-weight: 600;
}

.header__background {
  height: 450px;
  width: 375px;
  margin: 0 auto;
}

.nav__switch__language {
  display: none;
}

@media (min-width:1920px) {
  .nav__switch__language {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 94px;
    height: 40px;
    border-radius: 8px;
    margin-top: 10px;
    margin-right: 20px;
    background-color: #fff;
    z-index: 1;
  }
  .nav__switch__language div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }
  .nav__switch__language div:last-child {
    color: grey;
  }
}

.nav__brand {
  padding-top: 20px;
  width: 170px;
  padding-left: 10px;
  height: auto;
}

@media (min-width:1920px) {
  .nav__brand {
    display: grid;
    height: 62px;
    margin-left: 10px;
  }
}

.nav__brand--image {
  display: block;
  position: relative;
  height: 44.53px;
  z-index: 9999;
}

.nav__container,
.nav__container__page__privacy,
.nav__container__form {
  display: flex;
  min-height: 70px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  border-bottom: 1px solid #EF7D00;
}

@media (min-width:1920px) {
  .nav__container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid #EF7D00;
    position: absolute;
    z-index: 9999;
    height: 80px;
    margin-top: 90px;
    margin-left: -20px;
  }
}
.nav__container__page__privacy {
  border-bottom: none;
}
.burger__wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  margin-right: 20px;
  justify-content: flex-end;
  align-self: center;
}
.burger {
  outline: none;
  height: 40px;
  width: 50px;
  border: 0px;
  padding: 0px;
  background: transparent;
  transition: all 250ms ease-out;
  cursor: pointer;
  z-index: 9999;
}
@media (min-width:1920px) {
  .burger {
    display: none;
  }
}

.burger:before,
.burger:after {
  content: '';
  width: 30px;
  height: 2px;
  position: absolute;
  background: #1a1a1a;
  transition: all 250ms ease-out;
  will-change: transform;
}
.burger:before {
  height: 2px;
}
.burger:before {
  transform: translateY(-3px);
}
.burger:after {
  transform: translateY(3px);
}
.active.burger:before {
  transform: translateY(0) rotate(45deg);
}
.active.burger:after {
  transform: translateY(0) rotate(-45deg);
}
#menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 375px;
  height: 100vh;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  margin-top: 0;
  margin-left: -160px;
  z-index: 9999;
  opacity: 0;
}
@media (min-width:1920px) {
  #menu {
    display: flex;
    flex-direction: row;
    width: calc(100% - 350px);
    height: 75px;
    margin-left: 0;
    opacity: 1;
    background-color: transparent;
    transform: translate(0%);
  }
}
#menu li {
  padding: 10px 0;
  font-size: 20px;
  font-family: 'RalewaySemiBold';
  width: 220px;
}
@media (min-width:1920px) {
  #menu li {
    padding: 10px 0;
    font-size: 20px;
    font-family: 'RalewaySemiBold';
    width: 220px;
  }
}
a.active::after {
  content: '';
  display: inline-block;
  height: 8px;
  width: 8px;
  margin-left: 15px;
  margin-bottom: 4px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li a {
  text-decoration: none;
}

header {
  position: relative;
  padding: 0 20px;
}

.hero__container {
  display: block;
  min-height: 140px;
  height: auto;
  padding:70px 20px 0 20px;
  margin-top: -90px;
  margin-bottom: 150px;
  background-color: rgba(253, 239, 223, 1);
  background-image: linear-gradient(170deg, rgba(253, 239, 223, 1) 0%, rgba(255, 249, 242, 1) 100%);
}

@media (min-width:1920px) {
  .hero__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 750px;
    padding-left: 270px;
  }
}

.hero__title {
  font-size: 33px;
  padding-top: 40px;
  font-family: 'RalewayExtraBold';
  line-height: 38px;
}

@media (min-width:1920px) {
  .hero__title {
    padding-top: 300px;
    height: auto;
    font-size: 70px;
    line-height: 75px;
  }
}

.hero__subtitle {
  display: none;
}

@media (min-width:1920px) {
  .hero__subtitle {
    display: block;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
    margin-left: 0;
    width: 623px;
    height: 90px;
  }
}

.hero__image {
  display: block;
  position: relative;
  height: 30px;
  width: 100%;
  margin-top: 200px;
}

.hero__image--bacteries {
  display: block;
  width: 309px;
  height: auto;
  margin-top: -200px;
  margin-left: 0;
  position: absolute;
  z-index: 0;
}
@media (min-width:1920px) {
  .hero__image--bacteries {
    display: block;
    width: 817px;
    margin-left: -200px;
    bottom: -480px;
  }
}
.hero__image--dog {
  display: block;
  position: absolute;
  height: 309px;
  left: 20px;
  bottom: -80px;
  z-index: 1;
}
@media (min-width:1920px) {
  .hero__image--dog {
    display: block;
    height: 758px;
    left: -100px;
    bottom: -680px;
  }
}
.ofert__container {
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
}
@media (min-width:1920px) {
  .ofert__container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    width: 40%;
    height: 200px;
    margin-top: -244px;
    margin-left: 270px;
    position: relative;
  }
}
.ofert__element {
  display: block;
  border-radius: 8px;
  padding: 15px;
  width: 146px;
  height: 146px;
  margin: 7px;
  line-height: 18px;
  font-family: "Raleway";
  font-size: 16px;
  box-shadow: 0 5px 15px 5px hsl(0, 0%, 90%);
  transition: .3s;
}
@media (min-width:1920px) {
  .ofert__element {
    width: 133px;
    height: 177px;
    background-color: #fff;
  }
}
.ofert__element p {
  padding-top: 5px;
}

@media (min-width:1920px) {
  #section__mission--header {
    display: flex;
    margin-left: 180px;
    width: 50%;
    position: absolute;
  }
  #section__mission--header span:last-child {
    font-family: 'RalewayExtraBold';
    font-size: 45px;
    line-height: 50px;
  }
}

@media (min-width:1920px) {
  .mission__content {
    display: grid;
    width: 100%;
    grid-template-columns: 625px 40px 711px;
    justify-content: center;
    align-items: center;
    margin: 200px 0;
    padding-left: 140px;
    position: relative;
  }
}

.mission__description {
  width: 375px;
  margin: 0 auto 0 auto;
  font-size: 16px;
  line-height: 26px;
}

.mission__description {
  display: flex;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .mission__description {
    padding-top: 30px;
    width: 100%;
  }
}

.mission__content--icon {
  display: none;
}

@media (min-width:1920px) {
  .mission__content--icon {
    display: grid;
  }
}

.mission__description--quote {
  display: block;
  position: relative;
  width: 312px;
  height: 380px;
  margin: 110px auto 110px auto;
  background-color: #EF7D00;
  padding: 50px;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  line-height: 25px;
}

@media (min-width:1920px) {
  .mission__description--quote {
    width: 100%;
    top: -50px;
    margin-bottom: 20px;
    height: 250px;
  }
}

.mission__description--quote p {
  margin-top: 20px;
}

.mission__description__quote--image {
  position: absolute;
  height: 20%;
}

@media (min-width:1920px) {
  .mission__description__quote--image:first-child {
    top: -20px;
  }
  .mission__description__quote--image:last-child {
    bottom: -20px;
  }
}

.mission__description__quote--image:first-child {
  top: -40px;
  left: 30px;
}

@media (min-width:1920px) {
  .mission__description__quote--image:first-child {
    top: -20px;
  }
}

.mission__description__quote--image:last-child {
  bottom: -40px;
  right: 30px;
}

@media (min-width:1920px) {
  .mission__description__quote--image:last-child {
    bottom: -20px;
  }
}

@media (min-width:1920px) {
  #section__mission--header span:last-child {
    margin-left: 90px;
  }
}

@media (min-width:1920px) {
  .product__container {
    display: block;
    width: 100%;
    min-height: 700px;
    height: auto;
    margin-top: 0;
  }
}

.product__container__hidden__container {
  visibility: hidden;
}

@media (min-width:1920px) {
  .product__container__hidden__container {
    display: flex;
    justify-content: center;
    align-items: center;
    top: -85px;
    margin-left: 700px;
    background-color: #fff;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    position: absolute;
    visibility: visible;
  }
  .product__container__hidden__container--text {
    font-size: 25px;
    position: absolute;
    font-family: "RalewayExtraBold";
  }
}

@media (min-width:1920px) {
  #section__product--header {
    display: flex;
    margin-left: 45%;
    position: absolute;
    width: 50%;
    top: 60px;
    position: absolute;
  }
  .section__header__product span:last-child {
    margin-left: 90px;
    font-family: 'RalewayExtraBold';
    font-size: 45px;
    line-height: 50px;
  }
}
.product__container--background {
  display: block;
  background-color: #FEF7F0;
  margin-top: 0;
  padding-bottom: 80px;
  width: 100%;
  height: 100%;
  position: relative;
}

@media (min-width:1920px) {
  .product__container--background {
    width: 100%;
  }
}

.product__header--image {
  display: block;
  width: 312px;
  height: 210px;
  margin: -60px auto 0 auto;
}

@media (min-width:1920px) {
  .product__header__image--wrapper {
    padding: 100px;
    width: 40%;
  }
}

@media (min-width:1920px) {
  .product__description__image {
    display: block;
    left: 300px;
    top: 400px;
    width: 758px;
    min-height: 785px;
    height: auto;
  }
}

@media (min-width:1920px) {
  .product__description__image__element {
    width: 134px;
    height: 134px;
  }
  .product__description__image__element--img {
    width: 53px;
    height: 55px;
  }
}

@media (min-width:1920px) {
  .product__header--image {
    display: block;
    width: 758px;
    height: auto;
    left: 180px;
    top: 280px;
    margin: 0;
  }
}

.product__details {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .product__content {
    width: 625px;
    padding: 0;
    margin: 0;
  }
  .product__content {
    display: flex;
    width: 650px;
    flex-direction: column;
    margin-left: 54%;
    margin-top: -200px;
  }
}

.product__description {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .product__description {
    display: block;
    width: 625px;
    padding: 0;
    margin-top: -320px;
  }
}

.product__details {
  background-color: hsla(31, 100%, 80%, 0.20);
  border-radius: 8px;
  padding: 40px 30px 80px 30px;
  margin: 50px auto;
  height: 410px;
  width: 312px;
  margin-top: 50px;
}

@media (min-width:1920px) {
  .product__details {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    background-image: url("/assets/images/bakterie 2.svg");
    margin: 100px 0 200px 0;
  }
}

.product__details___description--right {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .product__details__top--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 0 133px;
    padding-top: 70px;
  }
  .product__details__top__element--text {
    padding-left: 133px
  }
}

.product__details__icon--plus {
  display: block;
  margin: 20px;
}

@media (min-width:1920px) {
  .product__details__icon--plus {
    display: block;
    right: 20px;
    position: absolute;
  }
}

.product__details__icon--plus img {
  position: relative;
  margin-left: 90%;
  padding-bottom: 20px;
  cursor: pointer;
}

@media (min-width:1920px) {
  .product__details__icon--plus img {
    position: relative;
    margin: 20px;
    cursor: pointer;
  }
}

.modal {
  display: none;
}

@media (min-width:1920px) {
  #more {
    margin-left: -200px;
  }
}

@media (min-width:1920px) {
  .product__details__modal--wrapper {
    width: 100%;
    height: 0;
  }
  .modal {
    width: 100%;
    height: 0;
  }
}

.modal-content {
  top: 100%;
  left: 50%;
  transform: translate(-20%, -100%);
  width: 220px;
  min-height: 200px;
  font-size: 16px;
  line-height: 26px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

@media (min-width:1920px) {
  .modal-content {
    top: 100%;
    right: 100%;
    width: 800px;
    min-height: 200px;
    transform: translate(100%, -80%);
  }
}

.modal-content p {
  margin: 10px 0;
  padding: 20px;
}

.tooltip {
  position: relative;
  display: inline-block;
  transition: .3s;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #EF7D00;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  font-size: 13px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
  padding: 10px;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext::before {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  background-color: #EF7D00;
  margin: -17px auto 0 auto;
  transform: rotate(45deg);
}

.product__details___description--right {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

.product__details__bottom--wrapper {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

.product__details__bottom--wrapper {
  width: 100%;
}

.product__details___bottom__wrapper--element {
  display: block;
  margin: 0 auto 50px auto;
  width: 312px;
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .product__details__bottom--wrapper {
    display: flex;
    width: 100%;
    margin: 200px 0 100px 0;
  }
}

@media (min-width:1920px) {
  .product__details__wrapper--left {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    width: 100%;
    background-image: url("/assets/images/bakterie 2.svg");
  }
}

@media (min-width:1920px) {
  .product__details___bottom__wrapper--element {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 151px;
    height: auto;
  }
  .product__details___bottom__wrapper--element p {
    width: 100%;
    font-size: 16px;
    line-height: 26px;
  }
  .product__details___bottom__wrapper__element--left,
  .product__details___bottom__wrapper__element--right {
    padding-right: 40px;
  }
}

@media (min-width:1920px) {
  .product__list--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 50px 0;
  }
}

@media (min-width:1920px) {
  #product__list--left,
  #product__list--right,
  #hidden_text {
    width: 100%;
  }
  #product__list--left {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  #product__list--right div {
    flex-direction: row;
  }
}

.product__description__image__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.product__description__image__element {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  margin: 7px;
  width: 146px;
  height: 146px;
  cursor: pointer;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.product__description__image__element--img {
  width: 53.52px;
  height: 55px;
}

.product__description__image {
  display: block;
  margin: 0 auto;
  width: 311px;
  height: 330px;
}

.product__list {
  width: 312px;
  margin: 80px auto 0 auto;
}

@media (min-width:1920px) {
  .product__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 150px 0 50px 0;
    width: 100%;
  }
}

.product__list li {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 90px;
  height: auto;
  width: 100%;
  line-height: 26px;
  border-bottom: 1px solid #F0F0F0
}

@media (min-width:1920px) {
  .product__list--item li {
    width: 650px;
  }
}

@media (min-width:1920px) {
  #product__list--left,
  #product__list--right,
  #hidden_text {
    width: 100%;
  }
  #product__list--left {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  #product__list--right div {
    flex-direction: row;
  }
}

.product__list li img {
  display: block;
  width: 70px;
}

.product__list li div {
  display: block;
}

.product__list li:last-child {
  border: none;
}

#more {
  text-transform: uppercase;
  width: 312px;
  margin: 20px auto 70px auto;
  font-size: 11px;
  font-family: "RalewaySemiBold";
  letter-spacing: 2px;
  cursor: pointer;
}

.product__list--button {
  display: block;
  width: 312px;
  height: 59px;
  color: white;
  background-color: #EF7D00;
  border: none;
  margin: 0 auto 30px auto;
  text-align: center;
  transition: .3s;
  font-size: 16px;
  font-family: 'RalewayExtraBold';
  letter-spacing: 1px;
}

.product__list--button:hover {
  background-color: white;
  color: #EF7D00;
  filter: drop-shadow(0 5px 10px #d4d4d4);
}

@media (min-width:1920px) {
  .product__list--button {
    width: 226px;
    height: 59px;
    margin-right: 40px;
  }
}

.product__list img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.product__description__image {
  display: block;
  overflow: hidden;
  position: relative;
}

.product__description__image--bacteries {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.product__description__image--cat {
  display: block;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
}

.product__details {
  margin-bottom: 80px;
  background-color: #FEF7F0;
  border-radius: 8px;
}

.product__details div {
  margin: 10px 0;
}

@media (min-width:1920px) {
  #section__contact--header {
    display: flex;
    margin-top: -200px;
    margin-left: -20px;
    width: 30%;
    position: absolute;
  }
  #section__contact--header span:last-child {
    margin-left: 90px;
    font-family: 'RalewayExtraBold';
    font-size: 45px;
    line-height: 50px;
  }
}

.contact__container {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px 0 20px;
}

@media (min-width:1920px) {
  .contact__container {
    padding: 0 180px;
    min-height: 990px;
    height: auto;
  }
}

.contact__description__image {
  display: block;
  overflow: hidden;
  position: relative;
  width: 311px;
  height: 322px;
}

@media (min-width:1920px) {
  .contact__description__image {
    display: block;
    margin-left: 800px;
    margin-bottom: -260px;
    width: 758px;
    height: 785px;
  }
}

.contact__description__image--bacteries {
  display: block;
  position: absolute;
  width: 311px;
  height: 322px;
  z-index: 1;
}

@media (min-width:1920px) {
  .contact__description__image--bacteries {
    height: 100%;
    width: 100%;
    bottom: 100px;
  }
}

.contact__description__image--cat {
  display: block;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
}

@media (min-width:1920px) {
  .contact__description__image--cat {
    height: 100%;
    width: 100%;
  }
}

@media (min-width:1920px) {
  .contact__container {
    display: block;
    margin: 90px 0 100px 0;
  }
}

.contact__content--wrapper {
  display: block;
  width: 100%;
  flex-direction: row;
  position: relative;
}

@media (min-width:1920px) {
  .contact__content {
    display: flex;
    flex-direction: row;
    padding-left: 133px;
  }
  .contact__content__wrapper--button {
    display: block;
    position: absolute;
    right: 200px;
    bottom: 20px;
  }
}

.contact__orders--contact,
.contact__support--contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 312px;
  height: 393px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 0 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

@media (min-width:1920px) {
  .contact__orders--contact,
  .contact__support--contact {
    width: 293px;
    height: 464px;
  }
  .contact__orders--contact {
    margin-right: 40px;
  }
}

.contact__support--contact {
  height: 460px;
}

.contact__orders__contact--title {
  margin-bottom: 30px;
  font-family: 'RalewayExtraBold';
  font-size: 16px;
}

@media (min-width:1920px) {
  .contact__orders__contact--list {
    margin-bottom: 40px;
  }
}

.contact__orders__contact--list:first-child {
  border-bottom: 1px solid #F0F0F0
}

.contact__support__contact--list {
  margin-top: 20px;
}

.contact__support__contact--woman {
  padding-bottom: 15px;
  border-bottom: 1px solid #F0F0F0
}

.contact__support__contact--men {
  margin-top: 15px;
}

.contact__support__button--dark {
  display: block;
  width: 310px;
  height: 70px;
  border: none;
  margin: 0 auto 40px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-family: 'RalewaySemiBold';
  color: white;
  background-color: #EF7D00;
  box-shadow: 0 10px 40px rgba(239, 125, 0, 0.4);
  transition: .3s;
}

.contact__support__button--dark:hover {
  background-color: white;
  color: #EF7D00;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.contact__support__button--light {
  display: block;
  width: 232px;
  height: 40px;
  color: #EF7D00;
  background-color: #FEF7F0;
  border: none;
  border-radius: 8px;
  margin: 20px auto 20px auto;
  text-align: center;
  text-transform: uppercase;
  transition: .3s;
  font-size: 11px;
  letter-spacing: 2px;
  font-family: 'RalewaySemiBold';
}

.contact__support__button--light:hover {
  background-color: #EF7D00;
  color: #FEF7F0;
}

.contact__orders__contact--list li,
.contact__support__contact--list li {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
}

.contact__orders__contact--list li img,
.contact__support__contact--list li img {
  display: block;
  width: 38px;
  margin-right: 10px;
}

.contact__orders__contact--list li div,
.contact__support__contact--list li div {
  display: block;
}

.footer {
  background-color: transparent;
}

.footer__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 15px 0;
  border-top: 1px solid #EF7D00;
}

@media (min-width:1920px) {
  .footer__container {
    flex-direction: row;
    width: 100%;
    padding: 0 40px;
  }
}

.footer__policy {
  text-align: center;
  width: 100%;
  height: 100%;
}

@media (min-width:1920px) {
  .footer__policy {
    padding-top: 30px;
    text-align: left;
  }
}

.footer__copyright {
  text-align: center;
  width: 100%;
  height: 100%;
}

@media (min-width:1920px) {
  .footer__copyright {
    text-align: right;
    padding-top: 30px;
  }
}

.cookies__container {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 15px;
  margin-left: 20px;
  position: absolute;
  z-index: 9999;
  bottom: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

@media (min-width:1920px) {
  .cookies__container {
    display: flex;
    width: 1000px;
    height: 90px;
    position: absolute;
    bottom: 20px;
    margin-left: 20px;
    z-index: 9999;
  }
}

.cookies__container--text {
  margin-right: 20px;
}

.cookies__container--button button {
  border: none;
  color: #ef7d00;
  font-size:11px;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  font-family: 'RalewaySemiBold';
  background-color: #F0F0F0;
  transition: .3s;
}
.cookies__container--button button:hover {
  color: #F0F0F0;
  background-color: #ef7d00;
}
.cookies__container--button {
  margin-right: 15px;
}
.page__form--nav {
  border-bottom: none;
}
.page__form {
  display: block;
  position: relative;
  width: 375px;
  margin: 0 auto;
  height: calc(100vh - 82px);
  overflow: hidden;
}
.page__error {
  height: 100vh;
}
.page__error__background--dark {
  display: block;
  background-color: #FEF7F0;
  height: 50vh;
  position: relative;
}
.page__error__background--dark img:first-child {
  display: block;
  width: 300px;
  height: auto;
  bottom: -50px;
  left: 30px;
  position: absolute;
}
.page__error__background--dark img:last-child {
  display: block;
  bottom: -50px;
  left: 30px;
  width: 300px;
  height: auto;
  position: absolute;
}
.page__error__background--light {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #FFF;
  height: 50vh;
}
.page__error--title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
  font-family: "RalewayExtraBold";
  margin-top: 40px;
}
.page__form {
  font-family: 'Raleway';
  height: auto;
}
.page__form__side--left {
  display: none;
}
.page__error--button {
  display: flex;
  margin-top: 60px;
}
.page__form--nav,
.page__privacy--nav {
  display: flex;
}
.page__form__close--button,
.page__privacy__close--button {
  display: inline-flex;
  margin-top: 20px;
  margin-left: 45%;
}
.page__form__close--button,
.page__privacy__close--button {
  display: flex;
  justify-content: end;
  width: 100%;
  padding-right: 10px;
}
.page__form__button--dark {
  cursor: pointer;
}
.page__form--title {
  font-size: 33px;
  font-family: "RalewayExtraBold";
  margin: 50px 0 20px 20px;
}
@media (min-width:1920px) {
  .page__form {
    width: 100%;
  }
  .page__form {
    display: flex;
    height: calc(100vh - 82px);
  }
  .page__form__side__right__wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 492px;
  }
  .page__form__side--right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    margin-bottom: -100px;
  }
  .page__form__side--left {
    display: block;
    position: relative;
    width: 805px;
    background-color: hsla(31, 100%, 80%, 0.13);
  }
  .page__form__side--left img:first-child {
    display: block;
    position: absolute;
    margin: 100px auto 0 220px;
  }
  .page__form__side--left img:last-child {
    display: block;
    position: absolute;
    margin: 100px auto 0 160px;
  }
  form {
    width: 492px;
    margin: 0 auto;
  }
  .page__form--title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    font-family: "RalewayExtraBold";
  }
  .page__form--message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    margin-left: 20px;
    margin-bottom: -20px;
    color: #EF7D00;
    padding: 15px 10px;
    border-radius: 8px;
    background-color: #FEF7F0;
    font-size: 16px;
  }
  .page__form__background--color {
    display: flex;
    width: 805px;
    height: 100%;
    position: absolute;
    z-index: 0;
    margin-left: -20px;
    background-color: hsla(31, 100%, 80%, 0.13);
  }
}

.page__privacy {
  padding: 0 20px 40px 20px;
}

.page__privacy--title {
  font-size: 33px;
  margin: 40px 0 20px 0;
  font-family: "RalewayExtraBold";
}

.page__privacy--subtitle {
  display: block;
  color: #EF7D00;
  margin: 30px 0 20px 0;
}

.page__privacy__list {
  margin: 10px 0;
}

.page__privacy__list li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px 0;
}

.page__privacy__list li img {
  margin-right: 15px;
}

.page__privacy--content {
  font-size: 16px;
  line-height: 26px;
}

@media (min-width:1920px) {
  .page__privacy {
    width: 748px;
    margin: 0 auto;
  }
}

@media (min-width:1920px) {
  .page__error {
    height: calc(100vh - 20px);
    width: 100%;
  }
  .page__error__background--dark {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    width: 100%;
  }
  .page__error__background--light {
    height: 50vh;
    width: 100%;
  }
  .page__error__background__image--wrapper {
    display: block;
    position: relative;
    top: 100px;
    width: 760px;
    height: 597px;
  }
  .page__error__background__image--wrapper img:first-child {
    display: block;
    position: absolute;
    width: 760px;
    height: auto;
    left: 70px;
  }
  .page__error__background__image--wrapper img:last-child {
    display: block;
    position: absolute;
    width: 760px;
    height: auto;
  }
  .page__error--title {
    font-size: 25px;
  }
}
input,
textarea {
  border: none;
  border-bottom: 1px solid #d4d4d4;
  width: calc(100% - 44px);
  margin: 0 20px 20px 20px;
  height: 60px;
  line-height: 18px;
  font-size: 16px;
  color: #000;
  font-family: 'Raleway';
}
textarea {
  padding-top: 30px;
}
input::placeholder {
  color: #000;
  opacity: 1;
  font-family: 'Raleway';
}

input:focus,
textarea:focus {
  outline: none !important;
  border-bottom: 1px solid #EF7D00;
  color: #EF7D00;
}

.form__label {
  display: block;
  position: absolute;
  margin-top: -50px;
  margin-left: 20px;
}
.active {
  margin-top: -80px;
}
input:focus + label.form__label{
  display: block;
  position: absolute;
  margin-top: -90px;
  margin-left: 20px;
  color: #EF7D00;
}
textarea:focus + label.form__label{
  display: block;
  position: absolute;
  padding-top: 20px;
  margin-top: -160px;
  margin-left: 20px;
  color: #EF7D00;
}
.form-label:last-child {
  margin-top: -40px;
}
.help {
  background-color: white;
  color: red;
  margin-left: 20px;
  bottom: 20px;
  visibility: hidden;
  position: relative;
}
form {
  margin-bottom: 30px;
}
#checkbox__form {
  width: 16px;
  height: 16px;
}
textarea {
  height: 120px;
  padding-bottom: 30px;
  font-family: 'Raleway';
}
.page__form--message {
  display: none;
}
.page__form__checkbox--wrapper {
  display: flex;
  font-size: 13px;
  line-height: 26px;
  padding-right: 20px;
  margin-top: 20px;
  margin-left: 20px;
}
.page__form__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 70px;
  border: none;
  margin: 50px auto 40px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  font-family: 'Raleway';
  letter-spacing: 2px;
  transition: .3s;
}
.button-dark {
  color: white;
  background-color: #EF7D00;
  box-shadow: 0 5px 15px 5px hsl(0, 0%, 90%);
}
.button-light {
  background-color: white;
  color: #EF7D00;
  box-shadow: 0 10px 40px rgba(239, 125, 0, 0.4);
}
.button-light:disabled {
  background-color: white;
  color: #EF7D00;
  box-shadow: 0 10px 40px rgba(239, 125, 0, 0.4);
  cursor: default;
}
@media (min-width:1920px) {
  .page__form__button--dark, .input-slider {
    margin: 0;
    padding: 0;
    width: 236px;
  }
}
@media (min-width:1920px) {
  .page__form--buttons {
    margin: 10px auto 10px auto;
  }
}
.page__form--buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  min-height: 280px;
  height: auto;
}
@media (min-width:1920px) {
  .page__form--buttons {
    width: 500px;
    display: flex;
    flex-direction: row;
    min-height: 180px;
  }
}
.form__slider--wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 310px;
  height: 70px;
  border: 1px solid #EF7D00;
  background-color: #fff;
  color: #EF7D00;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  z-index: 1;
}
@media (min-width:1920px) {
  .form__slider--wrapper {
    width: 236px;
    margin-right: 20px;
    margin-bottom: -10px;
  }
  .input-slider{
    width: 236px;
  }
  .page__form__button {
    width: 236px;
  }
  .page__form__checkbox--wrapper {
    position: relative;
  }
  .page__form__checkbox--wrapper .error-form {
    position: absolute;
    top: -40px;
    width: 200px;
  }
}
.input-slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  background-color: transparent;
  width: 100%;
  margin-bottom: -2px;
  border: none;
  margin-left: 0;
  margin-right: 0;
}
.input-slider:focus {
  border: none;
}
.input-slider:hover {
  opacity: 1;
}
.input-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 70px;
  background-color: #EF7D00;
  cursor: pointer;
  border: none;
  border-radius: 0;
}

.input-slider::-moz-range-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 70px;
  background-color: #EF7D00;
  cursor: pointer;
  border: none;
  border-radius: 0;
}
.slider-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border: 1px solid #EF7D00;
  position: absolute;
  color: #EF7D00;
  margin: 0 auto;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  z-index: -1;   }
input[type="checkbox"]:checked + label::after {
  content: '';
  position: absolute;
  top: 1ex;
  left: 0.8ex;
  height: 8px;
  width: 15px;
  border: 2px solid #EF7D00;
  border-top: none;
  border-right: none;
  transform: rotate(-60deg);
}
input[type="checkbox"] {
  line-height: 20px;
}

input[type="checkbox"] {
  position: absolute;
  left: -999em;
  margin-left: 10px ;
}

input[type="checkbox"] + label {
  padding-right: 30px;
  padding-left: 0;
}
input[type="checkbox"] + label {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
input[type="checkbox"] + label::before {
  content: "";
  display: inline-block;
  vertical-align: -25%;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 4px;
  margin-right: 0.5em;
}
input[type="checkbox"]:focus + label::before{
  border: 1px solid #EF7D00;
}
.checkbox-text-wrapper{
  display: flex;
  flex-direction: column;
  margin-left: 0;
}
.form__wrapper--input form-control {
  position: relative;
}
div.error {
  display: block;
  width: 100%;
  height: 20px;
  position: absolute;
  color: red;
  margin-left: 25px;
  margin-top: -23px;
}
.checkbox-text-wrapper div.error {
  margin-left: 0;
}
.page__form__checkbox--wrapper div.error {
  margin-top: 120px;
}
.checkbox-text {
  display: inline-block;
  width: 100%;
}
</style>
