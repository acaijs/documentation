import { createContext } from "preact"

export interface LocalizationContextInterface {
	(category?: string): Promise<Record<string, string>>;

	getCurr(): string;
	setCurr(newLang: string): void;
}

const context = createContext(undefined as unknown as LocalizationContextInterface)

export const Provider = context.Provider
export default context