import React, { Component } from 'react';
import { FormattedMessage} from "react-intl";

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>
               <FormattedMessage 
                  id="app.education"
                  defaultMessage="education">
               </FormattedMessage>
                </span>
            </h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <div>
                     <h3><FormattedMessage id="education.school" defaultMessage="education.school"></FormattedMessage></h3>
                     <p className="info"><FormattedMessage id="education.degree" defaultMessage="education.degree"></FormattedMessage> <span>&bull;</span><em className="date"><FormattedMessage id="education.graduated" defaultMessage="education.graduated"></FormattedMessage></em></p>
                  </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span><FormattedMessage id="work" defaultMessage="work"></FormattedMessage></span></h1>
         </div>

         <div className="nine columns main-col">
            <div>
               <h3><FormattedMessage id="work.company" defaultMessage="work.company"></FormattedMessage></h3>
               <p className="info"><FormattedMessage id="work.title" defaultMessage="work.title"></FormattedMessage><span>&bull;</span> <em className="date"><FormattedMessage id="work.years" defaultMessage="work.years"></FormattedMessage></em></p>
            </div>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
