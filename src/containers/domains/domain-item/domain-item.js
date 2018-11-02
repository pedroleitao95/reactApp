import React, { Component } from 'react';
import './domain-item.scss';


export default class DomainItem extends Component {

    constructor(props) {
        super(props);

    }


    // render(){
    //     return <li className="list-group-item list-group-item-action">Url : {this.props.domain.url}</li>

    // };

    render() {
        return (
            <Panel eventKey={this.props.domain.id}>
                <Panel.Heading>
                    <Panel.Title toogle>{this.props.domain.url}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {this.props.domain.id}
                    {this.props.domain.url}
                </Panel.Body>
            </Panel>
        );

    }

}