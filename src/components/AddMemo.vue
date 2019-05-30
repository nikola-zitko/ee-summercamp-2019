<template>
  <div>
    <form @submit.prevent="addMemo">
      <input type="text" v-model="title" name="title" placeholder="Add Memo Title...">
      <input type="text" v-model="text" name="text" placeholder="Add Memo Text...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';
export default {
  name: "AddMemo",
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    addMemo() {
      const newMemo = {
        id: uuid.v4(),
        title: this.title,
        text: this.text
      }
      // Send up to parent
      this.$emit('add-memo', newMemo);
      // Submit reset
      this.title = '';
      this.text = '';
    }
  }
}
</script>

<style scoped>

  form {
    display: flex;
    width: 55%;
    margin: auto;
  }

  input[type="text"] {
    font-family: 'Play', sans-serif;
    flex: 10;
    padding: 10px;
  }

  input[type="submit"] {
    font-family: 'Play', sans-serif;
    flex: 2;
  }
</style>


