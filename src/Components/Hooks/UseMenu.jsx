import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseMenu = () => { 

    // const [menus, setMenus] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() =>{
    //     fetch('https://bistro-boss-restaurent-server-indol.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenus(data);
    //         setLoading(false)
    //       });
           
    // },[])


    // return [menus, loading]

    const axiosPublic = useAxiosPublic();

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })


    return [menu, loading, refetch]


};

export default UseMenu;