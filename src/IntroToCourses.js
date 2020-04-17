import React from "react";
import styled from "styled-components";

const Intro = styled.p` 
    font-size: 25px;
    text-align: center;
`;

export default function ({image}) {
    return (
        <>
            <Intro>
                Here's a list of courses you can take:
            </Intro>
        </>
    )
}