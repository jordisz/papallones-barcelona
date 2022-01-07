<template>
  <div class="button-group">
    <label :for="id"><slot></slot></label>
    <AppRadioButton v-for="(option, index) in options" :id="id" :key="index" :checked="checked" :option="option" />
  </div>
</template>

<script>
import AppRadioButton from '~/components/AppRadioButton.vue'
export default {
  name: 'AppRadioButtonGroup',
  components: { AppRadioButton },
  props: {
    options: {
      required: true,
      type: Array
    },
    checked: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.button-group {
    margin: 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: .4rem;
}
</style>
