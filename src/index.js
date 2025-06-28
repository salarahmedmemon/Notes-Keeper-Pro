import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.querySelector("#root"))
.render( 
    <Provider store={ store }>
        <App />
        <Toaster />
    </Provider>
);