<template>
  <header role="banner " class="site_header">
    <div class="site_header_in_wr" :class="{ slide: slide }">
      <div class="site_header_in clear-self">
        <div class="left_bl_wr">
          <div class="left_bl_in">
            <div class="left_bl_text">
              <div class="site_name">
                <router-link :to="'/magazin/'">TeploVann</router-link>
              </div>
              <div class="site_desc">
                <router-link :to="'/magazin/'"
                  >Розничная торговля сантехникой</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="right_bl_wr">
          <div class="phones_bl_wr">
            <div class="phones_bl">
              <div>
                <a :href="`tel:${companyData.firstPhone}`">{{
                  companyData.firstPhone
                }}</a>
              </div>
              <div>
                <a :href="`tel:${companyData.lastPhone}`">{{
                  companyData.lastPhone
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["slide"],
  name: "Header",
  computed: {
    companyData: function () {
      return this.$store.state.companyData;
    },
  },
};
</script>
<style scoped lang="scss">
.site_header {
  background: #fff;
  flex: none;
  padding: 28px 0 30px;
  box-sizing: border-box;
  width: 100%;
  .site_header_in_wr {
    transition: transform 0.3s;
  }
  .site_header_in {
    max-width: 1040px;
    margin: 0 auto;
  }
  .left_bl_wr {
    float: left;
    width: 360px;
  }
  .left_bl_in {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .left_bl_logo {
      flex: 0 1 auto;
      margin: 0 20px 0 0;
      a {
        display: block;
        text-decoration: none;
        img {
          border: none;
        }
      }
    }
    .left_bl_text {
      flex: 1 1 auto;
    }
    .site_name {
      color: #212121;
      font: 34px/43px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    .site_desc {
      color: #09538e;
      font: 18px/25px "noto_sans-r", Arial, Helvetica, sans-serif;
      letter-spacing: -0.22px;
      margin: -6px 0 0 0;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  .right_bl_wr {
    float: right;
    width: 360px;
    text-align: right;
    margin: 0 11px 0 0;
    .phones_bl_wr {
      padding: 0 0 8px;
      .phones_bl {
        position: relative;
        display: inline-block;
        vertical-align: top;
        color: #212121;
        font: 20px/28px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 0 0 0 36px;
        div {
          display: inline-block;
          vertical-align: top;
          margin: 0 8px 0 0;
          a {
            color: inherit;
            text-decoration: none;
          }
        }
        .phones_bl:before {
          position: absolute;
          content: "";
          left: 0;
          top: 50%;
          margin-top: -17px;
          width: 30px;
          height: 30px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2219px%22%20height%3D%2219px%22%20%20viewBox%3D%220%200%2019%2019%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%230c8ac9%22%20d%3D%22M%201.492%201.07%20l%200.183%20-0.184%20a%203.035%203.035%200%200%201%204.292%200.005%20l%201.474%201.473%20a%203.027%203.027%200%200%201%200.43%203.755%20c%20-0.051%200.12%20-0.13%200.238%20-0.242%200.35%20c%20-0.474%200.474%20-0.597%201.386%20-0.268%201.906%20c%200.05%200.081%200.09%200.168%200.116%200.258%20c%200.012%200.02%200.033%200.052%200.064%200.097%20c%200.21%200.307%200.625%200.783%201.29%201.447%20c%200.668%200.668%201.162%201.095%201.496%201.325%20c%200.09%200.062%200.147%200.095%200.172%200.107%20a%200.72%200.72%200%200%200%20-0.205%20-0.05%20c%200.142%200.017%200.278%200.063%200.401%200.137%20c%200.552%200.331%201.445%200.218%201.915%20-0.251%20c%200.113%20-0.113%200.233%20-0.193%200.356%20-0.244%20a%203.043%203.043%200%200%201%203.747%200.427%20l%201.398%201.396%20a%203.024%203.024%200%200%201%200%204.283%20l%20-0.184%200.184%20c%20-1.48%201.479%20-4.095%201.953%20-5.965%201.053%20c%20-0.41%20-0.14%20-1.06%20-0.439%20-1.914%20-0.951%20c%20-1.476%20-0.885%20-3.089%20-2.146%20-4.79%20-3.846%20c%20-1.702%20-1.7%20-2.966%20-3.315%20-3.857%20-4.795%20C%200.88%208.087%200.578%207.429%200.438%207.019%20C%20-0.43%205.136%200.03%202.531%201.492%201.069%20Z%20M%206.02%205.236%20a%201.026%201.026%200%200%200%20-0.008%20-1.444%20L%204.538%202.319%20a%201.013%201.013%200%200%200%20-1.433%20-0.005%20l%20-0.184%200.184%20c%20-0.873%200.871%20-1.168%202.595%20-0.632%203.709%20l%200.053%200.132%20c%200.014%200.046%200.061%200.169%200.148%200.363%20c%200.155%200.345%200.367%200.75%200.643%201.21%20c%200.806%201.339%201.969%202.823%203.554%204.407%20c%201.585%201.584%203.067%202.743%204.401%203.543%20c%200.457%200.274%200.86%200.483%201.202%200.636%20c%200.192%200.086%200.314%200.131%200.358%200.145%20l%200.155%200.063%20c%201.083%200.549%202.804%200.247%203.695%20-0.643%20l%200.184%20-0.184%20a%201.006%201.006%200%200%200%200%20-1.427%20l%20-1.398%20-1.396%20a%201.02%201.02%200%200%200%20-1.433%200.005%20c%20-1.118%200.933%20-2.83%201.121%20-4.095%200.424%20c%20-0.508%20-0.197%20-1.23%20-0.756%20-2.354%20-1.88%20c%20-1.066%20-1.065%20-1.616%20-1.746%20-1.816%20-2.26%20c%20-0.72%20-1.255%20-0.513%20-2.993%200.434%20-4.109%20Z%22%20%2F%3E%3C%2Fsvg%3E")
            50% no-repeat;
        }
      }
    }
    .address_bl {
      color: #212121;
      font: 12px "noto_sans-r", Arial, Helvetica, sans-serif;
    }
  }
}
@media screen and (max-width: 1580px) {
  .site_header .site_header_in {
    max-width: 830px;
  }
}
@media screen and (min-width: 1300px) {
  .site_header .site_header_in_wr.slide {
    transform: translateX(112px);
  }
}
@media screen and (max-width: 1180px) {
  .site_header {
    max-width: 870px;
    margin: 0 auto;
    padding: 20px 20px 35px;
  }
}
@media screen and (min-width: 1024px) {
  .site_header .right_bl_wr .phones_bl_wr .phones_bl div:nth-child(2n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 1023px) {
  .site_header {
    max-width: 100%;
    padding: 23px 64px 24px;
    .site_header_in {
      max-width: 100%;
    }
    .left_bl_wr {
      padding: 12px 0 0 0;
    }
    .left_bl_in {
      .site_name {
        font-size: 30px;
        line-height: 40px;
      }
      .site_desc {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.2px;
      }
    }
    .right_bl_wr {
      margin: 0;
      width: 201px;
      .phones_bl_wr .phones_bl {
        display: inline-block;
        vertical-align: top;
        font-size: 18px;
        line-height: 24px;
        div {
          margin: 0;
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 699px) {
  .site_header {
    padding: 19px 20px 16px;
    .right_bl_wr {
      float: none;
      width: auto;
      text-align: center;
      .phones_bl_wr {
        padding: 0;
        .phones_bl {
          display: block;
          padding: 0;
          font-size: 16px;
          line-height: 26px;
          div {
            display: inline-block;
            vertical-align: top;
            margin: 0 8px 0 0;
          }
          div:last-child {
            margin-right: 0;
          }
        }
        .phones_bl:before {
          display: none;
        }
      }
      .address_bl {
        display: none;
      }
    }
    .left_bl_wr {
      width: auto;
      text-align: center;
      float: none;
      padding: 0 0 14px;
    }
    .left_bl_in {
      display: inline-block;
      vertical-align: top;
      .site_name {
        font-size: 28px;
        line-height: 38px;
      }
      .left_bl_logo {
        margin: 0 0 10px;
      }
      .site_desc {
        font-size: 15px;
        line-height: 21px;
        letter-spacing: -0.19px;
      }
    }
  }
}
.site_header .right_bl_wr .phones_bl_wr .phones_bl:before {
  position: absolute;
  content: "";
  left: 0;
  top: 50%;
  margin-top: -17px;
  width: 30px;
  height: 30px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2219px%22%20height%3D%2219px%22%20%20viewBox%3D%220%200%2019%2019%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%230c8ac9%22%20d%3D%22M%201.492%201.07%20l%200.183%20-0.184%20a%203.035%203.035%200%200%201%204.292%200.005%20l%201.474%201.473%20a%203.027%203.027%200%200%201%200.43%203.755%20c%20-0.051%200.12%20-0.13%200.238%20-0.242%200.35%20c%20-0.474%200.474%20-0.597%201.386%20-0.268%201.906%20c%200.05%200.081%200.09%200.168%200.116%200.258%20c%200.012%200.02%200.033%200.052%200.064%200.097%20c%200.21%200.307%200.625%200.783%201.29%201.447%20c%200.668%200.668%201.162%201.095%201.496%201.325%20c%200.09%200.062%200.147%200.095%200.172%200.107%20a%200.72%200.72%200%200%200%20-0.205%20-0.05%20c%200.142%200.017%200.278%200.063%200.401%200.137%20c%200.552%200.331%201.445%200.218%201.915%20-0.251%20c%200.113%20-0.113%200.233%20-0.193%200.356%20-0.244%20a%203.043%203.043%200%200%201%203.747%200.427%20l%201.398%201.396%20a%203.024%203.024%200%200%201%200%204.283%20l%20-0.184%200.184%20c%20-1.48%201.479%20-4.095%201.953%20-5.965%201.053%20c%20-0.41%20-0.14%20-1.06%20-0.439%20-1.914%20-0.951%20c%20-1.476%20-0.885%20-3.089%20-2.146%20-4.79%20-3.846%20c%20-1.702%20-1.7%20-2.966%20-3.315%20-3.857%20-4.795%20C%200.88%208.087%200.578%207.429%200.438%207.019%20C%20-0.43%205.136%200.03%202.531%201.492%201.069%20Z%20M%206.02%205.236%20a%201.026%201.026%200%200%200%20-0.008%20-1.444%20L%204.538%202.319%20a%201.013%201.013%200%200%200%20-1.433%20-0.005%20l%20-0.184%200.184%20c%20-0.873%200.871%20-1.168%202.595%20-0.632%203.709%20l%200.053%200.132%20c%200.014%200.046%200.061%200.169%200.148%200.363%20c%200.155%200.345%200.367%200.75%200.643%201.21%20c%200.806%201.339%201.969%202.823%203.554%204.407%20c%201.585%201.584%203.067%202.743%204.401%203.543%20c%200.457%200.274%200.86%200.483%201.202%200.636%20c%200.192%200.086%200.314%200.131%200.358%200.145%20l%200.155%200.063%20c%201.083%200.549%202.804%200.247%203.695%20-0.643%20l%200.184%20-0.184%20a%201.006%201.006%200%200%200%200%20-1.427%20l%20-1.398%20-1.396%20a%201.02%201.02%200%200%200%20-1.433%200.005%20c%20-1.118%200.933%20-2.83%201.121%20-4.095%200.424%20c%20-0.508%20-0.197%20-1.23%20-0.756%20-2.354%20-1.88%20c%20-1.066%20-1.065%20-1.616%20-1.746%20-1.816%20-2.26%20c%20-0.72%20-1.255%20-0.513%20-2.993%200.434%20-4.109%20Z%22%20%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

@media screen and (max-width: 699px) {
  .site_header .right_bl_wr .phones_bl_wr .phones_bl:before {
    display: none;
  }
}
</style>
