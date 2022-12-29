import React from 'react';
import { Wrapper } from '../styles/containerStyle';
import { NavBar } from './navbar';
export const Container: React.FC = () => {

    return (
        <Wrapper>
            <NavBar />
        </Wrapper>
    )
}