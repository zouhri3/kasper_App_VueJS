<template>
  <article class="contact">
    <!-- start header-app about component-->
    <header-app />
    <!-- end header-app about component-->
    <!-- start heading-section pricing component-->
    <heading-section
      :descriptionHeading="descriptionHeading"
      :headingName="headingName"
    />
    <!-- end heading pricing component-->

    <!-- satrt contact-box -->
    <section class="contact-box container">
      <form action="#" method="get" @submit="formValidation">
        <input type="text" placeholder="Full Name" v-model="fullName" />
        <input type="email" placeholder="Your E-mail" v-model="email" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message ! "
          v-model="message"
        ></textarea>
        <input type="submit" value="send message" />
      </form>

      <address class="more-info">
        <div class="phone">
          <h3>Get In Touch</h3>
          <p>+00 123.456.789</p>
          <p>+00 123.456.789</p>
        </div>
        <div class="localisation">
          <h3>Where We Are</h3>
          <p>Awesome Address 17 New York, NYC 123-4567-890 USA</p>
        </div>
      </address>
    </section>
    <!-- end contact-box -->

    <!-- start footer about component-->
    <Footer
      :descritionIconFooter="descritionIconFooter"
      :iconSocials="iconSocials"
    />
    <!-- end footer about component-->
  </article>
</template>

<script>
import headerApp from "@/components/globals/headerApp.vue";
import headingSection from "@/components/globals/headingSection.vue";
import Footer from "@/components/globals/footer.vue";

export default {
  name: "Contact",
  data() {
    return {
      // start heading-section in service data
      headingName: "^_contact_^",
      descriptionHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
      // end heading-section in service data

      // start validation forms
      errors: [],
      fullName: null,
      email: null,
      message: null,
      // end validation forms

      // start Footer in pricing data
      descritionIconFooter: " Contact us if you have special request ",
      iconSocials: [
        {
          id: "1",
          classIcon: "fab fa-facebook-f",
        },
        {
          id: "2",
          classIcon: "fab fa-google",
        },
      ],
      // end Footer in pricing data
    };
  },

  components: {
    headerApp,
    headingSection,
    Footer,
  },
};
</script>
