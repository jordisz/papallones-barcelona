<template>
  <div>
    <label :for="option">
      {{ option }}
    </label>
    <input
      :id="option"
      type="radio"
      name="radio-input"
      :value="option"
      :checked="checked === option"
      @change="$parent.$emit('input', option)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppRadioButton',
  props: {
    option: {
      required: true,
      type: String
    },
    checked: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
