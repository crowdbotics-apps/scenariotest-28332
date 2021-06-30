import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const astronauts_get__read = createAsyncThunk(
  "astronauts_response_get_Getastronauts/astronauts_get__read",
  async payload => {
    const response = await apiService.astronauts_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const astronauts_response_get_GetastronautsSlice = createSlice({
  name: "astronauts_response_get_Getastronauts",
  initialState,
  reducers: {},
  extraReducers: {
    [astronauts_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [astronauts_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [astronauts_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  astronauts_get__read,
  slice: astronauts_response_get_GetastronautsSlice
}
