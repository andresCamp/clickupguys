import React from 'react'
import './possibility.css';
import james from '../../assets/JamesImage.png'
import alejandro from '../../assets/AlejandroImage.png'
import jenna from '../../assets/JennaImage.png'

const Possibility = () => {
    return (
        <div className='cug__casestudies' id= "casestudies">
            <div className='cug__casestudies-title'>
                <h1>Case Studies</h1>
                <p>See how our client’s story maps to yours.</p>
            </div>

            <div className='cug__casestudies-profiles'>
                <div className='cug__casestudies-profiles_radicalshoots'>
                    <h2>StartUp</h2>
                    <h2 className='cug__casestudies-people'>(1-50 people)</h2>
                    <p>Top to Bottom Integration</p>
                    <ul>
                        <li>growing opertion w/ API dataflow</li>
                        <li>Client Relation Management</li>
                        <li>Marketing Suite</li>
                        <li>Meeting Manager</li>
                        <li>MVP Project Management</li>
                    </ul>
                    <p>“ClickUp totally revolutionized how we work and our bandwidth. Our work process is a huge competitive advantage for us. None of our comptetiors can match us. There’s going to reach a point where people without ClickUp won’t be able to compete with those who do. “</p>
                    <img src={james} alt="james" />
                    <p>James Valencia</p>
                    <p>CEO Radical Shoots</p>
                    <p>7 employees, Urban Agriculture</p>
                </div>

                <div className='cug__casestudies-profiles_siitto'>
                    <h2>Enterprise Level</h2>
                    <h2 className='cug__casestudies-people'>(50-500 people)</h2>
                    <p>Enterprise Tools</p>
                    <ul>
                        <li>Client Relation Management</li>
                        <li>Nationwide Pricelists</li>
                        <li>Engineering PM + Drawings Database</li>
                        <li>Customer Satisfaction Feedback</li>
                        <li>Employee Onboarding</li>
                    </ul>
                    <p>“Andrés is timely, professional and worked hard to move our company onto an intranet using ClickUp. Our sales team constantly complement our system to me and we are all very impressed by the productivity gains. The difference is night and day. I can track my employees work from anywhere in the world.”</p>
                    <img src={alejandro} alt="alejandro" />
                    <p>Alejandro de la Borbolla</p>
                    <p>CEO Siitto Arrendador de Montacargas</p>
                    <p>85 Employees Industrial Equipment</p>
                </div>

                <div className='cug__casestudies-profiles_clover'>
                    <h2>Freelance</h2>
                    <h2 className='cug__casestudies-people'>(individual)</h2>
                    <p>Organization Tools</p>
                    <ul>
                        <li>Smart Day Scheduler</li>
                        <li>Client Relation Management</li>
                        <li>Milestones </li>
                        <li>Project Management</li>
                        <li>Blog Database</li>
                    </ul>
                    <p>“Staying organized is very important to my business. Oliver and Andrés were very attentive as I walked them through my workflow and put everyrthing on the platform just how I want it. I’ve been able to take more clients because of their work, I’m very satified.”</p>
                    <img src={jenna} alt="jenna" />
                    <p>Jenna Clover</p>
                    <p>CEO Clover Graphic Design</p>
                    <p>Freelancer, Graphic Designer</p>
                </div>
            </div>

            
        </div>
    )
}

export default Possibility
