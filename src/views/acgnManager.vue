<template>
  <div id="Main">
    <div>
      <div class="titleText">最近游玩</div>
      <div class="divLine"></div>
    </div>
    <div class="cards">
      <acgnCardVue :data="dgg_data"/>
      <acgnCardVue :data="mq_data" style="margin-top: 40px;" />
    </div>
  </div>
</template>

<script>
import acgnCardVue from "@/components/acgnCard.vue";

export default {
  components: {
    acgnCardVue,
  },
  data() {
    return {
      dgg_data: {
        name: "ふゆから、くるる。",
        intro: `不死少女们的秘事，漏光中的针影。<br>——我，要当名侦探！...`,
        coverimg:'https://files.iloli.ink/gal-dgg.jpg',
        playvideo:'https://files.iloli.ink/dgg-op.mp4',
        info: [
          { label: "品牌", text: "シルキーズプラス" },
          { label: "发售日期", text: "2021-09-24" },
          { label: "平均游玩时间", text: "中等 21h from 9 votes" },
          { label: "发布者", text: "Ahateulz个人汉化" },
          { label: "原画", text: "あめとゆき なのはなこひな" },
          { label: "声优", text: "月野きいろ 猫村ゆき 上原あおい... " },
          { label: "剧本", text: "渡辺僚一" },
        ],
      },
      mq_data: {
        name: "冥契のルペルカリア",
        intro: `英年早逝的天才伶人。<br>近乎传奇的她，在壮烈的戏剧终章获知了一个真相。`,
        coverimg:'https://files.iloli.ink/gal-mq.jpg',
        playvideo:'https://files.iloli.ink/mq.mp4',
        info: [
          { label: "品牌", text: "シルキーズプラス" },
          { label: "发售日期", text: "2021-09-24" },
          { label: "平均游玩时间", text: "中等 28h24m from 8 votes" },
          { label: "发布者", text: "两个人汉化" },
          { label: "原画", text: "Hagino Kouta Kiriha" },
          { label: "声优", text: "Umeki Chiharu Kanau Hanazawa Sakura" },
          { label: "剧本", text: "Lucle" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#Main {
  margin: 80px 20px;

  .titleText {
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    font-family: "Inter";

    display: flex;
    align-items: center;
    letter-spacing: -0.04em;
    color: black;
  }

  .divLine {
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #000000;
  }


}
</style>