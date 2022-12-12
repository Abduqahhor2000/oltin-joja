import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const notifyLoginSuccess = () => toast.success('Login is correct', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

export const notifyLoginError = () => toast.error('Login or password incorrect', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

