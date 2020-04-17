import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayImage from "./DisplayImage.js"
import Header from "./Header.js"

export default function ImagesPage () {

    const [image, setImage] = useState({})
    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=hWzDdthh7TVbTzckIPaVsk2r7lfdGA8NoaQ0Tun6'

    useEffect(() => {
        axios.get(nasaUrl)
        .then(function (response) {
            const nasaImage = response.data
            setImage(nasaImage)
        })
        .catch(function (error) {
            console.log(error.response)
        })
    
    }, [])

    return (
        <div>
            <Header />
            <DisplayImage 
                src={image.url}
                alt="Nasa Image"
                photographer={image.copyright} 
                date={image.date} 
                explanation={image.explanation}/>
        </div>
    )
}