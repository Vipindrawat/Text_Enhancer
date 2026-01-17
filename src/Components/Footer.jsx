import React from 'react'

function Footer(props) {
  return (
    <footer>
      <div className={`fixed-bottom footer bg-${props.mode?"dark":"primary"}`}>
          <div className={`text-center text-${props.mode?"light":"dark"} p-3`} >
            © 2026 Copyright : : TextEnhancer
          </div>
      </div>
    </footer>
  )
}

export default Footer;
