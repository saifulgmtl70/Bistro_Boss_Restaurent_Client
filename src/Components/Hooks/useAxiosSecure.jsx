import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import React from 'react';

const axiosSecure = axios.create({
  baseURL: 'https://bistro-boss-restaurent-server-indol.vercel.app'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  React.useEffect(() => {
    // request interceptor to add authorization header for every secure call to the api
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor to handle 401 and 403 errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Cleanup interceptors when unmounting
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
