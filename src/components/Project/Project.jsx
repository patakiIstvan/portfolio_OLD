import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Project({ title, desc, github, pic, tech }) {
  return (
    (
      <motion.div
        Layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }} className="project__card">
        <img src={pic} alt="My project" className="project__img" />
        <div className="info-container">
          <h3 className="project__title">{title}</h3>
          <p className="project__description">{desc}</p>
        </div>
      </motion.div>
    )
  )
}

export default Project