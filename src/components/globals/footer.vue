<template>
  <!-- ============================ start footer ============================ -->
  <article class="footer">
    <section class="overlay">
      <article class="container">
        <img src="../../assets/logoKasper.png" alt="logo kasper" />
        <p class="desc-icon">{{ descritionIconFooter }}</p>
        <div class="icon-social">
          <i
            :class="`${iconSocial.classIcon}`"
            v-for="iconSocial in iconSocials"
            :key="iconSocial.id"
          ></i>
        </div>
        <p class="copyright">
          <i class="fas fa-copyright"></i> 2021 - <span>kasper</span> all right
          reserved
        </p>
      </article>
    </section>
  </article>
  <!-- ============================ end footer ============================ -->
</template>
<script>
export default {
  name: "Footer",
  props: ["descritionIconFooter", "iconSocials"],
};
</script>
