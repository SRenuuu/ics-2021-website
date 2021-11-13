import React, {useEffect, useRef, useState} from 'react'
// import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const BGAnimation = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: false,
                gyroControls: true,
                minHeight: 100,
                minWidth: 100,
                scale: 1.20,
                scaleMobile: 1.60,
                color: '#ff6600',
                backgroundColor: '#000000',
                points: 10.00,
                maxDistance: 20.00,
                spacing: 15.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} style={{height: "100vh", width: "100vw", zIndex: 0, position: "fixed"}}></div>
}

export default BGAnimation;
