import React from 'react'

const Modal = ({open}) => {
    if (!open) return null
  return (
    <div>
        <div className="overlay">
            <div className="modalContainer">
                
            </div>
        </div>
    </div>
  )
}

export default Modal