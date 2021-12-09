<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Отзывы</h1>

    <div class="g-page g-page-board">
      <div class="g-board">
        <div class="g-comment-list g-board__comment-list">
          <Posts v-for="post of posts" :key="post.id" :post="post" />
        </div>
        <div class="g-pagination">
          <span class="g-pagination__item g-pagination__item--active">1</span>

          <a href="/otzyvy/p/1" class="g-pagination__item">2</a>

          <a
            href="/otzyvy/p/1"
            class="g-pagination__item g-pagination__item--next"
            >Следующая</a
          >
        </div>
        <div class="g-header g-header--h2">Оставить отзыв</div>
        <SendComment />
      </div>
    </div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
import SendComment from "@/components/Otzyvi/SendComment.vue";
import Posts from "@/components/Otzyvi/Posts.vue";
export default {
  name: "Otzyvi",
  computed: {
    posts: function () {
      return this.$store.state.posts;
    },
  },
  components: { SitePath, SendComment, Posts },
};
</script>
<style lang="scss" scoped>
.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
}
.g-page-board a {
  font-weight: normal;
}
.g-form-control-text,
.g-form-control-textarea {
  max-width: 100%;
}
.g-form-calendar__icon {
  pointer-events: none;
}
@media (max-width: 960px) {
  .g-form-calendar__icon {
    display: none;
  }
}
.g-form-field__hint--popup {
  position: relative;
  top: auto;
  left: 0;
  margin: 10px 0 0;
  max-width: 100%;
  white-space: normal;
}
.g-form-field__hint--popup:before {
  top: -6px;
  left: 10px;
  transform: rotate(45deg);
}
.g-board__comment-list {
  margin-top: 2.66667em;
  margin-bottom: 3.66667em;
}
.g-header--h2 {
  font-size: 1.46667em;
  margin: 0.90909em 0;
}
</style>
