import { User } from "./demo";

export interface SideBarProps {
  user: User;
}

export default function Sidebar({ user }: SideBarProps) {
  return <div>{user.name}</div>;
}
