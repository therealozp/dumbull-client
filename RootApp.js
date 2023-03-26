import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CreateNewGroupScreen from './src/screens/CreateNewGroupScreen';
import AuthScreen from './src/screens/AuthScreen';
import MyGroupsScreen from './src/screens/MyGroupsScreen';
import * as Google from 'expo-auth-session/providers/google';

const Tab = createBottomTabNavigator();

const session = {
	userId: '1',
	token: '12309301203902',
	name: 'Mai Sakurajima',
	email: 'maisakurajima123',
};

// const session = null;

export default function RootApp() {
	const [accessToken, setAccessToken] = useState(null);
	const [userInfo, setUserInfo] = useState(null);

	const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId:
			'3999924871-hqactl33hv8u3snhri1qafug98cbuvpe.apps.googleusercontent.com',
		iosClientId:
			'3999924871-o2qor831kuok4ad2a4u8heussrp4t9js.apps.googleusercontent.com',
		expoClientId:
			'3999924871-742cr2f1fndi60v66jmou3ca5ubp7sgv.apps.googleusercontent.com',
	});

	useEffect(() => {
		if (response?.type === 'success') {
			setAccessToken(response.authentication.accessToken);

			const getUserData = async () => {
				let userInfoResponse = await fetch(
					'https://www.googleapis.com/userinfo/v2/me',
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}
				);

				userInfoResponse.json().then((data) => {
					console.log(data);
					setUserInfo(data);
				});
			};

			getUserData();
		}
	}, [response]);

	return (
		<>
			{session ? (
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								if (route.name === 'Home') {
									iconName = focused ? 'home' : 'home-outline';
								} else if (route.name === 'SettingsScr') {
									iconName = focused ? 'cog' : 'cog-outline';
								} else if (route.name === 'Create') {
									iconName = focused
										? 'plus-box-multiple'
										: 'plus-box-multiple-outline';
								} else if (route.name === 'My Groups') {
									iconName = focused
										? 'card-bulleted'
										: 'card-bulleted-outline';
								}

								// You can return any component that you like here!
								return <Icon name={iconName} size={size} color={color} />;
							},
							tabBarActiveTintColor: '#FFEAD0',
							tabBarInactiveTintColor: 'gray',
							tabBarShowLabel: false,
							tabBarStyle: {
								backgroundColor: '#006b5a',
							},
							headerStyle: {
								backgroundColor: '#006b5a',
							},
							headerTitleStyle: {
								color: '#FFEAD0',
								fontFamily: 'NunitoSans_600SemiBold',
							},
							tabBarHideOnKeyboard: true,
						})}
					>
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Create" component={CreateNewGroupScreen} />
						<Tab.Screen name="My Groups" component={MyGroupsScreen} />
						<Tab.Screen
							name="SettingsScr"
							component={SettingsScreen}
							options={{ headerShown: false }}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			) : (
				<AuthScreen
					promptAsync={() => {
						console.log('promptAsync begins');
						promptAsync({
							useProxy: true,
							showInRecents: true,
						});
					}}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
