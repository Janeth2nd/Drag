import React from 'react'

export const Photos = ({ photos = {} }) => {
    return (
        <div className='main'>
            {
                photos.map((item, index) => (
                    <div key={index} class='card' draggable="true">
                        <div>

                            <div class='card-title'>{item.url}</div>

                            {/* <img src={item.image} alt="" /> */}
                        </div>
                    </div>
                ))}
        </div>
    );
};