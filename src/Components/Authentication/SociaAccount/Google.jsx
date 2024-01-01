import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Google = () => {

    const {signInWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
        })
    }


    return (
        <div className='text-center'>
            <h2 className='text-[#333] font-bold mb-5'>Or sign in with</h2>
            <div className='flex items-center justify-center gap-5'>
                <button onClick={handleGoogleSignIn} className='p-3 rounded-full border delay-300 transition-all border-gray-400 '>
                    <FaGoogle />
                </button>
                <button className='p-3 rounded-full border border-gray-400'>
                    <FaFacebookF />
                </button>

                <button className='p-3 rounded-full border border-gray-400'>
                    <FaGithub />
                </button>

            </div>
        </div>
    );
};

export default Google;