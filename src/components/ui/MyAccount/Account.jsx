import { Button, Flex, Heading, Text, TextField, Card, Box, Separator } from '@radix-ui/themes';
import { IconLayoutDashboardFilled } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    useGetProfileQuery,
    useUpdateProfileMutation,
    useResetPasswordMutation
} from '../../../redux/api-services/practiceApi';
import { toast } from 'sonner';

export const Account = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data, refetch } = useGetProfileQuery();

    const [updateProfile] = useUpdateProfileMutation();
    const [resetPassword] = useResetPasswordMutation();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [showDesignationButton, setShowDesignationButton] = useState(false);

    useEffect(() => {
        if (data) {
            setDesignation(data.designation || '');
            setFirstName(data.first_name || '');
            setMiddleName(data.middle_name || '');
            setLastName(data.last_name || '');
        }
    }, [data]);

    useEffect(() => {
        if (data?.designation && designation !== data.designation) {
            setShowDesignationButton(true);
        } else {
            setShowDesignationButton(false);
        }
    }, [designation, data?.designation]);

    const handleNameUpdate = async () => {
        const loadingToastId = toast.loading('Updating name...');
        try {
            await updateProfile({
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName
            }).unwrap();
            refetch();
            toast.success('Name updated successfully!', {
                id: loadingToastId
            });
            setFirstName('');
            setLastName('');
            setLastName('');
        } catch (error) {
            toast.error(`Failed to update name.. ${error?.data?.message}`, {
                id: loadingToastId
            });
        }
    };

    const handleDesignationUpdate = async () => {
        const loadingToastId = toast.loading('Updating designation...');
        try {
            await updateProfile({ designation }).unwrap();
            refetch();
            toast.success('Designation updated successfully!', {
                id: loadingToastId
            });
        } catch (error) {
            toast.error(`Failed to update designation.. ${error?.data?.message}`, {
                id: loadingToastId
            });
        }
    };

    const handlePasswordReset = async () => {
        const loadingToastId = toast.loading('Updating password...');
        try {
            await resetPassword({ old_password: oldPassword, new_password: newPassword }).unwrap();
            setOldPassword('');
            setNewPassword('');
            toast.success('Password updated successfully!', { id: loadingToastId });
        } catch (error) {
            toast.error(`Failed to update password.. ${error.data.message}`, {
                id: loadingToastId
            });
        }
    };

    const goToPreviousPath = (e) => {
        e.preventDefault();
        if (location.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <>
            {/* Header Section */}
            <Flex my={'9'} align={'center'} direction={'column'} justify={'center'}>
                <Flex width={'70%'} align={'center'} justify={'between'}>
                    <Heading size={'7'}>
                        {data?.first_name + ' ' + data?.middle_name + ' ' + data?.last_name}
                    </Heading>
                    <Button
                        type='button'
                        onClick={goToPreviousPath}
                        size={'3'}
                        variant='soft'
                        color='gray'>
                        <IconLayoutDashboardFilled style={{ zIndex: '-1' }} size={17} />
                        Back to Dashboard
                    </Button>
                </Flex>
            </Flex>

            <Separator size={'4'} my={'0'} />

            {/* Main Content */}
            <Flex
                style={{ backgroundColor: 'var(--gray-2' }}
                align={'center'}
                direction={'column'}
                justify={'center'}>
                <Flex
                    py={'9'}
                    gap={'9'}
                    width={'70%'}
                    direction={'column'}
                    align={'center'}
                    justify={'center'}>
                    {/* Name Section */}
                    <Box width='100%'>
                        <Card>
                            <Flex gap={'4'} wrap={'wrap'} p={'4'} justify={'between'}>
                                <Box>
                                    <Heading size={'4'}>Name</Heading>
                                </Box>
                                <Box minWidth={'200px'} width={'50%'}>
                                    <Text>Name</Text>
                                    <Flex gap={'2'}>
                                        <TextField.Root
                                            mt={'2'}
                                            width={'100%'}
                                            size={'3'}
                                            color='orange'
                                            value={firstName}
                                            placeholder='First name'
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <TextField.Root
                                            mt={'2'}
                                            width={'100%'}
                                            size={'3'}
                                            color='orange'
                                            value={middleName}
                                            placeholder='Middle name'
                                            onChange={(e) => setMiddleName(e.target.value)}
                                        />
                                        <TextField.Root
                                            mt={'2'}
                                            width={'100%'}
                                            size={'3'}
                                            color='orange'
                                            value={lastName}
                                            placeholder='Last name'
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Flex>
                                    {(
                                        data?.first_name != firstName ||
                                        data?.middle_name != middleName ||
                                        data?.last_name != lastName
                                    ) ?
                                        <Flex
                                            mt={'4'}
                                            align={'end'}
                                            direction={'column'}
                                            width={'100%'}>
                                            <Button
                                                color='orange'
                                                width={'contents'}
                                                onClick={handleNameUpdate}>
                                                Update Name
                                            </Button>
                                        </Flex>
                                    :   null}
                                </Box>
                            </Flex>
                        </Card>
                    </Box>

                    {/* Designation Section */}
                    <Box width='100%'>
                        <Card>
                            <Flex gap={'4'} wrap={'wrap'} p={'4'} justify={'between'}>
                                <Box>
                                    <Heading size={'4'}>Designation</Heading>
                                </Box>
                                <Box minWidth={'200px'} width={'50%'}>
                                    <Text>Designation</Text>
                                    <TextField.Root
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={designation}
                                        placeholder='Designation'
                                        onChange={(e) => setDesignation(e.target.value)}
                                    />
                                    {showDesignationButton && (
                                        <Flex
                                            mt={'4'}
                                            align={'end'}
                                            direction={'column'}
                                            width={'100%'}>
                                            <Button
                                                color='orange'
                                                width={'contents'}
                                                onClick={handleDesignationUpdate}>
                                                Update Designation
                                            </Button>
                                        </Flex>
                                    )}
                                </Box>
                            </Flex>
                        </Card>
                    </Box>

                    {/* Email Section */}
                    <Box width='100%'>
                        <Card>
                            <Flex gap={'4'} wrap={'wrap'} p={'4'} justify={'between'}>
                                <Box>
                                    <Heading size={'4'}>Email</Heading>
                                </Box>
                                <Box minWidth={'200px'} width={'50%'}>
                                    <Text>Email</Text>
                                    <TextField.Root
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={data?.email}
                                        placeholder='Email'
                                        disabled
                                    />
                                </Box>
                            </Flex>
                        </Card>
                    </Box>

                    {/* Password Section */}
                    <Box width='100%'>
                        <Card>
                            <Flex gap={'4'} wrap={'wrap'} p={'4'} justify={'between'}>
                                <Box>
                                    <Heading size={'4'}>Password</Heading>
                                </Box>
                                <Box minWidth={'200px'} width={'50%'}>
                                    <Text>Old Password</Text>
                                    <TextField.Root
                                        type='password'
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={oldPassword}
                                        placeholder='Enter old password'
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />

                                    <Text as='div' mt={'5'}>
                                        New Password
                                    </Text>
                                    <TextField.Root
                                        type='password'
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={newPassword}
                                        placeholder='Enter new password'
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />

                                    {newPassword && oldPassword && (
                                        <Flex
                                            mt={'4'}
                                            align={'end'}
                                            direction={'column'}
                                            width={'100%'}>
                                            <Button
                                                color='orange'
                                                width={'contents'}
                                                onClick={handlePasswordReset}>
                                                Reset Password
                                            </Button>
                                        </Flex>
                                    )}
                                </Box>
                            </Flex>
                        </Card>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};
