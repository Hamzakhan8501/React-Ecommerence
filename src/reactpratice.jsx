import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { useState } from "react";

export default function Pratic() {

    const [add, setAdd] = useState(window.innerWidth);

    // function num() {
    //     setAdd((x) => x - 1)
    // }
    // function num1() {
    //     setAdd((y) => y + 1)
    // }

    // useEffect(()=>
    // {
    //     console.log("render")
    // })
    function handle() {
        setAdd(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handle)
    }, [])

    return (
        <>
            {/* <button className="btn btn-primary" onClick={()=>setAdd('Num')}>Addone</button>
            {add}
            <button className="btn btn-primary" onClick={()=> setAdd('Sub')}>Subone</button> */}

            {add}
        </>
    )
}