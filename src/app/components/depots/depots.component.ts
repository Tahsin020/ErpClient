import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DepotPipe } from '../../pipes/depot.pipe';
import { SharedModule } from '../../modules/shared.module';
import { DepotModel } from '../../models/depot.model';
import { HttpService } from '../../services/http.service';
import { SwalService } from '../../services/swal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depots',
  standalone: true,
  imports: [SharedModule, DepotPipe],
  templateUrl: './depots.component.html',
  styleUrl: './depots.component.css'
})
export class DepotsComponent implements OnInit{
  depots: DepotModel[] = [];
  search: string = '';

  createModel: DepotModel = new DepotModel();
  updateModel: DepotModel = new DepotModel();

  @ViewChild('createModalCloseBtn') createModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;

  @ViewChild('updateModalCloseBtn') updateModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;

  constructor(private http: HttpService, private swal: SwalService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.http.post<DepotModel[]>('Depots/GetAll', {}, (res) => {
      this.depots = res;
    });
  }

  create(form: NgForm) {
    if (form.valid) {
      this.http.post<string>('Depots/Create', this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new DepotModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  deleteById(model:DepotModel){
    this.swal.callSwal("Depoyu Sil?",`${model.name} Deposunu silmek istiyor musunuz?`,() => {
      this.http.post<string>("Depots/DeleteById",{id:model.id},(res)=>{
        this.getAll();
        this.swal.callToast(res,"info");
      });
    });
  }

  get(model: DepotModel){
    this.updateModel = {...model};
  }

  update(form: NgForm) {
    if (form.valid) {
      this.http.post<string>('Depots/Update', this.updateModel, (res) => {
        this.swal.callToast(res,"info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
}
