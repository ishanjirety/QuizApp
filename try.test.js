// import {getUser} from './App'
// import * as axios from 'axios'

// jest.mock("axios")
// describe("Mocking API Call",()=>{
//     test("Testint passed GET call",async ()=>{
//         axios.get.mockResolvedValue({
//             data:{
//                 name:"rupesh"
//             }
//         })
//         const name =await getUser()

//         expect(name).toEqual({
//             data:{
//                 name:"rupesh"
//             }
//         })
//     })

//     test("Testing failed GET call",async ()=>{
//         axios.get.mockRejectedValue({
//             error:"Something went wrong"
//         })
//         axios.isAxiosError.mockImplementation((_)=>true)
//         const name = await getUser()
//         expect(name).toEqual({
//             error:"Server down"
//         })

//     })
// })

// export async function getUser(){
//     try{
//       const response = await axios.get('/api')
//       return response
//     }catch(e){
//       if(axios.isAxiosError(e)){
//         return {error:"Server down"}
//       }
//         return {
//           error:"Something went wrong"
//         }
//     }
//   }