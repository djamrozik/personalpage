
<template>
  <div id="contact">
    <div class="header new-row">
      <h3>CONTACT</h3>
      <p class="contact-info">
        For contact, feel free to send a message below (or send an email directly to <span>danjamrozik@gmail.com</span>).
        Thanks!
      </p>
    </div>

    <div class="contact-form">
      <div class="input-row">
        <label for="inputEmail">Your Email Address</label>
        <input type="email"
               class="form-control"
               :class="{'input-error': errors.has('email') }"
               id="inputEmail"
               placeholder="your email"
               name="email"
               v-validate="'required|email'"
               v-model="contact.email"
        />
        <span v-show="errors.has('email') && contact.attemptedSubmit" class="error">
          {{ errors.first("email") }}
        </span>
      </div>

      <div class="input-row">
        <label for="inputTopic">Message Topic</label>
        <input type="text"
               class="form-control"
               id="inputTopic"
               placeholder="message topic"
               name="subject"
               v-model="contact.subject"
        />
      </div>

      <div class="input-row">
        <label for="textareaMessage">Message</label>
        <textarea class="form-control"
                  id="textareaMessage"
                  cols="30" rows="5"
                  name="message"
                  v-model="contact.message"
                  v-validate="{required: true, min: 10 }"
                  :class="{'input-error': errors.has('message') }">
        </textarea>
        <span v-show="errors.has('message') && contact.attemptedSubmit" class="error">
          {{ errors.first("message") }}
        </span>
      </div>

      <p v-if="contact.success" class="contact-success-text">
        Message sent successfully!
      </p>

      <div class="button-container">
        <button class="btn btn-info"
                v-on:click="submitContactInfo">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { sendEmailToMe } from "./../api/email";

  export default {
    name: "contact-form",

    data () {
      return {
        contact: {
          attemptedSubmit: false,
          success: false
        }
      }
    },

    methods: {
      submitContactInfo () {
        let self = this;
        self.contact.attemptedSubmit = true;
        self.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          sendEmailToMe(self.contact).then((response) => {
            self.contact.success = true;
          }).catch(error => {
            console.error("There was an error sending the email", error); 
          });
        });
      }
    }
  }
</script>

<style>
  .contact-success-text {
		padding: 10px 0;
	}
</style>
