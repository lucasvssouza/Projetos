import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done} : ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label{
        flex: 1;
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

    .deleteButton{
        width: 25px;
        height: 25px;
        cursor: pointer;
        color: red;
        font-size: 15px;
        margin-left: 5px;
        background-color: transparent;
    }
`
))