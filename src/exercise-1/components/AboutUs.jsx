import React from 'react'
import { Link } from 'react-router-dom'

class AboutUs extends React.Component {

    render() {
        return <div>
        <p>Company: Thoughtworks Local</p>
        <p>Location: Cheng'du</p>
        <br />
        <p>For more information,please</p>
        <p>view our <Link to="/">website</Link></p>
    </div>
    }
}

export default AboutUs;