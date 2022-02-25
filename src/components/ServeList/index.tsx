import React from "react";
import { Container ,Separator} from "./style";
import { ServerButton } from "../ServerButtom";
export const ServerList: React.FC =()=>{

    return(
        <Container>
            <ServerButton/>

            <Separator/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton  mentions={4}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            
            <ServerButton mentions={32}/>
        </Container>
    )
};