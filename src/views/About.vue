<template>
  <!-- ============================ start about ============================ -->

  <article class="about">
    <!-- start header-app about component-->
    <header-app />
    <!-- start heading-section about component-->
    <heading-section
      :descriptionHeading="descriptionHeading"
      :headingName="headingName"
    />
    <!-- end heading about component-->

    <!-- start image about-->
    <section class="container container-box-img">
      <div class="box-img">
        <img src="../assets/about.png" alt="about  image" />
      </div>
    </section>
    <!-- end image about-->

    <!-- start statistics-->
    <section class="statistics">
      <article class="overlay">
        <div class="container">
          <div
            class="statis-box"
            v-for="statistic in statistics"
            :key="statistic.id"
          >
            <i :class="`${statistic.icon}`"></i>
            <p>{{ statistic.view }}</p>
            <h3>{{ statistic.titel }}</h3>
          </div>
        </div>
      </article>
    </section>
    <!-- end statistics-->

    <!-- start Testimonials-skills-->
    <section class="testimonials-skills">
      <article class="container">
        <section class="testimonials">
          <h3>testimonials</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidun
          </p>
          <article class="testimonials-box">
            <div
              class="content"
              v-for="(testimonial, index) in testimonials"
              :key="index"
              v-show="index == slide || index == slide + 1"
            >
              <div class="img-box">
                <img
                  :src="require(`@/assets/testimonials/${testimonial.srcImg}`)"
                  :alt="`${testimonial.nameJobs} image`"
                />
              </div>
              <div class="content-box">
                <p>
                  {{ testimonial.desc }}
                  <span> {{ testimonial.nameJobs }} </span>
                </p>
              </div>
            </div>
            <ul class="list-items">
              <li
                v-for="(numberSlider, index) in numberSliders"
                :key="index"
                @click="slide = 2 * index"
                :class="{ active: index == slide / 2 }"
              ></li>
            </ul>
          </article>
        </section>

        <section class="skills">
          <h3>our skills</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidun
          </p>
          <div class="progres">
            <h4>html4 / html5</h4>
            <div class="progres-box">
              <span style="width: 95%" data-progres="95%"></span>
            </div>
          </div>
          <div class="progres">
            <h4>css / scss</h4>
            <div class="progres-box">
              <span style="width: 90%" data-progres="90%"></span>
            </div>
          </div>
          <div class="progres">
            <h4>javaScript / jquery / vue</h4>
            <div class="progres-box">
              <span style="width: 70%" data-progres="70%"></span>
            </div>
          </div>
          <div class="progres">
            <h4>bootsrap</h4>
            <div class="progres-box">
              <span style="width: 80%" data-progres="80%"></span>
            </div>
          </div>
        </section>
      </article>
    </section>
    <!-- end Testimonials-skills -->

    <!-- start  client-say -->
    <section class="client-say">
      <article class="container">
        <blockquote>
          <sup>
            <i class="fas fa-quote-left"></i>
          </sup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          fugit, rerum cum in officia blanditiis est libero beatae facilis nisi,
          blanditiis est libero beatae
          <sub>
            <i class="fas fa-quote-right"></i>
          </sub>
        </blockquote>
        <p>john doe</p>
      </article>
    </section>
    <!-- start  client-say -->

    <!-- start footer about component-->
    <Footer
      :descritionIconFooter="descritionIconFooter"
      :iconSocials="iconSocials"
    />
    <!-- start footer about component-->
  </article>
  <!-- ============================ end about ============================ -->
</template>

<script>
import headerApp from "@/components/globals/headerApp.vue";
import headingSection from "@/components/globals/headingSection.vue";
import Footer from "@/components/globals/footer.vue";

export default {
  name: "About",
  data() {
    return {
      // start heading-section in service data
      headingName: "^_about-us_^",
      descriptionHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
      // end heading-section in service data

      //  start statistics data
      statistics: [
        {
          id: 1,
          icon: "fas fa-mug-hot",
          titel: "Coffee Drinks",
          view: 1706,
        },
        {
          id: 2,
          icon: "fas fa-folder",
          titel: "Completed Projects",
          view: 467,
        },
        {
          id: 3,
          icon: "fas fa-envelope",
          titel: "Mail Sent",
          view: 1967,
        },
        {
          id: 4,
          icon: "fas fa-trophy",
          titel: "Awards Received",
          view: 1967,
        },
      ],
      //  end statistics data

      //  start testimonials data
      slide: 0,
      testimonials: [
        {
          srcImg: "skills-01.jpg",
          desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
          nameJobs: "John Doe, CEO",
        },
        {
          srcImg: "skills-01.jpg",
          desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
          nameJobs: "John Doe, CEO",
        },
        {
          srcImg: "skills-02.jpg",
          desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
          nameJobs: "John Doe, CEO",
        },
        {
          srcImg: "skills-02.jpg",
          desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
          nameJobs: "John Doe, CEO",
        },
        {
          srcImg: "skills-01.jpg",
          desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.",
          nameJobs: "John Doe, CEO",
        },
      ],
      //  end testimonials data

      // start Footer in about data
      descritionIconFooter: " show whay my company ! ",
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
      // end Footer in about data
    };
  },
  components: { headerApp, headingSection, Footer },
  computed: {
    numberSliders: function () {
      return this.testimonials.length % 2 == 0
        ? this.testimonials.length / 2
        : 1 + Math.trunc(this.testimonials.length / 2);
    },
  },
};
</script>

<style lang="css" scoped>
.footer {
  background-attachment: fixed;
  background-image: url("../assets/bcMobile.jpg");
  background-size: cover;
}
</style>
