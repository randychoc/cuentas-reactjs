import React from 'react'
// import FatalErrorImg from '../img/add.png'

const FatalError = () => (
    <div className="container text-center">
        <div className="col-12 ">
            <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
        </div>

        <div className="col-12">
            <img src="https://www.parallels.com/blogs/app/uploads/2018/12/BlogPost_735x413_error.png"
                alt="500 Unexpected Error" width="90%" height="auto" className="Error_Image img-fluid" />
        </div>
    </div>
)

export default FatalError