import React from "react";
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon} from "./style";

export const UserInfo: React.FC = ()=>{
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>Valdim delas</strong>
                    <span>#2301</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon/>
                <HeadPhoneIcon/>
                <SettingsIcon/>
            </Icons>

        </Container>
    )
};