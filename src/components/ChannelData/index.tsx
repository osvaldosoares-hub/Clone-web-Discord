import React, { useEffect, useRef } from "react";
import { ChennelMessege } from "../ChannelMessege";
import { Container, Mensagens, InputWrapper, Input, InputIcon} from "./style";

export const ChannelData: React.FC = ()=>{
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(()=>{
        const div = messagesRef.current

        if(div){
            div.scrollTop = div.scrollHeight
        }
    },[ messagesRef])
    return (
        <Container>
           <Mensagens ref={messagesRef}>
           <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
           <ChennelMessege
           
            author="osvaldo soa"
            data="26/02/2022"
            content="hoje é dia de ciclar"
           
           />
            <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="hoje é dia de ciclar"
          
          />
          <ChennelMessege
           
           author="osvaldo soa"
           data="26/02/2022"
           content="puta"
          
          />
          
         
          
          
          
          

           </Mensagens>
           <InputWrapper>
                <Input type="text" placeholder="fale aqui puta"/>
                <InputIcon/>

           </InputWrapper>


        </Container>
    )
};