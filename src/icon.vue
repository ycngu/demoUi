<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style lang="scss">
.g-icon {
  width: 1.3em;
  height: 1.3em;
}
</style>

