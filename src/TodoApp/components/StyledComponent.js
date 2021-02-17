import styled from 'styled-components';

export const Template = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
`;

export const AppTitle = styled.div`
    background-color: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: white;
`;

export const Insert = styled.form`
    display: flex;
    flex-direction: row;
    background: #495057;
    input {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;
        flex: 1;
        &::placeholder{
            color: #dee2e6;
        }
    }
    button{
        background: none;
        outline: none;
        border: none;
        background: #868e96;
        color: white;
        padding-right: 1rem;
        padding-left: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.1s background ease-in;
        &:hover{
            background: #adb5bd;
        }
    }
`;

export const ListItem = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background-color: #f8f9fa;
    }
`;

export const List = styled.div `
    min-height: 320px;
    max-width: 513px;
    overflow-y: auto;
    .checkbox{
        cursor: pointer;
        flex:1;
        display: flex;
        align-items: center;
        svg {
            font-size: 1.5rem;
        }
        .text {
            margin-left: 0.5rem;
            flex:1;
        }
        &.checked{
            svg{
                color: #22b8cf;
            }
            .text{
                color: #adb5bd;
                text-decoration: line-through;
            }
        }
    }
    .remove{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        cursor: pointer;
        &:hover{
            color: #ff8787;
        }
    }
    & + & {
        border-top: 1px solid #dee2e6;
    }
`;
