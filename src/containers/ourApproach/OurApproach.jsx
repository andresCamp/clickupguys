import React from 'react'
import './ourapproach.css';
import discovery from '../../assets/DiscoverIcon.png'
import mapping from '../../assets/MappingIcon.png'
import alchemy from '../../assets/AlchemyIcon.png'

const OurApproach = () => {
    return (
        <div className='cug__approach section__padding' id="ourapproach">
            <div className='cug__approach-title'>
                <h1>Our Approach</h1>
                <h1 className='cug__approach-subtitle'>Our time tested implementation process places your needs at the center of everything we do.</h1>
            </div>

            <div className='cug_approach-phase'>
                <div>
                    <img src={discovery} alt="discovery" />
                    <h2>Phase One: Discovery</h2>
                    <p>Through a series of functional interviews we ask questions and learn about your workflows and processes. We discover where you are today, what works well, what problems you face, and where you want to go. Our hollistic approach presents us with an intimate knowlege of how your company works at every facet.</p>
                </div>

                <div>
                    <img src={mapping} alt="mapping" />
                    <h2>Phase Two: Mapping</h2>
                    <p>We design and build out a custom system on ClickUp from the ground up without the use of templates. We map your needs to what the software can do, focusing exactly on your needs. Repetitive tasks are automated and workflows and processes are optimized and digitized.</p>
                </div>

                <div>
                    <img src={alchemy} alt="alchemy" />
                    <h2>Phase Three: Alchemy</h2>
                    <p>This is where the magic happens. A well designed and implemented ClickUp will transform your business by orders of magnitude. In order to acheive this, we guide a culture shift alongside training and enure that every member of the company is competent and fully commited to using the system.</p>
                </div>

            </div>

            <div className='cug__about-button'>
                    <button type='button'>Schedule a Demo</button>
            </div>


        </div>
    )
}

export default OurApproach