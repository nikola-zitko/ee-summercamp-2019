<template>
  <div class="memo-item">
    <p class = "title">
      {{memo.title}}
      
      <button @click="$emit('del-memo', memo.id)" class="del">x</button>
    </p>
    <p class = "memo">
      {{memo.text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "memoitem",
  props: ["memo"],
  methods: {
  }
}
</script>

<style scoped>
  .memo-item {
    background: lightgoldenrodyellow;
    padding-left: 30px;
    padding-right: 30px;
    border-width: 1px;
    border-style: solid;
    border-collapse: collapse;
    text-align: left;
    width: 25%;
    margin: 10px auto auto auto;
    
  }
  .title{
    font-weight: bold;
  }
  .memo{
    margin-left: 30px;
    background: lightgoldenrodyellow;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
  }
</style>

