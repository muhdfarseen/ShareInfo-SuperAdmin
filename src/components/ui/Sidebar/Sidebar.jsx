import { useEffect, useState, useCallback } from 'react';
import { Flex, IconButton } from '@radix-ui/themes';
import { sidebarData } from './SidebarData';
import classes from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const navigate = useNavigate();

    const handleIconClick = useCallback(
        (name, link) => {
            setActiveIcon(name);
            navigate(link);
        },
        [navigate]
    );

    useEffect(() => {
        handleIconClick(sidebarData[0].name, sidebarData[0].link);
    }, [handleIconClick]);

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
                        onClick={() => handleIconClick(item.name, item.link)}>
                        {item.icon}
                    </IconButton>
                ))}
            </Flex>
        </div>
    );
};
