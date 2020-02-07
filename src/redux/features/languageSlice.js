import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
	name: 'language',
	initialState: 'english',
	reducers: {
		toggleLanguage: state => (state === 'english' ? 'arabic' : 'english')
	}
});
