import React from "react";
import styled from "styled-components";

function Overlay() {
    return (
        <Container>
            <div className='dog'>
                <h1>DOG</h1>
                <div>
                    <p>1/14/2023</p>
                </div>
            </div>

            <div className='humans'>
                <p>Dogs are a humans best friend.</p>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .dog {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "gudimba";
        font-weight: regular;
        font-size: 6rem;

        h1 {
            letter-spacing: 26px;
            margin: 0%;
        }

        p {
            font-size: 1rem;
            margin-right: 1.5rem;
            letter-spacing: 10px;
        }
    }

    .humans {
        position: absolute;
        top: 70%;
        margin: 0%;
        font-family: "yungimba";
        font-weight: normal;
        font-size: 1.5rem;
        letter-spacing: 0.5rem;
        margin-left: 10px;
    }
`;

export default Overlay;
