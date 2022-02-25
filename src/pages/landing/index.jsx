import React from 'react'
import Button from '../../components/button'
import RobotComponent from '../../components/robotComponent'
import { ReactComponent as VrHeadsetLogo } from './akar-icons_vr-ar.svg'
import { ReactComponent as SurroundLogo } from './surroundLogo.svg'
import { ReactComponent as ControllerLogo } from './maki_gaming.svg'
import { ReactComponent as MoneyLogo } from './tabler_businessplan.svg'
import gamerImage from './gamerImage.png'
import './index.scss'
import CardContainer from '../../components/cardContainer'
import Card from '../../components/card'

export default function Landing() {
    return (
        <main>
            <section className='headerSection twoSidedSection'>
                <div className='leftSide'>
                    <h2><span>Explore</span> the fascinating world of VR</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla neque, eu elementum arcu fermentum vel.</p>
                    <Button text={"Click here"} />
                </div>
                <div className='rightSide'>
                    <RobotComponent />
                </div>
            </section>
            <section className='cardSection'>
                <CardContainer>
                    <Card>
                        <VrHeadsetLogo />
                        <h3>Experience the world through VR glasses</h3>
                    </Card>
                    <Card>
                        <SurroundLogo />
                        <h3>View all your surrounding with 360</h3>
                    </Card>
                    <Card>
                        <ControllerLogo />
                        <h3>Incredible gaming experience</h3>
                    </Card>
                    <Card>
                        <MoneyLogo />
                        <h3>Make meetings and tours easier</h3>
                    </Card>
                </CardContainer>
            </section>
            <section className='middleSection twoSidedSection'>
                <div className='leftSide'>
                    <img src={gamerImage} alt="" />
                </div>
                <div className='rightSide'>
                    <h4><span>Build</span> a whole new world</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.</p>
                </div>

            </section>
        </main>

    )
}
