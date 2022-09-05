import React from 'react'

export default function Cards(props) {
    return (
        <div className='photos'>
            <img src={props.url} alt="" />
        </div>
    )
}
