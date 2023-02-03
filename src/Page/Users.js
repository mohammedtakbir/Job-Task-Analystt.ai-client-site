import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../components/Loading';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

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

    if(loading){
        return <Loading />
    }

    return (
        <section className='max-w-[1000px] mx-auto my-[100px] shadow-lg border'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <div className="text-xs text-gray-700 uppercase bg-gray-50">
                        <div className='flex'>
                            <h2 className="px-6 py-3 w-[20%]">
                                Company Name
                            </h2>
                            <h2 className="px-6 py-3 w-[20%]">
                                Contact
                            </h2>
                            <h2 className="px-6 py-3 w-[20%]">
                                City
                            </h2>
                            <h2 className="px-6 py-3 w-[20%]">
                                Street
                            </h2>
                            <h2 className="px-6 py-3 w-[20%]">
                                Action
                            </h2>
                        </div>
                    </div>
                    <div>
                        {users.map(user => <User key={user.id} user={user} />)}
                    </div>
                </table>
            </div>
        </section>
    );
};

export default Users;