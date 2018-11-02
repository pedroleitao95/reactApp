import React, { Component } from 'react';
import DomainItem from '../domain-item/domain-item';
import './domain-list.scss';
import axios from 'axios';

export default class DomainList extends Component {

    state = {
        domains : []
    }

    componentDidMount(){
        axios.request({ 
            url : 'http://localhost:8080/api/v1.0/domain',
            method: 'get',
            headers: {Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZXJuYW5kbyIsIlN1YnNjcmlwdGlvblR5cGUiOnsiaWQiOjMsIm5hbWUiOiJDb3Jwb3JhdGUiLCJudW1iZXJPZkFsbG93ZWRTZWFyY2giOi0xLCJwcmljZSI6Mjk5Ljk5fSwidXNlcklkIjoxLCJleHAiOjE1NDE0MzAzMzEsImlhdCI6MTU0MDgyNTUzMX0.nnZ9kgiV39GU3gHwN-ajS0KdHXmDezr1zPlCJ-5jr9fcUT4JfkTIuUQtPbqd4IDdS444YUj6U-wXoOCcMqwHmw'}
        })
        .then(res => {
            const domains1 = res.data.data;
            console.log(domains1);



            this.setState({domains: domains1});
            console.log(this.state.domains)
        })
    }


    renderList(){
       return this.state.domains.map(domain => <DomainItem key={domain.id} domain={domain} />);
        
    }

    render(){
        return ( <div>
            <h1>Domain List</h1>
            <ul className="list-group">
                 {this.renderList()} 
            </ul>
        </div>)
    };


  


}