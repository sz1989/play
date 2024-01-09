import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { User } from "./demo";

interface DashboardProps {
    user: User;
}

export default function Dashboard({user}: DashboardProps) {
    return (
        <div>
        'Dashboard'
        <Sidebar user={user}></Sidebar>
        <Profile user={user}></Profile>            
        </div>
    );
}