import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About .</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
             quam aperiam eligendi repudiandae nobis natus eveniet sunt iusto itaque,
             nisi repellat voluptas corrupti sint voluptates, obcaecati possimus consequatur
             ducimus est?</p>
        </div>
    )
}

export default Rainbow(About)