import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  duration: 1500, 
  breakDuration: 300, 
  remainingTime: 1500,
  isActive: false,
  isPaused: false,
  isBreak: false,
  completedSessions: 0,
  totalFocusTime: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state) {
      state.isActive = true;
      state.isPaused = false;
    },
    startBreak(state) {
      state.isBreak = true;
      state.remainingTime = state.breakDuration;
      state.isActive = true;
    },
    pauseTimer(state) {
      state.isActive = false;
      state.isPaused = true;
    },
    resetTimer(state) {
      state.isBreak = false;
      state.remainingTime = state.duration;
      state.isActive = false;
      state.isPaused = false;
    },
    completeSession(state) {
      state.completedSessions += 1;
      state.totalFocusTime += state.duration;
    },
    tick(state) {
      state.remainingTime -= 1;
    },
    setDuration(state, action) {
      state.duration = action.payload; 
      state.remainingTime = action.payload; 
    },
    setBreakDuration(state, action) {
      state.breakDuration = action.payload; 
    },
  },
});

export const { startTimer, startBreak, pauseTimer, resetTimer, completeSession, tick, setDuration, setBreakDuration } = timerSlice.actions;
export default timerSlice.reducer;
