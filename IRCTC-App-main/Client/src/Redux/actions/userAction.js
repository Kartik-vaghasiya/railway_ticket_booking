import axios from 'axios'
import { message } from 'antd';


export const signupUser = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        await axios.post('/api/user/signup', values);
        message.success("User Registered Successfully");
        setTimeout(() => {
            window.location.href = '/signin';
        }, 1000);
        dispatch({ type: 'LOADING', payload: false })

    } catch (error) {
        console.log(values);
        message.error('someting went wrong please Try later')
        dispatch({ type: 'LOADING', payload: false })

    }
}



export const loginUser = (values) => async dispatch => {

    try {
        const user = await axios.post('/api/user/signin', values);
        message.success('Login Successfully')
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = '/home';
        }, 1000);
    } catch (error) {
        message.error('Invalid Credentials !');
    }
}

/*export const forgetPass = (values) => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        await axios.post('/api/user/forgetpassword', values)

        message.success('Password Update Successfull')
        setTimeout(() => {
            window.location.href = '/login';
        }, 1000)
        dispatch({ type: 'LOADING', payload: false })

    } catch (error) {
        message.error("Please try again ");
        dispatch({ type: 'LOADING', payload: false })
    }
}*/