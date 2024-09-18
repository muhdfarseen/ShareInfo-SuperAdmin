import {
    IconBasketFilled,
    IconUserFilled,
    IconLayoutKanbanFilled,
    IconFileFilled,
    IconSettingsFilled,
    IconStack2Filled,
    IconHomeFilled
} from '@tabler/icons-react';

export const sidebarData = [
    {
        name: 'navlinkone',
        icon: <IconHomeFilled size={20} stroke={1.3} />,
        link: ''
    },
    {
        name: 'navlinktwo',
        icon: <IconUserFilled size={20} stroke={1.3} />,
        link: ''
    },
    {
        name: 'navlinkthree',
        icon: <IconLayoutKanbanFilled size={20} stroke={1.3} />,
        link: ''
    },
    {
        name: 'challenges',
        icon: <IconStack2Filled size={20} stroke={1.3} />,
        link: 'challenges'
    },
    {
        name: 'navlinkfive',
        icon: <IconSettingsFilled size={20} stroke={1.3} />,
        link: ''
    },
    {
        name: 'navlinksix',
        icon: <IconFileFilled size={20} stroke={1.3} />,
        link: ''
    },
    {
        name: 'navlinkseven',
        icon: <IconBasketFilled size={20} stroke={1.3} />,
        link: ''
    }
];
