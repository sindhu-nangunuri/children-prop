// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <div className="child-container">
      <Notification>
        <div className="details-container">
          <AiFillCheckCircle className="success-icon" />
          <div className="text-details">
            <h1 className="success-alert">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
          <GrFormClose className="cross-icon" />
        </div>
      </Notification>
    </div>
    <div className="child-container">
      <Notification>
        <div className="details-container">
          <MdWarning className="error-icon" />
          <div className="text-details">
            <h1 className="error-alert">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>

          <GrFormClose className="cross-icon" />
        </div>
      </Notification>
    </div>
    <div className="child-container">
      <Notification>
        <div className="details-container">
          <RiErrorWarningFill className="warning-icon" />
          <div className="text-details">
            <h1 className="warning-alert">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
          <GrFormClose className="cross-icon" />
        </div>
      </Notification>
    </div>
    <div className="child-container">
      <Notification>
        <div className="details-container">
          <MdInfo className="info-icon" />
          <div className="text-details">
            <h1 className="info-alert">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
          <GrFormClose className="cross-icon" />
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
