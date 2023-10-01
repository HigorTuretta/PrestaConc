import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BLACK };
    color: ${({theme}) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`
