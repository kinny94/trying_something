import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component{

    render(){

        const style = {
            "height": "250px", 
            "background": "#4b8994"
        }

        const bottom = {
            "paddingTop": "30%"
        }

        return(

            <div className="cards-margin">
                <div className="row"> 
                    <div className="col-4">
                        <Link to={ '/array' } >
                            <div className="card-banner  overlay-grad" style={ style }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Arrays</h2>
                                    <p className="card-text bottom">An array data structure, or simply an array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                   

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/stacks' }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Stacks</h2>
                                    <p className="card-text">A stack is an abstract data type that serves as a collection of elements, with two principal operations:
                                        push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet remove.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/queue' }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Queue</h2>
                                    <p className="card-text">A queue is an abstract data type or collection in which the entities are kept in order and the principal operations on the collection are the addition of entities to the rear terminal position.</p>
                                </div>
                            </Link>
                        </div>
                    </div>    
                </div>

                <div className="row cards-margin"> 
                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/linkedlist' } >
                                <div className="card-body text-white">
                                    <h2 className="card-title">Linked List</h2>
                                    <p className="card-text">A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/trees' } >
                                <div className="card-body text-white">
                                    <h2 className="card-title">Tree</h2>
                                    <p>A tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.</p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/graphs' }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Graphs</h2>
                                    <p className="card-text">A graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics, specifically the field of graph theory.</p>
                                </div>
                            </Link>
                        </div>
                    </div>    
                </div>

                <div className="row cards-margin"> 
                    <div className="col-4">
                        <Link to={ '/searching'} >
                            <div className="card-banner  overlay-grad" style={ style }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Searching</h2>
                                    <p className="card-text">A search algorithm is any algorithm which solves the search problem, namely, to retrieve information stored within some data structure, or calculated in the search space of a problem domain.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/sorting' }>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Sorting</h2>
                                    <p className="card-text">A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the efficiency of other algorithms which require input data to be in sorted list.</p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <Link to={ '/miscellaneous' } >
                                <div className="card-body text-white">
                                    <h2 className="card-title">Miscellaneous</h2>
                                    <p className="card-text">Contains a number of miscellaneous questions that are usually asked during an ibnterview. This link may contain quewtions qhich uses more than one data structure or some complex problems.</p>
                                </div>
                            </Link>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Main;