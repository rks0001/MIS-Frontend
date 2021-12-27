import React from 'react'
import tu from '../components/images/TUGateDoodle.png'

const Section1 = () => {
    return (
        <section className="sctn_one">
            <div className="cdiv1">
            <img className="tnp1" src={tu} alt="tnp1" width="800" height="300"/>
            <div className="stext1">Training and Placement Cell</div>
            <div className="stext2">School of Engineering, Tezpur University</div>
            </div>
        </section>
    )
}

export default Section1
