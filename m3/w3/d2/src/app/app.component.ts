import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2';

  @ViewChild('form', {static:true}) form!: NgForm;

  heroForm = {
    defNome: '',
    defAlterego: '',
    question: '',
    defNemico: '',
    defPianeta: '',
    defDebolezza: '',
  }

  /*risposta= '';*/

  hero: any = {
    username: '',
    alterego: '',
    secret: '',
    nemico: '',
    pianeta:'',
    debolezza:''
  };

 /* ngOnInit():void{
    this.form.statusChanges?.subscribe(status => {
        console.log('Stato del form: ', status);
    });
  }*/

  ngOnInit(){}

    submit(){
    console.log('Form inviato: ', this.form);
    this.hero.username = this.form.value.heroInfo.username;
    this.hero.alterego = this.form.value.heroInfo.alterego;
    this.hero.secret = this.form.value.heroInfo.secret;
    this.hero.nemico = this.form.value.heroInfo.nemico;
    this.hero.pianeta = this.form.value.heroInfo.pianeta;
    this.hero.debolezza = this.form.value.heroInfo.debolezza;
    }


}
