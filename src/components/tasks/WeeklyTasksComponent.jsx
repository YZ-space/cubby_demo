import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import WeeklyTasksThumbnails from '../../assets/WeeklyTasksThumbnails';
import GenericPopupComponent from '../GenericPopupComponent';
import CompletedPopupComponent from '../CompletedPopupComponent';
import WeeklyTasksPublishTo from '../../assets/WeeklyTasksPublishTo';
import WeeklyTasksPublishTags from '../../assets/WeeklyTasksPublishTags';
import WeeklyTasksPublishActions from '../../assets/WeeklyTasksPublishActions';
import StudentTask from '../../images/StudentTask.png'

const WeeklyTasksComponent = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const [hasSelectedDay, setHasSelectedDay] = useState(false),
    [hasClickedNew, setHasClickedNew] = useState(false),
    [hasAddedTitle, setHasAddedTitle] = useState(false),
    [hasAddedDesc, setHasAddedDesc] = useState(false),
    [isTaskComplete, setIsTaskComplete] = useState(false);

  const selectDay = (e) => {
    setSelectedDay(e.target.innerHTML);
    setHasSelectedDay(true);
  };

  return (
    <div className='section-container section-container-height-auto '>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={9}>
          <div className='tooltip'>
            <ul className='weekly-tasks-days' onClick={selectDay}>
              <li className={selectedDay === 'Monday' ? 'selected' : ''}>
                Monday
              </li>
              <li className={selectedDay === 'Tuesday' ? 'selected' : ''}>
                Tuesday
              </li>
              <li className={selectedDay === 'Wednesday' ? 'selected' : ''}>
                Wednesday
              </li>
              <li className={selectedDay === 'Thursday' ? 'selected' : ''}>
                Thursday
              </li>
              <li className={selectedDay === 'Friday' ? 'selected' : ''}>
                Friday
              </li>
            </ul>
            {!hasSelectedDay && (
              <span className='tooltiptext'>1. Select a day of the week</span>
            )}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='tooltip'>
            <button
              className='secondary-btn small-btn'
              onClick={() => setHasClickedNew(true)}
              style={{ marginTop: '15px' }}
            >
              Add New
            </button>
            {hasSelectedDay && !hasClickedNew && (
              <span className='tooltiptext'>2. Add a new task</span>
            )}
          </div>
        </Grid>
      </Grid>
      <div className='weekly-tasks-thumbnails'>
        {selectedDay === 'Monday' ? (
          <WeeklyTasksThumbnails />
        ) : (
          <div className='no-tasks'>No tasks assigned (yet)!</div>
        )}
      </div>
      <GenericPopupComponent
        isOpen={hasClickedNew && !isTaskComplete}
        onRequestClose={() => setIsTaskComplete(true)}
      >
        <div id='megaphone-emoji'>📣</div>
        <div className=''>
          <div className='copy-body'>
            <Grid container direction='row' spacing={3} alignItems='center'>
              <Grid item xs={6}>
                <div className='tooltip'>
                  <input
                    className='weekly-task-title-input'
                    type='text'
                    placeholder='Insert Title Here'
                    onChange={() => setHasAddedTitle(true)}
                  />
                  {!hasAddedTitle && (
                    <span className='tooltiptext'>3. Add a title for the task</span>
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <WeeklyTasksPublishTo />
              </Grid>
            </Grid>
            <WeeklyTasksPublishTags />
            <div className='tooltip textarea'>
              <textarea
                placeholder='Insert a description here'
                onChange={() => setHasAddedDesc(true)}
              ></textarea>

              {hasAddedTitle && !hasAddedDesc && (
                <span className='tooltiptext'>4. Add a description of the task</span>
              )}
            </div>
            <WeeklyTasksPublishActions />
          </div>
          <div
            className='copy-buttons right-buttons'
            style={{ marginTop: '1em' }}
          >
            <div>
              <button className='secondary-btn inverted-btn'>Cancel</button>
            </div>
            <div className='tooltip'>
              <button
                className='secondary-btn'
                onClick={() => setIsTaskComplete(true)}
              >
                Publish
              </button>
              {hasAddedTitle && hasAddedDesc && (
                <span className='tooltiptext'>4. Publish the task for students to see</span>
              )}{' '}
            </div>
          </div>
        </div>
      </GenericPopupComponent>
      <CompletedPopupComponent
        isOpen={isTaskComplete}
        body='You successfully added a task!'
        nextFeatureURL='/grades'
        img={StudentTask}
      />
    </div>
  );
};

export default WeeklyTasksComponent;
