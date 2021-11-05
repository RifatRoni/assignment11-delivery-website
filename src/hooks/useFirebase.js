import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    /*-----------------------------------------------------------
    USER LOGIN UNPLUGGED:
    for page reload during booking and User login then user Empty
    ------------------------------------------------------------*/
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true) //for login unplug problem
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        /* signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false)) //for login unplug problem   */
    }

    //OBSERVE USER STATE CHANGED
    //any time user state can be changed so onAuthStateChanged need to use.
    //to increase performance use this

    useEffect( () => {
        const unsubscribed =  onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false); //for login unplug problem
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false)) //for login unplug problem
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;