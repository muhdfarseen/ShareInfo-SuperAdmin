import { Button, Flex, Heading, Text, TextField, Card, Box, Separator } from '@radix-ui/themes';
import { IconLayoutDashboardFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Form Section Component
const FormSection = ({ title, value, onChange, showUpdate, placeholder, type = 'text' }) => (
    <Box width='100%'>
        <Card>
            <Flex p={'4'} justify={'between'}>
                <Box>
                    <Heading size={'4'}>{title}</Heading>
                </Box>
                <Box width={'50%'}>
                    <Text>{title}</Text>
                    <TextField.Root
                        mt={'2'}
                        width={'100%'}
                        size={'3'}
                        color='orange'
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        type={type}></TextField.Root>
                    {showUpdate && (
                        <Flex mt={'4'} align={'end'} direction={'column'} width={'100%'}>
                            <Button color='orange' width={'contents'}>
                                Update
                            </Button>
                        </Flex>
                    )}
                </Box>
            </Flex>
        </Card>
    </Box>
);

export const Account = () => {
    const navigate = useNavigate();
    // Initial values for comparison
    const initialName = 'Akshay Ashokan Pothan';
    const initialEmail = 'akshayashokanpothan@imiot.com';
    const initialDesignation = 'Chief Executive Officer';

    // State to track form values
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [designation, setDesignation] = useState(initialDesignation);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // State to track visibility of the "Update" button for each section
    const [showUpdateName, setShowUpdateName] = useState(false);
    const [showUpdateEmail, setShowUpdateEmail] = useState(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);
    const [showUpdateDesignation, setShowUpdateDesignation] = useState(false);

    // Handlers for input changes
    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowUpdateName(e.target.value !== initialName);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setShowUpdateEmail(e.target.value !== initialEmail);
    };

    const handleDesignationChange = (e) => {
        setDesignation(e.target.value);
        setShowUpdateDesignation(e.target.value !== initialDesignation);
    };

    const handlePasswordChange = (setter, originalValue, setButtonVisible) => (e) => {
        setter(e.target.value);
        setButtonVisible(
            e.target.value !== originalValue && (oldPassword !== '' || newPassword !== '')
        );
    };

    return (
        <>
            {/* Head Section */}
            <Flex my={'9'} align={'center'} direction={'column'} justify={'center'}>
                <Flex width={'70%'} align={'center'} justify={'between'}>
                    <Heading size={'7'}>Akshay Ashokan Pothan</Heading>
                    <Button onClick={() => navigate(-1)} size={'3'} variant='soft' color='gray'>
                        <IconLayoutDashboardFilled style={{ zIndex: '-1' }} size={17} />
                        Back to Dashboard
                    </Button>
                </Flex>
            </Flex>

            <Separator size={'4'} my={'0'} />
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
                    {/* Reusable Sections */}
                    <FormSection
                        title='Name'
                        value={name}
                        onChange={handleNameChange}
                        showUpdate={showUpdateName}
                        placeholder='Username'
                    />
                    <FormSection
                        title='Designation'
                        value={designation}
                        onChange={handleDesignationChange}
                        showUpdate={showUpdateDesignation}
                        placeholder='Designation'
                    />
                    <FormSection
                        title='Email'
                        value={email}
                        onChange={handleEmailChange}
                        showUpdate={showUpdateEmail}
                        placeholder='Email'
                    />

                    {/* Password Section */}
                    <Box width='100%'>
                        <Card>
                            <Flex p={'4'} justify={'between'}>
                                <Box>
                                    <Heading size={'4'}>Password</Heading>
                                </Box>
                                <Box width={'50%'}>
                                    <Text>Old Password</Text>
                                    <TextField.Root
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={oldPassword}
                                        onChange={handlePasswordChange(
                                            setOldPassword,
                                            '',
                                            setShowUpdatePassword
                                        )}
                                        placeholder='Enter password'></TextField.Root>

                                    <Text as='div' mt={'5'}>
                                        New Password
                                    </Text>
                                    <TextField.Root
                                        mt={'2'}
                                        width={'100%'}
                                        size={'3'}
                                        color='orange'
                                        value={newPassword}
                                        onChange={handlePasswordChange(
                                            setNewPassword,
                                            '',
                                            setShowUpdatePassword
                                        )}
                                        placeholder='Enter password'></TextField.Root>

                                    {showUpdatePassword && (
                                        <Flex
                                            mt={'4'}
                                            align={'end'}
                                            direction={'column'}
                                            width={'100%'}>
                                            <Button color='orange' width={'contents'}>
                                                Update
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
