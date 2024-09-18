import { Heading, Flex, Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Flex p={'8'} height={'100vh'} align={'center'} justify={'center'} gap='2'>
                <Heading color='red'>ERROR 404</Heading>
                <Button onClick={handleGoHome} radius='large' variant='soft' color='red'>
                    Go Home
                </Button>
            </Flex>
        </>
    );
};
