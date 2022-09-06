<template>
<section id="contact" class="contact__container ">
        <div class="contact__description__image">
          <img class="contact__description__image--bacteries"
               src="../assets/images/bakterie 3.svg" alt="logo" />
          <img class="contact__description__image--cat " src="../assets/images/kot.png" alt="logo"/>
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
                    <div><img src="../assets/images/telefon.svg" alt="logo"/></div>
                    <div><a href="tel:515 739 219">515 739 219</a></div>
                  </li>
                  <li>
                    <div><img src="../assets/images/mail.svg" alt="logo"/></div>
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
                      <div><img src="../assets/images/telefon.svg" alt="logo"/></div>
                      <div><a href="tel:786 951 555">786 951 555</a></div>
                    </li>
                    <li>
                      <div><img src="../assets/images/mail.svg" alt="logo"/></div>
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
                      <div><img src="../assets/images/telefon.svg" alt="logo"/></div>
                      <div><a href="tel:797 355 990">797 355 990</a></div>
                    </li>
                    <li>
                      <div><img src="../assets/images/mail.svg" alt="logo"/></div>
                      <div><a href="mailto:dmoch@owlie.pl">dmoch@owlie.pl</a></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__content__wrapper--button">
            <router-link to="/contact" target="_self"><button class="contact__support__button--dark "> Write to us</button></router-link>
          </div>
        </div>
      </section>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
