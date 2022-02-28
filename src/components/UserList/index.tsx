import React from "react";
import { Container,Role, User, Avatar} from "./style";

export interface UserProps{
    NickName:string;
}

const UserRow: React.FC<UserProps> =({
    NickName
})=>{
    return (
        <User>
            <Avatar/>
            <strong>{NickName}</strong>
        </User>
    );
}

export const UserList: React.FC = ()=>{
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow NickName = "valdim"/>
            <Role>OFFline - 10</Role>
            <UserRow NickName = "vandi"/>
        </Container>
    )
};