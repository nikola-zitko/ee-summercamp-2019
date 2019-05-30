<template>
   
  <div class="navBar">
    <link href="https://fonts.googleapis.com/css?family=Play&display=swap" rel="stylesheet">
    <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/Memo">Memos</a></li>
        <li><a href="#/ToDo">To-Do List</a></li>
        <li><a href="#/about">About</a></li>
        <li id="author">Made by: Nikola Žitko</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navBar',
}
</script>

<style scoped>
.navBar, .navBar ul li{
    font-family: 'Play', sans-serif;
    position: sticky;
    margin: 0;
    padding: 0;
}
.navBar ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
.navBar li{
  float: left;
}

.navBar li a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.navBar li a:hover {
  background-color: #111;
}
#author{
    float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
