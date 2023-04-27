import React from 'react'
import CommunitySetupScreen from '@/components/organism/CommunitySetupScreen'
import AnalyticsCardMainDashboard from '@/components/molecules/AnalyticsCardMainDashboard'
import MemberXpDetailsForTopContributor from '@/components/atoms/MemberXpDetailsForTopContributor'
import MemberGrowthCardAnalyticsScreen from '@/components/molecules/MemberGrowthCardAnalyticsScreen'
import CommunitySetUpIntegration from '@/components/organism/CommunitySetUpIntegration'
import { AiOutlineUp } from "react-icons/ai";
import { FaDiscord } from 'react-icons/fa';
import TopContributorCardLeaderboardScreen from '@/components/molecules/TopContributorCardLeaderboardScreen'
import NewMemberCardAnalyticScreen from '@/components/molecules/NewMemberCardAnalyticScreen'
import Member from '@/components/molecules/MemberListCardMissionPage'
import MissionTemplateEdit from '@/components/organism/MissionTemplateEdit'
import AnalyticsScreen from '@/components/organism/AnalyticsScreen'

export default function index() {
  return (
    <div>
        {/* <MemberXpDetailsForTopContributor icon={FaDiscord} change={AiOutlineUp} colorOfChange="inline text-[red]" position={1}/> */}
        {/* <TopContributorCardLeaderboardScreen/> */}
        {/* <MissionTemplateEdit/> */}
        <AnalyticsScreen/>

    </div>
  )
}