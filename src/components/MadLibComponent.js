import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MabLibApi } from '../services/DataServices'

export default function MadLibComponent() {
  const [gender, getGender] = useState("");
  const [name, getName] = useState("");
  const [age, getAge] = useState("");
  const [color, getColor] = useState("");
  const [pronoun, getPronoun] = useState("");
  const [food, getFood] = useState("");
  const [job, getJob] = useState("");
  const [adjective1, getAdjective1] = useState("");
  const [adjective2, getAdjective2] = useState("");
  const [noun, getNoun] = useState("");
  const [output, getOutput] = useState("A young [gender], aged [age] named [name] sat down at a restaurant to enjoy a (n) [adjective1] [food] which was for some reason colored [color]. [pronoun] works at a [adjective2] [job] that made the workers eat a (n) [adjective1] [noun] ON THE JOB.");

  const getResult = async ()=>{
    const response = await MabLibApi(gender, name, age, color, pronoun, food, job, adjective1, adjective2, noun);
    getOutput(response);

  }
  return (
    
<body class="backgroundMadLib">
    <div>
        <div class="grid grid-cols-12">
            <div class="col-span-2">
                <button
                    class="hidden lg:block rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
                    <Link to ={"/"}>
                        <p class="text-black font-[Rubik-Bold] text-[3.125rem]">Back</p>
                    </Link>
                </button>
            </div>
            <div class="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
                <p class="font-[Rubik-Bold] text-[3.125rem] lg:text-[5rem] text-white">Mad Lib</p>
            </div>
        </div>
        <div>

        </div>
        <div class="flex justify-center px-[1.9375rem]">
            <div
                class="bg-white w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] flex justify-center items-center">
                <p class="font-[Rubik-Bold] text-[1.875rem] lg:text-[4.375rem] text-center p-5 lg:p-20">{output}</p>
            </div>
        </div>

        <div class="flex justify-center">
            <p class="text-[1.875rem] lg:text-[3.125rem] font-[Rubik-Bold] mt-[1.25rem] lg:mt-[5.25rem] px-[4.6875rem] text-center">Enter Placeholder Category!</p>
        </div>

        <div class="grid grid-cols-5 lg:mx-[6.5625rem]">
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Gender" onChange = {(e) => getGender(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Name" onChange = {(e) => getName(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Age" onChange = {(e) => getAge(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Color" onChange = {(e) => getColor(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Pronoun" onChange = {(e) => getPronoun(e.target.value)}/>
            </div>
        </div>

        <div class="grid grid-cols-5 lg:mx-[6.5625rem]">
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Food" onChange = {(e) => getFood(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Job" onChange = {(e) => getJob(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Adjective 1" onChange = {(e) => getAdjective1(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Adjective 2" onChange = {(e) => getAdjective2(e.target.value)}/>
            </div>
            <div class="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
                <input
                    class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
                    type="text" placeholder="Noun" onChange = {(e) => getNoun(e.target.value)}/>
            </div>
        </div>


        <div class="flex justify-center">
            <button type="submit" value="0" onClick = {() => getResult()}
                class=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem] min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
                <p class="text-black text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold]">Submit</p>
            </button>
        </div>

        <div class="block lg:hidden">
            <div class="flex justify-center">
                <button
                    class="rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.1875rem] h-[4.75rem] mt-[3.75rem] mb-[3.125rem]">
                    <Link to ={"/"}>
                        <p class="text-black font-[Rubik-Bold] text-[1.875rem] lg:text-[3.125rem]">Back</p>
                    </Link>
                </button>
            </div>
        </div>






    </div>
</body>
  )
}
