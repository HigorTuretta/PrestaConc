import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 1rem;
    flex-wrap: wrap;
    cursor: default;
`;

export const StepCard = styled.div`
    background-color: white;
    border: 1px solid #5088F9;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
    text-align: center;

    >p{
        font-size: 14px;
        text-align: justify;
        margin-top: 1rem;
    }
`;

export const IconContainer = styled.div`
    color: #5088F9;
    margin-bottom: 10px;
`;
