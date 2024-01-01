import { FaUsers  } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiChefToque } from "react-icons/gi";
// import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {

    // const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });



    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };


    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })


    return (
        <main>
            <section className="px-8">
                <h2 className="text-start mx-10 my-10 text-3xl font_cinzel">Hi, Werlcome Back!</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-7">

                    <div className='px-10 py-5 flex items-center justify-center gap-10 rounded-md bg-gradient-to-r from-[#BB34F5] to-[#f5f2f5]'>
                        <div className='text-[50px] text-white font-bold'>
                            <IoWalletSharp />
                        </div>
                        <div>
                            <h2 className='text-[40px] text-white font-bold'>{stats.revenue}</h2>
                            <p className='text-[24px] text-white'>Revenue</p>
                        </div>
                    </div>

                    <div className='px-10 py-5 flex items-center justify-center gap-10 rounded-md bg-gradient-to-r from-[#D3A256] to-[#f5f2f5]'>
                        <div className='text-[50px] text-white font-bold'>
                            <FaUsers  />
                        </div>
                        <div>
                            <h2 className='text-[40px] text-white font-bold'>{stats.users}</h2>
                            <p className='text-[24px] text-white'>Customers</p>
                        </div>
                    </div>

                    <div className='px-10 py-5 flex items-center justify-center gap-10  rounded-md bg-gradient-to-r from-[#FE4880] to-[#f5f2f5]'>
                        <div  className='text-[50px] text-white font-bold'>
                            <GiChefToque />
                        </div>
                        <div>
                            <h2 className='text-[40px] text-white font-bold'>{stats.menuItems}</h2>
                            <p className='text-[24px] text-white'>Products</p>
                        </div>
                    </div>

                    <div className='px-10 py-5 flex items-center justify-center gap-10  rounded-md bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]'>
                        <div  className='text-[50px] text-white font-bold'>
                            <CiDeliveryTruck />
                        </div>
                        <div>
                            <h2 className='text-[40px] text-white font-bold'>{stats.orders}</h2>
                            <p className='text-[24px] text-white'>Orders</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className="px-8 py-7">


                <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>


            </section>

        </main>
    );
};

export default AdminHome;