<template>
  <div
    class="option-type"
    :class="{ active_type: active }"
    @click.prevent="$emit('check')"
  >
    <label class="option-label">
      <input
        class="option_input"
        name="delivery_id"
        type="radio"
        autocomplete="off"
        :checked="active"
      />
      <label for="option_input" class="input_label"
        ><span> Почта России - бесплатно </span>
      </label>
    </label>
    <div class="option-details">
      <div class="option-item">
        <label>
          <span>ФИО <span class="required">*</span></span>
          <input
            class="shop2-input"
            name="14818461[0]"
            type="text"
            size="30"
            maxlength="100"
            value=""
          />
        </label>
      </div>

      <div class="option-item">
        <label>
          <span>Адрес доставки <span class="required">*</span></span>
          <textarea
            class="shop2-textarea"
            name="14818461[1]"
            cols="50"
            rows="5"
          ></textarea>
        </label>
      </div>
      <div class="option-item">
        <label>
          <span>Почтовый индекс <span class="required">*</span></span>
          <input
            class="shop2-input"
            name="14818461[2]"
            type="text"
            size="30"
            maxlength="100"
            value=""
          />
        </label>
      </div>

      <div class="option-item">
        <label>
          <span>Телефон </span>
          <input
            class="shop2-input"
            name="14818461[3]"
            type="text"
            size="30"
            maxlength="100"
            value=""
          />
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default { props: ["active"] };
</script>
<style lang="scss" scoped>
.shop2-order-options .option-type {
  border-bottom: 1px solid #dedede;
}

.shop2-order-options .option-type:first-child {
  border-top: 1px solid #dedede;
}

.shop2-order-options .option-type .option-label {
  overflow: hidden;
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  line-height: 0;
  font-size: 0;
}

.shop2-order-options .option-type .option-label input[type="radio"] {
  cursor: pointer;
  margin: 0 0 1px;
  vertical-align: middle;
}

.shop2-order-options .option-type .option-label span {
  font-size: 14px;
  line-height: normal;
  padding: 8px 10px;
  padding-left: 10px;
  vertical-align: middle;
}

.shop2-order-options .option-type .label-icons {
  margin-top: 5px;
  display: none !important;
}

.shop2-order-options .option-type .label-icons img {
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dedede;
  height: 42px;
  vertical-align: middle;
  margin: 0 5px 10px;
}

.shop2-order-options .option-type.active_type .label-icons {
  display: block !important;
}
.shop2-order-options .option-type .option-details {
  overflow: hidden;
  padding: 0 20px 20px 40px;
  display: none;
}

.shop2-order-options .option-type .option-details .option-item {
  margin: 10px 0;
}

.shop2-order-options .option-type .option-details .option-item label {
  display: inline-block;
}

.shop2-order-options .option-type .option-details .option-item label > span {
  display: block;
  margin-bottom: 2px;
}

.shop2-order-options .option-type.active_type {
  background-color: #fdf5b5;
  color: #3c3c3c;
}

.shop2-order-options .option-type.active_type .option-label span.label-icon {
  border: 1px solid #ccc;
  background-color: #e6e6e6;
}

.shop2-order-options .option-type.active_type .option-details {
  display: block;
}

.shop2-order-options .option-type .payment_methods-column {
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
  padding: 0 !important;
}

.shop2-order-options .option-type .payment_methods-column label {
  display: block;
}
.shop2-order-options .option-type.active_type {
  background: #fff;
}
.shop2-order-options .option-type:first-child {
  border-top: none;
  border-radius: 0 0 1px 1px;
}
.shop2-order-options .option-type .option-label {
  overflow: hidden;
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  line-height: 0;
  font-size: 0;
}

.shop2-order-options .option-type .option-label input[type="radio"] {
  cursor: pointer;
  margin: 0 0 1px;
  vertical-align: middle;
}

.shop2-order-options .option-type .option-label span {
  font-size: 14px;
  line-height: normal;
  padding: 8px 10px;
  padding-left: 10px;
  vertical-align: middle;
}
.shop2-order-options.shop2-delivery .option-type .option-label {
  padding: 20px;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.shop2-order-options.shop2-delivery .option_input {
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
}

.shop2-order-options.shop2-delivery .option_input:checked + label:before {
  box-shadow: inset 0 0 0 8px #0c8ac9;
}

.shop2-order-options.shop2-delivery .option_input:checked + label:hover:before {
  box-shadow: inset 0 0 0 8px #09538e, 0 0 0 2px #e7e7e7;
}
.shop2-order-options .option-type .option-label input[type="radio"] {
  cursor: pointer;
  margin: 0 0 1px;
  vertical-align: middle;
}
.shop2-order-options.shop2-delivery .input_label {
  padding: 6px 0 5px 30px;
  display: block;
  position: relative;
  pointer-events: none;
}

.shop2-order-options.shop2-delivery .input_label:hover:before {
  box-shadow: inset 0 0 0 2px #0c8ac9, 0 0 0 2px #e7e7e7;
}

.shop2-order-options.shop2-delivery .input_label:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 28px;
  height: 28px;
  background: #fff;
  box-shadow: inset 0 0 0 2px #0c8ac9;
  border-radius: 50%;
  transition: box-shadow 0.2s linear;
}
.shop2-order-options .option-type .option-label span {
  font-size: 14px;
  line-height: normal;
  padding: 8px 10px;
  padding-left: 10px;
  vertical-align: middle;
}
.shop2-order-options .option-type .option-label span {
  font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.shop2-order-options .option-type .option-details {
  overflow: hidden;
  padding: 0 20px 20px 40px;
  display: none;
}
.shop2-order-options .option-type .option-details {
  overflow: visible;
}
.shop2-order-options .option-type .option-details {
  padding: 0 20px 20px 60px;
  border-radius: 1px;
}
.shop2-order-options .option-type.active_type .option-details {
  display: block;
}
.shop2-order-options .option-type .option-details .option-item {
  margin: 10px 0;
}

.shop2-order-options .option-type .option-details .option-item label {
  display: inline-block;
}

.shop2-order-options .option-type .option-details .option-item label > span {
  display: block;
  margin-bottom: 2px;
}
.shop2-order-options .option-type .option-details .option-item {
  margin: 10px 0 15px;
}

.shop2-order-options .option-type .option-details .option-item label > span {
  margin-bottom: 8px;
  font: 13px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.error,
.required {
  color: #eb3c3c !important;
}
.shop2-input {
  height: 26px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid silver;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 14px;
}
.shop2-order-options.shop2-delivery .shop2-input {
  margin: 0;
  height: auto;
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 8px 8px 10px;
}

.shop2-order-options.shop2-delivery .shop2-input::-webkit-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input::-moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:-ms-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:hover {
  border-color: #f5fafb;
  background: #fff;
}

.shop2-order-options.shop2-delivery .shop2-input:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
}
.shop2-order-options.shop2-delivery .shop2-textarea {
  margin: 0;
  height: auto;
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 8px 8px 10px;
}

.shop2-order-options.shop2-delivery .shop2-textarea::-webkit-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea::-moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:-ms-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:hover {
  border-color: #f5fafb;
  background: #fff;
}

.shop2-order-options.shop2-delivery .shop2-textarea:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
}
</style>
