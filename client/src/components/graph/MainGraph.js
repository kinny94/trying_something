import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainGraph extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/graph' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/graph/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                    <h2 className="text-center">Graph</h2>
                </div>
                <div className="row">
                    <p className="text-left">a graph is an abstract data type that is meant to implement the undirected graph and directed 
                    graph concepts from mathematics, specifically the field of graph theory.A graph data structure consists of a finite 
                    (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices 
                    for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines 
                    for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph. The 
                    vertices may be part of the graph structure, or may be external entities represented by integer indices or references.
                    </p>
                </div>
                <div className="row margin">
                    <h3>Complexities ( Considering Adjacency List )</h3>
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
                                <th scope="row">Add Vertex</th>
                                <td>O(1)</td>
                            </tr>
                            <tr>
                                <th scope="row">Add Edge</th>
                                <td>O(1)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Remove Vertex</th>
                                <td>O(|V| + |E|) </td>
                            </tr>
                            <tr>
                                <th scope="row">Deletion </th>
                                <td>Θ(n)</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Remove Edge</th>
                                <td>O(|E|) </td>
                            </tr>
                            <tr>
                                <th scope="row">Query</th>
                                <td>O(|V|)</td>
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

export default MainGraph;