<template>
  <body id="body-contact">
  <div id="main__body__page__form">
  <header>
    <nav class="nav__container__form page__form--nav ">
      <div class="page__form__background--color"></div>
      <div id="nav__brand__form" class="nav__brand page__form__close--brand">
        <img class="nav__brand--image" src="../assets/images/logo.svg" alt="photo name"/> </div>
      <div class="page__form__close--button">
        <router-link to="/"><img src="../assets/images/x.svg" alt="photo name"/></router-link>
      </div>
    </nav>
  </header>
  <main>
    <section class="page__form">
      <div class="page__form__side--left">
        <img src="../assets/images/contact/bakterie 5.svg" alt="photo name"/>
        <img src="../assets/images/contact/pies-2.png" alt="photo name"/>
      </div>
      <div class="page__form__side--right">
        <div class="page__form__side__right__wrapper">
          <div class="page__form--title">Write to us</div>
          <div class="page__form--message">we will reply within 24 h</div>
        </div>
       <form id="form" class="form" name="contactForm" action="#" method="#">
        <div class="form-group" :class="{ 'has-error': $v.name.$error }">
                    <div class="form__wrapper--input form-control">
                        <input class="form_input" type="text" id="name" name="name" v-model.lazy="name" @input="$v.name.$touch()"/>
                        <label id="label_name" for="name" class="form__label" > Name </label>
                        <span class="error-form form-input-hint" v-if="$v.name.$dirty && !$v.name.required">Pole jest wymagane.</span>
                        <span class="error-form form-input-hint" v-if="$v.name.$dirty && !$v.name.minLength">Wpisz treść o przynajmniej 2 znakach.</span>
                     </div>
                    <div class="form__wrapper--input form-control">
                        <input class="form_input" type="text" id="lastName" name="lastName" v-model="lastName" @input="$v.lastName.$touch()"/>
                        <label id="label-lastName" for="lastName" class="form__label"  > Last name </label>
                        <span class="error-form form-input-hint" v-if="$v.lastName.$dirty && !$v.lastName.required">Pole jest wymagane.</span>
                        <span class="error-form form-input-hint" v-if="$v.lastName.$dirty && !$v.lastName.minLength">Wpisz treść o przynajmniej 2 znakach.</span>
                    </div>
                    <div class="form__wrapper--input form-control">
                        <input class="form_input" type="email" id="email" name="email" v-model="email" @input="$v.email.$touch()"/>
                        <label id="label-email" for="email" class="form__label " > Email </label>
                        <span class="error-form form-input-hint" v-if="$v.email.$dirty && !$v.email.required">Pole jest wymagane.</span>
                        <span class="error-form form-input-hint" v-if="$v.email.$dirty && !$v.email.email">Adres email jest niepoprawny.</span>                 </div>
                    <div class="form__wrapper--input form-control">
                        <textarea class="form_input" id="message" name="message" type="text" v-model="message" @input="$v.message.$touch()"></textarea>
                        <label id="label-message" for="message" class="form__label " > Message </label>
                        <span class="error-form form-input-hint messageError" v-if="$v.message.$dirty && !$v.message.required">Pole jest wymagane.</span>
                        <span class="error-form form-input-hint messageError" v-if="$v.message.$dirty && !$v.message.minLength">Wpisz treść o przynajmniej 2 znakach.</span>
                    </div>
                    <div class="page__form__checkbox--wrapper">
                       <input type="checkbox" id="checkbox_id" class="checkbox" v-model="checked"/>
                       <label for="checkbox_id" style="font-size:14px;"></label>
                       <div class="checkbox-text-wrapper">
                       <div class="checkbox-text">I consent to the processing of my personal data by Owlie S.A. for the purpose and to the extent necessary to handle this application. I have read the information on the method of processing my data.</div>
                        <span id="checkboxError" class="error-form"></span></div>
                    </div>
                    <div class="page__form--buttons">
                        <div class="form__slider--wrapper">
                            <input type="range" min="1" max="100" class="input-slider " id="button-slide" v-model="slider" />
                            <label for="button-slide" id="slider__label " class="slider-label">Slide and send</label>
                        </div>
                        <div>
                            <button type="submit" id="button-submit" :disabled="checked === false && slider !== 100 || $v.$invalid" :class="[checked === true && slider === '100' ? 'page__form__button button-dark' : 'page__form__button button-light']">Send
                            </button>
                           </div>
                        </div>
                        </div>
                      </form>
                    </div>
    </section>
  </main>
  </div></body>
</template>
<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  name: 'ContactPage',
  mixins: [validationMixin],
  data () {
    return {
      name: '',
      lastName: '',
      email: '',
      message: '',
      checked: false,
      slider: 0,
      buttonLight: {
        display: 'block'
      },
      buttonDark: {
        display: 'block'
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(15)
    },
    lastName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(30)
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(500)
    }
  }

}
</script>
