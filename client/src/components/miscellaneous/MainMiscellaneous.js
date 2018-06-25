import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

class MainMiscellaneous extends Component {

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/miscellaneous' ).then(( data ) => {
            return data.json()
        }).then(( msg ) => {

            let allProblems = [];
            for( let i=0; i<msg.data.length; i++ ){
                let problemName = msg.data[i].replace( ".java", "" ).replace(/_/g, " ");
                allProblems.push( problemName );
            }

            this.setState({
                problems: allProblems
            });
        });
    }

    renderProblems = () => {

        if( this.state.problems.length > 0 ){
            return this.state.problems.map(( problem ) => {
                return <Link key={ problem }  to={ `/problem/miscellaneous/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
            });
        }else{
            return(
                <div className="center-text">
                    <h2>Loading Problems...</h2>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="container margin">
                <div className="row text-center">
                    <h2 className="text-center">Miscellaneous</h2>
                </div>
                <div className="row">
                    <p className="text-left">
                        This section consists of list of questions which are based on usage of different data structures 
                        and algorithms and are often asked during an interview. Most of these questions are taken from
                        Hackerrank and Leetcode. 
                    </p>
                </div>
            </div>
        );
    }
}


export default MainMiscellaneous;