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
        <section className='max-w-[800px] mx-auto my-[100px] shadow-lg border'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Street
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User key={user.id} user={user} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Users;