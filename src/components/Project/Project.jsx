import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Project({ title, pic, tech }) {
  return (
    (
      <motion.div
        Layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }} className="project__card">
        <img src={pic} alt="My project" className="project__img" />
        <h3 className="project__title">{title}</h3>
        <a href="https://patakiistvan.netlify.app" className="project__button">
          Read more
          <i className="project__icon uil uil-arrow-right"></i>
        </a>
      </motion.div>
    )
  )
}

export default Project