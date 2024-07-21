export default interface HttpClient {
	get<T>(url: string, headers?: any): Promise<T>;
	post<T>(url: string, data?: any, headers?: any): Promise<T>;
	put<T>(url: string, data: any): Promise<T>;
	delete<T>(url: string): Promise<T>;
}