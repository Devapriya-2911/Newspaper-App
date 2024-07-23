import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.kopykitab.com/blog/wp-content/uploads/2023/09/Newspaper.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.competitioncare.com/wp-content/uploads/2023/02/Newspaper-reading-for-UPSC.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://avadhnamaepaper.wordpress.com/wp-content/uploads/2019/01/reading-a-newspaper-ask-marilyn-ftr.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">.</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">.</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="alert alert-danger" role="alert">
                                    OFFERS ON MONTHLY SUBSCRIPTION!!!!!!!1
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">SIGN UP!!</h5>
                                                <p class="card-text">Click the link below to sign up hurry dont miss the offerrrrr</p>
                                                <a href="/add" class="btn btn-success">SIGN UP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">CUSTOMER DETAILS!!!</h5>
                                                <p class="card-text">Customer details reviews and more feel free to check it out</p>
                                                <a href="/view" class="btn btn-primary">CHECK IT OUT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home