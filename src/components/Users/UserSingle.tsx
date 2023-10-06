import { useEffect } from "react";
import usersSlice, { getUsers } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const UserSingle = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.users.data);

    useEffect(()=>{
        if(usersSlice.length === 0) dispatch(getUsers())
    },[dispatch, users]);

    // 1. We should return a table of the users album data here
    // Remember that the user table has 3 fields of data: id, title, userId
    // We are only interested in the id and title of each album.

    return (
        <div>
            Single will be here
        </div>
    );
};

export default UserSingle;