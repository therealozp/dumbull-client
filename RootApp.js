import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CreateNewGroupScreen from './src/screens/CreateNewGroupScreen';
import AuthScreen from './src/screens/AuthScreen';

const Tab = createBottomTabNavigator();

export default function RootApp() {
	return (
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
				<Tab.Screen
					name="SettingsScr"
					component={SettingsScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen name="Test" component={AuthScreen} />
			</Tab.Navigator>
		</NavigationContainer>
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
