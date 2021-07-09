import { createContext } from "preact";

const localizationContext = createContext((category?: string) => Promise.resolve({ "": "" }));
export default localizationContext;
