import React, { Component } from 'react';

class Main extends Component{

    render(){

        const style = {
            "height": "250px", 
            "backgroundImage": "url('https://cdn.pixabay.com/photo/2016/11/23/14/45/blur-1853305__480.jpg')"
        }

        const bottom = {
            "paddingTop": "30%"
        }

        return(

            <div className="cards-margin">
                <div className="row"> 
                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Arrays</h2>
                                <p className="card-text bottom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Stacks</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h5 className="card-title">Queue</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="row cards-margin"> 
                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Linked List</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Trees</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Graphs</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="row cards-margin"> 
                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Searching</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Sorting</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-banner  overlay-grad" style={ style }>
                            <div className="card-body text-white">
                                <h2 className="card-title">Miscellaneous</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>    
                </div>

            </div>
        )
    }
}

export default Main;