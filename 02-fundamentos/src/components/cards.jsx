import React from 'react'
import PropTypes from "prop-types"

import "./card.css"
import card from './card'

const cards = ({ lang, img, fcolor, scolor }) => {
    return (
        <div className="card" style={{
            background: "blue"
        }} >
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div >
    )
}

card.PropTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
}

export default cards
