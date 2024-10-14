import { Card, Button, Flex, TextField, Box, Badge } from '@radix-ui/themes';
import { IconMail, IconKey } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../app/main';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ENDPOINTS } from '../../config/api-end-points';
import ShareinfoNavLogo from '../../assets/Images/ShareinfoNavLogo.svg';
import ShareinfoNavLogoDark from '../../assets/Images/ShareinfoNavLogo forDark.svg';
import toast from 'react-hot-toast';
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { register, handleSubmit } = useForm();

    const handleLogin = handleSubmit(async (data) => {
        try {
            const response = await axios.post(ENDPOINTS.login, data);
            console.log(response);
            toast.success('Successfully toasted!');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    });

    return (
        <div>
            <Flex height={'100vh'} direction={'column'} align={'center'} justify={'center'}>
                <Flex
                    minWidth={'300px'}
                    width={'30%'}
                    gap={'4'}
                    direction={'column'}
                    align={'center'}
                    justify={'center'}>
                    <Box width='100%'>
                        <Card>
                            <Flex
                                gap={'4'}
                                wrap={'wrap'}
                                p={'4'}
                                align={'center'}
                                justify={'between'}>
                                <img
                                    src={
                                        theme === 'light' ? ShareinfoNavLogoDark : ShareinfoNavLogo
                                    }
                                    height={40}
                                    alt='logo'
                                />

                                <Badge color='orange'>Super Admin Portal</Badge>
                            </Flex>

                            <form onSubmit={handleLogin}>
                                <Flex p={'4'} direction={'column'} gap={'4'}>
                                    <TextField.Root
                                        {...register('email', { required: true })}
                                        size={'3'}
                                        required
                                        type='email'
                                        color='orange'
                                        placeholder='Email'>
                                        <TextField.Slot>
                                            <IconMail height='16' width='16' />
                                        </TextField.Slot>
                                    </TextField.Root>

                                    <TextField.Root
                                        {...register('password', { required: true })}
                                        required
                                        size={'3'}
                                        type='password'
                                        color='orange'
                                        placeholder='Password'>
                                        <TextField.Slot>
                                            <IconKey height='16' width='16' />
                                        </TextField.Slot>
                                    </TextField.Root>
                                    <Button type='submit' size={'3'} color='orange'>
                                        Login
                                    </Button>
                                </Flex>
                            </form>
                        </Card>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
};
