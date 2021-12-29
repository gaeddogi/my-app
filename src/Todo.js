import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

class Todo extends React.Component {
    state = {
        list: []
    }

    render() {
        // console.log(this.state.list);
        // console.log(localStorage.getItem('list'));
        return (
            <Container>
                <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
                <TodoList todoList={this.state.list} handleClickRemove={this.handleClickRemove}></TodoList>
            </Container>
        )
    }

    handleInputKeyPress = event => {
        const {
            target: { value }
        }  = event;
        if (event.key === 'Enter') {
            this.setState(
                state => ({ list: [...state.list, value] }),
                () => localStorage.setItem('list', JSON.stringify(this.state.list))
            );
            
            event.target.value = '';
        }
    };

    handleClickRemove = i => {
        this.state.list.splice(i, 1);
        this.setState(
            state => ({
                list: state.list
            }),
            () => 
                localStorage.setItem('list', JSON.stringify(this.state.list))
        );
    }

    componentDidMount() {
        this.setState({
            list: JSON.parse(localStorage.getItem('list')) || []
        })
        // console.log(this.state.list);
    }
}



const Container = styled.div`
    margin-top: 44px;
    text-align: center;
`
const Input = styled.input`
    width: 80%;
    height: 33px;
    padding: 7px;
    outline: none;
    border: 1px solid silver;
    border-radius: 11px;
    background: transparent;
    font-size: 22px;
    color: white;
`

export default Todo;