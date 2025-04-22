"use client";

import { useState } from "react";

export default function Form () {
    const [name, setName] = useState();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold text-pink-500 pb-4">Hello, {name || "Guest"}!</h1>
            <input className=" rounded border-2 border-purple-400 p-4 " type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}