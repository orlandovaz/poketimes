import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/About')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
             quam aperiam eligendi repudiandae nobis natus eveniet sunt iusto itaque,
             nisi repellat voluptas corrupti sint voluptates, obcaecati possimus consequatur
             ducimus est?</p>
        </div>
    )
}

export default Contact