import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isArray } from 'lodash';
import { Response } from './response.model';
import { environment } from '@env/environment.development';

@Injectable({
	providedIn: 'root'
})

export class RequestService {
	that: any;
	constructor(
		private http: HttpClient,
	) {
	}


	private handleError(error: HttpErrorResponse) {

		let that: any = this['that'];

		// if (error.error instanceof ErrorEvent) {
		//   if (error.status && error.status == 403) {

		//     that.store.removeAll();

		//     setTimeout(() => {
		//       window.location.href = "/";
		//     }, 500)
		//   }



		//   if (error.status && error.status == 401) {
		//     that.store.removeAll();

		//     setTimeout(() => {
		//       window.location.href = "/";
		//     }, 500)
		//   }


		// } else {
		//   if (error.status && error.status == 403) {
		//     that.store.removeAll();

		//     setTimeout(() => {
		//       window.location.href = "/";
		//     }, 500)
		//   }

		//   if (error.status && error.status == 401) {
		//     that.store.removeAll();

		//     setTimeout(() => {
		//       window.location.href = "/";
		//     }, 500)
		//   }

		//   console.error(
		//     `Backend returned code ${error.status}, `, error);
		// }


		// return an observable with a user-facing error message
		return throwError(() => error.error);
	}


	GET(URL: any, data: any) {
		// data['int_request_type'] = 'admin';

		URL = `${environment.api_path}${URL}`;
		let request: any, req: any = [];
		if (data) {
			const keys = Object.keys(data);
			if (keys && keys.length > 0) {
				req = keys.map(e => `${e}=${data[e]}`);
			}
			request = `${URL}`;
			if(req.length > 0){
				request = `${URL}?${req.join('&')}`;
			}
		}
		return this.http.get<Response>(request)
			.pipe(
				catchError(this.handleError.bind({ that: this, request: data })), // then handle the error

			);
	}

	POST(URL: any, request: any) {
		// request['int_request_type'] = 'admin';

		URL = `${environment.api_path}${URL}`;
		return this.http.post<Response>(URL, request).pipe(
			catchError(this.handleError.bind({ that: this, request: request })) // then handle the error
		);
	}

	PUT(URL: any, request: any) {
		// request['int_request_type'] = 'admin';

		URL = `${environment.api_path}${URL}`;
		return this.http.put<Response>(URL, request).pipe(
			catchError(this.handleError.bind({ that: this, request: request })) // then handle the error
		);
	}

	PATCH(URL: any, request: any) {
		// request['int_request_type'] = 'admin';
	  
		URL = `${environment.api_path}${URL}`;
		return this.http.patch<Response>(URL, request).pipe(
		  catchError(this.handleError.bind({ that: this, request: request })) // Handle the error
		);
	  }
	  

	DELETE(URL: any, data: any) {
		// data['int_request_type'] = 'admin';

		URL = `${environment.api_path}${URL}`;
		let request: any, req: any = [];
		if (data) {
			const keys = Object.keys(data);

			if (keys && keys.length > 0) {
				req = keys.map((e) => {
					if (isArray(data[e])) {
						data[e] = JSON.stringify(data[e]);
					}
					return `${e}=${data[e]}`;

				});
			}

			request = `${URL}?${req.join('&')}`;
		}
		return this.http.delete<Response>(request)
			.pipe(
				catchError(this.handleError.bind({ that: this, request: data })) // then handle the error
			);
	}

	POSTBYURL(URL: any, request: any) {

		return this.http.post<Response>(URL, request).pipe(
			catchError(this.handleError.bind({ that: this, request: request })) // then handle the error
		);
	}


	GETBYURL(URL: any, data: any) {
		// data['int_request_type'] = 'admin';
		let request: any, req: any = [];
		if (data) {
			const keys = Object.keys(data);
			if (keys && keys.length > 0) {
				req = keys.map(e => `${e}=${data[e]}`);
			}
			request = `${URL}?${req.join('&')}`;
		}
		return this.http.get<Response>(URL)
			.pipe(
				catchError(this.handleError.bind({ that: this, request: request })), // then handle the error

			);
	}

}

