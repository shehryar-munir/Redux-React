import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./user";

export const UserView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const users = useSelector((state) => state.users)

    return (
        <div>
            <h1>Users</h1>
            {!users.loaded && <div>Loading...</div>}
            {users.loaded && users.error ? <div>{users.error}</div> : null}
            {users.loaded && users.users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}