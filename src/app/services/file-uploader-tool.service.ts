import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from './servicebase.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../shared/index';
import { FileUploaderTool } from '../shared/file-uploader-tool';

@Injectable()
export class FileUploaderToolService extends ServicebaseService {

    url = environment.pmsplus_api + `file/file_upload`;

    constructor(private http: HttpClient) {
        super();
    }

    getApiUrl(): string {
        return this.url;
    }
}