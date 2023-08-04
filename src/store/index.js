import { configureStore } from '@reduxjs/toolkit'
import login from './slice/login.slice';

export default configureStore({
  reducer: {
        login,
	}
});