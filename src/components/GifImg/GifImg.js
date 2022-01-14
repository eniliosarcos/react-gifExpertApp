import PropTypes from 'prop-types'
import { useEffect } from 'react';
import './GifImg.css'

const GifImg = ({ title, url }) => {

    const handleAnimation = (e) =>{
        if(e.target.complete){
            e.target.classList.remove('hide');
            e.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    }

    return (
            <img className='hide' src={url} alt={title} onLoad={handleAnimation}></img>
    )
}

GifImg.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifImg
