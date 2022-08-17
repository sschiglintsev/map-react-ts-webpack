import React, {useEffect} from 'react';
import style from './Map.module.scss';

export const Map = () => {

    return (
        <div className={style.mapContainer}>
            <div id="map" className={style.map}/>
        </div>
    );
};
