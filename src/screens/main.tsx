import React from 'react'
import {View, Text} from 'react-native';
import ComponentWrapper from '../components/component-wrapper';
import FilteredScheduleList from './filteredScheduleListScreen';
import SelectShuttleAndPickup from './shuttleAndPickupSelectScreen';

export default function Main() {
  return (
    <ComponentWrapper>
        {/* <SelectShuttleAndPickup/> */}
        <FilteredScheduleList/>
    </ComponentWrapper>
  )
}
