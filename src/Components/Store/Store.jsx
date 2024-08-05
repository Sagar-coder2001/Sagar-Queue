
import { configureStore } from "@reduxjs/toolkit"
import queueSlice from "../Features/queueSlice"

export const store = configureStore({
  reducer: {
    Queue : queueSlice
  },
})