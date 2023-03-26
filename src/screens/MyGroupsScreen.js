import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GroupCard from '../Main/GroupCard';
import { Modal, Portal } from 'react-native-paper';
import { cards } from '../dummy/cards';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyGroupsScreen = () => {
	const [visible, setVisible] = useState(false);
	const [currData, setCurrData] = useState({});

	const handleButtonPress = (cardData) => {
		setCurrData(cardData);
		setVisible(true);
	};

	return (
		<>
			<ScrollView style={styles.container}>
				{cards.map((card, index) => (
					<GroupCard
						key={index}
						name={card.name}
						location={card.location}
						studyClass={card.studyClass}
						onClick={() => handleButtonPress(card)}
					/>
				))}
			</ScrollView>
			<Portal>
				<Modal
					visible={visible}
					onDismiss={() => setVisible(false)}
					contentContainerStyle={styles.contentContainer}
					style={{
						flex: 1,
						alignItems: 'center',
					}}
				>
					<View style={{ marginBottom: 16 }}>
						<Text style={styles.titleText}>
							a study group for {currData.studyClass}
						</Text>
					</View>
					<View style={styles.subContainer}>
						<Icon
							name="account"
							size={30}
							color="#43483e"
							style={styles.icon}
						/>
						<Text style={styles.contentText}>
							you will be studying with{' '}
							<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
								{currData.name}
							</Text>
						</Text>
					</View>
					<View style={styles.subContainer}>
						<Icon
							name="map-marker"
							size={30}
							color="#43483e"
							style={styles.icon}
						/>
						<Text style={styles.contentText}>
							meeting up @{' '}
							<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
								{currData.location}
							</Text>
						</Text>
					</View>
					<View style={styles.subContainer}>
						<Icon
							name="calendar"
							size={30}
							color="#43483e"
							style={styles.icon}
						/>
						<Text style={styles.contentText}>
							save the date for{' '}
							<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
								03/20/2004
							</Text>
						</Text>
					</View>

					{/* <View style={styles.subContainer}>
						<Icon
							name="account-group"
							size={30}
							color="#43483e"
							style={styles.icon}
						/>
						<Text style={styles.contentText}>
							we currently have{' '}
							<Text style={{ fontFamily: 'NunitoSans_600SemiBold' }}>
								{currData.members}
							</Text>{' '}
							members
						</Text>
					</View> */}
					<View>
						<View style={styles.subContainer}>
							<Icon
								name="chair-school"
								size={30}
								color="#43483e"
								style={styles.icon}
							/>
							<Text style={styles.contentText}>
								you joined this group because:
							</Text>
						</View>
						<Text
							style={{
								...styles.contentText,
								fontFamily: 'NunitoSans_600SemiBold',
								margin: 8,
							}}
						>
							{currData.description}
						</Text>
					</View>
				</Modal>
			</Portal>
		</>
	);
};

export default MyGroupsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdfdf5',
		padding: 16,
	},
	contentContainer: {
		backgroundColor: '#f5f5f5',
		width: 350,
		height: 500,
		padding: 24,
		borderRadius: 8,
	},
	subContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 8,
		marginBottom: 10,
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
