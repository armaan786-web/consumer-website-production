import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 580px;


    @media screen and (max-width: 768px) {
        display: none;
    }


    @media screen and (max-width:480px) {
        display: none;
    }
`




export const SearchBar = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    height: 48px;


`

export const SearchIcon = styled.span`
    width: 8%;
    padding: 5px;
    text-align: center;
    color: #000000;
    /* font-size: 20px; */
    background: #F0F0F0 0% 0% no-repeat padding-box;
    border-radius: 8px 0px 0px 8px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;


`

export const SearchInput = styled.input`
    width: 92%;
    border: none;
    padding: 5px;
    outline: none;
    background: #F0F0F0 0% 0% no-repeat padding-box;
    border-radius: 0px 8px 8px 0px;
    opacity: 1;
    color: #000000d6;
`
