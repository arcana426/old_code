// JavaScript (login.js)
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.button');

    // ログインボタンがクリックされたときの処理
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            // ログイン処理（仮定）
            alert('ログインしました！'); // 本来はサーバーとの通信や認証処理が必要
            window.location.href = 'Home.html'; // ホームページに移動
        });
    }
});

// JavaScript (home.js)
document.addEventListener('DOMContentLoaded', function () {
    const userInfo = document.getElementById('userInfo');

    // ユーザー情報表示エリアに仮定のユーザー情報を表示
    if (userInfo) {
        userInfo.textContent = 'ユーザー情報:user@example.com, ユーザー名：ユーザー名';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
