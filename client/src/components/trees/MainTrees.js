import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainTrees extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/tree' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/trees/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Array</h2>
                </div>
                <div className="row">
                    <p className="text-left">
                        A tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that 
                        simulates a hierarchical tree structure, with a root value and subtrees of children with a parent 
                        node, represented as a set of linked nodes. A tree data structure can be defined recursively 
                        (locally) as a collection of nodes (starting at a root node), where each node is a data structure 
                        consisting of a value, together with a list of references to nodes (the "children"), with the 
                        constraints that no reference is duplicated, and none points to the root.
                        Alternatively, a tree can be defined abstractly as a whole (globally) as an ordered tree, with a 
                        value assigned to each node. Both these perspectives are useful: while a tree can be analyzed 
                        mathematically as a whole, when actually represented as a data structure it is usually represented 
                        and worked with separately by node (rather than as a set of nodes and an adjacency list of edges 
                         between nodes, as one may represent a digraph, for instance). 
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
                                <th scope="col">Binary Search Tree</th>
                                <th scope="col">Cartesian Tree</th>
                                <th scope="col">Binary Tree</th>
                                <th scope="col">Red Black Tree</th>
                                <th scope="col">Splay Tree</th>
                                <th scope="col">AVL Tree</th>
                                <th scope="col">KD Tree</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <th scope="row">Access ( Average )</th>
                                <td>O(log(n))</td>
                                <td>N/A</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>N/A</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Search ( Average )</th>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Insertion ( Average )</th>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Deletion ( Average )</th>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Access ( Worst )</th>
                                <td>O(n)</td>
                                <td>N/A</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>N/A</td>
                                <td>O(log(n))</td>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Search ( Worst )</th>
                                <td>O(n)</td>
                                <td>O(n)</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Insertion ( Worst )</th>
                                <td>O(n)</td>
                                <td>O(n)</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Deletion ( Worst )</th>
                                <td>O(n)</td>
                                <td>O(n)</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(log(n))</td>
                                <td>O(n)</td>
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

export default MainTrees;