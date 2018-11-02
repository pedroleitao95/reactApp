import React, { Component } from 'react';
import './domain-item.scss';


export default class DomainItem extends Component {

    constructor(props){
        super(props);

    }


    render(){
        return <li>Url : {this.props.domain.url}</li>

    };

}