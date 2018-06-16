import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Codebase</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={ '/' } className="nav-link">Codebase <span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ "/array" }>Array</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={ '/stack' } className="nav-link">Stack</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ '/queue' }>Queue</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ 'linkedlist' }>Linked List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ '/trees' }>Trees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to= { '/graphs' }>Graphs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ '/searching' }>Searching</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ '/sorting' }>Sorting</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

        )
    }
}

export default Header;