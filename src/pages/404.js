import React from 'react'
// import NotFoundImg from '../img/add.png'

const NotFound = () => (
    <div className="container text-center">
        <div className="col-12">
            <h1 className="Error_Text">Error: 404 Page Not Found</h1>
        </div>

        <div className="col-12">
            <img src="https://e7.pngegg.com/pngimages/56/403/png-clipart-http-404-error-wrong-http-404-404-error.png"
                alt="404 Page Not Found" width="90%" height="auto" className="Error_Image img-fluid" />
        </div>
    </div>
)

export default NotFound