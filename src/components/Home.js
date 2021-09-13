import React, { useState } from 'react';
import {useLocation} from 'react-router-dom'
const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    console.log(useLocation)
    return (
        <div>
            <div className="wrapper" id="tableofcontent">
                <nav id="nevbarleft" className={` ${isOpen === true ? 'active' : ''}`}>
                    <div className="side-nav full-height">
                        <div className="sidebar-header">
                            <h2>
                                <img src="images/logo.png" alt="logo" className="small-logo" />
                                <img src="images/logo-text.png" alt="logo" />
                            </h2>
                        </div>
                        <div className="nav-bar">
                            <ul className="list-unstyled content-scroll components navbar-nav nav" id="download-button">
                                <li className={`active `}>
                                <a href="#introduction">Introduction</a>
                                </li>
                                <li>
                                <a href="#installation">Installation</a>
                                </li>
                                <li>
                                <a href="#folder_directories">Folder Directories</a>
                                </li>
                                <li>
                                <a href="#plugins"> Plugins</a>
                                </li>
                                <li>
                                <a href="#html_structure">Html Structure</a>
                                </li>
                                <li>
                                <a href="#our_product">Our Products </a>
                                </li>
                                <li>
                                <a href="#custom_work">Custom Work Requirements </a>
                                </li>
                                <li>
                                <a href="#version_history">Version History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="content">
                    <nav className="navbar navbar-default top-nav-bar ">
                        <div className="container-fluid d-jb">
                            <div className="navbar-header">
                                <button type="button" onClick={toggle} id="sidebarCollapse" className={`navbar-btn ${isOpen === true ? 'active' : ''}`}>
                                    <span />
                                    <span />
                                    <span />
                                </button>
                            </div>
                            <div>
                                <a href="https://w3itexperts.ticksy.com/" target="bank" className="site-button support-button">Support</a>
                                <a href="javascript:void(0);" target="bank" className="site-button support-button">Buy Now</a>
                            </div>
                        </div>
                    </nav>
                    <section className="app-brief slide-banner">
                        <div className="container ">
                            <div className="section-header">
                                <h2>Davur - Bootstrap Admin Dashboard</h2>
                                <div className="colored-line" />
                                <div className="section-description">
                                    Davur - Restaurant Food Order Bootstrap Admin Dashboard
                                </div>
                                <div className="colored-line" />
                            </div>
                        </div>
                    </section>
                    <section className="app-brief" id="introduction">
                        <div className="container center-align">
                            <h1>Davur</h1>
                            <h3>Davur - Restaurant Food Order Bootstrap Admin Dashboard</h3>
                            <p>This documentation is last updated on 08 October 2020.</p>
                            <p>Thank you for purchasing this HTML template.</p>
                            <p><strong>If you like this template, Please support us by rating this template with 5 stars </strong> </p>
                        </div>
                    </section>
                    <hr />
                    <section className="app-brief" id="installation">
                        <div className="container left-align">
                            <div className="section-header">
                                <h2 className="dark-text">Installation - </h2>
                            </div>
                            <h4><strong>Overview</strong></h4>
                            <p>This section guides you to install all required software and libraries in order to fully utilize Davur for your proje</p>
                            <br />
                            <h4><strong>Install Node.js</strong></h4>
                            <p>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is required in order to run the Davur build tools. Download the latest version of Node and install it: <a href="https://nodejs.org/en/download/" >nodejs.org/en/download/</a> </p>
                            <br />
                            <h4><strong>Update your NPM</strong></h4>
                            <p>Npm is the package manager for JavaScript and the world’s largest software registry. Npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just downloaded Node.js (and therefore npm), you’ll probably need to update your npm.</p>
                            <pre className="">npm install --global npm@latest</pre>
                            <br />
                            <h4><strong>Install all dependencies</strong></h4>
                            <p>If you want to update or develop this theme, you need to install all dependencies by running: </p>
                            <pre className="">npm install</pre>
                        </div>
                    </section>
                    <hr />
                    <section className="app-brief" id="folder_directories">
                        <div className="container left-align">
                            <div className="section-header">
                                <h2 className="dark-text">Folder Directories - </h2>
                            </div>
                            <div id="dz_tree" className="tree-demo">
                                <ul>
                                    <li data-jstree="{ &quot;opened&quot; : true }">xhtml
                                        <ul>
                                            <li data-jstree="{ &quot;selected&quot; : false }">css</li>
                                            <li data-jstree="{ &quot;selected&quot; : false }">icons
                                                <ul>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">avasta</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">feather</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">flaticon</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">font-awesome-old</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">helveticaNeue</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">icomoon</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">line-awesome</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">material-design-iconic-font</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">simple-line-icons</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">themify-icons</li>
                                                </ul>
                                            </li>
                                            <li data-jstree="{ &quot;selected&quot; : false }">images
                                                <ul>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">avatar</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">big</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">browser</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">card</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">dish</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">product</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">profile</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">svg</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">tab</li>
                                                </ul>
                                            </li>
                                            <li data-jstree="{ &quot;selected&quot; : false }">js
                                                <ul>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">dashboard</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">plugins-init</li>
                                                </ul>
                                            </li>
                                            <li data-jstree="{ &quot;selected&quot; : false }">scss
                                                <ul>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">abstracts</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">base</li>
                                                    <li data-jstree="{ &quot;selected&quot; : false }">components
                                                        <ul>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">app</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">charts</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">forms</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">ico</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">map</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">tables</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">uc</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">ui</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">widget</li>
                                                        </ul>
                                                    </li>
                                                    <li data-jstree="{ &quot;selected&quot; : false }">layout
                                                        <ul>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">footer</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">header</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">rtl</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">sidebar</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">theme</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">typography</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">version-dark</li>
                                                            <li data-jstree="{ &quot;opened&quot; : true }">version-transparent</li>
                                                        </ul>
                                                    </li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">pages</li>
                                                </ul>
                                            </li>
                                            <li data-jstree="{ &quot;selected&quot; : false }">vendor
                                                <ul>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">amcharts</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">animate</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">aos</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">apexchart</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap4-notify</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-daterangepicker</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-material-datetimepicker</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-multiselect</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-select</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-tagsinput</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-touchspin</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">bootstrap-v4-rtl</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">chart.js</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">chartist</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">chartist-plugin-tooltips</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">clockpicker</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">datatables</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">dropzone</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">flot</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">flot-spline</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">fullcalendar</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">global</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">highlightjs</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-asColor</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-asColorPicker</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-asGradient</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-sparkline</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-steps</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jqueryui</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jquery-validation</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">jqvmap</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">metismenu</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">moment</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">morris</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">nestable2</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">nouislider</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">peity</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">perfect-scrollbar</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">pickadate</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">raphael</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">select2</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">summernote</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">svganimation</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">sweetalert2</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">toastr</li>
                                                    <li data-jstree="{ &quot;opened&quot; : true }">wnumb</li>
                                                </ul>
                                            </li>
                                            <li data-jstree="{ &quot;type&quot; : &quot;file&quot; }">index.html</li>
                                            <li data-jstree="{ &quot;type&quot; : &quot;file&quot; }">doctors.html</li>
                                            <li data-jstree="{ &quot;type&quot; : &quot;file&quot; }">doctors-details.html</li>
                                            <li data-jstree="{ &quot;type&quot; : &quot;file&quot; }">doctors-review.html</li>
                                            <li data-jstree="{ &quot;type&quot; : &quot;file&quot; }">.....</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="app-brief" id="plugins">
                        <div className="container left-align">
                            <div className="section-header">
                                <h2 className="dark-text">Plugins included - </h2>
                            </div>
                            <ul className="list-files">
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>amcharts</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.amcharts.com" target="_blank">https://www.amcharts.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>animate</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://animate.style" target="_blank">https://animate.style</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>aos</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://michalsnik.github.io/aos" target="_blank">https://michalsnik.github.io/aos</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>apexchart</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://apexcharts.com" target="_blank">https://apexcharts.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://getbootstrap.com" target="_blank">https://getbootstrap.com</a></p>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap4-notify</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="http://bootstrap-notify.remabledesigns.com" target="_blank">http://bootstrap-notify.remabledesigns.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-daterangepicker</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.daterangepicker.com" target="_blank">https://www.daterangepicker.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-material-datetimepicker</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://t00rk.github.io/bootstrap-material-datetimepicker" target="_blank">https://t00rk.github.io/bootstrap-material-datetimepicker</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-multiselect</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/davidstutz/bootstrap-multiselect" target="_blank">https://github.com/davidstutz/bootstrap-multiselect</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-select</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://developer.snapappointments.com/bootstrap-select" target="_blank">https://developer.snapappointments.com/bootstrap-select</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-tagsinput</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples" target="_blank">https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-touchspin</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.virtuosoft.eu/code/bootstrap-touchspin" target="_blank">https://www.virtuosoft.eu/code/bootstrap-touchspin</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>bootstrap-v4-rtl</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://bootstrap.rtlcss.com" target="_blank">https://bootstrap.rtlcss.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>chart.js</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.chartjs.org" target="_blank">https://www.chartjs.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>chartist</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://gionkunz.github.io/chartist-js" target="_blank">https://gionkunz.github.io/chartist-js</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>chartist-plugin-tooltips</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/tmmdata/chartist-plugin-tooltip" target="_blank">https://github.com/tmmdata/chartist-plugin-tooltip</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>clockpicker</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://weareoutman.github.io/clockpicker" target="_blank">https://weareoutman.github.io/clockpicker</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>datatables</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://datatables.net" target="_blank">https://datatables.net</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>dropzone</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.dropzonejs.com" target="_blank">https://www.dropzonejs.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>flot</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.flotcharts.org" target="_blank">https://www.flotcharts.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>flot-spline</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/miloszfalinski/jquery.flot.spline" target="_blank">https://github.com/miloszfalinski/jquery.flot.spline</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>fullcalendar</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://fullcalendar.io" target="_blank">https://fullcalendar.io</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>highlightjs</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://highlightjs.org" target="_blank">https://highlightjs.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://jquery.com" target="_blank">https://jquery.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-asColor</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/thecreation/jquery-asColor" target="_blank">https://github.com/thecreation/jquery-asColor</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-asColorPicker</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/thecreation/jquery-asColorPicker" target="_blank">https://github.com/thecreation/jquery-asColorPicker</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-asGradient</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://www.npmtrends.com/jquery-asGradient" target="_blank">https://www.npmtrends.com/jquery-asGradient</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-sparkline</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://plugins.jquery.com/sparkline" target="_blank">https://plugins.jquery.com/sparkline</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-steps</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="http://www.jquery-steps.com" target="_blank">http://www.jquery-steps.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jqueryui</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://jqueryui.com" target="_blank">https://jqueryui.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jquery-validation</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://jqueryvalidation.org" target="_blank">https://jqueryvalidation.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>jqvmap</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/10bestdesign/jqvmap" target="_blank">https://github.com/10bestdesign/jqvmap</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>metismenu</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/onokumus/metismenu" target="_blank">https://github.com/onokumus/metismenu</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>moment</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://momentjs.com" target="_blank">https://momentjs.com</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>morris</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://morrisjs.github.io/morris.js" target="_blank">https://morrisjs.github.io/morris.js</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>nestable2</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://ramonsmit.github.io/Nestable2" target="_blank">https://ramonsmit.github.io/Nestable2</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>nouislider</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://refreshless.com/nouislider" target="_blank">https://refreshless.com/nouislider</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>peity</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="http://benpickles.github.io/peity" target="_blank">http://benpickles.github.io/peity</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>perfect-scrollbar</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://plugins.jquery.com/perfect-scrollbar" target="_blank">https://plugins.jquery.com/perfect-scrollbar</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>pickadate</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://amsul.ca/pickadate.js" target="_blank">https://amsul.ca/pickadate.js</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>raphael</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/DmitryBaranovskiy/raphael" target="_blank">https://github.com/DmitryBaranovskiy/raphael</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>select2</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://select2.org" target="_blank">https://select2.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>summernote</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://summernote.org" target="_blank">https://summernote.org</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>svganimation</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/maxwellito/vivus" target="_blank">https://github.com/maxwellito/vivus</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>sweetalert2</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://sweetalert2.github.io" target="_blank">https://sweetalert2.github.io</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>toastr</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://github.com/CodeSeven/toastr" target="_blank">https://github.com/CodeSeven/toastr</a></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <p>wnumb</p>
                                        </div>
                                        <div className="col-12 col-sm-8">
                                            <p><a href="https://refreshless.com/wnumb" target="_blank">https://refreshless.com/wnumb</a></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <hr />
                    <section className="app-brief" id="html_structure">
                        <div className="container left-align">
                            <h3>HTML Structure</h3>
                            <img src="images/screenshot/1.png" alt={1} />
                            <div className="separator" />
                            <h3>Header</h3>
                            <img src="images/screenshot/2.png" alt={2} />
                            <div className="separator" />
                            <div className="separator" />
                            <h3>Footer Section</h3>
                            <img src="images/screenshot/4.png" alt={4} />
                            <div className="separator" />
                            <h3>Footer Essentials</h3>
                            <img src="images/screenshot/5.png" alt={5} />
                        </div>
                    </section>
                    <hr />
                    <section className="app-brief" id="our_product">
                        <div className="container left-align">
                            <div className="section-header">
                                <h2 className="dark-text">Our Products - </h2>
                            </div>
                            <div className="row other-theme">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/0zjyE">
                                            <img src="images/product/wp-beglide.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/0zjyE">
                                                    BeGlide: Corporate Business Consultant Agency WordPress Theme
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/NE0QP">
                                            <img src="images/product/wp-bheem.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/NE0QP">
                                                    Bheem : Construction WordPress Theme RTL Ready
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/WEdAZ">
                                            <img src="images/product/wp-beautyzone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/WEdAZ">
                                                    BeautyZone: Beauty Spa Salon WordPress Theme
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/6MAKK">
                                            <img src="images/product/wp-bucklin.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href=" ">
                                                    Bucklin - Creative Personal Blog WordPress Theme
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/oJLNY">
                                            <img src="images/product/archia.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/oJLNY">
                                                    Archia - Architecture and Interior Design RTL Ready Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/XEnGb">
                                            <img src="images/product/agency.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/XEnGb">
                                                    Agency | Creative Multipurpose Bootstrap 4 HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/3zZ9y">
                                            <img src="images/product/constructzilla .png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/3zZ9y">
                                                    ConstructZilla : Construction, Renovation &amp; Building HTML Template With RTL Ready
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/ZEKLg">
                                            <img src="images/product/cargozone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/ZEKLg">
                                                    CargoZone - Transport, Cargo, Logistics &amp; Business Multipurpose HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/JZVO7">
                                            <img src="images/product/yogazone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/JZVO7">
                                                    YogaZone: Yoga, Fitness &amp; Meditation Mobile Responsive Bootstrap Html Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/0zjxY">
                                            <img src="images/product/gardanzone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/0zjxY">
                                                    GardenZone | Agriculture, Gardening &amp; Landscaping Responsive HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/VdYZJ">
                                            <img src="images/product/construct.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/VdYZJ">
                                                    Construct : Construction, Building &amp; Maintenance Business Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/REnO2">
                                            <img src="images/product/butterfly.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/REnO2">
                                                    ButterFly : Spa, Beauty Salon &amp; Massage Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/bQNDm">
                                            <img src="images/product/curv.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/bQNDm">
                                                    CURV: One Page Multipurpose Parallax
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/zObPW">
                                            <img src="images/product/beautyzone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/zObPW">
                                                    BeautyZone: Beauty Spa Salon HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/3zZmk">
                                            <img src="images/product/sportszone.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/3zZmk">
                                                    SportsZone: Sports Club, New &amp; Game Magazine Mobile Responsive Bootstrap HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/3zZmk">
                                            <img src="images/product/medico.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/3zZmk">
                                                    MediCo.- Hospital and Doctor Clinic HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/g56Wg">
                                            <img src="images/product/jobboard.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/g56Wg">
                                                    Job Board: Job Portal | Job WebSite HTML Wireframe
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/1d1Nm">
                                            <img src="images/product/industry.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/1d1Nm">
                                                    Industry - Factory &amp; Industrial HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/qoKKy">
                                            <img src="images/product/lemars.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/qoKKy">
                                                    Le Mars - Minimal Personal Blog HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/A53RN">
                                            <img src="images/product/bizmap.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/A53RN">
                                                    BizMap - Business Directory Listing HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/EYb39">
                                            <img src="images/product/umang_academy.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/EYb39">
                                                    Umang Academy : Kindergarden, Kids Play School Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/EAeOQ">
                                            <img src="images/product/kelsey.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/EAeOQ">
                                                    Kelsey - Creative Personal Blog HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/xoqvR">
                                            <img src="images/product/bucklin.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/xoqvR">
                                                    Bucklin - Creative Personal Blog HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="product-port-bx">
                                        <a target="_blank" href="https://1.envato.market/WvZqM">
                                            <img src="images/product/smartclass.png" />
                                        </a>
                                        <div className="product-info">
                                            <h4 className="title">
                                                <a target="_blank" href="https://1.envato.market/WvZqM">
                                                    SmartClass | Education Agency Choching &amp; Tuition HTML Template
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="app-brief" id="custom_work" style={{ backgroundImage: 'url(images/bg1.png)', backgroundPosition: 'left center' }}>
                        <div className="container left-align">
                            <div className="col-md-12 text-center custom-info">
                                <h2 className="m-t0">Do You Need Help To Customization</h2>
                                <h3 className="text-primary">After Purchase A Template...</h3>
                                <h4>You Will Start Customizing According Your Requirement<br /> <span className="text-primary">BUT</span> What If You Don't Know</h4>
                                <h3 className="text-black">SOLUTION IS <span className="text-primary"><u>HIRE DexignZone</u></span></h3>
                                <div className="hire">
                                    <h4><span className="text-black">Hire Same Team For </span> <span className="text-primary">Quality Customization</span></h4>
                                    <ul>
                                        <li>We Will Customize Template According To Your Requirement</li>
                                        <li>We Will Upload On Server And Make Sure Your Website is Live</li>
                                    </ul>
                                    <div className="gmail-box">
                                        <a href="skype:rahulxarma?chat" className="gmail"><i className="fa fa-skype" />rahulxarma</a>
                                        <a target="_blank" href="dexignzones@gmail.com" className="gmail"><i className="fa fa-envelope" /> dexignzones@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="app-brief change-log" id="version_history">
                        <div className="container left-align">
                            <div className="section-header">
                                <h2 className="dark-text">Version History - <small className="topbutton"><a href="#tableofcontent">#back to top</a></small></h2>
                            </div>
                            <h3> 08 October 2020 </h3>
                            <ul>
                                <li>New - Created &amp; Upload Davur </li>
                            </ul>
                        </div>
                    </section>
                    <footer className="app-brief grey-bg">
                        <div className="container">
                            <p className="copyright">
                                © 2020 DexignZone , All Rights Reserved
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>


    );
};

export default Home;