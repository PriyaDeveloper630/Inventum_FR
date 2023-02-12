import React from 'react'
import micro from './micro.png'
import '../../pages/landingpage/landingpage.css'

function content() {
    return (
        <div>
                <div className='landingtext'>
                    <h2>WELCOME TO INVENTUM</h2>
                <div className='smalltext'>
                    <h4>The Centralized Platform for</h4>
                    <h4>Indian Researchers and Scientists</h4>
                    </div>
                     <h2 className='landinglogin'>Login as:</h2>
                </div>
                <div className="landingButtons">
                    <button className='landingAdmin'>Login</button>
                    <button className='landingStudent'>Signup</button>
                </div>
                <figure>
                    <img src={micro} alt="micro"  className="microscope" />
                </figure>
        </div>
    )
}

export default content