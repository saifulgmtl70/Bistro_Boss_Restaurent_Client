import { Link } from "react-router-dom";


const ErrorPage = () => {

    

    return (
 

            <div className="grid h-screen px-4 py-8 bg-white place-content-center">
                <div className="text-center py-12">
                    
                    <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" className="w-11/12  mx-auto" />

                    <h1
                    className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                    OOOPS!!! Sorry. Nothing found
                    </h1>

                    <p className=" text-gray-500">We can not find that page.</p>
                    <Link to="/">
                     <button className="px-12 py-3 rounded-sm bg-red-600 my-5 text-white">Back to Home</button>
                    </Link>
                    
                </div>
            </div>
    );
};

export default ErrorPage;