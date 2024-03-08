import { createSlice } from "@reduxjs/toolkit";

export const emiSlices = createSlice({
    name:"emi",
    initialState:{
        loanAmount: "",
        interestRate: "",
        loanTerm: "",
    },
    reducers:{
        setLoanAmount: (state, action) => {
            state.loanAmount = action.payload;
        },
        setInterestRate: (state, action) => {
            state.interestRate = action.payload;
        },
        setLoanTerm: (state, action) => {
            state.loanTerm = action.payload;
        },
    }
})

export const { setLoanAmount, setInterestRate, setLoanTerm } = emiSlices.actions;

export default emiSlices.reducer;