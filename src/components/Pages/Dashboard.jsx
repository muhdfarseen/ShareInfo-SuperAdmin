import { Flex, Separator } from '@radix-ui/themes';
import { Navbar } from '../ui/Navbar/Navbar';
import { Sidebar } from '../ui/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <div>
            <Flex direction={'column'} height={'100vh'}>
                <div style={{ position: 'sticky', top: 0, height: 65, zIndex: 1000 }}>
                    <Navbar />
                </div>
                <Flex>
                    <Flex
                        style={{
                            position: 'sticky',
                            top: 65,
                            zIndex: 1000,
                            height: 'calc(100vh - 65px)'
                        }}>
                        <Sidebar />
                        <Separator size={'4'} orientation={'vertical'} />
                    </Flex>
                    <Outlet />
                </Flex>
            </Flex>
        </div>
    );
};
