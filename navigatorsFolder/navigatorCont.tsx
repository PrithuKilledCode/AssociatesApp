//@ts-nocheck

import React, {Suspense, lazy, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {useAppSelector} from '../hooks';
import Loading from '../components/Loading';
const TabNavigators = lazy(() => import('./Tabnavigator'));
const Navigators = lazy(() => import('./navigators'));

const NavigatorCont = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = useAppSelector(state => state.root.getUser.user);
  useEffect(() => {
    console.log(user);
    SplashScreen.hide();
    if (user !== null) {
      setIsLoggedIn(true);
    }
  }, [user]);
  return (
    <NavigationContainer>
      <Suspense fallback={<Loading />}>
        {isLoggedIn ? <TabNavigators /> : <Navigators />}
      </Suspense>
    </NavigationContainer>
  );
};

export default NavigatorCont;
