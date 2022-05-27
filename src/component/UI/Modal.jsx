import React from 'react'
import reactDom from 'react-dom'
import './modal.css'

const portalElement = document.getElementById('overlays')


const Backdrop = props => {
    return(
        <>
            <div onClick={props.onHideCart} className="backdrop">

            </div>
        </>
    )
}

const ModalOverlay = props => {
     return(
        <>
            <div className="modal">
                <div>
                    {props.children}
                </div>   
            </div>
        </>
    )
} 

function BasicModal(props) {

  return (
    <>
     
            <div>
                {reactDom.createPortal(<Backdrop onHideCart={props.onHideCart} ></Backdrop>, portalElement)}
                {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            </div>
       
    </>
  )
}

export default BasicModal