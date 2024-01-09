import { User } from "./demo";

interface SideBarProps {
    user: User;
}

export default function Sidebar({user}: SideBarProps) {
 return <div>
    {user.name}
 </div>
};