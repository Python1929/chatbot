Vue.component('pii-entry-field', {
  data: function () {
    return {
fields: [],
    count: 0,
    }
  },
     methods: {
      addFormElement: function(type) {

      this.fields.push({
        'type': type,
        id: this.count++
      });

    },
    removeFormElement(id) {
        console.log('removing form element', id)        
				const index = this.fields.findIndex(f => f.id === id)
      	this.fields.splice(index,1)                
      }
      

     },
     
  template: ` <div class='pii-field'><div class="uk-margin">
            <component v-for="field in fields" v-bind:is="field.type" :id="field.id" :key="field.id" @remove="removeFormElement"></component>
             </div>
        
            <button id='button-add-pii-input' v-on:click="addFormElement('pii-input-field')" class="uk-button uk-button-default uk-width-1-1 uk-margin-small">Add Input</button>
            <hr>
            </div>`,
})

Vue.component('pii-input-field', {
  props: ['id'],
  data: function () {
    return {

    }
  },
  methods: {
  	removeFormElement(id) {
    	console.log('sending message up to remove id', id)
      this.$emit('remove', id)      
    }
  },

  template: ` <div>
            <select class="uk-select">
                <option disabled>Select Classification</option>
                <option>Name</option>
                <option>Address</option>
                <option>Email</option>
                <option>Phone</option>
                <option>Medical</option>
                <option>Financial</option>
            </select>
        
        <div>
            <input type="text" placeholder="Input"> id = {{ id }}
        </div>
        <button v-on:click="removeFormElement(id)">Remove Input</button>
        </div>`,
})

var app = new Vue({
  el: '#app',
    delimiters : ['[[', ']]'],
  data: {
    message: 'Hello Vue!',
    fields: [],
    count: 0,
  },
    methods: {
      addFormElement: function(type) {
        this.fields.push({
          'type': type,
          id: this.count++
          
        });

        },  
    }
});