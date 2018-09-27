$(function () {
  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > $('.message-wrapper').scrollTop()) {
      // ヘッダーバーをslideDownして表示
      $("header").slideDown();
    } else {
      // ヘッダーバーをslideUpして非表示
      $("header").slideUp();
    }
  });
});
