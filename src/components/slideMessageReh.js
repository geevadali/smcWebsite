import React from 'react'
import {useSpring, animated} from 'react-spring';

const noteStyle = {
    background: '#80E2FF',
    color: 'white',
    padding: '1.5rem'

}

function SlideMessageReh() {

    const slideStyle = useSpring({
        from: {
            opacity: 0,
            marginLeft:-500
        },
        to:{
            opacity: 1,
            marginLeft:0
        }
    });


    return (
    
    <animated.div style={slideStyle}>
        <div style={noteStyle}>
            
            <h1>
                Need some practice?
            </h1>
            <h3>
                Please fill the form below to book a Rehearsal Space
            </h3>
        </div>
    </animated.div>
           
    )
}

export default SlideMessageReh
