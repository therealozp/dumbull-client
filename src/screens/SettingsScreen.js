import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	TouchableRipple,
	Divider,
	Avatar,
	Chip,
	TextInput,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import * as ImagePicker from 'expo-image-picker';

const SettingsStack = createNativeStackNavigator();

const EditPage = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [tags, setTags] = useState([]);
	const onTagsChange = (value) => {
		setTags([...tags, value.name]);
	};
	const handleTags = (item) => {
		if (item) {
			if (tags.includes(item?.title)) {
				return;
			} else {
				setTags([...tags, item?.title]);
			}
		}
	};
	return (
		<View style={styles.container}>
			{tags ? (
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
					}}
				>
					{tags.map((tag, index) => {
						return (
							<Chip
								mode="contained"
								style={{
									height: 35,
									display: 'flex',
									justifyContent: 'center',
									marginLeft: 16,
									alignItems: 'center',
									marginBottom: 16,
								}}
								key={`tag-${index}`}
							>
								{tag}
							</Chip>
						);
					})}
				</View>
			) : null}
			<AutocompleteDropdown
				clearOnFocus={false}
				closeOnBlur={true}
				closeOnSubmit={false}
				dataSet={[
					{ id: 1, title: 'Business' },
					{ id: 2, title: 'Global Sustainability' },
					{ id: 3, title: 'Health' },
					{ id: 4, title: 'Culture' },
					{ id: 5, title: 'Natural Science' },
					{ id: 6, title: 'Behavioral' },
					{ id: 7, title: 'Civil Engineering' },
					{ id: 8, title: 'Communication' },
					{ id: 9, title: 'Technology' },
					{ id: 10, title: 'Criminology' },
					{ id: 11, title: 'Education' },
					{ id: 12, title: 'Electrical & Mechanical Engineering' },
				]}
				onSelectItem={(item) => handleTags(item)}
				containerStyle={{
					width: 300,
					borderColor: '#136F63',
					backgroundColor: 'transparent',
				}}
			/>
		</View>
	);
};

const ProfileSettingsScreen = () => {
	const user = {
		uid: '03032004',
		name: 'Mai Sakurajima',
		username: 'mai_sakurajima',
		email: 'maisakurajima@usf.edu',
		avatar: '../../assets/avatar.png',
		bio: 'I am a student at USF.',
		major: 'Computer Science',
		tags: ['CS', 'Technology'],
	};
	const [editing, setEditing] = useState(true);
	const [photo, setPhoto] = useState({
		uri: 'https://www.sosyncd.com/wp-content/uploads/2022/08/17-9.png',
	});

	const handleChoosePhoto = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			quality: 1,
			aspect: [1, 1],
		});

		// setPhoto(result.assets[0]);
		console.log(result.assets[0].uri);
		if (!result.canceled) {
			setPhoto(result.assets[0]);
		}
	};

	return (
		<View style={styles.container}>
			<View
				style={{
					borderStyle: 'solid',
					borderColor: '#136F63',
					borderWidth: 10,
					height: 180,
					width: 180,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 90,
					marginTop: 30,
				}}
			>
				{editing ? (
					<TouchableRipple
						onPress={handleChoosePhoto}
						style={{
							height: 180,
							width: 180,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 90,
						}}
					>
						{photo ? (
							<Avatar.Image
								size={175}
								source={{
									uri: photo.uri,
								}}
							/>
						) : (
							<Avatar.Image
								size={175}
								source={{
									uri: 'https://www.sosyncd.com/wp-content/uploads/2022/08/17-9.png',
								}}
							/>
						)}
					</TouchableRipple>
				) : (
					<Avatar.Image
						source={{
							uri: 'https://www.sosyncd.com/wp-content/uploads/2022/08/17-9.png',
						}}
						size={175}
					/>
				)}
			</View>
			<Divider />
			<View>
				<Text
					style={{
						fontSize: 24,
						fontFamily: 'NunitoSans_700Bold',
						margin: 8,
						marginBottom: 4,
					}}
				>
					{user.name}
				</Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 20,
						fontFamily: 'NunitoSans_600SemiBold',
						marginBottom: 16,
						marginTop: 0,
					}}
				>
					@{user.username}
				</Text>
			</View>
			<View>
				{editing ? (
					<EditPage />
				) : (
					// null
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						{user.tags.map((tag) => {
							return (
								<Chip
									mode="contained"
									style={{
										height: 35,
										display: 'flex',
										justifyContent: 'center',
										marginLeft: 16,
										alignItems: 'center',
									}}
									key={tag}
								>
									{tag}
								</Chip>
							);
						})}
					</View>
				)}
			</View>
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
		alignItems: 'center',
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
