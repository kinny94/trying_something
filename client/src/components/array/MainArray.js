import React, { Component } from 'react';

class MainArray extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){
        
        fetch( '/array' ).then(( data ) => {
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
    
    render(){
        return(
            <div className="container margin">
                <div className="row text-center">
                    <h2 className="text-center">Array</h2>
                </div>
                <div><hr/></div>
                <div className="row">
                    <p className="text-left">An array data structure, or simply an array, is a data structure consisting of a collection of elements 
                        (values or variables), each identified by at least one array index or key. An array is stored such that the 
                        position of each element can be computed from its index tuple by a mathematical formula. The simplest type 
                        of data structure is a linear array, also called one-dimensional array.
                    </p>
                </div>
                <div className="row margin">
                    <h3>Complexities</h3>
                </div>
            
                <div className="row">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">Complexity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <th scope="row">Access ( Average )</th>
                                <td>Θ(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Average )</th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Insertion ( Average )</th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion ( Average )</th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Access ( Worst )</th>
                                <td>Θ(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Worst )</th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Insertion ( Worst )</th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion ( Worst )</th>
                                <td>Θ(n)</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
                <div className="row margin">
                    <h3>Problems</h3>
                </div>
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default MainArray;