import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                    <input type={'text'} className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='button_colour w-15 grow f4 link ph3 pv2 dib white ' onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm