import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Surface, Button, TextInput, Chip } from 'react-native-paper';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

const SignUpScreen = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [tags, setTags] = useState([]);
	const onTagsChange = (value) => {
		setTags([...tags, value.name]);
	};
	return (
		<View style={styles.container}>
			<AutocompleteDropdown
				clearOnFocus={false}
				closeOnBlur={true}
				closeOnSubmit={false}
				initialValue={{ id: '2' }} // or just '2'
				dataSet={[
					{ id: 1, name: 'Business' },
					{ id: 2, name: 'Global Sustainability' },
					{ id: 3, name: 'Health' },
					{ id: 4, name: 'Culture' },
					{ id: 5, name: 'Natural Science' },
					{ id: 6, name: 'Behavioral' },
					{ id: 7, name: 'Civil Engineering' },
					{ id: 8, name: 'Communication' },
					{ id: 9, name: 'Technology' },
					{ id: 10, name: 'Criminology' },
					{ id: 11, name: 'Education' },
					{ id: 12, name: 'Electrical & Mechanical Engineering' },
				]}
				onSelectItem={(item) => {
					onTagsChange(item);
				}}
				renderItem={tags.map((tag, index) => {
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
							key={`tag-${index}`}
						>
							{tag}
						</Chip>
					);
				})}
			/>
		</View>
	);
};

const AuthScreen = ({ promptAsync }) => {
	const Icon = () => {
		return (
			<Image
				source={require('../../assets/google.png')}
				style={{ height: 20, width: 20, marginRight: 10 }}
			/>
		);
	};
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://lh3.googleusercontent.com/p/AF1QipNJkqEVgey1qf8Z2H4xbIUn8TaPE33qc3-J3eTa=s1360-w1360-h1020',
				}}
				style={{ height: '100%', width: '100%', position: 'absolute' }}
			/>
			<View style={styles.generalContainer}>
				<Surface style={styles.signUpCard} mode="elevated">
					<Text style={styles.mainText}>Join us!</Text>
					<Surface
						mode="elevated"
						style={{
							borderRadius: 8,
							marginBottom: 40,
						}}
					>
						<Image
							source={require('../../assets/logo.png')}
							style={styles.logo}
						/>
					</Surface>
					<Button
						mode="contained"
						icon={() => <Icon />}
						style={{
							height: 50,
							width: 250,
							margin: 10,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onPress={promptAsync}
					>
						<Text>Sign in with Google</Text>
					</Button>
				</Surface>
			</View>
		</View>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdfdf5',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	signInButton: {
		backgroundColor: '#136F63',
		width: '80%',
		height: 40,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUpCard: {
		backgroundColor: '#e0e4d6',
		// flex: 1,
		width: 350,
		height: 600,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	mainText: {
		fontSize: 30,
		fontFamily: 'NunitoSans_800ExtraBold',
		marginBottom: 50,
	},
	logo: {
		height: 100,
		width: 100,
		resizeMode: 'contain',
	},
	generalContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(27, 27, 27, 0.5)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
