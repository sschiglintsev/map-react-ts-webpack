import React from 'react';
import style from './Map.module.scss';

declare var ymaps: any;

export const Map = () => {

    ymaps.ready(init);

    function init() {
        const myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 20
        });

        myMap.geoObjects
            .add(new ymaps.Placemark([55.76, 37.64], {
                balloonContent: 'цвет <strong>носика Гены</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }))

    }

    return (
        <div className={style.mapContainer}>
            <div id="map" className={style.map}/>
        </div>
    );
};
