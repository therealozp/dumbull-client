import React, { useRef, useCallback, useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableRipple, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';

const SettingsStack = createNativeStackNavigator();

const ProfileSettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>ProfileSettingsScreen</Text>
		</View>
	);
};

const GeneralSettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>GeneralSettingsScreen</Text>
		</View>
	);
};

const SettingsScreen = () => {
	const navigation = useNavigation();
	const bottomSheetRef = useRef(null);
	const Settings = () => {
		return (
			<View style={styles.container}>
				<TouchableRipple
					onPress={() => navigation.navigate('Profile')}
					rippleColor="rgba(0, 0, 0, .32)"
					style={styles.settingSection}
				>
					<Text style={styles.settingText}>Profile</Text>
				</TouchableRipple>
				<Divider />
				<TouchableRipple
					onPress={() => navigation.navigate('General')}
					rippleColor="rgba(0, 0, 0, .32)"
					style={styles.settingSection}
				>
					<Text style={styles.settingText}>General</Text>
				</TouchableRipple>
			</View>
		);
	};
	return (
		<SettingsStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#136F63',
				},
				headerTitleStyle: {
					color: '#FFEAD0',
					fontFamily: 'NunitoSans_600SemiBold',
				},
			}}
		>
			<SettingsStack.Screen name="Settings" component={Settings} />
			<SettingsStack.Screen name="General" component={GeneralSettingsScreen} />
			<SettingsStack.Screen name="Profile" component={ProfileSettingsScreen} />
		</SettingsStack.Navigator>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdfdf5',
		padding: 16,
		paddingTop: 0,
	},
	settingSection: {
		height: 50,
		width: '100%',
		justifyContent: 'center',
	},
	settingText: {
		fontSize: 16,
		fontFamily: 'NunitoSans_400Regular',
	},
});
