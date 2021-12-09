<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Контакты</h1>

    <div class="localcontacts">
      <div class="localcontacts__top">
        <div class="localcontacts__top-title">Телефон</div>
        <a :href="'tel:' + companyData.firstPhone">{{
          companyData.firstPhone
        }}</a>
        <div class="localcontacts__top-title"></div>
        <a :href="'tel:' + companyData.lastPhone">{{
          companyData.lastPhone
        }}</a>
        <div class="localcontacts__top-discription">
          <span>с {{ companyData.startTime }}-{{ companyData.endTime }}</span>
        </div>
      </div>
      <div class="localcontacts__adress">
        <div class="localcontacts__adress-text localnomargin">
          <div class="localcontacts__adress-inner">
            <b>Адрес</b>
            <p>
              {{ companyData.address }}
            </p>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "Contacts",
  components: { SitePath },
  computed: {
    companyData: function () {
      return this.$store.state.companyData;
    },
  },
};
</script>
<style scoped lang="scss">
b,
strong {
  font-weight: normal;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
  box-sizing: border-box;
}

.localaboutus,
.localcontacts,
.localcontacts2,
.localtabs {
  margin-top: 30px;
}
.localcontacts__top {
  margin-bottom: 30px;
  color: inherit;
  font-size: 18px;
  font-weight: 700;

  a {
    text-decoration: none;
    color: inherit;
  }
}
.localcontacts__top-discription,
.localcontacts__top-title {
  color: inherit;
  font-size: 13px;
  font-weight: 400;
  margin-top: 12px;
}
.localcontacts__top-title {
  padding-bottom: 3px;
}

.localcontacts__top-discription {
  padding-left: 22px;
  background: url("/assets/72db85b5c85b163d49e4c3da6a7ab675.png") no-repeat 0 0;
  span {
    display: inline-block;
    vertical-align: middle;
    padding-right: 5px;
  }
}

.localnomargin {
  margin-left: 0;
  margin-right: 0;
}

.clear {
  visibility: hidden;
  clear: both;
  height: 0;
  font-size: 1px;
  line-height: 0;
}
.localcontacts__adress-inner {
  margin-bottom: 20px;
  b {
    display: block;
    padding-bottom: 5px;
  }
  p {
    margin: 0;
  }
}
.localcontacts__adress-social {
  font-size: 0;
}

@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
}
</style>
