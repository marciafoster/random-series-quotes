import React, { useState } from 'react';

const NavBar = ({ setRandom }) => {
    const [quote, setQuote] = useState('')

    const handleChange = (event) => {
        setQuote((prev) => event.target.value) 
    }

    const fetchRandomQuote = (event) => {
        event.preventDefault()
        fetch(`https://api.seriesquotes.10cyrilc.me/quote/${quote}`)
        .then(res => res.json())
        .then(res => {
            setQuote(quote => "")
            
        })
    }
}

