// メールアイテム1をクリックしたときの処理
document.addEventListener('DOMContentLoaded', function () {
    const mailItem1 = document.querySelector('#mailItem1');
    const contentArea = document.querySelector('.mail-content');

    mailItem1.addEventListener('click', function () {
        // メールの内容を表示する処理
        const subject = mailItem1.querySelector('strong').textContent;
        const mailContent = "Google チームから<br>Yoidea様へ<br>アカウント登録が完了しました。<br><a href='https://myaccount.google.com/' target='_blank'>https://myaccount.google.com/</a><br>ぜひご確認ください。";
        contentArea.innerHTML = `<strong>${subject}</strong>: ${mailContent}`;
    });
});

// メールアイテム2をクリックしたときの処理
document.addEventListener('DOMContentLoaded', function () {
    const mailItem2 = document.querySelector('#mailItem2');
    const contentArea = document.querySelector('.mail-content');

    mailItem2.addEventListener('click', function () {
        // メールの内容を表示する処理
        const subject = mailItem2.querySelector('strong').textContent;
        const mailContent = "Microsoft Git hubチームから</strong><br>Yoidea様へ<br>アカウント登録が完了しました。<br><a href='https://github.com/yoidea-github' target='_blank'>https://github.com/yoidea-github</a><br>ぜひご確認ください。";
        contentArea.innerHTML = `<strong>${subject}</strong>: ${mailContent}`;
    });
});

// 新しいメールを作成するボタンを押したときの処理
document.addEventListener('DOMContentLoaded', function () {
    const newMailForm = document.querySelector('#newMailForm');
    const contentArea = document.querySelector('.mail-content');

    newMailForm.addEventListener('submit', function (event) {
        event.preventDefault(); // フォームのデフォルトの送信を防止

        // メールの内容を取得
        const newMailContent = newMailForm.querySelector('input[type="text"]').value;

        // 新しいメールの内容を表示する処理
        const subject = "新しいメール";
        contentArea.innerHTML = `<strong>${subject}</strong>: ${newMailContent}`;
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
