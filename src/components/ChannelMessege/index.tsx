import React from "react";
import { Container, Avatar, Messege, HeaderMessege ,Content} from "./style";

export interface Props{
    author:string;
    data:String;
    content:string | React.ReactElement| React.ReactNode;
    hasMention?:boolean;
    
}

export const ChennelMessege: React.FC<Props> = ({
    author,
    data,
    content,
    hasMention
    

})=>{
    return (
        <Container className={ hasMention ? 'meirion' : ''}>
            <Avatar/>
            <Messege>
                <HeaderMessege>
                    <strong>{author}</strong>

                    <time>{data}</time>
                </HeaderMessege>
               < Content>{content}</Content>
            </Messege>
        </Container>
    )
};