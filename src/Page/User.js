import React from 'react';
import { useState } from 'react';

const User = ({ user }) => {
    const [details, setDetails] = useState(null);
    const [showDetails, setShowDetail] = useState(false);
    const { company, name, address, id, phone, email } = user

    const handleShowDetails = (id, t) => {
        setShowDetail(t)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    };

    return (
        <>
            <div className="bg-white flex justify-between text-gray-500">
                <h2 className="px-6 py-4 font-medium text-gray-900 w-[20%]">
                    {company?.name}
                </h2>
                <p className="px-6 py-4 w-[20%]">
                    {name}
                </p>
                <p className="px-6 py-4 w-[20%]">
                    {address?.city}
                </p>
                <p className="px-6 py-4 w-[20%]">
                    {address?.street}
                </p>
                <p className="px-6 py-4 w-[20%]">
                    <button
                        onClick={() => handleShowDetails(id, !showDetails)}
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        {details?.id === id && showDetails ? 'Hide Details' : 'Show Details'}
                    </button>
                </p>
            </div>
            <div className={`border-b ${showDetails && 'border-t-0'}`}>
                {(details && showDetails) &&
                    <div className='mt-0 mb-5 mx-10 border p-7 shadow-lg rounded-lg'>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Description</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur a consectetur temporibus non in pariatur. Unde, beatae!</p>
                        </div>
                        <div className='mt-7 flex'>
                            <div className='w-[50%]'>
                                <div className='mb-4'>
                                    <h2 className='font-semibold mb-1'>Contact Person</h2>
                                    <p className='text-sm'>{name}</p>
                                </div>
                                <div className='mb-4'>
                                    <h2 className='font-semibold mb-1'>Designation</h2>
                                    <p className='text-sm'>{company?.bs}</p>
                                </div>
                                <div className='mb-4'>
                                    <h2 className='font-semibold mb-1'>Email</h2>
                                    <p className='text-sm'>{email}</p>
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-1'>Phone</h2>
                                    <p className='text-sm'>{phone}</p>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className='mb-4'>
                                    <h2 className='font-semibold mb-1'>Address</h2>
                                    <p className='text-sm'>{name}</p>
                                </div>
                                <div className='mb-4'>
                                    <h2 className='font-semibold mb-1'>City</h2>
                                    <p className='text-sm'>{address?.city}</p>
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-1'>Country</h2>
                                    <p className='text-sm'>India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default User;