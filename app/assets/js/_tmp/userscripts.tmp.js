"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

document.addEventListener("DOMContentLoaded", function () {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    cssVars({});

    if ('NodeList' in window && !NodeList.prototype.forEach) {
      // console.info('polyfill for IE11');
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    !function (e, t) {
      "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : t();
    }(0, function () {
      var o = "details",
          i = "summary";
      (function () {
        var e = document.createElement(o);
        if (!("open" in e)) return !1;
        e.innerHTML = "<" + i + ">a</" + i + ">b", document.body.appendChild(e);
        var t = e.offsetHeight;
        e.open = !0;
        var n = t != e.offsetHeight;
        return document.body.removeChild(e), n;
      })() || (document.documentElement.className += " no-details", window.addEventListener("click", function (e) {
        if ("summary" === e.target.nodeName.toLowerCase()) {
          var t = e.target.parentNode;
          if (!t) return;
          t.getAttribute("open") ? (t.open = !1, t.removeAttribute("open")) : (t.open = !0, t.setAttribute("open", "open"));
        }
      }), function (e, t) {
        if (document.getElementById(e)) return;
        var n = document.createElement("style");
        n.id = e, n.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(n);
      }("details-polyfill-style", "html.no-details " + o + ":not([open]) > :not(" + i + ") { display: none; }\nhtml.no-details " + o + " > " + i + ':before {  }\nhtml.no-details ' + o + "[open] > " + i + ':before { }'));
    });
    svg4everybody({});

    (function () {
      // проверяем поддержку
      if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
          var node = this;

          while (node) {
            if (node.matches(css)) return node;else node = node.parentElement;
          }

          return null;
        };
      }
    })();

    (function () {
      // проверяем поддержку
      if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
      }
    })();
  }

  if (/edge\/(\d+(\.\d+)?)/i.test(navigator.userAgent)) {
    !function (e, t) {
      "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : t();
    }(0, function () {
      var o = "details",
          i = "summary";
      (function () {
        var e = document.createElement(o);
        if (!("open" in e)) return !1;
        e.innerHTML = "<" + i + ">a</" + i + ">b", document.body.appendChild(e);
        var t = e.offsetHeight;
        e.open = !0;
        var n = t != e.offsetHeight;
        return document.body.removeChild(e), n;
      })() || (document.documentElement.className += " no-details", window.addEventListener("click", function (e) {
        if ("summary" === e.target.nodeName.toLowerCase()) {
          var t = e.target.parentNode;
          if (!t) return;
          t.getAttribute("open") ? (t.open = !1, t.removeAttribute("open")) : (t.open = !0, t.setAttribute("open", "open"));
        }
      }), function (e, t) {
        if (document.getElementById(e)) return;
        var n = document.createElement("style");
        n.id = e, n.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(n);
      }("details-polyfill-style", "html.no-details " + o + ":not([open]) > :not(" + i + ") { display: none; }\nhtml.no-details " + o + " > " + i + ':before {  }\nhtml.no-details ' + o + "[open] > " + i + ':before { }'));
    });
  }

  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    cssVars({});
    svg4everybody({});
  }

  var $ = jQuery;
  /**Slick start */

  var slickArrowWhite = '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41"><path d="M15.3 20.5c0 .3.1.6.3.8l6.5 7.8a1.3 1.3 0 1 0 2-1.7l-5.8-6.9 5.6-7a1.3 1.3 0 0 0-.2-1.7 1.3 1.3 0 0 0-2 .1l-6.1 7.8c-.2.2-.3.5-.3.8Z" fill="#fff"/><circle r="20" transform="matrix(0 -1 -1 0 20.5 20.5)" stroke="#fff"/></svg>',
      slickArrowBlack = '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path stroke="#12404F" d="M.5.5h59v59H.5z"/><path d="M31.8 37a1 1 0 0 1-.8-.4l-4.8-6a1 1 0 0 1 0-1.2l5-6a1 1 0 0 1 1.6 1.2L28.3 30l4.3 5.4a1 1 0 0 1-.8 1.6Z" fill="#12404F"/></svg>'; //Слайдер баннер на главной

  $('.home-banner--slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.home-hit__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.gallery-main').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    asNavFor: '.gallery-nav'
  });
  $('.gallery-nav').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    asNavFor: '.gallery-main',
    focusOnSelect: true,
    centerMode: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">' + slickArrowBlack + '</button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">' + slickArrowBlack + '</button>'
  });
  /**Slick end */

  /**Header height start */

  window.addEventListener('load', function () {
    document.documentElement.style.setProperty("--header-h", document.querySelector('.site-header__inner').offsetHeight + "px");
  }, {
    passive: true
  });
  /**Header height end */

  /**Start Mobile Menu */

  var toggleStopScroll = function toggleStopScroll() {
    document.body.classList.toggle('stopscroll');
    document.querySelectorAll('.site-header--fixed').forEach(function (el) {
      el.classList.toggle('site-header--pr');
    });
  };

  var toggleMenu = function toggleMenu() {
    var menuButton = document.querySelectorAll('.site-header__toggle-menu'),
        menuWindow = document.querySelector('.site-header__humb-inner');
    menuButton.forEach(function (el) {
      el.classList.toggle('site-header__toggle-menu--close');
    });
    menuWindow.classList.toggle('site-header__humb-inner--open');
    document.querySelector(".overlay").classList.toggle('overlay--none');
    toggleStopScroll();
  };

  document.querySelectorAll('.site-header__toggle-menu').forEach(function (el) {
    el.addEventListener('click', toggleMenu, {
      passive: true
    });
  });
  document.querySelectorAll('.overlay--none').forEach(function (el) {
    el.addEventListener('click', toggleMenu, {
      passive: true
    });
  });

  var toggleMenuItem = function toggleMenuItem(e) {
    if (e.target.tagName == 'A' && e.target.parentElement.classList.contains('menu-item-has-children') || e.target == this) {
      //e.preventDefault();
      if (this.classList.contains('active')) {} else if (!this.closest('.sub-menu')) {
        document.querySelectorAll('.sub-menu').forEach(function (el) {
          el.classList.remove('sub-menu--open');
        });
        document.querySelectorAll('.menu-item-has-children').forEach(function (el) {
          el.classList.remove('active');
          el.style.marginBottom = "0";
        });
      } else if (this.closest('.sub-menu')) {
        var parent = this.parentElement,
            h = this.querySelector('.sub-menu').offsetHeight;
        parent.querySelectorAll('.sub-menu').forEach(function (el) {
          el.classList.remove('sub-menu--open');
        });
        parent.querySelectorAll('.menu-item-has-children').forEach(function (el) {
          el.classList.remove('active');
          el.style.marginBottom = "0";
        });
        this.style.marginBottom = h + "px";
      }

      this.querySelector('.sub-menu').classList.add('sub-menu--open');
      this.classList.add('active');
    }
  };

  document.querySelectorAll('.top-nav .menu-item-has-children').forEach(function (el) {
    el.addEventListener('click', toggleMenuItem, {
      passive: true
    });
  });
  /**End Mobile Menu */

  /**Start Header state */

  var setHeaderState = function setHeaderState() {
    var header = document.querySelector(".site-header");

    if (window.scrollY && !header.classList.contains("site-header--scroll")) {
      header.classList.add("site-header--scroll");
    }

    if (window.scrollY === 0) {
      header.classList.remove('site-header--scroll');
    }
  };

  window.addEventListener('scroll', setHeaderState, {
    passive: true
  });
  setHeaderState();
  /**End Header state */

  /**Start choose lang */

  var langBtn = document.querySelectorAll('.langs__show');

  var showLangs = function showLangs(e) {
    e.target.parentElement.classList.toggle('langs--show');
  };

  langBtn.forEach(function (el) {
    el.addEventListener('click', showLangs, {
      passive: true
    });
  });
  /**End choose lang */

  /**Tabs start */

  var productTabNames = document.querySelectorAll('.home-catalog__tab-name'),
      productTabClose = document.querySelectorAll('.home-catalog__close');
  productTabNames.forEach(function (el) {
    el.addEventListener('click', function () {
      var tabBtn = this,
          tabName = this.getAttribute('data-open'),
          tabs = document.querySelector('.home-catalog__tabs'),
          tabBtnActive = document.querySelector('.home-catalog__tab-name--active'),
          tab = tabs.querySelector('[data-tab=' + tabName + ']'),
          pb = tab.offsetHeight + "px",
          tabNameActive,
          tabActive,
          close = document.querySelector('.home-catalog__close'),
          homeBanner = document.querySelector('.home-banner'),
          homeCatalogInner = document.querySelector('.home-catalog__inner');

      if (!tabBtn.classList.contains('home-catalog__tab-name--active')) {
        if (tabBtnActive) {
          tabNameActive = tabBtnActive.getAttribute('data-open');
          tabActive = tabs.querySelector('[data-tab=' + tabNameActive + ']');
          tabBtnActive.classList.remove('home-catalog__tab-name--active');
          tabActive.classList.remove('home-catalog__tab--active');
          tabActive.querySelectorAll('a').forEach(function (el) {
            el.setAttribute('tabindex', '0');
          });
        }

        tabBtn.classList.add('home-catalog__tab-name--active');
        tab.classList.add('home-catalog__tab--active');
        tab.querySelectorAll('a').forEach(function (el) {
          el.setAttribute('tabindex', '0');
        });
        tabs.style.paddingBottom = pb;
        close.classList.add('home-catalog__close--active');
        close.setAttribute('tabindex', '0');
        homeCatalogInner.style.paddingTop = close.offsetHeight + "px";
        homeBanner.classList.add('home-banner--hide');
      }
    }, {
      passive: true
    });
  });
  productTabClose.forEach(function (el) {
    el.addEventListener('click', function () {
      var tabs = document.querySelector('.home-catalog__tabs'),
          tabBtnActive = document.querySelector('.home-catalog__tab-name--active'),
          pb = "0px",
          tabNameActive,
          tabActive,
          close = this,
          homeBanner = document.querySelector('.home-banner'),
          homeCatalogInner = document.querySelector('.home-catalog__inner');

      if (tabBtnActive) {
        tabNameActive = tabBtnActive.getAttribute('data-open');
        tabActive = tabs.querySelector('[data-tab=' + tabNameActive + ']');
        tabBtnActive.classList.remove('home-catalog__tab-name--active');
        tabActive.classList.remove('home-catalog__tab--active');
      }

      tabs.style.paddingBottom = pb;
      tabs.querySelectorAll('a').forEach(function (el) {
        el.setAttribute('tabindex', '-1');
      });
      close.classList.remove('home-catalog__close--active');
      close.setAttribute('tabindex', '-1');
      homeCatalogInner.style.paddingTop = "0px";
      homeBanner.classList.remove('home-banner--hide');
    }, {
      passive: true
    });
  });
  /**Tabs end */
  //mask

  $('input[type="tel"]').mask("+7-999-999-99-99", {
    placeholder: "_"
  });
  /**
   * 
   * @param duration Enter duration in seconds
   */

  function sleep(duration) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, duration * 1000);
    });
  } // возвращает куки с указанным name,
  // или undefined, если ничего не найдено


  function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  } //добавляет куки


  function setCookie(name, value) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = _objectSpread({
      path: '/'
    }, options);

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (var optionKey in options) {
      updatedCookie += "; " + optionKey;
      var optionValue = options[optionKey];

      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }
  /**Имя прикрепленного файла */


  var fileInputs = document.querySelectorAll('.file input[type=file]');
  fileInputs.forEach(function (el) {
    el.addEventListener('change', function () {
      var file = el.closest('.file'),
          fileName = file.querySelector('.file__name');

      if (el.files.length) {
        fileName.innerText = el.files[0].name;
      } else {
        fileName.innerText = 'Загрузить заявку';
      }
    }, {
      passive: true
    });
  });
  var allForms = document.querySelectorAll('form');
  allForms.forEach(function (form) {
    $(form.querySelector('.files__del')).hide(200);
    form.addEventListener('change', function (e) {
      if (e.target.closest('.files__item')) {
        var item = e.target.closest('.files__item'),
            name = item.querySelector('.files__item-name');
        item.classList.add('files__item--filed');
        name.setAttribute('data-defaulttext', name.innerText);
        item.querySelector('.files__item-name').innerText = e.target.files[0].name;
        $(item.querySelector('.files__btn')).hide(200);
        $(item.querySelector('.files__del')).show(200);
        $(item.nextElementSibling).show(200);
      }
    }, {
      passive: true
    });
  });
  var delFiles = document.querySelectorAll('.files__del');
  delFiles.forEach(function (del) {
    del.addEventListener('click', function (e) {
      var curForm = e.target.closest('form'),
          curItem = e.target.closest('.files__item'),
          files = e.target.closest('.files'),
          name = curItem.querySelector('.files__item-name'),
          filedItem = curForm.querySelectorAll('.files__item--filed'),
          item = curForm.querySelectorAll('.files__item');

      if (filedItem.length === item.length) {
        curItem.querySelector('input[type=file]').value = '';
        name.innerText = name.getAttribute('data-defaulttext');
        $(curItem.querySelector('.files__btn')).show(200);
        $(curItem.querySelector('.files__del')).hide(200);
        files.appendChild(curItem);
        curItem.classList.remove('files__item--filed');
      } else {
        curItem.querySelector('input[type=file]').value = '';
        name.innerText = name.getAttribute('data-defaulttext');
        $(curItem).hide();
        $(curItem.querySelector('.files__btn')).show(200);
        $(curItem.querySelector('.files__del')).hide(200);
        files.appendChild(curItem);
        curItem.classList.remove('files__item--filed');
      }
    }, {
      passive: true
    });
  });
  /**Floor plan start */

  var addApartDetails = function addApartDetails(el) {
    var apartDetail = document.createElement('div'),
        apartDetailItem = document.createElement('div'),
        apartDetailI = document.createElement('i'),
        apartDetailSpan = document.createElement('span'),
        apartDetailPrice = document.createElement('div');
    apartDetailItem.classList.add('apartment__detail-item');
    apartDetailItem.appendChild(apartDetailI);
    apartDetailItem.appendChild(apartDetailSpan);
    /**Комнаты */

    apartDetailI.innerText = parseInt(el.getAttribute('data-room'));
    apartDetailSpan.innerText = el.getAttribute('data-room').replace(parseInt(el.getAttribute('data-room')), "");
    apartDetail.appendChild(apartDetailItem.cloneNode(true));
    /**Площадь */

    apartDetailI.innerText = el.getAttribute('data-sq');
    apartDetailSpan.innerText = " м2 площадь";
    apartDetail.appendChild(apartDetailItem.cloneNode(true));
    /**Этаж */

    apartDetailI.innerText = el.getAttribute('data-floor');
    apartDetailSpan.innerText = " этаж";
    apartDetail.appendChild(apartDetailItem.cloneNode(true));
    /**Номер */

    apartDetailI.innerText = el.getAttribute('data-num');
    apartDetailSpan.innerText = " № квартиры";
    apartDetail.appendChild(apartDetailItem);
    /**Цена */

    apartDetailPrice.classList.add('apartment__detail-price');
    apartDetailPrice.innerText = el.getAttribute('data-price');
    apartDetail.appendChild(apartDetailPrice);
    apartDetail.classList.add('apartment__detail');
    var elCoord = el.getBoundingClientRect();
    apartDetail.style.top = elCoord['y'] + "px";

    if (elCoord['x'] < 350) {
      apartDetail.classList.add('apartment__detail--right');
      var elLeft = elCoord['x'] + elCoord['width'];
      apartDetail.style.left = elLeft + "px";
    } else {
      apartDetail.style.left = elCoord['x'] + "px";
    }

    apartDetail.style.top = elCoord['y'] + "px";
    el.closest('.plan').appendChild(apartDetail);
  };

  var addModalDetails = function addModalDetails(el) {
    var modalDetailRoom = document.querySelector('.modal-apart__detail-item--room'),
        modalDetailSq = document.querySelector('.modal-apart__detail-item--sq'),
        modalDetailFloor = document.querySelector('.modal-apart__detail-item--floor'),
        modalDetailNum = document.querySelector('.modal-apart__detail-item--num'),
        modalDetailPrice = document.querySelector('.modal-apart__detail-price'),
        modalDetailSvg = document.querySelector('.modal-apart__img svg');
    /**Комнаты */

    modalDetailRoom.querySelector('i').innerText = parseInt(el.getAttribute('data-room'));
    modalDetailRoom.querySelector('span').innerText = el.getAttribute('data-room').replace(parseInt(el.getAttribute('data-room')), "");
    /**Площадь */

    modalDetailSq.querySelector('i').innerText = el.getAttribute('data-sq');
    modalDetailSq.querySelector('span').innerText = " м2 площадь";
    /**Этаж */

    modalDetailFloor.querySelector('i').innerText = el.getAttribute('data-floor');
    modalDetailFloor.querySelector('span').innerText = " этаж";
    /**Номер */

    modalDetailNum.querySelector('i').innerText = el.getAttribute('data-num');
    modalDetailNum.querySelector('span').innerText = " № квартиры";
    /**Цена */

    modalDetailPrice.innerText = el.getAttribute('data-price');
    /**svg */

    var elCoord = el.getBoundingClientRect(),
        svg = el.closest('svg'),
        svgCoord = svg.getBoundingClientRect(),
        k1 = +svg.getAttribute('viewBox').split(' ')[2] / svgCoord['width'],
        xEnd,
        yEnd,
        xTr,
        yTr,
        k2 = 1,
        k3 = 1;

    if (window.matchMedia('(pointer: fine)').matches) {
      k2 = 1.06;
      k3 = 1.15;
    }

    xTr = (elCoord['x'] - svgCoord['x']) * k1;
    xTr = xTr > 0 ? -xTr : xTr;
    yTr = (elCoord['y'] + (elCoord['height'] - elCoord['height'] / k3) / 2 - svgCoord['y']) * k1;
    yTr = yTr > 0 ? -yTr : yTr;
    xEnd = elCoord['width'] * k1 / k2;
    yEnd = elCoord['height'] * k1 / k2;
    var newG = el.cloneNode(true);
    newG.setAttribute('transform', 'translate(' + xTr + ', ' + yTr + ')');
    modalDetailSvg.setAttribute('viewBox', "0 0 " + xEnd + " " + yEnd);
    modalDetailSvg.innerHTML = "";
    modalDetailSvg.appendChild(newG);

    if (window.matchMedia('(max-width: 1023px)').matches) {
      modalDetailSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }

    if (typeof MicroModal !== 'undefined' && !el.classList.contains('sold') && !el.classList.contains('booked')) {
      MicroModal.show('modal-apart');
    }
  };

  var apart = document.querySelectorAll('.plan__floor svg .apartment');
  apart.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      var parent = this.parentElement,
          svg = this.closest('svg');
      parent.appendChild(this);
      svg.classList.add('fade');
      addApartDetails(this);
    }, {
      passive: true
    });
    el.addEventListener('mouseleave', function () {
      var parent = this.parentElement,
          svg = this.closest('svg');
      svg.classList.remove('fade');
      document.querySelectorAll('.apartment__detail').forEach(function (el) {
        el.remove();
      });
    }, {
      passive: true
    });
    el.addEventListener('click', function () {
      addModalDetails(this);
    }, {
      passive: true
    });
  });
  /**Floor plan end */

  /**Photoswipe*/

  if (typeof PhotoSwipe !== 'undefined') {
    var setDimImage = function setDimImage(el, index) {
      el.setAttribute('data-index', index);

      if (!el.getAttribute('data-width')) {
        var img = new Image();
        img.src = el.getAttribute('href');

        img.onload = function () {
          el.setAttribute('data-size', this.width + 'x' + this.height);
          el.setAttribute('data-width', this.width);
          el.setAttribute('data-height', this.height);
        };
      }
    };

    var popupImgs = document.querySelectorAll('a[href*=png],a[href*=jpg]');
    popupImgs.forEach(function (el, index) {
      setDimImage(el, index);
    });
    var pswpWrap = document.createElement('div');
    pswpWrap.classList.add('pswp');
    pswpWrap.setAttribute('tabindex', '-1');
    pswpWrap.setAttribute('role', 'dialog');
    pswpWrap.setAttribute('aria-hidden', 'true');
    /**Фон */

    var pswpBg = document.createElement('div');
    pswpBg.classList.add('pswp__bg');
    pswpWrap.appendChild(pswpBg);
    /**Обертка для содержимого */

    var pswpScrolWrap = document.createElement('div');
    pswpScrolWrap.classList.add('pswp__scroll-wrap');
    /**Контейнер под слайды */

    var pswpContainer = document.createElement('div');
    pswpContainer.classList.add('pswp__container');
    var pswpItem = document.createElement('div'),
        deep = true;
    pswpItem.classList.add('pswp__item');
    pswpContainer.appendChild(pswpItem.cloneNode(deep));
    pswpContainer.appendChild(pswpItem.cloneNode(deep));
    pswpContainer.appendChild(pswpItem);
    pswpScrolWrap.appendChild(pswpContainer);
    /**Элементы управления */

    var pswpUi = document.createElement('div');
    pswpUi.classList.add('pswp__ui');
    pswpUi.classList.add('pswp__ui--hidden');
    /**Верхняя панель */

    var pswpTop = document.createElement('div');
    pswpTop.classList.add('pswp__top-bar');
    /**Счетчик */

    var pswpCounter = document.createElement('div');
    pswpCounter.classList.add('pswp__counter');
    pswpTop.appendChild(pswpCounter);
    /**Кнопки */

    var pswpBtn = document.createElement('button');
    pswpBtn.classList.add('pswp__button');
    var pswpClose = pswpBtn.cloneNode(deep);
    pswpClose.classList.add('pswp__button--close');
    pswpClose.setAttribute('title', 'Close (Esc)');
    pswpTop.appendChild(pswpClose);
    var pswpShare = pswpBtn.cloneNode(deep);
    pswpShare.classList.add('pswp__button--share');
    pswpShare.setAttribute('title', 'Share');
    pswpTop.appendChild(pswpShare);
    var pswpFs = pswpBtn.cloneNode(deep);
    pswpFs.classList.add('pswp__button--fs');
    pswpFs.setAttribute('title', 'Toggle fullscreen');
    pswpTop.appendChild(pswpFs);
    var pswpZoom = pswpBtn.cloneNode(deep);
    pswpZoom.classList.add('pswp__button--zoom');
    pswpZoom.setAttribute('title', 'Zoom in/out');
    pswpTop.appendChild(pswpZoom);
    /**Preloader */

    var pswpPreloader = document.createElement('div');
    pswpPreloader.classList.add('pswp__preloader');
    pswpPreloader.innerHTML = '<div class="pswp__preloader__icn">< div class="pswp__preloader__cut" ><div class="pswp__preloader__donut"></div></div></div>';
    pswpTop.appendChild(pswpPreloader);
    pswpUi.appendChild(pswpTop);
    /**Share modal */

    var pswpShareModal = document.createElement('div');
    pswpShareModal.classList.add('pswp__share-modal');
    pswpShareModal.classList.add('pswp__share-modal--hidden');
    pswpShareModal.classList.add('pswp__share-single-tap');
    var pswpShareTooltip = document.createElement('div');
    pswpShareTooltip.classList.add('pswp__share-tooltip');
    pswpShareModal.appendChild(pswpShareTooltip);
    pswpUi.appendChild(pswpShareModal);
    /**Arrows */

    var pswpLeft = pswpBtn.cloneNode(deep);
    pswpLeft.classList.add('pswp__button--arrow--left');
    pswpLeft.setAttribute('title', 'Previous (arrow left)');
    pswpUi.appendChild(pswpLeft);
    var pswpRight = pswpBtn.cloneNode(deep);
    pswpRight.classList.add('pswp__button--arrow--right');
    pswpRight.setAttribute('title', 'Next (arrow right)');
    pswpUi.appendChild(pswpRight);
    /**Caption */

    var pswpCaption = document.createElement('div');
    pswpCaption.classList.add('pswp__caption');
    var pswpCaptionCenter = document.createElement('div');
    pswpCaptionCenter.classList.add('pswp__caption__center');
    pswpCaption.appendChild(pswpCaptionCenter);
    pswpUi.appendChild(pswpCaption);
    pswpScrolWrap.appendChild(pswpUi);
    pswpWrap.appendChild(pswpScrolWrap); //pswpWrap.innerHTML = '<-- Background of PhotoSwipe. Its a separate element as animating opacity is faster than rgba(). --><div class="pswp__bg" ></div >    < !--Slides wrapper with overflow: hidden. -- ><div class="pswp__scroll-wrap"><!-- Container that holds slides.            PhotoSwipe keeps only 3 of them in the DOM to save memory.            Dont modify these 3 pswp__item elements, data is added later on. -->        <div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->        <div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><!--  Controls are self-explanatory. Order can be changed. -->                <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->                <!-- element will get class pswp__preloader--active when preloader is running -->                <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div>';

    document.body.appendChild(pswpWrap);
    /**Общая галерея на странице */

    if (popupImgs.length) {
      var openPhotoSwipe = function openPhotoSwipe(index) {
        var pswpElement = document.querySelectorAll('.pswp')[0]; // build items array

        var items = [];
        popupImgs.forEach(function (el, index) {
          if (el.classList.contains('slick-cloned')) {//исключение из общей галереи
          } else {
            items.push({
              src: el.getAttribute('href'),
              w: el.getAttribute('data-width'),
              h: el.getAttribute('data-height')
            });
          }
        }); // define options (if needed)

        var options = {
          // history & focus options are disabled on CodePen        
          history: false,
          focus: false,
          showAnimationDuration: 0,
          hideAnimationDuration: 0,
          index: +index
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        console.log(gallery);
        gallery.framework.bind(gallery.scrollWrap.querySelector('.pswp__button--close')
        /* bind on any element of gallery */
        , 'pswpTap', function (e) {
          console.log('tap', e, e.detail); // e.detail.origEvent  // original event that finished tap (e.g. mouseup or touchend)
          // e.detail.target // e.target of original event
          // e.detail.releasePoint // object with x/y coordinates of tap
          // e.detail.pointerType // mouse, touch, or pen

          e.stopPropagation();
          e.preventDefault();
        });
      };

      ;
      popupImgs.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          if (el.closest('.reviews__item')) {
            var items = [],
                pswpElement = document.querySelectorAll('.pswp')[0],
                msrc = el.querySelector('img').getAttribute('src'),
                options = {
              getThumbBoundsFn: function getThumbBoundsFn(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    // find thumbnail
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {
                  x: rect.left,
                  y: rect.top + pageYScroll,
                  w: rect.width
                };
              }
            };
            items.push({
              src: el.getAttribute('href'),
              w: el.getAttribute('data-width'),
              h: el.getAttribute('data-height'),
              msrc: msrc,
              el: el
            });
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
          } else {
            openPhotoSwipe(el.getAttribute('data-index'));
          }
        });
      });
    }
    /**Для видео */


    var popupYouVideo = document.querySelectorAll('a[href*=youtu]:not([target])');
    popupYouVideo.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var youtube = {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
            controls: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
            iframeVideo = document.createElement('iframe'),
            src = '',
            videoId = el.getAttribute('href').match(youtube.matcher);
        console.log(e.target);
        src = youtube.url + videoId[4] + '?' + 'autoplay=' + youtube.params.autoplay + '&' + 'autohide=' + youtube.params.autohide + '&' + 'html5=' + youtube.params.html5 + '&' + 'enablejsapi=' + youtube.params.enablejsapi;
        iframeVideo.setAttribute('src', src);
        iframeVideo.setAttribute('width', '560');
        iframeVideo.setAttribute('height', '316');
        iframeVideo.setAttribute('frameborder', '0');
        iframeVideo.setAttribute('allow', 'autoplay');
        console.log(iframeVideo);
        iframeVideo.style.position = 'absolute';
        iframeVideo.style.top = '50%';
        iframeVideo.style.left = '50%';
        iframeVideo.style.transform = 'translate(-50%, -50%)';
        var items = [// slide 1 with HTML
        {
          html: ''
        }],
            pswpElement = document.querySelectorAll('.pswp')[0],
            options = {
          history: false,
          focus: false
        }; // initialise as usual

        var video = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        video.listen('gettingData', function (index, item) {
          if (index === 0) {
            pswpElement.appendChild(iframeVideo);
          }
        });
        video.listen('close', function () {
          iframeVideo.remove();
        });
        video.init();
      });
    });
    /**Галерея история */

    var historyGalStart = document.querySelectorAll('.history__item-link');
    historyGalStart.forEach(function (el) {
      el.addEventListener('click', function () {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            historyImgs = el.nextElementSibling.querySelectorAll('a'); // build items array

        var items = [];
        historyImgs.forEach(function (el, index) {
          items.push({
            src: el.getAttribute('href'),
            w: el.getAttribute('data-width'),
            h: el.getAttribute('data-height')
          });
        }); // define options (if needed)

        var options = {
          // history & focus options are disabled on CodePen        
          history: false,
          focus: false,
          showAnimationDuration: 0,
          hideAnimationDuration: 0
        };
        console.log(items);
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      }, {
        passive: true
      });
    });
  }

  if (typeof MicroModal !== 'undefined') {
    MicroModal.init({
      onShow: toggleStopScroll,
      onClose: toggleStopScroll,
      disableScroll: true,
      // [6]
      disableFocus: true,
      // [7]
      awaitOpenAnimation: true,
      // [8]
      awaitCloseAnimation: true,
      // [9]
      debugMode: false
    });
    var popupBtn = document.querySelectorAll('[data-src]');
    /**Окрытие окна после отправки формы */
    // let allForms = document.querySelectorAll('form');
    // allForms.forEach(el => {
    // 	el.addEventListener('submit', function(event) {
    // 		event.preventDefault();
    // 		MicroModal.show('modal-1');
    // 	})
    // });

    document.querySelectorAll('.modal-apart__btn').forEach(function (el) {
      el.addEventListener('click', function (event) {
        MicroModal.close('modal-apart');
      }, {
        passive: true
      });
    });
    document.addEventListener('wpcf7mailsent', function (event) {
      var openModal = document.querySelector('.modal.is-open');

      if (openModal) {
        MicroModal.close(openModal.getAttribute('id'));
      }

      MicroModal.show('modal-1');
    }, false);
    document.addEventListener('wpcf7mailfailed', function (event) {
      var openModal = document.querySelector('.modal.is-open');

      if (openModal) {
        MicroModal.close(openModal.getAttribute('id'));
      }

      MicroModal.show('modal-4');
    }, false);
  }
  /**Анимации start*/


  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    window.addEventListener('load', function () {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".interior__scroll",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }).to(".interior__scroll img", {
        x: 400
      }, 0);
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".process__scroll",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      tl2.to(".process__scroll", {
        x: -400
      }, 0);
    });
  }
});