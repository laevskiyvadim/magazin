<template>
  <div
    class="site_content_wrapper"
    v-if="$route.fullPath === '/'"
    :class="{ slide: slide }"
  >
    <router-view />
    <ContactForm :slider="slide" />
  </div>
  <div class="site_content_wrapper slide" v-else>
    <div class="site_container" style="z-index: 2" :class="{ slide: slide }">
      <router-view />
    </div>
    <ContactForm v-if="!pathNotWithContactForm()" />
  </div>
</template>
<script>
import ContactForm from "@/components/Home/ContactForm.vue";
export default {
  props: ["slide"],
  components: { ContactForm },
  methods: {
    pathNotWithContactForm: function () {
      return (
        this.$route.fullPath == "/cart" ||
        this.$route.fullPath == "/order" ||
        this.$route.fullPath == "/orderDop" ||
        this.$route.fullPath == "/confirm"
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.site_container {
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1040px;
  margin: 0 auto;
  transition: transform 0.3s;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 20px;
}

@media screen and (max-width: 1580px) {
  .site_container {
    max-width: 830px;
  }
}

@media screen and (max-width: 1023px) {
  .site_container {
    max-width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 699px) {
  .site_container {
    padding: 0;
  }
}

@media screen and (min-width: 1300px) {
  .site_container.slide {
    transform: translateX(112px);
  }
}
</style>
