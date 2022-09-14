<template>
       <header>
      <nav class="nav__container">
        <div class="nav__brand">
          <img class="nav__brand--image" src="../assets/images/logo.svg" alt="logo" />
        </div>
        <div class="menu-container">
          <ul id="menu" :style="showMenu ? styleMenu : null">
            <li><router-link class="nav-item" to="#mission">Mission</router-link></li>
            <li><router-link class="nav-item" to="#product">About the product</router-link></li>
            <li><router-link class="nav-item" to="#contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="nav__switch__language">
          <div>pl</div>
          <div>en</div>
        </div>
        <div class="burger__wrapper">
          <button id="burger" class="burger" @click='closing()'></button>
        </div>
      </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      showMenu: false,
      styleMenu: {
        opacity: 1,
        transition: 'opacity 0.5s ease-out'
      }
    }
  },
  methods: {
    closing () {
      this.showMenu = !this.showMenu
    }}
}
</script>
