import { Flex, Box, Text, Separator, Avatar, DropdownMenu } from '@radix-ui/themes';
import ShareinfoNavLogo from '../../../assets/Images/ShareinfoNavLogo.svg';
import ShareinfoNavLogoDark from '../../../assets/Images/ShareinfoNavLogo forDark.svg';
import { IconLogout2, IconSun, IconUser, IconMoon } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/theme/themeSlice';

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const theme = useSelector((state) => state.theme);

    return (
        <div style={{ backdropFilter: 'blur(5px)' }}>
            <Flex height={'64px'} justify={'between'} align={'center'} p={'4'}>
                <img
                    src={theme === 'light' ? ShareinfoNavLogoDark : ShareinfoNavLogo}
                    alt='Logo'
                    style={{ height: 26 }}
                />
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger style={{ cursor: 'pointer' }}>
                        <Flex gap='3' align='center'>
                            <Box>
                                <Text align={'right'} as='div' size='2' weight='bold'>
                                    Akshay Ashokan Pothan
                                </Text>
                                <Text align={'right'} as='div' size='1' color='gray'>
                                    Chief Executive Officer
                                </Text>
                            </Box>
                            <Avatar color='orange' size='3' fallback='AA' />
                        </Flex>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content
                        sideOffset={10}
                        align='end'
                        color='gray'
                        variant='soft'
                        side='top'
                        size='2'>
                        <DropdownMenu.Item onClick={() => navigate('/myaccount')}>
                            <Flex width={'120px'} align={'center'} justify={'between'}>
                                Your Account <IconUser size={15} />
                            </Flex>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleToggleTheme}>
                            <Flex width={'120px'} align={'center'} justify={'between'}>
                                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}{' '}
                                {theme === 'light' ?
                                    <IconMoon size={15} />
                                :   <IconSun size={15} />}
                            </Flex>
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item variant='solid' color='red'>
                            <Flex
                                onClick={() => navigate('/')}
                                width={'120px'}
                                align={'center'}
                                justify={'between'}>
                                Sign Out <IconLogout2 size={15} />
                            </Flex>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
            <Separator size='4' />
        </div>
    );
};
