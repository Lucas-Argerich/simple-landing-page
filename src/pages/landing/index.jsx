import React from 'react'
import Button from '../../components/button'
import RobotComponent from '../../components/robotComponent'
import './index.scss'

export default function Landing() {
    return (
        <main>
            <section className='headerSection'>
                <div className='leftSide'>
                    <h2><span>Explore</span> the fascinating world of VR</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla neque, eu elementum arcu fermentum vel.</p>
                    <Button text={"Click here"} />
                </div>
                <div className='rightSide'>
                    <RobotComponent />
                </div>
            </section>
        </main>

    )
}
