import {} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Accomodation from '../screens/Accomodation';
import ExecutiveCouncil from '../screens/ExecutiveCouncil';
import Messages from '../screens/Messages';
import OrganizingCommitte from '../screens/OrganizingCommitte';
import RecreationalTour from '../screens/RecreationalTour';
import ScientificProgramme from '../screens/ScientificProgramme';
import SponsorshipTariff from '../screens/SponsorshipTariff';
import Registration from '../screens/Registration';
import AbstractSubmission from '../screens/AbstractSubmission';
import SplashScreen from '../screens/SplashScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Accomodation" component={Accomodation} />
        <Stack.Screen name="ExecutiveCouncil" component={ExecutiveCouncil} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="OrganizingCommitte" component={OrganizingCommitte} />
        <Stack.Screen name="RecreationalTour" component={RecreationalTour} />
        <Stack.Screen name="ScientificProgramme" component={ScientificProgramme} />
        <Stack.Screen name="SponsorshipTariff" component={SponsorshipTariff} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="AbstractSubmission" component={AbstractSubmission} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
