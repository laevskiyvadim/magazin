<template>
  <div class="row_body active">
    <input
      :type="text"
      :name="s[name]"
      :size="20"
      :id="shop2 - name"
      value=""
    />
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.fixed_search_wrapper .search-form .row .row_body {
  padding: 10px 20px 20px;
  display: none;
}
.fixed_search_wrapper .search-form .row .row_body.active {
  display: block;
}
</style>
