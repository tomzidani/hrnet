import { RootState } from "./../store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface EmployeeState {
  employees: any[]
}

const initialState: EmployeeState = {
  employees: [],
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      state.employees.push(action.payload)
    },
  },
})

export const { add } = employeeSlice.actions

export const selectEmployees = (state: RootState) => state.employee.employees

export default employeeSlice.reducer
