import AppContext from "./AppContext";
import { useContext, useState } from "react";

const getLocalStorage = () => {
  const data = localStorage.getItem("task");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function AppProvider({ children }) {
  const [getTaskList, setTaskList] = useState(getLocalStorage());

  return (
    <AppContext.Provider
      value={{
        getTaskList,
        setTaskList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useTaskList() {
  const context = useContext(AppContext);
  const { getTaskList, setTaskList } = context;
  return { getTaskList, setTaskList };
}
