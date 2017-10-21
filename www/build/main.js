webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creacion_creacion__ = __webpack_require__(77);
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
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventoPage = (function () {
    function EventoPage(navCtrl, navParams) {
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
    EventoPage.prototype.crear = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__creacion_creacion__["a" /* CreacionPage */], { fechaEvento: this.fechaEvento,
            horarioEvento: this.horarioEvento,
            deporteEvento: this.deporteEvento,
            lugarEvento: this.lugarEvento,
            nombreEvento: this.nombreEvento,
            numeroParticipantesEvento: this.numeroParticipantesEvento,
            exigenciaEvento: this.exigenciaEvento,
            imagen: this.imagen
        });
    };
    EventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventoPage');
    };
    return EventoPage;
}());
EventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evento',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Crear evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>\n    ¡Vamos a jugar!\n  </h1>\n\n  <!-->Slides para la creación de eventos<-->\n  <ion-slides pager>\n    \n      <!-->Slide 1: Instrucciones o motivación<-->\n      <ion-slide>\n        <h2>Bienvenido a la creación de eventos</h2>\n\n        Aquí\n        van\n        las instrucciones\n        \n      </ion-slide>\n    \n      <!-->Slide 2: Deporte que se va a jugar -> (deporteEvento)<-->\n      <ion-slide>\n        <h2>¿Qué vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Qué vas a jugar?</ion-label>\n            <ion-select [(ngModel)]="deporteEvento">\n              <ion-option value="Fútbol">Fútbol</ion-option>\n              <ion-option value="Basketball">Basketball</ion-option>\n              <ion-option value="Tennis">Tennis</ion-option>\n              <ion-option value="Karate">Karate</ion-option>\n              <ion-option value="Ajedréz">Ajedrez</ion-option>\n              <ion-option value="Natación">Natación</ion-option>\n              <ion-option value="Tenis de mesa">Tenis de mesa</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 3: Nivel de exigencia -> (exigenciaEvento)<-->\n      <ion-slide>\n        <h2>¿Qué nivel de exigencia quieres enfrentar?</h2>\n\n        <ion-item>\n          <ion-label>Nivel de exigencia?</ion-label>\n            <ion-select [(ngModel)]="exigenciaEvento">\n              <ion-option value="Principiante">Principiante</ion-option>\n              <ion-option value="Profesional">Profesional</ion-option>\n              <ion-option value="Leyenda">Leyenda</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 4: Número de participantes -> (numeroParticipantesEvento)<-->\n      <ion-slide>\n        <h2>¿Cuántos van a jugar?</h2>\n\n        <!-->Va de acuerdo al deporte que se va a jugar<-->\n        <ion-item>\n          <ion-label>¿Cuántos?</ion-label>\n            <ion-select [(ngModel)]="numeroParticipantesEvento">\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>\n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>\n              <ion-option value="5">5</ion-option>\n              <ion-option value="6">6</ion-option>\n              <ion-option value="7">7</ion-option>\n              <ion-option value="8">8</ion-option>\n              <ion-option value="9">9</ion-option>\n              <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 5: Fecha de evento -> (fechaEvento, horarioEvento)<-->\n      <ion-slide>\n        <h2>¿Cuándo vamos a jugar?</h2>\n\n        <!-->Fecha del evento<-->\n        <ion-item>\n          <ion-label>¿Cuándo?</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>\n        </ion-item>\n\n        <!-->Horario del evento<-->\n        <ion-item>\n          <ion-label>¿Hora?</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horarioEvento"></ion-datetime>\n        </ion-item>\n      </ion-slide>\n    \n      <!-->Slide 6: Lugar de evento -> (lugarEvento)<-->\n      <ion-slide>\n        <h2>¿Dónde vamos a jugar?</h2>\n\n        <ion-item>\n          <ion-label>¿Dónde?</ion-label>\n            <ion-select [(ngModel)]="lugarEvento">\n              <ion-option value="Placa # 1">Placa # 1</ion-option>\n              <ion-option value="Placa # 2">Placa # 2</ion-option>\n              <ion-option value="Placa # 3">Placa # 3</ion-option>\n              <ion-option value="Coliseo">Coliseo</ion-option>\n              <ion-option value="Mesa de tennis # 1">Mesa de tennis # 1</ion-option>\n              <ion-option value="Mesa de tennis # 2">Mesa de tennis # 2</ion-option>\n              <ion-option value="Mesa de tennis cemento">Mesa de tennis cemento</ion-option>\n            </ion-select>\n         </ion-item>\n\n      </ion-slide>\n\n      <!-->Slide 7: Nombre de evento -> (nombreEvento)<-->\n      <ion-slide>\n        <h2>Nombre del evento</h2>\n\n        <ion-item>\n          <ion-input placeholder="Nombre" [(ngModel)]="nombreEvento"></ion-input>\n        </ion-item>\n\n        <button ion-button block (click)="crear()">Crear evento</button>\n\n      </ion-slide>\n\n    </ion-slides>\n \n    \n  \n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/evento/evento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EventoPage);

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingreso_ingreso__ = __webpack_require__(49);
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
    function FormularioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormularioPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__ingreso_ingreso__["a" /* IngresoPage */]);
    };
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    return FormularioPage;
}());
FormularioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-formulario',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/'<!--\n  Generated template for the FormularioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>formulario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-slides pager>\n        \n          <ion-slide>\n            <h2>Bienvenido a OlyMatch</h2>\n\n            \n            \n          </ion-slide>\n        \n          <ion-slide>\n            <h2>Slide 2</h2>\n\n            <ion-list>\n                \n              <ion-item>\n                <ion-input type="text" placeholder="Nombre"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-input type="text" placeholder="Primer apellido"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-input type="text" placeholder="Segundo apellido"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>¿Cuál es tu deporte favorito?</ion-label>\n                    <ion-select>\n                      <ion-option value="Fútbol">Fútbol</ion-option>\n                      <ion-option value="Basketball">Basketball</ion-option>\n                      <ion-option value="Tennis">Tennis</ion-option>\n                      <ion-option value="Karate">Karate</ion-option>\n                      <ion-option value="Ajedréz">Ajedrez</ion-option>\n                      <ion-option value="Natación">Natación</ion-option>\n                      <ion-option value="Tenis de mesa">Tenis de mesa</ion-option>\n                    </ion-select>\n                </ion-item>\n\n            </ion-list>\n\n          </ion-slide>\n        \n          <ion-slide>\n            <h2>Slide 3</h2>\n\n            <ion-list>\n                \n              <ion-item>\n                <ion-input type="text" placeholder="Correo institucional"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-input type="password" placeholder="Contraseña"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-input type="password" placeholder="Confirmar contraseña"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <button ion-button full color="primary" (click)="volver()">¡Únete al juego!</button>\n              </ion-item>\n\n            </ion-list>\n\n          </ion-slide>\n\n        </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/formulario/formulario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FormularioPage);

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/evento/evento.module": [
		267,
		2
	],
	"../pages/formulario/formulario.module": [
		268,
		1
	],
	"../pages/ingreso/ingreso.module": [
		269,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creacion_creacion__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(154);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__creacion_creacion__["a" /* CreacionPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */];
        this.nombreUsuario = navParams.get('nombreUsuario');
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Crear" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="nombreUsuario" tabTitle="Inicio" tabIcon="bonfire"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-perfil',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src="assets/img/cr.jpg"/>\n    <ion-card-content>\n      <ion-card-title text-center>\n          <h1>Cristiano Ronaldo</h1>\n      </ion-card-title>\n      <h1 text-center>\n        cronaldo7\n      </h1>\n\n      <h2 text-center>\n        Calificación\n      </h2>\n      \n      <img src="assets/img/5estrellas.png">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/perfil/perfil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Variables que recibimos
        this.nombreUsuario = '';
        this.nombreUsuario = navParams.data;
    }
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      ¡Hora de jugar!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>\n    ¡Bienvenidos a OlyMatch!\n  </h1>\n\n  {{ nombreUsuario }}\n  \n  <h3 text-center>\n    Una aplicación donde podrás crear y/o participar de un evento deportivo\n  </h3>\n\n  <h4 text-center>\n    ¡Únete al juego!\n  </h4>\n\n  <img src="../assets/img/logo.jpg">\n\n  <h3 text-center>\n    ¡Apartado para ver los eventos creados!\n  </h3>\n\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/inicio/inicio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_creacion_creacion__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_evento_evento__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ingreso_ingreso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_formulario_formulario__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
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
            __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_creacion_creacion__["a" /* CreacionPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ingreso_ingreso__["a" /* IngresoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_formulario_formulario__["a" /* FormularioPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/evento/evento.module#EventoPageModule', name: 'EventoPage', segment: 'evento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ingreso/ingreso.module#IngresoPageModule', name: 'IngresoPage', segment: 'ingreso', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_creacion_creacion__["a" /* CreacionPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ingreso_ingreso__["a" /* IngresoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_formulario_formulario__["a" /* FormularioPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formulario_formulario__ = __webpack_require__(101);
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
        selector: 'page-ingreso',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ingreso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" [(ngModel)]="nombreUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="primary" (click)="iniciar()">Log in</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full color="secondary" (click)="registrar()">Crear cuenta nueva en OlyMatch</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="iniciar()">\n        De visita\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/ingreso/ingreso.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IngresoPage);

//# sourceMappingURL=ingreso.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreacionPage = (function () {
    function CreacionPage(navCtrl, navParams) {
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
    CreacionPage.prototype.cargarPaginaEvento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evento_evento__["a" /* EventoPage */]);
    };
    return CreacionPage;
}());
CreacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-creacion',template:/*ion-inline-start:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/creacion/creacion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Crear</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n        \n        <img src={{imagen}}/>\n        \n        <ion-card-content>  \n          <ion-card-title text-center>\n            <h1>\n                {{ nombreEvento }}\n            </h1>\n        </ion-card-title>\n\n        <h2>\n            <ion-icon name="football"></ion-icon> {{ deporteEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="game-controller-a"></ion-icon> {{ exigenciaEvento }}\n        </h2>\n        \n        <h2>\n            <ion-icon name="calendar"></ion-icon> {{ fechaEvento }}\n        </h2>\n          \n        <h2>\n            <ion-icon name="time"></ion-icon> {{ horarioEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="locate"></ion-icon> {{ lugarEvento }}\n        </h2>\n\n        <h2>\n            <ion-icon name="clipboard"></ion-icon> {{ numeroParticipantesEvento }}\n        </h2>\n\n        </ion-card-content>\n      </ion-card>\n\n      <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="cargarPaginaEvento()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/camilovilla/proyectoIntegrador/OlyMatch/OlyMatch/src/pages/creacion/creacion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CreacionPage);

//# sourceMappingURL=creacion.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map