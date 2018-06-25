import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainHashTable extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/hashtable' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/hashtable/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Hash Table</h2>
                </div>
                <div className="row">
                    <p className="text-left"> 
                        A hash table (hash map) is a data structure that implements an associative array abstract data type, 
                        a structure that can map keys to values. A hash table uses a hash function to compute an index into an 
                        array of buckets or slots, from which the desired value can be found. Ideally, the hash function will
                        assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, 
                        which might cause hash collisions where the hash function generates the same index for more than one
                        key. Such collisions must be accommodated in some way. In a well-dimensioned hash table, the average
                        cost (number of instructions) for each lookup is independent of the number of elements stored in the
                        table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, 
                        at (amortized ) constant average cost per operation. In many situations, hash tables turn out to 
                        be on average more efficient than search trees or any other table lookup structure.
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
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Average )</th>
                                <td>O(1)</td>
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
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <th scope="row">Search ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Insertion ( Worst )</th>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion ( Worst )</th>
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
        );
    }
}

export default MainHashTable;