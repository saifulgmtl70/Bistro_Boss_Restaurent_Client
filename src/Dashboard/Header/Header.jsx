import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaEnvelope, FaUserCircle   } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div>
                <RiMenu2Line className="text-[20px] text-gray-700 font-bold "/>
            </div>

            <div>
                <CiSearch className="text-[20px] text-gray-700 font-bold "/>
            </div>

            <div>
                <FaBell className="text-[20px] text-gray-700 font-bold "/>
                <FaEnvelope className="text-[20px] text-gray-700 font-bold "/>
                <FaUserCircle  className="text-[20px] text-gray-700 font-bold "/>
            </div>

        </header>
    );
};

export default Header;