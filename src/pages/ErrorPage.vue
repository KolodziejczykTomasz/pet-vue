<template>
  <body id="#main__body__page__error">
  <main>
    <section class="page__error">
      <div class="page__error__background--dark">
        <div class="page__error__background__image--wrapper">
          <img src="../assets/images/404/bakterie 6.svg" alt="photo"/>
          <img src="../assets/images/404/404.png" alt="photo"/></div>
      </div>
      <div class="page__error__background--light">
        <div class="page__error--title">
          <p> Oops… the page you requested is not exists</p>
        </div>
        <div class="page__error--button">
          <router-link to="/"><button class="contact__support__button--dark">Home Page</button></router-link>
        </div>
      </div>
    </section>
  </main>
  </body>
</template>
<script>
export default {
  name: 'ErrorPage'
}
</script>
