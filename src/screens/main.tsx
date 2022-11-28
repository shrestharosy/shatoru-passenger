import React from 'react'
import ComponentWrapper from '../components/component-wrapper';
import UnfilteredScheduleList from './unfilteredScheduleListScreen';
import SelectShuttleAndPickup from './shuttleAndPickupSelectScreen';
import FilteredScheduleList from './filteredScheduleListScreen';

export default function Main() {
  return (
    <ComponentWrapper>
        <SelectShuttleAndPickup/>
        {/* <UnfilteredScheduleList/> */}
        {/* <FilteredScheduleList/> */}
    </ComponentWrapper>
  )
}
