import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {BsXDiamondFill} from "react-icons/bs"
import {GiCrystalize} from "react-icons/gi"
import {IconContext} from "react-icons/lib"
import "./Pricing.css"


function Pricing() {
    return (
        <IconContext.Provider value={{color:"#fff",size:64}}>
        <div>
            <div className="pricing__section">
               <div className="pricing__wrapper">
                <h1 className="pricing__heading">Pricing</h1>
                <div className="pricing__container">
                    <Link to="sign-up" className="pricing__container-card">
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaFire/>
                            </div>
                            <h3>Starter</h3>
                            <h4>$8.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>500 Transactions</li>
                                <li>3% Cash Back</li>
                                <li>$5000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                        </div>
                    </Link>

                    <Link to="sign-up" className="pricing__container-card">
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <BsXDiamondFill/>
                            </div>
                            <h3>Gold</h3>
                            <h4>$25.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>1000 Transactions</li>
                                <li>4% Cash Back</li>
                                <li>$25,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="red">Choose Plan</Button>
                        </div>
                    </Link>


                    <Link to="sign-up" className="pricing__container-card">
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <GiCrystalize/>
                            </div>
                            <h3>Diamond</h3>
                            <h4>$95.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>Unlimited Transactions</li>
                                <li>5% Cash Back</li>
                                <li>$50,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                        </div>
                    </Link>


                </div>
                </div> 
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
