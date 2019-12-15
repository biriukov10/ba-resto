
// lesson jquery

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
});



