
import useAuth from './useAuth';
import axios from "../api/axios";
import {useNavigate} from "react-router-dom";
const REFRESH_URL = '/api/auth/refresh-token';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate()

    const refresh = async () => {
        const response = await axios.get(REFRESH_URL,
                                    {
                                        mode: 'no-cors',
                                        headers: {
                                            'Authorization': 'Bearer '+localStorage.getItem('accessToken'),
                                            'Access-Control-Allow-Origin': '*',
                                            'Access-Control-Allow-Credentials': true,
                                            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                            'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
                                    },
                                }).catch((error) => {
                                        if (error.response?.status === 401) {
                                            navigate("/", { replace: true });
                                        }

                                    });
       if(localStorage.getItem('accessToken')===null){
            setAuth(prev => {
                return {}
            })


        } else{
           
            localStorage.setItem('accessToken',response.data.access_token)
            setAuth(prev => {
                return { ...prev,user:response.data.user,  accessToken: response.data.access_token }

            });

        }
       // return response.data.accessToken;

    }
    return refresh;
};

export default useRefreshToken;
