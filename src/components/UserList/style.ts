import styled from 'styled-components';

export const Container = styled.div`
    grid-area:UL;
    display:flex;
    flex-direction:column;
    background-color:var(--secondary);
    max-height:calc(100vh - 46px);
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width:4px;
    }
    ::-webkit-scrollbar-thumb{
        background-color:var(--tertiary) ;
        border-radius:4px;
    }
    ::-webkit-scrollbar-track{
        background-color: var(--secundary);
    }

`;
export  const Role = styled.div` 
    margin-top:20px;
    padding-left:10px;
    text-transform:uppercase;
    font-size:12px;
    color:var(--gray);
`;
export  const User = styled.div` 
    display: flex;
    margin-top: 5px ;
    padding:5px;
    align-items:center;
    border-radius: 4px ;
    background: transparent;

    transition:background 0.2s;

    &:hover{
        background: rgba(255,255,255, 0.1);
    }
    >strong{
        margin-left: 13px ;
        color: var(--white);
        opacity:0.7;

        white-space:nowrap;
        text-overflow:ellipse;
        overflow: hidden;
    }
    
`;
export  const Avatar = styled.div` 
    flex-shrink:0;

    width: 32px;
    height:32px;
    background-color: var(--primary) ;
    border-radius:50%;

    
`;

