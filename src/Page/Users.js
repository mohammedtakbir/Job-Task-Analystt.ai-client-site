import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../components/Loading';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(3);

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false);
            })
            .catch(err => setLoading(false))
    }, []);

    if (loading) {
        return <Loading />
    }

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex)
    const pages = Math.ceil(users.length / 3);

    return (
        <>
            <div className='max-w-[1000px] mx-auto mt-[100px] mb-[40px] shadow-lg border'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <div className="text-xs text-gray-700 uppercase bg-gray-50">
                            <div className='flex'>
                                <h2 className="px-6 py-3 w-[20%] font-bold">
                                    Company Name
                                </h2>
                                <h2 className="px-6 py-3 w-[20%] font-bold">
                                    Contact
                                </h2>
                                <h2 className="px-6 py-3 w-[20%] font-bold">
                                    City
                                </h2>
                                <h2 className="px-6 py-3 w-[20%] font-bold">
                                    Street
                                </h2>
                                <h2 className="px-6 py-3 w-[20%] font-bold">
                                    Action
                                </h2>
                            </div>
                        </div>
                        <div>
                            {currentUsers.map(user => <User key={user.id} user={user} />)}
                        </div>
                    </table>
                </div>
            </div>
            <div className='flex justify-center mb-20'>
                {
                    [...Array(pages).keys()].map(num => (
                        <button
                            onClick={() => setCurrentPage(num + 1)}
                            key={num}
                            className={`py-0 px-3 mx-1 inline-block border border-black rounded-md font-semibold ${currentPage === (num + 1) && 'bg-red-500 text-white border border-red-500'}`}
                        >
                            {num + 1}
                        </button>
                    ))
                }
            </div>
        </>
    );
};

export default Users;