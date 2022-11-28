import React from 'react'
import {View, Text} from 'react-native';
import ComponentWrapper from '../components/component-wrapper';
import SelectShuttleAndPickup from './shuttleAndPickupSelectScreen';

export default function Main() {
  return (
    <ComponentWrapper>
        <SelectShuttleAndPickup/>
    </ComponentWrapper>
  )
}
