<template>
  <div class="row">
    <div class="row-title">{{ data.title }}</div>
    <div class="row_body">
      <select
        :name="data.name"
        :id="data.id"
        :data-placeholder="data.data - placeholder"
      >
        <option v-for="item of values" :key="item.value" :value="item.value">
          {{ item.name }}
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
