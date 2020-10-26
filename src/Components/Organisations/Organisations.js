import React from "react"
import {Link} from "react-router-dom"
import "./Organisations.scss"

export const Box = ({org}) => (
    <div className="org">
        <div className={!org.class ? "org__image" : org.class }>
        <img src={org.logo} alt={org.name} className="image" />
        </div>
        <h3 className="org__title">{org.name}</h3>
        <button className="btn btn-apply"><Link to={org.link} className="linkFix btn-projects">View Projects</Link></button>
        </div>
)

export default () => {
    return (
        <>
        <section className="section-organisation" id="js-organisations">
        <div className="row">
        <h1 className="section-title">Organisations 2019</h1>
        <div className="grid-organisation">

        {Organisations2019.length !== 0 ? Organisations2019.map((org,index) => (
       <Box key={index} org={org} />
        )): <h4>Coming Soon</h4> }

        </div>
        </div>
        <div className="row">
        <h1 className="section-title">Organisations 2020</h1>
        <div className="grid-organisation">

        {Organisations2020.length !== 0 ? Organisations2019.map((org,index) => (
            <Box key={index} org={org} />
             )): <h4 className="coming-soon-text">Coming Soon</h4> }

        </div>
        </div>
        </section>
        </>
    )
}

const Organisations2019 = [
    {
        name : "DSC NSEC",
        logo : require("../../Assets/dscnsec.png"),
        class: "dsc-logo",
        link: "/projects/dscnsec"
    },
    {
        name : "The Code Foundation",
        logo : require("../../Assets/tcf.jpg"),
        link: "/projects/tcf"
    },
]
const Organisations2020 = [

]