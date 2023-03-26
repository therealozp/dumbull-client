import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import {
	NunitoSans_600SemiBold,
	NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans';
import { Chip, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MainCard = ({ studyClass, name, currentMembers, location, status }) => {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_600SemiBold,
	});

	return (
		<>
			{fontsLoaded && (
				<Surface style={styles.mainCard} mode="elevated">
					<Image
						source={{
							uri: 'https://lh3.googleusercontent.com/p/AF1QipNJkqEVgey1qf8Z2H4xbIUn8TaPE33qc3-J3eTa=s1360-w1360-h1020',
						}}
						style={{ height: '100%', width: '100%', position: 'absolute' }}
					/>
					<View style={styles.generalContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.title}>{studyClass}</Text>
							<Text style={styles.subtitle}>{name}</Text>
						</View>
						<View style={styles.contentContainer}>
							<View style={{ marginRight: 8 }}>
								<Text style={styles.otherText}>{currentMembers} members</Text>
								<Text style={styles.otherText}>@ {location}</Text>
							</View>
							<Chip
								mode="outlined"
								style={{
									width: 100,
									height: 35,
									backgroundColor: 'transparent',
									borderColor: status == 'open' ? 'green' : 'red',
									display: 'flex',
									justifyContent: 'center',
									marginLeft: 16,
								}}
								icon={() => {
									if (status == 'open') {
										return (
											<Icon
												name="check-circle-outline"
												size={24}
												color="green"
											/>
										);
									} else {
										return (
											<Icon name="close-circle-outline" size={24} color="red" />
										);
									}
								}}
							>
								<Text style={{ color: status == 'open' ? 'green' : 'red' }}>
									{status == 'open' ? 'Open' : 'Filled'}{' '}
								</Text>
							</Chip>
						</View>
					</View>
				</Surface>
			)}
		</>
	);
};

export default MainCard;

const styles = StyleSheet.create({
	mainCard: {
		width: 350,
		height: 500,
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'flex-end',
		borderColor: 'black',
		// padding: 16,
		overflow: 'hidden',
		position: 'relative',
	},
	textContainer: {
		display: 'flex',
		margin: 16,
		marginBottom: 0,
	},
	title: {
		fontFamily: 'NunitoSans_600SemiBold',
		fontSize: 30,
		color: 'white',
	},
	subtitle: {
		fontFamily: 'NunitoSans_400Regular',
		fontSize: 20,
		color: 'white',
	},
	otherText: {
		fontFamily: 'NunitoSans_400Regular',
		fontSize: 16,
		color: 'white',
	},
	contentContainer: {
		fontSize: 18,
		display: 'flex',
		padding: 8,
		paddingLeft: 0,
		flexDirection: 'row',
		alignItems: 'center',
		margin: 16,
	},
	generalContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(27, 27, 27, 0.5)',
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
});
