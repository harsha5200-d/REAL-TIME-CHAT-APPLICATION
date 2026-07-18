import {useAuthStore} from "../store/useAuthStore";

const Navbar = () =>{

    const {authUser} = useAuthStore()
    return <div> Navabr </div>;
};

export default Navbar;

