<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'App',
  components: { $ },
  mounted () {
    let topMenu = document.getElementById('menu')
    let btnBurger = document.getElementById('burger')

    window.onresize = () => {
      location.reload()
      if (window.innerWidth < 1919) {
        topMenu.style.opacity = '0'
      } else {
        topMenu.style.opacity = '1'
      }
    }
    btnBurger.onclick = function () {
      if (topMenu.style.opacity === '0') {
        topMenu.style.opacity = '1'
        topMenu.style.transition = 'opacity 0.5s ease-out'
      } else {
        topMenu.style.opacity = '0'
        topMenu.style.transition = 'none'
      }
    }
    const div = document.getElementById('hidden_text')
    div.style.display = 'none'
    document.getElementById('more').innerHTML = '+ more'
    document.getElementById('more').style.marginLeft = '0'
    document.getElementById('more').onclick = function () {
      if (div.style.display === 'none') {
        div.style.display = 'block'
        document.getElementById('more').style.marginLeft = '0'
        this.innerHTML = '- less'
      } else {
        div.style.display = 'none'
        this.innerHTML = '+ more'
      }
    }
  }
}
</script>
