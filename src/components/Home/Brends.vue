<template>
  <div class="brands_bl_wrapper">
    <div class="brands_bl_wrap">
      <div class="brands_bl_title">Бренды</div>
      <div class="brands_sl_wr">
        <div class="brands_bl_sl">
          <div class="brands_bl_item">
            <a href="http://teplovann.ru/magazin/folder/terma "
              ><img src="../../assets/terma-logo.webp" alt="TERMA "
            /></a>
          </div>
          <div class="brands_bl_item">
            <a href="http://teplovann.ru/magazin/folder/smesiteli "
              ><img
                src="../../assets/dc7912bbde62bde07ddfbc54508e0f09.webp"
                alt="WASSER KRAFT "
            /></a>
          </div>
          <div class="brands_bl_item">
            <a
              href="http://teplovann.ru/magazin/folder/smesitel-dlya-umyvalnika"
              ><img src="../../assets/536345.webp " alt="SCHEIN "
            /></a>
          </div>
          <div class="brands_bl_item">
            <a href="http://teplovann.ru/magazin/folder/dushevye-paneli-1"
              ><img
                src="../../assets/7114ec049f3beb843081a1789a359dc7.webp"
                alt="SSWW "
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.brands_bl_wrapper {
  background: #f5fafb;
  max-width: 1334px;
  padding: 15px 0;
  width: 100%;
  margin: 0 auto;
  transition: transform 0.3s;

  .brands_bl_wrap {
    max-width: 1040px;
    margin: 0 auto;
  }

  .brands_bl_title {
    color: #212121;
    font: 26px/34px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
    padding: 0 0 16px;
  }

  .brands_sl_wr {
    background: #fff;
    padding: 27px 26px;
  }

  .brands_bl_sl {
    font-size: 0;
    text-align: center;

    .brands_bl_item {
      display: inline-block;
      vertical-align: top;
      width: 140px;
      margin: 0 29px 0 0;
    }

    &.owl-carousel .brands_bl_item {
      margin: 0 auto;

      a {
        display: block;
        text-decoration: none;

        img {
          border: none;
        }
      }
    }
  }
  .owl-prev {
    position: absolute;
    left: -46px;
    top: 50%;
    margin-top: -20px;
    height: 40px;
    width: 40px;
    box-shadow: inset 0 0 0 2px #0c8ac9;
    background: #fff;
    opacity: 0.8;
    z-index: 1;

    &:hover {
      background: #0c8ac9;

      &:before {
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0.287%2C6.292%20C-0.103%2C6.681%20-0.106%2C7.314%200.281%2C7.707%20C0.345%2C7.772%200.417%2C7.828%200.496%2C7.873%20L6.310%2C13.724%20C6.696%2C14.117%207.325%2C14.119%207.715%2C13.730%20C7.717%2C13.728%207.719%2C13.726%207.721%2C13.724%20C8.106%2C13.334%208.106%2C12.704%207.721%2C12.314%20L2.424%2C6.972%20L7.651%2C1.711%20C8.041%2C1.322%208.043%2C0.689%207.657%2C0.296%20C7.655%2C0.295%207.653%2C0.293%207.651%2C0.291%20C7.264%2C-0.097%206.638%2C-0.097%206.250%2C0.291%20L0.287%2C6.292%20Z%22%2F%3E%3C%2Fsvg%3E")
          50% no-repeat;
      }
    }
    &:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M0.287%2C6.292%20C-0.103%2C6.681%20-0.106%2C7.314%200.281%2C7.707%20C0.345%2C7.772%200.417%2C7.828%200.496%2C7.873%20L6.310%2C13.724%20C6.696%2C14.117%207.325%2C14.119%207.715%2C13.730%20C7.717%2C13.728%207.719%2C13.726%207.721%2C13.724%20C8.106%2C13.334%208.106%2C12.704%207.721%2C12.314%20L2.424%2C6.972%20L7.651%2C1.711%20C8.041%2C1.322%208.043%2C0.689%207.657%2C0.296%20C7.655%2C0.295%207.653%2C0.293%207.651%2C0.291%20C7.264%2C-0.097%206.638%2C-0.097%206.250%2C0.291%20L0.287%2C6.292%20Z%22%2F%3E%3C%2Fsvg%3E")
        50% no-repeat;
    }
  }
  .owl-next {
    position: absolute;
    right: -46px;
    top: 50%;
    margin-top: -20px;
    height: 40px;
    width: 40px;
    box-shadow: inset 0 0 0 2px #0c8ac9;
    background: #fff;
    opacity: 0.8;
    z-index: 1;
    &:hover {
      background: #0c8ac9;
      &:before {
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
          50% no-repeat;
      }
    }
    &:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
        50% no-repeat;
    }
  }
}
@media screen and (min-width: 1581px) {
  .brands_bl_wrapper .brands_bl_sl .brands_bl_item:nth-child(6n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 1580px) {
  .brands_bl_wrapper .brands_bl_wrap {
    max-width: 830px;
  }
}
@media screen and (min-width: 1300px) {
  .brands_bl_wrapper.slide {
    transform: translateX(112px);
  }
}
@media screen and (max-width: 1023px) {
  .brands_bl_wrapper {
    max-width: 100%;
    padding: 15px 40px;
    box-sizing: border-box;
    .brands_bl_wrap {
      max-width: 100%;
    }
    .owl-prev {
      left: -65px;
    }
    .owl-next {
      right: -65px;
    }
  }
}

@media screen and (max-width: 699px) {
  .brands_bl_wrapper {
    padding: 15px 0;
    .brands_bl_title {
      padding: 0 10px 12px;
    }
    .brands_sl_wr {
      padding: 10px 20px;
    }
    .owl-prev {
      left: -20px;
      top: auto;
      bottom: -10px;
      margin: 0;
    }
    .owl-next {
      right: -20px;
      top: auto;
      bottom: -10px;
      margin: 0;
    }
  }
}
</style>
