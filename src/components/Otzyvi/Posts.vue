<template>
  <div class="g-comment" :class="{ 'g-comment--even': post.id % 2 == 0 }">
    <div class="g-comment__panel">
      <div class="g-comment__author">{{ post.autor }}</div>
      <time class="g-comment__date">{{ post.date }}</time>
    </div>

    <div class="g-comment__text">{{ post.text }}</div>
  </div>
</template>
<script>
export default {
  props: ["post"],
};
</script>
<style lang="scss" scoped>
.g-comment:first-child {
  margin: 0;
}
.g-comment {
  position: relative;
  padding: 1em 1.2em;
  margin-top: 2em;
  border: 1px solid #dcdcdc;
  color: #484848;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 0.26667em;
  background-color: #f8f8f8;
}
.g-comment {
  position: relative;
  padding: 1em 1.2em;
  margin-top: 2em;
  border: 1px solid #dcdcdc;
  color: #484848;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 0.26667em;
  background-color: #f8f8f8;
}
.g-comment--even {
  background-color: #e6e6e6;
}
.g-comment__panel {
  font-size: 0;
}
.g-comment__author {
  display: inline-block;
  margin-right: 0.76923em;
  color: #484848;
  font-size: 14px;
  font-weight: bold;
}
.g-comment__date {
  display: inline-block;
  margin-right: 0.76923em;
  color: #828282;
  font-size: 13px;
  text-transform: lowercase;
}
.g-comment__text {
  margin-top: 8px;
}
</style>
