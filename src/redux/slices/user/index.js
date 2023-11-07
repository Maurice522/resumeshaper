import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
       user:{
        name : null,
        email : null,
        password : null,
        resume : null,
        jobTitle: '',
        firstName: '',
        middleName: '',
        lastName: '',
        inputEmail: '',
        phone: '',
        dateOfBirth: '',
        city: '',
        address: '',
        postalCode: '',
        drivingLicense: '',
        nationality: '',
        placeOfBirth: '',
        country: '',
        uploadedPhotoURL: '',
        professionalSummary: '',
        employmentHistory: [
          {
            jobTitle: '',
            employer: '',
            startDate: '',
            endDate: '',
            city: '',
            description: '',
          },
        ],
        educationHistory: [
          {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            city: '',
            description: '',
          },
        ],
        websitesAndLinks: [
          {
            name: '',
            url: '',
          },
        ],
        customDetails:{
          courses:[],
          activities:[],
          internships:[],
          hobbies:[],
          languages:[],
          references:[],
          customSections:[],
        },
        skills:[],
        profile:false,
        resumes:[]
       }
    },
    reducers:{
        loginUser: (state, action)=>{
            // console.log(action.payload)
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            // console.log("state", state.user.name,
            // state.user.email,
            // state.user.password)
        },
        signOutUser: (state, action)=>{
            state.user.email = null;
            state.user.password = null;
            state.user.name = null;
            state.user.resume = null;

        },
        updateResume: (state, action)=>{
            state.user.resume = action.payload;   
        },
        updatePhoto: (state, action)=>{
            state.user.uploadedPhotoURL= action.payload; 
        },
        updateProfile: (state, action)=>{          
            state.user={...state.user,...action.payload}
        },
        updateUser:(state, action)=>{
          Object.entries(action.payload).map(([key, value]) => {
            if(value !== "" && value !==null )
              if(Array.isArray(value)){
                if(value.length !== 0){
                  state.user[key] = value;
                }

              }else{
                state.user[key] = value;
              }
          }
          );
          console.log("updatedUser")
        },
        saveResume:(state, action)=>{
          state.user.resumes = [...state.user.resumes, action.payload]
        }
    }
})

export const {loginUser, signOutUser, updateResume,updatePhoto,updateProfile,updateUser,saveResume} = userSlice.actions; 
export default userSlice.reducer;