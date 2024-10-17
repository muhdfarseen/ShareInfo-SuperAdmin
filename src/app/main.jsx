import { Provider } from 'react-redux';
import { store } from '../redux/store/configureStore.js';
import { App } from './App';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './index.css';

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
