<template>
  <div class="ToDo">
     <h1>Your To-Do List</h1>
     <AddTodo v-on:add-todo="addTodo" />
     <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
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
      todos: [
          {
              id: 1,
              title: "delectus aut autem",
              completed: false 
          },
          {
              id: 2,
              title: "quis ut nam facilis et officia qui",
              completed: true 
          },
          {
              id: 3,
              title: "fugiat veniam minus",
              completed: false 
          },
          {
              id: 4,
              title: "et porro tempora",
              completed: false 
          }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}

</script>
