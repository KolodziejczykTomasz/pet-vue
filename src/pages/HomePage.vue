<template>
  <body id="main-body">
  <div id="HomePage">
    <router-view/>
    <component v-for="component in componentList" v-bind:is="component" :key="component"></component>
  </div>
  </body>
</template>
<script>
import Header from '../components/Header'
import Service from '../components/Service'
import Mission from '../components/Mission'
import Product from '../components/Product'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Service,
    Mission,
    Product,
    Contact,
    Footer
  },
  data () {
    return {
      componentList: [Header, Service, Mission, Product, Contact, Footer]
    }
  }
}
</script>
