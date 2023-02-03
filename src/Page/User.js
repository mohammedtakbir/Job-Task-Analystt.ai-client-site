import React from 'react';

const User = ({ user }) => {
    const { company, name, address } = user
    console.log(user)
    return (
        <>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {company?.name}
                </th>
                <td className="px-6 py-4">
                    {name}
                </td>
                <td className="px-6 py-4">
                    {address?.city}
                </td>
                <td className="px-6 py-4">
                    {address?.street}
                </td>
                <td className="px-6 py-4">
                    <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
                </td>
            </tr>
        </>
    );
};

export default User;