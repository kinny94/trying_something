import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainQueue extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/queue' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/queue/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Queue</h2>
                </div>
                <div className="row">
                    <p className="text-left">
                        A queue is a particular kind of abstract data type or collection in which the entities in the 
                        collection are kept in order and the principal (or only) operations on the collection are the
                        addition of entities to the rear terminal position, known as enqueue, and removal of entities from 
                        the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data 
                        structure. In a FIFO data structure, the first element added to the queue will be the first one to be 
                        removed. This is equivalent to the requirement that once a new element is added, all elements that 
                        were added before have to be removed before the new element can be removed. Often a peek or front 
                        operation is also entered, returning the value of the front element without dequeuing it. A queue 
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
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Average )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Insertion ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Access ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Insertion ( Worst )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion ( Worst )</th>
                                <td>O(1)</td>
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

export default MainQueue;