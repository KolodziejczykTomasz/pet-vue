<template>
  <div id="HomePage">
    <router-view/>
    <Header/>
    <Ofert/>
    <Mission/>
    <Product/>
    <Contact/>
    <Footer/>

  </div>
</template>
<script>
import Header from '../components/Header'
import Ofert from '../components/Ofert'
import Mission from '../components/Mission'
import Product from '../components/Product'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Ofert,
    Mission,
    Product,
    Contact,
    Footer
  },
  data () {
    return {
      isOpenModal: false,
      isModalVisible: true
    }
  }}
</script>
