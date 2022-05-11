import React from 'react';
import css from './user.module.css'

const User = ({item}) => {
    console.log(item,"item");
    return (
        <tr key={item.id} className={css.tr}>
            <>
                <td><h5>{item.email}</h5></td>

                <td className={css.tdFlex}>
                    {
                        item.role ? <h5>Administrator</h5> : <h5>User</h5>
                    }
                    <h6>{item.status}</h6>
                </td>
                <td>{item.createdAt}</td>
            </>
        </tr>
    );
};

export default User;