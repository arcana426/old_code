// JavaScript (login.js)
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    const loginSection = document.getElementById('loginSection');
    const logoutSection = document.getElementById('logoutSection');
    const loginButton = document.getElementById('submitLoginButton');
    const loadingAnimation = document.getElementById('loadingAnimation');
    const emailWarning = document.getElementById('emailWarning');
    const logoutButton = document.getElementById('logoutButton');

    // ログイン状態の確認（例: ローカルストレージを使用）
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

    // 初期表示の設定
    if (userLoggedIn) {
        loginSection.style.display = 'none';
        logoutSection.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        logoutSection.style.display = 'none';
    }

    // メールアドレスの検証
    emailInput?.addEventListener('input', function () {
        if (isValidEmail(emailInput.value)) {
            emailWarning.style.display = 'none';
            loginButton.disabled = false;
        } else {
            emailWarning.style.display = 'block';
            loginButton.disabled = true;
        }
    });

    // ログインボタンの処理
    loginButton?.addEventListener('click', function () {
        loginAnimation();
        // 仮定のログイン処理
        setTimeout(function () {
            loadingAnimation.style.display = 'none';
            loginSection.style.display = 'none';
            logoutSection.style.display = 'block';
            localStorage.setItem('userLoggedIn', 'true'); // ログイン状態を保存
            // ログイン成功時の遷移
            window.location.href = '/Home/Home.html';
        }, 3000); // 3秒間の仮想的なログイン処理
    });

    // ログアウトボタンの処理
    logoutButton?.addEventListener('click', function () {
        loginSection.style.display = 'block';
        logoutSection.style.display = 'none';
        localStorage.setItem('userLoggedIn', 'false'); // ログアウト状態を保存
    });

    // メールアドレスの妥当性検証関数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ローディングアニメーションの表示
    function loginAnimation() {
        loadingAnimation.style.display = 'block';
    }
});
