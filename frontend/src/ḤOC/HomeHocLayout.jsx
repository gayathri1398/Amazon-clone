import React from 'react';
import {Route} from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const HomeHocLayout = ({component:Component, ...rest}) => {
    return (
        <>
        <Route {...rest}
        component = {(props)=>(
            <HomeLayout>
                <Component {...props}/>
            </HomeLayout>
        )}/>
        </>
    )
}

export default HomeHocLayout
