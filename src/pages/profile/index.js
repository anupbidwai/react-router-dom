import { useAuth } from "@/utility/auth";

function Profile() {
  const auth = useAuth();
  return <h1>Profile for {auth.token}</h1>;
}
export default Profile;
