<template>
  <div>
    <div v-bind:key="memo.id" v-for="memo in memos">
      <MemoItem v-bind:memo="memo"  v-on:del-memo="$emit('del-memo', memo.id)"/>
    </div>
  </div>
</template>

<script>
import MemoItem from './MemoItem.vue';

export default {
  name: "Memos",
  components: {
    MemoItem
  },
  props: ["memos"]
}
</script>

<style scoped>

</style>

