import React from 'react';
import {DataStateType} from "../../DataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content/Content";

type PagesType = {
    dataState:DataStateType
}


export const Pages = (props:PagesType) => {

    let params=useParams()

    return (

        <div>

         <Content
                  page={props.dataState}
                  routes={Number(params.id)}/>
        </div>
    );
};

