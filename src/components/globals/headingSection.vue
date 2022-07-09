<template>
  <div class="heading-section">
    <h2>
      {{ headingName }}
    </h2>
    <p>{{ descriptionHeading }} lore</p>
  </div>
</template>

<script>
export default {
  name: "headingSection",
  props: ["headingName", "descriptionHeading"],
};
</script>
