import React from 'react';
import { Grid } from '@material-ui/core';

import SubmissionRowComponent from './SubmissionRowComponent';

import GradingSubmissionsHeader from '../../assets/GradingSubmissionsHeader';

const SubmissionsListComponent = (props) => {
  return (
    <div
      className='section-container'
      style={{ paddingLeft: '2em', paddingRight: '2em' }}
    >
      <GradingSubmissionsHeader />
      <Grid container direction='row' spacing={3}>
        <Grid item xs={5}>
          <div className='textfont'>Title</div>
        </Grid>
        <Grid item xs={3}>
          <div className='textfont'>Assigned</div>
        </Grid>
        <Grid item xs={4}>
          <div className='textfont'>Submitted</div>
        </Grid>
      </Grid>
      <hr style={{ borderTop: '2px solid #A0A3BD' }} />
      <SubmissionRowComponent
        {...props}
        emoji='🔢'
        title='Addition and Subtraction'
        subtitle='Practicing our work from class today'
        date='Mar 17'
        submitted='26'
        tooltip={true}
      />
      <hr style={{ borderTop: '1px solid #D9DBE9' }} />
      <SubmissionRowComponent
        {...props}
        emoji='🐟'
        title='Addition Under the Sea'
        subtitle='Practice two digit addition under the sea w..'
        date='Mar 17'
        submitted='27'
        tooltip={false}
      />
      <hr style={{ borderTop: '1px solid #D9DBE9' }} />
      <SubmissionRowComponent
        {...props}
        emoji='🧸'
        title={`Barry's Place Value`}
        subtitle='Help Barry figure out tens from ones by wri..'
        date='Mar 17'
        submitted='26'
        tooltip={false}
      />
    </div>
  );
};

export default SubmissionsListComponent;
