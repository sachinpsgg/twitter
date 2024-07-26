import React from 'react';
import Flex from "./FlexContainer";

interface Props {
    message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
    return (
        <Flex className="items-center" >
            {message}
        </Flex>
    );
};

export default ErrorMessage;
