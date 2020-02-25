import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    {title: 'Chazak!' , duration:'3:20' },
    {title: 'Aleh Katan', duration:'7:00'},
    {title: 'Nigun Simcha', duration:'4:02' },
    {title: "Don't Hide from Me", duration: '3:09'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
