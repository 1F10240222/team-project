var lastScrollTop = 0; // 最後のスクロール位置を保持する変数

// スクロールイベントを監視
window.addEventListener('scroll', function() {
    var backToHome = document.getElementById('back-to-home');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 現在のスクロール位置が前回のスクロール位置よりも大きい場合、画像を非表示にする
    if (scrollTop > lastScrollTop) {
        backToHome.style.display = 'none';
    } else {
        backToHome.style.display = 'block';
    }

    lastScrollTop = scrollTop; // 現在のスクロール位置を最後のスクロール位置として保存
});

