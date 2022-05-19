import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 250px;
    width: 350px;
    background-color: #f5f5f5;
    border-radius: 5px;
    min-width: 350px;

    @media (max-width: 1280px) {
        width: 280px;
        min-width: 280px;
    }

    @media (max-width: 454px) {
        width: 100%;
        min-width: 100%;
    }
`