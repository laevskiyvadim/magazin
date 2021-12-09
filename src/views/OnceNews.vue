<template>
  <div>
    <p>once news</p>
    {{ news.title }}
    <br />
    {{ news.date }}
    <br />
    {{ news.text }}
  </div>
</template>
<script>
export default {
  name: "OnceNews",
  computed: {
    id: function () {
      return parseInt(this.$route.params.id);
    },
    news: function (id) {
      const current = this.$store.getters.getNews(id);
      if (current === undefined) return "Такой новости пока нет";
      return current;
    },
  },
};
</script>
