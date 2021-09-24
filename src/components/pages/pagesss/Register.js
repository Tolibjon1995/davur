import React from 'react';

const Register = () => {
    return (
        <div className=' reg'>
            <div className="authincation">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <h4 className="text-center mb-4">Sign up your account</h4>
                                            <form action="/">
                                                <div className="form-group">
                                                    <label className="mb-1"><strong>Username</strong></label>
                                                    <input type="text" className="form-control" placeholder="username" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="mb-1"><strong>Email</strong></label>
                                                    <input type="email" className="form-control" placeholder="hello@example.com" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="mb-1"><strong>Password</strong></label>
                                                    <input type="password" className="form-control" placeholder="*******" required/>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                                </div>
                                            </form>
                                            <div className="new-account mt-3">
                                                <p>Already have an account? <a className="text-primary" href="page-login.html">Sign in</a></p>
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

export default Register;