/**
 * Created by juliakim on 4/21/17.
 */
import React from 'react';

const Image = ({link, alt}) => {
    const hello = () => {
        console.log("hello")
    }

    return (
        <div>
            {hello()}
            <img src={link}  alt={alt}/>
        </div>
    )
}

export default Image;