<template>
       <header>
      <nav class="nav__container">
        <div class="nav__brand">
          <img class="nav__brand--image" src="../assets/images/logo.svg" alt="logo" />
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
          <button id="burger" class="burger" :class="{ active }"
                  @click="active = !active"></button>
        </div>
      </nav>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
