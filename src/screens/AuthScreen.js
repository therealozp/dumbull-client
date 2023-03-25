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
			style={{
				height: 50,
				width: 300,
				margin: 16,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Sign in with {provider}</Text>
		</Button>
	);
};

const AuthScreen = () => {
	return (
		<View style={styles.container}>
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
				<AuthButton provider="Google" />
				<AuthButton provider="Microsoft" />
			</Surface>
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
		height: 40,
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
});
