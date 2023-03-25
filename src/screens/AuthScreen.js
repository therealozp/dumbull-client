import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Surface, Button } from 'react-native-paper';

const AuthButton = ({ onClick, provider, providerLogoSrc }) => {
	const Icon = () => {
		return (
			<>
				{provider == 'Google' ? (
					<Image
						source={require('../../assets/google.png')}
						style={{ height: 20, width: 20 }}
					/>
				) : (
					<Image
						source={require('../../assets/microsoft.png')}
						style={{ height: 20, width: 20 }}
					/>
				)}
			</>
		);
	};

	return (
		<Button
			mode="contained-tonal"
			icon={() => <Icon />}
			style={{ height: 50, width: 300, margin: 16 }}
		>
			<Text>Sign in with {provider}</Text>
		</Button>
	);
};

const SignUpCard = () => {
	return (
		<Surface style={styles.signUpCard} mode="elevated">
			<View>
				<Text>Join us!</Text>
				<AuthButton provider="Google" />
				<AuthButton provider="Microsoft" />
			</View>
		</Surface>
	);
};

const AuthScreen = () => {
	return (
		<View style={styles.container}>
			<SignUpCard />
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
	},
	signInButton: {
		backgroundColor: '#136F63',
		width: '80%',
		height: 50,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUpCard: {
		backgroundColor: '#e0e4d6',
		// flex: 1,
		width: '85%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
});
