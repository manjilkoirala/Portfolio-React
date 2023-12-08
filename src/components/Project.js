import React from "react";
import chatbot from "../assets/chatbot.png";
import todo from "../assets/todo.png";
import passwordGenerator from "../assets/passwordGenerator.jpg";

const Project = () => {
  return (
    <section className="xl:h-[100vh] h-[100%] flex items-center flex-col">
      <h2 className=" my-16 font-bold text-4xl bg-slate-600 text-white py-4 px-16 rounded-xl">
        Projects
      </h2>
      <div className=" grid gap-16 lg:grid-cols-3 items-center mb-3">
        <div className=" w-80 h-auto flex flex-col items-center gap-3 bg-slate-400 p-6 rounded-lg text-xl text-white font-semibold">
          <img src={chatbot} alt="AI Voice Chatbot" /> <h3>AI Voice Chatbot</h3>
          <div className="button flex gap-3">
            <a href=""><button className="hover:-translate-y-1 bg-primary text-white py-2 px-2 rounded-xl">Website</button></a>
            <a href=""><button className=" hover:-translate-y-1 bg-green-900 text-white py-2 px-2 rounded-xl">Code</button></a>
            
          </div>
        </div>
        <div className=" w-80 h-auto flex flex-col items-center gap-3 bg-slate-400 p-6 rounded-lg text-xl text-white font-semibold">
          <img src={todo} alt="Todo App" /> <h3>Todo App with Local Storage</h3>
          <div className="button flex gap-3">
            <a href=""><button className="hover:-translate-y-1 bg-primary text-white py-2 px-2 rounded-xl">Website</button></a>
            <a href=""><button className=" hover:-translate-y-1 bg-green-900 text-white py-2 px-2 rounded-xl">Code</button></a>
            
          </div>
        </div>
        <div className=" w-80 h-auto flex flex-col items-center gap-3 bg-slate-400 p-6 rounded-lg text-xl text-white font-semibold">
          <img src={passwordGenerator} alt="Password Generator" />
          <h3>Password Generator</h3>
          <div className="button flex gap-3">
            <a href=""><button className="hover:-translate-y-1 bg-primary text-white py-2 px-2 rounded-xl">Website</button></a>
            <a href=""><button className=" hover:-translate-y-1 bg-green-900 text-white py-2 px-2 rounded-xl">Code</button></a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
