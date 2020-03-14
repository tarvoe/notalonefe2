import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
         {
            id: "u1",
            name: "Tarvo Erimäe",
            image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            shortDescription: "I am in need of help"
        },
        {
            id: "u2",
            name: "Tähe-Kai Tillo",
            image: "https://www.indiewire.com/wp-content/uploads/2019/12/rise-skywalker-ending.jpg",
            shortDescription: "I am in need of help"

        },
        {
            id: "u3",
            name: "Laura Liis Metsvaht",
            image: "https://www.stylist.co.uk/images/app/uploads/2019/03/18141059/leia.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress",
            shortDescription: "I am in need of help"
        }
    ];

    return <UsersList items={USERS} />;
}

export default Users;