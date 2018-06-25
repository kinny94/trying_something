import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainSearching extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/searching' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/searching/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Searching</h2>
                </div>
                <div className="row">
                    <p className="text-left">
                        A search algorithm is any algorithm which solves the search problem, namely, to retrieve information 
                        stored within some data structure, or calculated in the search space of a problem domain. Examples of
                        such structures include but are not limited to a linked list, an array data structure, or a search 
                        tree. The appropriate search algorithm often depends on the data structure being searched, and may
                        also include prior knowledge about the data.
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
                                <th scope="col">Best Time Complexity</th>
                                <th scope="col">Average Time Complexity</th>
                                <th scope="col">Worst Time Complexity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <th scope="row">Linear Search</th>
                                <td>O(1)</td>
                                <td>O(n)</td>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                            <th scope="row">Binary Search</th>
                                <td>O(1)</td>
                                <td>O(log n)</td>
                                <td>O(log n)</td>   
                            </tr>
                        </tbody>
                    </table> 
                </div>
                <div className="row margin">
                    <h3>Problems</h3>
                </div>
                <div><hr/></div>
                <div className="row">
                    <ul className="w-100 list-group">
                        { this.renderProblems() }
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainSearching;