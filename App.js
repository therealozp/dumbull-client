import { View, Text } from 'react-native';
import React from 'react';
import RootApp from './RootApp';
import {
	configureFonts,
	DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import {
	NunitoSans_400Regular,
	NunitoSans_600SemiBold,
	NunitoSans_300Light,
	NunitoSans_200ExtraLight,
	NunitoSans_700Bold,
	NunitoSans_800ExtraBold,
} from '@expo-google-fonts/nunito-sans';
import {
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const fontConfig = {
	default: {
		regular: {
			fontFamily: 'NunitoSans_400Regular',
			fontWeight: 'normal',
		},
		light: {
			fontFamily: 'NunitoSans_300Light',
			fontWeight: 'normal',
		},
		thin: {
			fontFamily: 'NunitoSans_200ExtraLight',
			fontWeight: 'normal',
		},
	},
};

const theme = {
	...DefaultTheme,
	fonts: configureFonts(fontConfig),
	colors: {
		...DefaultTheme.colors,
		primary: '#006b5f',
		secondary: '#55624c',
		surface: '#f5f5f5',
		background: '#f5f5f5',
		surfaceVariant: '#e0e4d6',
	},
};

const App = () => {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_600SemiBold,
		NunitoSans_300Light,
		NunitoSans_200ExtraLight,
		NunitoSans_700Bold,
		NunitoSans_800ExtraBold,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	});
	return (
		<>
			{fontsLoaded ? (
				<GestureHandlerRootView style={{ flex: 1 }}>
					<PaperProvider theme={theme}>
						<RootApp />
					</PaperProvider>
				</GestureHandlerRootView>
			) : (
				<View>
					<Text>Loading...</Text>
				</View>
			)}
		</>
	);
};

export default App;
