ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.947179,
        longitude: 30.384813,
        hintContent: '<div class="map__hint">Тверская улица, д. 16</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/content/burger.png" alt="Бургер" alt=""/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Тверская улица, д. 16',
            '</div>'
        ]
    },
    {
        latitude: 59.891696,
        longitude: 30.316082,
        hintContent: '<div class="map__hint">Московский проспект, д. 103к2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/content/burger.png" alt="Бургер" alt=""/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Московский проспект, д. 103к2',
            '</div>'
        ]
    },
    {
        latitude: 59.973930,
        longitude: 30.311348,
        hintContent: '<div class="map__hint">улица Чапыгина, д. 13А</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/content/burger.png" alt="Бургер" alt=""/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: улица Чапыгина, д. 13А',
            '</div>'
        ]
    },
    {
        latitude: 59.915028,
        longitude: 30.486528,
        hintContent: '<div class="map__hint">Товарищеский проспект, д. 20/27</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/content/burger.png" alt="Бургер" alt=""/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Товарищеский проспект д. 20/27',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'svg/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/content/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}

