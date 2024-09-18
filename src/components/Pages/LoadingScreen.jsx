import { Flex, Spinner } from '@radix-ui/themes';

export const LoadingScreen = () => {
    return (
        <div>
            <Flex height={'100vh'} align={'center'} justify={'center'}>
                <Spinner />
            </Flex>
        </div>
    );
};
