<template>
  <section
    class="slider"
    v-for="(info, index) in infos"
    :key="info.id"
    v-show="show == index"
    :style="{
      backgroundImage: 'url(' + require(`@/assets/landing/${info.image}`) + ')',
      backgroundSize: 'cover',
    }"
  >
    <article class="overlay">
      <section class="containt">
        <div class="container">
          <div class="box_slide">
            <h1>
              {{ info.msg1 }}
              <br />
              {{ info.msg2 }}
            </h1>
            <p>
              {{ info.pra }}
            </p>
          </div>
        </div>
        <section
          class="change-slider"
          @click="show == 0 ? (show = infos.length - 1) : show--"
        >
          <i class="fas fa fa-angle-left"></i>
        </section>
        <section
          class="change-slider right"
          ref="next"
          @click="show == infos.length - 1 ? (show = 0) : show++"
        >
          <i class="fas fa fa-angle-right"></i>
        </section>
      </section>

      <ul class="list-items">
        <li
          v-for="(item, index) in infos"
          :key="index"
          :class="{ active: show == index }"
          @click="show = index"
        ></li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      show: 0,
      infos: [
        {
          id: 0,
          image: "landing-1.jpg",
          msg1: "hello world!",
          msg2: "we are kasper,we make art.",
          pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis repudiandae aut error id quis eos sunt quos, dicta, recusandae aut error id quis eos sunt quos, dicta, recusandae ",
        },
        {
          image: "landing-2.jpg",
          msg1: "hi kasper!",
          msg2: "we are kasper,we make world",
          pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis repudiandae aut error id quis eos sunt quos, dicta, recusandae aut error id quis eos sunt quos, dicta, recusandae ",
        },
        {
          image: "landing-3.jpg",
          msg1: "we are kasper",
          msg2: "we make art ,we are kasper.",
          pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis repudiandae aut error id quis eos sunt quos, dicta, recusandae aut error id quis eos sunt quos, dicta, recusandae ",
        },
      ],
    };
  },
  methods: {
    next: function () {
      setInterval(() => {
        this.$refs.next.click();
      }, 10000);
    },
  },
  created() {
    this.next();
  },
};
</script>