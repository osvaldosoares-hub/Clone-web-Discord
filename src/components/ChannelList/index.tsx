import React from "react";
import { Container, Category, AddCategoryIcon} from "./style";
import { ChannelButton }from '../ChennelButton'
export const ChannelList: React.FC = ()=>{
    return (
        <Container>
            <Category>
            <span>Canais de Texto</span>
            <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="lolzinho"/>
            <ChannelButton channelName="vava"/>
            <ChannelButton channelName="CSzim"/>
        </Container>
    )
};