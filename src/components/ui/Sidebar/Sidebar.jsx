import { useEffect, useState, useCallback } from 'react';
import { Flex, IconButton } from '@radix-ui/themes';
import { sidebarData } from './SidebarData';
import classes from './Sidebar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleIconClick = useCallback(
        (name, link) => {
            setActiveIcon(name);
            navigate(link);
        },
        [navigate]
    );

    useEffect(() => {
        const currentPath = location.pathname.replace('/dashboard/', '');
        const activeItem = sidebarData.find((item) =>
            Array.isArray(item.link) ? item.link.includes(currentPath) : item.link === currentPath
        );
        if (activeItem) {
            setActiveIcon(activeItem.name);
        } else {
            setActiveIcon(null);
        }
    }, [location.pathname]);

    return (
        <div>
            <Flex className={classes.sidebarContainer} p={'3'} gap={'4'} direction={'column'}>
                {sidebarData.map((item) => (
                    <IconButton
                        key={item.name}
                        style={{
                            color: activeIcon === item.name ? 'var(--orange-9)' : 'var(--gray-8)',
                            cursor: 'pointer'
                        }}
                        m={'2'}
                        variant={'ghost'}
                        color='gray'
                        onClick={() => handleIconClick(item.name, item.link[0])}>
                        {item.icon}
                    </IconButton>
                ))}
            </Flex>
        </div>
    );
};
