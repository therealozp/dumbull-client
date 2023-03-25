import React, { useCallback, useRef, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomPullup = ({
	bottomSheetRef,
	handleSheetChanges,
	open,
	setOpen,
}) => {
	const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

	return (
		<View>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				onClose={() => setOpen(false)}
				enablePanDownToClose
			>
				<View>
					<Text>Bottom Sheet</Text>
				</View>
			</BottomSheet>
		</View>
	);
};

export default BottomPullup;
