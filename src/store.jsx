import { createStoreHook } from "react-redux";
import rootReducers from "./add1";

const store = createStoreHook(rootReducers)

export default store;