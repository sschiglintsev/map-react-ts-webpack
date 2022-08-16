import React from 'react';
import style from './BlockPoint.module.scss'
import {v4 as uuidv4} from "uuid";

type PropsType = {
    address: string,
    budgets: String[]
}

export const BlockPoint = (props: PropsType) => {

    const allButtons = props.budgets.map((el, ind) => {
            const newKey = uuidv4();
            return <button key={newKey} className={style.button}>{el}</button>
        }
    )

    return (
        <>
            <div className={style.block}>
                <div>
                    {props.address}
                </div>
                <div className={style.buttonContainer}>
                    {allButtons}
                </div>
            </div>

        </>
    );
};
