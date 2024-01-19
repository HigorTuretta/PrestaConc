import React from 'react';
import { FaRegUserCircle, FaPlaneDeparture, FaMoneyCheckAlt } from 'react-icons/fa';
import { CardContainer, StepCard, IconContainer } from './styles';

const iconMapping = {
    'user': <FaRegUserCircle size={30} />,
    'plane': <FaPlaneDeparture size={30} />,
    'money': <FaMoneyCheckAlt size={30} />
};

export const StepsCard = ({ steps }) => {
    return (
        <CardContainer>
            {steps.map(step => (
                <StepCard key={step.id}>
                    <IconContainer>{iconMapping[step.icon]}</IconContainer>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </StepCard>
            ))}
        </CardContainer>
    );
}

