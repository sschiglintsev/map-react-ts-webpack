import React from 'react';
import style from './BlockPoint.module.scss'

export const BlockPoint = () => {

    return (
        <>
            <div className={style.block}>
                <div>
                    Title
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button}>Самовывоз</button>
                    <button className={style.button}>Доставка</button>
                    <button className={style.button}>Шоурум</button>
                </div>
            </div>

        </>
    );
};
