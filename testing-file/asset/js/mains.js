const createNewOption = () => { 
  return {
    text: '',
    isAnswer: false
  }
}

const createNewQuestion = () => {
return {
text: '',
options: [createNewOption()]
}
}
  
  var vm = new Vue({
    el: '#app',
    template: `<div class="quiz-builder container">
<div v-for="(question, index) in questions">
  <div class="input-group">
    <input type="text" class="form-control" v-model="question.text" placeholder="Enter a question">
    <span class="input-group-btn">
      <button class="btn btn-danger" type="button" @click="removeQuestion">X</button>
    </span>
    <span class="input-group-btn">
      <button class="btn btn-secondary" type="button" @click="addOption(question)">Add an option</button>
    </span>
  </div>
  </br>
  <div class="input-group" v-for="(option, index) in question.options" style="margin-bottom: 20px">
    <span class="input-group-addon">
      <input type="checkbox" v-model="option.isAnswer">
    </span>
    <input type="text" class="form-control" v-model="option.text" placeholder="Enter an option">
    <span class="input-group-btn">
      <button class="btn btn-danger" type="button" @click="removeOption(question, option)">X</button>
    </span>
  </div></br>
</div>
<button class="btn btn-default" @click="addQuestion" :disabled="questions.length >= 5 ? true : false">
  Add another question
</button>
<button class="btn btn-primary" style="background-color: #ffcc00; border: #ffcc00">
  Create quiz
</button>
</div>`,
   data () {
    return {
      questions: [createNewQuestion()],
      showQuestions: false,
    }
  },
  methods: {
    addQuestion () {
      this.questions.push(createNewQuestion())
    },
    removeQuestion (index) {
      this.questions.shift(index)
    },
    addOption (question) {
      question.options.push(createNewOption())
    },
    removeOption (question, option) {
      var index = question.options.indexOf(option);
      if (index > -1) {
        question.options.splice(index, 1);
      }
    }
  }
})