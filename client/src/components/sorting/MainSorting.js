import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainSorting extends Component{

    constructor(){
        super();
        this.state = {
            problems: []
        }
    }
    
    componentDidMount(){  
        fetch( '/sorting' ).then(( data ) => {
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
                return <Link key={ problem }  to={ `/problem/sorting/${ problem }` } ><li className="list-group-item">{ problem }</li></Link>
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
                        A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most 
                        frequently used orders are numerical order and lexicographical order. Efficient sorting is important
                        for optimizing the efficiency of other algorithms (such as search and merge algorithms) which 
                        require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and 
                        for producing human-readable output. More formally, the output of any sorting algorithm must satisfy 
                        two conditions:
                        * The output is in nondecreasing order (each element is no smaller than the previous element 
                          according to the desired total order);
                        * The output is a permutation (a reordering, yet retaining all of the original elements) of the input.

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
                                <th scope="row">Bubble Sort</th>
                                <td>O(n)</td>
                                <td>O(n^2)</td>
                                <td>O(n^2)</td>
                            </tr>
                            <tr>
                            <th scope="row">Selection Sort</th>
                                <td>O(n^2)</td>
                                <td>O(n^2)</td>
                                <td>O(n^2)</td>   
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Insertion Sort</th>
                                <td>O(n)</td>
                                <td>O(n^2)</td>
                                <td>O(n^2)</td>
                            </tr>
                            <tr>
                            <th scope="row">Merge Sort</th>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>   
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Quick Sort</th>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>
                                <td>O(n^2)</td>
                            </tr>
                            <tr>
                            <th scope="row">Heap Sort</th>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>   
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Bucket Sort</th>
                                <td>O(n + k)</td>
                                <td>O(n + k)</td>
                                <td>O(n^2)</td>
                            </tr>
                            <tr>
                            <th scope="row">Radix Sort</th>
                                <td>O(nk)</td>
                                <td>O(nk)</td>
                                <td>O(nk)</td>   
                            </tr>
                            <tr className="table-active">
                                <th scope="row">Tim Sort</th>
                                <td>O(n)</td>
                                <td>O(nlogn)</td>
                                <td>O(nlogn)</td>
                            </tr>
                            <tr>
                            <th scope="row">Shell Sort</th>
                                <td>O(n)</td>
                                <td>O((nlog(n))^2)</td>
                                <td>O((nlog(n))^2)</td>   
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

export default MainSorting;