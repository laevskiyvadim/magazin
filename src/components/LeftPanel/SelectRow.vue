<template>
  <div class="row select">
    <div class="row-title">{{ data.title }}</div>
    <div class="row_body">
      <select :name="data.name" :data-placeholder="data.data - placeholder">
        <option v-for="item in values" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "values"],
};
</script>
