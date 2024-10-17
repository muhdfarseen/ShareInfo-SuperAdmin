import { Card, Button, Flex, TextField, Box, Badge } from '@radix-ui/themes';
import { IconMail, IconKey } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../redux/api-services/login';
import { loginUser } from '../../redux/reducers/auth/authSlice';
import ShareinfoNavLogo from '../../assets/Images/ShareinfoNavLogo.svg';
import ShareinfoNavLogoDark from '../../assets/Images/ShareinfoNavLogo forDark.svg';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const { register, handleSubmit } = useForm();
    const [loginApiCall, { isLoading }] = useLoginUserMutation();

    const handleLogin = handleSubmit(async (data) => {
        let loadingToastId;
        try {
            loadingToastId = toast.loading('Logging in...');
            const response = await loginApiCall(data).unwrap();
            toast.dismiss(loadingToastId);
            toast.success('Welcome Back!');
            dispatch(loginUser(response));
            navigate('/dashboard');
        } catch (error) {
            toast.dismiss(loadingToastId);
            toast.error('Login failed, ' + (error.data?.message || 'try again'));
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
                                    <Button
                                        disabled={isLoading}
                                        type='submit'
                                        size={'3'}
                                        color='orange'>
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
