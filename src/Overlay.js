import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Overlay() {
    //Animations
    const titleAnim = {
        hidden: { opacity: 0, x: -1000 },
        show: { opacity: 1, x: 10, transition: { duration: 2 } },
    };

    const dateAnim = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: -10, transition: { duration: 2, easing: "easeOut" } },
    };

    const subTitleAnim = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 1.5, easing: "easeOut" } },
    };
    return (
        <Container>
            <div className='dog'>
                <motion.div variants={titleAnim} initial='hidden' animate='show'>
                    <h1>DOG</h1>
                </motion.div>
                <motion.div variants={dateAnim} initial='hidden' animate='show'>
                    <p>1/14/2023</p>
                </motion.div>
            </div>

            <motion.div variants={subTitleAnim} initial='hidden' animate='show' className='humans'>
                <p>
                    <span>Dogs</span> & <span>Milk</span> are a humans best friend.
                </p>
            </motion.div>
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
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "gudimba";
        font-weight: regular;
        font-size: 6rem;

        h1 {
            /* border: 1px solid black; */

            letter-spacing: 26px;
            margin: 0%;
        }

        p {
            font-size: 1rem;
            letter-spacing: 10px;
        }
    }
    span {
        font-family: "gudimba";
        font-weight: regular;
        color: #ffcccc;
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
