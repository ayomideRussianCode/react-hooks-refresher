import { useEffect } from "react";

export default function Timer (){
    useEffect(() => {
        const interval = setInterval (() => {
            setTimeout(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}