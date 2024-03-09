'use client'
import { useState } from 'react'

const Praise = () => {

    const [traits, setTraits] = useState([
        {
            id: 1,
            name: 'Honest',
            selected: false
        },
        {
            id: 2,
            name: 'Hardworking',
            selected: false
        },
        {
            id: 3,
            name: 'Intelligent',
            selected: false
        },
        {
            id: 4,
            name: 'Diligent',
            selected: false
        },
        {
            id: 5,
            name: 'Creative',
            selected: false
        },
        {
            id: 6,
            name: 'Loyal',
            selected: false
        },
        {
            id: 7,
            name: 'Responsible',
            selected: false
        },
        {
            id: 8,
            name: 'Confident',
            selected: false
        },
        {
            id: 9,
            name: 'Reliable',
            selected: false
        },
        {
            id: 10,
            name: 'Punctual',
            selected: false
        },
        {
            id: 11,
            name: 'Dependable',
            selected: false
        },
        {
            id: 12,
            name: 'Adaptable',
            selected: false
        },
        {
            id: 13,
            name: 'Positive',
            selected: false
        },
        {
            id: 14,
            name: 'Optimistic',
            selected: false
        },
        {
            id: 15,
            name: 'Motivated',
            selected: false
        },
        {
            id: 16,
            name: 'Ambitious',
            selected: false
        },
        {
            id: 17,
            name: 'Dedicated',
            selected: false
        },
        {
            id: 18,
            name: 'Committed',
            selected: false
        },
        {
            id: 19,
            name: 'Passionate',
            selected: false
        },
        {
            id: 20,
            name: 'Respectful',
            selected: false
        },
        {
            id: 21,
            name: 'Caring',
            selected: false
        },
        {
            id: 22,
            name: 'Empathetic',
            selected: false
        },
        {
            id: 23,
            name: 'Compassionate',
            selected: false
        },
    ]);

    const handleClick = (id) => {
        setTraits(traits.map(trait =>
            trait.id === id ? { ...trait, selected: !trait.selected } : trait
        ));
    }

    return (
        <div>
            <div className="ml-5 mt-5">
                <h3 className='text-2xl font-bold my-1'>Praise</h3>
                <p className='text-gray-300 font-serif mb-2'>What traits best describes you.</p>
                <div className="flex flex-wrap gap-3">

                    {traits.map((trait) => (
                        <button
                            key={trait.id}
                            onClick={() => handleClick(trait.id)}
                            className={`border cursor-pointer rounded-lg py-1 px-2 ${trait.selected ? "bg-indigo-500" : ""}`}>
                            <span>{trait.name}</span>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Praise
