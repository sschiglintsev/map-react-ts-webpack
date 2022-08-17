import React, {useEffect} from 'react';
import {Map} from "./components/Map/Map";
import {Main} from "./components/Main/Main";
import style from "./App.module.scss"
import {useAppDispatch, useAppSelector} from "./store/Store";
import {getAllPoints} from "./store/root";

declare var ymaps: any;

function App() {
    const dispatch = useAppDispatch()

    var myMap: any;

    useEffect(() => {
        dispatch(getAllPoints())
        ymaps.ready(init);


        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 18
            });

            myMap.geoObjects
                .add(new ymaps.Placemark([55.76, 37.64], {
                    balloonContent: 'Местоположение',
                    iconCaption: ''
                }, {
                    preset: 'islands#greenDotIconWithCaption'
                }))
        }
    }, [])

    const setCenter = (latitude: number, longitude: number, address:string) => {
        // myMap.destroy();
        myMap.setCenter([latitude, longitude]);
        myMap.geoObjects
            .add(new ymaps.Placemark([latitude, longitude], {
                balloonContent: `${address}`,
                iconCaption: ''
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }))
    }

    return (
        <div className={style.app}>
            <Main setCenter={setCenter}/>
            <Map/>
        </div>
    );
}

export default App;
