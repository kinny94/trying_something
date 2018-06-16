import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Codebase <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Array</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stack</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Queue</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Linked List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Graphs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Searching</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sorting</a>
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