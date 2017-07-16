function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

Container.prototype.render = function () {
    return this.htmlCode;
};

function Carousel() {
    Container.call(this, "carousel");
    this.countProducts = 0;
    this.productsItems = [];

    // количество отзывов
    // this.countCarousel = 0;

    // массив для хранения отзывов
    // this.commentsItems = [];

    // Получаем изначальные элементы из JSON
    this.loadCarouselItems();
}

Carousel.prototype = Object.create(Container.prototype);
Carousel.prototype.constructor = Carousel;

/*Carousel.prototype.render = function(root) {
    var commentsDiv = $('<div />', {
        id: this.id,
        text: 'ОТЗЫВЫ:'
    });

    var commentsItemsDiv = $('<div />', {
        id: this.id + '_items'
    });

    commentsItemsDiv.appendTo(commentsDiv);
    commentsDiv.appendTo(root);
};*/

// Получаем изначальные элементы из JSON
Carousel.prototype.loadCarouselItems = function() {
    // var appendId = '#' + this.id + '_items';

    $.get({
        url: './json/products.json',
        dataType: 'json',
        error: function() {
            console.log ('JSON load: Error!');
        },
        success: function(data) {
            console.log ('JSON load: Ок!');
            // Количество отзывов
            this.countProducts = data.products.length;
            // Перебираем JSON и добавляем в массив
            for (var item in data.products) {
                this.productsItems.push(data.products[item]);
            }
            console.log (data, data.products.length, this.productsItems);
        },
        context: this
    });

};

// Добавление отзыва
/*Carousel.prototype.add = function (idComment, text, userMessage) {
    var commentsItem = {
        "id_comment": idComment,
        "text": text,
        "submit": false
    };
    // Увеличиваем количество отзывов
    this.countCarousel++;
    // Добавляем отзыв в массив
    this.commentsItems.push(commentsItem);
    // Обновляем данные
    this.refresh();
    if (!!userMessage) alert (userMessage);
};*/

// Удаление отзыва
/*Carousel.prototype.del = function () {
    if (this.countCarousel < 1) { this.refresh(); return; }
    this.countCarousel--;
    this.commentsItems.pop();
    this.refresh();
};*/

// Одобрение отзыва
/*Carousel.prototype.submit = function () {
    this.commentsItems[this.countCarousel-1].submit = true;
    this.refresh();
};*/

// Показать все отзывы
/*Carousel.prototype.list = function () {
    $('#comments__list').remove();

    if (this.countCarousel < 1) { return; }

    var commentsDiv = $('<div />', {
        id: 'comments__list',
        html: '<br><hr><br>СПИСОК ВСЕХ ОТЗЫВОВ:<br>&nbsp;'
    });

    for (var item in this.commentsItems) {
        var comment = this.commentsItems[item],
            commentsItemsDiv = $('<div />', {
                html: '<hr width="50%"><p>Отзыв №' + comment.id_comment + '</p>'
                + '<p>Текст: <span class="comments-text-list">' + comment.text + '</span></p>'
                + '<p>Отзыв одобрен: ' + comment.submit + '</p>'
            });
        commentsItemsDiv.appendTo(commentsDiv);
    }

    commentsDiv.appendTo('body');
};*/

// Перерисовка
/*Carousel.prototype.refresh = function() {
    var commentsDataDiv = $('#comments_data');
    commentsDataDiv.empty();
    commentsDataDiv.append('<p>Всего отзывов: ' + this.countCarousel + '</p>');

    // Вывод в консоль для самопроверки
    console.log(this.commentsItems, this.countCarousel);

    if (this.countCarousel < 1) {
        $('.comments').hide();
    } else {
        $('.comments').show();
    }
};*/

// Загрузка документа
$(document).ready(function() {
    var carousel = new Carousel();
    // comments.render('#comments__wrapper');
    //
    // // Кнопка - Добавить
    // $('.comments-add').on('click', function() {
    //     var idComment = parseInt($(this).attr('id').split('_')[1]);
    //     var text = $(this).parent().parent().find('.comments-text').val();
    //     comments.add(idComment, text, 'Ваш отзыв был передан на модерацию!');
    // });
    //
    // // Кнопка - Удалить
    // $('.comments-delete').on('click', function() {
    //     comments.del();
    // });
    //
    // // Кнопка - Одобрить
    // $('.comments-submit').on('click', function() {
    //     comments.submit();
    // });
    //
    // // Кнопка - Показать все отзывы
    // $('.comments-list').on('click', function() {
    //     comments.list();
    // });
});
