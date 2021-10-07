export default interface TranslateType {
	(key: string, fallback?: string): string;

	getCurr(): string;
	setCurr(newlang: string): void;
}