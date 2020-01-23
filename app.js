'use strict';
// lesson jquery

new WOW().init();
$(document).ready(function () {
  // // console.log('Выбираем li с классом first', $('li.first'));
  // console.log('получить последний элемент li', $('li').last());
  // //получить пятный элемент с классом ba-menu-item
  // console.log($('.ba-menu-item').eq(4));
  // //получить элемент li с 4 по 6
  // console.log('получить элемент li с 4 по 6', $('li').slice(3, 6));
  // //получить следующий элемент после элемента с классом first
  // console.log($('.first').next());
  //получить все элементы li с классом first
  // $('li.first').css('border', '2px solid tomato');
  // $('.ba-hero__title').css({
  //   'border': '1px solid red',
  //   'font-size': '14px',
  // });
  // $('.ba-hero__title').on('click', function () {
  //   console.log($(this));
  //   $(this).next().addClass('next')
  // });


  $('#classFirst').on('click', function () {
    console.log($('li.test'));
  });

  $('#first').on('click', function () {
    console.log($('li').first());
  });

  $('#five').on('click', function () {
    console.log($('.ba-menu-wrapper li').eq(5));
  });


  $('#threeToFive').on('click', function () {
    console.log($('.ba-menu-wrapper li').slice(3, 5));
  });


  //найти следующий элемент после данного класса
  // console.log($('.ba-dish__head').next().first());

  // console.log($('.ba-dish__info').prev());

  // console.log($('.ba-hero').nextAll());
  // console.log($('.ba-menu a').parent());
  // console.log($('.ba-hero').children());
  // console.log($('.ba-menu-wrapper li').siblings(":not(.first)"));
  // console.log($('a').parent('div').addClass('parentOfLink'));
  let $link = $('.ba-menu__link').first();
  $link.on('click', function (e) {
    e.preventDefault();
    console.log($(this).text());
  });

  //по нажатию на картинку, меняется текст на src картинки

  $('.ba-dish__img').on('click', function () {
    $(this).parent().siblings().find(".ba-dish__title").text($(this).attr("src"));
    /*
  обращаемся к картинке, находим родителя, далее соседний элемент, потом находим наш заголовок,
   и туда вписываем текст который у нашей картинки в src |
  можно так же выйти на общего родителя, и по классу уже у него искать данный заголовок и ему записывать текст
    */
  });


  // по нажатию на кнопку добавляется еще один список
  let btn = $('.ba-btn').first();
  btn.on('click', function () {
    let menuList = $('.ba-menu-list');
    let liItem = $('<li>').addClass('ba-menu-item');
    let divItem = $('<div>').addClass('ba-menu-item__info');
    let strongItem = $('<strong>').addClass('ba-menu-item__price').text('$50');
    let titleItem = $('<h3>').addClass('ba-menu-item__title').text('Voluptate cillum fugiat.');
    let pItem = $('<p>').addClass('ba-menu-item__desc').text('Cheese, tomato, mushrooms, onions.');
    divItem.append(titleItem);
    divItem.append(pItem);
    liItem.append(divItem);
    liItem.append(strongItem);
    menuList.append(liItem);
  });

  // если после заголовка стоит параграф, то скрыть его

  let link = $('.link');
  link.on('click', function (e) {
    e.preventDefault();
    let $h3TitleItem = $('h3');

    if ($h3TitleItem.next('p')) {
      $h3TitleItem.next('p').hide();
    }
  });

  //  ============== modal window


  $('.ba-gallery__img').on('click', function (e) {
    let $imgSrc = $(this).attr('src');
    let $modalImg = $('<img>');

    $modalImg.attr('src', $imgSrc).addClass('ba-modal__image');

    $('.ba-modal-content-wrapper').append($modalImg);

    $modalOpen()
  });


  let $modalOpen = function () {
    $('.ba-modal').addClass('ba-modal--open');
    //добавляем класс что бы при открытии не скролилась наше окно
    $('body').addClass('ba-modal-is-open');
    // по нажатию на esc закрывать модальное окно
    $(document).on('keydown', function (e) {
      if (e.keyCode == 27) {
        $modalClose();
      }
    });

  };
  let $modalClose = function () {
    $('.ba-modal').removeClass('ba-modal--open');
    $('.ba-modal-content-wrapper').empty();
    //удаляем класс что бы при открытии скролилась наше окно
    $('body').removeClass('ba-modal-is-open');
  };

  $('.ba-modal-close').on('click', $modalClose);

  // по нажатию за модальное окно, закрыть его
  $('.ba-modal').on('click', function (e) {
    let $modalContent = $('.ba-modal-content'); // тут указываем элемент в котором лежит наш контент
    if (!$modalContent.is(e.target) // проверяем, что клик не былоо не по блоку с контентом 
      && $modalContent.has(e.target).length === 0) { // и не по дочерним элементам блока с контентом
      $modalClose(); // тогда закарываем окно
    }
  });




  // ================================== ISOTOPE
  $('.noPadding').isotope({
  });

  var filters = [];
  $('.isotope').on('click', 'button', function () {
    $(this).toggleClass('active');
    var isChecked = $(this).hasClass('active');
    var filter = $(this).attr('data-filter');
    if (isChecked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }

    // console.log(filters);
    $('.noPadding').isotope({
      filter: filters.join(',')
    });
  });

  function addFilter(filter) {
    if (filters.indexOf(filter) == -1) {
      filters.push(filter);
      filters.join(',')
    }
  }
  function removeFilter(filter) {
    var index = filters.indexOf(filter);
    if (index != -1) {
      filters.splice(index, 1);
      console.log(filters.join(','));
    }
  }

  //=========================== slick slider
  $('.ba-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    centerMode: true,
  });
  //=========================== Google map

  let map;
  let mapContainer = $('#map')[0];
  let mapCenter = { lat: 50.006585, lng: 36.237077 };
  map = new google.maps.Map(mapContainer, {
    center: mapCenter,
    zoom: 6,
    disableDefaultUI: true,
    // start dark style
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
  // end dark style
  let baOffices = [
    {
      city: 'Kharkiv',
      position: { lat: 50.006693, lng: 36.237199 },
      img: '../images/cupcake.png'
    },

    {
      city: 'Poltava',
      position: { lat: 49.588983, lng: 34.5554741 },
      img: 'images/cupcake.png'
    },
    {
      city: 'Kramatorsk',
      position: { lat: 48.9009301, lng: 36.5196854 },
      img: 'images/cupcake.png'
    },
    {
      city: 'Kyiv',
      position: { lat: 50.4637267, lng: 30.4977141 },
      img: 'images/cupcake.png'
    },
    {
      city: 'Ivano-frankovsk',
      position: { lat: 48.917688, lng: 24.702575 },
      img: 'images/cupcake.png',
    }
  ];
  // add cities to select element
  function addCities() {
    for (let i = 0; i < baOffices.length; i++) {
      let option = document.createElement('option');
      option.textContent = baOffices[i].city;

      option.setAttribute('value', baOffices[i].position.lat + ',' + baOffices[i].position.lng);
      let select = document.querySelector('#city');
      select.append(option);
    }
  }
  addCities();

  let select = document.querySelector('#city');
  select.addEventListener('change', function () {
    let thisVal = this.value.split(',');
    let center = new google.maps.LatLng(thisVal[0], thisVal[1]);
    map.panTo(center);
  });


  // let btnFoMap = document.getElementById('changeCenter');
  // btnFoMap.addEventListener('click', function () {
  //   let center = new google.maps.LatLng(48.917688, 24.702575);

  //   map.panTo(center);
  // });

  // цикл по созданию нескольких маркеров
  for (let i = 0; i < baOffices.length; i++) {
    let marker = new google.maps.Marker({
      position: baOffices[i].position,
      map: map,
      title: baOffices[i].city,
      icon: baOffices[i].img,
    });
  }














  // for (let key of baOffices) {
  //   let marker = new google.maps.Marker({
  //     position: key.position,
  //     map: map,
  //     title: key.city,
  //     icon: key.img
  //   });
  // }



  // let btnFoMap = document.getElementById('changeCenter');
  // btnFoMap.addEventListener('click', function () {
  //   let center = new google.maps.LatLng(48.917688, 24.702575);

  //   map.panTo(center);
  // });

  // let marker = new google.maps.Marker({
  //   position: mapCenter,
  //   map: map,
  //   title: 'Beetroot Academy',
  //   icon: 'https://vladivanovgit.github.io/works-slider/favicon.ico',

  // });


  // let info = new google.maps.InfoWindow({
  //   content: '<h3>Beetroot Academy</h3>'
  // });

  // marker.addListener('click', function () {
  //   info.open(map, marker);
  // });




});



