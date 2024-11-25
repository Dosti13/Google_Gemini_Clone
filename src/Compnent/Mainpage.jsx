import React, { useState, useRef, useEffect } from "react";
import runchat from "../conf/config";
import LoadingBars from "./Loadbar";
import { addData } from "../Store/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function Mainpage() {
  const [input, setinput] = useState("");
  const [response, setresponse] = useState("");
  const [result, setresult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);
  const prev = useSelector((state) => state.data?.prev || []);

  const dispatch = useDispatch()
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [prev]);
  const send = async (e) => {
        e.preventDefault(); 
        if (input.trim() === "") return; 

        setIsLoading(true);
          try 
          {
            const response = await runchat(input); 
            setresponse(response);
         
            const payload = { input, response };
            dispatch(addData(payload)); //

            setinput(""); 
            
            setresult(true);
          } 
          catch (error)
          {
            console.error("Error while sending message:", error);
            alert("Something went wrong. Please try again.");
          } 

          finally {
            setIsLoading(false); 
          }
  };
  
  return (
    <div className="flex flex-col w-3/4 ml-auto mr-auto h-full">
      {/* Chat Messages */}
      <div
        ref={chatRef}
        className={`flex-1 ${result ?"bg-slate-100":"" } overflow-y-auto relative   w-full p-4 rounded-md`}
      >
         {prev.length > 0 ? (
          <>
            {prev.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-end shadow-md">
                  <p className="mr-4 text-grey-400">{item.input}</p>
                  <img
                    width={40}
                    height={40}
                    src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                    alt=""
                  />
                </div>
                <div className="flex items-start flex-col shadow-md mt-2 bg-slate-200">
                  <img width={30} height={30} src="./image/logo.png" alt="" />
                  <pre className="text-left ml-4 mb-2 text-gray-800">
                    {item.response}
                  </pre>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-start">
                <LoadingBars />
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center flex-col absolute left-0 right-0 top-0 bottom-0">
            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-700 inline-block text-transparent bg-clip-text font-semibold">
              Hello, User
            </h1>
            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-700 inline-block text-transparent bg-clip-text font-semibold">
              What can I help with?
            </h1>
          </div>
        )}
    
        
      </div>

      <div className="w-full bg-white flex items-center p-4 border-t border-gray-300 sticky bottom-0">
        <form onSubmit={send} className="w-full bg-white flex items-center p-4 border-t border-gray-300 sticky bottom-0">
        <input
          onChange={(e) => setinput(e.target.value)}
          value={input}
          className="flex-1 w-3/4 shadow-md rounded-l-3xl px-4 bg-slate-500 text-white outline-none h-12 border-none"
          placeholder="Type your message..."
        />
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-3xl px-4 h-12"
          disabled={isLoading}
          type="submit"
        >
          <span className='material-icons '>send</span>
        </button>
        </form>
      </div>
    </div>
  );
}

export default Mainpage;
