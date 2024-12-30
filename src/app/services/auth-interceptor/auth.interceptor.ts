import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';
import { SnackbarService } from '@services/snackbar/snackbar.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(
		private readonly _router: Router,
		private readonly _storageService: LocalStorageService,
		private readonly _snackbar : SnackbarService,
	  ) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token: string = this._storageService.getTokenAuth();
		const environ: string = this._storageService.getEnviorment();
		let req = request;
		if (token) {
			req = request.clone({
				setHeaders: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
					Authorization: token,
					environment: environ
				}
			});
		}
		return next.handle(req).pipe(
			catchError((err:any) => {
				if (err.status === 401) {
					this._router.navigate(['/signin']);
				}
				if (!navigator.onLine) {
					this._snackbar.notify("Internet not wokring",2)
				}
				return throwError(()=>err);
			})
		);
	}
}


