import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface, Button } from 'react-native-paper';

const GroupCard = ({
	studyClass,
	name,
	currentMembers,
	location,
	status,
	onClick,
}) => {
	return (
		<Surface
			style={{
				...styles.innerContainer,
				height: 150,
				display: 'flex',
				justifyContent: 'center',
				// alignItems: 'center',
			}}
			// mode="elevated"
		>
			<Text style={styles.classText}>{studyClass}</Text>
			<Text style={styles.text}>{name}</Text>
			<Text style={styles.text}>{location}</Text>
			<Button
				mode="contained"
				style={{
					width: 100,
					borderRadius: 10,
					alignSelf: 'flex-end',
				}}
				onPress={onClick}
			>
				View
			</Button>
		</Surface>
	);
};

export default GroupCard;

const styles = StyleSheet.create({
	innerContainer: {
		backgroundColor: '#e0e4d6',
		borderRadius: 8,
		marginTop: 16,
		marginBottom: 16,
		padding: 20,
	},
	classText: {
		fontFamily: 'Quicksand_700Bold',
		fontSize: 24,
		marginBottom: 8,
	},
	text: {
		fontFamily: 'NunitoSans_400Regular',
		fontSize: 16,
	},
});
