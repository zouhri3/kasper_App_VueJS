<template>
  <article class="pricing">
    <!-- start header-app about component-->
    <header-app />
    <!-- end header-app about component-->
    <!-- start heading-section pricing component-->
    <heading-section
      :descriptionHeading="descriptionHeading"
      :headingName="headingName"
    />
    <!-- end heading pricing component-->

    <!-- start pricing-section -->
    <section class="pricing-section container">
      <article
        class="pricing-box"
        v-for="pricing in pricings"
        :id="pricing.id"
        :titel="pricing.titel"
        :type="pricing.type"
        :prix="pricing.prix"
        :quantite="pricing.quantite"
        :key="pricing.id"
      >
        <div class="pricing-head">
          <h3>{{ pricing.titel }}</h3>
          <p>
            <sup>{{ pricing.type }}</sup>
            {{ pricing.prix }}
            <span style="margin: 0 10px 0 -20px">.99 </span>
            <span> /{{ pricing.quantite }} </span>
          </p>
        </div>

        <ul class="option-pricing">
          <li
            v-for="option in pricing.options"
            :id="option.id"
            :opt="option.opt"
            :key="option.id"
          >
            {{ option.opt }}
          </li>
        </ul>
        <button>Buy Now</button>
      </article>
    </section>
    <!-- end pricing-section-->

    <!-- start subscribe-->
    <section class="subscribe container">
      <form action=":mail" method="post">
        <label for="email-subscribe">
          <i class="far fa-envelope"> </i>
        </label>
        <input type="email" name="mail" id="email-subscribe" />
        <input type="submit" value="subscribe" />
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        sapiente beatae possimus dolorum expedita quas reprehenderit
      </p>
    </section>
    <!-- end subscribe-->

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
  name: "Pricing",
  data() {
    return {
      // start heading-section in service data
      headingName: "^_pricing_^",
      descriptionHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
      // end heading-section in service data

      //  start pricing-section data
      pricings: [
        {
          id: 0,
          titel: "Basic",
          type: "$",
          prix: 29,
          quantite: "mo",
          options: [
            {
              id: 0,
              opt: "Feature No 1",
            },
            {
              id: 1,
              opt: "Extra Feature",
            },
            {
              id: 2,
              opt: "Extra Feature No 2",
            },
            {
              id: 3,
              opt: "Feature",
            },
          ],
        },
        {
          id: 0,
          titel: "Basic",
          type: "$",
          prix: 29,
          quantite: "mo",
          options: [
            {
              id: 0,
              opt: "Feature No 1",
            },
            {
              id: 1,
              opt: "Extra Feature",
            },
            {
              id: 2,
              opt: "Extra Feature No 2",
            },
            {
              id: 3,
              opt: "Feature",
            },
          ],
        },
        {
          id: 0,
          titel: "Basic",
          type: "$",
          prix: 29,
          quantite: "mo",
          options: [
            {
              id: 0,
              opt: "Feature No 1",
            },
            {
              id: 1,
              opt: "Extra Feature",
            },
            {
              id: 2,
              opt: "Extra Feature No 2",
            },
            {
              id: 3,
              opt: "Feature",
            },
          ],
        },
        {
          id: 0,
          titel: "Basic",
          type: "$",
          prix: 29,
          quantite: "mo",
          options: [
            {
              id: 0,
              opt: "Feature No 1",
            },
            {
              id: 1,
              opt: "Extra Feature",
            },
            {
              id: 2,
              opt: "Extra Feature No 2",
            },
            {
              id: 3,
              opt: "Feature",
            },
          ],
        },
      ],
      //  end pricing-section data

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
  components: { headerApp, headingSection, Footer },
};
</script>
