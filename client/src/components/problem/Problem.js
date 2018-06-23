import React, { Component } from 'react';

class Problem extends Component{

    componentWillMount(){
        let problem = this.props.location.pathname.split("/")[ this.props.location.pathname.split("/").length - 1 ];
        console.log( problem );
    }
    render(){
        return(
            <div>
                <p>Rendering some conetent</p>
            </div>
        )
    }
}   

export default Problem;