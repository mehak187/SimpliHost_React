import React from 'react'
import LoginArt from '../assets/img/login-art.png'
import Facebook from '../assets/img/facebook.png'
import GoogleImg from '../assets/img/google.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login-h py-3'>
            <div className='container-fluid h-100 px-sm-5'>
                <div className='row h-100 align-items-center'>
                    <div className="col-md-6 col-sm-8 col-11 h-100 py-sm-3  mx-auto shadow-custom">
                        <div className="row  h-100">
                            <div className="col-xl-7 col-lg-9 col-11 mx-auto h-100">
                                <div className='d-flex flex-column justify-content-between h-100'>
                                    <div>
                                        <form action="">
                                            <div className='mt-3'>
                                                <h2 className='fw-bold yel-clr'>Welcome Back  👋</h2>
                                                <p className='small mb-0'>Today is a new day. It's your day. You shape it.
                                                    Sign in to start managing your projects.</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-10">
                                                    <div className='my-3'>
                                                        <label htmlFor="e-mail" className='form-label mb-0  ps-2'>Email</label>
                                                        <input type="email" className='my-input' name="" id="e-mail" placeholder='Example@email.com' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="pass-word" className='form-label fw-md mb-0 ps-2'>Password</label>
                                                        <input type="password" className='my-input' name="" id="pass-word" placeholder='at least 8 characters' />
                                                    </div>
                                                    <div className='text-end'>
                                                        <Link to="" className='text-decoration-none small blu-clr'>Forgot Password</Link>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <button className='rounded-3 border-0 py-2 px-2 small sky-bg w-100 fw-medium'>Log in</button>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="">
                                                            <div className="card border-0">
                                                                <div className="card-body">
                                                                    <div className="text-center position-relative ">
                                                                        <span className="text-muted index-q">Or</span>
                                                                        <div className='position-or'></div>
                                                                    </div>
                                                                    <Link to="" className="bg-lgrey text-dark text-decoration-none d-flex align-items-center justify-content-center border-0 py-2 rounded-3 w-100 my-3">
                                                                        <div>
                                                                            <img src={GoogleImg} alt="" className='social-img'/>
                                                                        </div>
                                                                        <div>
                                                                            <p className='mb-0 small ms-2'>Signin with Google</p>
                                                                        </div>
                                                                    </Link>
                                                                    <Link to="" className="bg-lgrey border-0 text-dark text-decoration-none d-flex align-items-center justify-content-center py-2 rounded-3 w-100 ">
                                                                        <div>
                                                                            <img src={Facebook} alt="" className='social-img ms-3'/>
                                                                        </div>
                                                                        <div>
                                                                            <p className='mb-0 small ms-2'>Signin with Facebook</p>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="text-center mt-3">
                                                                        <p className="mb-0 text-muted small">
                                                                            Don't you have an account? <Link to="#" className="text-decoration-none">Sign up</Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-10'>
                                            <p className='mb-0 small text-center text-grey'>© 2023 ALL RIGHTS RESERVED</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 sky-bg d-lg-block d-none h-100 rounded-4 shadow">
                        <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                            <div>
                                <img src={LoginArt} alt="" className='login-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
