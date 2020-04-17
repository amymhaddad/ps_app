import React from "react";
import styled from "styled-components";

const Artist = styled.h1`
    color: red;
    text-align: "center;
`;

const Date = styled.p`
    font-size: 20px;
    color: navy;
`;

const Explanation = styled.p` 
    font-size: 14px;
    line-height: 1.2px;
`;

const Image = styled.img`
    height: 200px;
    width: 250px;
`;


export default function DisplayImage({src, alt, photographer, date, explanation}) {
    return (
        <div>  
            <Image src={src} alt={alt}></Image>
            <Artist>{photographer}</Artist>
            <Date>{date}</Date>
            <Explanation>{explanation}</Explanation>
        </div>

    )
}