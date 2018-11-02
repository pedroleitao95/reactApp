import React, { Component } from 'react';
import './domain-item.scss';


export default class DomainItem extends Component {

    constructor(props){
        super(props);

    }


    render(){
        return <li className="list-group-item list-group-item-action">Url : {this.props.domain.url}</li>

    };

}