import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            <div className="row page-titles mx-0">
                <div className="col-sm-6 p-md-0">
                    <div className="welcome-text">
                        <h4>Hi, welcome back!</h4>
                        <p className="mb-0">Your business dashboard template</p>
                    </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
                        <li className="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-3 ">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="first">
                                            <img className="img-fluid" src="/images/product/1.jpg" alt />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="second">
                                            <img className="img-fluid" src="/images/product/2.jpg" alt />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="third">
                                            <img className="img-fluid" src="/images/product/3.jpg" alt />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="for">
                                            <img className="img-fluid" src="/images/product/4.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                                        {/* Nav tabs */}
                                        <ul className="nav slide-item-list mt-3" role="tablist">
                                            <li role="presentation" className="show">
                                                <a href="#first" role="tab" data-toggle="tab">
                                                    <img className="/img-fluid" src="/images/tab/1.jpg" alt width={50} />
                                                </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#second" role="tab" data-toggle="tab"><img className="/img-fluid" src="/images/tab/2.jpg" alt width={50} /></a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#third" role="tab" data-toggle="tab"><img className="/img-fluid" src="/images/tab/3.jpg" alt width={50} /></a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#for" role="tab" data-toggle="tab"><img className="/img-fluid" src="/images/tab/4.jpg" alt width={50} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Tab slider End*/}
                                <div className="col-xl-9 col-sm-12">
                                    <div className="product-detail-content">
                                        {/*Product details*/}
                                        <div className="new-arrival-content pr">
                                            <h4>Solid Women's V-neck Dark T-Shirt</h4>
                                            <div className="star-rating mb-2">
                                                <ul className="produtct-detail-tag">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                                <span className="review-text">(34 reviews) / </span><a className="product-review" href="#">Write a review?</a>
                                            </div>
                                            <p className="price">$320.00</p>
                                            <p>Availability: <span className="item"> In stock <i className="fa fa-shopping-basket" /></span>
                                            </p>
                                            <p>Product code: <span className="item">0405689</span> </p>
                                            <p>Brand: <span className="item">Lee</span></p>
                                            <p>Product tags:&nbsp;&nbsp;
                                                <span className="badge badge-success light">bags</span>
                                                <span className="badge badge-success light">clothes</span>
                                                <span className="badge badge-success light">shoes</span>
                                                <span className="badge badge-success light">dresses</span>
                                            </p>
                                            <p className="text-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                            <div className="filtaring-area my-3">
                                                <div className="size-filter">
                                                    <h4 className="m-b-15">Select size</h4>
                                                    <ul>
                                                        <li className="btn btn-primary light sharp">x</li>
                                                        <li className="btn btn-primary light sharp">m</li>
                                                        <li className="btn btn-primary light sharp">l</li>
                                                        <li className="btn btn-primary light sharp">xs</li>
                                                        <li className="btn btn-primary light sharp">xl</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*Quantity start*/}
                                            <div className="col-2 px-0">
                                                <input type="number" name="num" className="form-control input-btn input-number" defaultValue={1} />
                                            </div>
                                            {/*Quanatity End*/}
                                            <div className="shopping-cart mt-3">
                                                <a className="btn btn-primary btn-lg" href="#"><i className="fa fa-shopping-basket mr-2" />Add
                                                    to cart</a>
                                            </div>
                                        </div>
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

export default ProductDetails;