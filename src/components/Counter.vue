<template>
  <div style="display: inline;">
    <h2>{{ getTittle }}</h2>
    <button @click="sub">-</button>
    <h3>value: {{ this.value }}</h3>
    <button @click="add">+</button>
  <p>{{ value }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ value }} </p>
  </div>

</template>

<script>
export default {
  name: "Counter",
  props: {
    initValue: {type :Number, required : true, default : 100},
    title: String,
  },
  data() {
    return { value: this.initValue };
  },
  methods: {
    square() {
      console.log("sqaure");
      return this.value * this.value;
    },
    sub() {
      this.value--;
    },
    add() {
      this.value++;
    },
  },
  computed: {
    squareCounter() {
      return this.value * this.value;
    },
    getTittle(){
      return this.title || "counter"
    }
  },
};
</script>

<style></style>
