import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <>
            <div className="container">
                <div className="p-5 text-center bg-light-dark rounded">
                    <h1 className='text-light'>Stock Prediction Portal</h1>
                    <p className="text-light lead">This application is just a demo of stock prediction using Machine Learning.
                        Backend is Django and using Keras and LTSM model</p>
                    <Button text='Login now' class="btn-outline-info" />
                </div>
            </div>
        </>
    )
}

export default Main