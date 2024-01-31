import { User } from "./demo";

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  return <div>from Profile = {user.name}</div>;
}
