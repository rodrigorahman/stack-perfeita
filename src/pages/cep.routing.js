import React, { Component } from 'react'

import { Route } from 'react-router-dom';
 
import ConsultaCEP from '../pages/ConsultaCEP.page';

const CEPRouting  = () => {
    return [
        <Route key='cep' exact path="/cep/" render={(props, history) => <ConsultaCEP history={history} {...props}/>} ></Route>,
    ]
}

export default CEPRouting;
