'use client'
import styled from "styled-components"

// Header

export const Cabecalho = styled.header`
    
    position:fixed;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:var( --Shape-White);

`
export const Logo = styled.a`

    margin-block: 8px;
    font-size:2.5rem;
    color:var(--Logo-Color);

`

// Campo Pesquisa
export const SearchBar = styled.div`

    display:flex;
    align-items:center;
    background-color:#F3F5F6;
    padding:10px 16px;
    height:42px;
    width:352px;
    border-radius:8px;
`

export const SearchInput = styled.input`

    width:inherit;
    height:inherit;
    color:#737380;
    background:transparent;

`

export const SearchButton = styled.button`
    margin-left:16px;
    width:28px;
    height:28px;
`
// Fim Campo Pesquisa
// Fim Header