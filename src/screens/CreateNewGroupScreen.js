import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { TextInput, Button, Surface } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CustomTextInput = ({
	label,
	value,
	onChangeText,
	multiline,
	...props
}) => {
	return (
		<TextInput
			label={label}
			value={value}
			onChangeText={onChangeText}
			mode="outlined"
			style={{ ...styles.textInput, width: props.width ? props.width : '100%' }}
			multiline={multiline}
			right={
				value !== '' && (
					<TextInput.Icon
						icon="close-circle-outline"
						onPress={() => onChangeText('')}
					/>
				)
			}
			{...props}
		/>
	);
};

const CreateNewGroupScreen = () => {
	const [studyClass, setStudyClass] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [dateShow, setDateShow] = useState(false);
	const [timeShow, setTimeShow] = useState(false);

	const onDateChange = (event, selectedDate) => {
		setDateShow(false);
		const currentDate = selectedDate;
		setDate(currentDate);
		console.log(currentDate);
	};

	const onTimeChange = (event, selectedTime) => {
		setTimeShow(false);
		const currentTime = selectedTime;
		setTime(currentTime);
		console.log(currentTime);
	};

	return (
		<ScrollView style={styles.container}>
			<Surface
				style={{
					...styles.innerContainer,
					height: 100,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				// mode="elevated"
			>
				<Text style={styles.introText}>
					Can't find a group? Create your own!
				</Text>
			</Surface>
			<View>
				<Surface style={{ ...styles.innerContainer, padding: 16 }}>
					<Text style={styles.inputLabelText}>
						What class are you studying for?
					</Text>
					<CustomTextInput
						label="Class"
						value={studyClass}
						onChangeText={setStudyClass}
					/>
				</Surface>
				<Surface style={{ ...styles.innerContainer, padding: 16 }}>
					<Text style={styles.inputLabelText}>Where are you meeting up?</Text>
					<CustomTextInput
						label="Location"
						value={location}
						onChangeText={setLocation}
						left={
							<TextInput.Icon
								icon="map-marker-outline"
								onPress={() => setDateShow(true)}
							/>
						}
					/>
					<View>
						<Pressable onPress={() => setDateShow(true)}>
							<CustomTextInput
								label="Date"
								value={date.toLocaleString().substring(0, 9)}
								left={<TextInput.Icon icon="calendar" />}
								editable={false}
								right={null}
								// onChangeText={setDate}
							/>
						</Pressable>
						{dateShow && (
							<RNDateTimePicker
								mode="date"
								value={date}
								onChange={onDateChange}
							/>
						)}
						<Pressable onPress={() => setTimeShow(true)}>
							<CustomTextInput
								label="Time"
								value={time.toTimeString().substring(0, 5)}
								left={<TextInput.Icon icon="clock-outline" />}
								editable={false}
								right={null}
								// onChangeText={setDate}
								width="43%"
							/>
						</Pressable>
						{timeShow && (
							<RNDateTimePicker
								mode="time"
								value={time}
								onChange={onTimeChange}
								is24Hour={true}
							/>
						)}
					</View>
				</Surface>

				<Surface style={{ ...styles.innerContainer, padding: 16 }}>
					<Text style={styles.inputLabelText}>
						What exactly do you need help with?
					</Text>
					<CustomTextInput
						label="Description"
						value={description}
						onChangeText={setDescription}
						multiline
					/>
				</Surface>

				<Button
					onPress={() =>
						console.log({
							studyClass,
							location,
							description,
						})
					}
					mode="contained"
					style={{
						width: 100,
						borderRadius: 8,
						alignSelf: 'flex-end',
						margin: 16,
					}}
				>
					Create
				</Button>
			</View>
			<View style={{ height: 64 }} />
		</ScrollView>
	);
};

export default CreateNewGroupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdfdf5',
		padding: 16,
	},
	introText: {
		fontSize: 20,
		fontFamily: 'NunitoSans_600SemiBold',
		color: '#43483e',
	},
	innerContainer: {
		backgroundColor: '#e0e4d6',
		borderRadius: 8,
		marginTop: 16,
		marginBottom: 16,
	},
	textInput: {
		marginTop: 8,
		marginBottom: 8,
		backgroundColor: '#e0e4d6',
	},
	inputLabelText: {
		fontFamily: 'NunitoSans_600SemiBold',
		fontSize: 15,
		marginTop: 8,
		marginBottom: 8,
	},
});
