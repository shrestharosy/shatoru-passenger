import React from 'react'
import ComponentWrapper from '../components/component-wrapper';
import UnfilteredScheduleList from './unfilteredScheduleListScreen';
import SelectShuttleAndPickup from './shuttleAndPickupSelectScreen';

export default function Main() {
  return (
    <ComponentWrapper>
        <SelectShuttleAndPickup/>
        {/* <UnfilteredScheduleList/> */}
    </ComponentWrapper>
  )
}
