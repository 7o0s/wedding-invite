/* ============================================
   Свадьба Кариши и Лёши — скрипты
   ============================================ */

(function () {
  'use strict';

  /* --- 80 уникальных персонализированных текстов --- */
  var personalTexts = [
    '{name}, этот день будет наполнен любовью — и мы хотим разделить его именно с вами',
    '{name}, некоторые моменты остаются с нами навсегда. Приходите создать один из них вместе',
    '{name}, мы мечтали, чтобы в этот особенный день рядом были самые дорогие люди',
    '{name}, без вас этот праздник был бы неполным. Мы будем ждать!',
    '{name}, каждая большая история любви заслуживает свидетелей — будьте одним из них',
    '{name}, мы приглашаем вас стать частью самого счастливого дня в нашей жизни',
    '{name}, пусть этот день станет тёплым воспоминанием, которое мы разделим вместе',
    '{name}, ваше присутствие — лучший подарок, о котором мы только можем мечтать',
    '{name}, в этот день всё будет пронизано любовью — и мы хотим, чтобы вы это почувствовали',
    '{name}, есть дни, которые меняют жизнь. Будьте рядом в один из таких дней',
    '{name}, мы верим, что счастье множится, когда его разделяют с близкими',
    '{name}, этот праздник будет особенным — потому что вы будете с нами',
    '{name}, приходите разделить радость, танцы и немного волшебства',
    '{name}, мы собираем самых дорогих людей в одном месте — и вы в этом списке',
    '{name}, нам бы очень хотелось видеть вас в этот незабываемый день',
    '{name}, обещаем: будет красиво, вкусно и от всего сердца',
    '{name}, готовьтесь к вечеру, полному любви, смеха и трогательных моментов',
    '{name}, мы приглашаем вас на праздник, который запомнится навсегда',
    '{name}, вы — важная часть нашей истории, и мы хотим, чтобы вы были рядом',
    '{name}, давайте вместе отпразднуем начало нашей новой главы',
    '{name}, мы будем счастливы разделить с вами этот трогательный момент',
    '{name}, приходите — нас ждёт вечер, полный тепла и радости',
    '{name}, без вас картина этого дня была бы неполной',
    '{name}, мы готовим для вас вечер, который согреет сердце',
    '{name}, ваше присутствие сделает этот день по-настоящему волшебным',
    '{name}, мы открываем новую страницу нашей жизни и хотим, чтобы вы были рядом',
    '{name}, будем очень рады видеть вас среди самых близких людей',
    '{name}, каждая деталь этого дня создана с любовью — приходите убедиться',
    '{name}, мы приглашаем вас на вечер, где всё будет говорить о любви',
    '{name}, есть события, которые хочется запомнить навсегда — это одно из них',
    '{name}, мы хотим, чтобы ваш смех и улыбка стали частью нашего праздника',
    '{name}, приходите создать с нами самые тёплые воспоминания',
    '{name}, пусть этот летний вечер станет для нас общим сокровищем',
    '{name}, мы счастливы пригласить вас разделить этот день',
    '{name}, в кругу близких людей каждый момент становится особенным',
    '{name}, вечер обещает быть незабываемым — и вы его украсите',
    '{name}, присоединяйтесь к нашему празднику любви и радости',
    '{name}, мы ждём вас, чтобы вместе отметить начало чего-то прекрасного',
    '{name}, ваше присутствие наполнит этот день особым смыслом',
    '{name}, приходите — будет столько любви, что хватит на всех',
    '{name}, мы мечтаем увидеть вас в этот долгожданный день',
    '{name}, вы — один из тех людей, без которых этот праздник немыслим',
    '{name}, давайте вместе создадим вечер, достойный самых красивых историй',
    '{name}, будет тепло, красиво и душевно — мы обещаем',
    '{name}, мы будем ждать вас с распростёртыми объятиями',
    '{name}, приходите отпраздновать любовь — она заразительна',
    '{name}, этот день станет ещё прекраснее, если вы будете с нами',
    '{name}, мы хотим, чтобы вы стали свидетелями нашего счастья',
    '{name}, приглашаем вас на вечер, который мы будем помнить всю жизнь',
    '{name}, нет лучшего подарка, чем ваше присутствие рядом',
    '{name}, давайте создадим воспоминания, о которых будем рассказывать годами',
    '{name}, обещаем незабываемый вечер в кругу самых дорогих людей',
    '{name}, мы приглашаем вас разделить наше счастье',
    '{name}, мы будем рады обнять вас в этот волшебный день',
    '{name}, пусть этот день станет общим праздником для нас всех',
    '{name}, для нас важно, чтобы именно вы были рядом',
    '{name}, мы с нетерпением ждём, когда увидим вас на нашем празднике',
    '{name}, вас ждёт вечер элегантности, любви и самых добрых эмоций',
    '{name}, мы верим, что лучшие моменты — те, что разделены с любимыми людьми',
    '{name}, приходите — и пусть этот вечер останется в сердце навсегда',
    '{name}, мы были бы счастливы видеть вас в этот знаменательный день',
    '{name}, каждый гость для нас — на вес золота, и вы — один из них',
    '{name}, мы готовим праздник, который запомнится всем — и вам тоже',
    '{name}, мы с радостью приглашаем вас стать частью нашей истории',
    '{name}, ваша улыбка — то, что сделает этот день идеальным',
    '{name}, мы ждём вас с особым трепетом',
    '{name}, приходите за порцией счастья, тепла и хорошего настроения',
    '{name}, пусть наш праздник станет для вас таким же радостным, как для нас',
    '{name}, впереди — волшебный вечер, и мы хотим провести его с вами',
    '{name}, мы открываем двери нашего праздника — и ждём именно вас',
    '{name}, помните: вы не просто гость — вы часть нашей большой семьи',
    '{name}, нас ждёт день, полный любви — разделите его с нами',
    '{name}, ваше присутствие — это то, что превратит этот день в сказку',
    '{name}, мы хотели бы, чтобы этот вечер стал нашим общим счастливым воспоминанием',
    '{name}, приходите — мы обещаем, что этот день вы не забудете',
    '{name}, мы мечтали об этом дне — и мечтали разделить его с вами',
    '{name}, этот праздник создан с любовью для тех, кого мы любим',
    '{name}, нам будет очень тепло, если вы будете рядом',
    '{name}, мы ждём вас, чтобы вместе начать самую красивую главу',
    '{name}, будьте нашим гостем в вечер, когда сбываются мечты'
  ];

  /* Текст по умолчанию, если гость не указан */
  var defaultText = 'Мы приглашаем вас разделить этот особенный день — день, полный любви, радости и тепла';

  /* --- Утилиты --- */

  /* Простой хэш строки → число */
  function hashString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  /* Получить имя гостя из URL-параметра ?guest= */
  function getGuestName() {
    var params = new URLSearchParams(window.location.search);
    var guest = params.get('guest');
    return guest ? decodeURIComponent(guest).trim() : null;
  }

  /* Склонение числительных: день/дня/дней */
  function pluralize(n, one, few, many) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 19) return many;
    if (mod10 === 1) return one;
    if (mod10 >= 2 && mod10 <= 4) return few;
    return many;
  }

  /* --- Персонализация --- */
  function initPersonalization() {
    var guestName = getGuestName();

    var guestLabelEl = document.getElementById('guest-label');
    var guestNameEl = document.getElementById('guest-name');
    var personalTextEl = document.getElementById('personal-text');
    var hiddenGuestInput = document.getElementById('rsvp-guest-name');

    if (guestName) {
      if (guestLabelEl) guestLabelEl.textContent = 'Дорогой гость';
      if (guestNameEl) {
        guestNameEl.textContent = guestName;
        guestNameEl.style.display = '';
      }

      /* Выбрать текст детерминированно по хэшу имени */
      var index = hashString(guestName) % personalTexts.length;
      var text = personalTexts[index].replace('{name}', guestName);
      if (personalTextEl) personalTextEl.textContent = text;

      /* Заполнить скрытое поле формы */
      if (hiddenGuestInput) hiddenGuestInput.value = guestName;
    } else {
      /* Гость не указан — скрыть блок имени */
      if (guestLabelEl) guestLabelEl.style.display = 'none';
      if (guestNameEl) guestNameEl.style.display = 'none';
      if (personalTextEl) personalTextEl.textContent = defaultText;
    }
  }

  /* --- Обратный отсчёт --- */
  function initCountdown() {
    var weddingDate = new Date('2026-06-14T15:00:00+03:00');

    var daysEl = document.getElementById('countdown-days');
    var hoursEl = document.getElementById('countdown-hours');
    var minsEl = document.getElementById('countdown-mins');
    var secsEl = document.getElementById('countdown-secs');

    var daysLabelEl = document.getElementById('countdown-days-label');
    var hoursLabelEl = document.getElementById('countdown-hours-label');
    var minsLabelEl = document.getElementById('countdown-mins-label');
    var secsLabelEl = document.getElementById('countdown-secs-label');

    function update() {
      var now = new Date();
      var diff = weddingDate - now;

      if (diff <= 0) {
        if (daysEl) daysEl.textContent = '0';
        if (hoursEl) hoursEl.textContent = '0';
        if (minsEl) minsEl.textContent = '0';
        if (secsEl) secsEl.textContent = '0';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var mins = Math.floor((diff / (1000 * 60)) % 60);
      var secs = Math.floor((diff / 1000) % 60);

      if (daysEl) daysEl.textContent = days;
      if (hoursEl) hoursEl.textContent = hours;
      if (minsEl) minsEl.textContent = mins;
      if (secsEl) secsEl.textContent = secs;

      if (daysLabelEl) daysLabelEl.textContent = pluralize(days, 'день', 'дня', 'дней');
      if (hoursLabelEl) hoursLabelEl.textContent = pluralize(hours, 'час', 'часа', 'часов');
      if (minsLabelEl) minsLabelEl.textContent = pluralize(mins, 'минута', 'минуты', 'минут');
      if (secsLabelEl) secsLabelEl.textContent = pluralize(secs, 'секунда', 'секунды', 'секунд');
    }

    update();
    setInterval(update, 1000);
  }

  /* --- RSVP-форма --- */
  function initRSVP() {
    var form = document.getElementById('rsvp-form');
    var successEl = document.getElementById('rsvp-success');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.style.display = 'none';
          if (successEl) successEl.classList.add('is-visible');
        } else {
          alert('Произошла ошибка. Попробуйте ещё раз.');
        }
      }).catch(function () {
        alert('Нет соединения с сервером. Проверьте интернет и попробуйте ещё раз.');
      });
    });
  }

  /* --- Падающие лепестки --- */
  function initPetals() {
    var container = document.getElementById('petals');
    if (!container) return;

    /* Проверяем prefers-reduced-motion */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var colors = ['#CFC6E3', '#FEF2AA', '#FFD599', '#F5CDD8', '#C2CB94', '#A6C2E9'];
    var petalCount = 25;

    function createPetal() {
      var petal = document.createElement('div');
      petal.className = 'petal';

      var size = 10 + Math.random() * 14;
      var left = Math.random() * 100;
      var duration = 8 + Math.random() * 10;
      var delay = Math.random() * 6;
      var color = colors[Math.floor(Math.random() * colors.length)];

      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      petal.style.left = left + '%';
      petal.style.backgroundColor = color;
      petal.style.animationDuration = duration + 's';
      petal.style.animationDelay = delay + 's';

      container.appendChild(petal);

      /* Удалить лепесток после анимации и создать новый */
      petal.addEventListener('animationend', function () {
        petal.remove();
        createPetal();
      });
    }

    for (var i = 0; i < petalCount; i++) {
      createPetal();
    }
  }

  /* --- Появление секций при скролле (Intersection Observer) --- */
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Плавный якорный скролл --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* --- Инициализация --- */
  document.addEventListener('DOMContentLoaded', function () {
    initPersonalization();
    initCountdown();
    initRSVP();
    initPetals();
    initScrollReveal();
    initSmoothScroll();
  });
})();
