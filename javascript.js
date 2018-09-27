$(function () {
  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > $('.message-wrapper').offset().top) {
      // ヘッダーバーをslideDownして表示
      $("header").slideDown();
    } else {
      // ヘッダーバーをslideUpして非表示
      $("header").slideUp();
    }
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  $('input[name="setting"]:radio').change(function () {
    var radioval = $(this).val();
    if (radioval == "myself") {
      $('.manual').show();
      $('.member-id').attr('required', 'required');
      $('.member-password').attr('required', 'required');
    } else if (radioval == "auto") {
      $('.manual').hide();
      $('.member-id').removeAttr('required');
      $('.member-password').removeAttr('required');
    }
  });
});
