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
        let folderName = this.props.location.pathname.split('/')[2];

        fetch( `/file/${ folderName }/${ s3Problem }`).then(( data ) => {
            return data.json();
        }).then(( msg ) => {
            this.setState({
                msg: msg.msg,
                code: msg.code,
                desc: msg.desc.substring(1)
            });
        })
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h4>{ this.state.desc }</h4>
                    </div>
                </div>
               
                    <Highlight language="java">
                        { this.state.code }
                    </Highlight>
            </div>
        )
    }
}   

export default Problem;