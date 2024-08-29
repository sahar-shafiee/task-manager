import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface IContext {
  tasks: any[];
  removeItem?: (id: number) => void;
  addItem?: (text: string) => void;
  editItem?: (text: string, id: number, status: boolean) => void;
}

export const taskContext = createContext<IContext>({
  tasks: [],
});

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { Provider } = taskContext;
  const [tasks, setTasks] = useState<
    { id: number; title: string; status: boolean }[]
  >([]);

  useEffect(() => {
    try {
      const local = localStorage.getItem("tasks");
      if (local) {
        const parse = JSON.parse(local);
        setTasks(parse);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  function removeItem(taskId: number) {
    const newItems = tasks.filter((item) => item.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(newItems));
    setTasks(newItems);
  }

  function editItem(text: string, id: number, status: boolean) {
    const updatedItems = tasks.map((item) =>
      item.id === id ? { ...item, title: text, status } : item
    );
    setTasks(updatedItems);
    localStorage.setItem("tasks", JSON.stringify(updatedItems));
  }

  function addItem(text: string) {
    const newItem = [
      ...tasks,
      {
        id: Math.floor(Math.random() * (1000 - 10 + 1)) + 10,
        title: text,
        status: false,
      },
    ];
    setTasks(newItem);
    localStorage.setItem("tasks", JSON.stringify(newItem));
  }

  return (
    <Provider
      value={{
        tasks,
        removeItem,
        addItem,
        editItem,
      }}
    >
      {children}
    </Provider>
  );
};
