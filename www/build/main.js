webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escenario_escenario__ = __webpack_require__(102);
/**
 * En esta clase se escoge el deporte del evento
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeportePage = (function () {
    function DeportePage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.myForm = this.fb.group({
            deporte: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    DeportePage.prototype.pasarEscenario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escenario_escenario__["a" /* EscenarioPage */], { deporte: this.deporte });
    };
    DeportePage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    DeportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeportePage');
    };
    return DeportePage;
}());
DeportePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-deporte',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger deporte</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n      \n    <ion-item>\n      <ion-label>¿Qué vas a jugar?</ion-label>  \n      <ion-select formControlName="deporte" placeholder="Seleccionar deporte" [(ngModel)]="deporte">\n        <ion-option value="futbol">Fútbol</ion-option>\n        <ion-option value="basketball">Basketball</ion-option>\n        <ion-option value="tennis">Tennis</ion-option>\n        <ion-option value="karate">Karate</ion-option>\n        <ion-option value="ajedrez">Ajedrez</ion-option>\n        <ion-option value="natacion">Natación</ion-option>\n        <ion-option value="tenisDeMesa">Tenis de mesa</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'deporte\').errors && myForm.get(\'deporte\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'deporte\').hasError(\'required\')">El deporte es requerido</p>\n    </ion-item>\n\n    <ion-item>\n      {{ myForm.get(\'deporte\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarEscenario()">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/,
=======
        selector: 'page-deporte',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger deporte</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n      \n    <ion-item>\n      <ion-label>¿Qué vas a jugar?</ion-label>  \n      <ion-select formControlName="deporte" placeholder="Seleccionar deporte" [(ngModel)]="deporte">\n        <ion-option value="futbol">Fútbol</ion-option>\n        <ion-option value="basketball">Basketball</ion-option>\n        <ion-option value="tennis">Tennis</ion-option>\n        <ion-option value="karate">Karate</ion-option>\n        <ion-option value="ajedrez">Ajedrez</ion-option>\n        <ion-option value="natacion">Natación</ion-option>\n        <ion-option value="tenisDeMesa">Tenis de mesa</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'deporte\').errors && myForm.get(\'deporte\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'deporte\').hasError(\'required\')">El deporte es requerido</p>\n    </ion-item>\n\n    <ion-item>\n      {{ myForm.get(\'deporte\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarEscenario()">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], DeportePage);

//# sourceMappingURL=deporte.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscenarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dia_dia__ = __webpack_require__(103);
/**
 * Esta clase selecciona el escenario deportivo
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EscenarioPage = (function () {
    function EscenarioPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.escenario = '';
        this.myForm = this.fb.group({
            escenario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos de ngModel
        this.deporte = navParams.get('deporte');
    }
    EscenarioPage.prototype.pasarDia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dia_dia__["a" /* DiaPage */], { deporte: this.deporte,
            escenario: this.escenario });
    };
    EscenarioPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    EscenarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscenarioPage');
    };
    return EscenarioPage;
}());
EscenarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-escenario',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger escenario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-label>¿Dónde?</ion-label>\n      <ion-select formControlName="escenario" placeholder="Seleccionar deporte" [(ngModel)]="escenario">\n        <ion-option value="Placa # 1">Placa # 1</ion-option>\n        <ion-option value="Placa # 2">Placa # 2</ion-option>\n        <ion-option value="Placa # 3">Placa # 3</ion-option>\n        <ion-option value="Coliseo">Coliseo</ion-option>\n        <ion-option value="Mesa de tennis # 1">Mesa de tennis # 1</ion-option>\n        <ion-option value="Mesa de tennis # 2">Mesa de tennis # 2</ion-option>\n        <ion-option value="Mesa de tennis cemento">Mesa de tennis cemento</ion-option>\n      </ion-select>   \n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'escenario\').errors && myForm.get(\'escenario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'escenario\').hasError(\'required\')">El escenario es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarDia()">Continuar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/,
=======
        selector: 'page-escenario',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger escenario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-label>¿Dónde?</ion-label>\n      <ion-select formControlName="escenario" placeholder="Seleccionar deporte" [(ngModel)]="escenario">\n        <ion-option value="Placa # 1">Placa # 1</ion-option>\n        <ion-option value="Placa # 2">Placa # 2</ion-option>\n        <ion-option value="Placa # 3">Placa # 3</ion-option>\n        <ion-option value="Coliseo">Coliseo</ion-option>\n        <ion-option value="Mesa de tennis # 1">Mesa de tennis # 1</ion-option>\n        <ion-option value="Mesa de tennis # 2">Mesa de tennis # 2</ion-option>\n        <ion-option value="Mesa de tennis cemento">Mesa de tennis cemento</ion-option>\n      </ion-select>   \n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'escenario\').errors && myForm.get(\'escenario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'escenario\').hasError(\'required\')">El escenario es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarDia()">Continuar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], EscenarioPage);

//# sourceMappingURL=escenario.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__horario_horario__ = __webpack_require__(104);
/**
 * En esta clase se selecciona el día del evento
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiaPage = (function () {
    function DiaPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.myForm = this.fb.group({
            dia: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos de ngModel
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
    }
    DiaPage.prototype.pasarHorario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__horario_horario__["a" /* HorarioPage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia });
    };
    DiaPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    DiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiaPage');
    };
    return DiaPage;
}());
DiaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-dia',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger día</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n        \n    <ion-item>\n      <ion-label>¿Qué día vas a jugar?</ion-label>  \n      <ion-select formControlName="dia" placeholder="Seleccionar día" [(ngModel)]="dia">\n        <ion-option value="lunes">Lunes</ion-option>\n        <ion-option value="martes">Martes</ion-option>\n        <ion-option value="miercoles">Miércoles</ion-option>\n        <ion-option value="jueves">Jueves</ion-option>\n        <ion-option value="viernes">Viernes</ion-option>\n        <ion-option value="sabado">Sábado</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'dia\').errors && myForm.get(\'dia\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'dia\').hasError(\'required\')">El día es requerido</p>\n    </ion-item>\n\n    <ion-item>\n      {{ myForm.get(\'dia\').value }}\n    </ion-item>\n  \n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarHorario()">Continuar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/,
=======
        selector: 'page-dia',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger día</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n        \n    <ion-item>\n      <ion-label>¿Qué día vas a jugar?</ion-label>  \n      <ion-select formControlName="dia" placeholder="Seleccionar día" [(ngModel)]="dia">\n        <ion-option value="lunes">Lunes</ion-option>\n        <ion-option value="martes">Martes</ion-option>\n        <ion-option value="miercoles">Miércoles</ion-option>\n        <ion-option value="jueves">Jueves</ion-option>\n        <ion-option value="viernes">Viernes</ion-option>\n        <ion-option value="sabado">Sábado</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'dia\').errors && myForm.get(\'dia\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'dia\').hasError(\'required\')">El día es requerido</p>\n    </ion-item>\n\n    <ion-item>\n      {{ myForm.get(\'dia\').value }}\n    </ion-item>\n  \n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarHorario()">Continuar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], DiaPage);

//# sourceMappingURL=dia.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participantes_participantes__ = __webpack_require__(105);
/**
 * En esta clase se selecciona el horario
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorarioPage = (function () {
    function HorarioPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.myForm = this.fb.group({
            horario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos de ngModel
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
    }
    HorarioPage.prototype.pasarParticipantes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__participantes_participantes__["a" /* ParticipantesPage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia,
            horario: this.horario });
    };
    HorarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorarioPage');
    };
    HorarioPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    return HorarioPage;
}());
HorarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-horario',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger horario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n\n    <ion-item>\n      <ion-label>¿A qué horas?</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="horario" [(ngModel)]="horario"></ion-datetime>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'horario\').errors && myForm.get(\'horario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'horario\').hasError(\'required\')">El horario es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        {{ myForm.get(\'horario\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarParticipantes()">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/,
=======
        selector: 'page-horario',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger horario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n\n    <ion-item>\n      <ion-label>¿A qué horas?</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="horario" [(ngModel)]="horario"></ion-datetime>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'horario\').errors && myForm.get(\'horario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'horario\').hasError(\'required\')">El horario es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        {{ myForm.get(\'horario\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarParticipantes()">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], HorarioPage);

//# sourceMappingURL=horario.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nombre_nombre__ = __webpack_require__(106);
/**
 * En esta clase se escogen el número de participantes
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantesPage = (function () {
    function ParticipantesPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.myForm = this.fb.group({
            participantes: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
    }
    ParticipantesPage.prototype.pasarNombre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nombre_nombre__["a" /* NombrePage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia,
            horario: this.horario,
            participantes: this.participantes });
    };
    ParticipantesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParticipantesPage');
    };
    ParticipantesPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    return ParticipantesPage;
}());
ParticipantesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-participantes',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger número de participantes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-label>¿Cuántos?</ion-label>\n        <ion-select formControlName="participantes" placeholder="Seleccionar participantes" [(ngModel)]="participantes">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'participantes\').errors && myForm.get(\'participantes\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'participantes\').hasError(\'required\')">El número de participantes es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        {{ myForm.get(\'participantes\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarNombre()">Continuar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/,
=======
        selector: 'page-participantes',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger número de participantes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-label>¿Cuántos?</ion-label>\n        <ion-select formControlName="participantes" placeholder="Seleccionar participantes" [(ngModel)]="participantes">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'participantes\').errors && myForm.get(\'participantes\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'participantes\').hasError(\'required\')">El número de participantes es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        {{ myForm.get(\'participantes\').value }}\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarNombre()">Continuar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ParticipantesPage);

//# sourceMappingURL=participantes.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NombrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(78);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_evento__ = __webpack_require__(77);
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * En esta clase se crea el nombre del evento
 */




var NombrePage = (function () {
    function NombrePage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.nombre = '';
        this.myForm = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.participantes = navParams.get('participantes');
    }
    NombrePage.prototype.volverEvento = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__evento_evento__["a" /* EventoPage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia,
            horario: this.horario,
            participantes: this.participantes,
            nombre: this.nombre });
    };
    NombrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NombrePage');
    };
    NombrePage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    return NombrePage;
}());
NombrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-nombre',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nombra al evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-input formControlName="nombre" type="text" placeholder="Nombre del evento" [(ngModel)]="nombre"></ion-input>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Nombre es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="volverEvento()">Finalizar</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/,
=======
        selector: 'page-nombre',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nombra al evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item>\n      <ion-input formControlName="nombre" type="text" placeholder="Nombre del evento" [(ngModel)]="nombre"></ion-input>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Nombre es requerido</p>\n    </ion-item>\n\n    <ion-item>\n        <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="volverEvento()">Finalizar</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], NombrePage);

var _a, _b, _c;
//# sourceMappingURL=nombre.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ingreso_ingreso__ = __webpack_require__(49);
/**
 * En esta clase se hace el formulario para la suscripción de un nuevo usuario
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Los datos serán envíados a la página IngresoPage

var FormularioPage = (function () {
    function FormularioPage(navCtrl, fb, navParams) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.navParams = navParams;
        this.myForm = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            primerApellido: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            segundoApellido: [''],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            confirmarContrasena: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    // Se obtiene la información luego de que todo esté validado
    FormularioPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    FormularioPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ingreso_ingreso__["a" /* IngresoPage */]);
    };
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    return FormularioPage;
}());
FormularioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-formulario',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding>\n    <!-->Solicita toda la información<-->\n    <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n      <ion-slides pager>\n\n        <!-->Slide de bienvenida<-->\n        <ion-slide>\n          <h2>Bienvenido a OlyMatch</h2>\n        </ion-slide>\n          \n        <!-->Slide de nombre, primerApellido y segundoApellido<-->\n        <ion-slide>\n          <h2>información personal</h2>\n          <ion-list>\n                  \n            <ion-item>\n              <ion-input formControlName="nombre" type="text" placeholder="nombre"></ion-input>\n            </ion-item>\n                \n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="primerApellido" type="text" placeholder="primerApellido"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'primerApellido\').errors && myForm.get(\'primerApellido\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'primerApellido\').hasError(\'required\')">Primer apellido es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="segundoApellido" type="text" placeholder="segundoApellido"></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-slide>\n        \n        <!-->Slide de email, contrasena y confirmarContrasena<-->\n        <ion-slide>\n          <h2>Validar información</h2>\n          <ion-list>\n            <ion-item>\n              <ion-input formControlName="email" type="text" placeholder="email"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">E-mail es requerido</p>\n              <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">No es un e-mail</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="contrasena" type="password" placeholder="contrasena"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'contrasena\').errors && myForm.get(\'contrasena\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'contrasena\').hasError(\'required\')">Contraseña es requerida</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="confirmarContrasena" type="password" placeholder="confirmarContrasena"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'confirmarContrasena\').errors && myForm.get(\'confirmarContrasena\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'confirmarContrasena\').hasError(\'required\')">Contraseña es requerida</p>\n            </ion-item>\n\n            <ion-item>\n              <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="volver()">¡Únete al juego!</button>\n            </ion-item>\n          </ion-list>\n        </ion-slide>\n      </ion-slides>\n    </form>\n  </ion-content>\n\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
], FormularioPage);

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deporte/deporte.module": [
		283,
		8
	],
	"../pages/dia/dia.module": [
		281,
		7
	],
	"../pages/escenario/escenario.module": [
		282,
		6
	],
	"../pages/formulario/formulario.module": [
		284,
		5
	],
	"../pages/horario/horario.module": [
		280,
		4
	],
	"../pages/ingreso/ingreso.module": [
		285,
		3
	],
	"../pages/momento/momento.module": [
		277,
		2
	],
	"../pages/nombre/nombre.module": [
		278,
		1
	],
	"../pages/participantes/participantes.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_settings_evento_settings__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventoServiceProvider = (function () {
    function EventoServiceProvider(http, eventoSettingsProvider) {
        this.http = http;
        this.eventoSettingsProvider = eventoSettingsProvider;
        this.apiUrl = this.eventoSettingsProvider.getApiUrl();
    }
    EventoServiceProvider.prototype.getAllEvents = function () {
        return this.http.get(this.apiUrl + 'evento')
            .map(function (response) { return response.json().result; });
    };
    return EventoServiceProvider;
}());
EventoServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__evento_settings_evento_settings__["a" /* EventoSettingsProvider */]])
], EventoServiceProvider);

//# sourceMappingURL=evento-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CONFIG = {
    apiUrl: 'http://localhost:8080/'
};
var EventoSettingsProvider = (function () {
    function EventoSettingsProvider() {
    }
    EventoSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    return EventoSettingsProvider;
}());
EventoSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventoSettingsProvider);

//# sourceMappingURL=evento-settings.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Variables que recibimos
        this.nombreUsuario = '';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__evento_evento__["a" /* EventoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */];
        this.nombreUsuario = navParams.get('nombreUsuario');
    }
    return TabsPage;
}());
TabsPage = __decorate([
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="Evento" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="nombreUsuario" tabTitle="Inicio" tabIcon="bonfire"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Evento" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="nombreUsuario" tabTitle="Inicio" tabIcon="bonfire"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilPage = (function () {
    function PerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-perfil',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src="assets/img/cr.jpg"/>\n    <ion-card-content>\n      <ion-card-title text-center>\n          <h1>Cristiano Ronaldo</h1>\n      </ion-card-title>\n      <h1 text-center>\n        cronaldo7\n      </h1>\n\n      <h2 text-center>\n        Calificación\n      </h2>\n      \n      <img src="assets/img/5estrellas.png">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/
=======
        selector: 'page-perfil',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src="assets/img/cr.jpg"/>\n    <ion-card-content>\n      <ion-card-title text-center>\n          <h1>Cristiano Ronaldo</h1>\n      </ion-card-title>\n      <h1 text-center>\n        cronaldo7\n      </h1>\n\n      <h2 text-center>\n        Calificación\n      </h2>\n      \n      <img src="assets/img/5estrellas.png">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MomentoPage = (function () {
    function MomentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Variables que enviamos
        this.fechaEvento = '';
        this.horarioEvento = '';
        this.deporteEvento = '';
        this.lugarEvento = '';
        this.nombreEvento = '';
        this.numeroParticipantesEvento = '';
        this.exigenciaEvento = '';
        this.imagen = 'assets/img/cancha.png';
        this.fecha = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    MomentoPage.prototype.crear = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__evento_evento__["a" /* EventoPage */], { fechaEvento: this.fechaEvento,
            horarioEvento: this.horarioEvento,
            deporteEvento: this.deporteEvento,
            lugarEvento: this.lugarEvento,
            nombreEvento: this.nombreEvento,
            numeroParticipantesEvento: this.numeroParticipantesEvento,
            exigenciaEvento: this.exigenciaEvento,
            imagen: this.imagen
        });
    };
    MomentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventoPage');
    };
    return MomentoPage;
}());
MomentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-momento',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/momento/momento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Crear evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>\n    ¡Vamos a jugar!\n  </h1>\n\n  <!-->Slides para la creación de eventos<-->\n  <ion-slides pager>\n    \n      <!-->Slide 1: Instrucciones o motivación<-->\n      <ion-slide>\n        <h2>Bienvenido a la creación de eventos</h2>\n\n        Aquí\n        van\n        las instrucciones\n        \n      </ion-slide>\n    \n      <!-->Slide 2: Deporte que se va a jugar -> (deporteEvento)<-->\n      <ion-slide>\n        <h2>¿Qué vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Qué vas a jugar?</ion-label>\n            <ion-select [(ngModel)]="deporteEvento">\n              <ion-option value="Fútbol">Fútbol</ion-option>\n              <ion-option value="Basketball">Basketball</ion-option>\n              <ion-option value="Tennis">Tennis</ion-option>\n              <ion-option value="Karate">Karate</ion-option>\n              <ion-option value="Ajedréz">Ajedrez</ion-option>\n              <ion-option value="Natación">Natación</ion-option>\n              <ion-option value="Tenis de mesa">Tenis de mesa</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 3: Nivel de exigencia -> (exigenciaEvento)<-->\n      <ion-slide>\n        <h2>¿Qué nivel de exigencia quieres enfrentar?</h2>\n\n        <ion-item>\n          <ion-label>Nivel de exigencia?</ion-label>\n            <ion-select [(ngModel)]="exigenciaEvento">\n              <ion-option value="Principiante">Principiante</ion-option>\n              <ion-option value="Profesional">Profesional</ion-option>\n              <ion-option value="Leyenda">Leyenda</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 4: Número de participantes -> (numeroParticipantesEvento)<-->\n      <ion-slide>\n        <h2>¿Cuántos van a jugar?</h2>\n\n        <!-->Va de acuerdo al deporte que se va a jugar<-->\n        <ion-item>\n          <ion-label>¿Cuántos?</ion-label>\n            <ion-select [(ngModel)]="numeroParticipantesEvento">\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>\n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>\n              <ion-option value="5">5</ion-option>\n              <ion-option value="6">6</ion-option>\n              <ion-option value="7">7</ion-option>\n              <ion-option value="8">8</ion-option>\n              <ion-option value="9">9</ion-option>\n              <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 5: Fecha de evento -> (fechaEvento, horarioEvento)<-->\n      <ion-slide>\n        <h2>¿Cuándo vamos a jugar?</h2>\n\n        <!-->Fecha del evento<-->\n        <ion-item>\n          <ion-label>¿Cuándo?</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>\n        </ion-item>\n\n        <!-->Horario del evento<-->\n        <ion-item>\n          <ion-label>¿Hora?</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horarioEvento"></ion-datetime>\n        </ion-item>\n      </ion-slide>\n    \n      <!-->Slide 6: Lugar de evento -> (lugarEvento)<-->\n      <ion-slide>\n        <h2>¿Dónde vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Dónde?</ion-label>\n            <ion-select [(ngModel)]="lugarEvento">\n              <ion-option value="Placa # 1">Placa # 1</ion-option>\n              <ion-option value="Placa # 2">Placa # 2</ion-option>\n              <ion-option value="Placa # 3">Placa # 3</ion-option>\n              <ion-option value="Coliseo">Coliseo</ion-option>\n              <ion-option value="Mesa de tennis # 1">Mesa de tennis # 1</ion-option>\n              <ion-option value="Mesa de tennis # 2">Mesa de tennis # 2</ion-option>\n              <ion-option value="Mesa de tennis cemento">Mesa de tennis cemento</ion-option>\n            </ion-select>\n         </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 7: Nombre de evento -> (nombreEvento)<-->\n      <ion-slide>\n        <h2>Nombre del evento</h2>\n\n        <ion-item>\n          <ion-input placeholder="Nombre" [(ngModel)]="nombreEvento"></ion-input>\n        </ion-item>\n\n        <button ion-button block (click)="crear()">Crear evento</button>\n\n      </ion-slide>\n\n    </ion-slides>\n \n    \n  \n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/momento/momento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MomentoPage);

//# sourceMappingURL=momento.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_evento_evento__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_momento_momento__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ingreso_ingreso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_formulario_formulario__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deporte_deporte__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_escenario_escenario__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dia_dia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_participantes_participantes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_evento_settings_evento_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_evento_service_evento_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_momento_momento__["a" /* MomentoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_ingreso_ingreso__["a" /* IngresoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_formulario_formulario__["a" /* FormularioPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_deporte_deporte__["a" /* DeportePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_escenario_escenario__["a" /* EscenarioPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dia_dia__["a" /* DiaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario__["a" /* HorarioPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_participantes_participantes__["a" /* ParticipantesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__["a" /* NombrePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/momento/momento.module#MomentoPageModule', name: 'MomentoPage', segment: 'momento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nombre/nombre.module#NombrePageModule', name: 'NombrePage', segment: 'nombre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/participantes/participantes.module#ParticipantesPageModule', name: 'ParticipantesPage', segment: 'participantes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/horario/horario.module#HorarioPageModule', name: 'HorarioPage', segment: 'horario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dia/dia.module#DiaPageModule', name: 'DiaPage', segment: 'dia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/escenario/escenario.module#EscenarioPageModule', name: 'EscenarioPage', segment: 'escenario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/deporte/deporte.module#DeportePageModule', name: 'DeportePage', segment: 'deporte', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ingreso/ingreso.module#IngresoPageModule', name: 'IngresoPage', segment: 'ingreso', priority: 'low', defaultHistory: [] }
                ]
            }), __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_momento_momento__["a" /* MomentoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_ingreso_ingreso__["a" /* IngresoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_formulario_formulario__["a" /* FormularioPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_deporte_deporte__["a" /* DeportePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_escenario_escenario__["a" /* EscenarioPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dia_dia__["a" /* DiaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario__["a" /* HorarioPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_participantes_participantes__["a" /* ParticipantesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__["a" /* NombrePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_evento_settings_evento_settings__["a" /* EventoSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_evento_service_evento_service__["a" /* EventoServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ingreso_ingreso__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_ingreso_ingreso__["a" /* IngresoPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formulario_formulario__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IngresoPage = (function () {
    function IngresoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Variables que enviamos
        this.nombreUsuario = '';
    }
    IngresoPage.prototype.iniciar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { nombreUsuario: this.nombreUsuario });
    };
    IngresoPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formulario_formulario__["a" /* FormularioPage */]);
    };
    IngresoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngresoPage');
    };
    return IngresoPage;
}());
IngresoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-ingreso',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ingreso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" [(ngModel)]="nombreUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="primary" (click)="iniciar()">Log in</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="secondary" (click)="registrar()">Crear cuenta nueva en OlyMatch</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="iniciar()">\n        De visita\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/,
=======
        selector: 'page-ingreso',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ingreso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" [(ngModel)]="nombreUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="primary" (click)="iniciar()">Log in</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="secondary" (click)="registrar()">Crear cuenta nueva en OlyMatch</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="iniciar()">\n        De visita\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/,
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IngresoPage);

//# sourceMappingURL=ingreso.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deporte_deporte__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventoPage = (function () {
    function EventoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Variables que enviamos y recibimos
        this.fechaEvento = '';
        this.horarioEvento = '';
        this.deporteEvento = '';
        this.lugarEvento = '';
        this.nombreEvento = '';
        this.numeroParticipantesEvento = '';
        this.exigenciaEvento = '';
        this.imagen = 'assets/img/cancha.png';
        this.nombreEvento = navParams.data;
        this.fechaEvento = navParams.get('fechaEvento');
        this.horarioEvento = navParams.get('horarioEvento');
        this.deporteEvento = navParams.get('deporteEvento');
        this.lugarEvento = navParams.get('lugarEvento');
        this.nombreEvento = navParams.get('nombreEvento');
        this.numeroParticipantesEvento = navParams.get('numeroParticipantesEvento');
        this.exigenciaEvento = navParams.get('exigenciaEvento');
        this.imagen = navParams.get('imagen');
    }
    EventoPage.prototype.cargarPaginaEvento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__deporte_deporte__["a" /* DeportePage */]);
    };
    return EventoPage;
}());
EventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evento',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n        \n        <img src={{imagen}}/>\n        \n        <ion-card-content>  \n          <ion-card-title text-center>\n            <h1>\n                {{ nombreEvento }}\n            </h1>\n        </ion-card-title>\n\n        <h2>\n            <ion-icon name="football"></ion-icon> {{ deporteEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="game-controller-a"></ion-icon> {{ exigenciaEvento }}\n        </h2>\n        \n        <h2>\n            <ion-icon name="calendar"></ion-icon> {{ fechaEvento }}\n        </h2>\n          \n        <h2>\n            <ion-icon name="time"></ion-icon> {{ horarioEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="locate"></ion-icon> {{ lugarEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="clipboard"></ion-icon> {{ numeroParticipantesEvento }}\n        </h2>\n\n        </ion-card-content>\n      </ion-card>\n\n      <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="cargarPaginaEvento()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EventoPage);

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, eventService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
        //Villa lo necesita
        this.nombreUsuario = '';
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.nombre = '';
        this.nombreUsuario = navParams.data;
<<<<<<< HEAD
        this.loadEventos();
=======
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.participantes = navParams.get('participantes');
        this.nombre = navParams.get('nombre');
<<<<<<< HEAD
=======
        this.loadEventos();
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }
    InicioPage.prototype.loadEventos = function () {
        return this.eventos = this.eventService.getAllEvents();
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-inicio',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      ¡Hora de jugar!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of eventos |  async">\n\n      <ion-card>\n        <img src="http://www.vanguardia.com/sites/default/files/imagecache/Noticia_600x400/foto_grandes_400x300_noticia/2015/04/19/lista_la_cancha_de_la_juventud.jpg"\n        />\n        <ion-card-content>\n          <ion-card-title text-center>\n            <h1>\n              {{ event.nombre }}\n            </h1>\n          </ion-card-title>\n          <h2>\n            <ion-icon name="football"></ion-icon> {{ event.deporte.nombre }}\n          </h2>\n          <h2>\n            <ion-icon name="calendar"></ion-icon> {{ event.fecha }}\n          </h2>\n          <h2>\n            <ion-icon name="time"></ion-icon> {{ event.hora }}\n          </h2>\n          <h2>\n            <ion-icon name="locate"></ion-icon> {{ event.lugar }}\n          </h2>\n          <h2>\n            <ion-icon name="clipboard"></ion-icon> {{ event.numMaxParticipantes }}\n          </h2>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/
=======
        selector: 'page-inicio',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      ¡Hora de jugar!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of eventos |  async">\n\n      <ion-card>\n        <img src="http://www.vanguardia.com/sites/default/files/imagecache/Noticia_600x400/foto_grandes_400x300_noticia/2015/04/19/lista_la_cancha_de_la_juventud.jpg"\n        />\n        <ion-card-content>\n          <ion-card-title text-center>\n            <h1>\n              {{ event.nombre }}\n            </h1>\n          </ion-card-title>\n          <h2>\n            <ion-icon name="football"></ion-icon> {{ event.deporte.nombre }}\n          </h2>\n          <h2>\n            <ion-icon name="calendar"></ion-icon> {{ event.fecha }}\n          </h2>\n          <h2>\n            <ion-icon name="time"></ion-icon> {{ event.hora }}\n          </h2>\n          <h2>\n            <ion-icon name="locate"></ion-icon> {{ event.lugar }}\n          </h2>\n          <h2>\n            <ion-icon name="clipboard"></ion-icon> {{ event.numMaxParticipantes }}\n          </h2>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/
>>>>>>> c2bfa08da617e9ad63ccf761a6fc1506864c53c2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__["a" /* EventoServiceProvider */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map