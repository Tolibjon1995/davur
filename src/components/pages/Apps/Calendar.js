import React from 'react';

const Calendar = () => {
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
                        <li className="breadcrumb-item"><a href="javascript:void(0)">App</a></li>
                        <li className="breadcrumb-item active"><a href="javascript:void(0)">Calerdar</a></li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-intro-title">Calendar</h4>
                            <div className>
                                <div id="external-events" className="my-3">
                                    <p>Drag and drop your event or click in the calendar</p>
                                    <div className="external-event" data-class="bg-primary"><i className="fa fa-move" />New Theme Release</div>
                                    <div className="external-event" data-class="bg-success"><i className="fa fa-move" />My Event
                                    </div>
                                    <div className="external-event" data-class="bg-warning"><i className="fa fa-move" />Meet manager</div>
                                    <div className="external-event" data-class="bg-dark"><i className="fa fa-move" />Create New theme</div>
                                </div>
                                {/* checkbox */}
                                <div className="checkbox custom-control checkbox-event custom-checkbox pt-3 pb-5">
                                    <input type="checkbox" className="custom-control-input" id="drop-remove" />
                                    <label className="custom-control-label" htmlFor="drop-remove">Remove After Drop</label>
                                </div>
                                <a href="javascript:void()" data-toggle="modal" data-target="#add-category" className="btn btn-primary btn-event w-100">
                                    <span className="align-middle"><i className="ti-plus" /></span> Create New
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div className="card">
                        <div className="card-body">
                            <div id="calendar" className="app-fullcalendar" />
                        </div>
                    </div>
                </div>
                {/* BEGIN MODAL */}
                <div className="modal fade none-border" id="event-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><strong>Add New Event</strong></h4>
                            </div>
                            <div className="modal-body" />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success save-event waves-effect waves-light">Create
                                    event</button>
                                <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Add Category */}
                <div className="modal fade none-border" id="add-category">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><strong>Add a category</strong></h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Category Name</label>
                                            <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Category Color</label>
                                            <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="pink">Pink</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Calendar;