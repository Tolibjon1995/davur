import React from 'react';

const Analitics = () => {
    return (
        <div>
            <div>
                <div className="form-head d-flex mb-3 align-items-start">
                    <div className="mr-auto d-none d-lg-block">
                        <h2 className="text-black font-w600 mb-0">Analytics</h2>
                        <p className="mb-0">Here is your restaurant summary with graph view</p>
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
                    <div className="col-xl-6 col-xxl-6 col-lg-12 col-lg-9 col-md-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                        <div>
                                            <h4 className="card-title mb-1">Chart Orders</h4>
                                            <small className="mb-0">Lorem ipsum dolor sit amet, consectetur</small>
                                        </div>
                                        <div className="dropdown mt-3 mt-sm-0">
                                            <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                                                Weekly
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Daily</a>
                                                <a className="dropdown-item" href="#">Weekly</a>
                                                <a className="dropdown-item" href="#">Monthly</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body revenue-chart px-3">
                                        <div className="d-flex align-items-end pl-3">
                                            <div className="mr-4">
                                                <h3 className="font-w600 mb-0"><img src="images/svg/ic_stat3.svg" height={22} width={22} className="mr-2 mb-1" alt />
                                                    <span className="counter">257</span>k
                                                </h3>
                                                <small className="text-dark fs-14">Total Sales</small>
                                            </div>
                                            <div>
                                                <h3 className="font-w600 mb-0"><img src="images/svg/ic_stat3.svg" height={22} width={22} className="mr-2 mb-1" alt /><span className="counter">1,245</span></h3>
                                                <small className="text-dark fs-14">Avg. Sales per day</small>
                                            </div>
                                        </div>
                                        <div id="chartBar" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                        <div>
                                            <h4 className="card-title mb-1">Most Favorites Items</h4>
                                            <small className="mb-0">Lorem ipsum dolor sit amet, consectetur</small>
                                        </div>
                                        <div className="card-action card-tabs">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#monthly1" role="tab">
                                                        Monthly
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#weekly1" role="tab">
                                                        Weekly
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#today1" role="tab">
                                                        Today
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body tab-content pb-0">
                                        <div className="tab-pane fade show active" id="monthly1">
                                            <div className="row">
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic5.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic4.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic3.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic2.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic1.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic5.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="weekly1">
                                            <div className="row">
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic5.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic4.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic3.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic2.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="today1">
                                            <div className="row">
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic4.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                                                    <div className="media mb-4">
                                                        <img src="./images/dish/pic2.jpg" style={{ width: '100%' }} className="rounded" alt />
                                                    </div>
                                                    <div className="info">
                                                        <h5 className="text-black mb-3">Medium Spicy Pizza with Kemangi Leaf</h5>
                                                        <div className="star-review fs-14 mb-3">
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-orange" />
                                                            <i className="fa fa-star text-gray" />
                                                            <i className="fa fa-star text-gray" />
                                                            <span className="ml-3 text-dark">451 reviews</span>
                                                        </div>
                                                        <a href="#" className="btn btn-primary light btn-sm btn-rounded px-4"><i className="fa fa-heart-o mr-2 scale5 " /> <strong>256k</strong> Like it</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer border-0 pt-0 text-center">
                                        <a href="#" className="btn-link">View more <i className="fa fa-angle-down ml-2 scale-2" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-6 col-lg-12  col-lg-9 col-md-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                        <div>
                                            <h4 className="card-title mb-1">Trending Items</h4>
                                            <small className="mb-0">Lorem ipsum dolor sit amet, consectetur</small>
                                        </div>
                                        <div className="dropdown mt-3 mt-sm-0">
                                            <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                                                Weekly
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Daily</a>
                                                <a className="dropdown-item" href="#">Weekly</a>
                                                <a className="dropdown-item" href="#">Monthly</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 pt-3">
                                        <div className="media items-list-1">
                                            <span className="number col-1 px-0 align-self-center">#1</span>
                                            <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic1.jpg" alt="DexignZone" />
                                            <div className="media-body col-sm-4 col-6 col-xxl-6 px-0">
                                                <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                                                <small className="text-primary font-w500"><strong className="text-secondary mr-2">$12.56</strong> MAIN COURSE</small>
                                            </div>
                                            <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                                                <div className="mr-3">
                                                    <span className="peity-success" data-style="width:100%;">0,2,1,4</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0 font-w600 text-black">524</h3>
                                                    <span className="fs-14">Sales (12%)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media items-list-1">
                                            <span className="number col-1 px-0 align-self-center">#2</span>
                                            <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic2.jpg" alt="DexignZone" />
                                            <div className="media-body col-sm-4 col-6 col-xxl-6 px-0">
                                                <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                                                <small className="text-primary font-w500"><strong className="text-secondary mr-2">$12.56</strong> MAIN COURSE</small>
                                            </div>
                                            <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                                                <div className="mr-3">
                                                    <span className="peity-danger" data-style="width:100%;">4,1,2,0</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0 font-w600 text-black">215</h3>
                                                    <span className="fs-14">Sales (12%)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media items-list-1">
                                            <span className="number col-1 px-0 align-self-center">#3</span>
                                            <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic3.jpg" alt="DexignZone" />
                                            <div className="media-body col-sm-4 col-6 col-xxl-6 px-0">
                                                <h5 className="mt-0 mb-3 text-black">Chicken curry special with cucumber</h5>
                                                <small className="text-primary font-w500"><strong className="text-secondary mr-2">$12.56</strong> MAIN COURSE</small>
                                            </div>
                                            <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                                                <div className="mr-3">
                                                    <span className="peity-success" data-style="width:100%;">0,2,1,4</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0 font-w600 text-black">524</h3>
                                                    <span className="fs-14">Sales (12%)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media items-list-1">
                                            <span className="number col-1 px-0 align-self-center">#4</span>
                                            <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic4.jpg" alt="DexignZone" />
                                            <div className="media-body col-sm-4 col-6 col-xxl-6 px-0">
                                                <h5 className="mt-0 mb-3 text-black">Watermelon juice with ice</h5>
                                                <small className="text-primary font-w500"><strong className="text-secondary mr-2">$12.56</strong> MAIN COURSE</small>
                                            </div>
                                            <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                                                <div className="mr-3">
                                                    <span className="peity-success" data-style="width:100%;">0,2,1,4</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0 font-w600 text-black">76</h3>
                                                    <span className="fs-14">Sales (12%)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media items-list-1">
                                            <span className="number col-1 px-0 align-self-center">#5</span>
                                            <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic5.jpg" alt="DexignZone" />
                                            <div className="media-body col-sm-4 col-6 col-xxl-6 px-0">
                                                <h5 className="mt-0 mb-3 text-black">Tuna soup spinach with himalaya salt</h5>
                                                <small className="text-primary font-w500"><strong className="text-secondary mr-2">$12.56</strong> MAIN COURSE</small>
                                            </div>
                                            <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                                                <div className="mr-3">
                                                    <span className="peity-danger" data-style="width:100%;">4,1,2,0</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0 font-w600 text-black">180</h3>
                                                    <span className="fs-14">Sales (12%)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                        <div>
                                            <h4 className="card-title mb-1">Most Selling Items</h4>
                                            <small className="mb-0">Lorem ipsum dolor sit amet, consectetur</small>
                                        </div>
                                        <div className="card-action card-tabs mt-3 mt-sm-0">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#monthly" role="tab">
                                                        Monthly
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#weekly" role="tab">
                                                        Weekly
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#today" role="tab">
                                                        Today
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body tab-content">
                                        <div className="tab-pane fade show active" id="monthly">
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic5.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">SPAGETHI</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$12.56</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic4.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Pizza Meal for Kids (Small size)</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$5.67</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic3.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$11.21</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic2.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$8.15</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic1.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$5.67</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="weekly">
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic3.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$11.21</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic2.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$8.15</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic1.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$5.67</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="today">
                                            <div className="media mb-4 items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic2.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$8.15</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media items-list-2">
                                                <img className="img-fluid rounded mr-3" width={85} src="./images/dish/pic1.jpg" alt="DexignZone" />
                                                <div className="media-body col-6 px-0">
                                                    <h5 className="mt-0 mb-1 text-black">Meidum Spicy Spagethi Italiano</h5>
                                                    <small className="text-primary font-w500 mb-3">MAIN COURSE</small>
                                                    <span className="text-secondary mr-2 fo" />
                                                    <ul className="fs-14 list-inline">
                                                        <li className="mr-3">Serves for 4 Person</li>
                                                        <li>24mins</li>
                                                    </ul>
                                                </div>
                                                <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                                                    <h3 className="mb-0 font-w600 text-secondary">$5.67</h3>
                                                    <div className="dropdown ml-3 ">
                                                        <button type="button" className="btn btn-secondary sharp tp-btn-light " data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer border-0 pt-0 text-center">
                                        <a href="#" className="btn-link">View more <i className="fa fa-angle-down ml-2 scale-2" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Analitics;