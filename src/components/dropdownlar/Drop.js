import React, { useState } from 'react';
import { Button, Popover } from 'reactstrap';

const Drop = (props) => {
    const [popoverO, setPopoverO] = useState(false);

    const toggle = () => setPopoverO(!popoverO);

    return (
        <div >

            
            <Popover  placement="bottom" isOpen={popoverO} target={props.popover} toggle={toggle}>
                <div className={`dropdown-menu dropdown-menu-right viz ${props.och === true ? 'show' : ''}`}>
                    <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: 380 }}>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2">
                                        <img alt="image" width={50} src="images/avatar/1.jpg" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2 media-info">
                                        KG
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Resport created successfully</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2 media-success">
                                        <i className="fa fa-home" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2">
                                        <img alt="image" width={50} src="images/avatar/1.jpg" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2 media-danger">
                                        KG
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Resport created successfully</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="media mr-2 media-primary">
                                        <i className="fa fa-home" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                        <small className="d-block">29 July 2020 - 02:26 PM</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right" /></a>
                </div>

            </Popover>
        </div>
    );
}

export default Drop;