document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const loginSection = document.getElementById("loginSection");
    const logoutSection = document.getElementById("logoutSection");
    const loginButton = document.getElementById("submitLoginButton");
    const loadingAnimation = document.getElementById("loadingAnimation");

    emailInput.addEventListener("input", function () {
        if (isValidEmail(emailInput.value)) {
            document.getElementById("emailWarning").style.display = "none";
            document.getElementById("submitLoginButton").disabled = false;
        } else {
            document.getElementById("emailWarning").style.display = "block";
            document.getElementById("submitLoginButton").disabled = true;
        }
    });

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            loginAnimation();
            // 仮定のログイン処理
            setTimeout(function () {
                if (loadingAnimation) loadingAnimation.style.display = "none";
                if (loginSection) loginSection.style.display = "none";
                if (logoutSection) logoutSection.style.display = "block";
                // ログイン成功時の遷移
                window.location.href = "logged-in.html";
            }, 2000); // 3秒間の仮想的なログイン処理
        });
    }
});
