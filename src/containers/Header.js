import React, {Component} from  'react'

class Header extends Component{
    render() {
        return(
            <div>
                {/* <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Quiz Web App By TofBabs
                    </a>
                </div>
            </nav> */}
            <div className="one navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a href="" className="navbar-brand">QuizWebApp By TofBabs</a>
                </div>
                <div>
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>
            </div>
        )
    }
}



export default Header