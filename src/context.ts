import { createContext } from "react";
import { ContextType } from "./type";

const Context = createContext<ContextType | null>(null);

export default Context;
