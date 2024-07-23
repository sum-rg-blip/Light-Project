import { useState} from "react"
function Light(){
  const [color,setColor] = useState(false)
  //OnButton
  const OnButton = ()=> {
    setColor(true)
  }
  //ofButton
  const ofButton = () => {
    setColor(false)
  }
  return <div>
    <h1 className="ml-[600px] ">This is light</h1>
   <div style={{background : color === true ? "yellow":""}} className="border-[10px] rounded-full sm:ml-[500px] mt-10 ml-10 sm:mt-[50px] border-black w-[300px] h-[300px]"></div>
  <button onClick={OnButton} style={{backgroundColor: color===true ? "red":""}} className="px-14 sm:px-10 py-2 m-3 ml-10 text-white sm:ml-[500px]  mt-7 sm:mt-[30px] bg-red-500 text-2xl ">ON</button>
  <button onClick={ofButton} style={{backgroundColor: color===true ? "":"red"}} className="px-10 py-2 m-3 text-white bg-red-500 text-2xl ">OFF</button>
  </div>
}
export default Light