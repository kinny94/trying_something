import React, { Component } from 'react';
import Highlight from 'react-highlight';

class Problem extends Component{

    constructor(){
        super();
        this.state = {
            code: ''
        }
    }

    componentWillMount(){
        let problem = this.props.location.pathname.split("/")[ this.props.location.pathname.split("/").length - 1 ];
        let s3Problem = problem.replace(/ /g, "_").toString().concat(".java");
        
        fetch( `/file/array/${ s3Problem }`).then(( data ) => {
            return data.json();
        }).then(( msg ) => {
            this.setState({
                code: msg.msg
            });
        })
    }
    render(){
        return(
            <div>
                 <Highlight language="java">
      { this.state.code }
    </Highlight>
            </div>
        )
    }
}   

export default Problem;