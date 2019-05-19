<template>
  <div class="about">
    <h1>EE SummerCamp 2019 Website</h1>
    <p>This website was made as a project for a summercamp.
    </p>
    <div class="author">
      <ul>
          <li>Author: Nikola Žitko</li>
          <li>Location: Split, Croatia</li>
          <li>Occupation: Student @ <a href="https://www.oss.unist.hr/" target="_blank">OSS</a></li>
          <li>E-Mail: <a href="mailto:nikola.zitko@gmail.com">nikola.zitko@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/nikola-zitko" target="_blank">nikola-zitko</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .author{
    position: relative;
    margin-left: 30%;
    text-align: left;
    font-size: 1.2em;
    width: 300px;
  }
  .author ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .author li{
    padding-bottom: 10px;
  }
  .author a:link, a:visited{
    text-decoration: none;
    color: blue;
  }
  .author a:hover{
    color: red;
  }
</style>
