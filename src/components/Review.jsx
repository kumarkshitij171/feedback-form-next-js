import React from 'react'

const Review = () => {
    return (
        <div>
            <div className='my-5'>
                <div className="ml-5">
                    <h3 className='text-2xl font-bold my-1'>Feedback</h3>
                    <p className='text-gray-300 font-serif mb-2'>How is your overall feedback?</p>
                <textarea className='bg-[#D8D9DA] text-black p-1' placeholder='Enter your review' name="" id="" cols="35" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Review
