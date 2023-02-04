import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Pages} from "./pages/Pages";
import {dataState} from "../DataState/dataState";




export const Site = () => {
    return (

        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div ><NavLink className={({isActive})=>isActive? styles.active :styles.navLink} to={'page/0'}>One Page</NavLink ></div>
                    <div><NavLink className={({isActive})=>isActive? styles.active :styles.navLink} to={'page/1'}>Two Page</NavLink ></div>
                    <div><NavLink  className={({isActive})=>isActive? styles.active :styles.navLink} to={'page/2'}>Three Pages</NavLink ></div>

                </div>
                <div className={styles.content}>
               <Routes>
                   <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                   <Route path={'page/:id'} element={<Pages dataState={dataState} />}/>

                   {/*<Route path={'page3/'} element={<PageThree/>}/>*/}
                   <Route path={'/*'} element={<Error404/>}/>
               </Routes>
                </div>
            </div>
        </div>
    );
};

