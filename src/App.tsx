import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Title } from "@/styles";

function App() {
  const numbers = useQuery(api.myFunctions.listNumbers, { count: 10 });
  const addNumber = useMutation(api.myFunctions.addNumber);

  return (
    <main>
      <Title className="text-4xl font-extrabold my-8 text-center">
        Convex + React (Vite)
      </Title>
      <p>
        Click the button and open this page in another window - this data is
        persisted in the Convex cloud database!
      </p>
      <p>
        <Button
          onClick={() => {
            void addNumber({ value: Math.floor(Math.random() * 10) });
          }}
        >
          Add a random number
        </Button>
      </p>
      <p>
        Numbers:{" "}
        {numbers?.length === 0
          ? "Click the button!"
          : numbers?.join(", ") ?? "..."}
      </p>
      <p>
        Edit <code>convex/myFunctions.ts</code> to change your backend
      </p>
      <p>
        Edit <code>src/App.tsx</code> to change your frontend
      </p>
      <p>
        Check out{" "}
        <a target="_blank" href="https://docs.convex.dev/home">
          Convex docs
        </a>
      </p>
    </main>
  );
}

export default App;
