import React from "react";
import { Container, HashtahIcon, InviteIcon, SettingsIcon} from "./style";

export interface Props{
    channelName:string;
    selected?:boolean;
}
export const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
})=>{
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtahIcon/>
                <span>{channelName}</span>
            </div>
            <div className="hidden">
                <InviteIcon/>
                <SettingsIcon/>
            </div>
        </Container>
    )
};