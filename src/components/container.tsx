import React, {useState} from 'react';
import { Wrapper } from '../styles/containerStyle';
import { NavBar } from './navbar';
import { Todo, List } from './todo';
export const Container: React.FC = () => {
    const [todoList, setTodoList] = useState<List>([])
  
    return (
        <Wrapper>
            <NavBar />
            <Todo todoList={todoList} setTodoList={setTodoList} />
        </Wrapper>
    )
}