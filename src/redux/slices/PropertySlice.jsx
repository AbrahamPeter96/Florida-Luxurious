import {
  getProperties,
  addProperty,
  getProperty,
  updateProperty,
  deleteProperty,
} from "../../api/Properties";
import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

let initialState = {
  isLoading: false,
  success: "",
  isError: false,
};

export const getPropertiesSlice = createSlice({
  name: "getPropertiesReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProperties.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.data = action.payload;
    });

    builder.addCase(getProperties.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload.message;
      notification.error({
        message: "Something went wrong",
        description: payload.message,
        duration: 2,
      });
    });
  },
}).reducer;

export const addPropertySlice = createSlice({
  name: "addPropertyReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addProperty.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
      console.log(action.payload);
    });

    builder.addCase(addProperty.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log(action.payload);
      notification.error({
        message: "Something went wrong",
        description: action.payload,
        duration: 2,
      });
    });
  },
}).reducer;

export const getPropertySlice = createSlice({
  name: "getPropertyReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProperty.pending, (state) => {
      state.data = {};
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getProperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(getProperty.rejected, (state, action) => {
      state.data = {};
      state.isLoading = false;
      state.isError = true;
      state.errorCode = action.payload.code;
      notification.error({
        message: "Something went wrong",
        description: action.payload.message,
        duration: 2,
      });
    });
  },
}).reducer;

export const updatePropertySlice = createSlice({
  name: "updatePropertyReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateProperty.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(updateProperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(updateProperty.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      notification.error({
        message: "Something went wrong",
        description: action.payload,
        duration: 2,
      });
    });
  },
}).reducer;

export const deletePropertySlice = createSlice({
  name: "deletePropertyReducer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteProperty.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(deleteProperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
      console.log(action.payload);
    });

    builder.addCase(deleteProperty.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      notification.error({
        message: "Something went wrong",
        description: action.payload,
        duration: 2,
      });
    });
  },
}).reducer;
