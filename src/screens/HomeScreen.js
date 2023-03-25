import React, { useRef, useCallback, useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainCard from '../Main/MainCard';
import Swiper from 'react-native-deck-swiper';
import { IconButton } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomOverlay from '../bottomSheets/CustomOverlay';
import BottomSlide from '../bottomSheets/BottomSlide';

const cardInfo = {
	name: 'Mai Sakurajima',
	studyClass: 'PHY 2048',
	currentMembers: 3,
	status: 'closed',
	location: 'MSC 101',
};

const cards = [
	{
		name: 'Mai Sakurajima',
		studyClass: 'PHY 2048',
		currentMembers: 4,
		status: 'closed',
		location: 'MSC 101',
		description: 'We are studying for the final exam',
	},
	// generate 10 cards of different values like this
	{
		name: 'Rui Tachibana',
		studyClass: 'COP 2510',
		currentMembers: 3,
		status: 'open',
		location: 'MSC 101',
		description: 'We are studying for the midterms',
	},
	{
		name: 'Rui Tachibana',
		studyClass: 'COP 2510',
		currentMembers: 3,
		status: 'open',
		location: 'MSC 101',
		description: 'I need help with assignment 3',
	},
	{
		name: 'Rui Tachibana',
		studyClass: 'COP 2510',
		currentMembers: 3,
		status: 'open',
		location: 'MSC 101',
		description: "i guess i just miss her a lot. i don't know why.",
	},
	{
		name: 'Rui Tachibana',
		studyClass: 'COP 2510',
		currentMembers: 3,
		status: 'open',
		location: 'MSC 101',
		description: 'We are studying for the final exam',
	},
	{
		name: 'Rui Tachibana',
		studyClass: 'COP 2510',
		currentMembers: 3,
		status: 'open',
		location: 'MSC 101',
		description: 'please send help. i need her. i want her.',
	},
];

const HomeScreen = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(-1);
	const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['45%', '75%'], []);
	const [open, setOpen] = useState(false);

	const handleSnapPress = useCallback((index) => {
		bottomSheetRef.current?.snapToIndex(index);
		setOpen(true);
	}, []);
	const handleSheetChanges = useCallback((index) => {
		setCurrentSlideIndex(index);
		console.log('handleSheetChanges', index);
	}, []);

	const handleSwipeAll = () => {
		console.log('swiped all cards, preparing refresh');
		setCurrentCardIndex(0);
	};
	const handleSwipeLeft = (index) => {
		console.log('swiped left on card ', index);
		setCurrentCardIndex(currentCardIndex + 1);
		console.log('current card index: ', currentCardIndex);
	};
	return (
		<View style={styles.container}>
			<Swiper
				cards={cards}
				renderCard={(card, index) => (
					<MainCard
						name={card.name}
						studyClass={card.studyClass}
						currentMembers={card.currentMembers}
						status={card.status}
						location={card.location}
						key={`card-${index}`}
					/>
				)}
				cardIndex={0}
				onSwipedLeft={(index) => handleSwipeLeft(index)}
				onSwipedRight={(index) => {
					console.log('swiped right on card ', index);
					setCurrentCardIndex(currentCardIndex + 1);
					console.log('current card index: ', currentCardIndex);
				}}
				onSwipedAll={handleSwipeAll}
				stackSize={5}
				backgroundColor={'#fdfdf5'}
				stackSeparation={5}
				disableBottomSwipe
			/>
			{/* <MainCard
				name={cards[0].name}
				studyClass={cards[0].studyClass}
				currentMembers={cards[0].currentMembers}
				status={cards[0].status}
				location={cards[0].location}
			/> */}
			<IconButton
				onPress={() => handleSnapPress(0)}
				style={{ bottom: -270, height: 50, width: 50, borderRadius: 25 }}
				icon="chevron-double-up"
				iconColor="#2f312d"
			>
				Open Drawer
			</IconButton>

			<BottomSheet
				ref={bottomSheetRef}
				index={currentSlideIndex}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				onClose={() => setOpen(false)}
				enablePanDownToClose
				backdropComponent={
					open
						? ({ animatedIndex, style }) => {
								return (
									<CustomOverlay animatedIndex={animatedIndex} style={style} />
								);
						  }
						: null
				}
				backgroundStyle={{
					backgroundColor: '#e0e4d6',
				}}
			>
				<BottomSlide
					currentMembers={cards[currentCardIndex].currentMembers}
					name={cards[currentCardIndex].name}
					studyClass={cards[currentCardIndex].studyClass}
					status={cards[currentCardIndex].status}
					location={cards[currentCardIndex].location}
					description={cards[currentCardIndex].description}
					slideIndex={currentSlideIndex}
				/>
			</BottomSheet>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdfdf5',
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
