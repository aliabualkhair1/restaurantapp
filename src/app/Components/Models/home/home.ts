import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Menuitems } from '../menuitems/menuitems';
import { Menuitemsservice } from '../../../Services/menuitemsservice';
import { Menuiteminterface } from '../../../Interfaces/Models/menuiteminterface';
import { Environment } from '../../../Environment/environment';
import { CommonModule } from '@angular/common';
import { Contact } from '../../../Services/contact';
import { _Contactus } from '../../../Interfaces/Models/_contactus';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Roles } from '../../../Services/roles';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit{
  environment = Environment.StaticFiles;
  currentpage: number = 1;
  menuitems: Menuiteminterface[] = [];
  selecteditems:Menuiteminterface[] = [];
  contact!:_Contactus
  form!:FormGroup
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';
  currentYear: number = new Date().getFullYear();
  constructor(private http: Menuitemsservice, private router: Router,private add:Contact ,private role:Roles) {
    this.form=new FormGroup({
      FullName:new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z\u0621-\u064A ]+$'), Validators.minLength(11),Validators.maxLength(28)]),
      Email:new FormControl(null,[Validators.required,Validators.email]),
      Message:new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9\u0621-\u064A ]+$')]),
    })
  }
  get isAuth() {
    return this.role.isAuthenticated();
  }
ngAfterViewInit(): void {
  const reveals = document.querySelectorAll(".reveal");

  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, options);

  reveals.forEach(section => observer.observe(section));
}


  ngOnInit(): void {
    this.getmenuitems(this.currentpage);  
  }

  getmenuitems(pagenumber: number) {
    this.http.getmenuitems(pagenumber).subscribe({
      next: (res) => {
        this.menuitems = res.items;
          this.selecteditems = this.menuitems.filter(item =>
        item.id === 1 || item.id === 11 || item.id === 15 || item.id === 17
    )},
      error: (err) => {
      alert(err.error)
      }
    });
  }
get fullname(){
  return this.form.get('FullName')!
}
get email(){
  return this.form.get('Email')!
}
get message(){
  return this.form.get('Message')!
}
  submit(){
    if(this.form.invalid) return;
    this.contact={
      fullName:this.form.value.FullName,
      email:this.form.value.Email,
      message:this.form.value.Message
    }
    this.addcontact()
  }
  addcontact(){
    this.add.contactus(this.contact).subscribe({
      next:(res)=>{
      this.showMessage(res, 'success');
      },
      error:(err)=>{
    this.showMessage(err.error || 'حدث خطأ', 'error');
      }
    })
  }
  
  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => {
      this.apiMessage = '';
      this.apiMessageType = '';
    }, 2000);
  }
}
