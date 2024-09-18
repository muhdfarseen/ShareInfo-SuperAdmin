import { Account } from '../ui/MyAccount/Account';
import { Navbar } from '../ui/Navbar/Navbar';

export const MyAccount = () => {
    return (
        <div>
            <div style={{ height: '64px', position: 'sticky', top: '0', zIndex: 1000 }}>
                <Navbar />
            </div>
            <Account />
        </div>
    );
};
