import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { getUsers } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import UsersCard from "./UsersCard";

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.users.data);

    console.log("Users: ",users);

    useEffect(()=> {
        dispatch(getUsers());
    },[dispatch])
    
    return (
        <Container>
            <h1>Users List</h1>
            <Grid container spacing={2}>
                {users.map((user)=>(
                    <UsersCard
                     key={user.id} user={user}/>
                ))}
            </Grid>
        </Container>
    )
}
export default Users;