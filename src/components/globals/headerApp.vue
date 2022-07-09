<template>
  <!-- ============================== start header ============================= -->

  <header>
    <section class="container">
      <div class="logo">
        <a href="#"
          ><img src="../../assets/logoKasper.png" alt="logo-kasper"
        /></a>
      </div>

      <nav id="nav" :class="{ hide: hide }">
        <router-link to="/" exact @click="hide = !hide">Home</router-link>
        <router-link to="/services" @click="hide = !hide">Services</router-link>
        <router-link to="/portfolio" @click="hide = !hide"
          >Portfolio</router-link
        >
        <router-link to="/about" @click="hide = !hide">About</router-link>
        <router-link to="/pricing" @click="hide = !hide">Pricing</router-link>
        <router-link to="/contact" @click="hide = !hide">Contact</router-link>
      </nav>

      <div class="search">
        <label for="search" class="icon">
          <i class="fas fa-search" for="search"></i>
        </label>

        <input type="search" name="search" id="search" placeholder="search" />
      </div>

      <div class="bars" @click="hide = !hide">
        <i class="fas fa-bars fa-toggle-bars"></i>
      </div>
    </section>
  </header>

  <!-- ============================== end header ============================= -->
</template>

<script>
export default {
  name: "headerApp",
  data: function () {
    return {
      hide: true,
    };
  },
};
</script>
