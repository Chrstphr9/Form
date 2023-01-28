import React from 'react'

const Modal = ({open}) => {
    if (!open) return null
  return (
    <div>
        <div className="overlay">
            <div className="modalContainer">
            <div className="modalRight">
                <p className="closeBtn">X</p>
                <div className="content">
                    <p>Rest Passwoed Has Been Sent To Your Email</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal