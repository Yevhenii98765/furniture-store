document.addEventListener('DOMContentLoaded', function () {
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    const sameSite = 'SameSite=Lax'; // Добавляем атрибут SameSite
    document.cookie =
      name + '=' + value + ';' + expires + ';path=/;SameSite=None;Secure';
  }

  const cReject = document.getElementById('cookie-reject');
  const cAccept = document.getElementById('cookie-accept');
  const cOverlay = document.getElementById('cookie-overlay');

  cReject.addEventListener('click', function () {
    cOverlay.classList.add('d-none');
    setCookie('userAcceptedCookies', 'false', 30);
  });

  cAccept.addEventListener('click', function () {
    cOverlay.classList.add('d-none');
    setCookie('userAcceptedCookies', 'true', 30);
  });
});
