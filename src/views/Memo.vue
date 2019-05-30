<template>
  <div class="Memo">
     <h1>Your Memos</h1>
     <AddMemo v-on:add-memo="addMemo" />
     <Memos v-bind:memos="memos" v-on:del-memo="deleteMemo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Memos from '@/components/Memos.vue';
import AddMemo from '@/components/AddMemo.vue';
import axios from 'axios';

export default {
  name: 'Memo',
  components: {
    Memos,
    AddMemo
  },
  data() {
    return {
      memos: []
    }
  },
  methods: {
    deleteMemo(id) {
      axios.delete(`http://localhost:3000/api/memos/${id}`)
        .then(res => this.memos = this.memos.filter(memo => memo.id !== id))
        .catch(err => console.log(err));
    },
    addMemo(newMemo) {
      const {title, text} = newMemo;

      axios.post('http://localhost:3000/api/memos', {
        title, text
      })
        .then(res => this.memos = [...this.memos, res.data])
        .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('http://localhost:3000/api/memos')
      .then(res => this.memos = res.data)
      .catch(err => console.log(err));
  }
}
</script>
