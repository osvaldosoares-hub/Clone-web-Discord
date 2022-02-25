import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline'
import {PersonAdd , Settings} from 'styled-icons/material'
export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding:5px 3px ;

    background-color: transparent;
    cursor:pointer;
    border-radius:5px;
    
    transition:background-color .2s;

    >div{
        display: flex;
        align-items:center;
    }
    >div span{
        margin-left: 5px;
        color: var(--senary);
    }
    &:hover, &.active{
        background-color: var(--quinary);
        >div span{
            color: var(--white)
        }
        >.hidden svg{
            display: block;
        }

    }
    >.hidden svg {
        display:none;
    }
`;
export const HashtahIcon = styled(Hashtag)`
    width:20px;
    height:20px;
    color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
    width:16px;
    height:16px;
    color: var(--symbol);
    transition: color .2;
    &:hover{
        color:var(--white)
    }
`;
export const SettingsIcon = styled(Settings)`
    width:16px;
    height:16px;
    color: var(--symbol);
    transition:  color .2;
    margin-left: 5px;
    &:hover{
        color:var(--white)
    }
`;