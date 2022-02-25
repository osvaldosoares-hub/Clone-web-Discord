import React from "react";
import { Container, HashtagIcon, Title , Separator, Description} from "./style";

export const ChannelInfo: React.FC = ()=>{
    return (
        <Container>
            <HashtagIcon/>
            <Title>Chat-livre</Title>
            <Separator/>

            <Description>Canal aberto para conversas</Description>
        </Container>
    )
};