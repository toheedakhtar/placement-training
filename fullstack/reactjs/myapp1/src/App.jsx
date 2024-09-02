// // import Home from './Home';
// import Card from "./Card"

// const data = [
//   {
//     heading: "card 1",
//     desc : "This is Card 1 Desc",
//     color : "bg-slate-100",
//     image : "https://avatars.githubusercontent.com/u/112681289?v=4"
//   },
//   {
//     heading: "card 2",
//     desc : "This is Card 2 Desc",
//     color : "bg-red-100",
//     image : "https://avatars.githubusercontent.com/u/112681289?v=4"
//   },
//   {
//     heading: "card 3",
//     desc : "This is Card 3 Desc",
//     color : "bg-yellow-100",
//     image : "https://avatars.githubusercontent.com/u/112681289?v=4"
//   },
//   {
//     heading: "card 4",
//     desc : "This is Card 4 Desc",
//     color : "bg-blue-100",
//     image : "https://avatars.githubusercontent.com/u/112681289?v=4"
//   },
// ]


// function App() {

//   return (
//     <>
//       {/* <h1>Hello World, from Techno</h1> */}
//       {/* <Home /> */}
//       {/* <div className='bg-green-400 text-center text-white p-4'>Hello Techno</div>      uses classname="" and not class="" */}
//       {/* <div style={{backgroundColor: "green", borderRadius: "15px" ,}}>Hello Techno</div> */}
//       {/* <div className='bg-green-400 w-[5vw]'>HELLO TECHNO</div> */}

//       <div className="grid grid-cols-4 gap-4 p">
        
//         {/* ------------- with props ------------------ */}
//         {/* props --> passing parmaeters to functions */}
//         {/* <Card heading="Card 1" desc="this is desc 1" color="bg-slate-100"/>   */}


//         {/* ---------------------- with obj params --------------------------------- */}
//         {/* {data.map((item,i)=>{
//           // console.log(item)
//           return (
//             <Card heading={item.heading} desc={item.desc} image={item.image} color={item.color} key={i}/>
//           )
//         })}  */}


//         {/* ----------------------- with destructor -------------------------------  */}
//         {data.map((item,i)=>{
//           return (
//             <Card item={item} />
//           )}
//         )}
//       </div>

//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react";
import Card from "./Card"
import Login from "./Login"
import State from "./State"
import Child from "./Child";
import Router from './router/Router'



// const data = [
//   {
//     heading: "card 1",
//     desc: "This is Card 1 Desc",
//     color: "bg-slate-100",
//     image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
//   },
//   {
//     heading: "card 2",
//     desc: "This is Card 2 Desc",
//     color: "bg-red-200",
//     image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
//   },
//   {
//     heading: "card 3",
//     desc: "This is Card 3 Desc",
//     color: "bg-green-200",
//     image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
//   },
//   {
//     heading: "card 4",
//     desc: "This is Card 4 Desc",
//     color: "bg-yellow-200",
//     image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
//   },
//   {
//     heading: "card 5",
//     desc: "This is Card 5 Desc",
//     color: "bg-purple-200",
//     image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
//   },
//   {
//     heading: "card 6",
//     desc: "This is Card 6 Desc",
//     color: "bg-cyan-200",
//     image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
//   },
//   {
//     heading: "card 7",
//     desc: "This is Card 7 Desc",
//     color: "bg-blue-100",
//     image: "https://th.bing.com/th/id/OIP.KT2xbgX0E18-ndqTSclMHgHaJC?pid=ImgDet&w=208&h=254&c=7&dpr=1.5"
//   },

// ]


function App() {

  // const [count , setCount] = useState(0);
  // const [productId , setProductId] = useState(1);

  // const fetchData = async (id)=>{
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // useEffect(()=>{
  //   console.log("Inside UseEffect")
  //   fetchData(productId);
  // },[productId])

  return (
    <div className="p-4 h-screen text-center">
      <RouterProvider router={Router} />
      <Outlet />
      {/* Context Apis */}
      {/* <button className="bg-green-400 mx-3" onClick={()=>{setCount(count+1)}}>Inc Count</button>
      <button className="bg-gray-300" onClick={()=>{setProductId(productId+1)}}>Inc Product Id</button> */}
      {/* <State />
      <Login /> 
      {/* <p className="text-2xl font-medium">App</p> */}
      {/* <Child /> */}
      {/* {
        data.map((item , i)=>{
          return (
            <Card item={item} />
          )
          
        })
      } */}
      
      <Login />
    </div>
  )
}

export default App