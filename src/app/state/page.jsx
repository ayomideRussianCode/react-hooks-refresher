"use client";

import { useState } from "react";


export default function Counter () {
    const [count, setCount] =useState(0);
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <p>You clicked me {count} times!</p>
            <button className="rounded-full p-4 bg-red-500" onClick = {() => setCount(count+1)} >Don't click me!</button>
        </div>
    );
}