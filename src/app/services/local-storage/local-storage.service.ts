import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	public getTokenAuth = (): string => localStorage.getItem('auth_token') ?? '';
	public setTokenAuth = (token: string) => localStorage.setItem('auth_token', token);

	public getTokenRefresh = (): string => localStorage.getItem('refresh_token') ?? '';
	public setTokenRefresh = (token: string) => localStorage.setItem('refresh_token', token);

	public getEnviorment = (): string => localStorage.getItem('environment') ?? '';

	public getUser = (): string => localStorage.getItem('user_auth') ?? '';
	public setUser = (data: string) => localStorage.setItem('user_auth', data);


	public clearAllData() {
		localStorage.removeItem("auth_token");
		localStorage.removeItem("refresh_token");
		localStorage.removeItem("environment");
		localStorage.removeItem("user_auth");
	}


}
