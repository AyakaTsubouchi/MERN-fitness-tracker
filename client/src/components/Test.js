import React,{useEffect} from 'react';
import axios from "axios";

const Test = () => {

    
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/exercises/test/`)
        .then((response) => {
         console.log(response.data)
    }, [])})
    
    return <div>check console log</div>
    
};

export default Test;