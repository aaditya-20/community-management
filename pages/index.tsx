import React from 'react'
import MissionReview from './MissionReview'
import AdminSetting from './AdminSetting'
import HelpCentre from './HelpCentre'
import MissionTemplatePage from './MissionTemplatePage'
import FirstPage from './FirstPage'
import NoAccountPopup from './NoAccountPopup'
import LoginSplit from './LoginSplit'
import MissionKickassBlogPost from './MissionKickassBlogPost'
import InstallMetamaskPopup from './InstallMetamaskPopup'
import CopyLinkPopUpFormBuilder from '@/components/molecules/CopyLinkPopUpFormBuilder'

export default function index() {
  return (
    <div>
      <CopyLinkPopUpFormBuilder url="loda"/>
    </div>
  );
}