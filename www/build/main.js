webpackJsonp([13],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaPage = (function () {
    function AcercaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaPage');
    };
    return AcercaPage;
}());
AcercaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-acerca',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/acerca/acerca.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Acerca de...</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content padding class="contenido"> -->\n  <ion-content class="list-avatar-page">\n    <ion-list>\n\n      <ion-list-header>Desarrolladores</ion-list-header>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/crocker.png">\n        </ion-avatar>\n        <h2>Villa</h2>\n        <p>front-end</p>\n        <ion-note item-end>¡Melo!</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/cj.png">\n        </ion-avatar>\n        <h2>Hass</h2>\n        <p>black-end</p>\n        <ion-note item-end>¡Hey no jodás!</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/linux.png">\n        </ion-avatar>\n        <h2>Josh</h2>\n        <p>back-end</p>\n        <ion-note item-end>Vavava!</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/castor.png">\n        </ion-avatar>\n        <h2>Edwin</h2>\n        <p>back-end</p>\n        <ion-note item-end>¡Máquinola!</ion-note>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n<!-- </ion-content> -->'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/acerca/acerca.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AcercaPage);

//# sourceMappingURL=acerca.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_service_usuario_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalificacionPage = (function () {
    function CalificacionPage(navCtrl, navParams, usuarioServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioServiceProvider = usuarioServiceProvider;
        this.integrante = '';
        this.calificacion = '';
        this.dia = '';
        this.integrantes = '';
        this.id = '';
        this.integrante = navParams.get('integrante');
        this.dia = navParams.get('dia');
        this.integrantes = navParams.get('integrantes');
        this.id = navParams.get('id');
    }
    CalificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalificacionPage');
    };
    CalificacionPage.prototype.calificar = function (integrante, nota, fecha) {
        var _this = this;
        console.log('Estamos en calificar');
        console.log(integrante, nota, fecha);
        this.usuarioServiceProvider.solicitarCalificar(this.id, integrante).subscribe(function (x) {
            console.log(x);
            if (x == 'true') {
                console.log('ENtré a cal');
                _this.usuarioServiceProvider.calificarUsuario(integrante, nota).subscribe();
            }
            else {
                console.log('Aún no puedes calificar');
            }
        });
    };
    return CalificacionPage;
}());
CalificacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calificacion',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/calificacion/calificacion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Calificación</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  {{ integrante }}\n\n  {{ dia }}\n\n  <ion-list radio-group [(ngModel)]="calificacion">\n    <ion-list-header>\n      Desempeño del participante\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Excelente</ion-label>\n      <ion-radio value="5" ></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sobresaliente</ion-label>\n      <ion-radio value="4" ></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Aceptable</ion-label>\n      <ion-radio value="3" ></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Insuficiente</ion-label>\n      <ion-radio value="2" ></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Deficiente</ion-label>\n      <ion-radio value="1" ></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  {{ calificacion }}\n\n  <button ion-button full large color="secondaryb" (click)="calificar(integrante, calificacion, dia)">Calificar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/calificacion/calificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]])
], CalificacionPage);

//# sourceMappingURL=calificacion.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acerca_acerca__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfiguracionPage = (function () {
    function ConfiguracionPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    ConfiguracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionPage');
    };
    ConfiguracionPage.prototype.salir = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    ConfiguracionPage.prototype.pasarAcerca = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__acerca_acerca__["a" /* AcercaPage */]);
    };
    return ConfiguracionPage;
}());
ConfiguracionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-configuracion',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/configuracion/configuracion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Configuración</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n  <ion-content>\n    <ion-list no-border>\n\n      <ion-list-header>\n        Acerca de...\n      </ion-list-header>\n\n      <ion-item>\n        <ion-icon name=\'information-circle\' item-start class="acerca"></ion-icon>\n        <ion-note item-end>\n          <button ion-button full small color="secondaryg" (click)="pasarAcerca()">\n            ¿Quiénes somos?\n          </button>\n        </ion-note>\n      </ion-item>\n\n      <ion-list-header>\n        Salir\n      </ion-list-header>\n\n      <ion-item>\n        <ion-icon name=\'walk\' item-start class="salir"></ion-icon>\n        <ion-note item-end>\n          <button ion-button full small color="danger" (click)="salir()">\n            ¡Vuelve pronto!\n          </button>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/configuracion/configuracion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ConfiguracionPage);

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escenario_escenario__ = __webpack_require__(140);
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
        JSON.stringify(this.myForm.value);
    };
    DeportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeportePage');
    };
    return DeportePage;
}());
DeportePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-deporte',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger deporte</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item class="formulario">\n      <ion-label class="label">¿Qué vas a jugar?</ion-label>  \n      <ion-select formControlName="deporte" [(ngModel)]="deporte">\n        <ion-option value="futbol">Fútbol</ion-option>\n        <ion-option value="baloncesto">Baloncesto</ion-option>\n        <ion-option value="tennis">Tennis</ion-option>\n        <ion-option value="karate">Karate</ion-option>\n        <ion-option value="ajedrez">Ajedrez</ion-option>\n        <ion-option value="natacion">Natación</ion-option>\n        <ion-option value="tenisDeMesa">Tenis de mesa</ion-option>\n        <ion-option value="ultimate">Ultimate</ion-option>\n        <ion-option value="micro">Micro Fútbol</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'deporte\').errors && myForm.get(\'deporte\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'deporte\').hasError(\'required\')">El deporte es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarEscenario()" class="boton">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/deporte/deporte.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], DeportePage);

//# sourceMappingURL=deporte.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscenarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dia_dia__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__ = __webpack_require__(53);
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
    function EscenarioPage(navCtrl, navParams, fb, escenarioServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.escenarioServiceProvider = escenarioServiceProvider;
        this.deporte = '';
        this.escenario = '';
        this.myForm = this.fb.group({
            escenario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos de ngModel
        this.deporte = navParams.get('deporte');
        this.mostrarEscenarios();
    }
    EscenarioPage.prototype.mostrarEscenarios = function () {
        this.escenarios = this.escenarioServiceProvider.traerEscenariosPorDeporte(this.deporte);
    };
    EscenarioPage.prototype.pasarDia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dia_dia__["a" /* DiaPage */], { deporte: this.deporte,
            escenario: this.escenario });
    };
    EscenarioPage.prototype.saveData = function () {
        JSON.stringify(this.myForm.value);
    };
    EscenarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscenarioPage');
    };
    return EscenarioPage;
}());
EscenarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-escenario',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger escenario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item class="formulario">\n      <ion-label>¿Dónde?</ion-label>\n      <ion-select formControlName="escenario" [(ngModel)]="escenario">\n        <ion-option *ngFor="let escenario of escenarios |  async" value= "{{ escenario }}">{{ escenario }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'escenario\').errors && myForm.get(\'escenario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'escenario\').hasError(\'required\')">El escenario es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarDia()">Continuar</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/escenario/escenario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */]])
], EscenarioPage);

//# sourceMappingURL=escenario.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__horario_horario__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__ = __webpack_require__(53);
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
 * En esta clase se selecciona el día del evento
 */





//import {Observable} from '@reactivex/rxjs/es6/Observable.js';   
var DiaPage = (function () {
    function DiaPage(navCtrl, navParams, fb, escenarioServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.escenarioServiceProvider = escenarioServiceProvider;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.myForm = this.fb.group({
            dia: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos de ngModel
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.mostrarFechas();
        this.imagen = this.escenarioServiceProvider.traerImagenEscenario(navParams.get('escenario'));
        this.imagen.subscribe(function (x) { return _this.imagenRuta = x; });
        // this.imagen.subscribe(
        //   function (x) { 
        //     //console.log(x[0])
        //     //console.log(typeof(x[0]))
        //     this.imagenRuta = x[0];
        //     //console.log(this.imagenRuta)
        //  },
        //   function (err) { console.log('Error: %s', err); },
        //   function () { console.log('Completed'); });
        console.log(this.imagenRuta);
        console.log(this.imagen);
    }
    DiaPage.prototype.mostrarFechas = function () {
        this.fechas = this.escenarioServiceProvider.traerFechasPorEscenario(this.escenario);
    };
    DiaPage.prototype.pasarHorario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__horario_horario__["a" /* HorarioPage */], { deporte: this.deporte,
            escenario: this.escenario,
            imagen: this.imagenRuta,
            dia: this.dia });
    };
    DiaPage.prototype.saveData = function () {
        JSON.stringify(this.myForm.value);
    };
    DiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiaPage');
    };
    return DiaPage;
}());
DiaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dia',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger día</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="contenido">\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n        \n    <ion-item class="formulario">\n      <ion-label>¿Cuándo?</ion-label>  \n      <ion-select formControlName="dia" [(ngModel)]="dia">\n        <ion-option *ngFor="let fecha of fechas |  async"  value="{{ fecha }}">{{ fecha }}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'dia\').errors && myForm.get(\'dia\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'dia\').hasError(\'required\')">El día es requerido</p>\n    </ion-item>\n \n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarHorario()">Continuar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/dia/dia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */]])
], DiaPage);

//# sourceMappingURL=dia.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__participantes_participantes__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__ = __webpack_require__(53);
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
    function HorarioPage(navCtrl, navParams, fb, escenarioServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.escenarioServiceProvider = escenarioServiceProvider;
        this.imagen = '';
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
        this.imagen = navParams.get('imagen');
        //this.imagen = this.imagen[0];
        console.log("desde lejos jeje");
        console.log(this.imagen);
        this.mostrarHoras();
    }
    HorarioPage.prototype.mostrarHoras = function () {
        this.horas = this.escenarioServiceProvider.traerHorasPorFecha(this.dia, this.escenario);
    };
    HorarioPage.prototype.pasarParticipantes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__participantes_participantes__["a" /* ParticipantesPage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia,
            imagen: this.imagen,
            horario: this.horario });
    };
    HorarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorarioPage');
    };
    HorarioPage.prototype.saveData = function () {
        JSON.stringify(this.myForm.value);
    };
    return HorarioPage;
}());
HorarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-horario',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Escoger horario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n\n    <ion-item class="formulario">\n      <ion-label>¿Hora?</ion-label>\n      <ion-select formControlName="horario" [(ngModel)]="horario">\n        <ion-option *ngFor="let hora of horas |  async"  value="{{ hora.disponibilidad.hora }}">{{ hora.disponibilidad.hora }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'horario\').errors && myForm.get(\'horario\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'horario\').hasError(\'required\')">El horario es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarParticipantes()">Continuar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/horario/horario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */]])
], HorarioPage);

//# sourceMappingURL=horario.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nombre_nombre__ = __webpack_require__(144);
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
        this.imagen = '';
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.myForm = this.fb.group({
            participantes: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d{1,2}(\.\d{1,2})?$/)]]
        });
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.imagen = navParams.get('imagen');
    }
    ParticipantesPage.prototype.pasarNombre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nombre_nombre__["a" /* NombrePage */], { deporte: this.deporte,
            escenario: this.escenario,
            dia: this.dia,
            horario: this.horario,
            participantes: this.participantes,
            imagen: this.imagen
        });
    };
    ParticipantesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParticipantesPage');
    };
    ParticipantesPage.prototype.saveData = function () {
        JSON.stringify(this.myForm.value);
    };
    return ParticipantesPage;
}());
ParticipantesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-participantes',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Escoger número de participantes</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="contenido">\n    <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n   \n      <ion-item class="formulario">\n        <ion-input formControlName="participantes" type="text" placeholder="Participantes" [(ngModel)]="participantes"></ion-input>\n      </ion-item>\n  \n      <!-->Manejo de error<-->\n      <ion-item *ngIf="myForm.get(\'participantes\').errors && myForm.get(\'participantes\').dirty">\n        <p color="danger" ion-text *ngIf="myForm.get(\'participantes\').hasError(\'required\')">El número de participantes es requerido</p>\n        <p color="danger" ion-text *ngIf="myForm.get(\'participantes\').hasError(\'pattern\')">No es un número</p>\n      </ion-item>\n  \n      <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="pasarNombre()">Continuar</button>\n  \n    </form>\n  </ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/participantes/participantes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ParticipantesPage);

//# sourceMappingURL=participantes.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NombrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_evento__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_evento_service_evento_service__ = __webpack_require__(71);
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
    function NombrePage(navCtrl, navParams, fb, escenarioServiceProvider, eventoServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.escenarioServiceProvider = escenarioServiceProvider;
        this.eventoServiceProvider = eventoServiceProvider;
        this.toastCtrl = toastCtrl;
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.nombre = '';
        this.imagen = '';
        this.myForm = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.imagen = navParams.get('imagen');
        this.participantes = navParams.get('participantes');
    }
    NombrePage.prototype.crearEvento = function () {
        var _this = this;
        var administrador = 'villa';
        var participante = ['josh', 'hassler', 'rengifo'];
        console.log("desde antes (NOMBRE)");
        console.log(this.imagen[0]);
        this.imagen = this.imagen[0];
        this.eventoServiceProvider.crearEvento(this.nombre, administrador, this.escenario, this.dia, participante, this.participantes, this.horario, this.deporte, this.imagen)
            .subscribe(function (data) {
            _this.loadEventos();
            _this.showToast('Evento creado');
        });
    };
    NombrePage.prototype.confirmarReserva = function () {
        console.log("/////////////////////7 ");
        this.escenarioServiceProvider.reservarEscenario(this.escenario, this.dia, this.horario).subscribe();
    };
    NombrePage.prototype.loadEventos = function () {
        return this.eventos = this.eventoServiceProvider.getAllEvents();
    };
    NombrePage.prototype.volverEvento = function () {
        this.confirmarReserva();
        this.crearEvento();
        this.loadEventos();
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
        JSON.stringify(this.myForm.value);
    };
    NombrePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    return NombrePage;
}());
NombrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nombre',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nombra al evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="contenido">\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n    <ion-item class="formulario">\n      <ion-input formControlName="nombre" type="text" placeholder="Nombre del evento" [(ngModel)]="nombre"></ion-input>\n    </ion-item>\n\n    <!-->Manejo de error<-->\n    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Nombre es requerido</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="volverEvento()">Finalizar</button>\n        \n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/nombre/nombre.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_evento_service_evento_service__["a" /* EventoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_evento_service_evento_service__["a" /* EventoServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _f || Object])
], NombrePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=nombre.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ingreso_ingreso__ = __webpack_require__(83);
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
    function FormularioPage(navCtrl, fb, navParams, loginServiceProvider) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.navParams = navParams;
        this.loginServiceProvider = loginServiceProvider;
        this.nombre = '';
        this.primerApellido = '';
        this.user = '';
        this.codigo = '';
        this.contrasena = '';
        this.myForm = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            primerApellido: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            user: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            codigo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            confirmarContrasena: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    FormularioPage.prototype.registrarUsuario = function () {
        this.loginServiceProvider.crearUsuario(this.user, this.contrasena, this.codigo, this.nombre, this.primerApellido).subscribe();
    };
    // Se obtiene la información luego de que todo esté validado
    FormularioPage.prototype.saveData = function () {
        alert(JSON.stringify(this.myForm.value));
    };
    FormularioPage.prototype.volver = function () {
        this.registrarUsuario();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ingreso_ingreso__["a" /* IngresoPage */], {
            nombre: this.nombre,
            primerApellido: this.primerApellido,
            user: this.user,
            codigo: this.codigo,
            contrasena: this.contrasena
        });
    };
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    return FormularioPage;
}());
FormularioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-formulario',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding>\n    <!-->Solicita toda la información<-->\n    <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>\n      \n\n        <!-->Slide de bienvenida<-->\n       \n          <h2>Bienvenido a OlyMatch</h2>\n          <img src="../assets/img/logo_nue.png">\n                 \n        <!-->Slide de nombre, primerApellido y segundoApellido<-->\n       \n          <h2>Información personal</h2>\n          <ion-list>\n                  \n            <ion-item>\n              <ion-input formControlName="nombre" type="text" placeholder="Nombre" [(ngModel)]="nombre" ></ion-input>\n            </ion-item>\n                \n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Nombre es requerido</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="primerApellido" type="text" placeholder="Primer apellido" [(ngModel)]="primerApellido"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'primerApellido\').errors && myForm.get(\'primerApellido\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'primerApellido\').hasError(\'required\')">Primer apellido es requerido</p>\n            </ion-item>\n\n          </ion-list>\n       \n        \n        <!-->Slide de email, contrasena y confirmarContrasena<-->\n       \n          <h2>Validar información</h2>\n          <ion-list>\n            <ion-item>\n              <ion-input formControlName="user" type="text" placeholder="Nombre de usuario" [(ngModel)]="user"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'user\').errors && myForm.get(\'user\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'required\')">Nombre de usuario es requerido</p>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-input formControlName="codigo" type="text" placeholder="Codigo" [(ngModel)]="codigo"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'codigo\').errors && myForm.get(\'codigo\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'codigo\').hasError(\'required\')">Codigo es requerida</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="contrasena" type="password" placeholder="Contraseña" [(ngModel)]="contrasena"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'contrasena\').errors && myForm.get(\'contrasena\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'contrasena\').hasError(\'required\')">Contraseña es requerida</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-input formControlName="confirmarContrasena" type="password" placeholder="Confirmar contraseña"></ion-input>\n            </ion-item>\n\n            <!-->Manejo de error<-->\n            <ion-item *ngIf="myForm.get(\'confirmarContrasena\').errors && myForm.get(\'confirmarContrasena\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'confirmarContrasena\').hasError(\'required\')">Contraseña es requerida</p>\n            </ion-item>\n\n            <ion-item>\n              <button ion-button block type="submit" [disabled]="myForm.invalid" (click)="volver()">¡Únete al juego!</button>\n            </ion-item>\n          </ion-list>\n        \n    </form>\n  </ion-content>\n\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
], FormularioPage);

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calificacion_calificacion__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformacionPage = (function () {
    function InformacionPage(navCtrl, navParams, eventoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventoServiceProvider = eventoServiceProvider;
        this.id = '';
        this.nombreUsuario = '';
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.nombre = '';
        this.integrantes = '';
        this.mensajeValido = '';
        this.mensajeError = '';
        this.nombreUsuario = navParams.get('nombreUsuario');
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.participantes = navParams.get('participantes');
        this.nombre = navParams.get('nombre');
        this.integrantes = navParams.get('integrantes');
        this.id = navParams.get('id');
    }
    InformacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformacionPage');
    };
    InformacionPage.prototype.unirParticipante = function (lugar, fecha, hora) {
        var _this = this;
        this.eventoServiceProvider.putParticipante(this.nombreUsuario, this.escenario, this.dia, this.horario).subscribe(function (x) {
            console.log("x: ", x);
            if (x == 'true') {
                _this.mensajeValido = 'Te has unido al juego';
            }
            else {
                _this.mensajeError = 'Ya estás en el evento o no hay más cupos disponibles';
            }
        });
    };
    InformacionPage.prototype.pasarCalificacion = function (integrante) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calificacion_calificacion__["a" /* CalificacionPage */], {
            id: this.id,
            integrante: integrante,
            dia: this.dia,
            integrantes: this.integrantes
        });
    };
    return InformacionPage;
}());
InformacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-informacion',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/informacion/informacion.html"*/'<ion-header class="header">\n  <ion-navbar class="navbar">\n    <ion-title class="titulo">\n      Información\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n\n  <ion-list class="lista">\n    <!-- <ion-item *ngFor="let event of eventos |  async" class="contenido"> -->\n      <ion-card class="card">\n        <!-- <img src=\'{{ event.imagen }}\' /> -->\n        <ion-card-content>\n          <ion-card-title text-center>\n            <h1>\n              {{ nombre }}\n            </h1>\n          </ion-card-title>\n          <h2>\n            <ion-icon name="football" class="balon"></ion-icon> {{ deporte }}\n          </h2>\n          <h2>\n            <ion-icon name="calendar" class="calendario"></ion-icon> {{ dia }}\n          </h2>\n          <h2>\n            <ion-icon name="time" class="reloj"></ion-icon> {{ horario }}\n          </h2>\n          <h2>\n            <ion-icon name="locate" class="ubicacion"></ion-icon> {{ escenario }} \n          </h2>\n          <h2>\n            <ion-icon name="clipboard" class="planilla"></ion-icon> {{ participantes }}\n          </h2>\n\n          <ion-list>\n            <ion-item *ngFor="let integrante of integrantes">\n              {{ integrante }}\n              <button ion-button icon-only color="secondaryb" (click)="pasarCalificacion(integrante)">\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-item>\n\n          </ion-list>\n          <h2>\n              <ion-icon name="clipboard" class="planilla"></ion-icon> {{ integrantes }}\n            </h2>\n\n          <!-- Hasta acá funcionaba el botón de unirse -->\n          <button ion-button full small color="secondaryb" (click)="unirParticipante(escenario, dia, horario)">Unirse</button>\n\n          <h6 class="valido">\n            {{ mensajeValido }}\n          </h6>\n\n          <h6 class="invalido">\n            {{ mensajeError }}\n          </h6>\n         \n        </ion-card-content>\n      </ion-card>\n    <!-- </ion-item> -->\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/informacion/informacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__["a" /* EventoServiceProvider */]])
], InformacionPage);

//# sourceMappingURL=informacion.js.map

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca/acerca.module": [
		727,
		12
	],
	"../pages/calificacion/calificacion.module": [
		728,
		11
	],
	"../pages/configuracion/configuracion.module": [
		729,
		10
	],
	"../pages/deporte/deporte.module": [
		730,
		9
	],
	"../pages/dia/dia.module": [
		731,
		8
	],
	"../pages/escenario/escenario.module": [
		732,
		7
	],
	"../pages/formulario/formulario.module": [
		733,
		6
	],
	"../pages/horario/horario.module": [
		734,
		5
	],
	"../pages/informacion/informacion.module": [
		735,
		4
	],
	"../pages/ingreso/ingreso.module": [
		736,
		3
	],
	"../pages/momento/momento.module": [
		737,
		2
	],
	"../pages/nombre/nombre.module": [
		738,
		1
	],
	"../pages/participantes/participantes.module": [
		739,
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
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_settings_usuario_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioServiceProvider = (function () {
    function UsuarioServiceProvider(http, usuarioSettingsProvider) {
        this.http = http;
        this.usuarioSettingsProvider = usuarioSettingsProvider;
        this.apiUrl = this.usuarioSettingsProvider.getApiUrl();
        console.log('Hello UsuarioServiceProvider Provider');
    }
    UsuarioServiceProvider.prototype.solicitarCalificar = function (eventoId, nombreUsuario) {
        return this.http.get(this.apiUrl + 'calificar/' + eventoId + '/' + nombreUsuario)
            .map(function (response) { return response.text(); });
    };
    UsuarioServiceProvider.prototype.calificarUsuario = function (nombreUsuario, nota) {
        return this.http.put(this.apiUrl + 'calificar/' + nombreUsuario + '/' + nota, {})
            .map(function (response) { return response.text(); });
    };
    return UsuarioServiceProvider;
}());
UsuarioServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__usuario_settings_usuario_settings__["a" /* UsuarioSettingsProvider */]])
], UsuarioServiceProvider);

//# sourceMappingURL=usuario-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    apiUrl: 'http://192.168.1.63:8080/'
};
var UsuarioSettingsProvider = (function () {
    function UsuarioSettingsProvider() {
    }
    UsuarioSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    return UsuarioSettingsProvider;
}());
UsuarioSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsuarioSettingsProvider);

//# sourceMappingURL=usuario-settings.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscenarioSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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
    apiUrl: 'http://192.168.1.63:8080/'
};
var EscenarioSettingsProvider = (function () {
    function EscenarioSettingsProvider() {
    }
    EscenarioSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    return EscenarioSettingsProvider;
}());
EscenarioSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EscenarioSettingsProvider);

//# sourceMappingURL=escenario-settings.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    apiUrl: 'http://192.168.1.63:8080/'
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    apiUrl: 'http://192.168.1.63:8080/'
};
var LoginSettingsProvider = (function () {
    function LoginSettingsProvider() {
    }
    LoginSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    return LoginSettingsProvider;
}());
LoginSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoginSettingsProvider);

//# sourceMappingURL=login-settings.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(365);
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
        console.log(this.nombreUsuario);
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="Evento" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="nombreUsuario" tabTitle="Inicio" tabIcon="bonfire"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="nombreUsuario" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracion_configuracion__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_service_image_service__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var uploads = {};
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, loginServiceProvider, imageServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginServiceProvider = loginServiceProvider;
        this.imageServiceProvider = imageServiceProvider;
        this.nombreUsuario = '';
        this.usuario = '';
        this.apellido = '';
        this.imagen = '';
        this.calificacion = '';
        this.nombreUsuario = navParams.data;
        this.loadInfoUsuario();
    }
    PerfilPage.prototype.takePic = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Camera */].getPicture({
            destinationType: __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imagenData) {
            console.log(imagenData);
            _this.base64Image = 'data:image/jpeg;base64,' + imagenData;
        }, function (err) {
            console.log(err);
        });
    };
    PerfilPage.prototype.openGallery = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Camera */].getPicture({
            destinationType: __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            targetHeight: 1000,
            targetWidth: 1000,
            sourceType: __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY
        }).then(function (imageData) {
            console.log(imageData, "first one");
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imageServiceProvider.putProfileImage(_this.usuario, _this.base64Image).subscribe();
            console.log(_this.base64Image, "second one");
        }, function (err) {
            console.log(err);
        });
    };
    // private openGallery(): void {
    //   console.log('Estamos en open gallery')
    //   let cameraOptions = {
    //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    //     destinationType: Camera.DestinationType.FILE_URI,
    //     quality: 100,
    //     targetWidth: 1000,
    //     targetHeight: 1000,
    //     encodingType: Camera.EncodingType.JPEG,
    //     correctOrientation: true
    //   }
    //   console.log('Estamos en GetPicture')
    //   Camera.getPicture(cameraOptions)
    //     .then(file_uri => this.imageSrc = file_uri,
    //     err => console.log(err));
    //   //this.updateProfileImage();
    // }
    // updateProfileImage() {
    //   console.log("esta es la imagen" , this.imageSrc)
    //   // set your env variable CLOUDINARY_URL or set the following configuration
    //   cloudinary.config({
    //     cloud_name: 'jsanch90',
    //     api_key: '791512534712525',
    //     api_secret: 'Pc-W-jb1MGxWcqB8ebHwdV-Rgrw'
    //   });
    //   console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");
    //   // File upload
    //   cloudinary.uploader.upload('pizza.jpg', { tags: 'basic_sample' }, function (err, image) {
    //     console.log();
    //     console.log("** File Upload");
    //     if (err) { console.warn(err); }
    //     console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
    //     console.log("* " + image.public_id);
    //     console.log("* " + image.url);
    //     //waitForAllUploads("pizza",err,image);
    //   });
    //   //this.imageServiceProvider.putProfileImage(this.nombreUsuario,this.imageSrc).subscribe();
    // }
    PerfilPage.prototype.loadInfoUsuario = function () {
        var _this = this;
        console.log('Estamos en loadInfoUsuario');
        console.log(this.nombreUsuario);
        this.informacion = this.loginServiceProvider.getInfoUsuario(this.nombreUsuario);
        this.informacion.subscribe(function (x) {
            _this.apellido = x[0].primerApellido;
            _this.usuario = x[0].usuario;
            _this.imagen = x[0].imagen_usuario;
            if (x[0].calificacion >= 0.0 && x[0].calificacion < 0.8) {
                _this.calificacion = 'assets/img/0_estrellas.png';
            }
            else if (x[0].calificacion >= 0.8 && x[0].calificacion < 1.8) {
                _this.calificacion = 'assets/img/1_estrellas.png';
            }
            else if (x[0].calificacion >= 1.8 && x[0].calificacion < 2.8) {
                _this.calificacion = 'assets/img/2_estrellas.png';
            }
            else if (x[0].calificacion >= 2.8 && x[0].calificacion < 3.7) {
                _this.calificacion = 'assets/img/3_estrellas.png';
            }
            else if (x[0].calificacion >= 3.7 && x[0].calificacion < 4.5) {
                _this.calificacion = 'assets/img/4_estrellas.png';
            }
            else if (x[0].calificacion >= 4.5 && x[0].calificacion <= 5.0) {
                _this.calificacion = 'assets/img/5_estrellas.png';
            }
        });
    };
    PerfilPage.prototype.pasarConfiguracion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configuracion_configuracion__["a" /* ConfiguracionPage */]);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/img/logo_eafit_blanco.png" class="logo_navbar">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons right large>\n\n      <button ion-button (click)="openGallery()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n\n      <button ion-button (click)="pasarConfiguracion()">\n        <ion-icon name="more">\n        </ion-icon>\n      </button>\n\n\n\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contenido">\n  <div class="gallery-button" text-center>\n    <img class="imagen_usuario" src="{{ imagen }}" />\n  </div>\n  <ion-list>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title text-center>\n          {{ nombreUsuario }} {{ apellido }}\n        </ion-card-title>\n        <p text-center>\n          {{ usuario }}\n        </p>\n        <img src="{{ calificacion }}"/>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_image_service_image_service__["a" /* ImageServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_image_service_image_service__["a" /* ImageServiceProvider */]) === "function" && _d || Object])
], PerfilPage);

var _a, _b, _c, _d;
//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_settings_image_settings__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageServiceProvider = (function () {
    function ImageServiceProvider(http, imageSettingsProvider) {
        this.http = http;
        this.imageSettingsProvider = imageSettingsProvider;
        this.apiUrl = this.imageSettingsProvider.getApiUrl();
        console.log('Hello ImageServiceProvider Provider');
    }
    ImageServiceProvider.prototype.putProfileImage = function (nombreUsuario, imgSrc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiUrl + 'imagen/' + nombreUsuario, { 'imagenURI': imgSrc }, { headers: headers }).map(function (Response) { return Response.json().result; });
    };
    return ImageServiceProvider;
}());
ImageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__image_settings_image_settings__["a" /* ImageSettingsProvider */]])
], ImageServiceProvider);

//# sourceMappingURL=image-service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    apiUrl: 'http://192.168.1.63:8080/'
};
var ImageSettingsProvider = (function () {
    function ImageSettingsProvider() {
    }
    ImageSettingsProvider.prototype.getApiUrl = function () {
        return CONFIG.apiUrl;
    };
    return ImageSettingsProvider;
}());
ImageSettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ImageSettingsProvider);

//# sourceMappingURL=image-settings.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__informacion_informacion__ = __webpack_require__(146);
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
    function InicioPage(navCtrl, navParams, eventService, alertCtlr, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
        this.alertCtlr = alertCtlr;
        this.toastCtrl = toastCtrl;
        this.id = '';
        this.nombreUsuario = '';
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = ''; //Número de participantes
        this.nombre = '';
        this.integrantes = ''; //Personas
        this.buscada = '';
        this.nombreUsuario = navParams.data;
        this.loadEventos();
        //Variables que recibimos
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.participantes = navParams.get('participantes');
        this.nombre = navParams.get('nombre');
        this.loadEventos();
    }
    InicioPage.prototype.loadEventos = function () {
        console.log("desde buscada ", this.buscada);
        if (this.buscada == '') {
            return this.eventos = this.eventService.getAllEvents();
        }
        else {
            this.eventos = this.eventService.getSomeEvents(this.buscada);
            console.log(this.eventos);
            return this.eventos;
        }
    };
    InicioPage.prototype.pasarInformacion = function (idEvento, nombreUsuarioEvento, deporteEvento, escenarioEvento, diaEvento, horarioEvento, participantesEvento, integrantesEvento, nombreEvento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__informacion_informacion__["a" /* InformacionPage */], {
            id: idEvento,
            nombreUsuario: this.nombreUsuario,
            deporte: deporteEvento,
            escenario: escenarioEvento,
            dia: diaEvento,
            horario: horarioEvento,
            participantes: participantesEvento,
            nombre: nombreEvento,
            integrantes: integrantesEvento
        });
    };
    /**
     * @method Unirse a evento desde el apartado inicio -> Desde acá funcionaba.
     */
    // unirParticipante(lugar, fecha, hora){
    //   console.log("unir", this.nombreUsuario,lugar,fecha,hora);
    //   return this.eventService.putParticipante(this.nombreUsuario, lugar, fecha, hora).subscribe();
    // }
    InicioPage.prototype.doRefresh = function (refresher) {
        this.loadEventos();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    InicioPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/'<ion-header class="header">\n  <ion-navbar class="navbar">\n    <img src="assets/img/logo_eafit_blanco.png" class="logo_navbar">\n    <ion-title class="titulo">\n      ¡Hora de jugar!\n    </ion-title>\n    <ion-buttons right large>\n      \n               \n              <ion-select placeholder="filtrar" [(ngModel)]="buscada">\n                <ion-option value="futbol">Fútbol</ion-option>\n                <ion-option value="baloncesto">Baloncesto</ion-option>\n                <ion-option value="tennis">Tennis</ion-option>\n                <ion-option value="karate">Karate</ion-option>\n                <ion-option value="ajedrez">Ajedrez</ion-option>\n                <ion-option value="natacion">Natación</ion-option>\n                <ion-option value="tenisDeMesa">Tenis de mesa</ion-option>\n                <ion-option value="ultimate">Ultimate</ion-option>\n                <ion-option value="micro">Micro Fútbol</ion-option>\n              </ion-select> \n    \n\n          </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-select formControlName="deporte" [(ngModel)]="deporte">\n  <ion-option value="futbol">Fútbol</ion-option>\n  <ion-option value="baloncesto">Baloncesto</ion-option>\n  <ion-option value="tennis">Tennis</ion-option>\n  <ion-option value="karate">Karate</ion-option>\n  <ion-option value="ajedrez">Ajedrez</ion-option>\n  <ion-option value="natacion">Natación</ion-option>\n  <ion-option value="tenisDeMesa">Tenis de mesa</ion-option>\n  <ion-option value="ultimate">Ultimate</ion-option>\n  <ion-option value="micro">Micro Fútbol</ion-option>\n</ion-select> -->\n\n<ion-content padding class="contenido">\n  <!-->Refrescar página para cargar eventos<-->\n    <ion-refresher (ionRefresh)="doRefresh($event)" class="contenido">\n      <ion-refresher-content class="contenido"></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list class="lista">\n      <ion-item *ngFor="let event of eventos |  async" class="contenido">\n        <ion-card class="card">\n          <img src=\'{{ event.imagen }}\'/>\n          <ion-card-content>\n            <ion-card-title text-center>\n              <h1>\n                {{ event.nombre }}\n              </h1>\n            </ion-card-title>\n            <h2>\n              <ion-icon name="football" class="balon"></ion-icon> {{ event.deporte.nombre }}\n            </h2>\n            <h2>\n              <ion-icon name="calendar" class="calendario"></ion-icon> {{ event.fecha }}\n            </h2>\n            <h2>\n              <ion-icon name="time" class="reloj"></ion-icon> {{ event.hora }}\n            </h2>\n            <h2>\n              <ion-icon name="locate" class="ubicacion"></ion-icon> {{ event.lugar }}\n            </h2>\n            <h2>\n              <ion-icon name="clipboard" class="planilla"></ion-icon> {{ event.numMaxParticipantes }}\n            </h2>\n            <h2>\n                <ion-icon name="clipboard" class="planilla"></ion-icon> {{ event.participantes }}\n              </h2>\n\n            <!-- Hasta acá funcionaba el botón de unirse -->\n            <!-- <button ion-button full small color="secondaryb" (click)="unirParticipante(event.lugar,event.fecha, event.hora)">Unirse</button> -->\n            <button ion-button full small icon-start color="secondaryg" (click)="pasarInformacion(event._id,\n                                                                                                  event.admin,\n                                                                                                  event.deporte.nombre,\n                                                                                                  event.lugar,\n                                                                                                  event.fecha,\n                                                                                                  event.hora,\n                                                                                                  event.numMaxParticipantes,\n                                                                                                  event.participantes,\n                                                                                                  event.nombre\n                                                                                                  )">\n              <ion-icon name="information-circle"></ion-icon>\n              Información\n            </button>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__["a" /* EventoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_evento_service_evento_service__["a" /* EventoServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object])
], InicioPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(70);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-momento',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/momento/momento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Crear evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>\n    ¡Vamos a jugar!\n  </h1>\n\n  <!-->Slides para la creación de eventos<-->\n  <ion-slides pager>\n    \n      <!-->Slide 1: Instrucciones o motivación<-->\n      <ion-slide>\n        <h2>Bienvenido a la creación de eventos</h2>\n\n        Aquí\n        van\n        las instrucciones\n        \n      </ion-slide>\n    \n      <!-->Slide 2: Deporte que se va a jugar -> (deporteEvento)<-->\n      <ion-slide>\n        <h2>¿Qué vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Qué vas a jugar?</ion-label>\n            <ion-select [(ngModel)]="deporteEvento">\n              <ion-option value="Fútbol">Fútbol</ion-option>\n              <ion-option value="Basketball">Basketball</ion-option>\n              <ion-option value="Tennis">Tennis</ion-option>\n              <ion-option value="Karate">Karate</ion-option>\n              <ion-option value="Ajedréz">Ajedrez</ion-option>\n              <ion-option value="Natación">Natación</ion-option>\n              <ion-option value="Tenis de mesa">Tenis de mesa</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 3: Nivel de exigencia -> (exigenciaEvento)<-->\n      <ion-slide>\n        <h2>¿Qué nivel de exigencia quieres enfrentar?</h2>\n\n        <ion-item>\n          <ion-label>Nivel de exigencia?</ion-label>\n            <ion-select [(ngModel)]="exigenciaEvento">\n              <ion-option value="Principiante">Principiante</ion-option>\n              <ion-option value="Profesional">Profesional</ion-option>\n              <ion-option value="Leyenda">Leyenda</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 4: Número de participantes -> (numeroParticipantesEvento)<-->\n      <ion-slide>\n        <h2>¿Cuántos van a jugar?</h2>\n\n        <!-->Va de acuerdo al deporte que se va a jugar<-->\n        <ion-item>\n          <ion-label>¿Cuántos?</ion-label>\n            <ion-select [(ngModel)]="numeroParticipantesEvento">\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>\n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>\n              <ion-option value="5">5</ion-option>\n              <ion-option value="6">6</ion-option>\n              <ion-option value="7">7</ion-option>\n              <ion-option value="8">8</ion-option>\n              <ion-option value="9">9</ion-option>\n              <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 5: Fecha de evento -> (fechaEvento, horarioEvento)<-->\n      <ion-slide>\n        <h2>¿Cuándo vamos a jugar?</h2>\n\n        <!-->Fecha del evento<-->\n        <ion-item>\n          <ion-label>¿Cuándo?</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>\n        </ion-item>\n\n        <!-->Horario del evento<-->\n        <ion-item>\n          <ion-label>¿Hora?</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horarioEvento"></ion-datetime>\n        </ion-item>\n      </ion-slide>\n    \n      <!-->Slide 6: Lugar de evento -> (lugarEvento)<-->\n      <ion-slide>\n        <h2>¿Dónde vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Dónde?</ion-label>\n            <ion-select [(ngModel)]="lugarEvento">\n              <ion-option value="Placa # 1">Placa # 1</ion-option>\n              <ion-option value="Placa # 2">Placa # 2</ion-option>\n              <ion-option value="Placa # 3">Placa # 3</ion-option>\n              <ion-option value="Coliseo">Coliseo</ion-option>\n              <ion-option value="Mesa de tennis # 1">Mesa de tennis # 1</ion-option>\n              <ion-option value="Mesa de tennis # 2">Mesa de tennis # 2</ion-option>\n              <ion-option value="Mesa de tennis cemento">Mesa de tennis cemento</ion-option>\n            </ion-select>\n         </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 7: Nombre de evento -> (nombreEvento)<-->\n      <ion-slide>\n        <h2>Nombre del evento</h2>\n\n        <ion-item>\n          <ion-input placeholder="Nombre" [(ngModel)]="nombreEvento"></ion-input>\n        </ion-item>\n\n        <button ion-button block (click)="crear()">Crear evento</button>\n\n      </ion-slide>\n\n    </ion-slides>\n \n    \n  \n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/momento/momento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MomentoPage);

//# sourceMappingURL=momento.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_evento_evento__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_momento_momento__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ingreso_ingreso__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_formulario_formulario__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deporte_deporte__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_escenario_escenario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dia_dia__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_participantes_participantes__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_acerca_acerca__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_informacion_informacion__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_calificacion__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_evento_settings_evento_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_evento_service_evento_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_escenario_settings_escenario_settings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_escenario_service_escenario_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_login_settings_login_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_login_service_login_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_image_service_image_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_image_settings_image_settings__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_usuario_service_usuario_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_usuario_settings_usuario_settings__ = __webpack_require__(202);
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
            __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__["a" /* NombrePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_acerca_acerca__["a" /* AcercaPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_informacion_informacion__["a" /* InformacionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_calificacion__["a" /* CalificacionPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/acerca/acerca.module#AcercaPageModule', name: 'AcercaPage', segment: 'acerca', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calificacion/calificacion.module#CalificacionPageModule', name: 'CalificacionPage', segment: 'calificacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/deporte/deporte.module#DeportePageModule', name: 'DeportePage', segment: 'deporte', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dia/dia.module#DiaPageModule', name: 'DiaPage', segment: 'dia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/escenario/escenario.module#EscenarioPageModule', name: 'EscenarioPage', segment: 'escenario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/horario/horario.module#HorarioPageModule', name: 'HorarioPage', segment: 'horario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/informacion/informacion.module#InformacionPageModule', name: 'InformacionPage', segment: 'informacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ingreso/ingreso.module#IngresoPageModule', name: 'IngresoPage', segment: 'ingreso', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/momento/momento.module#MomentoPageModule', name: 'MomentoPage', segment: 'momento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nombre/nombre.module#NombrePageModule', name: 'NombrePage', segment: 'nombre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/participantes/participantes.module#ParticipantesPageModule', name: 'ParticipantesPage', segment: 'participantes', priority: 'low', defaultHistory: [] }
                ]
            }), __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_17__pages_nombre_nombre__["a" /* NombrePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_acerca_acerca__["a" /* AcercaPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_informacion_informacion__["a" /* InformacionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_calificacion__["a" /* CalificacionPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_evento_settings_evento_settings__["a" /* EventoSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_evento_service_evento_service__["a" /* EventoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_escenario_settings_escenario_settings__["a" /* EscenarioSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_escenario_service_escenario_service__["a" /* EscenarioServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_login_settings_login_settings__["a" /* LoginSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_image_service_image_service__["a" /* ImageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_image_settings_image_settings__["a" /* ImageSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_usuario_settings_usuario_settings__["a" /* UsuarioSettingsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscenarioServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escenario_settings_escenario_settings__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EscenarioServiceProvider = (function () {
    function EscenarioServiceProvider(http, escenarioSettingsProvider) {
        this.http = http;
        this.escenarioSettingsProvider = escenarioSettingsProvider;
        this.apiUrl = this.escenarioSettingsProvider.getApiUrl();
    }
    EscenarioServiceProvider.prototype.traerEscenariosPorDeporte = function (deporte) {
        return this.http.get(this.apiUrl + 'escenario/' + deporte)
            .map(function (response) { return response.json().result; });
    };
    EscenarioServiceProvider.prototype.traerFechasPorEscenario = function (escenario) {
        return this.http.get(this.apiUrl + 'escenario/lugar/' + escenario)
            .map(function (response) { return response.json().result; });
    };
    EscenarioServiceProvider.prototype.traerHorasPorFecha = function (fecha, lugar) {
        return this.http.get(this.apiUrl + 'escenario/lugar/fecha/' + lugar + '/' + fecha)
            .map(function (response) { return response.json().result; });
    };
    EscenarioServiceProvider.prototype.traerImagenEscenario = function (nombre) {
        return this.http.get(this.apiUrl + 'escenario/imagen/' + nombre)
            .map(function (response) { return response.json().result; });
    };
    //public guardarEvento
    //Aqui hay cosas horribles (Ojo revisar get -> put ) :v xsxsxsx jajsjsjjajsj
    EscenarioServiceProvider.prototype.reservarEscenario = function (lugar, fecha, hora) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //let obj = JSON.stringify({'lugar':lugar,'fecha':fecha,'hora':hora});
        console.log("=======================");
        //console.log(obj);
        return this.http.put(this.apiUrl + 'reservar', { 'lugar': lugar, 'fecha': fecha, 'hora': hora }, { headers: headers }).map(function (res) { return res.json().result; });
    };
    return EscenarioServiceProvider;
}());
EscenarioServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__escenario_settings_escenario_settings__["a" /* EscenarioSettingsProvider */]])
], EscenarioServiceProvider);

//# sourceMappingURL=escenario-service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deporte_deporte__ = __webpack_require__(139);
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
        this.deporte = '';
        this.escenario = '';
        this.dia = '';
        this.horario = '';
        this.participantes = '';
        this.nombre = '';
        this.nombreEvento = navParams.data;
        this.fechaEvento = navParams.get('fechaEvento');
        this.horarioEvento = navParams.get('horarioEvento');
        this.deporteEvento = navParams.get('deporteEvento');
        this.lugarEvento = navParams.get('lugarEvento');
        this.nombreEvento = navParams.get('nombreEvento');
        this.numeroParticipantesEvento = navParams.get('numeroParticipantesEvento');
        this.exigenciaEvento = navParams.get('exigenciaEvento');
        this.imagen = navParams.get('imagen');
        this.deporte = navParams.get('deporte');
        this.escenario = navParams.get('escenario');
        this.dia = navParams.get('dia');
        this.horario = navParams.get('horario');
        this.participantes = navParams.get('participantes');
        this.nombre = navParams.get('nombre');
    }
    EventoPage.prototype.cargarPaginaEvento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__deporte_deporte__["a" /* DeportePage */]);
    };
    return EventoPage;
}());
EventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evento',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/img/logo_eafit_blanco.png" class="logo_navbar">\n    <ion-title>Evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n      <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="cargarPaginaEvento()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EventoPage);

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_settings_evento_settings__ = __webpack_require__(204);
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
    EventoServiceProvider.prototype.getSomeEvents = function (deporte) {
        console.log("desde los servicios este es el deporte", deporte);
        return this.http.get(this.apiUrl + 'filtrar/' + deporte).
            map(function (response) { return response.json().result; });
    };
    EventoServiceProvider.prototype.crearEvento = function (nombre, admin, lugar, fecha, participantes, numMaxParticipantes, hora, deporte, imagen) {
        console.log(nombre, admin, lugar, fecha, participantes, numMaxParticipantes, hora, deporte, imagen);
        console.log('estamos en crear evento');
        return this.http.post(this.apiUrl + 'evento', { 'nombre': nombre,
            'admin': admin,
            'lugar': lugar,
            'fecha': fecha,
            'participantes': participantes,
            'numMaxParticipantes': numMaxParticipantes,
            'hora': hora,
            'deporte': { 'nombre': deporte },
            'imagen': imagen })
            .map(function (response) { return response.json(); });
    };
    EventoServiceProvider.prototype.putParticipante = function (nombreUsuario, lugar, fecha, hora) {
        return this.http.put(this.apiUrl + 'unirse/' + nombreUsuario + '/' + lugar + '/' + fecha + '/' + hora, {}).map(function (Response) { return Response.text(); });
    };
    return EventoServiceProvider;
}());
EventoServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__evento_settings_evento_settings__["a" /* EventoSettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__evento_settings_evento_settings__["a" /* EventoSettingsProvider */]) === "function" && _b || Object])
], EventoServiceProvider);

var _a, _b;
//# sourceMappingURL=evento-service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_settings_login_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http, loginSettingsProvider) {
        this.http = http;
        this.loginSettingsProvider = loginSettingsProvider;
        this.apiUrl = this.loginSettingsProvider.getApiUrl();
    }
    LoginServiceProvider.prototype.comprobarUsuario = function (usuario, contrasena) {
        console.log("validando usuario");
        return this.http.get(this.apiUrl + 'usuario/' + usuario + '/' + contrasena)
            .map(function (response) { return response.text(); });
    };
    LoginServiceProvider.prototype.crearUsuario = function (usuario, contrasena, codigo, nombre, primerApellido) {
        return this.http.post(this.apiUrl + 'usuario', { 'nombre': nombre,
            'contrasena': contrasena,
            'usuario': usuario,
            'codigo': codigo,
            'primerApellido': primerApellido })
            .map(function (response) { return response.json(); });
    };
    LoginServiceProvider.prototype.getInfoUsuario = function (usuario) {
        console.log(usuario);
        console.log("lo de arriba es desde loginservice");
        return this.http.get(this.apiUrl + 'usuario' + '/' + usuario)
            .map(function (response) { return response.json().result; });
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__login_settings_login_settings__["a" /* LoginSettingsProvider */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ingreso_ingreso__ = __webpack_require__(83);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_formulario__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IngresoPage = (function () {
    function IngresoPage(navCtrl, navParams, loginServiceProvider) {
        //this.perfilPage.loadInfoUsuario();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginServiceProvider = loginServiceProvider;
        //Variables que enviamos
        this.nombreUsuario = '';
        this.contrasena = '';
        this.mensajeError = '';
        this.msgError = '';
    }
    IngresoPage.prototype.validarUsuario = function () {
        var _this = this;
        console.log(this.nombreUsuario);
        this.usuarioEncontrado = this.loginServiceProvider.comprobarUsuario(this.nombreUsuario, this.contrasena);
        this.usuarioEncontrado.subscribe(function (x) {
            if (x == 'true') {
                _this.iniciar();
            }
            else {
                _this.mensajeError = "El usuario o la contraseña son inválidos";
                console.log("contraseña o usuario invalido");
            }
        });
        console.log(this.nombreUsuario);
    };
    IngresoPage.prototype.iniciar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { nombreUsuario: this.nombreUsuario });
    };
    IngresoPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formulario_formulario__["a" /* FormularioPage */]);
    };
    IngresoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngresoPage');
    };
    return IngresoPage;
}());
IngresoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ingreso',template:/*ion-inline-start:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/img/logo_eafit_blanco.png" class="logo_navbar">\n    <ion-title>Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="contenido">\n  \n\n    <img src="assets/img/nombre.png" class="nombre">\n\n  \n  \n\n  <h3 class="slogan">\n    ¡Únete al juego!\n  </h3>\n    \n  <ion-list class="lista">\n    <ion-item no-line>\n      <ion-input type="text" placeholder="Nombre de usuario" [(ngModel)]="nombreUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Contraseña" [(ngModel)]="contrasena"></ion-input>\n    </ion-item>\n\n    <h6>\n      {{ mensajeError }}\n    </h6>\n\n    <br>\n\n    <button ion-button small round full color="secondaryb" (click)="validarUsuario()">Ingresar</button>\n\n    <button ion-button small round full color="secondaryg" (click)="registrar()">Crear cuenta nueva</button>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/josh/Documentos/U.SlV/Proyecto_Integrador_1/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
], IngresoPage);

//# sourceMappingURL=ingreso.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map