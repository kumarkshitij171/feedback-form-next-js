'use client'
import React, { useState } from 'react'
import Star from './Star'

const Communication = () => {

    const [rating, setRating] = useState(0)
    
    return (
        <div className='my-5'>
            <div className="ml-5">
            <h3 className='text-2xl font-bold my-1'>Communication</h3>
            <p className='text-gray-300 font-serif mb-2'>How easy was it to be communicate?</p>
            </div>

            <Star setRating={setRating} rating={rating}/>
        </div>
    )
}

export default Communication
