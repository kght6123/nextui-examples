import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import {Button} from "@nextui-org/react";
import reactLogo from "./assets/react.svg";
import { AvatarList } from "./ui/molecules/avatarList";
import Breadcrumb from "./ui/molecules/breadcrumb";
import MyButton from "./ui/atoms/myButton";
import Input from "./ui/atoms/input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="sm:w-32 md:w-auto w-14">
          <Button type="button" onClick={() => setCount((count) => count + 1)} fullWidth={true}>
            count is {count}
          </Button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section className="flex flex-col">
        <AvatarList />
        <Breadcrumb />
      </section>
      <section className="flex flex-col p-4 gap-4">
        <div className="sm:w-32 md:w-auto w-14">
          <Button type="button" fullWidth={true}>
            Responsive
          </Button>
        </div>
        <Button type="button" className="sm:w-32 md:w-auto w-14">
          Responsive
        </Button>
        <MyButton>My Button</MyButton>
        <div className="bg-primary w-32 h-32"/>
      </section>
      <section className="flex flex-col p-4 gap-4">
        <Input />
      </section>
    </>
  );
}

export default App;
