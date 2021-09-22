import React from 'react';
import {Link} from 'react-router-dom'

const Inbox = () => {
    return (
        <div>
            <div className="row page-titles mx-0">
                <div className="col-sm-6 p-md-0">
                    <div className="welcome-text">
                        <h4>Hi, welcome back!</h4>
                        <span>Email</span>
                    </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Email</a></li>
                        <li className="breadcrumb-item active"><a href="javascript:void(0)">Inbox</a></li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="email-left-box px-0 mb-3">
                                <div className="p-0">
                                    <a href="email-compose.html" className="btn btn-primary btn-block">Compose</a>
                                </div>
                                <div className="mail-list mt-4">
                                    <a href="email-inbox.html" className="list-group-item active"><i className="fa fa-inbox font-18 align-middle mr-2" /> Inbox <span className="badge badge-primary badge-sm float-right">198</span> </a>
                                    <a href="javascript:void()" className="list-group-item"><i className="fa fa-paper-plane font-18 align-middle mr-2" />Sent</a> <a href="javascript:void()" className="list-group-item"><i className="fa fa-star font-18 align-middle mr-2" />Important <span className="badge badge-danger text-white badge-sm float-right">47</span>
                                    </a>
                                    <a href="javascript:void()" className="list-group-item"><i className="mdi mdi-file-document-box font-18 align-middle mr-2" />Draft</a><a href="javascript:void()" className="list-group-item"><i className="fa fa-trash font-18 align-middle mr-2" />Trash</a>
                                </div>
                                <div className="intro-title d-flex justify-content-between">
                                    <h5>Categories</h5>
                                    <i className="icon-arrow-down" aria-hidden="true" />
                                </div>
                                <div className="mail-list mt-4">
                                    <Link to="/email/inbox" className="list-group-item"><span className="icon-warning"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Work </Link>
                                    <Link to="/email/inbox" className="list-group-item"><span className="icon-primary"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Private </Link>
                                    <Link to="/email/inbox" className="list-group-item"><span className="icon-danger"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Support </Link>
                                    <Link to="/email/inbox" className="list-group-item"><span className="icon-dpink"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Social </Link>
                                </div>
                            </div>
                            <div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
                                <div role="toolbar" className="toolbar ml-1 ml-sm-0">
                                    <div className="btn-group mb-1">
                                        <div className="custom-control custom-checkbox pl-2">
                                            <input type="checkbox" className="custom-control-input" id="checkbox1" />
                                            <label className="custom-control-label" htmlFor="checkbox1" />
                                        </div>
                                    </div>
                                    <div className="btn-group mb-1">
                                        <button className="btn btn-primary light px-3" type="button"><i className="ti-reload" />
                                        </button>
                                    </div>
                                    <div className="btn-group mb-1">
                                        <button aria-expanded="false" data-toggle="dropdown" className="btn btn-primary px-3 light dropdown-toggle" type="button">More <span className="caret" />
                                        </button>
                                        <div className="dropdown-menu"> <a href="javascript: void(0);" className="dropdown-item">Mark as Unread</a> <a href="javascript: void(0);" className="dropdown-item">Add to Tasks</a>
                                            <a href="javascript: void(0);" className="dropdown-item">Add Star</a> <a href="javascript: void(0);" className="dropdown-item">Mute</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-list mt-3">
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox2" />
                                                        <label className="custom-control-label" htmlFor="checkbox2" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox3" />
                                                        <label className="custom-control-label" htmlFor="checkbox3" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox4" />
                                                        <label className="custom-control-label" htmlFor="checkbox4" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox5" />
                                                        <label className="custom-control-label" htmlFor="checkbox5" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox6" />
                                                        <label className="custom-control-label" htmlFor="checkbox6" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox7" />
                                                        <label className="custom-control-label" htmlFor="checkbox7" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox8" />
                                                        <label className="custom-control-label" htmlFor="checkbox8" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message unread">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox9" />
                                                        <label className="custom-control-label" htmlFor="checkbox9" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message unread">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox10" />
                                                        <label className="custom-control-label" htmlFor="checkbox10" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox11" />
                                                        <label className="custom-control-label" htmlFor="checkbox11" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox12" />
                                                        <label className="custom-control-label" htmlFor="checkbox12" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox13" />
                                                        <label className="custom-control-label" htmlFor="checkbox13" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox14" />
                                                        <label className="custom-control-label" htmlFor="checkbox14" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message unread">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox15" />
                                                        <label className="custom-control-label" htmlFor="checkbox15" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox16" />
                                                        <label className="custom-control-label" htmlFor="checkbox16" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox17" />
                                                        <label className="custom-control-label" htmlFor="checkbox17" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox18" />
                                                        <label className="custom-control-label" htmlFor="checkbox18" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox19" />
                                                        <label className="custom-control-label" htmlFor="checkbox19" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message unread">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox20" />
                                                        <label className="custom-control-label" htmlFor="checkbox20" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div>
                                            <div className="d-flex message-single">
                                                <div className="pl-1 align-self-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="checkbox21" />
                                                        <label className="custom-control-label" htmlFor="checkbox21" />
                                                    </div>
                                                </div>
                                                <div className="ml-2">
                                                    <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                            <a href="email-read.html" className="col-mail col-mail-2">
                                                <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                                                <div className="date">11:49 am</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* panel */}
                                <div className="row mt-4">
                                    <div className="col-12 pl-3">
                                        <nav>
                                            <ul className="pagination pagination-gutter pagination-primary pagination-sm no-bg">
                                                <li className="page-item page-indicator"><a className="page-link" href="javascript:void()"><i className="la la-angle-left" /></a></li>
                                                <li className="page-item "><a className="page-link" href="javascript:void()">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="javascript:void()">2</a></li>
                                                <li className="page-item"><a className="page-link" href="javascript:void()">3</a></li>
                                                <li className="page-item"><a className="page-link" href="javascript:void()">4</a></li>
                                                <li className="page-item page-indicator"><a className="page-link" href="javascript:void()"><i className="la la-angle-right" /></a></li>
                                            </ul>
                                        </nav>
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

export default Inbox;