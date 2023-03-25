import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSlide = ({
	studyClass,
	name,
	currentMembers,
	location,
	description,
	slideIndex,
}) => {
	return (
		<View style={styles.container}>
			<View style={{ marginBottom: 16 }}>
				<Text style={styles.titleText}>a study group for {studyClass}</Text>
			</View>
			<View style={styles.subContainer}>
				<Icon name="account" size={30} color="#43483e" style={styles.icon} />
				<Text style={styles.contentText}>
					created by{' '}
					<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>{name}</Text>
				</Text>
			</View>
			<View style={styles.subContainer}>
				<Icon name="map-marker" size={30} color="#43483e" style={styles.icon} />
				<Text style={styles.contentText}>
					meeting up @{' '}
					<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
						{location}
					</Text>
				</Text>
			</View>
			<View style={styles.subContainer}>
				<Icon name="calendar" size={30} color="#43483e" style={styles.icon} />
				<Text style={styles.contentText}>
					calendars set for{' '}
					<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
						03/20/2004
					</Text>
				</Text>
			</View>
			<View>
				{slideIndex === 1 ? (
					<View>
						<View style={styles.subContainer}>
							<Icon
								name="account-group"
								size={30}
								color="#43483e"
								style={styles.icon}
							/>
							<Text style={styles.contentText}>
								we currently have{' '}
								<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
									{currentMembers}
								</Text>{' '}
								members
							</Text>
						</View>
						<View>
							<View style={styles.subContainer}>
								<Icon
									name="chair-school"
									size={30}
									color="#43483e"
									style={styles.icon}
								/>
								<Text style={styles.contentText}>pls join because:</Text>
							</View>
							<Text
								style={{
									...styles.contentText,
									fontFamily: 'NunitoSans_600SemiBold',
									margin: 8,
								}}
							>
								{description}
							</Text>
						</View>

						<Button
							mode="contained"
							style={{
								width: 100,
								borderRadius: 8,
								alignSelf: 'flex-end',
								margin: 16,
							}}
						>
							join
						</Button>
					</View>
				) : (
					<Button
						mode="contained"
						style={{
							width: 100,
							borderRadius: 8,
							alignSelf: 'flex-end',
						}}
					>
						join
					</Button>
				)}
			</View>
		</View>
	);
};

export default BottomSlide;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e0e4d6',
		padding: 16,
	},
	subContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 8,
	},
	titleText: {
		fontSize: 20,
		fontFamily: 'NunitoSans_800ExtraBold',
		color: '#43483e',
	},
	contentText: {
		fontSize: 16,
		fontFamily: 'NunitoSans_400Regular',
		color: '#2f312d',
	},
	icon: {
		marginRight: 10,
	},
});
