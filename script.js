/* ============================================================
   СПИСОК МАГАЗИНОВ — редактируйте только этот массив
   Поля:
     address — адрес (крупно)
     meta    — часы работы / уточнение (мелко)
     photo   — имя файла фото рядом с index.html
     badge   — бейдж (необязательно): "24 часа", "Новый" и т.п.
     map     — ссылка на точку в Яндекс.Картах (необязательно)
   ============================================================ */
var STORES = [
  { address:"Московское ш., 205",     meta:"ТЦ «ТЦ Эль Рио», 1 этаж · Круглосуточно", photo:"store-1.jpg",  badge:"24 часа", map:"https://yandex.ru/maps/org/sputnik/215720106527/?ll=50.236243%2C53.258071&z=16.2" },
  { address:"ул. Стара-Загора, 139А",    meta:"Круглосуточно",    photo:"store-2.jpg", badge:"24 часа", map:"https://yandex.ru/maps/org/sputnik/71364217357/?display-text=%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA&ll=50.234393%2C53.228490&mode=search&sctx=ZAAAAAgBEAAaKAoSCezZc5maJElAEaPIWkOpm0pAEhIJ%2F3Vu2ozT6T8RfsSvWMNF0j8iBgABAgMEBSgPOABAmZ0GSAFqAnJ1nQHNzMw9oAEAqAEAvQHFxAiawgGCAeb%2F65qfAdqSkrD5A%2F3lpfWtAr%2Bc5Ku9Bf%2Fkyui7A7GHtu%2B5AZL21PHPA9aq0J6zA9qRq7rXBb3z%2BcrkBbjJ3JhG1aiNvuED4K2q9PUEuJeL%2F60C9Kv1mrUB0%2Bys3o0Hl9Ls1r8BjZSO7YkCw%2B6sl2KzhLDsgwPj1oPYzQWfw93%2FtgSCAhooKGNoYWluX2lkOigzMzYyMTkxMTg5MykpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCCzMzNjIxOTExODkzsAIB&sll=50.234393%2C53.228490&sspn=0.034567%2C0.019252&text=%7B%22text%22%3A%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2233621911893%22%5D%7D%5D%7D&utm_source=share&z=14" },
  { address:"ул. Примерная, 25",    meta:"ТРК «Галерея», 2 этаж · 10:00–22:00",      photo:"store-3.jpg",  map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+25" },
  { address:"ул. Примерная, 40",    meta:"Жилой дом, вход со двора · 10:00–21:00",   photo:"store-4.jpg",  badge:"Новый", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+40" },
  { address:"ул. Примерная, 55",    meta:"ТЦ «Восток», 1 этаж · 10:00–22:00",        photo:"store-5.jpg",  map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+55" },
  { address:"ул. Примерная, 62",    meta:"Отдельный вход · 10:00–22:00",             photo:"store-6.jpg",  map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+62" },
  { address:"ул. Примерная, 78",    meta:"ТЦ «Юбилейный», 1 этаж · 10:00–22:00",     photo:"store-7.jpg",  map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+78" },
  { address:"пр. Примерный, 105",   meta:"У метро, отдельный вход · 09:00–23:00",    photo:"store-8.jpg",  map:"https://yandex.ru/maps/?text=Москва+проспект+Примерный+105" },
  { address:"ул. Примерная, 120",   meta:"ТРЦ «Планета», 3 этаж · 10:00–22:00",      photo:"store-9.jpg",  map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+120" },
  { address:"ул. Примерная, 133",   meta:"Жилой дом, вход с улицы · 10:00–21:00",    photo:"store-10.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+133" },
  { address:"ул. Примерная, 150",   meta:"ТЦ «Северный», 2 этаж · 10:00–22:00",      photo:"store-11.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+150" },
  { address:"пр. Примерный, 168",   meta:"У метро, отдельный вход · 09:00–23:00",    photo:"store-12.jpg", map:"https://yandex.ru/maps/?text=Москва+проспект+Примерный+168" },
  { address:"ул. Примерная, 180",   meta:"БЦ «Высота», 1 этаж · 09:00–21:00",        photo:"store-13.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+180" },
  { address:"ул. Примерная, 195",   meta:"ТЦ «Западный», 1 этаж · 10:00–22:00",      photo:"store-14.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+195" },
  { address:"ул. Примерная, 210",   meta:"Жилой дом, вход с улицы · 10:00–21:00",    photo:"store-15.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+210" },
  { address:"пр. Примерный, 222",   meta:"ТРЦ «Меридиан», 2 этаж · 10:00–22:00",     photo:"store-16.jpg", map:"https://yandex.ru/maps/?text=Москва+проспект+Примерный+222" },
  { address:"ул. Примерная, 235",   meta:"Отдельный вход · 10:00–22:00",             photo:"store-17.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+235" },
  { address:"ул. Примерная, 250",   meta:"У метро, отдельный вход · 09:00–23:00",    photo:"store-18.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+250" },
  { address:"ул. Примерная, 268",   meta:"ТЦ «Южный», 1 этаж · 10:00–22:00",         photo:"store-19.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+268" },
  { address:"пр. Примерный, 280",   meta:"Жилой дом, вход со двора · 10:00–21:00",   photo:"store-20.jpg", map:"https://yandex.ru/maps/?text=Москва+проспект+Примерный+280" },
  { address:"ул. Примерная, 295",   meta:"БЦ «Горизонт», 1 этаж · 09:00–21:00",      photo:"store-21.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+295" },
  { address:"ул. Примерная, 310",   meta:"ТЦ «Радуга», 2 этаж · 10:00–22:00",        photo:"store-22.jpg", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+310" },
  { address:"ул. Примерная, 325",   meta:"Отдельный вход · 10:00–22:00",             photo:"store-23.jpg", badge:"24 часа", map:"https://yandex.ru/maps/?text=Москва+улица+Примерная+325" }
];

/* ============================================================
   Дальше можно не трогать — рендер и логика слайдера
   ============================================================ */
(function () {
  // Год в подвале
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var track   = document.getElementById('sliderTrack');
  var dotsBox = document.getElementById('sliderDots');
  var counter = document.getElementById('sliderCounter');
  var slider  = document.getElementById('storeSlider');
  if (!track || !slider) return;

  var prevBtn = slider.querySelector('.slider-arrow.prev');
  var nextBtn = slider.querySelector('.slider-arrow.next');

  // 1) Собираем слайды из массива
  STORES.forEach(function (s, i) {
    var slide = document.createElement('div');
    slide.className = 'slide';

    var badgeHTML = s.badge ? '<span class="badge">' + s.badge + '</span>' : '';
    var loadingAttr = i === 0 ? 'eager' : 'lazy';

    // размытая копия фото на фоне
    var blurHTML =
      '<img class="slide-photo-blur" src="' + s.photo + '" alt="" aria-hidden="true" ' +
      'loading="' + loadingAttr + '" onerror="this.remove()">';

    // основное фото по центру
    var mainHTML =
      '<img class="slide-photo-main" src="' + s.photo + '" alt="' + s.address + '" ' +
      'loading="' + loadingAttr + '" onerror="this.remove()">';

    slide.innerHTML =
      '<div class="slide-photo">' +
        blurHTML +
        '<span class="ph">Фото магазина</span>' +
        badgeHTML +
        mainHTML +
      '</div>' +
      '<div class="slide-caption">' +
        '<div class="slide-address">' + s.address + '</div>' +
        '<div class="slide-meta">' + s.meta + '</div>' +
      '</div>';

    track.appendChild(slide);
  });

  var slides = Array.prototype.slice.call(track.querySelectorAll('.slide'));
  if (!slides.length) return;

  // Если магазин всего один — слайдер не нужен
  if (slides.length < 2) {
    if (dotsBox) dotsBox.remove();
    if (counter) counter.remove();
    if (prevBtn) prevBtn.remove();
    if (nextBtn) nextBtn.remove();
    return;
  }

  // 2) Точки-индикаторы
  var dots = slides.map(function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'slider-dot';
    b.setAttribute('aria-label', 'Магазин ' + (i + 1));
    b.addEventListener('click', function () { goTo(i); });
    dotsBox.appendChild(b);
    return b;
  });

  function width() { return track.clientWidth || 1; }
  function index() { return Math.round(track.scrollLeft / width()); }

  function goTo(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: i * width(), behavior: 'smooth' });
  }

  function update() {
    var i = index();
    dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
    if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
    prevBtn.classList.toggle('hidden', i === 0);
    nextBtn.classList.toggle('hidden', i === slides.length - 1);
  }

  var ticking = false;
  track.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });

  prevBtn.addEventListener('click', function () { goTo(index() - 1); });
  nextBtn.addEventListener('click', function () { goTo(index() + 1); });

  window.addEventListener('resize', function () {
    track.scrollTo({ left: index() * width(), behavior: 'auto' });
  });

  // Клик по фото — открыть точку на карте (если задана)
  track.addEventListener('click', function (e) {
    var slide = e.target.closest('.slide');
    if (!slide) return;
    var i = slides.indexOf(slide);
    var s = STORES[i];
    if (s && s.map) window.open(s.map, '_blank', 'noopener');
  });

  update();
})();