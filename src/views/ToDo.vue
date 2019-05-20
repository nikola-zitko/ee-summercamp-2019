<template>
  <div class="ToDo">
     <h1>Your To-Do List</h1>
     <AddTodo v-on:add-todo="addTodo" />
     <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:check-todo="checkToDo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue';
import AddTodo from '@/components/AddTodo.vue';
import axios from 'axios';

export default {
  name: 'ToDo',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`http://localhost:3000/api/todos/${id}`)
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const {title, completed} = newTodo;

      axios.post('http://localhost:3000/api/todos', {
        title, completed
      })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
    },
    checkToDo(id){
      axios.put(`http://localhost:3000/api/todos/${id}`)
      .then()
      .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('http://localhost:3000/api/todos')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
}
</script>
