import { addData } from './dataSlice';
import store from './store';

store.dispatch(addData({ input: "Hello", response: "Hi there!" }));
console.log("Redux Store State:", store.getState().data.prev);