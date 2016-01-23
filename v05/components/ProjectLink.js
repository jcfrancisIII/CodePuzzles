import React, {Component} from 'react';

import Project from './Project';
import ProjectDescription from './ProjectDescription';
import ProjectGoals from './ProjectGoals';
import OutboundLink from './OutboundLink';

export default class ProjectLink extends Component {
  render() {
    return (
      <div id='ProjectLink'>
        ProjectLink
        <Project />
        <ProjectDescription />
        <ProjectGoals />
        <OutboundLink />
      </div>
    )
  }
}


