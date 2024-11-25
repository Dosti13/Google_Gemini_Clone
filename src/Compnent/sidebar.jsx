import React from "react";
import { saveChat ,clearChat,loadChat } from "../Store/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar({ isSidebarOpen }) {
  const {savedChats}= useSelector((state)=>state.data)
  const dispatch = useDispatch()
 
  
  
  const handleNewChat = () => {
    dispatch(saveChat());
    dispatch(clearChat());
  };

  const handleLoadChat = (chat) => {
    dispatch(loadChat(chat)); // Load the selected saved chat
  };
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white h-screen transition-all duration-300 flex flex-col`}
    >
      {/* Top Section */}
      <div className="mt-6 px-2">
        <button
        onClick={handleNewChat}
          className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <span className="material-icons">add</span>
          {isSidebarOpen && <span className="ml-3">New Chat</span>}
        </button>

        {isSidebarOpen && (
          <>
            <h1 className="text-sm text-gray-400 mt-6 mb-4 px-2">Recent</h1>
            {savedChats.length > 0 ? (
              savedChats.map((chat, index) => (
                <div
                  key={index}
                  onClick={() => handleLoadChat(chat)}
                  className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                >
                  <span className="material-icons">chat</span>
                  {isSidebarOpen && (
                    <span className="ml-3">
                      {chat[0]?.input || "Untitled Chat"}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm px-2">No chats saved yet.</p>
            )}
          </>
        )}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto px-2 mb-20">
        <button
          className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <span className="material-icons">diamond</span>
          {isSidebarOpen && <span className="ml-3">Gem Manager</span>}
        </button>
        <button
          className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <span className="material-icons">settings</span>
          {isSidebarOpen && <span className="ml-3">Settings</span>}
        </button>
        <button
          className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <span className="material-icons">help</span>
          {isSidebarOpen && <span className="ml-3">Help</span>}
        </button>
        <button
          className={`flex items-center p-2 hover:bg-gray-700 rounded-md ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <span className="material-icons">history</span>
          {isSidebarOpen && <span className="ml-3">History</span>}
        </button>
      </div>
    </aside>
  );
}
