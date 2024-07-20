<template>
  <component :is="component" v-bind="props"></component>
</template>

<script>
import button from '../../components/button.vue';
export default {
  components: { button },
  props: ['props'],
  computed: {
    component() {
      return button;
    }
  }
}
</script>
  