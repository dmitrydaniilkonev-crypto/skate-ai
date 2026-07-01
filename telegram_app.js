(function () {
  'use strict';

  function initializeTelegramMiniApp() {
    var telegram = window.Telegram && window.Telegram.WebApp;
    if (!telegram || !telegram.initData) {
      return;
    }

    document.body.classList.add('telegram-mini-app');

    telegram.ready();
    telegram.expand();

    try {
      telegram.setHeaderColor('#E7E7E1');
      telegram.setBackgroundColor('#E7E7E1');
      if (typeof telegram.setBottomBarColor === 'function') {
        telegram.setBottomBarColor('#E7E7E1');
      }
      if (typeof telegram.disableVerticalSwipes === 'function') {
        telegram.disableVerticalSwipes();
      }
    } catch (_) {
      // Older Telegram clients may not support every appearance method.
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTelegramMiniApp);
  } else {
    initializeTelegramMiniApp();
  }
})();
