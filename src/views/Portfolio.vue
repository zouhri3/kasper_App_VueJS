<template>
  <article class="portfolio">
    <!-- ---------------------- haeder components ---------------------- -->
    <header-app />
    <!-- ---------------------- heading section components ---------------------- -->
    <heading-section
      :descriptionHeading="descriptionHeading"
      :headingName="headingName"
    />
    <!-- ---------------------- start section portfolio ---------------------- -->
    <section class="section-portfolio">
      <ul class="shuffle container">
        <li
          class="item"
          :class="{ active: option == 'all' }"
          @click="option = 'all'"
        >
          all
        </li>
        <li
          class="item"
          :class="{ active: option == 'app' }"
          @click="option = 'app'"
        >
          app
        </li>
        <li
          class="item"
          :class="{ active: option == 'photography' }"
          @click="option = 'photography'"
        >
          photography
        </li>
        <li
          class="item"
          :class="{ active: option == 'web' }"
          @click="option = 'web'"
        >
          web
        </li>
        <li
          class="item"
          :class="{ active: option == 'print' }"
          @click="option = 'print'"
        >
          print
        </li>
      </ul>
      <article class="section-portfolio-content">
        <transition-group name="section_portfolio" mode="out-in">
          <div
            class="box"
            v-for="(box, index) in section_portfolio_content"
            :key="index"
            v-show="shuffle(box.type)"
          >
            <img
              :src="require(`@/assets/portfolio/${box.srcImg}.jpg`)"
              alt=""
            />
            <div class="caption">
              <h3>{{ box.title }}</h3>
              <p>
                {{ box.type }}
              </p>
            </div>
          </div>
        </transition-group>
      </article>
    </section>

    <!-- ---------------------- end section portfolio ---------------------- -->
    <!-- ---------------------- start section vidoes ---------------------- -->
    <section class="vidoes">
      <div class="container">
        <div class="box_vidoes">
          <video src="@/assets/vidoes/vi.mp4" loop autoplay muted></video>
          <div class="centent">
            <h2>super awesome video here</h2>
            <p>its all you need</p>
            <button>see more</button>
          </div>
        </div>
      </div>
    </section>
    <!-- ---------------------- end section vidoes ---------------------- -->

    <!-- ---------------------- footer components ---------------------- -->
    <Footer
      :descritionIconFooter="descritionIconFooter"
      :iconSocials="iconSocials"
    />
  </article>
</template>

<script>
import headerApp from "@/components/globals/headerApp.vue";
import headingSection from "@/components/globals/headingSection.vue";
import Footer from "@/components/globals/footer.vue";

export default {
  name: "Portfolio",
  data() {
    return {
      // start heading-section in Portfolio data
      headingName: "^_porfolio_^",
      descriptionHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde atque deleniti beatae quisquam. Magnam aut vel harum? Tenetur ",
      // end heading-section in Portfolio data
      // start section-portfolio-content in Portfolio data
      option: "all",
      section_portfolio_content: [
        {
          srcImg: "port (1)",
          title: "awesome image",
          type: "photography",
        },
        {
          srcImg: "port (2)",
          title: "awesome image",
          type: "app",
        },
        {
          srcImg: "port (3)",
          title: "awesome image",
          type: "photography",
        },
        {
          srcImg: "port (4)",
          title: "awesome image",
          type: "app",
        },
        {
          srcImg: "port (5)",
          title: "awesome image",
          type: "web",
        },
        {
          srcImg: "port (6)",
          title: "awesome image",
          type: "photography",
        },
        {
          srcImg: "port (7)",
          title: "awesome image",
          type: "print",
        },
        {
          srcImg: "port (8)",
          title: "awesome image",
          type: "web",
        },
      ],
      // end section-portfolio-content in Portfolio data
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
    };
  },
  components: {
    headingSection,
    headerApp,
    Footer,
  },
  methods: {
    shuffle(item) {
      return this.option == "all" ? true : item == this.option;
    },
  },
};
</script>
<style lang="scss" scoped>
.section_portfolio-enter-active {
  animation: shuffle 0.2s 0.1s;
}
.section_portfolio-leave-to {
  opacity: 0;
}
.section_portfolio-leave-active {
  transition: 0.1s;
}

.section_portfolio-move {
  transition: 0.2s;
}
@keyframes shuffle {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    position: absolute !important;
  }
}
</style>