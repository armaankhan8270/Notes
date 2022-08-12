import { addDoc, collection, getDocs } from "firebase/firestore";

import "./App.css";
import { db } from "./firebase--config";
import { useEffect, useState } from "react";
import Navbar from "./Pages/NavBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [Title, setTitle] = useState([])
  const [Content, setContent] = useState([])
  const [number, setnumber] = useState(1)
  const collectionRef = collection(db, "Notes");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      console.log(data)
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [number]);
  const Adddata=async()=>{
    await addDoc(collectionRef,{Title:Title,Content:Content})
    setnumber(number+1)

  }
  return (
    <>

  
      <Navbar/>
    <div className=" min-w-0 min-h-0 w-full flex bg-white p-4   h-screen">
    <div className=" min-w-0 min-h-0 App bg-white w-full   shadow-lg h-full">
      <h1 className=" min-w-0 min-h-0  text-center text-5xl font-bold underline">Notes</h1>
     
      <input className='mt-12 mb-12  ml-[25%]  bg-trasnparent uppercase
       outline-none shadow-sm focus:outline-none border-b-4 rounded-lg 
        hover:border-slate-900 p-4 focus:cursor w-1/2  text-black font-extrabold'
         onChange={(e)=>{setTitle(e.target.value)}} type="text"placeholder=' Title ' 
         name="" id="" />

      <textarea className="bg-trasnparent rounded-lg outline-none border-b-4 p-4 capitalize
        hover:border-slate-900 w-1/2 ml-[25%] resize-none focus:outline-none shadow-lg
         text-black" rows='5'placeholder="Contetnt" onChange={(e)=>{setContent(e.target.value)}}> 
         </textarea>
         <button onClick={Adddata} className="bg-cyan-700 w-1/2 p-4 mt-2 ml-[25%] rounded-lg">Save</button>

      <div className=" min-w-0 min-h-0 item-center div ">
      {notes.map((items, ind) => {
        return(
          <div className=" min-w-0 min-h-0 bg-white shadow-lg m-20 self-center flex-row flex w-1/3  p-4" key={ind}>
            <div className=" min-w-0 min-h-0 mb-4 m-3 w-[500px] h-screen">

          <h1 className=" min-w-0 min-h-0  min-w-1/4 text-5xl mt-12 text-center
           bg-cyan-200 rounded-lg p-4 ">{items.Title}</h1>
          <p className=" min-w-0 min-h-0 mt-4  prose prose-a:text-blue-600 hover:prose-a:text-blue-500  shadow-lg p-3 overflow-hidden h-96 bg-cyan-300 ">
            
            {items.Content}
          </p>
            </div>
            {/* <div className=" min-w-0 min-h-0 mb-4 m-3 w-[1000px] h-96">

          <h1 className=" min-w-0 min-h-0  min-w-1/4 text-5xl mt-12 text-center bg-cyan-200 rounded-lg p-4 ">{items.Title}</h1>
          <p className=" min-w-0 min-h-0 mt-4  prose prose-a:text-blue-600 hover:prose-a:text-blue-500  shadow-lg p-3 overflow-hidden h-96 bg-cyan-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            asperiores harum, esse quo fugit perspiciatis modi architecto
            aliquid aliquam provident laborum officia assumenda sed facilis
            voluptatem exercitationem numquam dignissimos necessitatibus!
            {items.Content}
          </p>
            </div> */}
          
          {/* <h1 className=" min-w-0 min-h-0  min-w-1/4 text-5xl mt-12 text-center bg-cyan-200 rounded-lg p-4 ">{items.Title}</h1>
          <p className=" min-w-0 min-h-0 mt-4 prose prose-a:text-blue-600 hover:prose-a:text-blue-500  shadow-lg p-3 overflow-hidden h-96 bg-cyan-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            asperiores harum, esse quo fugit perspiciatis modi architecto
            aliquid aliquam provident laborum officia assumenda sed facilis
            voluptatem exercitationem numquam dignissimos necessitatibus!
            {items.Content}
          </p> */}
          
        </div>
        )
      }
      )
      }
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
