<template>
<footer class="footer__container ">
      <div id="dashborad_cookie" v-show="isModalVisible" class="cookies__container">
        <div class="cookies__container--text">This website uses cookies to provide services at the highest level. By
          continuing to use the site, you agree to their use.</div>
        <div class="cookies__container--button" @click.stop="isModalVisible
        =!isModalVisible" ><button
          id="btn_cookie" >ok
        </button></div>
      </div>
      <div class="footer__policy"><router-link to="/privacy">privacy policy</router-link></div>
      <div class="footer__copyright">&copy;2022 Pet Biom / realization <a href="https://www.solveit.pl/" target="_blank">solveit.pl</a> </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
