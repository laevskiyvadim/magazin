<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Новости</h1>

    <div class="g-page g-page-article g-page-article--main">
      <div class="g-top-panel g-top-panel--relative"></div>

      <div class="g-article-list">
        <article
          class="g-article g-article--simple-view"
          v-for="item of news"
          :key="item.date"
        >
          <time class="g-article__date">{{ item.date }}</time>
          <router-link
            class="g-article__name"
            :to="'/magazin/news/' + item.id"
            >{{ item.title }}</router-link
          >
          <div class="g-article__body g-clear-self">
            <div class="g-article__text">
              {{ item.text }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "News",
  data: () => ({}),
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  components: { SitePath },
};
</script>
<style scoped lang="scss">
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

.g-page-article {
  font-size: 15px;
  margin-top: 1.06667em;
}
.g-top-panel--relative {
  position: relative;
}
.g-top-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.g-article-list {
  position: relative;
  margin: 1.06667em 0 3.06667em;
}
.g-article--simple-view {
  margin: 0.6667em 0;
  padding: 1.2em 1.26667em 0.33333em;
}
.g-article {
  border: 0.06667em solid #c5c5c5;
  border-radius: 0.26667em;
  font-size: 15px;
  background-color: #fff;
}
.g-article--simple-view .g-article__date {
  margin-bottom: 0.30769em;
}
.g-article__date {
  display: block;
  color: #7b7b7b;
  font-size: 0.86667em;
  line-height: 1;
}
.g-article--simple-view .g-article__name {
  font-size: 1.33333em;
  line-height: 1.2;
}
.g-article__name {
  display: block;
  text-decoration: none;
}
.g-article__body {
  margin: 1.2em 0 0.93333em;
}
.g-article__text {
  color: #484848;
}
.g-clear-self::after {
  display: block;
  clear: both;
  height: 0;
  content: "";
}
b,
strong {
  font-weight: normal;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}
.g-pagination {
  font-size: 15px;
  letter-spacing: -0.4em;
  margin: 3.33333em 0 0;
}
.g-pagination__item--active {
  color: #fff !important;
  border-color: #15c !important;
  background-color: #15c !important;
}
.g-pagination__item {
  box-sizing: border-box;
  padding: 0.3571em 0.6428em;
  text-decoration: none !important;
  color: #484848;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  font-size: 0.9333em;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: normal;
  background: #fff;
}
.g-pagination__dots,
.g-pagination__item {
  display: inline-block;
  margin: 10px 0.1333em;
  vertical-align: bottom;
}
.g-pagination__item--prev {
  margin-right: 1.4286em;
  padding: 0.3571em 0 0.3571em 0.6428em;
}
.g-pagination__item {
  box-sizing: border-box;
  padding: 0.3571em 0.6428em;
  text-decoration: none !important;
  color: #484848;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  font-size: 0.9333em;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: normal;
  background: #fff;
}
.g-pagination__dots,
.g-pagination__item {
  display: inline-block;
  margin: 10px 0.1333em;
  vertical-align: bottom;
}
.g-pagination__item--next:after,
.g-pagination__item--prev:after {
  display: inline-block;
  width: 0.9286em;
  height: 0.7857em;
  margin-bottom: 2px;
  content: "";
  vertical-align: middle;
  background-size: cover !important;
}
.g-pagination__item--prev:after {
  margin: 0 0.6923em 0.1538em 0;
  background: url('data:image/svg + xml;charset=utf-8,%3CsvgbaseProfile="full"xmlns="http://www.w3.org/2000/svg"width="13"height="11"viewBox="0 0 13 11"preserveAspectRatio="none"shape-rendering="geometricPrecision"%3E%3Cpathfill="%23484848"d="M5.9.7L5.2 0 0 5.5 5.2 11l.7-.7-4-4.3H13V5H1.9l4-4.3z"/%3E%3C/svg%3E')
    0 0 no-repeat;
}
.g-pagination__item {
  box-sizing: border-box;
  padding: 0.3571em 0.6428em;
  text-decoration: none !important;
  color: #484848;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  font-size: 0.9333em;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: normal;
  background: #fff;
}

.g-pagination__dots,
.g-pagination__item {
  display: inline-block;
  margin: 10px 0.1333em;
  vertical-align: bottom;
}
.g-pagination__item--prev {
  margin-right: 1.4286em;
  padding: 0.3571em 0 0.3571em 0.6428em;
}
.g-pagination__item {
  box-sizing: border-box;
  padding: 0.3571em 0.6428em;
  text-decoration: none !important;
  color: #484848;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  font-size: 0.9333em;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: normal;
  background: #fff;
}
.g-pagination__item--next {
  margin-left: 1.4286em;
}
.g-pagination__item {
  box-sizing: border-box;
  padding: 0.3571em 0.6428em;
  text-decoration: none !important;
  color: #484848;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  font-size: 0.9333em;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: normal;
  background: #fff;
}
.g-pagination__item--next:after {
  margin: 0 0 0.1538em 0.6923em;
  background: url('data:image/svg + xml;charset=utf-8,%3CsvgbaseProfile="full"xmlns="http://www.w3.org/2000/svg"width="13"height="11"viewBox="0 0 13 11"preserveAspectRatio="none"shape-rendering="geometricPrecision"%3E%3Cpathfill="%23484848"d="M7.1.7l.7-.7L13 5.5 7.8 11l-.7-.7 4-4.3H0V5h11.1L7.1.7z"/%3E%3C/svg%3E')
    0 0 no-repeat;
}
</style>
