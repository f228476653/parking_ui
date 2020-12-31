import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { SessionStorage} from '../../../shared/index';
import { FileUploaderToolService } from '../../../services/file-uploader-tool.service';
import { FileUploaderTool } from '../../../shared/file-uploader-tool';

@Component({
  selector: 'app-file-uploader-tool',
  templateUrl: './file-uploader-tool.component.html',
  styleUrls: ['./file-uploader-tool.component.css'],
})
export class FileUploaderToolComponent implements OnInit {

  login_user_name = '';
  @Input() fileUploaderTool: FileUploaderTool;
  @Output() passFileUploader = new EventEmitter<FileUploaderTool>();

    constructor(public sessionStorage: SessionStorage, public fileUploaderToolService: FileUploaderToolService) {
      this.login_user_name = this.sessionStorage.getAccount();
     }

    ngOnInit() {
      this.uploader.options.itemAlias = this.fileUploaderTool.file_name;
    }
    
    public uploader:FileUploader = new FileUploader({
      url: this.fileUploaderToolService.getApiUrl(),
      method: "POST",
      autoUpload: false,
      headers: [{name:"Authorization", value:this.sessionStorage.getToken()}]
    });

    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;
   
    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
   
    public fileOverAnother(e:any):void {
      this.hasAnotherDropZoneOver = e;
    }
}
