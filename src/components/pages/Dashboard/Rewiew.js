import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../scss/styleCarusel.css'
const Rewiew = () => {
    const responsive = {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 3 },
    };
    const respons = {
        0: { items: 1 },
        576: { items: 1 },
        992: { items: 1 },
        1200: { items: 1 },
    };
    const items = [
        <div className="items">
            <div className="bootstrap-media card p-4">
                <div className="media mb-4 align-items-center">
                    <img className="mr-3 img-fluid rounded-xl" width={94} src="./images/dish/pic1.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                        <small className="mb-0 text-primary">MAIN COURSE</small>
                    </div>
                </div>
                <p className="fs-18 text-black mb-4">A very fine addition to the not over plentiful supply of good restaurants in this part of west London.</p>
                <div className="reviewer-box">
                    <div className="media align-items-center">
                        <img className="mr-3 img-fluid rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                        <div className="media-body">
                            <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                            <small className="mb-0 text-light">Head Marketing</small>
                        </div>
                        <div className="star-review">
                            <i className="fa fa-star text-orange" />
                            <span className="ml-2">4.2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="items">
            <div className="bootstrap-media card p-4">
                <div className="media mb-4 align-items-center">
                    <img className="mr-3 img-fluid rounded-xl" width={94} src="./images/dish/pic2.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-3 text-black">Chicken curry special with cucumber</h5>
                        <small className="mb-0 text-primary">MAIN COURSE</small>
                    </div>
                </div>
                <p className="fs-18 text-black mb-4">Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular</p>
                <div className="reviewer-box">
                    <div className="media align-items-center">
                        <img className="mr-3 img-fluid rounded" width={55} src="./images/avatar/2.jpg" alt="DexignZone" />
                        <div className="media-body">
                            <h4 className="mt-0 mb-1 text-white">Jubaedah</h4>
                            <small className="mb-0 text-light">Food Vlogger</small>
                        </div>
                        <div className="star-review">
                            <i className="fa fa-star text-orange" />
                            <span className="ml-2">5.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="items">
            <div className="bootstrap-media card p-4">
                <div className="media mb-4 align-items-center">
                    <img className="mr-3 img-fluid rounded-xl" width={94} src="./images/dish/pic3.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                        <small className="mb-0 text-primary">MAIN COURSE</small>
                    </div>
                </div>
                <p className="fs-18 text-black mb-4">A very fine addition to the not over plentiful supply of good restaurants in this part of west London.</p>
                <div className="reviewer-box">
                    <div className="media align-items-center">
                        <img className="mr-3 img-fluid rounded" width={55} src="./images/avatar/3.jpg" alt="DexignZone" />
                        <div className="media-body">
                            <h4 className="mt-0 mb-1 text-white">Steve Henry</h4>
                            <small className="mb-0 text-light">Internship Students</small>
                        </div>
                        <div className="star-review">
                            <i className="fa fa-star text-orange" />
                            <span className="ml-2">3.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="items">
            <div className="bootstrap-media card p-4">
                <div className="media mb-4 align-items-center">
                    <img className="mr-3 img-fluid rounded-xl" width={94} src="./images/dish/pic4.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-3 text-black">Meidum Spicy Spagethi Italiano</h5>
                        <small className="mb-0 text-primary">MAIN COURSE</small>
                    </div>
                </div>
                <p className="fs-18 text-black mb-4">A very fine addition to the not over plentiful supply of good restaurants in this part of west London.</p>
                <div className="reviewer-box">
                    <div className="media align-items-center">
                        <img className="mr-3 img-fluid rounded" width={55} src="./images/avatar/4.jpg" alt="DexignZone" />
                        <div className="media-body">
                            <h4 className="mt-0 mb-1 text-white">Willy Wonca</h4>
                            <small className="mb-0 text-light">Sales Marketing</small>
                        </div>
                        <div className="star-review">
                            <i className="fa fa-star text-orange" />
                            <span className="ml-2">4.2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="items">
            <div className="bootstrap-media card p-4">
                <div className="media mb-4 align-items-center">
                    <img className="mr-3 img-fluid rounded-xl" width={94} src="./images/dish/pic5.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                        <small className="mb-0 text-primary">MAIN COURSE</small>
                    </div>
                </div>
                <p className="fs-18 text-black mb-4">A very fine addition to the not over plentiful supply of good restaurants in this part of west London.</p>
                <div className="reviewer-box">
                    <div className="media align-items-center">
                        <img className="mr-3 img-fluid rounded" width={55} src="./images/avatar/5.jpg" alt="DexignZone" />
                        <div className="media-body">
                            <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                            <small className="mb-0 text-light">Head Marketing</small>
                        </div>
                        <div className="star-review">
                            <i className="fa fa-star text-orange" />
                            <span className="ml-2">4.2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
    const item = [
        <div className="items">
            <div className="text-white">
                <div className="media align-items-center mb-3">
                    <img className="mr-3 img-fluid rounded-circle" width={50} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h4 className="mt-0 mb-1 text-white">James Kowalski</h4>
                        <small className="mb-0 text-light">Head Marketing</small>
                    </div>
                </div>
                <p className="mb-3">This was not just great cooking but exceptional cooking using only the best ingredients.</p>
                <p className="mb-3">Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular</p>
                <ul className="list-inline newest-tag">
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Excelent</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Good Services</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Recomended</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Satisfying</a></li>
                </ul>
            </div>
        </div>,
        <div className="items">
            <div className="text-white">
                <div className="media align-items-center mb-3">
                    <img className="mr-3 img-fluid rounded-circle" width={50} src="./images/avatar/2.jpg" alt="DexignZone" />
                    <div className="media-body">
                        <h4 className="mt-0 mb-1 text-white">James Kowalski</h4>
                        <small className="mb-0 text-light">Head Marketing</small>
                    </div>
                </div>
                <p className="mb-3">This was not just great cooking but exceptional cooking using only the best ingredients.</p>
                <p className="mb-3">Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular</p>
                <ul className="list-inline newest-tag">
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Excelent</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Good Services</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Recomended</a></li>
                    <li><a href="javascript:void(0);" className="badge badge-rounded badge-secondary mb-1">Satisfying</a></li>
                </ul>
            </div>
        </div>
    ];
    return (
        <div>

            <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
                <div className="mr-auto d-none d-lg-block">
                    <h2 className="text-black font-w600 mb-1">Reviews</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)" className="text-primary">Dashboard</a></li>
                        <li className="breadcrumb-item active"><a href="javascript:void(0)">Customer Reviews</a></li>
                    </ol>
                </div>
                <div className="dropdown custom-dropdown">
                    <div className="btn btn-sm btn-primary light d-flex align-items-center svg-btn" data-toggle="dropdown">
                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z" fill="#2F4CDD" /></g></svg>
                        <div className="text-left ml-3">
                            <span className="d-block fs-16">Filter Periode</span>
                            <small className="d-block fs-13">4 June 2020 - 4 July 2020</small>
                        </div>
                        <i className="fa fa-angle-down scale5 ml-3" />
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">4 June 2020 - 4 July 2020</a>
                        <a className="dropdown-item" href="#">5 july 2020 - 4 Aug 2020</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy='alternate'
                    autoPlay={true}
                    autoPlayInterval={800}
                    disableDotsControls={true}
                    disableButtonsControls={true}
                    infinite={true}
                    autoPlayStrategy='defoult'
                    animationDuration={8000}
                />

                <div className="col-lg-8 col-xl-9">
                    <div className="card">
                        <div className="card-header border-0 pb-0 d-sm-flex d-block">
                            <div>
                                <h4 className="card-title mb-1 fs-28 font-w600">Recent Review</h4>
                                <p className="mb-0">Here is customer review about your restaurant </p>
                            </div>
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                                    Latest
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Latest</a>
                                    <a className="dropdown-item" href="#">OLD</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Glee Smiley</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                        <li className="ml-auto"><span className="badge badge-rounded badge-warning light font-w500">Excelent</span></li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">4.5</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/2.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                        <li className="ml-auto">
                                            <span className="badge badge-rounded badge-warning light font-w500">Recomended</span>
                                            <span className="badge badge-rounded badge-warning light font-w500 ml-1">Great</span>
                                        </li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">4.8</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/3.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Dicky Sitompul</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                        <li className="ml-auto"><span className="badge badge-rounded badge-warning light font-w500">Excelent</span></li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">4.0</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/4.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Dracule Mihawk</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">2.0</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/5.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                        <li className="ml-auto">
                                            <span className="badge badge-rounded badge-warning light font-w500">Delcious</span>
                                            <span className="badge badge-rounded badge-warning light font-w500 ml-1">Excelent</span>
                                            <span className="badge badge-rounded badge-warning light font-w500 ml-1">Good Services</span>
                                        </li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">3.0</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                            <div className="media review-box">
                                <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                                <div className="media-body">
                                    <h4 className="mt-0 mb-0 text-black">Sanji Lee</h4>
                                    <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                                        <li className="mr-3"><small>Head Marketing</small></li>
                                        <li className="mr-3"><small>24 June 2020</small></li>
                                        <li className="ml-auto"><span className="badge badge-rounded badge-warning light font-w500">Excelent</span></li>
                                    </ul>
                                    <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                                </div>
                                <div className="media-footer align-self-center">
                                    <div className="star-review text-md-center">
                                        <span className="text-secondary">1.0</span>
                                        <i className="fa fa-star text-primary" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                        <i className="fa fa-star text-gray" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-0 text-center py-4">
                            <a href="#" className="btn btn-primary">Read More <i className="fa fa-angle-double-down scale2 ml-2" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="card bg-secondary h-auto sticky">
                        <div className="card-header border-0 pb-0 d-sm-flex d-block">
                            <div>
                                <h3 className="card-title mb-1 text-white fs-28 font-w600">Newest</h3>
                            </div>
                            <div className="testimonial-one-navigation owl-clienr-btn">
                                <span id="next-slide" className="prev alice-carousel__prev-btn"><i className="fa fa-chevron-left" /></span>
                                <span id="prev-slide" className="next alice-carousel__next-btn"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <AliceCarousel
                                mouseTracking
                                items={item}
                                responsive={respons}
                                controlsStrategy='alternate'
                                autoPlay={true}
                                autoPlayInterval={800}
                                disableDotsControls={true}
                                disableButtonsControls={true}
                                infinite={true}
                                autoPlayStrategy='defoult'
                                animationDuration={8000}
                            />
                        </div>
                        <div className="card-footer border-0 text-center py-4 bg-warning rounded-xl">
                            <div className="star-review text-md-center d-flex justify-content-center align-items-center">
                                <span className="text-white fs-32 font-w600 mr-3">4.0</span>
                                <i className="fa fa-star fs-22 mx-1 text-white" />
                                <i className="fa fa-star fs-22 mx-1 text-white" />
                                <i className="fa fa-star fs-22 mx-1 text-white" />
                                <i className="fa fa-star fs-22 mx-1 text-white" />
                                <i className="fa fa-star fs-22 mx-1 text-white op3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Rewiew;