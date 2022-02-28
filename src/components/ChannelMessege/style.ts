import styled from 'styled-components';
import {} from 'styled-icons/material'
export const Container = styled.div`
   display:flex;
   align-items:center;

   padding:4px 16px;
   margin-right:4px;
   background-color:transparent ;

   &+div{
       margin-top:13px;
   }
`;

 export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--secondary);
    border-radius:50%;

 `;
 export const Messege = styled.div`
    min-height:40px;
    display:flex;
    flex-direction:column;
    
    justify-content:space-between;
    margin-left:15px;
 `;
 export const HeaderMessege = styled.div`
    display: flex;
    align-items:center;

    >strong{
        color: var(--white);
        font-size:16px;
    }

    >time{
        margin-left:6px;
        color:var(--gray);
        font-size:13px;
    }
 `;
 export const Content = styled.div`
    text-align:left;
    font-size:16px;
    color: var(--white);
 `;


