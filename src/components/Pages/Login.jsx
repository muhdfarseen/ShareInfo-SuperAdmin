import { Card, Button, Flex, Heading, TextField, Box } from '@radix-ui/themes';
import { IconUser, IconKey } from '@tabler/icons-react';
import ShareinfoNavLogo from '../../assets/Images/ShareinfoNavLogo.svg';
import ShareinfoNavLogoDark from '../../assets/Images/ShareinfoNavLogo forDark.svg';

import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../app/main';
import { useContext } from 'react';

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/dashboard');
    };

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <Flex height={'100vh'} direction={'column'} align={'center'} justify={'center'}>
                <Flex
                    width={'fit-content'}
                    gap={'4'}
                    direction={'column'}
                    align={'center'}
                    justify={'center'}>
                    <Box width='100%'>
                        <Card>
                            <Flex p={'4'} align={'center'} justify={'between'}>
                                <img
                                    src={
                                        theme === 'light' ? ShareinfoNavLogoDark : ShareinfoNavLogo
                                    }
                                    height={40}
                                    alt='logo'
                                />
                                <Flex>
                                    <Heading>Super</Heading>
                                    <Heading weight={'light'}>Admin</Heading>
                                </Flex>
                            </Flex>

                            <Flex p={'4'} gap={'4'} align={'center'} justify={'center'}>
                                <TextField.Root size={'3'} color='orange' placeholder='Username'>
                                    <TextField.Slot>
                                        <IconUser height='16' width='16' />
                                    </TextField.Slot>
                                </TextField.Root>

                                <TextField.Root size={'3'} color='orange' placeholder='Password'>
                                    <TextField.Slot>
                                        <IconKey height='16' width='16' />
                                    </TextField.Slot>
                                </TextField.Root>
                                <Button onClick={handleLogin} size={'3'} color='orange' width={'3'}>
                                    Login
                                </Button>
                            </Flex>
                        </Card>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
};
