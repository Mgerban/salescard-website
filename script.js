(() => {
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.primary-navigation');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const deletionForm = document.querySelector('#deletion-request-form');

  if (deletionForm instanceof HTMLFormElement) {
    deletionForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!deletionForm.reportValidity()) {
        return;
      }

      const data = new FormData(deletionForm);
      const recipient = deletionForm.dataset.recipient;
      const accountEmail = String(data.get('accountEmail') || '').trim();
      const loginMethod = String(data.get('loginMethod') || '').trim();
      const requestType = String(data.get('requestType') || '').trim();
      const details = String(data.get('details') || '').trim();

      const subject = 'SalesCard account and data request';
      const body = [
        'SalesCard privacy request',
        '',
        `Request: ${requestType}`,
        `Account email: ${accountEmail}`,
        `Login method: ${loginMethod}`,
        '',
        'Additional details:',
        details || 'None provided.',
        '',
        'I understand that SalesCard may verify account ownership before processing this request.',
      ].join('\n');

      const status = document.querySelector('#deletion-form-status');

      if (status) {
        status.textContent =
          'Your email application should open with the request prepared. Send the email to submit it.';
      }

      window.location.href =
        `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
