// import Home from './Home';
import Card from "./Card"

const data = [
  {
    heading: "card 1",
    desc : "This is Card 1 Desc",
    color : "bg-slate-100",
    image : "https://avatars.githubusercontent.com/u/112681289?v=4"
  },
  {
    heading: "card 2",
    desc : "This is Card 2 Desc",
    color : "bg-red-100",
    image : "https://avatars.githubusercontent.com/u/112681289?v=4"
  },
  {
    heading: "card 3",
    desc : "This is Card 3 Desc",
    color : "bg-yellow-100",
    image : "https://avatars.githubusercontent.com/u/112681289?v=4"
  },
  {
    heading: "card 4",
    desc : "This is Card 4 Desc",
    color : "bg-blue-100",
    image : "https://avatars.githubusercontent.com/u/112681289?v=4"
  },
]


function App() {

  return (
    <>
      {/* <h1>Hello World, from Techno</h1> */}
      {/* <Home /> */}
      {/* <div className='bg-green-400 text-center text-white p-4'>Hello Techno</div>      uses classname="" and not class="" */}
      {/* <div style={{backgroundColor: "green", borderRadius: "15px" ,}}>Hello Techno</div> */}
      {/* <div className='bg-green-400 w-[5vw]'>HELLO TECHNO</div> */}

      <div className="grid grid-cols-4 gap-4 p">
        
        {/* ------------- with props ------------------ */}
        {/* props --> passing parmaeters to functions */}
        {/* <Card heading="Card 1" desc="this is desc 1" color="bg-slate-100"/>   */}


        {/* ---------------------- with obj params --------------------------------- */}
        {/* {data.map((item,i)=>{
          // console.log(item)
          return (
            <Card heading={item.heading} desc={item.desc} image={item.image} color={item.color} key={i}/>
          )
        })}  */}


        {/* ----------------------- with destructor -------------------------------  */}
        {data.map((item,i)=>{
          return (
            <Card item={item} />
          )}
        )}
      </div>

    </>
  )
}

export default App
