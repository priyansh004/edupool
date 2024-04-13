
import {app} from "@/firebase/config";
import { signOut } from "firebase/auth";
const auth = getAuth(app);

export const signOutUser = async () => {
  try {
    await signOut(auth);
    setUser(null);
  } catch (error) {
    setError(error.message);
  }
};