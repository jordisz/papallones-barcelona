<template>
  <div>
    <label :for="idName">{{ label }}</label>
    <select :id="idName" v-model="selected" @change="emitSelectedItem">
      <option v-for="(item, index) in list" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelector',
  props: {
    list: {
      type: Array,
      required: true
    },
    idName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: this.list[0]
    }
  },
  methods: {
    emitSelectedItem () {
      this.$emit('item-selected', this.selected)
    }
  }
}
</script>
