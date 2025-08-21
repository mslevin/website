"use client";
import { useState } from "react";

const MEM_SIZE = 100;

type MemoryCell = {
  value: number;
  active: boolean;
};

export default function Brainfuck() {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState<MemoryCell[]>(
    Array(MEM_SIZE).fill({ value: 0, active: false })
  );
  const [runningInterval, setRunningInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [pointer, setPointer] = useState(0);

  const runInterpreter = () => {
    console.log("Running interpreter");
    let currentPointer = 0;
    const commands = input.split("");
    const interval = setInterval(() => {
      const currentCommand = commands[currentPointer];
      let value = memory[currentPointer].value;
      switch (currentCommand) {
        case ">":
          currentPointer = (currentPointer + 1) % MEM_SIZE;
          break;
        case "<":
          currentPointer = (currentPointer - 1 + MEM_SIZE) % MEM_SIZE;
          break;
        case "+":
          value = (value + 1) % 256;
          break;
        case "-":
          value = (value - 1 + 256) % 256;
          break;
      }
      setMemory((prev) => {
        const newMemory = prev.map((cell, index) => ({
          value: index === currentPointer ? value : cell.value,
          active: index === currentPointer,
        }));
        return newMemory;
      });

      if (!commands[currentPointer]) {
        clearInterval(interval);
        setRunningInterval(null);
      }
    }, 100);
    setRunningInterval(interval);
  };

  const stopInterpreter = () => {
    if (runningInterval) {
      clearInterval(runningInterval);
      setRunningInterval(null);
    }
  };

  return (
    <div className="">
      <a href="https://en.wikipedia.org/wiki/Brainfuck" target="_blank">
        Brainfuck
      </a>
      {/* Actual content below */}
      <div className="font-sans">
        <div className="mt-6 flex max-w-md gap-x-4">
          <input
            id="brainfuck-input"
            name="brainfuck-input"
            type="text"
            required
            placeholder="Enter your brainfuck code"
            autoComplete="brainfuck-input"
            className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus:outline-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            // type="submit"
            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            onClick={runningInterval ? stopInterpreter : runInterpreter}
          >
            {runningInterval ? "Stop" : "Go"}
          </button>
        </div>
        <div className="mt-6 flex gap-1">
          {memory.map((cell, index) => (
            <div
              className={`w-2 h-2 ${cell.active ? "bg-blue-500" : ""}`}
              key={index}
            >
              {cell.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
