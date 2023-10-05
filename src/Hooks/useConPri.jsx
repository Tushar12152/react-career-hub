import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useConPri = () => {
   const all=useContext(AuthContext)
    return all
}
export default useConPri;