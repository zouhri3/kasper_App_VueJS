<template>
  <!-- ============================ start services ============================ -->
  <article class="services">
    <header-app />
    <section class="container">
      <heading-section
        :descriptionHeading="descriptionHeading"
        :headingName="headingName"
      />

      <article class="services-carts">
        <section
          class="cart-box"
          v-for="serviceCart in serviceCarts"
          :key="serviceCart.id"
        >
          <div class="content">
            <i :class="`${serviceCart.icon}`"></i>

            <h3>{{ serviceCart.titel }}</h3>
          </div>

          <p>{{ serviceCart.paragraph }}</p>
        </section>
      </article>
    </section>

    <section class="our-services">
      <article class="overlay">
        <div class="img-box">
          <img src="../assets/mobile.png" alt="mobile image" />
        </div>

        <div class="our-design">
          <h3>Our Design With...</h3>

          <div
            class="our-design-box"
            v-for="ourDesign in ourDesigns"
            :key="ourDesign.id"
          >
            <i :class="`${ourDesign.icon}`"></i>

            <h4>{{ ourDesign.titel }}</h4>
          </div>
        </div>
      </article>
    </section>

    <Footer
      :descritionIconFooter="descritionIconFooter"
      :iconSocials="iconSocials"
    />
  </article>
  <!-- ============================ end services ============================ -->
</template>
<script>
import headerApp from "@/components/globals/headerApp.vue";
import headingSection from "@/components/globals/headingSection.vue";
import Footer from "@/components/globals/footer.vue";

export default {
  name: "Services",

  data() {
    return {
      // start heading-section in service data
      headingName: "^_services_^",
      descriptionHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
      // end heading-section in service data

      // start service cart data
      serviceCarts: [
        {
          id: 1,
          icon: "fas fa-desktop devlopments",
          titel: "desktop",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
        },
        {
          id: 2,
          icon: "fas fa-phone",
          titel: "web mobile",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
        },
        {
          id: 2,
          icon: "fas fa-bullhorn",
          titel: "marketing",
          paragraph:
            " adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
        },
        {
          id: 2,
          icon: "fas fa-quidditch",
          titel: "ux & ui design",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
        },
      ],
      // end service cart data

      // start ourdesign data

      ourDesigns: [
        {
          id: 1,
          icon: "fas fa-mobile-alt fa-fw",
          titel: "Responsive Design",
        },
        {
          id: 2,
          icon: "fas fa-rss-square fa-fw",
          titel: "Modern And Clean Design",
        },
        {
          id: 3,
          icon: "fas fa-solar-panel fa-fw",
          titel: "Clean Code",
        },
        {
          id: 4,
          icon: "fas fa-window-restore fa-fw",
          titel: "Browser Friendly",
        },
      ],
      // end ourdesign data

      // start Footer in service data
      descritionIconFooter: " show services ! ",
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

      // end Footer in service data
    };
  },
  components: { headerApp, headingSection, Footer },
};
</script>



