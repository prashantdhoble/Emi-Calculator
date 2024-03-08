import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { FaCarRear } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoanAmount,
  setInterestRate,
  setLoanTerm,
} from "../redux/emiSlices";

const EmiCalculator = () => {
  const dispatch = useDispatch();
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [selectedOption, setSelectedOption] = useState("home"); // Default selection is 'home'
  const loanAmount = useSelector((state) => state.emi.loanAmount);
  const interestRate = useSelector((state) => state.emi.interestRate);
  const loanTerm = useSelector((state) => state.emi.loanTerm);

  const calculateEmi = () => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const time = loanTerm * 12;
    const emi =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    setMonthlyPayment(emi.toFixed(2));

    //clear button
    dispatch(setLoanAmount(""));
    dispatch(setInterestRate(""));
    dispatch(setLoanTerm(""));
  };

  const handleLoanAmountChange = (e) => {
    dispatch(setLoanAmount(Number(e.target.value)));
  };

  const handleInterestRateChange = (e) => {
    dispatch(setInterestRate(Number(e.target.value)));
  };

  const handleLoanTermChange = (e) => {
    dispatch(setLoanTerm(Number(e.target.value)));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="emi-content w-full flex justify-center items-center h-[80vh] gap-[50px] ">
        <div className="inputs-content flex flex-col gap-[50px] justify-center items-center w-[50vh] h-[70vh] border-2 border-gray-300 rounded-md shadow-md">
          <div className="flex gap-10">
            <div className="flex gap-3">
              <input
                type="radio"
                id="home"
                className="w-[20px]"
                checked={selectedOption === "home"}
                onChange={() => handleOptionChange("home")}
              />
              <label className="text-[30px]">
                <FcHome />
              </label>
            </div>
            <div className="flex gap-3">
              <input
                type="radio"
                id="car"
                className="w-[20px]"
                name=""
                checked={selectedOption === "car"}
                onChange={() => handleOptionChange("car")}
              />
              <label className="text-[30px]  text-orange-500">
                <FaCarRear />
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Amount </label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter your amount"
              className="border-2 border-gray-300 outline-none w-[20vw] h-[5vh] p-4"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Intrest %</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter your interest"
              className="border-2 border-gray-300 outline-none w-[20vw] h-[5vh] p-4"
              value={interestRate}
              onChange={handleInterestRateChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Loan Term (year)</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="No of years"
              className="border-2 border-gray-300 outline-none w-[20vw] h-[5vh] p-4"
              value={loanTerm}
              onChange={handleLoanTermChange}
            />
          </div>
          <div>
            <button
              onClick={calculateEmi}
              className="border-2 border-blue-300 w-[10vw] text-white bg-blue-500 shadow-md rounded-md"
            >
              Calculate EMI
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-center  gap-5">
            <label htmlFor="" className="text-[30px]">
              Monthly Payment
            </label> 
            <div className="text-[20px]">{selectedOption === 'home' ? 'Selected: HOME' : 'Selected: CAR'}</div>
            <span>{`${monthlyPayment}`} Rps/Month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
