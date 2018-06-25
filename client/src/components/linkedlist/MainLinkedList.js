import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainLinkedList extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/linkedlist' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/linkedlist/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Linked List</h2>
                </div>
                <div className="row">
                    <p className="text-left">
                        A linked list is a linear collection of data elements, whose order is not given by their physical placement 
                        in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes
                        which together represent a sequence. In its most basic form, each node contains: data, and a reference 
                        (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or 
                        removal of elements from any position in the sequence during iteration. More complex variants add additional
                        links, allowing more efficient insertion or removal of nodes at arbitrary positions.
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
                                <th scope="row">Singly-Linked list Access ( Average )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Singly-Linked list Search ( Average )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">ISingly-Linked list ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Singly-Linked list Deletion ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Singly-Linked list Access ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Singly-Linked list Search ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Singly-Linked list Insertion ( Worst )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Singly-Linked list Deletion ( Worst )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Doubly-Linked list Access ( Average )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Doubly-Linked list Search ( Average )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Doubly-Linked list ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Doubly-Linked list Deletion ( Average )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Doubly-Linked list Access ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Singly-Linked list Search ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Doubly-Linked list Insertion ( Worst )</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Doubly-Linked list Deletion ( Worst )</th>
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

export default MainLinkedList;