"use client";
import { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(response => response.json())
      .then(data => {
        const random = Math.floor(Math.random() * data.quotes.length);
        setQuote (data.quotes[random].quote);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300">
      <h1 className="text-2xl text-white">{quote}</h1>
    </div>
  );
}
