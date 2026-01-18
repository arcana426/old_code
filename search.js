const app = new Vue({
  el: "#app",
  data: {
    message: "起動中です。",
    seen: false,
  },
  methods: {
    move() {
      this.seen = true;
      setTimeout(() => {
        this.message = "AIが情報を検索を検索中...";
      }, 800);
      setTimeout(() => {
        this.message = "AIが最適なものを選別中...";
      }, 1600);
      setTimeout(() => {
        this.message = "表示するテキストを書き出し中...";
      }, 2400);
      setTimeout(() => {
        this.message = "情報まとめ中...";
      }, 3200);
      setTimeout(() => {
        location.href = "kumegawa.html";
      }, 4000);
    },
  },
});

// トップへスクロールする関数
function scrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
}

//console log space
console.log("search.js が読み込まれました。")
console.log("search入力画面です。")
console.log("このコードはChatGPTとarcana426が共同で作成しました。")
console.log("エラーが発生している場合は管理者にお問い合わせください。")
