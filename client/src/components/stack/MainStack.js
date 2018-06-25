import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MainStack extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/stack' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/stack/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Stack</h2>
                </div>
                <div className="row">
                    <p className="text-left"> 
                        A stack is an abstract data type that serves as a collection of elements, 
                        with two principal operations:
                        * Push, which adds an element to the collection, and
                        * Pop, which removes the most recently added element that was not yet removed.
                        The order in which elements come off a stack gives rise to its alternative name, LIFO 
                        (last in, first out). Additionally, a peek operation may give access to the top without modifying 
                        the stack.[1] The name "stack" for this type of structure comes from the analogy to a set of 
                        physical items stacked on top of each other, which makes it easy to take an item off the top of the
                        stack, while getting to an item deeper in the stack may require taking off multiple other items
                         first.
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
        );
    }
}

export default MainStack;