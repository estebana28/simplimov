import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="fo-contacto">
          <h3>Contacto</h3>
          <h4>1800 210 0007</h4>
          <h4>test@test.com</h4>
          <h4>226 N Water St, Milwaukee, WI 53202, Estados Unidos</h4>
        </div>
        <ul className="fo-redes">
          <h3>Nuestras Redes</h3>
          <li>
            <a href="fb">FB</a>
          </li>
          <li>
            <a href="tw">TW</a>
          </li>
          <li>
            <a href="yt">YT</a>
          </li>
          <li>
            <a href="in">IN</a>
          </li>
          <li>
            <a href="wz">WZ</a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer

