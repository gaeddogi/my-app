import React from 'react';
import styled from 'styled-components';
import TodoRow from './TodoRow';

const TodoList = ({ todoList, handleClickRemove }) => (
    <Container>
        {todoList.map((e, i) => (
            <TodoRow
                todo={e}
                key={i}
                index={i}
                handleClickRemove={handleClickRemove}
            />
        ))}
    </Container>
)

const Container = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default TodoList;
