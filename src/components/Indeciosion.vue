<template>
  <div>
    <h1>Indecision</h1>
    <img :src="img" alt="bg" />
    <div class="bg-dark"></div>
    <div class="container">
      <input type="text" placeholder="Question" v-model="question" />
      <div v-show="isValidQuestion">
        <p>{{ question }}</p>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indecision",

  data() {
    return {
      question: "",
      answer: null,
      img : "https://via.placeholder.com/250",
      isValidQuestion : false
    };
  },
  methods: {
    async getAnswer() {
      try {
        
        this.anwser = "Loading..."
       const {answer, image} = await fetch("https://yesno.wtf/api").then((res)=> res.json())
       this.answer = answer
       this.img = image
       this.isValidQuestion = true
      } catch (error) {
        console.log(error)
        this.answer = "cannot get response"        
      }
    },
  },
  watch: {
    question(value) {

    this.isValidQuestion = false
    console.log({value})
    if (!value.includes("?")) return;
      this.getAnswer()
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>