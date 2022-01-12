<template>
  <div class="option-button">
    <input
      :id="option"
      type="radio"
      name="radio-input"
      :value="option"
      :checked="checked === option"
      @change="$parent.$emit('input', option)"
    />
    <label :for="option">
      {{ option }}
    </label>
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

<style scoped>
.option-button input {
  position: absolute !important;
  clip: rect(0,0,0,0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.option-button label {
  background-color: #ececec;
  color: rgba(0,0,0,.8);
  font-size: .9rem;
  line-height: 1.5rem;
  text-align: center;
  padding: 1rem .9rem;
  margin-right: -1px;
  border: 1px solid rgba(0,0,0,.2);
  box-shadow: inset 1px 3px rgba(0, 0, 0, .3), 1px rgba(255, 255, 255, .1);
  transition: all .1s ease-in-out;
}

.option-button label:hover {
  cursor: pointer;
}

.option-button input:checked + label {
  background-color: rgba(20, 133, 20, 0.45);
  color: #222;
  box-shadow: none;
}

</style>
