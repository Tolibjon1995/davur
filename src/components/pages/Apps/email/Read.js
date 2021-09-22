import React from 'react';

const Read = () => {
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
                        <li className="breadcrumb-item active"><a href="javascript:void(0)">Read</a></li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="email-left-box generic-width px-0 mb-5">
                                <div className="p-0">
                                    <a href="email-compose.html" className="btn btn-primary btn-block">Compose</a>
                                </div>
                                <div className="mail-list mt-4">
                                    <a href="email-inbox.html" className="list-group-item active"><i className="fa fa-inbox font-18 align-middle mr-2" /> Inbox <span className="badge badge-primary badge-sm float-right">198</span> </a>
                                    <a href="javascript:void()" className="list-group-item"><i className="fa fa-paper-plane font-18 align-middle mr-2" />Sent</a> <a href="javascript:void()" className="list-group-item"><i className="fa fa-star font-18 align-middle mr-2" />Important <span className="badge badge-danger badge-sm text-white float-right">47</span>
                                    </a>
                                    <a href="javascript:void()" className="list-group-item"><i className="mdi mdi-file-document-box font-18 align-middle mr-2" />Draft</a><a href="javascript:void()" className="list-group-item"><i className="fa fa-trash font-18 align-middle mr-2" />Trash</a>
                                </div>
                                <div className="intro-title d-flex justify-content-between">
                                    <h5>Categories</h5>
                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                </div>
                                <div className="mail-list mt-4">
                                    <a href="email-inbox.html" className="list-group-item"><span className="icon-warning"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Work </a>
                                    <a href="email-inbox.html" className="list-group-item"><span className="icon-primary"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Private </a>
                                    <a href="email-inbox.html" className="list-group-item"><span className="icon-success"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Support </a>
                                    <a href="email-inbox.html" className="list-group-item"><span className="icon-dpink"><i className="fa fa-circle" aria-hidden="true" /></span>
                                        Social </a>
                                </div>
                            </div>
                            <div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="right-box-padding">
                                            <div className="toolbar mb-4" role="toolbar">
                                                <div className="btn-group mb-1">
                                                    <button type="button" className="btn btn-primary light px-3"><i className="fa fa-archive" /></button>
                                                    <button type="button" className="btn btn-primary light px-3"><i className="fa fa-exclamation-circle" /></button>
                                                    <button type="button" className="btn btn-primary light px-3"><i className="fa fa-trash" /></button>
                                                </div>
                                                <div className="btn-group mb-1">
                                                    <button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
                                                        <i className="fa fa-folder" /> <b className="caret m-l-5" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript: void(0);">Social</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Promotions</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Updates</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Forums</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group mb-1">
                                                    <button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
                                                        <i className="fa fa-tag" /> <b className="caret m-l-5" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript: void(0);">Updates</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Social</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Promotions</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Forums</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group mb-1">
                                                    <button type="button" className="btn btn-primary light dropdown-toggle v" data-toggle="dropdown">More <span className="caret m-l-5" />
                                                    </button>
                                                    <div className="dropdown-menu"> <a className="dropdown-item" href="javascript: void(0);">Mark as Unread</a> <a className="dropdown-item" href="javascript: void(0);">Add to Tasks</a>
                                                        <a className="dropdown-item" href="javascript: void(0);">Add Star</a> <a className="dropdown-item" href="javascript: void(0);">Mute</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="read-content">
                                                <div className="media pt-3">
                                                    <img className="mr-2 rounded" width={50} alt="image" src="./images/avatar/1.jpg" />
                                                    <div className="media-body mr-2">
                                                        <h5 className="text-primary mb-0 mt-1">Ingredia Nutrisha</h5>
                                                        <p className="mb-0">20 May 2018</p>
                                                    </div>
                                                    <a href="javascript:void()" className="btn btn-primary px-3 light"><i className="fa fa-reply" /> </a>
                                                    <a href="javascript:void()" className="btn btn-primary px-3 light ml-2"><i className="fa fa-long-arrow-right" /> </a>
                                                    <a href="javascript:void()" className="btn btn-primary px-3 light ml-2"><i className="fa fa-trash" /></a>
                                                </div>
                                                <hr />
                                                <div className="media mb-2 mt-3">
                                                    <div className="media-body"><span className="pull-right">07:23 AM</span>
                                                        <h5 className="my-1 text-primary">A collection of textile samples lay spread</h5>
                                                        <p className="read-content-email">
                                                            To: Me, info@example.com</p>
                                                    </div>
                                                </div>
                                                <div className="read-content-body">
                                                    <h5 className="mb-4">Hi,Ingredia,</h5>
                                                    <p className="mb-2"><strong>Ingredia Nutrisha,</strong> A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</p>
                                                    <p className="mb-2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for
                                                        the far World of Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                                                    </p>
                                                    <p className="mb-2">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                                        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                                        rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,</p>
                                                    <h5 className="pt-3">Kind Regards</h5>
                                                    <p>Mr Smith</p>
                                                    <hr />
                                                </div>
                                                <div className="read-content-attachment">
                                                    <h6><i className="fa fa-download mb-2" /> Attachments
                                                        <span>(3)</span></h6>
                                                    <div className="row attachment">
                                                        <div className="col-auto">
                                                            <a href="javascript:void()" className="text-muted">My-Photo.png</a>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="javascript:void()" className="text-muted">My-File.docx</a>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="javascript:void()" className="text-muted">My-Resume.pdf</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="form-group pt-3">
                                                    <textarea name="write-email" id="write-email" cols={30} rows={5} className="form-control" placeholder="It's really an amazing.I want to know more about it..!" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-primary " type="button">Send</button>
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

export default Read;