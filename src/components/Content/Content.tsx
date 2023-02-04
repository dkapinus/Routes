import React from 'react';
import {DataStateType} from "../../DataState/dataState";
import {Navigate} from "react-router-dom";

type Content = {
    page:DataStateType;
    routes:number
}



export const Content = (props:Content) => {
    return (
       props.routes< props.page.pages.length
        ?
        <>

            <h2>{props.page.pages[props.routes].heading}</h2>
            <div>{props.page.pages[props.routes].about}</div>
        </>
            : <Navigate to={'/*'}/>
    );
};

