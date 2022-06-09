import React from 'react'

export default function Helplinebar() {
  return (
    <div className="container-fluid border-bottom py-1">
    <div className="row">
      <div className="col">
      </div>
      <div className="col">
      </div>
      <div className="col">
      </div>
      <div className="col">
      </div>
      <div className="col-5 text-center">
        <font className="helpline">1800 1800 0172 </font>
        <a className='screen-link' href="http://lgpunjab.gov.in/eSewa/lgpunjab-2/screen-reader/">
          <font className="screen">Screen Reader</font>
        </a>
        <div className="font-images">
          <img className='img-one' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/minus.png"
            alt="+" />
          <img className='img-two' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/100.png"
            alt="+" />
          <img className='img-three' src="http://lgpunjab.gov.in/eSewa/arnivala/wp-content/plugins/zoom-widget/elements/images/1/plus.png"
            alt="+" />
        </div>

        <div className="dropdown">
          <button className="btn btn-sm dropdown-toggle bg-white border" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Select Language
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Punjabi</a></li>
          </ul>
        </div>
      </div>
      <div className="col">
      </div>
    </div>
  </div>
  )
}
