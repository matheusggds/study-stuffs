// var gatoImg = document.querySelectorAll('.gatoToClick'),
//     countClicker = 0;

//     for (var i = 0; i < gatoImg.length; i++) {
//         gatoImg[i].addEventListener("click", function() {
//             countClicker += 1;
//             document.querySelector('.clickCounter').innerHTML = countClicker;
//         })
//     }

var listCats = [
    {
        id: 1,
        name: 'Gato 1',
        imgPath: 'https://meusanimais.com.br/wp-content/uploads/2017/01/os-gatos-crescem.jpg',
        clickCounter: 0
    },
    {
        id: 2,
        name: 'Gato 2',
        imgPath: 'http://www.6patas.com.br/wp-content/uploads/2016/01/Los-gatos-nos-ignoran-1.jpg',
        clickCounter: 0
    },
    {
        id: 3,
        name: 'Gato 3',
        imgPath: 'http://portalmelhoresamigos.com.br/wp-content/uploads/2016/09/gato-laranja.png',
        clickCounter: 0
    },
    {
        id: 4,
        name: 'Gato 4',
        imgPath: 'https://abrilsuperinteressante.files.wordpress.com/2017/10/gatos.png',
        clickCounter: 0
    },
    {
        id: 5,
        name: 'Gato 5',
        imgPath: 'http://img0.br.ndsstatic.com/gato/gatos-munchkin-um-animal-de-raca-que-vai-te-encantar_15884_w620.jpg',
        clickCounter: 0
    }
];

(function($) {
    listCats.forEach(function(val) {
        var li = '<li class="catList_item list-group-item list-group-item-action" data-id="' + val.id + '">' + val.name + '</li>';

        $('.catslist').append(li);
    });
    
    $('body')
    .on('click', '.catList_item', function() {
        var catID = $(this).data('id'),
            templateCat = '';

        catData = getCat(catID);
        
        templateCat = '<h4>' + catData.name + '</h4>\
        <div><img class="cat_image" data-id="' + catData.id + '" src="' + catData.imgPath + '"/></div>\
       <div>Counter:  <span class="click-counter">' + catData.clickCounter + '</span></div>';

        $('#catShowContet').html(templateCat)
    })
    .on('click', '.cat_image', function() {
        var catID = $(this).data('id'),
            cat = getCat(catID);
            clickCounter = cat.clickCounter;

        clickCounter += 1;
        $('.click-counter').html(clickCounter);

        //Find index of specific object using findIndex method.    
        var index = listCats.findIndex(function(obj){
            return obj.id === catID;
        });
        
        //Update object's name property.
        listCats[index].clickCounter = clickCounter
    });

    function getCat(id) {
        var catData = listCats.filter(function(val) {
            return val.id === id;
        });

        if (!catData.length > 0) {
            return console.error("Não existe nenhum gato com esse ID.")
        }

        return cat = catData[0];
    }
    
})(jQuery)