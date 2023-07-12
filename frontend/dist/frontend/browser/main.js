(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 3936);
/* harmony import */ var _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios/resolve-nota.service */ 9786);
/* harmony import */ var _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/main/main.component */ 3384);
/* harmony import */ var _componentes_main2_main2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/main2/main2.component */ 6513);
/* harmony import */ var _servicios_resolve_revista_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/resolve-revista.service */ 7527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent
}, {
  path: 'articulo/:_id',
  component: _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_0__.ArticuloComponent,
  resolve: {
    data: _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_1__.ResolveNotaService
  }
}, {
  path: 'ediciones/:_id',
  component: _componentes_main2_main2_component__WEBPACK_IMPORTED_MODULE_3__.Main2Component,
  resolve: {
    data: _servicios_resolve_revista_service__WEBPACK_IMPORTED_MODULE_4__.ResolveRevistaService
  }
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/barra-negra/barra-negra.component */ 3164);






function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class AppComponent {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.title = 'frontend';
    this.loader = false;
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      const htmlElement = document.querySelector('html');
      // Agregar el evento contextmenu
      htmlElement?.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
        alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
      });
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 1,
  consts: [[2, "text-align", "center"], ["class", "loadingio-spinner-dual-ring-xg1vnrf2b6o", "style", "margin-top: 150px; min-height: 2000px", 4, "ngIf"], [1, "loadingio-spinner-dual-ring-xg1vnrf2b6o", 2, "margin-top", "150px", "min-height", "2000px"], [1, "ldio-z7fu6e1den"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-barra-negra")(3, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_0__.BarraNegraComponent],
  styles: [".div-principal[_ngcontent-%COMP%]{\r\n  margin-left: -0px;\r\n  margin-right: -0px;\r\n  background-color: orange;\r\n  border-left: 20px solid rgb(43, 43, 43);\r\n  border-right: 20px solid rgb(44, 44, 44);}\r\n\r\n.indice[_ngcontent-%COMP%]{\r\n  margin-left:30px;\r\n  margin-top:-10px;\r\n  margin-bottom: 20px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  letter-spacing: -1px;\r\n  color: white;\r\n  text-shadow: 2px 2px 8px black;}\r\n\r\n.portadaAcomoda[_ngcontent-%COMP%]{padding:10px; padding-left:0px; padding-right: 0px;}\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n\r\n margin-left: 20px;\r\n margin-right: 20px}\r\n .editorialParrafo[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n    letter-spacing: 1px;\r\n   outline: none;\r\n   padding-top:0px;\r\n   padding-left: 20px;\r\n   font-size: 20px;\r\n   margin-bottom: 0px;\r\n   margin-right: 30px;\r\n   line-height:27px;\r\n }\r\n\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n0% { transform: rotate(0) }\r\n100% { transform: rotate(360deg) }\r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nwidth: 83px;\r\nheight: 83px;\r\ntop: 8.5px;\r\nleft: 8.5px;\r\nborder-radius: 50%;\r\nborder: 13px solid #000;\r\nborder-color: #0a0a0a transparent #0a0a0a transparent;\r\nanimation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\nposition: absolute;\r\nwidth: 100%;\r\nheight: 100%;\r\ntransform: rotate(45deg);\r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\ncontent: \"\";\r\ndisplay: block;\r\nposition: absolute;\r\nwidth: 13px;\r\nheight: 13px;\r\ntop: -13px;\r\nleft: 22px;\r\nbackground: #0a0a0a;\r\nborder-radius: 50%;\r\nbox-shadow: 0 70px 0 0 #0a0a0a;\r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\nleft: -13px;\r\ntop: 22px;\r\nbox-shadow: 70px 0 0 0 #0a0a0a;\r\n}\r\n.loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\nwidth: 84px;\r\nheight: 84px;\r\ndisplay: inline-block;\r\noverflow: hidden;\r\nbackground: none;\r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 100%;\r\nposition: relative;\r\ntransform: translateZ(0) scale(0.84);\r\n-webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\ntransform-origin: 0 0; \r\n}\r\n.ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px)\r\n{\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n\r\n\r\n\r\n\r\n.indice[_ngcontent-%COMP%]{\r\nmargin-left:10px;\r\nmargin-top:15px;\r\nfont-size: 20px\r\n;}\r\n\r\n\r\n\r\n.editorialParrafo[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n  letter-spacing: 0px;\r\n   outline: none;\r\n   padding-top:0px;\r\n   padding-left: 20px;\r\n   font-size: 16px;\r\n   margin-bottom: 0px;\r\n   margin-right: 30px;\r\n   line-height:27px;\r\n }\r\n\r\n.portadaAcomoda[_ngcontent-%COMP%]{padding: 0px;}\r\n}\r\n\r\n\r\n\r\n@media (max-width: 700px)\r\n{\r\n.borde[_ngcontent-%COMP%]{margin-bottom: 30px;}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix1Q0FBdUM7RUFDdkMsd0NBQXdDLENBQUM7O0FBRTNDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWiw4QkFBOEIsQ0FBQzs7QUFFakMsZ0JBQWdCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQzs7RUFFakUsaUJBQWlCLHlCQUF5Qjs7Q0FFM0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQjtFQUNDLGdCQUFnQjtJQUNkLG1CQUFtQjtHQUNwQixhQUFhO0dBQ2IsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixnQkFBZ0I7Q0FDbEI7Ozs7QUFJRDtBQUNBLEtBQUsscUJBQXFCO0FBQzFCLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsV0FBVztBQUNYLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWixVQUFVO0FBQ1YsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsb0NBQW9DO0FBQ3BDLG1DQUEyQjtRQUEzQiwyQkFBMkI7QUFDM0IscUJBQXFCLEVBQUUsbUJBQW1CO0FBQzFDO0FBQ0EsdUJBQXVCLHVCQUF1QixFQUFFO0FBQ2hELHFDQUFxQzs7OztBQUlyQzs7QUFFQSxXQUFXLFlBQVk7Ozs7O0FBS3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUNBLENBQUM7Ozs7QUFJRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7R0FDbEIsYUFBYTtHQUNiLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsZ0JBQWdCO0NBQ2xCOztBQUVELGdCQUFnQixZQUFZLENBQUM7QUFDN0I7Ozs7QUFJQTs7QUFFQSxPQUFPLG1CQUFtQixDQUFDO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1wcmluY2lwYWx7XHJcbiAgbWFyZ2luLWxlZnQ6IC0wcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYig0NCwgNDQsIDQ0KTt9XHJcblxyXG4uaW5kaWNle1xyXG4gIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgbWFyZ2luLXRvcDotMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IGJsYWNrO31cclxuXHJcbi5wb3J0YWRhQWNvbW9kYXtwYWRkaW5nOjEwcHg7IHBhZGRpbmctbGVmdDowcHg7IHBhZGRpbmctcmlnaHQ6IDBweDt9XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbCB7YmFja2dyb3VuZC1jb2xvcjogIzNFMjgwMDtcclxuXHJcbiBtYXJnaW4tbGVmdDogMjBweDtcclxuIG1hcmdpbi1yaWdodDogMjBweH1cclxuIC5lZGl0b3JpYWxQYXJyYWZve1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgbGluZS1oZWlnaHQ6MjdweDtcclxuIH1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBsZGlvLXo3ZnU2ZTFkZW4ge1xyXG4wJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cclxuMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG59XHJcbi5sZGlvLXo3ZnU2ZTFkZW4gZGl2IHsgYm94LXNpemluZzogYm9yZGVyLWJveCFpbXBvcnRhbnQgfVxyXG4ubGRpby16N2Z1NmUxZGVuID4gZGl2IHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogODNweDtcclxuaGVpZ2h0OiA4M3B4O1xyXG50b3A6IDguNXB4O1xyXG5sZWZ0OiA4LjVweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5ib3JkZXI6IDEzcHggc29saWQgIzAwMDtcclxuYm9yZGVyLWNvbG9yOiAjMGEwYTBhIHRyYW5zcGFyZW50ICMwYTBhMGEgdHJhbnNwYXJlbnQ7XHJcbmFuaW1hdGlvbjogbGRpby16N2Z1NmUxZGVuIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4ubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG4ubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXYge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4ubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG5jb250ZW50OiBcIlwiO1xyXG5kaXNwbGF5OiBibG9jaztcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTNweDtcclxuaGVpZ2h0OiAxM3B4O1xyXG50b3A6IC0xM3B4O1xyXG5sZWZ0OiAyMnB4O1xyXG5iYWNrZ3JvdW5kOiAjMGEwYTBhO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbmJveC1zaGFkb3c6IDAgNzBweCAwIDAgIzBhMGEwYTtcclxufVxyXG4ubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG5sZWZ0OiAtMTNweDtcclxudG9wOiAyMnB4O1xyXG5ib3gtc2hhZG93OiA3MHB4IDAgMCAwICMwYTBhMGE7XHJcbn1cclxuLmxvYWRpbmdpby1zcGlubmVyLWR1YWwtcmluZy14ZzF2bnJmMmI2byB7XHJcbndpZHRoOiA4NHB4O1xyXG5oZWlnaHQ6IDg0cHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubGRpby16N2Z1NmUxZGVuIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMC44NCk7XHJcbmJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxudHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG59XHJcbi5sZGlvLXo3ZnU2ZTFkZW4gZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVxyXG57XHJcbi5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG5cclxuXHJcblxyXG5cclxuLmluZGljZXtcclxubWFyZ2luLWxlZnQ6MTBweDtcclxubWFyZ2luLXRvcDoxNXB4O1xyXG5mb250LXNpemU6IDIwcHhcclxuO31cclxuXHJcblxyXG5cclxuLmVkaXRvcmlhbFBhcnJhZm97XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgbGluZS1oZWlnaHQ6MjdweDtcclxuIH1cclxuXHJcbi5wb3J0YWRhQWNvbW9kYXtwYWRkaW5nOiAwcHg7fVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweClcclxue1xyXG4uYm9yZGV7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/portada/portada.component */ 1321);
/* harmony import */ var _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/barra-negra/barra-negra.component */ 3164);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-useful-swiper */ 2266);
/* harmony import */ var _componentes_carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/carousel-revista/carousel-revista.component */ 6639);
/* harmony import */ var _componentes_lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/lateral-relacionado/lateral-relacionado.component */ 7246);
/* harmony import */ var _componentes_articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/articulo-relacionado/articulo-relacionado.component */ 2131);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 3936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/main/main.component */ 3384);
/* harmony import */ var _componentes_a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/a-portada/a-portada.component */ 1690);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);
/* harmony import */ var _componentes_publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/publicidadx3/publicidadx3.component */ 3083);
/* harmony import */ var _componentes_b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/b-indice/b-indice.component */ 3551);
/* harmony import */ var _componentes_publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/publicidad-horizontal/publicidad-horizontal.component */ 1273);
/* harmony import */ var _pipes_sanetizer_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/sanetizer.pipe */ 3315);
/* harmony import */ var _componentes_comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/comentarios/comentarios.component */ 4928);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_componentes_lateral_intercalado_lateral_intercalado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/componentes/lateral-intercalado/lateral-intercalado.component */ 1979);
/* harmony import */ var _componentes_main2_main2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/main2/main2.component */ 6513);
/* harmony import */ var _componentes_footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/footer-card/footer-card.component */ 2944);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _componentes_publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/publicidad-horizontal2/publicidad-horizontal2.component */ 1847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);




























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__.NgxUsefulSwiperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__.ModalModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__.PortadaComponent, _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_3__.BarraNegraComponent, _componentes_carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_4__.CarouselRevistaComponent, _componentes_lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_5__.LateralRelacionadoComponent, _componentes_articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_6__.ArticuloRelacionadoComponent, _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_7__.ArticuloComponent, _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_8__.MainComponent, _componentes_a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_9__.APortadaComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _componentes_publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_11__.Publicidadx3Component, _componentes_b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_12__.BIndiceComponent, _componentes_publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_13__.PublicidadHorizontalComponent, _pipes_sanetizer_pipe__WEBPACK_IMPORTED_MODULE_14__.SanetizerPipe, _componentes_comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_15__.ComentariosComponent, _app_componentes_lateral_intercalado_lateral_intercalado_component__WEBPACK_IMPORTED_MODULE_16__.LateralIntercaladoComponent, _componentes_main2_main2_component__WEBPACK_IMPORTED_MODULE_17__.Main2Component, _componentes_footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_18__.FooterCardComponent, _componentes_publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_19__.PublicidadHorizontal2Component],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_22__.NgxUsefulSwiperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__.ModalModule]
  });
})();

/***/ }),

/***/ 1690:
/*!**************************************************************!*\
  !*** ./src/app/componentes/a-portada/a-portada.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APortadaComponent": () => (/* binding */ APortadaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function APortadaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function APortadaComponent_div_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.sumarContador(7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.publi[0] == null ? null : ctx_r0.publi[0].link7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.publi[0] == null ? null : ctx_r0.publi[0].img7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class APortadaComponent {
  constructor(crudService) {
    this.crudService = crudService;
  }
  ngOnInit() {}
  cut(value) {
    var corte = value.slice(2);
    return corte;
  }
  sumarContador(x) {
    if (x === 7) {
      var aux = this.publi[0]?.contador7 + 1;
      this.publi[0].contador7 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {});
    }
  }
}
APortadaComponent.ɵfac = function APortadaComponent_Factory(t) {
  return new (t || APortadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
APortadaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: APortadaComponent,
  selectors: [["app-a-portada"]],
  inputs: {
    nro: "nro",
    publi: "publi",
    data: "data"
  },
  decls: 16,
  vars: 4,
  consts: [[1, "row", "marco"], [1, "col-sm-12", "col-md-12", "col-lg-7", "col-xl-7", "col-xxl-7", 2, "padding-right", "0px", "margin-right", "0px"], [2, "position", "relative"], ["alt", "", "width", "100%", "height", "600px", 1, "imagenPortada", 2, "object-fit", "cover", "margin-top", "-29px", 3, "src"], [1, "imgLogo"], ["src", "../../../assets/logonm.png", "alt", "", 1, "fade-in-image", "logo", 2, "z-index", "-1"], [1, "cuadroTitulo"], [1, "categoria", 2, "margin-top", "20px"], [1, "titular"], [1, "titular", "quitar1300", 2, "font-size", "20px", "color", "rgb(255, 255, 255)", "line-height", "30px", "font-weight", "200", "margin-top", "0px"], [1, "subtitulo"], ["class", "col-sm-5\tcol-md-5\tcol-lg-5\tcol-xl-5\tcol-xxl-5 div-img-publi", "style", "margin-left: -20px;", 4, "ngIf"], [1, "col-sm-5", "col-md-5", "col-lg-5", "col-xl-5", "col-xxl-5", "div-img-publi", 2, "margin-left", "-20px"], ["target", "_blank", 3, "href", "click"], ["alt", "", "width", "100%", "height", "561px", 2, "margin-right", "-24px", "margin-top", "1px", 3, "src"]],
  template: function APortadaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Comunidad de la red cultural de Monta\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Bienvenidos a descubrir la Cultura de Monta\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, APortadaComponent_div_15_Template, 3, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.imgPortada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.imagen3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.subtitulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.publi);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".titular[_ngcontent-%COMP%]{\r\n  margin-top:-5px; \r\n  text-shadow: 1px 1px 3px #000000; \r\n  margin-left:20px;\r\n  color:white;\r\n  text-align: left;\r\n  font-size: 33px;\r\n  padding-right: 15px;\r\n \r\n  \r\n  font-weight: 800;\r\n  line-height: 33px;\r\n  min-height: 100% ;\r\n }\r\n\r\n .marco[_ngcontent-%COMP%]{padding-right: 0px; margin-right: 0px; margin-left: -10px;}\r\n\r\n .div-img-publi[_ngcontent-%COMP%]{margin: 0px;\r\n  display:block;\r\n  padding: 0px;\r\n  \r\n  margin-top: -10px;\r\n  \r\n}\r\n\r\n .titular2[_ngcontent-%COMP%]{\r\n  margin-top:-5px; \r\n  text-shadow: 1px 1px 3px #000000; \r\n  margin-left:20px;\r\n  color:white;\r\n  text-align: left;\r\n  font-size: 30px;\r\n  \r\n  padding-right: 10px;\r\n  \r\n     \r\n  font-weight: 800;\r\n  line-height: 22px;\r\n  min-height: 100% ;\r\n }\r\n .categoria[_ngcontent-%COMP%]{\r\n   text-align: left; \r\n   color:orange;\r\n   margin-left: 20px;\r\n   margin-top:14px;\r\n   text-shadow: 5px 5px 20px black;\r\n   \r\n   \r\n }\r\n\r\n .imagenPortada[_ngcontent-%COMP%]{\r\n     padding:20px; \r\n     padding-left:10px; \r\n     \r\n     object-fit: cover;\r\n }\r\n\r\n\r\n .imgLogo[_ngcontent-%COMP%]{\r\n  filter:drop-shadow(2px 4px 4px rgb(0, 0, 0));\r\n     position:absolute; \r\n     top:-15px; \r\n     left:3%; \r\n\r\n\r\n\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{       width:250px;\r\n  }\r\n\r\n  \r\n .h1Logo[_ngcontent-%COMP%]{\r\n  font-size: 21px; \r\n  margin-left: 2px;\r\n  margin-top:269px;\r\n  color:white; \r\n  text-shadow: 1px 1px 3px black;\r\n  background-color: orange;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  padding-left:10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n.lugarLogo[_ngcontent-%COMP%]{\r\n  position:absolute; \r\n  top:-115px;\r\n  left:3%; \r\n  }\r\n\r\n  .subtitulo[_ngcontent-%COMP%]{\r\n    padding-left: 20px; color:gainsboro; padding-right: 20px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .fade-in-image[_ngcontent-%COMP%] {\r\n      animation: _ngcontent-%COMP%_fadeIn 2s;\r\n      -webkit-animation: _ngcontent-%COMP%_fadeIn 2s;\r\n      -moz-animation: fadeIn 2s;\r\n      -o-animation: fadeIn 2s;\r\n      -ms-animation: fadeIn 2s;\r\n    }\r\n    @keyframes _ngcontent-%COMP%_fadeIn {\r\n      0% {opacity:0;}\r\n      100% {opacity:1;}\r\n    }\r\n\r\n\r\n  \r\n  .cuadroTitulo[_ngcontent-%COMP%]{\r\n      position:absolute;\r\n      min-height: 187px;\r\n      top: 364px;\r\n\r\n      left:10px;\r\n      right:20px;\r\n      \r\n      background-color: rgba(0, 0, 0, 0.603);  \r\n      \r\n  }\r\n  @media (max-width:1300px){\r\n\r\n}\r\n\r\n@media (max-width:1000px){\r\n  .quitar1300[_ngcontent-%COMP%]{display: none;}\r\n  \r\n \r\n    \r\n}\r\n\r\n@media (max-width:990px){\r\n  .div-img-publi[_ngcontent-%COMP%]{display:none}\r\n  \r\n\r\n                  \r\n  }\r\n\r\n\r\n\r\n  \r\n\r\n  @media (max-width:600px){\r\n    .titular2[_ngcontent-%COMP%]{font-size: 25px; line-height: 28px; margin-left:10px}\r\n    .quitar[_ngcontent-%COMP%]{display:none}\r\n    .categoria[_ngcontent-%COMP%]{font-size:12px; margin-left:10px}\r\n    .marco[_ngcontent-%COMP%]{margin-left:-22px}\r\n    .logo[_ngcontent-%COMP%]{width: 160px; margin-top:20px;\r\n      margin-left: -10px;\r\n    \r\n    }\r\n    .titular[_ngcontent-%COMP%]{\r\n \r\n      margin-left:10px!important;\r\n    }\r\n\r\n    .categoria[_ngcontent-%COMP%]{\r\n \r\n      margin-left:10px!important;\r\n    }\r\n    .subtitulo[_ngcontent-%COMP%]{display:none}\r\n    .cuadroTitulo[_ngcontent-%COMP%]{ top: 247px!important;} \r\n    @media (max-width:576px){\r\n      .quitarPubli[_ngcontent-%COMP%]{\r\n        display:none\r\n      }      \r\n                    \r\n    }\r\n    \r\n\r\n    .cuadroTitulo[_ngcontent-%COMP%]{\r\n      position:absolute;\r\n      min-height: 123px;\r\n      top:247px;\r\n\r\n      left:0px;\r\n      right:0px;\r\n      \r\n      background-color: rgba(0, 0, 0, 0.603);  \r\n    }\r\n\r\n    .titular[_ngcontent-%COMP%]{\r\n      \r\n      font-size: 29px;\r\n      line-height: 30px;\r\n      margin-left:10px;\r\n    }\r\n   \r\n    \r\n\r\n\r\n   \r\n .imagenPortada[_ngcontent-%COMP%]{\r\n  padding: 0px!important;\r\n  width: 100%;\r\n  margin-top: 0px!important;\r\n  margin-bottom: -20px!;\r\n  \r\n  height: 370px;\r\n  \r\n}\r\n\r\n\r\n  }\r\n\r\n  \r\n@media (max-width:400px){\r\n  .titular[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }      \r\n                \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYS1wb3J0YWRhL2EtcG9ydGFkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQiw2RUFBNkU7RUFDN0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0NBRUEsT0FBTyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQzs7Q0FFakUsZUFBZSxXQUFXO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQjt3QkFDc0I7QUFDeEI7O0NBRUM7RUFDQyxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsbUJBQW1COztLQUVoQiw2RUFBNkU7RUFDaEYsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZiwrQkFBK0I7OztDQUdqQzs7Q0FFQTtLQUNJLFlBQVk7S0FDWixpQkFBaUI7O0tBRWpCLGlCQUFpQjtDQUNyQjs7O0NBR0E7RUFDQyw0Q0FBNEM7S0FDekMsaUJBQWlCO0tBQ2pCLFNBQVM7S0FDVCxPQUFPOzs7O0VBSVY7O0VBRUEsYUFBYSxXQUFXO0VBQ3hCOztFQUVBLHFCQUFxQjtDQUN0QjtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLE9BQU87RUFDUDs7RUFFQTtJQUNFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxtQkFBbUI7SUFDeEQsZUFBZTtFQUNqQjs7RUFFQTtNQUNJLG9CQUFvQjtNQUNwQiw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLHVCQUF1QjtNQUN2Qix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLElBQUksU0FBUyxDQUFDO01BQ2QsTUFBTSxTQUFTLENBQUM7SUFDbEI7OztFQXVCRixpQ0FBaUM7RUFDakM7TUFDSSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFVBQVU7O01BRVYsU0FBUztNQUNULFVBQVU7O01BRVYsc0NBQXNDOztFQUUxQztFQUNBOztBQUVGOztBQUVBO0VBQ0UsWUFBWSxhQUFhLENBQUM7Ozs7QUFJNUI7O0FBRUE7RUFDRSxlQUFlLFlBQVk7Ozs7RUFJM0I7Ozs7OztFQU1BO0lBQ0UsVUFBVSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO0lBQzlELFFBQVEsWUFBWTtJQUNwQixXQUFXLGNBQWMsRUFBRSxnQkFBZ0I7SUFDM0MsT0FBTyxpQkFBaUI7SUFDeEIsTUFBTSxZQUFZLEVBQUUsZUFBZTtNQUNqQyxrQkFBa0I7O0lBRXBCO0lBQ0E7O01BRUUsMEJBQTBCO0lBQzVCOztJQUVBOztNQUVFLDBCQUEwQjtJQUM1QjtJQUNBLFdBQVcsWUFBWTtJQUN2QixlQUFlLG9CQUFvQixDQUFDO0lBQ3BDO01BQ0U7UUFDRTtNQUNGOztJQUVGOzs7SUFHQTtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsU0FBUzs7TUFFVCxRQUFRO01BQ1IsU0FBUzs7TUFFVCxzQ0FBc0M7SUFDeEM7O0lBRUE7O01BRUUsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7O0lBRUE7Ozs7TUFJRTs7OztDQUlMO0VBQ0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixhQUFhOztBQUVmOzs7RUFHRTs7O0FBR0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxhcntcclxuICBtYXJnaW4tdG9wOi01cHg7IFxyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwOyBcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiBcclxuICAvKiBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCUgO1xyXG4gfVxyXG5cclxuIC5tYXJjb3twYWRkaW5nLXJpZ2h0OiAwcHg7IG1hcmdpbi1yaWdodDogMHB4OyBtYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuIC5kaXYtaW1nLXB1Ymxpe21hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAtMjJweDsgKi9cclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDsgKi9cclxufVxyXG5cclxuIC50aXR1bGFyMntcclxuICBtYXJnaW4tdG9wOi01cHg7IFxyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwOyBcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgXHJcbiAgICAgLyogZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlIDtcclxuIH1cclxuIC5jYXRlZ29yaWF7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICBjb2xvcjpvcmFuZ2U7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBtYXJnaW4tdG9wOjE0cHg7XHJcbiAgIHRleHQtc2hhZG93OiA1cHggNXB4IDIwcHggYmxhY2s7XHJcbiAgIFxyXG4gICBcclxuIH1cclxuXHJcbiAuaW1hZ2VuUG9ydGFkYXtcclxuICAgICBwYWRkaW5nOjIwcHg7IFxyXG4gICAgIHBhZGRpbmctbGVmdDoxMHB4OyBcclxuICAgICBcclxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuIH1cclxuXHJcblxyXG4gLmltZ0xvZ297XHJcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDJweCA0cHggNHB4IHJnYigwLCAwLCAwKSk7XHJcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gICAgIHRvcDotMTVweDsgXHJcbiAgICAgbGVmdDozJTsgXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICAubG9nb3sgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBFc3RpbG9zIGRlbCBsb2dvICovXHJcbiAuaDFMb2dve1xyXG4gIGZvbnQtc2l6ZTogMjFweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tdG9wOjI2OXB4O1xyXG4gIGNvbG9yOndoaXRlOyBcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogcG9zaWNpb24gZGVsIGxvZ28gcG5nICovXHJcbi5sdWdhckxvZ297XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gIHRvcDotMTE1cHg7XHJcbiAgbGVmdDozJTsgXHJcbiAgfVxyXG5cclxuICAuc3VidGl0dWxve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyBjb2xvcjpnYWluc2Jvcm87IHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuZmFkZS1pbi1pbWFnZSB7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtby1hbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAwJSB7b3BhY2l0eTowO31cclxuICAgICAgMTAwJSB7b3BhY2l0eToxO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtvcGFjaXR5OjA7fVxyXG4gICAgICAxMDAlIHtvcGFjaXR5OjE7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge29wYWNpdHk6MDt9XHJcbiAgICAgIDEwMCUge29wYWNpdHk6MTt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge29wYWNpdHk6MDt9XHJcbiAgICAgIDEwMCUge29wYWNpdHk6MTt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtvcGFjaXR5OjA7fVxyXG4gICAgICAxMDAlIHtvcGFjaXR5OjE7fVxyXG4gICAgfVxyXG5cclxuXHJcbiAgLyogUmVjdWFkcm8gbmVncm8gZGUgbGEgcG9ydGFkYSAqL1xyXG4gIC5jdWFkcm9UaXR1bG97XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxODdweDtcclxuICAgICAgdG9wOiAzNjRweDtcclxuXHJcbiAgICAgIGxlZnQ6MTBweDtcclxuICAgICAgcmlnaHQ6MjBweDtcclxuICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MDMpOyAgXHJcbiAgICAgIFxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpe1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAwMHB4KXtcclxuICAucXVpdGFyMTMwMHtkaXNwbGF5OiBub25lO31cclxuICBcclxuIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MHB4KXtcclxuICAuZGl2LWltZy1wdWJsaXtkaXNwbGF5Om5vbmV9XHJcbiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC50aXR1bGFyMntmb250LXNpemU6IDI1cHg7IGxpbmUtaGVpZ2h0OiAyOHB4OyBtYXJnaW4tbGVmdDoxMHB4fVxyXG4gICAgLnF1aXRhcntkaXNwbGF5Om5vbmV9XHJcbiAgICAuY2F0ZWdvcmlhe2ZvbnQtc2l6ZToxMnB4OyBtYXJnaW4tbGVmdDoxMHB4fVxyXG4gICAgLm1hcmNve21hcmdpbi1sZWZ0Oi0yMnB4fVxyXG4gICAgLmxvZ297d2lkdGg6IDE2MHB4OyBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRpdHVsYXJ7XHJcbiBcclxuICAgICAgbWFyZ2luLWxlZnQ6MTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3JpYXtcclxuIFxyXG4gICAgICBtYXJnaW4tbGVmdDoxMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdWJ0aXR1bG97ZGlzcGxheTpub25lfVxyXG4gICAgLmN1YWRyb1RpdHVsb3sgdG9wOiAyNDdweCFpbXBvcnRhbnQ7fSBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgICAgLnF1aXRhclB1Ymxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuY3VhZHJvVGl0dWxve1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgbWluLWhlaWdodDogMTIzcHg7XHJcbiAgICAgIHRvcDoyNDdweDtcclxuXHJcbiAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICByaWdodDowcHg7XHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAzKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIC50aXR1bGFye1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAvKiAuaW1nTG9nb3tcclxuICAgICAgdG9wOi0xNXB4OyBcclxuICAgICAgbGVmdDoyJTsgXHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICB9ICovXHJcblxyXG5cclxuICAgXHJcbiAuaW1hZ2VuUG9ydGFkYXtcclxuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHghO1xyXG4gIFxyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KXtcclxuICAudGl0dWxhcntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2131:
/*!************************************************************************************!*\
  !*** ./src/app/componentes/articulo-relacionado/articulo-relacionado.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticuloRelacionadoComponent": () => (/* binding */ ArticuloRelacionadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../servicios/crud.service */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function ArticuloRelacionadoComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "| ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ArticuloRelacionadoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.nota.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nota == null ? null : ctx_r1.nota.resultadoCategoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nota == null ? null : ctx_r1.nota.art1);
  }
}
function ArticuloRelacionadoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.nota.resultadoImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.nota == null ? null : ctx_r2.nota.resultadoCategoria2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.nota == null ? null : ctx_r2.nota.art2);
  }
}
function ArticuloRelacionadoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.nota.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.nota == null ? null : ctx_r3.nota.resultadoCategoria3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.nota == null ? null : ctx_r3.nota.art3);
  }
}
function ArticuloRelacionadoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.nota == null ? null : ctx_r4.nota.resultadoCategoria4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.nota == null ? null : ctx_r4.nota.art4);
  }
}
function ArticuloRelacionadoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r5.nota == null ? null : ctx_r5.nota.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nota == null ? null : ctx_r5.nota.resultadoCategoria5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nota == null ? null : ctx_r5.nota.art5);
  }
}
function ArticuloRelacionadoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.nota == null ? null : ctx_r6.nota.resultadoCategoria6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.nota == null ? null : ctx_r6.nota.art6);
  }
}
function ArticuloRelacionadoComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoImagen7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.nota == null ? null : ctx_r7.nota.resultadoCategoria7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.nota == null ? null : ctx_r7.nota.art7);
  }
}
function ArticuloRelacionadoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoImagen8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.nota == null ? null : ctx_r8.nota.resultadoCategoria8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.nota == null ? null : ctx_r8.nota.art8);
  }
}
function ArticuloRelacionadoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r9.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r9.nota == null ? null : ctx_r9.nota.resultadoImagen9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.nota == null ? null : ctx_r9.nota.resultadoCategoria9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r9.nota == null ? null : ctx_r9.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.nota == null ? null : ctx_r9.nota.art9);
  }
}
function ArticuloRelacionadoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r10.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r10.nota == null ? null : ctx_r10.nota.resultadoImagen10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nota == null ? null : ctx_r10.nota.resultadoCategoria10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r10.nota == null ? null : ctx_r10.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nota == null ? null : ctx_r10.nota.art10);
  }
}
function ArticuloRelacionadoComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoImagen11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.nota == null ? null : ctx_r11.nota.resultadoCategoria11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.nota == null ? null : ctx_r11.nota.art11);
  }
}
function ArticuloRelacionadoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h6", 10)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoImagen12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.nota == null ? null : ctx_r12.nota.resultadoCategoria12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.nota == null ? null : ctx_r12.nota.art12);
  }
}
class ArticuloRelacionadoComponent {
  constructor(crudService) {
    this.crudService = crudService;
    this.articulos = [];
    this.articuloBusqueda = [];
    this.estado = true;
  }
  ngOnInit() {
    console.log('badenra', this.nota);
  }
  cut(value) {
    if (value) {
      var corte = value.slice(2);
      return corte;
    } else return value;
  }
}
ArticuloRelacionadoComponent.ɵfac = function ArticuloRelacionadoComponent_Factory(t) {
  return new (t || ArticuloRelacionadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
ArticuloRelacionadoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticuloRelacionadoComponent,
  selectors: [["app-articulo-relacionado"]],
  inputs: {
    nota: ["data", "nota"],
    estado: "estado"
  },
  decls: 17,
  vars: 13,
  consts: [["class", "titulo", "style", "margin-left:0px;margin-bottom: 10px; color:orange", 4, "ngIf"], [1, "row"], ["class", "card col-sm-12\tcol-md-12 col-lg-4\tcol-xl-4", 4, "ngIf"], ["class", "card col-sm-6\tcol-md-6 col-lg-4\tcol-xl-4", 4, "ngIf"], ["class", "card card col-sm-6\tcol-md-6 col-lg-4\tcol-xl-4", 4, "ngIf"], [1, "titulo", 2, "margin-left", "0px", "margin-bottom", "10px", "color", "orange"], [1, "card", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4"], ["target", "_blank", 3, "routerLink"], ["alt", "", "height", "200px", 1, "card-img-top", "sombra", 2, "object-fit", "cover", 3, "src"], [1, "card-body"], [1, "categoria"], [1, "card-title", "titulo"], [1, "card", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4"], [1, "card", "card", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4"], ["fragment", "ayudaDiv", "target", "_blank", 3, "routerLink"]],
  template: function ArticuloRelacionadoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br")(1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_h1_2_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArticuloRelacionadoComponent_div_5_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_6_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_7_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ArticuloRelacionadoComponent_div_8_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_9_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ArticuloRelacionadoComponent_div_10_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_11_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ArticuloRelacionadoComponent_div_12_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ArticuloRelacionadoComponent_div_13_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ArticuloRelacionadoComponent_div_14_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ArticuloRelacionadoComponent_div_15_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ArticuloRelacionadoComponent_div_16_Template, 10, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art12);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Staatliches&display=swap);@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@574&display=swap);.categoria[_ngcontent-%COMP%]{ \r\n    margin-left:-15px;\r\n    margin-top:-10px;\r\n    color:orange;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    margin-bottom: 15px;\r\n    \r\n  \r\n  }\r\n \r\n.titulo[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 700;\r\n  line-height: 25px; \r\n  letter-spacing: -1px;\r\n  margin-top:-10px;\r\n  margin-left:-15px;\r\n  color:rgb(68, 68, 68);\r\n  font-size: 25px;\r\n}\r\na[_ngcontent-%COMP%]{  color:rgb(68, 68, 68); text-decoration: none;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:-10px; font-size: 18px; font-family: 'Roboto', sans-serif; line-height: 26px; font-weight: 600;}\r\n\r\n   \r\n.card[_ngcontent-%COMP%]{border:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJ0aWN1bG8tcmVsYWNpb25hZG8vYXJ0aWN1bG8tcmVsYWNpb25hZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1COzs7RUFHckI7O0FBRUY7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBLElBQUkscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7QUFDakQsV0FBVyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUNBQWlDLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7OztBQUdySCxNQUFNLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZmFtaWx5PVN0YWF0bGljaGVzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDU3NCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jYXRlZ29yaWF7IFxyXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiBcclxuLnRpdHVsb3tcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbWFyZ2luLXRvcDotMTBweDtcclxuICBtYXJnaW4tbGVmdDotMTVweDtcclxuICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmF7ICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbi5zdWJ0aXR1bG97bWFyZ2luLXRvcDotMTBweDsgZm9udC1zaXplOiAxOHB4OyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IGxpbmUtaGVpZ2h0OiAyNnB4OyBmb250LXdlaWdodDogNjAwO31cclxuXHJcbiAgIFxyXG4uY2FyZHtib3JkZXI6bm9uZX1cclxuIFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3936:
/*!************************************************************!*\
  !*** ./src/app/componentes/articulo/articulo.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticuloComponent": () => (/* binding */ ArticuloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app//servicios/crud.service */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel-revista/carousel-revista.component */ 6639);
/* harmony import */ var _articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articulo-relacionado/articulo-relacionado.component */ 2131);
/* harmony import */ var _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comentarios/comentarios.component */ 4928);
/* harmony import */ var _lateral_intercalado_lateral_intercalado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lateral-intercalado/lateral-intercalado.component */ 1979);
/* harmony import */ var _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer-card/footer-card.component */ 2944);
/* harmony import */ var _pipes_sanetizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/sanetizer.pipe */ 3315);











function ArticuloComponent_app_lateral_intercalado_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-lateral-intercalado", 40);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.dataRelacionado)("anuncios", ctx_r0.publi)("estado", false);
  }
}
function ArticuloComponent_hr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "hr");
  }
}
function ArticuloComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-articulo-relacionado", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r2.nota[0]);
  }
}
class ArticuloComponent {
  constructor(ruta, crudService, location, _platformId) {
    this.ruta = ruta;
    this.crudService = crudService;
    this.location = location;
    this._platformId = _platformId;
    this.loader2 = false;
    this.auxContador = 0;
  }
  ngOnInit() {
    this.ruta.data.subscribe(data => {
      this.nota = Object.entries(data).map(i => i[1]);
      this.crudService.unArticulo = this.nota[0];
      var aux = Number(this.crudService.unArticulo.vistas);
      var aux2 = aux + 1;
      this.crudService.unArticulo.vistas = aux2;
      this.pedirPubli();
      console.log(this.nota, 'primero');
      if (this.nota[0].art1) {
        this.dataRelacionado = this.nota[0];
        this.loader2 = true;
      } else {
        this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res => {
          var aux = res;
          this.dataRelacionado = this.randomNoRepeat(aux);
          this.loader2 = true;
        });
      }
    });
    // this.crudService.getCategorias(this.crudService.unArticulo.categoria).subscribe(res=>{
    //   var aux = res     
    //   this.dataRelacionado2 = this.randomNoRepeat(res);  
    //   this.loader2=true});
  }

  randomNoRepeat(arr) {
    console.log(arr);
    let newArr = [];
    while (arr.length > 0) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomElement = arr[randomIndex];
      newArr.push(randomElement);
      arr.splice(randomIndex, 1);
    }
    return newArr;
  }
  pedirArticulos() {
    // const resultPost =  [];
    this.crudService.getArticulos2().subscribe(res => {
      this.articulos = res; // guardo resultados de la peticion en variable productos del este componente.
      this.articulos2 = this.articulos;
      console.log(this.articulos);
      // for(const post of this.articulos){
      //      var aux = post?.categoria
      //   if (aux?.indexOf('revista'.toLowerCase()) > -1)
      //      {                  
      //    resultPost.push(post) 
      //    this.articulos = resultPost          
      //    }    
      //  }
    }); //fin de subscribe
  } //
  pedirPubli() {
    this.crudService.getAnuncios().subscribe(res => {
      this.publi = res;
    });
  }
  subir() {
    window.scroll(0, 0);
  }
  alerta() {
    alert('en contrucción');
  }
  saltos2(data) {
    var aux2 = data.split('<h2 style="margin-left:0px;text-align:justify;">').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
   `);
    aux2 = aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
   line-height: 32px;
   letter-spacing: -1px;
   font-size:25px!important;
   color:orange;
   margin-bottom:15px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    `);
    aux2 = aux2 = data.split('<figcaption>').join(`<figcaption style="  
         
    font-size:15px!important;
    margin-bottom:15px;
    text-align:center!important;
    color:rgb(68, 68, 68);
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
     `);
    aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
   line-height: 30px;
   letter-spacing: 0px;
   font-size:22px;
   color:orange;
   margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`);
    aux2 = aux2.split('<p').join(`<p style="
                                    font-weight: 400;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 28px;
                                    color:rgb(68, 68, 68);
                                    text-align:justify;  
                           text-justify:inter-character;
                                    "`);
    // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
    // aux2 = aux2.split('</p></strong>').join('</p></b>')
    // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
    aux2 = aux2.split('<img').join('<img style="width:100%!important; margin-top:10px; margin-bottom:10px"');
    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/');
    aux2 = aux2.split(' ,').join(', ');
    aux2 = aux2.split(' .').join('. ');
    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="');
    aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;">');
    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    aux2 = aux2.split('<a ').join('<a target="_blank"');
    aux2 = aux2.split('style="margin-left:0px;text-align:center;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"');
    aux2 = aux2.split('style="text-align:center!important;"').join('style="text-align:center!important; font-size:15px!important; margin-top:-10px!important; margin-bottom:30px!important;"');
    aux2 = aux2.split('<figure ').join('<figure style="width:100%!important" ');
    // aux2 = aux2.split('').join('style=""')
    // text-align:center;"><strong>
    // aux2 = aux2.split('<strong>').join('<strong style="font-size:16px;line-height: 0px!important; ">')
    // aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>')
    // aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
    // aux2 = aux2.split('ng">').join('ng"></a>')
    // aux2 = aux2.split('pg">').join('pg"></a>')
    // console.log('sa' + aux2)
    // console.log(aux2)
    return aux2;
  }
  cut(value) {
    var corte = value.slice(2);
    return corte;
  }
  // sumarContador() {
  //   //incrementa el contador
  //   this.crudService.unArticulo.contadorComentarios = this.nota[0]?.contadorComentarios
  //   this.crudService.unArticulo.correos = this.nota[0]?.correos
  //   this.crudService.unArticulo.comentarios = this.nota[0]?.comentarios
  //   this.crudService.unArticulo.vistas = this.auxContador + 1
  //   this.crudService.unArticulo.imagen1 = this.nota[0]?.imagen1
  //   this.crudService.unArticulo.imagen2 = this.nota[0]?.imagen2
  //   this.crudService.unArticulo.imagen3 = this.nota[0]?.imagen3
  //   this.crudService.unArticulo.categoria = this.nota[0]?.categoria;
  //   this.crudService.unArticulo.fecha = this.nota[0]?.fecha;
  //   this.crudService.unArticulo.fechaMod = this.nota[0]?.fechaMod;
  //   this.crudService.unArticulo.autor = this.nota[0]?.autor
  //   this.crudService.unArticulo.fotografia = this.nota[0]?.fotografia
  //   this.crudService.unArticulo.edicionFotografia = this.nota[0]?.edicionFotografia
  //   this.crudService.unArticulo.nota = this.nota[0]?.nota
  //   this.crudService.unArticulo._id = this.nota[0]?._id
  //   this.crudService.unArticulo.categoria = this.nota[0]?.categoria
  //   this.crudService.unArticulo.titulo = this.nota[0]?.titulo
  //   this.crudService.unArticulo.tituloAlt = this.nota[0]?.tituloAlt
  //   this.crudService.unArticulo.subtitulo = this.nota[0]?.subtitulo
  //   this.crudService.unArticulo.posicion = this.nota[0]?.posicion
  //   this.crudService.unArticulo.art1 = this.nota[0]?.art1
  //   this.crudService.unArticulo.art2 = this.nota[0]?.art2
  //   this.crudService.unArticulo.art3 = this.nota[0]?.art3
  //   this.crudService.unArticulo.art4 = this.nota[0]?.art4
  //   this.crudService.unArticulo.art5 = this.nota[0]?.art5
  //   this.crudService.unArticulo.art6 = this.nota[0]?.art6
  //   this.crudService.unArticulo.art7 = this.nota[0]?.art7
  //   this.crudService.unArticulo.art8 = this.nota[0]?.art8
  //   this.crudService.unArticulo.art9 = this.nota[0]?.art9
  //   this.crudService.unArticulo.art10 = this.nota[0]?.art10
  //   this.crudService.unArticulo.art11 = this.nota[0]?.art11
  //   this.crudService.unArticulo.art12 = this.nota[0]?.art12
  //   this.crudService.unArticulo.fecha = this.nota[0]?.fecha
  //   this.crudService.unArticulo.resultadoCategoria = this.nota[0]?.resultadoCategoria
  //   this.crudService.unArticulo.resultadoCategoria2 = this.nota[0]?.resultadoCategoria2
  //   this.crudService.unArticulo.resultadoCategoria3 = this.nota[0]?.resultadoCategoria3
  //   this.crudService.unArticulo.resultadoCategoria4 = this.nota[0]?.resultadoCategoria4
  //   this.crudService.unArticulo.resultadoCategoria5 = this.nota[0]?.resultadoCategoria5
  //   this.crudService.unArticulo.resultadoCategoria6 = this.nota[0]?.resultadoCategoria6
  //   this.crudService.unArticulo.resultadoCategoria7 = this.nota[0]?.resultadoCategoria7
  //   this.crudService.unArticulo.resultadoCategoria8 = this.nota[0]?.resultadoCategoria8
  //   this.crudService.unArticulo.resultadoCategoria9 = this.nota[0]?.resultadoCategoria9
  //   this.crudService.unArticulo.resultadoCategoria10 = this.nota[0]?.resultadoCategoria10
  //   this.crudService.unArticulo.resultadoCategoria11 = this.nota[0]?.resultadoCategoria11
  //   this.crudService.unArticulo.resultadoCategoria12 = this.nota[0]?.resultadoCategoria12
  //   this.crudService.unArticulo.resultadoImagen = this.nota[0]?.resultadoImagen
  //   this.crudService.unArticulo.resultadoImagen2 = this.nota[0]?.resultadoImagen2
  //   this.crudService.unArticulo.resultadoImagen3 = this.nota[0]?.resultadoImagen3
  //   this.crudService.unArticulo.resultadoImagen4 = this.nota[0]?.resultadoImagen4
  //   this.crudService.unArticulo.resultadoImagen5 = this.nota[0]?.resultadoImagen5
  //   this.crudService.unArticulo.resultadoImagen6 = this.nota[0]?.resultadoImagen6
  //   this.crudService.unArticulo.resultadoImagen7 = this.nota[0]?.resultadoImagen7
  //   this.crudService.unArticulo.resultadoImagen8 = this.nota[0]?.resultadoImagen8
  //   this.crudService.unArticulo.resultadoImagen9 = this.nota[0]?.resultadoImagen9
  //   this.crudService.unArticulo.resultadoImagen10 = this.nota[0]?.resultadoImagen10
  //   this.crudService.unArticulo.resultadoImagen11 = this.nota[0]?.resultadoImagen11
  //   this.crudService.unArticulo.resultadoImagen12 = this.nota[0]?.resultadoImagen12
  //   this.crudService.unArticulo.resultadoID = this.nota[0]?.resultadoID
  //   this.crudService.unArticulo.resultadoID2 = this.nota[0]?.resultadoID2
  //   this.crudService.unArticulo.resultadoID3 = this.nota[0]?.resultadoID3
  //   this.crudService.unArticulo.resultadoID4 = this.nota[0]?.resultadoID4
  //   this.crudService.unArticulo.resultadoID5 = this.nota[0]?.resultadoID5
  //   this.crudService.unArticulo.resultadoID6 = this.nota[0]?.resultadoID6
  //   this.crudService.unArticulo.resultadoID7 = this.nota[0]?.resultadoID7
  //   this.crudService.unArticulo.resultadoID8 = this.nota[0]?.resultadoID8
  //   this.crudService.unArticulo.resultadoID9 = this.nota[0]?.resultadoID9
  //   this.crudService.unArticulo.resultadoID10 = this.nota[0]?.resultadoID10
  //   this.crudService.unArticulo.resultadoID11 = this.nota[0]?.resultadoID11
  //   this.crudService.unArticulo.resultadoID12 = this.nota[0]?.resultadoID12
  //   // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
  //   this.crudService.modificarArticulo(this.crudService.unArticulo)
  //     .subscribe(res => { console.log(res) })
  // }
  ngOnDestroy() {}
}
ArticuloComponent.ɵfac = function ArticuloComponent_Factory(t) {
  return new (t || ArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID));
};
ArticuloComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ArticuloComponent,
  selectors: [["app-articulo"]],
  decls: 69,
  vars: 11,
  consts: [["id", "head", 1, "margenL", "margenR", "cuadroTotal"], [1, "row", "colorFondo", "margenMobile", 2, "margin-left", "-1px", "margin-right", "-1px", "margin-top", "-24px"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", 2, "margin-bottom", "-9px"], [1, "mar"], [1, "categoria"], [1, "titulo"], [1, "subtitulo"], [3, "data"], [2, "margin-left", "10px", "margin-right", "10px", "margin-top", "-20px"], [1, "nota", 3, "innerHTML"], [1, "btn", "btn-dark", 2, "border-radius", "100px", "margin-bottom", "20px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up-circle-fill"], ["d", "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"], [1, "quitar600", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", 2, "background-color", "rgb(255, 255, 255)"], [2, "margin-top", "10px"], [3, "data", "anuncios", "estado", 4, "ngIf"], [4, "ngIf"], ["id", "content"], [2, "background-color", "white", "margin-top", "20px"], [2, "margin-left", "-10px", "margin-right", "10px", "margin-top", "30px"], [2, "background-color", "white", "/* height", "100%\n         \n         margin-left:0px", "margin-top", "-70px\n         /* margin-bottom: -30px", "*/\n         background-repeat", "no-repeat", "background-size", "100%", "background-position", "bottom", "background-image", "url('../../../assets/articulotFooter.png')"], [1, "flex-container", "quitar600", 2, "text-align", "center", "margin-top", "-100px"], [1, "flex-items"], [2, "text-align", "left"], ["src", "../../../assets/LogoCCAM_Entero.png", "alt", "", 1, "logoCCAMFooter"], [1, "flex-items;", "quitar2", 2, "margin-top", "276px", "min-width", "450px"], [2, "text-align", "left", "margin-left", "10px"], ["href", "mailto:info@culturademontania.org.ar", 2, "color", "orange"], [2, "color", "white", "font-size", "18px", "color", "orange"], [2, "color", "white", "font-size", "18px", "margin-top", "-20px", "color", "orange"], ["href", "https://www.instagram.com/ccam_arg/", "target", "_blank", 2, "color", "orange"], [2, "color", "white", "font-size", "18px", "margin-top", "-22px", "color", "orange"], ["href", "https://www.facebook.com/ccamontania/", "target", "_blank", 2, "color", "orange"], [1, "flex-items", 2, "align-text", "left", "margin-top", "370px"], ["src", "../../../assets/logonm.png", "alt", "", 2, "width", "150px", "margin-top", "-124px", "margin-left", "-40px"], [1, "flex-items", 2, "margin-top", "284px"], [2, "color", "white", "font-size", "20px"], [2, "color", "white", "font-size", "20px", "margin-top", "-21px"], [1, "poner600"], [2, "border-bottom", "20px solid rgb(51, 51, 51)", "margin-top", "-25px"], [3, "data", "anuncios", "estado"]],
  template: function ArticuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div")(5, "div", 3)(6, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-footer-card", 7)(13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "sanetizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArticuloComponent_Template_button_click_19_listener() {
        return ctx.subir();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Subir ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13)(25, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ArticuloComponent_app_lateral_intercalado_26_Template, 1, 3, "app-lateral-intercalado", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ArticuloComponent_hr_27_Template, 1, 0, "hr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "app-comentarios", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ArticuloComponent_div_31_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 18)(33, "div")(34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "app-carousel-revista");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 25)(42, "div", 26)(43, "a", 27)(44, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Mail: info@culturademontania.org.ar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "WhatsApp: (+54-011) 15-3093-9814");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "a", 30)(49, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Instagram: @ccam_arg");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "a", 32)(52, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "www.facebook.com/ccamontania ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 33)(55, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 35)(58, "div", 23)(59, "p", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Cont\u00E1ctate y comenz\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "la aventura de integrarte");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "a la red cultural");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].subtitulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.nota[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 9, ctx.saltos2(ctx.nota[0] == null ? null : ctx.nota[0].nota)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.nota);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.nota[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.nota);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__.CarouselRevistaComponent, _articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_2__.ArticuloRelacionadoComponent, _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_3__.ComentariosComponent, _lateral_intercalado_lateral_intercalado_component__WEBPACK_IMPORTED_MODULE_4__.LateralIntercaladoComponent, _footer_card_footer_card_component__WEBPACK_IMPORTED_MODULE_5__.FooterCardComponent, _pipes_sanetizer_pipe__WEBPACK_IMPORTED_MODULE_6__.SanetizerPipe],
  styles: [".poner600[_ngcontent-%COMP%]{display:none}\r\n \r\n.flex-container[_ngcontent-%COMP%] {\r\n display: flex;\r\n flex-direction: row;\r\n flex-wrap: nowrap;\r\n justify-content: normal;\r\n align-items: normal;\r\n align-content: normal;\r\n}\r\n\r\n.edicionesAnteriores[_ngcontent-%COMP%]{\r\n margin-left: -10px;margin-right: -10px; padding-left:15px; \r\n          margin-top:20px;\r\n          \r\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n   font-weight: 700;\r\n   line-height: 25px;\r\n   letter-spacing: -1px;\r\n   margin-top: -10px;\r\n   margin-bottom: -12px;\r\n   margin-left: 0px;\r\n   color: orange;\r\n   font-size: 25px;\r\n          \r\n}\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n display: block;\r\n flex-grow: 0;\r\n flex-shrink: 1;\r\n flex-basis: auto;\r\n align-self: auto;\r\n order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n display: block;\r\n flex-grow: 0;\r\n flex-shrink: 1;\r\n flex-basis: auto;\r\n align-self: auto;\r\n order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n display: block;\r\n flex-grow: 0;\r\n flex-shrink: 1;\r\n flex-basis: auto;\r\n align-self: auto;\r\n order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n display: block;\r\n flex-grow: 0;\r\n flex-shrink: 1;\r\n flex-basis: auto;\r\n align-self: auto;\r\n order: 0;\r\n}\r\n\r\n.cuadroTotal[_ngcontent-%COMP%]{\r\n border-left: 20px solid rgb(51, 51, 51);border-right: 20px solid rgb(51, 51, 51);\r\n}\r\n\r\nnota[_ngcontent-%COMP%]{font-size:16px}\r\n.categoria[_ngcontent-%COMP%]{ \r\n   color:rgb(243, 178, 0);\r\n   font-weight: 600;\r\n   font-size: 14px;\r\n   margin-top: 30px;\r\n   text-transform: uppercase; \r\n   }\r\n\r\n  .poner600[_ngcontent-%COMP%]{display:none}\r\n   \r\n.titulo[_ngcontent-%COMP%]{font-size:35px; \r\n font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n font-weight: 700;\r\n line-height: 42px; \r\n letter-spacing: -1px;\r\n margin-top:0px;\r\n color:rgb(68, 68, 68);\r\n margin-bottom: 10px;\r\n \r\n}\r\n\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n float: right;\r\n font-family: 'Source Serif Pro', serif;\r\n font-size: 60px;\r\n float: left;\r\n margin-top: 13px;\r\n margin-bottom: 0px;\r\n margin-right: 10px;\r\n line-height: 30px;\r\n color:orange;\r\n\r\n}\r\n.mar[_ngcontent-%COMP%]{margin-left:10px; margin-right:10px}\r\n.subtitulo[_ngcontent-%COMP%]{\r\n  font-family: Georgia, 'Times New Roman', Times, serif; \r\n font-weight: 600;\r\n margin-top:0px;\r\n font-size: 20px; \r\n line-height: 30px;\r\n color:rgb(68, 68, 68);\r\n   }\r\n\r\n .borde[_ngcontent-%COMP%]{border-right: 20px solid rgba(160, 160, 160, 0) ;}\r\n\r\n.colorFondo[_ngcontent-%COMP%]{background-color:rgb(255, 255, 255); }\r\n\r\n.sticky[_ngcontent-%COMP%]{position: sticky; top:0}\r\n\r\n\r\n.image-style-side[_ngcontent-%COMP%]{\r\n float:right;\r\n  padding:10px; \r\n }\r\n.hrMargen[_ngcontent-%COMP%]{ opacity: 0.3;}\r\n   \r\n.clasePrincipal[_ngcontent-%COMP%]{\r\n    \r\n   justify-content: left;\r\n   margin-left:0px; \r\n   margin-top:-0px; \r\n }\r\n\r\n.primerIcon[_ngcontent-%COMP%]{\r\n display:flex; \r\n align-items: flex-start; \r\n margin-top:-5px; \r\n margin-left:-10px; \r\n margin-right: 5px\r\n}\r\n.poner600[_ngcontent-%COMP%]{display:none}\r\n.logoCCAMFooter[_ngcontent-%COMP%]{\r\n width: 125px; margin-top: 268px;  margin-left: 125px; margin-right: 0px;\r\n}\r\n\r\n@media (max-width:600px)\r\n{\r\n .edicionesAnteriores[_ngcontent-%COMP%]{ \r\n   margin-bottom: -3px;\r\n   margin-left: -11px;\r\n }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width:520px)\r\n{\r\n.logoCCAMFooter[_ngcontent-%COMP%]{width: 100px; margin-top:19px;\r\nmargin-left:10px;\r\n}\r\n\r\n .quitar2[_ngcontent-%COMP%]{display:none}}\r\n\r\n@media (max-width:520px)\r\n{\r\n .quitar[_ngcontent-%COMP%]{display:none}\r\n}\r\n@media (max-width:800px)\r\n{\r\n\r\n .mar[_ngcontent-%COMP%]{margin-left:0px; margin-right:0px}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n .poner600[_ngcontent-%COMP%]{display:block}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n\r\nfont-size: 18px; \r\nline-height: 25px;\r\n\r\n  }\r\n\r\n .titulo[_ngcontent-%COMP%]{font-size:30px; \r\n       line-height: 35px; \r\n   \r\n }\r\n.categoria[_ngcontent-%COMP%]{ \r\n\r\n font-size: 12px;\r\n\r\n }\r\n .cuadroTotal[_ngcontent-%COMP%]{\r\n   border-left: 10px solid rgb(51, 51, 51);border-right: 10px solid rgb(51, 51, 51);\r\n }\r\n .margenMobile[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n   border:none;\r\n   padding-right: 0px;\r\n   margin-left:2px;\r\n   margin-top:-30px;\r\n}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJ0aWN1bG8vYXJ0aWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVSxZQUFZOztBQUV0QjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCO1VBQ2hELGVBQWU7O0dBRXRCLDREQUE0RDtHQUM1RCxnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQixpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLGdCQUFnQjtHQUNoQixhQUFhO0dBQ2IsZUFBZTs7QUFFbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsY0FBYztDQUNkLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsdUNBQXVDLENBQUMsd0NBQXdDO0FBQ2pGOztBQUVBLEtBQUssY0FBYztBQUNuQjtHQUNHLHNCQUFzQjtHQUN0QixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQix5QkFBeUI7R0FDekI7O0VBRUQsVUFBVSxZQUFZOztBQUV4QixRQUFRLGNBQWM7Q0FDckIsNERBQTREO0NBQzVELGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsbUJBQW1COztBQUVwQjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osc0NBQXNDO0NBQ3RDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLFlBQVk7O0FBRWI7QUFDQSxLQUFLLGdCQUFnQixFQUFFLGlCQUFpQjtBQUN4QztFQUNFLHFEQUFxRDtDQUN0RCxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIscUJBQXFCO0dBQ25COztDQUVGLE9BQU8sZ0RBQWdELENBQUM7O0FBRXpELFlBQVksbUNBQW1DLEVBQUU7O0FBRWpELFFBQVEsZ0JBQWdCLEVBQUUsS0FBSzs7O0FBRy9CO0NBQ0MsV0FBVztFQUNWLFlBQVk7Q0FDYjtBQUNELFdBQVcsWUFBWSxDQUFDOztBQUV4Qjs7R0FFRyxxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGVBQWU7Q0FDakI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakI7QUFDRDtBQUNBLFVBQVUsWUFBWTtBQUN0QjtDQUNDLFlBQVksRUFBRSxpQkFBaUIsR0FBRyxrQkFBa0IsRUFBRSxpQkFBaUI7QUFDeEU7O0FBRUE7O0NBRUM7R0FDRSxtQkFBbUI7R0FDbkIsa0JBQWtCO0NBQ3BCOztBQUVEOzs7OztBQUtBOztBQUVBLGdCQUFnQixZQUFZLEVBQUUsZUFBZTtBQUM3QyxnQkFBZ0I7QUFDaEI7O0NBRUMsU0FBUyxZQUFZLENBQUM7O0FBRXZCOztDQUVDLFFBQVEsWUFBWTtBQUNyQjtBQUNBOzs7Q0FHQyxLQUFLLGVBQWUsRUFBRSxnQkFBZ0I7QUFDdkMsV0FBVyxZQUFZO0NBQ3RCLFVBQVUsYUFBYTs7QUFFeEI7O0FBRUEsZUFBZTtBQUNmLGlCQUFpQjs7RUFFZjs7Q0FFRCxRQUFRLGNBQWM7T0FDaEIsaUJBQWlCOztDQUV2QjtBQUNEOztDQUVDLGVBQWU7O0NBRWY7Q0FDQTtHQUNFLHVDQUF1QyxDQUFDLHdDQUF3QztDQUNsRjtDQUNBO0VBQ0MsaUJBQWlCO0dBQ2hCLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLGdCQUFnQjtBQUNuQjs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxREciLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBvbmVyNjAwe2Rpc3BsYXk6bm9uZX1cclxuIFxyXG4uZmxleC1jb250YWluZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiBmbGV4LXdyYXA6IG5vd3JhcDtcclxuIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVkaWNpb25lc0FudGVyaW9yZXN7XHJcbiBtYXJnaW4tbGVmdDogLTEwcHg7bWFyZ2luLXJpZ2h0OiAtMTBweDsgcGFkZGluZy1sZWZ0OjE1cHg7IFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgXHJcbiAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIFxyXG59XHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgxKSB7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGZsZXgtZ3JvdzogMDtcclxuIGZsZXgtc2hyaW5rOiAxO1xyXG4gZmxleC1iYXNpczogYXV0bztcclxuIGFsaWduLXNlbGY6IGF1dG87XHJcbiBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gZmxleC1ncm93OiAwO1xyXG4gZmxleC1zaHJpbms6IDE7XHJcbiBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gYWxpZ24tc2VsZjogYXV0bztcclxuIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMykge1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbiBmbGV4LWdyb3c6IDA7XHJcbiBmbGV4LXNocmluazogMTtcclxuIGZsZXgtYmFzaXM6IGF1dG87XHJcbiBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCg0KSB7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGZsZXgtZ3JvdzogMDtcclxuIGZsZXgtc2hyaW5rOiAxO1xyXG4gZmxleC1iYXNpczogYXV0bztcclxuIGFsaWduLXNlbGY6IGF1dG87XHJcbiBvcmRlcjogMDtcclxufVxyXG5cclxuLmN1YWRyb1RvdGFse1xyXG4gYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgcmdiKDUxLCA1MSwgNTEpO2JvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbm5vdGF7Zm9udC1zaXplOjE2cHh9XHJcbi5jYXRlZ29yaWF7IFxyXG4gICBjb2xvcjpyZ2IoMjQzLCAxNzgsIDApO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gICB9XHJcblxyXG4gIC5wb25lcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAgIFxyXG4udGl0dWxve2ZvbnQtc2l6ZTozNXB4OyBcclxuIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiBsaW5lLWhlaWdodDogNDJweDsgXHJcbiBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuIG1hcmdpbi10b3A6MHB4O1xyXG4gY29sb3I6cmdiKDY4LCA2OCwgNjgpO1xyXG4gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIFxyXG59XHJcblxyXG4uY2FwaXRhbDo6Zmlyc3QtbGV0dGVyIHtcclxuXHJcbiBmbG9hdDogcmlnaHQ7XHJcbiBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcclxuIGZvbnQtc2l6ZTogNjBweDtcclxuIGZsb2F0OiBsZWZ0O1xyXG4gbWFyZ2luLXRvcDogMTNweDtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxuIG1hcmdpbi1yaWdodDogMTBweDtcclxuIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gY29sb3I6b3JhbmdlO1xyXG5cclxufVxyXG4ubWFye21hcmdpbi1sZWZ0OjEwcHg7IG1hcmdpbi1yaWdodDoxMHB4fVxyXG4uc3VidGl0dWxve1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcclxuIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiBtYXJnaW4tdG9wOjBweDtcclxuIGZvbnQtc2l6ZTogMjBweDsgXHJcbiBsaW5lLWhlaWdodDogMzBweDtcclxuIGNvbG9yOnJnYig2OCwgNjgsIDY4KTtcclxuICAgfVxyXG5cclxuIC5ib3JkZXtib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAwKSA7fVxyXG5cclxuLmNvbG9yRm9uZG97YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7IH1cclxuXHJcbi5zdGlja3l7cG9zaXRpb246IHN0aWNreTsgdG9wOjB9XHJcblxyXG5cclxuLmltYWdlLXN0eWxlLXNpZGV7XHJcbiBmbG9hdDpyaWdodDtcclxuICBwYWRkaW5nOjEwcHg7IFxyXG4gfVxyXG4uaHJNYXJnZW57IG9wYWNpdHk6IDAuMzt9XHJcbiAgIFxyXG4uY2xhc2VQcmluY2lwYWx7XHJcbiAgICBcclxuICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICBtYXJnaW4tbGVmdDowcHg7IFxyXG4gICBtYXJnaW4tdG9wOi0wcHg7IFxyXG4gfVxyXG5cclxuLnByaW1lckljb257XHJcbiBkaXNwbGF5OmZsZXg7IFxyXG4gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxyXG4gbWFyZ2luLXRvcDotNXB4OyBcclxuIG1hcmdpbi1sZWZ0Oi0xMHB4OyBcclxuIG1hcmdpbi1yaWdodDogNXB4XHJcbn1cclxuLnBvbmVyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLmxvZ29DQ0FNRm9vdGVye1xyXG4gd2lkdGg6IDEyNXB4OyBtYXJnaW4tdG9wOiAyNjhweDsgIG1hcmdpbi1sZWZ0OiAxMjVweDsgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KVxyXG57XHJcbiAuZWRpY2lvbmVzQW50ZXJpb3Jlc3sgXHJcbiAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtMTFweDtcclxuIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUyMHB4KVxyXG57XHJcbi5sb2dvQ0NBTUZvb3Rlcnt3aWR0aDogMTAwcHg7IG1hcmdpbi10b3A6MTlweDtcclxubWFyZ2luLWxlZnQ6MTBweDtcclxufVxyXG5cclxuIC5xdWl0YXIye2Rpc3BsYXk6bm9uZX19XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MjBweClcclxue1xyXG4gLnF1aXRhcntkaXNwbGF5Om5vbmV9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpXHJcbntcclxuXHJcbiAubWFye21hcmdpbi1sZWZ0OjBweDsgbWFyZ2luLXJpZ2h0OjBweH1cclxuLnF1aXRhcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAucG9uZXI2MDB7ZGlzcGxheTpibG9ja31cclxuXHJcbi5zdWJ0aXR1bG97XHJcblxyXG5mb250LXNpemU6IDE4cHg7IFxyXG5saW5lLWhlaWdodDogMjVweDtcclxuXHJcbiAgfVxyXG5cclxuIC50aXR1bG97Zm9udC1zaXplOjMwcHg7IFxyXG4gICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7IFxyXG4gICBcclxuIH1cclxuLmNhdGVnb3JpYXsgXHJcblxyXG4gZm9udC1zaXplOiAxMnB4O1xyXG5cclxuIH1cclxuIC5jdWFkcm9Ub3RhbHtcclxuICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDUxLCA1MSwgNTEpO2JvcmRlci1yaWdodDogMTBweCBzb2xpZCByZ2IoNTEsIDUxLCA1MSk7XHJcbiB9XHJcbiAubWFyZ2VuTW9iaWxle1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICBib3JkZXI6bm9uZTtcclxuICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICBtYXJnaW4tbGVmdDoycHg7XHJcbiAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbi8qIFxyXG4ubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfSBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MjY2NnB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAyNSU7IH0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjI0MDJweClcclxuey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMjQlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMjQlOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfSBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MjAwMHB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAxOCU7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAxOCU7IH0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjE4MDBweClcclxuey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMTUlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMTUlOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfSBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTQwMHB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiA4JTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDglOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDQlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogNCU7IH0gXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDAlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMCU7IH0gXHJcbn0gKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
;

/***/ }),

/***/ 3551:
/*!************************************************************!*\
  !*** ./src/app/componentes/b-indice/b-indice.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BIndiceComponent": () => (/* binding */ BIndiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class BIndiceComponent {
  constructor() {
    this.link = "";
    this.titulo = '';
    this.autor = "";
    this.descripcion = '';
    this.ruta = '';
  }
  ngOnInit() {
    console.log('barnder', this.data);
    this.cambioImagen1();
  }
  cambioImagen1() {
    this.descripcion = this.data?.resultadoCategoria;
    this.link = this.data?.resultadoImagen;
    this.titulo = this.data?.art1;
    this.ruta = this.data?.resultadoID;
  }
  cambioImagen2() {
    this.descripcion = this.data?.resultadoCategoria2;
    this.link = this.data?.resultadoImagen2;
    this.titulo = this.data?.art2;
    this.ruta = this.data?.resultadoID2;
  }
  cambioImagen3() {
    this.descripcion = this.data?.resultadoCategoria3;
    this.link = this.data?.resultadoImagen3;
    this.titulo = this.data?.art3;
    this.ruta = this.data?.resultadoID3;
  }
  cambioImagen4() {
    this.descripcion = this.data?.resultadoCategoria4;
    this.link = this.data?.resultadoImagen4;
    this.titulo = this.data?.art4;
    this.ruta = this.data?.resultadoID4;
  }
  cambioImagen5() {
    this.descripcion = this.data?.resultadoCategoria5;
    this.link = this.data?.resultadoImagen5;
    this.titulo = this.data?.art5;
    this.ruta = this.data?.resultadoID5;
  }
  cambioImagen6() {
    this.descripcion = this.data?.resultadoCategoria6;
    this.link = this.data?.resultadoImagen6;
    this.titulo = this.data?.art6;
    this.ruta = this.data?.resultadoID6;
  }
  cambioImagen7() {
    this.descripcion = this.data?.resultadoCategoria7;
    this.link = this.data?.resultadoImagen7;
    this.titulo = this.data?.art7;
    this.ruta = this.data?.resultadoID7;
  }
  cambioImagen8() {
    this.descripcion = this.data?.resultadoCategoria8;
    this.link = this.data?.resultadoImagen8;
    this.titulo = this.data?.art8;
    this.ruta = this.data?.resultadoID8;
  }
  goToLink(url) {
    window.open(url, "_blank");
  }
}
BIndiceComponent.ɵfac = function BIndiceComponent_Factory(t) {
  return new (t || BIndiceComponent)();
};
BIndiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BIndiceComponent,
  selectors: [["app-b-indice"]],
  inputs: {
    data: "data"
  },
  decls: 175,
  vars: 69,
  consts: [[1, "fondo"], [1, "indice", 2, "height", "30px", "background-color", "orange"], [1, "indice1", 2, "color", "white", "padding-left", "10px", "padding-top", "7px"], [1, "row", "quitar600"], [1, "col-6", "col-sm-0", 2, "transform", "rotate(-2deg)", "max-height", "800px", "min-height", "900px"], [2, "margin-left", "35px"], ["width", "100%", "alt", "", 1, "imagen", 2, "border-radius", "10px", 3, "src"], [1, "tituloBox", 2, "border-radius", "10px", "box-shadow", "1px 1px 2px black"], ["target", "_blank", 3, "routerLink"], [1, "titulo", "truncar3", 2, "font-size", "30px", "line-height", "35px", "color", "white", "margin-top", "10px", "text-shadow", "2px 2px 2px black", "padding-bottom", "0px", "margin-left", "-10px", "line-height", "35px", "margin-left", "0px"], [1, "descripcion", "truncar4", 2, "color", "black", "margin-top", "-2px"], [1, "col-6", 2, "margin-top", "0px!important"], [1, "row"], [1, "col-12", 2, "padding", "0px", "margin", "0px", "padding-left", "10px", "margin-top", "20px"], [1, "hov", "margenes", 2, "background-color", "orange", "box-shadow", "1px 1px 3px rgb(57, 57, 57)", 3, "mouseover"], ["target", "_blank", 3, "href"], [1, "titulo", 2, "margin-top", "15px", "margin-left", "10px", "padding-right", "10px"], [2, "padding-bottom", "10px", "margin-top", "-22px", "margin-left", "20px", "bottom", "10px", "color", "brown", "font-size", "15px", "margin-bottom", "20px"], ["target", "_blank", "target", "_blank", 3, "href"], [1, "titulo"], [1, "poner600", 2, "background-color", "black"], [1, "row", 2, "margin-top", "10px"], [1, "col-5"], [3, "routerLink"], ["width", "100%", "alt", "", "height", "160px", 1, "img", 3, "src"], [1, "col-7", 2, "border-radius", "10px", "background-color", "#ffa500", "padding", "0px", 3, "click"], [1, "titulo", "truncar3"], [2, "padding-left", "12px", "margin-top", "-4px", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-3px", "margin-left", "-3px"], ["d", "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [1, "col-7", 2, "border-radius", "10px", "background-color", "#ffa500", 3, "click"], [1, "titulo", 2, "margin-left", "0px"], [2, "margin-top", "-4px", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill"], [2, "width", "100%", "background-color", "orange", "margin-top", "10px", "margin-bottom", "10px", "border-radius", "10px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/suscripcion.html", "target", "_blank"], ["src", "../../../assets/banner Noticias.png", "width", "100%", "alt", ""], ["width", "100%", "alt", "", "height", "100%", 1, "img", 3, "src"], [1, "col-7", 2, "overflow", "hidden", "border-radius", "10px", "background-color", "#ffa500", 3, "click"], [2, "margin-top", "-p4x", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-1px"], ["width", "100%", "height", "100%", "alt", "", 1, "img", 3, "src"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-5px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-entrenamiento.html", "target", "_blank"], ["src", "../../../assets/otros.png", "width", "100%", "alt", ""], [2, "margin-top", "-10px", "font-size", "12px"], [1, "col-5", 2, "margin-bottom", "20px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-equipo.html", "target", "_blank"], ["src", "../../../assets/formarparte.png", "width", "100%", "alt", ""]],
  template: function BIndiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "INDICE - Abril - Nro. 149 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8)(11, "h1", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8)(14, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_21_listener() {
        return ctx.cambioImagen1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15)(23, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_27_listener() {
        return ctx.cambioImagen2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18)(29, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_33_listener() {
        return ctx.cambioImagen3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8)(35, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_39_listener() {
        return ctx.cambioImagen4();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8)(41, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_45_listener() {
        return ctx.cambioImagen5();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 8)(47, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_51_listener() {
        return ctx.cambioImagen6();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 8)(53, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_57_listener() {
        return ctx.cambioImagen7();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 8)(59, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_63_listener() {
        return ctx.cambioImagen8();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 8)(65, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20)(70, "div", 21)(71, "div", 22)(72, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_74_listener() {
        return ctx.cambioImagen1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 23)(76, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12)(83, "div", 22)(84, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_86_listener() {
        return ctx.cambioImagen2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 23)(88, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12)(95, "div", 22)(96, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_98_listener() {
        return ctx.cambioImagen3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 23)(100, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34)(107, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12)(110, "div", 22)(111, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_113_listener() {
        return ctx.cambioImagen4();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 23)(115, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "svg", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 12)(122, "div", 22)(123, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_125_listener() {
        return ctx.cambioImagen5();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 23)(127, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 12)(134, "div", 22)(135, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_137_listener() {
        return ctx.cambioImagen6();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 23)(139, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 34)(146, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 12)(149, "div", 22)(150, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_152_listener() {
        return ctx.cambioImagen7();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 23)(154, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h6", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 12)(161, "div", 46)(162, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_164_listener() {
        return ctx.cambioImagen8();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 23)(166, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h6", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 34)(173, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titulo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.descripcion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/articulo/", ctx.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art1, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/articulo/", ctx.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data == null ? null : ctx.data.art2, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art3, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Por: ", ctx.data == null ? null : ctx.data.autor8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.autor8, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Abel&family=Questrial&display=swap);@import url(https://fonts.googleapis.com/css2?family=Jost:wght@800&display=swap);\r\n\r\n   .indice[_ngcontent-%COMP%]{display:none}\r\n   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n    color: orange;\r\n\r\n  }\r\n  .categoria[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-size: 12px;\r\n    margin-top:10px;\r\n    margin-left:10px;\r\n    font-family: unset;\r\n\r\n  }\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n background-color: rgb(59, 52, 0)!important;\r\n background-image: url('fondoindex.png');\r\n   margin:20px; object-fit:cover;\r\n  margin-top: 0px;\r\n  height:100%\r\n}\r\n\r\n  .imagen[_ngcontent-%COMP%]{height: 500px; margin-top:50px; border: 20px solid orange ;object-fit: cover; }\r\n  .img[_ngcontent-%COMP%]{min-height: 125px; object-fit: cover;  border-radius: 10px!important;}\r\n\r\n  .tituloBox[_ngcontent-%COMP%]{background-color: orange;width:100%; margin-top:-28px; padding-left:15px}\r\n  .truncar3[_ngcontent-%COMP%] {\r\n\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    overflow-wrap: break-word;\r\n    overflow: hidden!important;\r\n\r\n    \r\n  }\r\n  .truncar4[_ngcontent-%COMP%] {\r\n\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    overflow-wrap: break-word;\r\n    overflow: hidden!important;\r\n    line-height: 100px;\r\n    \r\n  }\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n    font-size: 18px;\r\n    font-family: 'Questrial', sans-serif;\r\n    \r\n    font-weight: 800;\r\n    letter-spacing: 0px;\r\n    \r\n    padding-right: 10px;\r\n    line-height: 25px;\r\n    color:black;\r\n    margin-top:20px;\r\n    padding:8px;\r\n    margin-left:10px;\r\n\r\n  }\r\n\r\n  .indice1[_ngcontent-%COMP%]{\r\n  \r\n    margin-left: 10px;\r\n    font-family: 'Oswald', sans-serif;\r\n  text-transform: uppercase;\r\n    margin-bottom: 8px;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    color:white}\r\n  \r\n\r\n\r\n  \r\n\r\n  .margenes[_ngcontent-%COMP%]{\r\n    margin-right:30px; margin-left:20px;\r\n    border-radius: 5px;\r\n    cursor:pointer;\r\n    min-height:60px ;\r\n\r\n  }\r\na[_ngcontent-%COMP%]{text-decoration: none;}\r\n\r\n  .autor[_ngcontent-%COMP%] {\r\n\r\n    font-size: 12px;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-weight: 200;\r\n    letter-spacing: 0px;\r\n    color:black;\r\n    line-height: 24px;\r\n    margin-top:-40px;\r\n    padding:10px;\r\n    margin-left:4px;\r\n\r\n  }\r\n\r\n.descripcion[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 400;\r\n  letter-spacing: 0px;\r\n  color:rgb(70, 53, 0);\r\n  line-height: 24px;\r\n  margin-top:-15px;\r\n  padding-left:10px;\r\n  padding-right:10px;\r\n\r\n\r\n}\r\n  .marg[_ngcontent-%COMP%]{\r\n    margin-top: -15px;\r\n    font-size: 100px;}\r\n\r\n.tituloMargen[_ngcontent-%COMP%]{\r\n  margin-top:40px!important;\r\n  }\r\n\r\n.row[_ngcontent-%COMP%]{padding:10px; padding-left:0px}\r\n\r\n  .poner600[_ngcontent-%COMP%]{display:none}\r\n\r\n\r\n\r\n  @media (max-width:700px){\r\n      .fondo[_ngcontent-%COMP%]{background-image: none;}}\r\n      @media (max-width:600px){\r\n        .indice[_ngcontent-%COMP%]{display:inline;}}\r\n\r\n\r\n\r\n\r\n\r\n  @media (max-width:700px){\r\n\r\n    p[_ngcontent-%COMP%]{font-size:10px}\r\n    .titulo[_ngcontent-%COMP%] {\r\n\r\n      font-family:'Jost', sans-serif;\r\n      font-size: 25px;\r\n      letter-spacing: -1px;\r\n      \r\n\r\n      line-height: 25px;\r\n      color:rgb(255, 255, 255);\r\n\r\n      padding:12px;\r\n      border-radius:4px;\r\n      margin-top:10px;\r\n      padding:0px;\r\n      padding-right: 5px;\r\n      font-weight: 800;\r\n\r\n    }\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n\r\n  background-color: rgba(82, 55, 0, 0);\r\n  height:100%;\r\n\r\n}\r\n\r\n    .row[_ngcontent-%COMP%]{margin:0px}\r\n    .col[_ngcontent-%COMP%]{padding:0px}\r\n\r\n\r\n\r\n\r\n\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  .img[_ngcontent-%COMP%]{border-radius: 2px;}\r\n  .poner600[_ngcontent-%COMP%]{display:inline-block; }\r\n  .imagen[_ngcontent-%COMP%]{width: 200px;}\r\n  .fondo[_ngcontent-%COMP%] {margin:0px}\r\n\r\n  .margenes[_ngcontent-%COMP%]{\r\n    margin-right:10px; margin-left:10px;\r\n    }\r\n\r\n\r\n\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYi1pbmRpY2UvYi1pbmRpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7OztNQU9NOztHQUVILFFBQVEsWUFBWTtHQUNwQjs7SUFFQyxhQUFhOztFQUVmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOztFQUVwQjs7QUFFRjtDQUNDLDBDQUEwQztDQUMxQyx1Q0FBdUQ7R0FDckQsV0FBVyxFQUFFLGdCQUFnQjtFQUM5QixlQUFlO0VBQ2Y7QUFDRjs7RUFFRSxRQUFRLGFBQWEsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsaUJBQWlCLEVBQUU7RUFDdEYsS0FBSyxpQkFBaUIsRUFBRSxpQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQzs7RUFFMUUsV0FBVyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCO0VBQ25GOztJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7O0lBRTFCLDREQUE0RDtFQUM5RDtFQUNBOztJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDREQUE0RDtFQUM5RDtBQUNGOztJQUVJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCOztFQUVsQjs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DLHlCQUF5QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXOzs7O0VBSWI7Ozs7O0tBS0c7O0VBRUg7SUFDRSxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7O0VBRWxCO0FBQ0YsRUFBRSxxQkFBcUIsQ0FBQzs7RUFFdEI7O0lBRUUsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7QUFFRjtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCOzs7QUFHcEI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQzs7QUFFckI7RUFDRSx5QkFBeUI7RUFDekI7O0FBRUYsS0FBSyxZQUFZLEVBQUUsZ0JBQWdCOztFQUVqQyxVQUFVLFlBQVk7Ozs7RUFJdEI7TUFDSSxPQUFPLHNCQUFzQixDQUFDLENBQUM7TUFDL0I7UUFDRSxRQUFRLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7RUFNOUI7O0lBRUUsRUFBRSxjQUFjO0lBQ2hCOztNQUVFLDhCQUE4QjtNQUM5QixlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLHlCQUF5Qjs7TUFFekIsaUJBQWlCO01BQ2pCLHdCQUF3Qjs7TUFFeEIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixnQkFBZ0I7O0lBRWxCOzs7QUFHSjs7RUFFRSxvQ0FBb0M7RUFDcEMsV0FBVzs7QUFFYjs7SUFFSSxLQUFLLFVBQVU7SUFDZixLQUFLLFdBQVc7Ozs7OztFQU1sQixXQUFXLFlBQVk7RUFDdkIsS0FBSyxrQkFBa0IsQ0FBQztFQUN4QixVQUFVLG9CQUFvQixFQUFFO0VBQ2hDLFFBQVEsWUFBWSxDQUFDO0VBQ3JCLFFBQVEsVUFBVTs7RUFFbEI7SUFDRSxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkM7Ozs7O0VBS0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYmVsJmZhbWlseT1RdWVzdHJpYWwmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xyXG4vKiAuaG92IDpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBtaW4taGVpZ2h0OjYwcHggO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcclxuXHJcbiAgIH0gKi9cclxuXHJcbiAgIC5pbmRpY2V7ZGlzcGxheTpub25lfVxyXG4gICBhIDphY3RpdmUge1xyXG5cclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcblxyXG4gIH1cclxuICAuY2F0ZWdvcmlhe1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldDtcclxuXHJcbiAgfVxyXG5cclxuLmZvbmRve1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1MiwgMCkhaW1wb3J0YW50O1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9uZG9pbmRleC5wbmcnKTtcclxuICAgbWFyZ2luOjIwcHg7IG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGhlaWdodDoxMDAlXHJcbn1cclxuXHJcbiAgLmltYWdlbntoZWlnaHQ6IDUwMHB4OyBtYXJnaW4tdG9wOjUwcHg7IGJvcmRlcjogMjBweCBzb2xpZCBvcmFuZ2UgO29iamVjdC1maXQ6IGNvdmVyOyB9XHJcbiAgLmltZ3ttaW4taGVpZ2h0OiAxMjVweDsgb2JqZWN0LWZpdDogY292ZXI7ICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDt9XHJcblxyXG4gIC50aXR1bG9Cb3h7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO3dpZHRoOjEwMCU7IG1hcmdpbi10b3A6LTI4cHg7IHBhZGRpbmctbGVmdDoxNXB4fVxyXG4gIC50cnVuY2FyMyB7XHJcblxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xyXG5cclxuICAgIC8qc2kgbm8gc2UgZGVjbGFyYSBhw4PCsWFkZSBsb3MgLi4uIHBlcm8gbXVlc3RyYSB0b2RvIGVsIHRleHRvKi9cclxuICB9XHJcbiAgLnRydW5jYXI0IHtcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICAvKnNpIG5vIHNlIGRlY2xhcmEgYcODwrFhZGUgbG9zIC4uLiBwZXJvIG11ZXN0cmEgdG9kbyBlbCB0ZXh0byovXHJcbiAgfVxyXG4udGl0dWxvIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byBib2xkJywgc2Fucy1zZXJpZjsgICovXHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIC8qIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCBibGFjazsgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5pbmRpY2Uxe1xyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjp3aGl0ZX1cclxuICBcclxuXHJcblxyXG4gIC8qIC50aXR1bG8gOmhvdmVyIHtcclxuXHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcblxyXG5cclxuICB9ICovXHJcblxyXG4gIC5tYXJnZW5lc3tcclxuICAgIG1hcmdpbi1yaWdodDozMHB4OyBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OjYwcHggO1xyXG5cclxuICB9XHJcbmF7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuXHJcbiAgLmF1dG9yIHtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDotNDBweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjRweDtcclxuXHJcbiAgfVxyXG5cclxuLmRlc2NyaXBjaW9ue1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjpyZ2IoNzAsIDUzLCAwKTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuXHJcblxyXG59XHJcbiAgLm1hcmd7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7fVxyXG5cclxuLnRpdHVsb01hcmdlbntcclxuICBtYXJnaW4tdG9wOjQwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5yb3d7cGFkZGluZzoxMHB4OyBwYWRkaW5nLWxlZnQ6MHB4fVxyXG5cclxuICAucG9uZXI2MDB7ZGlzcGxheTpub25lfVxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuICAgICAgLmZvbmRve2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7fX1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgICAgIC5pbmRpY2V7ZGlzcGxheTppbmxpbmU7fX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICBwe2ZvbnQtc2l6ZToxMHB4fVxyXG4gICAgLnRpdHVsbyB7XHJcblxyXG4gICAgICBmb250LWZhbWlseTonSm9zdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgIC8qIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXHJcblxyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4uZm9uZG97XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDU1LCAwLCAwKTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuXHJcbiAgICAucm93e21hcmdpbjowcHh9XHJcbiAgICAuY29se3BhZGRpbmc6MHB4fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLnF1aXRhcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAgLmltZ3tib3JkZXItcmFkaXVzOiAycHg7fVxyXG4gIC5wb25lcjYwMHtkaXNwbGF5OmlubGluZS1ibG9jazsgfVxyXG4gIC5pbWFnZW57d2lkdGg6IDIwMHB4O31cclxuICAuZm9uZG8ge21hcmdpbjowcHh9XHJcblxyXG4gIC5tYXJnZW5lc3tcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4OyBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3164:
/*!******************************************************************!*\
  !*** ./src/app/componentes/barra-negra/barra-negra.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarraNegraComponent": () => (/* binding */ BarraNegraComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class BarraNegraComponent {
  constructor() {
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.buscarMensaje = "";
    this.claseAnima = false;
    this.estado = false;
    this.color = "rgb(33,33,33)";
  }
  ngOnInit() {}
}
BarraNegraComponent.ɵfac = function BarraNegraComponent_Factory(t) {
  return new (t || BarraNegraComponent)();
};
BarraNegraComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BarraNegraComponent,
  selectors: [["app-barra-negra"]],
  decls: 26,
  vars: 0,
  consts: [[1, "barra"], [1, "flex-container"], [1, "top", "acomoda600"], ["routerLink", "../", 1, "suscribirse"], ["href", "https://www.culturademontania.org.ar/Suscripcion-form/suscripcion.html", "target", "_blank"], [1, "contactar"], [1, "quitar675", 2, "margin-top", "-4px"], ["href", "https://www.culturademontania.org.ar/quiensomos/2.htm", "target", "_blank"], [1, "margenL", "quienesSomos"], [1, "margenL", "formarParte"], [1, "redes"], ["href", "https://www.youtube.com/c/CentroCulturalArgentinodeMonta%C3%B1a", "target", "_blank"], ["src", "../../../assets/fa_youtube.png", "alt", "", "width", "18px", 2, "margin-right", "3px", "margin-top", "-4px"], ["href", "https://www.instagram.com/ccam_arg/?hl=es-la", "target", "_blank"], ["src", "../../../assets/icoInsta.png", "alt", "", "width", "29px", 2, "margin-top", "-4px", "margin-right", "2px"], ["href", "https://web.facebook.com/ccamontania", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-facebook", 2, "margin-right", "-4px", "margin-top", "-4px"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"]],
  template: function BarraNegraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "h4", 2)(4, "a")(5, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "INICIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " |");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4)(10, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SUBSCRIBIRSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "a", 7)(14, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u2709 \u00BFQUI\u00C9NES SOMOS?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "- CENTRO CULTURAL ARGENTINO DE MONTA\u00D1A -");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);.barra[_ngcontent-%COMP%]{\r\n    background-color: #2c2c2c;\r\n    height: 40px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{color:orange}\r\n\r\n.margen[_ngcontent-%COMP%]{margin-left:0px; margin-right: 20px;}\r\n\r\n.barraTexto[_ngcontent-%COMP%]{\r\n    color:white ;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    padding-left:4px;\r\n    padding-top: 5px;\r\n    padding-right:4px\r\n}\r\n\r\n.top[_ngcontent-%COMP%]{margin-top: 3px;}\r\n\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 15px;\r\n    outline: none;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    margin-left: 20px;\r\n    \r\n    \r\n  }\r\n\r\n  .suscribirse[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:aliceblue\r\n\r\n }\r\n\r\n .suscribirse[_ngcontent-%COMP%]:active{\r\n    background: rgb(54, 54, 54);; border-radius: 10%;\r\n    text-shadow: 1px 2px 4px black;\r\n    color:black\r\n}\r\n.contactar[_ngcontent-%COMP%]{cursor: pointer;\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 15px;    \r\n    outline: none;\r\n    margin-top:9px;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .contactar[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:aliceblue\r\n }\r\n\r\n .contactar[_ngcontent-%COMP%]:active{\r\n  background: rgb(54, 54, 54);; border-radius: 10%;\r\n  text-shadow: 1px 2px 4px black;\r\n  color:black\r\n}\r\n .quienesSomos[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n  letter-spacing: 1px;;\r\n    left:-128px;\r\n    top:10px;\r\n    color:rgb(255, 255, 255);\r\n    position: absolute;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n     }\r\n\r\n     .quienesSomos[_ngcontent-%COMP%]:hover{\r\n      \r\n        background: rgb(54, 54, 54); border-radius: 10%;\r\n        text-shadow: 1px 1px 4px gray;\r\n        color:orange\r\n     }\r\n     .quienesSomos[_ngcontent-%COMP%]:active{\r\n        background: rgb(54, 54, 54); border-radius: 10%;\r\n        text-shadow: 1px 1px 4px gray;\r\n        color:black\r\n     }\r\n\r\n     .redes[_ngcontent-%COMP%]{margin-top:6px ; margin-right: 28px}\r\n\r\n     \r\n\r\n .formarParte[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  \r\n  letter-spacing: 1px;;\r\n  top:10px;\r\n    left:68px;\r\n    color:rgb(255, 255, 255);\r\n    position: absolute;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n    }\r\n\r\n    \r\n\r\n .formarParte[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:orange\r\n\r\n }\r\n\r\n .formarParte[_ngcontent-%COMP%]:active{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:black\r\n }\r\n\r\n\r\n  .margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n\r\n\r\n  a[_ngcontent-%COMP%]{\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 13px;}\r\n\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: nowrap;\r\n                justify-content: space-between;\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              @media (max-width: 600px)\r\n              {\r\n                .acomoda600[_ngcontent-%COMP%]{margin-top: 0px;}\r\n                .suscribirse[_ngcontent-%COMP%]{margin-left: 10px!important;}\r\n                .top[_ngcontent-%COMP%]{margin-top: 3px; }\r\n                .redes[_ngcontent-%COMP%]{margin-top:8px ; margin-right: 12px}\r\n  \r\n              }\r\n       \r\n\r\n\r\n           \r\n                @media (max-width: 930px)\r\n                {\r\n                    .quitar675[_ngcontent-%COMP%]{display: none;}\r\n                }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYmFycmEtbmVncmEvYmFycmEtbmVncmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBLEtBQUssWUFBWTs7QUFFakIsUUFBUSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7O0FBRTVDO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBLEtBQUssZUFBZSxDQUFDOztBQUVyQixhQUFhLGVBQWU7SUFDeEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCOzs7RUFHbkI7O0VBRUE7SUFDRSwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCOztDQUVIOztDQUVBO0lBQ0csMkJBQTJCLEdBQUcsa0JBQWtCO0lBQ2hELDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0EsV0FBVyxlQUFlO0lBQ3RCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCO0NBQ0g7O0NBRUE7RUFDQywyQkFBMkIsR0FBRyxrQkFBa0I7RUFDaEQsOEJBQThCO0VBQzlCO0FBQ0Y7Q0FDQztJQUNHLGVBQWU7O0VBRWpCLG1CQUFtQjtJQUNqQixXQUFXO0lBQ1gsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtLQUNkOztLQUVBOztRQUVHLDJCQUEyQixFQUFFLGtCQUFrQjtRQUMvQyw2QkFBNkI7UUFDN0I7S0FDSDtLQUNBO1FBQ0csMkJBQTJCLEVBQUUsa0JBQWtCO1FBQy9DLDZCQUE2QjtRQUM3QjtLQUNIOztLQUVBLE9BQU8sZUFBZSxFQUFFLGtCQUFrQjs7OztDQUk5QztFQUNDLGVBQWU7O0VBRWYsbUJBQW1CO0VBQ25CLFFBQVE7SUFDTixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Y7Ozs7Q0FJSDtJQUNHLDJCQUEyQixFQUFFLGtCQUFrQjtJQUMvQyw2QkFBNkI7SUFDN0I7O0NBRUg7O0NBRUE7SUFDRywyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCO0NBQ0g7OztFQUdDLFVBQVUsZ0JBQWdCLEVBQUU7OztFQUc1QjtJQUNFLHdCQUF3QjtJQUN4QixlQUFlLENBQUM7O2FBRVA7Z0JBQ0csYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGlCQUFpQjtnQkFDakIsOEJBQThCO2dCQUM5QixtQkFBbUI7Z0JBQ25CLHFCQUFxQjtjQUN2Qjs7Y0FFQTtnQkFDRSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsUUFBUTtjQUNWOztjQUVBO2dCQUNFLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixRQUFRO2NBQ1Y7O2NBRUE7O2dCQUVFLFlBQVksZUFBZSxDQUFDO2dCQUM1QixhQUFhLDJCQUEyQixDQUFDO2dCQUN6QyxLQUFLLGVBQWUsRUFBRTtnQkFDdEIsT0FBTyxlQUFlLEVBQUUsa0JBQWtCOztjQUU1Qzs7Ozs7Z0JBS0U7O29CQUVJLFdBQVcsYUFBYSxDQUFDO2dCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiBcclxuXHJcbi5iYXJyYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnNwYW57Y29sb3I6b3JhbmdlfVxyXG5cclxuLm1hcmdlbnttYXJnaW4tbGVmdDowcHg7IG1hcmdpbi1yaWdodDogMjBweDt9XHJcblxyXG4uYmFycmFUZXh0b3tcclxuICAgIGNvbG9yOndoaXRlIDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NHB4XHJcbn1cclxuXHJcbi50b3B7bWFyZ2luLXRvcDogM3B4O31cclxuXHJcbi5zdXNjcmliaXJzZXtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAxODcsIDYxKSA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuc3VzY3JpYmlyc2U6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCBncmF5O1xyXG4gICAgY29sb3I6YWxpY2VibHVlXHJcblxyXG4gfVxyXG5cclxuIC5zdXNjcmliaXJzZTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7OyBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggYmxhY2s7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbi5jb250YWN0YXJ7Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMTg3LCA2MSkgO1xyXG4gICAgZm9udC1zaXplOiAxNXB4OyAgICBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOjlweDtcclxuICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0YXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCBncmF5O1xyXG4gICAgY29sb3I6YWxpY2VibHVlXHJcbiB9XHJcblxyXG4gLmNvbnRhY3RhcjphY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA1NCwgNTQpOzsgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDRweCBibGFjaztcclxuICBjb2xvcjpibGFja1xyXG59XHJcbiAucXVpZW5lc1NvbW9ze1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDs7XHJcbiAgICBsZWZ0Oi0xMjhweDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgfVxyXG5cclxuICAgICAucXVpZW5lc1NvbW9zOmhvdmVye1xyXG4gICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggZ3JheTtcclxuICAgICAgICBjb2xvcjpvcmFuZ2VcclxuICAgICB9XHJcbiAgICAgLnF1aWVuZXNTb21vczphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDU0LCA1NCwgNTQpOyBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IGdyYXk7XHJcbiAgICAgICAgY29sb3I6YmxhY2tcclxuICAgICB9XHJcblxyXG4gICAgIC5yZWRlc3ttYXJnaW4tdG9wOjZweCA7IG1hcmdpbi1yaWdodDogMjhweH1cclxuXHJcbiAgICAgXHJcblxyXG4gLmZvcm1hclBhcnRle1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBcclxuICBsZXR0ZXItc3BhY2luZzogMXB4OztcclxuICB0b3A6MTBweDtcclxuICAgIGxlZnQ6NjhweDtcclxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuIC5mb3JtYXJQYXJ0ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NCwgNTQsIDU0KTsgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IGdyYXk7XHJcbiAgICBjb2xvcjpvcmFuZ2VcclxuXHJcbiB9XHJcblxyXG4gLmZvcm1hclBhcnRlOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NCwgNTQsIDU0KTsgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IGdyYXk7XHJcbiAgICBjb2xvcjpibGFja1xyXG4gfVxyXG5cclxuXHJcbiAgLm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAzMyU7IH1cclxuXHJcblxyXG4gIGF7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAxODcsIDYxKSA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7fVxyXG5cclxuICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5mbGV4LWl0ZW1zOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5mbGV4LWl0ZW1zOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuYWNvbW9kYTYwMHttYXJnaW4tdG9wOiAwcHg7fVxyXG4gICAgICAgICAgICAgICAgLnN1c2NyaWJpcnNle21hcmdpbi1sZWZ0OiAxMHB4IWltcG9ydGFudDt9XHJcbiAgICAgICAgICAgICAgICAudG9we21hcmdpbi10b3A6IDNweDsgfVxyXG4gICAgICAgICAgICAgICAgLnJlZGVze21hcmdpbi10b3A6OHB4IDsgbWFyZ2luLXJpZ2h0OiAxMnB4fVxyXG4gIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTMwcHgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1aXRhcjY3NXtkaXNwbGF5OiBub25lO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6639:
/*!****************************************************************************!*\
  !*** ./src/app/componentes/carousel-revista/carousel-revista.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselRevistaComponent": () => (/* binding */ CarouselRevistaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-useful-swiper */ 2266);






function CarouselRevistaComponent_swiper_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "a", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", image_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r2.subtitulo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CarouselRevistaComponent_swiper_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "swiper", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselRevistaComponent_swiper_3_div_4_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initialize", ctx_r0.swipperisActive)("config", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.slideData);
  }
}
class CarouselRevistaComponent {
  constructor(_platformId, crudService) {
    this._platformId = _platformId;
    this.crudService = crudService;
    this.title = 'ng-swiper-demo';
    this.carga = false;
    this.swipperisActive = false;
    this.config = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoHeight: true,
      allowTouchMove: true,
      breakpoints: {
        1024: {
          slidesPerView: 4
        },
        700: {
          slidesPerView: 3
        },
        400: {
          slidesPerView: 2
        },
        300: {
          slidesPerView: 1
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true
    };
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      this.crudService.pedirCaousel().subscribe(res => {
        this.swipperisActive = false;
        console.log(res, "****");
        this.slideData = res;
        this.slideData = this.slideData.reverse();
        this.swipperisActive2 = true;
        this.swipperisActive = true;
      });
    }
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      // this.swipperisActive = true;
    }
  }
}
CarouselRevistaComponent.ɵfac = function CarouselRevistaComponent_Factory(t) {
  return new (t || CarouselRevistaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
CarouselRevistaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CarouselRevistaComponent,
  selectors: [["app-carousel-revista"]],
  decls: 4,
  vars: 1,
  consts: [[1, "edicionesAnteriores"], [2, "padding-bottom", "10px", "padding-top", "10px"], ["class", "principal", 3, "initialize", "config", 4, "ngIf"], [1, "principal", 3, "initialize", "config"], [2, "margin-top", "14px"], [1, "swiper-wrapper"], ["class", "swiper-slide", "style", "padding: 1px!important; border-radius: 10px;", 4, "ngFor", "ngForOf"], [1, "swiper-button-next", 2, "margin-right", "20px"], [1, "swiper-button-prev", 2, "margin-left", "20px"], [1, "swiper-slide", 2, "padding", "1px!important", "border-radius", "10px"], ["target", "_blank", 3, "href"], [2, "width", "100%", "box-shadow", "1px 1px 10px rgba(0, 0, 0, 0.219)", "border-radius", "4px", 3, "src"]],
  template: function CarouselRevistaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ediciones Anteriores");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselRevistaComponent_swiper_3_Template, 7, 3, "swiper", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.swipperisActive);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent],
  styles: [".edicionesAnteriores[_ngcontent-%COMP%]{\r\n  \r\n  padding: 0px;\r\n  background-color: rgb(255 165 0);\r\n  margin: 0;\r\n  margin-top: -19px;\r\n  margin-bottom: 5px;\r\n \r\n\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\nfont-weight:700 ;\r\nletter-spacing: -1px;\r\nmargin-left: 10px;\r\nfont-size: 27px;\r\nmargin-top: 20px;\r\ncolor: rgb(255, 255, 255);\r\nborder-radius: px;\r\nmargin-top:4px ;\r\nmargin-right: 10px;\r\n\r\npadding-left: 10px; \r\npadding-top: 0px;\r\n}\r\na[_ngcontent-%COMP%]{\r\ntext-decoration: none!important;\r\n\r\n  }\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight:400;\r\n  font-size: 18px;\r\n  margin: 0px;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  color:white;\r\nborder-radius: 3px;\r\ntext-transform: uppercase;\r\n\r\n    }\r\n\r\n.swiper-wrapper[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.principal[_ngcontent-%COMP%]  {\r\n  background-color: rgba(99, 84, 0, 0.404);\r\n\r\n  text-align: left; margin-left: 20px; margin-right: 20px; border-radius: 4px;\r\n  \r\n  }\r\n  \r\n  @media (max-width:700px)\r\n  {\r\n  .ptitulo[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n  @media (max-width:600px)\r\n  {\r\n.ptitulo[_ngcontent-%COMP%]{\r\nmargin-top: 10px;\r\n}\r\n.edicionesAnteriores[_ngcontent-%COMP%]{\r\n  margin-left: 0px;\r\n}\r\n.principal[_ngcontent-%COMP%]  {\r\n\r\nmargin-left: 0px; margin-right: 0px; border-radius: 4px; margin-top:-10px ;\r\n   \r\n  }\r\n  \r\n\r\n\r\n\r\n  }\r\n\r\n  \r\n\r\n  \r\n  @media (max-width:700px)\r\n  {\r\n      .quitar700[_ngcontent-%COMP%]{display: none;}\r\n      p[_ngcontent-%COMP%]{background-color: transparent;}\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvY2Fyb3VzZWwtcmV2aXN0YS9jYXJvdXNlbC1yZXZpc3RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7OztBQUdwQjs7O0FBR0E7QUFDQSw0REFBNEQ7QUFDNUQsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQkFBa0I7O0FBRWxCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLCtCQUErQjs7RUFFN0I7OztBQUdGO0VBQ0UsNERBQTREO0VBQzVELGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiLGtCQUFrQjtBQUNsQix5QkFBeUI7O0lBRXJCOztBQUVKO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7Ozs7QUFNQTtFQUNFLHdDQUF3Qzs7RUFFeEMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCOztFQUUzRTs7RUFFQTs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztFQUVFOztBQUVGO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7QUFFQSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7O0VBRXhFOzs7OztFQUtBOzs7OztFQUtBOztNQUVJLFdBQVcsYUFBYSxDQUFDO01BQ3pCLEVBQUUsNkJBQTZCLENBQUM7RUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5lZGljaW9uZXNBbnRlcmlvcmVze1xyXG4gIFxyXG4gIHBhZGRpbmc6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE2NSAwKTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gXHJcblxyXG59XHJcblxyXG5cclxuaDF7XHJcbmZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6NzAwIDtcclxubGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5mb250LXNpemU6IDI3cHg7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbmJvcmRlci1yYWRpdXM6IHB4O1xyXG5tYXJnaW4tdG9wOjRweCA7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbnBhZGRpbmctbGVmdDogMTBweDsgXHJcbnBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuYXtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICB9XHJcblxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucHJpbmNpcGFsICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgODQsIDAsIDAuNDA0KTtcclxuXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgbWFyZ2luLWxlZnQ6IDIwcHg7IG1hcmdpbi1yaWdodDogMjBweDsgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDo3MDBweClcclxuICB7XHJcbiAgLnB0aXR1bG97XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDo2MDBweClcclxuICB7XHJcbi5wdGl0dWxve1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5lZGljaW9uZXNBbnRlcmlvcmVze1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLnByaW5jaXBhbCAge1xyXG5cclxubWFyZ2luLWxlZnQ6IDBweDsgbWFyZ2luLXJpZ2h0OiAwcHg7IGJvcmRlci1yYWRpdXM6IDRweDsgbWFyZ2luLXRvcDotMTBweCA7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDo3MDBweClcclxuICB7XHJcbiAgICAgIC5xdWl0YXI3MDB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgIHB7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxyXG4gIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4928:
/*!******************************************************************!*\
  !*** ./src/app/componentes/comentarios/comentarios.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentariosComponent": () => (/* binding */ ComentariosComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function ComentariosComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "| COMENTARIOS(0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ComentariosComponent_hr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No hay comentarios a\u00FAn, s\u00E9 el primero!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ComentariosComponent_hr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("| COMENTARIOS(", ctx_r4.comentarios.length - 1, ")");
  }
}
function ComentariosComponent_hr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent_h5_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "h5", 10);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r6.comentarios[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ComentariosComponent_hr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent_h5_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "h5", 10);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r8.comentarios[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ComentariosComponent_hr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent_h5_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "h5", 10);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r10.comentarios[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ComentariosComponent_hr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function ComentariosComponent__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ComentariosComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 13);
  }
}
function ComentariosComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nombre*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16)(4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_div_18_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.nombre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Email*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16)(8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_div_18_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Comentarios*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 16)(13, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_div_18_Template_textarea_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.comentario = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "  \n     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 21)(16, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ComentariosComponent_div_18_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r19.btnComentar = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.agregarPublicacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ComentariosComponent_div_18_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r20.formulario = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.btnComentar = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.comentario);
  }
}
class ComentariosComponent {
  constructor(crudService) {
    this.crudService = crudService;
    this.comentario = "";
    this.nombre = "";
    this.email = "";
    this.articulos = [];
    this.formulario = false;
    this.btnComentar = true;
    this.mensaje = false;
    this.loading = false;
  }
  ngOnInit() {
    console.log(this.nota);
    var aux = this.nota.comentarios;
    if (aux) {
      this.comentarios = aux.split("<hr>").reverse();
      console.log(this.comentarios, 'dale');
    } else {
      this.comentarios = [];
    }
  }
  enviar() {
    const hoy = Date.now();
    var post = moment__WEBPACK_IMPORTED_MODULE_0__(hoy).format("YYYY-MM-DD hh:mm") + ' ' + this.nombre + ': ' + this.comentario;
    console.log(post);
  }
  agregarPublicacion() {
    if (this.nombre === "" || this.comentario === "" || this.email === "") {
      alert('Faltan datos');
      return;
    } else {
      this.formulario = false;
      const hoy = Date.now();
      if (this.nota.comentarios === undefined || this.nota.comentarios === null) {
        var post = moment__WEBPACK_IMPORTED_MODULE_0__(hoy).format("DD/MM/YY hh:mm") + ' ' + '<b>' + this.nombre + '</b>' + ': ' + '<br>' + this.comentario + '<hr>';
      } else {
        var post = this.nota.comentarios + '<div>' + moment__WEBPACK_IMPORTED_MODULE_0__(hoy).format("DD/MM/YY hh:mm") + '</div>' + ' ' + '<b>' + this.nombre + '</b>' + ': ' + '<br>' + this.comentario + '<hr>';
      }
      if (this.crudService.unArticulo.titulo) {
        this.nota.correos = this.nota.correos + this.email + " - ";
        this.nota.comentarios = post;
        this.nota.contadorComentarios = 'Nuevo';
        //this.nota.comentarios =""  //borrar comentarios
        this.loading = true;
        this.crudService.modificarArticuloComentario(this.nota).subscribe(res => {
          this.comentario = "";
          this.nombre = "";
          this.email = "";
          this.comentario = this.nota;
          this.loading = false;
          console.log(res);
          alert('Mensaje enviado');
          var aux = this.nota.comentarios;
          if (aux) {
            this.comentarios = aux.split("<hr>").reverse();
            console.log(this.comentarios, 'dale');
            this.comentario = "";
          } else {
            return;
          }
        });
        // this.reload()
      } else {
        console.log(this.crudService.unArticulo);
        //this.nota.comentarios =""  borrar comentarios
        this.loading = true;
        this.nota.comentarios = post;
        this.nota.contadorComentarios = 'Nuevo';
        this.nota.correos = this.email + " - ";
        this.crudService.modificarArticuloComentario(this.nota).subscribe(res => {
          this.comentario = "";
          this.nombre = "";
          this.formulario = false;
          alert(res);
          this.loading = false;
          var aux = this.nota.comentarios;
          if (aux) {
            this.comentarios = aux.split("<hr>").reverse();
          } else {
            this.comentarios = [];
          }
          // this.reload()
        });
      }
    }

    ;
  }
}
ComentariosComponent.ɵfac = function ComentariosComponent_Factory(t) {
  return new (t || ComentariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService));
};
ComentariosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ComentariosComponent,
  selectors: [["app-comentarios"]],
  inputs: {
    nota: ["data", "nota"]
  },
  decls: 19,
  vars: 15,
  consts: [["class", "titulo", 4, "ngIf"], [4, "ngIf"], ["class", "titulo", "style", "font-size: 16px; color:gray", 4, "ngIf"], ["class", "comentarios", 3, "innerHTML", 4, "ngIf"], [1, "btn", "btn-dark", "mt-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-chat-right-dots-fill", "viewBox", "0 0 16 16", 4, "ngIf"], ["src", "../../../assets/loader.gif", "width", "30px", "alt", "", 4, "ngIf"], ["style", "margin-top:20px", 4, "ngIf"], [1, "titulo"], [1, "titulo", 2, "font-size", "16px", "color", "gray"], [1, "comentarios", 3, "innerHTML"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chat-right-dots-fill"], ["d", "M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], ["src", "../../../assets/loader.gif", "width", "30px", "alt", ""], [2, "margin-top", "20px"], [1, "descripcionInput"], [1, "input-group", "ajusteAncho"], ["type", "text", "placeholder", "Nombre", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "descripcionInput", "mt-2"], ["type", "email", "placeholder", "Email", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Comentarios", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-2"], [1, "btn", "btn-dark", "mt-2", 2, "margin-left", "5px", 3, "click"]],
  template: function ComentariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br")(1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ComentariosComponent_h1_2_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ComentariosComponent_hr_3_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ComentariosComponent_h4_4_Template, 2, 0, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ComentariosComponent_hr_5_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ComentariosComponent_h1_6_Template, 2, 1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ComentariosComponent_hr_7_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ComentariosComponent_h5_8_Template, 1, 1, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ComentariosComponent_hr_9_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ComentariosComponent_h5_10_Template, 1, 1, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ComentariosComponent_hr_11_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ComentariosComponent_h5_12_Template, 1, 1, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ComentariosComponent_hr_13_Template, 1, 0, "hr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ComentariosComponent_Template_button_click_14_listener() {
        ctx.formulario = true;
        return ctx.btnComentar = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ComentariosComponent__svg_svg_15_Template, 2, 0, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ComentariosComponent_img_16_Template, 1, 0, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Comentar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ComentariosComponent_div_18_Template, 20, 3, "div", 7);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nota.comentarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nota.comentarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nota.comentarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nota.comentarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nota.comentarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[2]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[2]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[3]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[3]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comentarios[3]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formulario);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".descripcionInput[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color:orange\r\n}\r\n\r\n.comentarios[_ngcontent-%COMP%]{\r\n    margin-left:10px;\r\nfont-size: 14px;\r\nline-height: 22px;\r\n}\r\n\r\n.ajusteAncho[_ngcontent-%COMP%]{width: 400px;}\r\n.titulo[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    \r\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n        font-weight: 700;\r\n        line-height: 25px; \r\n        letter-spacing: -1px;\r\n        margin-top:-10px;\r\n        margin-left:-15px;\r\n        color:rgb(68, 68, 68);\r\n        font-size: 25px;       \r\n        margin-left:0px;\r\n        margin-bottom: 10px; \r\n        color:orange; }\r\n\r\n\r\n\r\n        @media (max-width:600px){\r\n            .ajusteAncho[_ngcontent-%COMP%]{width: 100%;}\r\n        }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvY29tZW50YXJpb3MvY29tZW50YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUEsYUFBYSxZQUFZLENBQUM7QUFDMUI7Ozs7UUFJUSw0REFBNEQ7UUFDNUQsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWSxFQUFFOzs7O1FBSWQ7WUFDSSxhQUFhLFdBQVcsQ0FBQztRQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwY2lvbklucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6b3JhbmdlXHJcbn1cclxuXHJcbi5jb21lbnRhcmlvc3tcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5hanVzdGVBbmNob3t3aWR0aDogNDAwcHg7fVxyXG4udGl0dWxve1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OyBcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xyXG4gICAgICAgIGNvbG9yOnJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7ICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuICAgICAgICBjb2xvcjpvcmFuZ2U7IH1cclxuXHJcblxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAgICAgICAgIC5hanVzdGVBbmNob3t3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2944:
/*!******************************************************************!*\
  !*** ./src/app/componentes/footer-card/footer-card.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterCardComponent": () => (/* binding */ FooterCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FooterCardComponent_h3_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CCAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class FooterCardComponent {
  constructor() {}
  ngOnInit() {}
}
FooterCardComponent.ɵfac = function FooterCardComponent_Factory(t) {
  return new (t || FooterCardComponent)();
};
FooterCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterCardComponent,
  selectors: [["app-footer-card"]],
  inputs: {
    nota: ["data", "nota"]
  },
  decls: 26,
  vars: 4,
  consts: [[1, "clasePrincipal"], [2, "margin-right", "5px"], [1, "primerIcon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "rgb(136, 136, 136)", "viewBox", "0 0 16 16", 1, "bi", "bi-person-circle", 2, "margin-right", "3px"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["fill-rule", "evenodd", "d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"], [1, "subtituloResposive2", "vistas", 2, "color", "(136, 136, 136)", "margin-top", "-1px"], [1, "quitar600", 2, "margin-top", "-1px", "margin-right", "5px"], [1, "tercerIcon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "rgb(136, 136, 136)", "viewBox", "0 0 16 16", 1, "bi", "bi-camera-fill"], ["d", "M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], ["d", "M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"], [2, "margin-left", "4px"], [1, "subtituloResposive2", "fecha", 2, "margin-top", "1px"], ["class", "subtituloResposive2  fecha", "style", "color:rgb(136, 136, 136); margin-top: -8px; ", 4, "ngIf"], [1, "segundoIcon", "quitar600"], [1, "divSegundoIcon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "rgb(136, 136, 136)", "viewBox", "0 0 16 16", 1, "bi", "bi-image"], ["d", "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], ["d", "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"], [2, "margin-top", "1px", "margin-left", "4px"], [1, "subtituloResposive2", "vistas"], [1, "subtituloResposive2", "fecha", 2, "color", "rgb(136, 136, 136)", "margin-top", "-8px"]],
  template: function FooterCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4)(5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10)(13, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FooterCardComponent_h3_17_Template, 2, 0, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15)(19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18)(22, "path", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20)(24, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nota.autor);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nota.fotografia);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nota.fotografia);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edici\u00F3n: ", ctx.nota.edicionFotografia, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".clasePrincipal[_ngcontent-%COMP%]{display: flex; justify-content: left; margin-left:0px; margin-top:-0px }\r\n.primerIcon[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:4px; margin-left:0px; margin-right: 10px}\r\n.segundoIcon[_ngcontent-%COMP%]{margin-top:9px; margin-left:5px; margin-right: 10px;}\r\n.divSegundoIcon[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:-6px; margin-right: 0px}\r\n.stilo[_ngcontent-%COMP%]{font-size:19px; color:#757575}\r\n.subtituloResposive2[_ngcontent-%COMP%]{\r\n    \r\n    font-size:11px;  margin-top:-6px; margin-left: -10px;  color:rgb(87, 87, 87)}\r\n.fecha[_ngcontent-%COMP%]{font-size:14px;  margin-top:-5px; margin-left: -0px;  color:rgb(95, 95, 95)}\r\n.vistas[_ngcontent-%COMP%]{font-size:14px; margin-top:-1px; margin-left: 0px;  color:rgb(95, 95, 95)}\r\n.tercerIcon[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:4px; margin-right: 5px}\r\n\r\n\r\n@media (max-width:600px)\r\n{\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyLWNhcmQvZm9vdGVyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0JBQWdCLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCO0FBQ3ZGLFlBQVksYUFBYSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCO0FBQ3ZHLGFBQWEsY0FBYyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztBQUNqRSxnQkFBZ0IsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGVBQWUsRUFBRSxpQkFBaUI7QUFDMUYsT0FBTyxjQUFjLEVBQUUsYUFBYTtBQUNwQzs7SUFFSSxjQUFjLEdBQUcsZUFBZSxFQUFFLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNoRixPQUFPLGNBQWMsR0FBRyxlQUFlLEVBQUUsaUJBQWlCLEdBQUcscUJBQXFCO0FBQ2xGLFFBQVEsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsR0FBRyxxQkFBcUI7QUFDakYsWUFBWSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjs7O0FBR3JGOztBQUVBLFdBQVcsWUFBWTtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2xhc2VQcmluY2lwYWx7ZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBsZWZ0OyBtYXJnaW4tbGVmdDowcHg7IG1hcmdpbi10b3A6LTBweCB9XHJcbi5wcmltZXJJY29ue2Rpc3BsYXk6ZmxleCA7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBtYXJnaW4tdG9wOjRweDsgbWFyZ2luLWxlZnQ6MHB4OyBtYXJnaW4tcmlnaHQ6IDEwcHh9XHJcbi5zZWd1bmRvSWNvbnttYXJnaW4tdG9wOjlweDsgbWFyZ2luLWxlZnQ6NXB4OyBtYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4uZGl2U2VndW5kb0ljb257ZGlzcGxheTpmbGV4IDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IG1hcmdpbi10b3A6LTZweDsgbWFyZ2luLXJpZ2h0OiAwcHh9XHJcbi5zdGlsb3tmb250LXNpemU6MTlweDsgY29sb3I6Izc1NzU3NX1cclxuLnN1YnRpdHVsb1Jlc3Bvc2l2ZTJ7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZToxMXB4OyAgbWFyZ2luLXRvcDotNnB4OyBtYXJnaW4tbGVmdDogLTEwcHg7ICBjb2xvcjpyZ2IoODcsIDg3LCA4Nyl9XHJcbi5mZWNoYXtmb250LXNpemU6MTRweDsgIG1hcmdpbi10b3A6LTVweDsgbWFyZ2luLWxlZnQ6IC0wcHg7ICBjb2xvcjpyZ2IoOTUsIDk1LCA5NSl9XHJcbi52aXN0YXN7Zm9udC1zaXplOjE0cHg7IG1hcmdpbi10b3A6LTFweDsgbWFyZ2luLWxlZnQ6IDBweDsgIGNvbG9yOnJnYig5NSwgOTUsIDk1KX1cclxuLnRlcmNlckljb257ZGlzcGxheTpmbGV4IDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IG1hcmdpbi10b3A6NHB4OyBtYXJnaW4tcmlnaHQ6IDVweH1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweClcclxue1xyXG4ucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 202:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 52,
  vars: 0,
  consts: [[2, "border-bottom", "20px solid rgb(51, 51, 51)"], [1, "row", 2, "background-image", "url('../../../assets/fondo2.png')", "background-repeat", "no-repeat", "width", "100%", "height", "100%", "margin-left", "0px"], [1, "flex-container", "quitar600"], [1, "flex-items"], [2, "text-align", "left"], ["href", "http://www.culturademontania.org.ar/"], ["src", "../../../assets/LogoCCAM_Entero.png", "alt", "", 1, "logoCCAM"], [1, "flex-items", 2, "margin-top", "244px", "min-width", "450px"], [2, "text-align", "left", "margin-left", "10px"], ["href", "mailto:info@culturademontania.org.ar", 2, "color", "white"], [2, "color", "white", "font-size", "18px"], [2, "color", "white", "font-size", "18px", "margin-top", "-20px"], ["href", "https://www.instagram.com/ccam_arg/", "target", "_blank", 2, "color", "white"], [2, "color", "white", "font-size", "18px", "margin-top", "-22px"], ["href", "https://www.facebook.com/ccamontania/", "target", "_blank", 2, "color", "white"], [1, "flex-items", "quitar1000", "acom", 2, "margin-top", "224px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-equipo.html", "target", "_blank"], ["src", "../../../assets/logonm.png", "alt", "", 1, "logonm"], [1, "flex-items", "quitar1000", 2, "margin-top", "223px"], [2, "text-align", "left", "margin-top", "25px"], [2, "color", "white", "font-size", "20px"], [2, "color", "white", "margin-top", "-21px", "font-size", "20px"], [1, "mobile", 2, "width", "100%!important"], [2, "margin-top", "300px"], [2, "text-align", "center", "margin-top", "-130px"], ["href", " culturademontania.org.ar", "target", "_blank"], ["src", "../../../assets/LogoCCAM_Entero.png", "alt", "", 1, "imgmobile"], [2, "text-align", "center"], [2, "color", "white", "font-size", "15px!important"], [2, "color", "white", "font-size", "15px!important", "margin-top", "-18px"], [2, "color", "white", "font-size", "15px!important", "margin-top", "-22px"], [2, "color", "white", "font-size", "15px!important", "margin-top", "-19px"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "a", 9)(11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mail: info@culturademontania.org.ar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WhatsApp: +54 11 6979-8073");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12)(16, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Instagram: @ccam_arg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14)(19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "www.facebook.com/ccamontania ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "div", 4)(23, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cont\u00E1ctate y comenz\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "la aventura de integrarte");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "a la red cultural");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div")(36, "div", 24)(37, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27)(40, "div")(41, "a", 9)(42, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mail: info@culturademontania.org.ar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "WhatsApp: +54 11 6979-8073");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12)(47, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Instagram: @ccam_arg");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 14)(50, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "www.facebook.com/ccamontania ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Jockey+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);@import url(https://fonts.googleapis.com/css2?family=Train+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap);@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab:wght@900&display=swap);@import url(https://fonts.googleapis.com/css2?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);\r\n \r\n\r\n\r\n\r\n\r\n\r\n .imgAparece[_ngcontent-%COMP%]{display: none;}\r\n\r\n .numeroEdicion[_ngcontent-%COMP%]{display: none;}\r\n.acom[_ngcontent-%COMP%]{margin-top:370px; }\r\n.fuenteTest[_ngcontent-%COMP%]{  font-family: 'Oswald', sans-serif;}\r\n.publiMobile[_ngcontent-%COMP%]{display:none}\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: normal;\r\n  align-items: normal;\r\n  align-content: normal;\r\n}\r\n.logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-20px}\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cartelInicio[_ngcontent-%COMP%]{display: none;}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cuerpo[_ngcontent-%COMP%]{\r\n background-color:  rgb(51, 51, 51);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{font-family: 'Roboto Slab', serif;}\r\n.quienesSomos[_ngcontent-%COMP%]{\r\n   left:220px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n.foterText[_ngcontent-%COMP%]{margin-top:-10px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;}\r\n\r\n\r\n.formarParte[_ngcontent-%COMP%]{\r\n   left:380px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n\r\n\r\n\r\n.textLogo[_ngcontent-%COMP%]{\r\n    font-family: 'Teko', sans-serif;\r\n    font-size: 40px; color: rgba(194, 18, 18, 0.733);\r\n    letter-spacing: 0px;\r\n    text-shadow: 1px 1px 2px rgba(56, 56, 56, 0.431);\r\n        }\r\n\r\n.indice[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n  font-family: 'Oswald', sans-serif;\r\ntext-transform: uppercase;\r\n  margin-bottom: 20px;\r\n  font-size: 28px;\r\n  letter-spacing: 1px;\r\n  color:white}\r\n\r\n  .ediMobil[_ngcontent-%COMP%] {display: none; background-color: #3E2800;margin-top:30px; margin-left:20px; margin-right: 20px ;}\r\n\r\n.textFont[_ngcontent-%COMP%]{\r\n    font-family: 'Yanone Kaffeesatz', sans-serif;\r\n    font-weight: 700;\r\n         }\r\n\r\n.mobile[_ngcontent-%COMP%]{display:none;}\r\n.textBarraNegra2[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n color:black;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n.textBarraNegra[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color:orange;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n     margin-top:-4px;\r\n     min-height: 130px; }\r\n\r\n\r\n.barra[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n    height: 35px;\r\n}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n  color:rgb(255, 255, 255) ;\r\n\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n}\r\n.barraInfo[_ngcontent-%COMP%]{background-color: orange; margin:20px; margin-top:0px ; text-align: right;}\r\n\r\n.editorial[_ngcontent-%COMP%] {color:rgb(255, 255, 255); padding: 20px; font-size: 30px;}\r\n.suscri[_ngcontent-%COMP%]{margin-top:4px; padding-left:30px;}\r\n.suscri2[_ngcontent-%COMP%]{color:black ;margin-top:0px; padding-right:20px}\r\n.suscribirse2[_ngcontent-%COMP%]{cursor: pointer;\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n   letter-spacing: 0.5px;\r\n  outline: none;\r\n  padding-top:7px;\r\n  padding-left: 10px;\r\n  font-size: 15px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n\r\nh5[_ngcontent-%COMP%]{ font-family: 'Abel', sans-serif;\r\nfont-size: 18px;\r\n}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n  \r\n  height: 290px;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n.editorialParrafo[_ngcontent-%COMP%]{\r\n text-align: left;\r\n   letter-spacing: 1px;\r\n  outline: none;\r\n  padding-top:0px;\r\n  padding-left: 20px;\r\n  font-size: 20px;\r\n  margin-bottom: 0px;\r\n  margin-right: 30px;\r\n  line-height:27px;\r\n}\r\n\r\n.logoCCAM[_ngcontent-%COMP%]{width: 125px; margin-top:236px;  margin-left: 143px; margin-right: 0px;}\r\n\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 60px;\r\n  float: left;\r\n  margin-top: 13px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 30px;\r\n  color:orange;\r\n\r\n}\r\n\r\n.numAnterior[_ngcontent-%COMP%]{\r\n  margin-left: 30px; margin-bottom: -10px; font-size: 25px;  margin-top: 10px; \r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{color:rgb(255, 187, 61) ; font-size: 13px;}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: -0.5px;\r\n  font-size:13px;\r\n    color:rgba(0, 0, 0, 0.527);\r\n  margin-right: 17px;\r\n  \r\n\r\n\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n  font-size: 18px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: 0px;\r\n  text-shadow: 1px 1px 3px black;\r\n  color:white;\r\n  line-height: 24px;\r\n  margin-top:20px;\r\n  padding:10px\r\n\r\n}\r\n.animaNav[_ngcontent-%COMP%]{transform: rotate(-90deg);  color:orange ; }\r\n\r\n\r\n.barraTexto[_ngcontent-%COMP%]{font-family: 'Oswald', sans-serif; color:white ; font-size: 12px; letter-spacing: 2px; }\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{background-color: #dfdfdf; }\r\n.logo[_ngcontent-%COMP%]{\r\n\r\n    margin-top:0px;\r\n    margin-bottom: 0px;\r\n    width:180px;\r\n    height:100%;\r\n    margin-left:-40px;\r\n    margin-top:5px;\r\n    margin-bottom: 15px;\r\n    object-fit: cover;\r\n\r\n\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    margin-right:110px;\r\n    position: absolute;\r\n    right: 95px;\r\n    top:2px;\r\n    outline: none;\r\n    width: 150px;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 3px;\r\n    }\r\n\r\n.textlogoCentro[_ngcontent-%COMP%]{\r\n    top:60px;\r\n    left: 118px;\r\n    position: absolute;\r\n }\r\n.textlogoAbajo[_ngcontent-%COMP%]{\r\n    top:96px;\r\n    left: 118px;\r\n    position: absolute;  }\r\n\r\n.anima[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0, 0, 0, 0.068);\r\n  border-radius: 10%;\r\n\r\n\r\n}\r\n.anima[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n  border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n.anima2[_ngcontent-%COMP%]:hover{\r\n  color:blanchedalmond;\r\n  background: rgba(219, 219, 219, 0.068);\r\n   border-radius: 10%;\r\n\r\n\r\n\r\n}\r\n\r\n.subefuente[_ngcontent-%COMP%]{margin-top: 20px;; margin-left: 30px;}\r\n.anima2[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n   border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n\r\n\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n  line-height: 30px !important;\r\n  height: 30px !important;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 255, 255);\r\n    height: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{margin:0px; padding:5px;margin-left: 15px}\r\n      li[_ngcontent-%COMP%] {\r\n          display: inline;\r\n         }\r\n\r\n         span[_ngcontent-%COMP%] {margin-left:4px}\r\n\r\n.menuTexto[_ngcontent-%COMP%] {\r\n        margin-top: 6px!important;\r\n        letter-spacing: 0.5px;\r\n\r\n\r\n        text-decoration: none;\r\n        float: left;\r\n        padding: 5px;\r\n        color: rgb(0, 0, 0); \r\n        margin-top:3px;\r\n        cursor: pointer;\r\n                }\r\n                .padleft[_ngcontent-%COMP%]{padding-left:10px!important}\r\n                .menuTexto[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n                  background-color: rgb(0, 0, 0); \r\n                  color:aliceblue;\r\n                  border-radius: 5px;\r\n                }\r\n\r\n\r\n\r\n.activo[_ngcontent-%COMP%]{\r\n              color: rgb(160, 24, 0);  \r\n\r\n             }\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: wrap;\r\n\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              @media (max-width:274){\r\n\r\n                .quitarTextoLogo[_ngcontent-%COMP%]{display:none }\r\n\r\n                .fondoEditorial[_ngcontent-%COMP%] {height: 320px;}\r\n                }\r\n\r\n\r\n\r\n\r\n            @media (max-width: 860px)\r\n              {\r\n                .quitar800[_ngcontent-%COMP%]{\r\n                display: none;}\r\n\r\n                  .textUp[_ngcontent-%COMP%]{\r\n                      font-size:40px;\r\n                     margin-top:-30px;\r\n                      margin-left: -25px;\r\n                      letter-spacing: -1px;}\r\n                .textDown[_ngcontent-%COMP%]{font-size:40px;\r\n                     margin-left: -25px;\r\n                       margin-top:-34px;\r\n                       letter-spacing: -1px}\r\n\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:3000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 33%; }\r\n            }\r\n\r\n\r\n\r\n\r\n            @media (max-width:2666px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 25%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 25%; }\r\n            }\r\n\r\n            @media (max-width:2402px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 24%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 24%; }\r\n            }\r\n\r\n            @media (max-width:2200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 20%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 20%; }\r\n            }\r\n\r\n            @media (max-width:2000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 18%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 18%; }\r\n            }\r\n\r\n            @media (max-width:1800px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 15%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 15%; }\r\n            }\r\n\r\n            @media (max-width:1600px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 13%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 13%; }\r\n            }\r\n            @media (max-width:1420px)\r\n            {\r\n              .logoCCAM[_ngcontent-%COMP%]{margin-left: 120px;}\r\n            }\r\n\r\n\r\n\r\n            @media (max-width:1400px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 8%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 8%; }\r\n            }\r\n\r\n            @media (max-width:1349px)\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-10px}\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:1200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%; }\r\n            }\r\n\r\n            @media (max-width:1120px)\r\n\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-5px}\r\n            }\r\n\r\n            @media (max-width:1050px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%;}\r\n            .logoCCAM[_ngcontent-%COMP%]{margin-left: 60px;}\r\n            .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-27px}\r\n            .quitar1000[_ngcontent-%COMP%]{display:none!important}\r\n\r\n            }\r\n\r\n            @media (max-width:766px){\r\n              .fondoEditorial[_ngcontent-%COMP%]{\r\n                height: 320px;}\r\n              \r\n              .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n              .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n             }\r\n\r\n@media (max-width:600px){\r\n  .numAnterior[_ngcontent-%COMP%]{font-size: 25px;margin-bottom: 0px!important; margin-top: 5px; margin-left:15px}\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 220px!important;}\r\n  .indice[_ngcontent-%COMP%]{display: none;}\r\n  .numeroEdicion[_ngcontent-%COMP%]{display: inline;}\r\n  .carousel[_ngcontent-%COMP%]{height:400px!important; }\r\n  .FlexContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n    width: 65%;\r\n    background-color: #2f1d58;\r\n    height: 80vh;\r\n    overflow: auto;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n@media (max-width:500px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 260px!important;}\r\n}\r\n\r\n@media (max-width:400px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 290px!important;}\r\n}\r\n\r\n@media (max-width:354px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 310px!important;}\r\n}\r\n\r\n@media (max-width:342px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 330px!important;}\r\n}\r\n@media (max-width:306px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 340px!important;}\r\n}\r\n@media (max-width:296px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 370px!important;}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.carousel[_ngcontent-%COMP%]{height:500px ; background-color: #7e5a1700;  margin-left:20px; margin-right: 20px ;}\r\n.cartelInicio[_ngcontent-%COMP%]{display:block}\r\n.FlexContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px;\r\n    background-color: lightblue;\r\n}\r\n  .editorialParrafo[_ngcontent-%COMP%]{font-size: 14px; line-height: 19px;\r\n  }\r\n\r\n  .publiMobile[_ngcontent-%COMP%]{display: block;}\r\np[_ngcontent-%COMP%]{font-size: 14px!important;}\r\n  .imagenLoading[_ngcontent-%COMP%]{ position:absolute; bottom:-20px;  right: 0px ; left:0px ;}\r\n.fondoEditorial[_ngcontent-%COMP%]{\r\n  height: 290px;\r\n      \r\n      object-fit: cover;\r\n      margin-left: 0px;\r\n      margin-right: 0pc;\r\n    }\r\n\r\n\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{margin-top:-30px}\r\n.fondo[_ngcontent-%COMP%]{background-image: none;background-color: white;}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 0px; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 0px; }\r\n.indice[_ngcontent-%COMP%]{font-size:25px;margin-left:15px; margin-bottom:10px;margin-top: 10px; }\r\n.banner[_ngcontent-%COMP%]{margin-left:20px; padding-right:40px; margin-top:30px}\r\n.subefuente[_ngcontent-%COMP%]{font-size: 20px;margin-left:20px!important; margin-top:-12px!important; margin-bottom: 10px;}\r\n.responsi[_ngcontent-%COMP%]{width: 110px!important;}\r\n.responsi2[_ngcontent-%COMP%]{width: 90px!important;}\r\n.barraInfo[_ngcontent-%COMP%]{margin:0px}\r\n.logo[_ngcontent-%COMP%]{width: 130px;  margin-left: -10px;}\r\n.mobile[_ngcontent-%COMP%]{display:inline}\r\n.cuerpo[_ngcontent-%COMP%]{background-color:orange;  padding-left: 0px;  margin-right: 0px;}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n.textUp[_ngcontent-%COMP%]{font-size:30px; margin-top:-45px; margin-left: -25px; letter-spacing: -1px;}\r\n.textDown[_ngcontent-%COMP%]{font-size:30px; margin-left: -25px;   margin-top:-55px; letter-spacing: -1px}\r\np[_ngcontent-%COMP%]{font-size:14px!important}\r\n\r\n.footer[_ngcontent-%COMP%]{margin-top: -227px!important;}\r\n.acom[_ngcontent-%COMP%]{margin-top: -61px!important;}\r\n  }\r\n\r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n    0% { transform: rotate(0) }\r\n    100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 83px;\r\n    height: 83px;\r\n    top: 8.5px;\r\n    left: 8.5px;\r\n    border-radius: 50%;\r\n    border: 13px solid #000;\r\n    border-color: #0a0a0a transparent #0a0a0a transparent;\r\n    animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 13px;\r\n    height: 13px;\r\n    top: -13px;\r\n    left: 22px;\r\n    background: #0a0a0a;\r\n    border-radius: 50%;\r\n    box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    left: -13px;\r\n    top: 22px;\r\n    box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    height: 84px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.84);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n\r\n.imgmobile[_ngcontent-%COMP%]{width:100px; margin-top:74px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7K0VBRytFO0NBRTlFOzs0RkFFMkY7Ozs7OztDQVMzRixZQUFZLGFBQWEsQ0FBQzs7Q0FFMUIsZUFBZSxhQUFhLENBQUM7QUFDOUIsTUFBTSxnQkFBZ0IsRUFBRTtBQUN4QixjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGFBQWEsWUFBWTtDQUN4QjtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0EsUUFBUSxZQUFZLEdBQUcsaUJBQWlCO0FBQ3hDO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQSxjQUFjLGFBQWEsQ0FBQzs7QUFFNUI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWO0FBQ0EsK0NBQStDO0FBQy9DO0NBQ0Msa0NBQWtDOzs7QUFHbkM7Ozs7O0FBS0EsR0FBRyxpQ0FBaUMsQ0FBQztBQUNyQztHQUNHLFVBQVU7R0FDVixjQUFjO0dBQ2QsZUFBZTtHQUNmLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckI7O0FBRUEsV0FBVyxnQkFBZ0I7RUFDekIsNENBQTRDLENBQUM7OztBQUcvQztHQUNHLFVBQVU7R0FDVixjQUFjO0dBQ2QsZUFBZTtHQUNmLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckI7Ozs7O0FBS0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZSxFQUFFLCtCQUErQjtJQUNoRCxtQkFBbUI7SUFDbkIsZ0RBQWdEO1FBQzVDOztBQUVSOztFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkMseUJBQXlCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsV0FBVyxhQUFhLEVBQUUseUJBQXlCLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDOztBQUU3RztJQUNJLDRDQUE0QztJQUM1QyxnQkFBZ0I7U0FDWDs7QUFFVCxRQUFRLFlBQVksQ0FBQztBQUNyQjtFQUNFLHVFQUF1RTtFQUN2RSxlQUFlO0NBQ2hCLFdBQVc7RUFDVixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVFQUF1RTtFQUN2RSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLG1FQUFtRTtBQUNuRTtLQUNLLGVBQWU7S0FDZixpQkFBaUIsRUFBRTs7QUFFeEIsNkRBQTZEO0FBQzdEO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7QUFDQSxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLGFBQWEsZUFBZTtFQUMxQix5QkFBeUI7O0VBRXpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQSxXQUFXLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7O0FBRXJGLFlBQVksd0JBQXdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztBQUNyRSxRQUFRLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztBQUMxQyxTQUFTLFlBQVksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCO0FBQ3hELGNBQWMsZUFBZTtFQUMzQix1RUFBdUU7R0FDdEUscUJBQXFCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBLElBQUksK0JBQStCO0FBQ25DLGVBQWU7QUFDZjs7QUFFQSxpQkFBaUIseUJBQXlCO0VBQ3hDLHVFQUF1RTtFQUN2RSxhQUFhO0dBQ1osaUJBQWlCO0dBQ2pCLGtCQUFrQjs7QUFFckI7Q0FDQyxnQkFBZ0I7R0FDZCxtQkFBbUI7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLFVBQVUsWUFBWSxFQUFFLGdCQUFnQixHQUFHLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDOztBQUVqRjs7RUFFRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEdBQUcsZ0JBQWdCOztBQUU3RTs7QUFFQSxFQUFFLHdCQUF3QixFQUFFLGVBQWUsQ0FBQzs7QUFFNUM7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztJQUNaLDBCQUEwQjtFQUM1QixrQkFBa0I7Ozs7QUFJcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Y7O0FBRUY7QUFDQSxVQUFVLHlCQUF5QixHQUFHLGFBQWEsRUFBRTs7O0FBR3JELFlBQVksaUNBQWlDLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRTs7QUFFbkcsZ0JBQWdCLHlCQUF5QixFQUFFO0FBQzNDOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7OztBQUdyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEI7O0FBRUo7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0IsR0FBRzs7QUFFekI7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCOzs7QUFHcEI7QUFDQTs7RUFFRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCOztBQUVGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztHQUNyQyxrQkFBa0I7Ozs7QUFJckI7O0FBRUEsWUFBWSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztBQUNqRDs7RUFFRSxzQ0FBc0M7R0FDckMsa0JBQWtCO0VBQ25COztBQUVGOzs7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUEsR0FBRyxVQUFVLEVBQUUsV0FBVyxDQUFDLGlCQUFpQjtNQUN0QztVQUNJLGVBQWU7U0FDaEI7O1NBRUEsTUFBTSxlQUFlOztBQUU5QjtRQUNRLHlCQUF5QjtRQUN6QixxQkFBcUI7OztRQUdyQixxQkFBcUI7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUIsRUFBRSxjQUFjO1FBQ25DLGNBQWM7UUFDZCxlQUFlO2dCQUNQO2dCQUNBLFNBQVMsMkJBQTJCO2dCQUNwQzs7a0JBRUUsOEJBQThCLEVBQUUsY0FBYztrQkFDOUMsZUFBZTtrQkFDZixrQkFBa0I7Z0JBQ3BCOzs7O0FBSWhCO2NBQ2Msc0JBQXNCLEdBQUcscUJBQXFCOzthQUUvQzthQUNBO2dCQUNHLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlOztnQkFFZixtQkFBbUI7Z0JBQ25CLHFCQUFxQjtjQUN2Qjs7Y0FFQTtnQkFDRSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsUUFBUTtjQUNWOztjQUVBO2dCQUNFLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixRQUFRO2NBQ1Y7O2NBRUE7O2dCQUVFLGlCQUFpQixhQUFhOztnQkFFOUIsaUJBQWlCLGFBQWEsQ0FBQztnQkFDL0I7Ozs7O1lBS0o7O2dCQUVJO2dCQUNBLGFBQWEsQ0FBQzs7a0JBRVo7c0JBQ0ksY0FBYztxQkFDZixnQkFBZ0I7c0JBQ2Ysa0JBQWtCO3NCQUNsQixvQkFBb0IsQ0FBQztnQkFDM0IsVUFBVSxjQUFjO3FCQUNuQixrQkFBa0I7dUJBQ2hCLGdCQUFnQjt1QkFDaEIsb0JBQW9COzs7WUFHL0I7OztZQUdBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOzs7OztZQUtBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCO1lBQ0E7O2NBRUUsVUFBVSxrQkFBa0IsQ0FBQztZQUMvQjs7OztZQUlBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsRUFBRTtZQUMzQjs7WUFFQTs7Y0FFRSxRQUFRLFlBQVksR0FBRyxpQkFBaUI7O1lBRTFDOzs7WUFHQTthQUNDLFVBQVUsZUFBZSxFQUFFO1lBQzVCLFNBQVMsZ0JBQWdCLEVBQUU7WUFDM0I7O1lBRUE7OztjQUdFLFFBQVEsWUFBWSxHQUFHLGdCQUFnQjtZQUN6Qzs7WUFFQTthQUNDLFVBQVUsZUFBZSxFQUFFO1lBQzVCLFNBQVMsZ0JBQWdCLENBQUM7WUFDMUIsVUFBVSxpQkFBaUIsQ0FBQztZQUM1QixRQUFRLFlBQVksR0FBRyxpQkFBaUI7WUFDeEMsWUFBWSxzQkFBc0I7O1lBRWxDOztZQUVBO2NBQ0U7Z0JBQ0UsYUFBYSxDQUFDOztjQUVoQixjQUFjLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtjQUMxRixZQUFZLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7OzthQUd0Rzs7QUFFYjtFQUNFLGFBQWEsZUFBZSxDQUFDLDRCQUE0QixFQUFFLGVBQWUsRUFBRSxnQkFBZ0I7RUFDNUYsZ0JBQWdCLHVCQUF1QixDQUFDO0VBQ3hDLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLGVBQWUsZUFBZSxDQUFDO0VBQy9CLFVBQVUsc0JBQXNCLEVBQUU7RUFDbEM7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUdBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7QUFFQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7O0FBRUE7O0VBRUUsZ0JBQWdCLHVCQUF1QixDQUFDO0FBQzFDOztBQUVBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQztBQUNBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQztBQUNBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7Ozs7O0FBTUEsVUFBVSxhQUFhLEVBQUUsMkJBQTJCLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDN0YsY0FBYyxhQUFhO0FBQzNCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0VBQ0Usa0JBQWtCLGVBQWUsRUFBRSxpQkFBaUI7RUFDcEQ7O0VBRUEsYUFBYSxjQUFjLENBQUM7QUFDOUIsRUFBRSx5QkFBeUIsQ0FBQztFQUMxQixnQkFBZ0IsaUJBQWlCLEVBQUUsWUFBWSxHQUFHLFdBQVcsRUFBRSxTQUFTLENBQUM7QUFDM0U7RUFDRSxhQUFhO01BQ1QsaUVBQWlFO01BQ2pFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25COzs7O0FBSUosZ0JBQWdCLGdCQUFnQjtBQUNoQyxPQUFPLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO0FBQ3RELFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsU0FBUyxpQkFBaUIsRUFBRTtBQUM1QixRQUFRLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRTtBQUM5RSxRQUFRLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWU7QUFDN0QsWUFBWSxlQUFlLENBQUMsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUM7QUFDeEcsVUFBVSxzQkFBc0IsQ0FBQztBQUNqQyxXQUFXLHFCQUFxQixDQUFDO0FBQ2pDLFdBQVcsVUFBVTtBQUNyQixNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUN4QyxRQUFRLGNBQWM7QUFDdEIsUUFBUSx1QkFBdUIsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztBQUN4RSxXQUFXLFlBQVk7QUFDdkIsUUFBUSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7QUFDbkYsVUFBVSxjQUFjLEVBQUUsa0JBQWtCLElBQUksZ0JBQWdCLEVBQUUsb0JBQW9CO0FBQ3RGLEVBQUUsd0JBQXdCOztBQUUxQixRQUFRLDRCQUE0QixDQUFDO0FBQ3JDLE1BQU0sMkJBQTJCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxLQUFLLHFCQUFxQjtJQUMxQixPQUFPLDBCQUEwQjtFQUNuQztFQUNBLHVCQUF1QixpQ0FBaUM7RUFDeEQ7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscURBQXFEO0lBQ3JELDZDQUE2QztFQUMvQztFQUNBLHNDQUFzQywwQkFBMEI7RUFDaEU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQixFQUFFLG1CQUFtQjtFQUM1QztFQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtFQUNoRCxxQ0FBcUM7O0FBRXZDLFdBQVcsV0FBVyxFQUFFLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRyYWluK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1K0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFiZWwmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcclxuLypcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWx1bW5pK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbitTa2V0Y2g6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbmlvOndnaHRANzAwJmZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhdStQaGlsb21lbmUrT25lJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuXHJcblxyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gLmltZ0FwYXJlY2V7ZGlzcGxheTogbm9uZTt9XHJcblxyXG4gLm51bWVyb0VkaWNpb257ZGlzcGxheTogbm9uZTt9XHJcbi5hY29te21hcmdpbi10b3A6MzcwcHg7IH1cclxuLmZ1ZW50ZVRlc3R7ICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7fVxyXG4ucHVibGlNb2JpbGV7ZGlzcGxheTpub25lfVxyXG4gLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XHJcbn1cclxuLmxvZ29ubXt3aWR0aDogMTUwcHg7ICBtYXJnaW4tbGVmdDotMjBweH1cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMikge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jYXJ0ZWxJbmljaW97ZGlzcGxheTogbm9uZTt9XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMykge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCg0KSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG4vKiBURVhUTyBDRU5UUk8gQ1VMVFVSQUwgQVJHRU5USU5PIERFIE1PTlRBw4PCkUEgKi9cclxuLmN1ZXJwb3tcclxuIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNTEsIDUxLCA1MSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuaDF7Zm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO31cclxuLnF1aWVuZXNTb21vc3tcclxuICAgbGVmdDoyMjBweDtcclxuICAgZm9udC1zaXplOjEycHg7XHJcbiAgIG1hcmdpbi10b3A6MTJweDtcclxuICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb3RlclRleHR7bWFyZ2luLXRvcDotMTBweDtcclxuICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjt9XHJcblxyXG5cclxuLmZvcm1hclBhcnRle1xyXG4gICBsZWZ0OjM4MHB4O1xyXG4gICBmb250LXNpemU6MTJweDtcclxuICAgbWFyZ2luLXRvcDoxMnB4O1xyXG4gICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRleHRMb2dve1xyXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgY29sb3I6IHJnYmEoMTk0LCAxOCwgMTgsIDAuNzMzKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSg1NiwgNTYsIDU2LCAwLjQzMSk7XHJcbiAgICAgICAgfVxyXG5cclxuLmluZGljZXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjp3aGl0ZX1cclxuXHJcbiAgLmVkaU1vYmlsIHtkaXNwbGF5OiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyODAwO21hcmdpbi10b3A6MzBweDsgbWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4IDt9XHJcblxyXG4udGV4dEZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgIH1cclxuXHJcbi5tb2JpbGV7ZGlzcGxheTpub25lO31cclxuLnRleHRCYXJyYU5lZ3JhMiB7XHJcbiAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gY29sb3I6YmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxufVxyXG5cclxuLnRleHRCYXJyYU5lZ3JhIHtcclxuICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6b3JhbmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbn1cclxuXHJcbi8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbmRvdHJhc3BhcmVudGUucG5nJyk7ICovXHJcbi5mb25kb3tcclxuICAgICBtYXJnaW4tdG9wOi00cHg7XHJcbiAgICAgbWluLWhlaWdodDogMTMwcHg7IH1cclxuXHJcbi8qIGNvbG9yIHkgYWx0dXJhIGRlIGxhIHByaW1lcmEgYmFycmEgbmVncmEgY29uIGVsIGJ1c2NhZG9yICovXHJcbi5iYXJyYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4ubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4uc3VzY3JpYmlyc2V7Y3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KSA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5iYXJyYUluZm97YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBtYXJnaW46MjBweDsgbWFyZ2luLXRvcDowcHggOyB0ZXh0LWFsaWduOiByaWdodDt9XHJcblxyXG4uZWRpdG9yaWFsIHtjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7IHBhZGRpbmc6IDIwcHg7IGZvbnQtc2l6ZTogMzBweDt9XHJcbi5zdXNjcml7bWFyZ2luLXRvcDo0cHg7IHBhZGRpbmctbGVmdDozMHB4O31cclxuLnN1c2NyaTJ7Y29sb3I6YmxhY2sgO21hcmdpbi10b3A6MHB4OyBwYWRkaW5nLXJpZ2h0OjIwcHh9XHJcbi5zdXNjcmliaXJzZTJ7Y3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDo3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5cclxuaDV7IGZvbnQtZmFtaWx5OiAnQWJlbCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZvbmRvRWRpdG9yaWFsIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyODAwO1xyXG4gIC8qIG9iamVjdC1maXQ6IGNvdmVyOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy8xLnBuZycpOyAqL1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHh9XHJcblxyXG4uZWRpdG9yaWFsUGFycmFmb3tcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbn1cclxuXHJcbi5sb2dvQ0NBTXt3aWR0aDogMTI1cHg7IG1hcmdpbi10b3A6MjM2cHg7ICBtYXJnaW4tbGVmdDogMTQzcHg7IG1hcmdpbi1yaWdodDogMHB4O31cclxuXHJcbi5jYXBpdGFsOjpmaXJzdC1sZXR0ZXIge1xyXG5cclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjpvcmFuZ2U7XHJcblxyXG59XHJcblxyXG4ubnVtQW50ZXJpb3J7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IG1hcmdpbi1ib3R0b206IC0xMHB4OyBmb250LXNpemU6IDI1cHg7ICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuXHJcbn1cclxuXHJcbmF7Y29sb3I6cmdiKDI1NSwgMTg3LCA2MSkgOyBmb250LXNpemU6IDEzcHg7fVxyXG5cclxuLnRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgXHJcblxyXG5cclxufVxyXG5cclxuLnRpdHVsbyB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIHBhZGRpbmc6MTBweFxyXG5cclxufVxyXG4uYW5pbWFOYXZ7dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgIGNvbG9yOm9yYW5nZSA7IH1cclxuXHJcblxyXG4uYmFycmFUZXh0b3tmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7IGNvbG9yOndoaXRlIDsgZm9udC1zaXplOiAxMnB4OyBsZXR0ZXItc3BhY2luZzogMnB4OyB9XHJcblxyXG4uY29sb3JCYXJyYU1lbnV7YmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjsgfVxyXG4ubG9nb3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHdpZHRoOjE4MHB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDotNDBweDtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOTVweDtcclxuICAgIHRvcDoycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuXHJcbi50ZXh0bG9nb0NlbnRyb3tcclxuICAgIHRvcDo2MHB4O1xyXG4gICAgbGVmdDogMTE4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB9XHJcbi50ZXh0bG9nb0FiYWpve1xyXG4gICAgdG9wOjk2cHg7XHJcbiAgICBsZWZ0OiAxMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIH1cclxuXHJcbi5hbmltYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcblxyXG5cclxufVxyXG4uYW5pbWE6YWN0aXZlIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KVxyXG5cclxufVxyXG5cclxuLmFuaW1hMjpob3ZlcntcclxuICBjb2xvcjpibGFuY2hlZGFsbW9uZDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxOSwgMjE5LCAyMTksIDAuMDY4KTtcclxuICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uc3ViZWZ1ZW50ZXttYXJnaW4tdG9wOiAyMHB4OzsgbWFyZ2luLWxlZnQ6IDMwcHg7fVxyXG4uYW5pbWEyOmFjdGl2ZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxudWx7bWFyZ2luOjBweDsgcGFkZGluZzo1cHg7bWFyZ2luLWxlZnQ6IDE1cHh9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgc3BhbiB7bWFyZ2luLWxlZnQ6NHB4fVxyXG5cclxuLm1lbnVUZXh0byB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4IWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG5cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qQ29sb3IgdGV4dG8qL1xyXG4gICAgICAgIG1hcmdpbi10b3A6M3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWRsZWZ0e3BhZGRpbmctbGVmdDoxMHB4IWltcG9ydGFudH1cclxuICAgICAgICAgICAgICAgIC5tZW51VGV4dG8gOmFjdGl2ZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qQ29sb3IgdGV4dG8qL1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjphbGljZWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuLmFjdGl2b3tcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2MCwgMjQsIDApOyAgLypDb2xvciB0ZXh0by1hY3Rpdm8qL1xyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Mjc0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAucXVpdGFyVGV4dG9Mb2dve2Rpc3BsYXk6bm9uZSB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvbmRvRWRpdG9yaWFsIHtoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAucXVpdGFyODAwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudGV4dFVwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbiAgICAgICAgICAgICAgICAudGV4dERvd257Zm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDozMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNjY2cHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNDAycHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI0JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI0JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxODAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MjBweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogMTIwcHg7fVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MDBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogOCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiA4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMzQ5cHgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi0xMHB4fVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMDBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMTIwcHgpXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLmxvZ29ubXt3aWR0aDogMTUwcHg7ICBtYXJnaW4tbGVmdDotNXB4fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDAlOyB9XHJcbiAgICAgICAgICAgIC5tYXJnZW5Se21hcmdpbi1yaWdodDogMCU7fVxyXG4gICAgICAgICAgICAubG9nb0NDQU17bWFyZ2luLWxlZnQ6IDYwcHg7fVxyXG4gICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi0yN3B4fVxyXG4gICAgICAgICAgICAucXVpdGFyMTAwMHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NzY2cHgpe1xyXG4gICAgICAgICAgICAgIC5mb25kb0VkaXRvcmlhbHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHg7fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5pbWdTb2JyYW50ZXsgcGFkZGluZzoyMHB4OyBwYWRkaW5nLWxlZnQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuICAgICAgICAgICAgICAuaW1nQXBhcmVjZXtkaXNwbGF5OmJsb2NrOyBwYWRkaW5nOiAzMHB4OyBtYXJnaW4tdG9wOi0xMHB4OyBwYWRkaW5nLWxlZnQ6IDEzcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuXHJcblxyXG4gICAgICAgICAgICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIC5udW1BbnRlcmlvcntmb250LXNpemU6IDI1cHg7bWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDsgbWFyZ2luLXRvcDogNXB4OyBtYXJnaW4tbGVmdDoxNXB4fVxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDIyMHB4IWltcG9ydGFudDt9XHJcbiAgLmluZGljZXtkaXNwbGF5OiBub25lO31cclxuICAubnVtZXJvRWRpY2lvbntkaXNwbGF5OiBpbmxpbmU7fVxyXG4gIC5jYXJvdXNlbHtoZWlnaHQ6NDAwcHghaW1wb3J0YW50OyB9XHJcbiAgLkZsZXhDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMWQ1ODtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMjYwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAyOTBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDozNTRweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDMxMHB4IWltcG9ydGFudDt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjM0MnB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMzMwcHghaW1wb3J0YW50O31cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozMDZweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDM0MHB4IWltcG9ydGFudDt9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6Mjk2cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzNzBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNhcm91c2Vse2hlaWdodDo1MDBweCA7IGJhY2tncm91bmQtY29sb3I6ICM3ZTVhMTcwMDsgIG1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMjBweCA7fVxyXG4uY2FydGVsSW5pY2lve2Rpc3BsYXk6YmxvY2t9XHJcbi5GbGV4Q29udGFpbmVyIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuICAuZWRpdG9yaWFsUGFycmFmb3tmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLnB1YmxpTW9iaWxle2Rpc3BsYXk6IGJsb2NrO31cclxucHtmb250LXNpemU6IDE0cHghaW1wb3J0YW50O31cclxuICAuaW1hZ2VuTG9hZGluZ3sgcG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTotMjBweDsgIHJpZ2h0OiAwcHggOyBsZWZ0OjBweCA7fVxyXG4uZm9uZG9FZGl0b3JpYWx7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9uZG9FZGl0b3JpYWwuanBnJyk7ICovXHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBwYztcclxuICAgIH1cclxuXHJcblxyXG5cclxuLmNvbG9yQmFycmFNZW51e21hcmdpbi10b3A6LTMwcHh9XHJcbi5mb25kb3tiYWNrZ3JvdW5kLWltYWdlOiBub25lO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuLm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAwcHg7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwcHg7IH1cclxuLmluZGljZXtmb250LXNpemU6MjVweDttYXJnaW4tbGVmdDoxNXB4OyBtYXJnaW4tYm90dG9tOjEwcHg7bWFyZ2luLXRvcDogMTBweDsgfVxyXG4uYmFubmVye21hcmdpbi1sZWZ0OjIwcHg7IHBhZGRpbmctcmlnaHQ6NDBweDsgbWFyZ2luLXRvcDozMHB4fVxyXG4uc3ViZWZ1ZW50ZXtmb250LXNpemU6IDIwcHg7bWFyZ2luLWxlZnQ6MjBweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6LTEycHghaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLnJlc3BvbnNpe3dpZHRoOiAxMTBweCFpbXBvcnRhbnQ7fVxyXG4ucmVzcG9uc2kye3dpZHRoOiA5MHB4IWltcG9ydGFudDt9XHJcbi5iYXJyYUluZm97bWFyZ2luOjBweH1cclxuLmxvZ297d2lkdGg6IDEzMHB4OyAgbWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLm1vYmlsZXtkaXNwbGF5OmlubGluZX1cclxuLmN1ZXJwb3tiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTsgIHBhZGRpbmctbGVmdDogMHB4OyAgbWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG4ucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLnRleHRVcHtmb250LXNpemU6MzBweDsgbWFyZ2luLXRvcDotNDVweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbi50ZXh0RG93bntmb250LXNpemU6MzBweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyAgIG1hcmdpbi10b3A6LTU1cHg7IGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5we2ZvbnQtc2l6ZToxNHB4IWltcG9ydGFudH1cclxuXHJcbi5mb290ZXJ7bWFyZ2luLXRvcDogLTIyN3B4IWltcG9ydGFudDt9XHJcbi5hY29te21hcmdpbi10b3A6IC02MXB4IWltcG9ydGFudDt9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94IWltcG9ydGFudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogODNweDtcclxuICAgIHRvcDogOC41cHg7XHJcbiAgICBsZWZ0OiA4LjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhIHRyYW5zcGFyZW50ICMwYTBhMGEgdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IGxkaW8tejdmdTZlMWRlbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDcwcHggMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIGRpdjphZnRlciB7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIHRvcDogMjJweDtcclxuICAgIGJveC1zaGFkb3c6IDcwcHggMCAwIDAgIzBhMGEwYTtcclxuICB9XHJcbiAgLmxvYWRpbmdpby1zcGlubmVyLWR1YWwtcmluZy14ZzF2bnJmMmI2byB7XHJcbiAgICB3aWR0aDogODRweDtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDAuODQpO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuXHJcbi5pbWdtb2JpbGV7d2lkdGg6MTAwcHg7IG1hcmdpbi10b3A6NzRweH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1979:
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/lateral-intercalado/lateral-intercalado.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LateralIntercaladoComponent": () => (/* binding */ LateralIntercaladoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../servicios/crud.service */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a0) {
  return {
    "correccionTitulo": a0
  };
};
function LateralIntercaladoComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "h1", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r0.estado));
  }
}
function LateralIntercaladoComponent_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r1.estado));
  }
}
function LateralIntercaladoComponent_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r19.nota.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r20.nota[0].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_7_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.cut(ctx_r21.nota == null ? null : ctx_r21.nota.resultadoCategoria));
  }
}
function LateralIntercaladoComponent_div_7_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.nota[0].categoria);
  }
}
function LateralIntercaladoComponent_div_7_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.nota == null ? null : ctx_r23.nota.art1);
  }
}
function LateralIntercaladoComponent_div_7_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.nota[0].titulo);
  }
}
const _c1 = function (a0, a1) {
  return {
    "col-sm-6 col-sm-6 col-md-12 col-lg-12 col-xl-12\tcol-xxl-12": a0,
    "col-12": a1
  };
};
function LateralIntercaladoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_7_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_7_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_7_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_7_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_7_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_7_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r2.estado, !ctx_r2.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.resultadoImagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota[0] == null ? null : ctx_r2.nota[0]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[0] == null ? null : ctx_r2.nota[0].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.resultadoCategoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[0] == null ? null : ctx_r2.nota[0].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota[0] == null ? null : ctx_r2.nota[0]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[0] == null ? null : ctx_r2.nota[0].titulo);
  }
}
function LateralIntercaladoComponent_div_8_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r25.nota.resultadoImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_8_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r26.nota[1].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_8_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.cut(ctx_r27.nota == null ? null : ctx_r27.nota.resultadoCategoria2));
  }
}
function LateralIntercaladoComponent_div_8_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.nota[0].categoria);
  }
}
function LateralIntercaladoComponent_div_8_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.nota == null ? null : ctx_r29.nota.art2);
  }
}
function LateralIntercaladoComponent_div_8_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.nota[1].titulo);
  }
}
function LateralIntercaladoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_8_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_8_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_8_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_8_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_8_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_8_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r3.estado, !ctx_r3.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.resultadoImagen2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota[1] == null ? null : ctx_r3.nota[1]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[0] == null ? null : ctx_r3.nota[0].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.resultadoCategoria2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[1] == null ? null : ctx_r3.nota[1].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota[1] == null ? null : ctx_r3.nota[1]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[1] == null ? null : ctx_r3.nota[1].titulo);
  }
}
function LateralIntercaladoComponent_div_9_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r31.nota.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_9_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r32.nota[2].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_9_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.cut(ctx_r33.nota == null ? null : ctx_r33.nota.resultadoCategoria3));
  }
}
function LateralIntercaladoComponent_div_9_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.nota[2].categoria);
  }
}
function LateralIntercaladoComponent_div_9_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.nota == null ? null : ctx_r35.nota.art3);
  }
}
function LateralIntercaladoComponent_div_9_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.nota[2].titulo);
  }
}
function LateralIntercaladoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_9_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_9_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_9_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_9_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_9_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_9_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r4.estado, !ctx_r4.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoImagen3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota[2] == null ? null : ctx_r4.nota[2]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[2] == null ? null : ctx_r4.nota[2].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoCategoria3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[2] == null ? null : ctx_r4.nota[2].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota[2] == null ? null : ctx_r4.nota[2]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[2] == null ? null : ctx_r4.nota[2].titulo);
  }
}
function LateralIntercaladoComponent_h1_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r5.estado));
  }
}
function LateralIntercaladoComponent_div_15_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r37.nota.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_15_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r38.nota[3].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_15_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.cut(ctx_r39.nota == null ? null : ctx_r39.nota.resultadoCategoria3));
  }
}
function LateralIntercaladoComponent_div_15_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.nota[3].categoria);
  }
}
function LateralIntercaladoComponent_div_15_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.nota == null ? null : ctx_r41.nota.art4);
  }
}
function LateralIntercaladoComponent_div_15_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.nota[3].titulo);
  }
}
function LateralIntercaladoComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_15_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_15_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_15_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_15_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_15_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_15_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r6.estado, !ctx_r6.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoImagen4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota[3] == null ? null : ctx_r6.nota[3]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[3] == null ? null : ctx_r6.nota[3].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoCategoria4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[3] == null ? null : ctx_r6.nota[3].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.art4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota[3] == null ? null : ctx_r6.nota[3]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[3] == null ? null : ctx_r6.nota[3].titulo);
  }
}
function LateralIntercaladoComponent_div_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r43.nota.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r44.nota[4].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_16_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r45.cut(ctx_r45.nota == null ? null : ctx_r45.nota.resultadoCategoria5));
  }
}
function LateralIntercaladoComponent_div_16_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.nota[4].categoria);
  }
}
function LateralIntercaladoComponent_div_16_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r47.nota == null ? null : ctx_r47.nota.art5);
  }
}
function LateralIntercaladoComponent_div_16_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r48.nota[4].titulo);
  }
}
function LateralIntercaladoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_16_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_16_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_16_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_16_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_16_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_16_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r7.estado, !ctx_r7.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoImagen5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota[4] == null ? null : ctx_r7.nota[4]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota[4] == null ? null : ctx_r7.nota[4].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoCategoria5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota[4] == null ? null : ctx_r7.nota[4].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota == null ? null : ctx_r7.nota.art5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota[4] == null ? null : ctx_r7.nota[4]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.nota[4] == null ? null : ctx_r7.nota[4].titulo);
  }
}
function LateralIntercaladoComponent_div_17_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r49.nota.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_17_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r50.nota[5].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_17_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r51.cut(ctx_r51.nota == null ? null : ctx_r51.nota.resultadoCategoria6));
  }
}
function LateralIntercaladoComponent_div_17_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r52.nota[5].categoria);
  }
}
function LateralIntercaladoComponent_div_17_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.nota == null ? null : ctx_r53.nota.art6);
  }
}
function LateralIntercaladoComponent_div_17_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r54.nota[5].titulo);
  }
}
function LateralIntercaladoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_17_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_17_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_17_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_17_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_17_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_17_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r8.estado, !ctx_r8.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoImagen6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota[5] == null ? null : ctx_r8.nota[5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota[5] == null ? null : ctx_r8.nota[5].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoCategoria6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota[5] == null ? null : ctx_r8.nota[5].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota == null ? null : ctx_r8.nota.art6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota[5] == null ? null : ctx_r8.nota[5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.nota[5] == null ? null : ctx_r8.nota[5].titulo);
  }
}
function LateralIntercaladoComponent_hr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
  }
}
function LateralIntercaladoComponent_h1_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r10.estado));
  }
}
function LateralIntercaladoComponent_div_23_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r55.nota.resultadoImagen7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_23_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r56.nota[6].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_23_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.cut(ctx_r57.nota == null ? null : ctx_r57.nota.resultadoCategoria7));
  }
}
function LateralIntercaladoComponent_div_23_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r58.nota[6].categoria);
  }
}
function LateralIntercaladoComponent_div_23_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r59.nota == null ? null : ctx_r59.nota.art7);
  }
}
function LateralIntercaladoComponent_div_23_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r60.nota[6].titulo);
  }
}
function LateralIntercaladoComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_23_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_23_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_23_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_23_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_23_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_23_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r11.estado, !ctx_r11.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoImagen7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota[6] == null ? null : ctx_r11.nota[6]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota[6] == null ? null : ctx_r11.nota[6].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoCategoria7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota[6] == null ? null : ctx_r11.nota[6].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota == null ? null : ctx_r11.nota.art7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota[6] == null ? null : ctx_r11.nota[6]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nota[6] == null ? null : ctx_r11.nota[6].titulo);
  }
}
function LateralIntercaladoComponent_div_24_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r61.nota.resultadoImagen8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_24_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r62.nota[7].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_24_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r63.cut(ctx_r63.nota == null ? null : ctx_r63.nota.resultadoCategoria8));
  }
}
function LateralIntercaladoComponent_div_24_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r64.nota[7].categoria);
  }
}
function LateralIntercaladoComponent_div_24_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r65.nota == null ? null : ctx_r65.nota.art8);
  }
}
function LateralIntercaladoComponent_div_24_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r66.nota[7].titulo);
  }
}
function LateralIntercaladoComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_24_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_24_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_24_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_24_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_24_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_24_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r12.estado, !ctx_r12.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoImagen8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota[7] == null ? null : ctx_r12.nota[7]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota[7] == null ? null : ctx_r12.nota[7].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoCategoria8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota[7] == null ? null : ctx_r12.nota[7].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota == null ? null : ctx_r12.nota.art8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota[7] == null ? null : ctx_r12.nota[7]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.nota[7] == null ? null : ctx_r12.nota[7].titulo);
  }
}
function LateralIntercaladoComponent_div_25_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r67.nota.resultadoImagen9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_25_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r68.nota[8].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_25_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r69.cut(ctx_r69.nota == null ? null : ctx_r69.nota.resultadoCategoria9));
  }
}
function LateralIntercaladoComponent_div_25_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r70.nota[8].categoria);
  }
}
function LateralIntercaladoComponent_div_25_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r71.nota == null ? null : ctx_r71.nota.art9);
  }
}
function LateralIntercaladoComponent_div_25_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r72.nota[8].titulo);
  }
}
function LateralIntercaladoComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_25_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_25_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_25_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_25_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_25_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_25_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r13.estado, !ctx_r13.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota == null ? null : ctx_r13.nota.resultadoImagen9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota[8] == null ? null : ctx_r13.nota[8]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota[8] == null ? null : ctx_r13.nota[8].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota == null ? null : ctx_r13.nota.resultadoCategoria9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota[8] == null ? null : ctx_r13.nota[8].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota == null ? null : ctx_r13.nota.art9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota[8] == null ? null : ctx_r13.nota[8]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.nota[8] == null ? null : ctx_r13.nota[8].titulo);
  }
}
function LateralIntercaladoComponent_hr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
  }
}
function LateralIntercaladoComponent_h1_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r15.estado));
  }
}
function LateralIntercaladoComponent_div_31_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r73.nota.resultadoImagen10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_31_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r74.nota[9].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_31_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r75.cut(ctx_r75.nota == null ? null : ctx_r75.nota.resultadoCategoria10));
  }
}
function LateralIntercaladoComponent_div_31_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r76.nota[9].categoria);
  }
}
function LateralIntercaladoComponent_div_31_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r77.nota == null ? null : ctx_r77.nota.art10);
  }
}
function LateralIntercaladoComponent_div_31_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r78.nota[9].titulo);
  }
}
function LateralIntercaladoComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_31_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_31_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_31_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_31_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_31_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_31_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r16.estado, !ctx_r16.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r16.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota == null ? null : ctx_r16.nota.resultadoImagen10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r16.nota[9] == null ? null : ctx_r16.nota[9]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota[9] == null ? null : ctx_r16.nota[9].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota == null ? null : ctx_r16.nota.resultadoCategoria10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota[9] == null ? null : ctx_r16.nota[9].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r16.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota == null ? null : ctx_r16.nota.art10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r16.nota[9] == null ? null : ctx_r16.nota[9]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.nota[9] == null ? null : ctx_r16.nota[9].titulo);
  }
}
function LateralIntercaladoComponent_div_32_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r79.nota.resultadoImagen11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_32_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r80.nota[10].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_32_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r81.cut(ctx_r81.nota == null ? null : ctx_r81.nota.resultadoCategoria11));
  }
}
function LateralIntercaladoComponent_div_32_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r82.nota[10].categoria);
  }
}
function LateralIntercaladoComponent_div_32_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r83.nota == null ? null : ctx_r83.nota.art11);
  }
}
function LateralIntercaladoComponent_div_32_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r84.nota[10].titulo);
  }
}
function LateralIntercaladoComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_32_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_32_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_32_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_32_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_32_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_32_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r17.estado, !ctx_r17.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r17.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota == null ? null : ctx_r17.nota.resultadoImagen11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r17.nota[10] == null ? null : ctx_r17.nota[10]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota[10] == null ? null : ctx_r17.nota[10].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota == null ? null : ctx_r17.nota.resultadoCategoria11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota[10] == null ? null : ctx_r17.nota[10].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r17.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota == null ? null : ctx_r17.nota.art11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r17.nota[10] == null ? null : ctx_r17.nota[10]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.nota[10] == null ? null : ctx_r17.nota[10].titulo);
  }
}
function LateralIntercaladoComponent_div_33_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r85.nota.resultadoImagen12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_33_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r86.nota[11].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LateralIntercaladoComponent_div_33_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r87.cut(ctx_r87.nota == null ? null : ctx_r87.nota.resultadoCategoria12));
  }
}
function LateralIntercaladoComponent_div_33_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r88.nota[11].categoria);
  }
}
function LateralIntercaladoComponent_div_33_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r89.nota == null ? null : ctx_r89.nota.art12);
  }
}
function LateralIntercaladoComponent_div_33_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r90.nota[11].titulo);
  }
}
function LateralIntercaladoComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_div_33_img_2_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LateralIntercaladoComponent_div_33_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_div_33_h6_6_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_33_h6_7_Template, 3, 1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_33_h1_9_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LateralIntercaladoComponent_div_33_h1_11_Template, 2, 1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r18.estado, !ctx_r18.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r18.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota == null ? null : ctx_r18.nota.resultadoImagen12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r18.nota[11] == null ? null : ctx_r18.nota[11]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota[11] == null ? null : ctx_r18.nota[11].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota == null ? null : ctx_r18.nota.resultadoCategoria12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota[11] == null ? null : ctx_r18.nota[11].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r18.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota == null ? null : ctx_r18.nota.art12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r18.nota[11] == null ? null : ctx_r18.nota[11]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.nota[11] == null ? null : ctx_r18.nota[11].titulo);
  }
}
class LateralIntercaladoComponent {
  constructor(crudService) {
    this.crudService = crudService;
    this.articulos = [];
    this.articuloBusqueda = [];
  }
  ngOnInit() {
    console.log('badenra', this.nota);
  }
  sumarContador(x) {
    if (x === 13) {
      var aux = this.anuncios[0]?.contador13 + 1;
      this.anuncios[0].contador13 = aux;
      this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res => {
        console.log(res, this.anuncios[0].contador13);
      });
    }
    if (x === 14) {
      var aux = this.anuncios[0]?.contador14 + 1;
      this.anuncios[0].contador14 = aux;
      this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res => {
        console.log(res, this.anuncios[0].contador14);
      });
    }
    if (x === 15) {
      var aux = this.anuncios[0]?.contador15 + 1;
      this.anuncios[0].contador15 = aux;
      this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res => {
        console.log(res, this.anuncios[0].contador15);
      });
    }
    if (x === 16) {
      var aux = this.anuncios[0]?.contador16 + 1;
      this.anuncios[0].contador16 = aux;
      this.crudService.modificarAnuncios(this.anuncios[0]).subscribe(res => {
        console.log(res, this.anuncios[0].contador16);
      });
    }
  }
  cut(value) {
    return value;
  }
}
LateralIntercaladoComponent.ɵfac = function LateralIntercaladoComponent_Factory(t) {
  return new (t || LateralIntercaladoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
LateralIntercaladoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LateralIntercaladoComponent,
  selectors: [["app-lateral-intercalado"]],
  inputs: {
    nota: ["data", "nota"],
    anuncios: "anuncios",
    estado: "estado"
  },
  decls: 34,
  vars: 27,
  consts: [[2, "margin-left", "10px", "margin-right", "10px"], ["class", "titulo", "style", "margin-left:0px;margin-bottom: 0px; color:orange; border-left: 4px solid orange;padding-left: 7px;", 3, "ngClass", 4, "ngIf"], [1, "row"], ["target", "_blank", "rel", "noopener noreferrer", 2, "margin-bottom", "20px", 3, "href", "click"], ["width", "100%", "height", "auto", "alt", "", 3, "src"], ["class", "titulo", "style", "margin-left:10px;margin-bottom: 0px; color:orange; border-left: 4px solid orange;padding-left: 7px;", 3, "ngClass", 4, "ngIf"], ["class", "card col-4", 3, "ngClass", 4, "ngIf"], ["style", "margin-top: 0px!important;", "class", "card col-4", 3, "ngClass", 4, "ngIf"], ["style", "margin-top:0px;", "class", "card col-4", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["class", "titulo", "style", "margin-left:10px;margin-bottom: 20px; color:orange; border-left: 4px solid orange;padding-left: 7px;", 3, "ngClass", 4, "ngIf"], [1, "titulo", 2, "margin-left", "0px", "margin-bottom", "0px", "color", "orange", "border-left", "4px solid orange", "padding-left", "7px", 3, "ngClass"], [1, "titulo", 2, "margin-left", "10px", "margin-bottom", "0px", "color", "orange", "border-left", "4px solid orange", "padding-left", "7px", 3, "ngClass"], [1, "card", "col-4", 3, "ngClass"], ["target", "_blank", 3, "routerLink"], ["class", "card-img-top sombra", "alt", "", "height", "200px", "style", "object-fit: cover;", 3, "src", 4, "ngIf"], [1, "card-body"], ["class", "categoria", 4, "ngIf"], ["class", "card-title titulo", 4, "ngIf"], ["alt", "", "height", "200px", 1, "card-img-top", "sombra", 2, "object-fit", "cover", 3, "src"], [1, "categoria"], [1, "card-title", "titulo"], [1, "card", "col-4", 2, "margin-top", "0px!important", 3, "ngClass"], [1, "card", "col-4", 2, "margin-top", "0px", 3, "ngClass"], [1, "titulo", 2, "margin-left", "10px", "margin-bottom", "20px", "color", "orange", "border-left", "4px solid orange", "padding-left", "7px", 3, "ngClass"]],
  template: function LateralIntercaladoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LateralIntercaladoComponent_h1_2_Template, 1, 3, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LateralIntercaladoComponent_Template_a_click_4_listener() {
        return ctx.sumarContador(13);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LateralIntercaladoComponent_h1_6_Template, 2, 3, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LateralIntercaladoComponent_div_7_Template, 12, 14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LateralIntercaladoComponent_div_8_Template, 12, 14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LateralIntercaladoComponent_div_9_Template, 12, 14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LateralIntercaladoComponent_Template_a_click_11_listener() {
        return ctx.sumarContador(14);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LateralIntercaladoComponent_h1_14_Template, 2, 3, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LateralIntercaladoComponent_div_15_Template, 12, 14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LateralIntercaladoComponent_div_16_Template, 12, 14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LateralIntercaladoComponent_div_17_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LateralIntercaladoComponent_Template_a_click_19_listener() {
        return ctx.sumarContador(15);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LateralIntercaladoComponent_hr_21_Template, 1, 0, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LateralIntercaladoComponent_h1_22_Template, 2, 3, "h1", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LateralIntercaladoComponent_div_23_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LateralIntercaladoComponent_div_24_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LateralIntercaladoComponent_div_25_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LateralIntercaladoComponent_Template_a_click_27_listener() {
        return ctx.sumarContador(16);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LateralIntercaladoComponent_hr_29_Template, 1, 0, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LateralIntercaladoComponent_h1_30_Template, 2, 3, "h1", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LateralIntercaladoComponent_div_31_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LateralIntercaladoComponent_div_32_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LateralIntercaladoComponent_div_33_Template, 12, 14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.anuncios[0].link13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.anuncios[0] == null ? null : ctx.anuncios[0].img13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art2 || (ctx.nota[1] == null ? null : ctx.nota[1].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art3 || (ctx.nota[2] == null ? null : ctx.nota[2].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.anuncios[0].link14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.anuncios[0] == null ? null : ctx.anuncios[0].img14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art4 || (ctx.nota[3] == null ? null : ctx.nota[3].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art5 || (ctx.nota[4] == null ? null : ctx.nota[4].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art6 || (ctx.nota[5] == null ? null : ctx.nota[5].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.anuncios[0].link15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.anuncios[0] == null ? null : ctx.anuncios[0].img15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art7 || (ctx.nota[7] == null ? null : ctx.nota[7].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art7 || (ctx.nota[7] == null ? null : ctx.nota[7].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art7 || (ctx.nota[6] == null ? null : ctx.nota[6].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art8 || (ctx.nota[7] == null ? null : ctx.nota[7].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art9 || (ctx.nota[8] == null ? null : ctx.nota[8].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.anuncios[0].link16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.anuncios[0] == null ? null : ctx.anuncios[0].img16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art10 || (ctx.nota[9] == null ? null : ctx.nota[9].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art10 || (ctx.nota[9] == null ? null : ctx.nota[9].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art10 || (ctx.nota[9] == null ? null : ctx.nota[9].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art11 || (ctx.nota[10] == null ? null : ctx.nota[10].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art12 || (ctx.nota[11] == null ? null : ctx.nota[11].titulo));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Staatliches&display=swap);@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@574&display=swap);.categoria[_ngcontent-%COMP%]{\r\n    margin-left:-15px;\r\n    margin-top:-10px;\r\n    color:rgb(243, 178, 0);\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n\r\n\r\n  }\r\n\r\n  .correccionTitulo[_ngcontent-%COMP%]{margin-left:10px;}\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 700;\r\n  line-height: 25px;\r\n  letter-spacing: -1px;\r\n  margin-top:0px;\r\n  margin-left:-15px;\r\n  color:rgb(68, 68, 68);\r\n  font-size: 25px;\r\n}\r\na[_ngcontent-%COMP%]{text-decoration: none;}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:-10px; font-size: 18px;  font-family: 'Roboto', sans-serif; line-height: 26px;}\r\n\r\n\r\n.card[_ngcontent-%COMP%]{border:none; margin-top: 20px; margin-top: 20px; margin-bottom: 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbGF0ZXJhbC1pbnRlcmNhbGFkby9sYXRlcmFsLWludGVyY2FsYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTs7O0VBR2pCOztFQUVBLGtCQUFrQixnQkFBZ0IsQ0FBQzs7QUFFckM7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBLEVBQUUscUJBQXFCLENBQUM7O0FBRXhCLFdBQVcsZ0JBQWdCLEVBQUUsZUFBZSxHQUFHLGlDQUFpQyxFQUFFLGlCQUFpQixDQUFDOzs7QUFHcEcsTUFBTSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZmFtaWx5PVN0YWF0bGljaGVzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDU3NCZkaXNwbGF5PXN3YXAnKTtcclxuLmNhdGVnb3JpYXtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xyXG4gICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgIGNvbG9yOnJnYigyNDMsIDE3OCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuY29ycmVjY2lvblRpdHVsb3ttYXJnaW4tbGVmdDoxMHB4O31cclxuXHJcbi50aXR1bG97XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbWFyZ2luLXRvcDowcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgY29sb3I6cmdiKDY4LCA2OCwgNjgpO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5he3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcblxyXG4uc3VidGl0dWxve21hcmdpbi10b3A6LTEwcHg7IGZvbnQtc2l6ZTogMThweDsgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgbGluZS1oZWlnaHQ6IDI2cHg7fVxyXG5cclxuXHJcbi5jYXJke2JvcmRlcjpub25lOyBtYXJnaW4tdG9wOiAyMHB4OyBtYXJnaW4tdG9wOiAyMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O31cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7246:
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/lateral-relacionado/lateral-relacionado.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LateralRelacionadoComponent": () => (/* binding */ LateralRelacionadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function LateralRelacionadoComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "| ART\u00CDCULOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LateralRelacionadoComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "| RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LateralRelacionadoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.nota.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nota == null ? null : ctx_r2.nota.resultadoCategoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nota == null ? null : ctx_r2.nota.art1);
  }
}
function LateralRelacionadoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.nota.resultadoImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nota == null ? null : ctx_r3.nota.resultadoCategoria2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nota == null ? null : ctx_r3.nota.art2);
  }
}
function LateralRelacionadoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.nota.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nota == null ? null : ctx_r4.nota.resultadoCategoria3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nota == null ? null : ctx_r4.nota.art3);
  }
}
function LateralRelacionadoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.nota == null ? null : ctx_r5.nota.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nota == null ? null : ctx_r5.nota.resultadoCategoria4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota == null ? null : ctx_r5.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nota == null ? null : ctx_r5.nota.art4);
  }
}
function LateralRelacionadoComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nota == null ? null : ctx_r6.nota.resultadoCategoria5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nota == null ? null : ctx_r6.nota.art5);
  }
}
function LateralRelacionadoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.nota == null ? null : ctx_r7.nota.resultadoCategoria6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r7.nota == null ? null : ctx_r7.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.nota == null ? null : ctx_r7.nota.art6);
  }
}
function LateralRelacionadoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoImagen7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.nota == null ? null : ctx_r8.nota.resultadoCategoria7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r8.nota == null ? null : ctx_r8.nota.resultadoID7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.nota == null ? null : ctx_r8.nota.art7);
  }
}
function LateralRelacionadoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r9.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.nota == null ? null : ctx_r9.nota.resultadoImagen8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.nota == null ? null : ctx_r9.nota.resultadoCategoria8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r9.nota == null ? null : ctx_r9.nota.resultadoID8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.nota == null ? null : ctx_r9.nota.art8);
  }
}
function LateralRelacionadoComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r10.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r10.nota == null ? null : ctx_r10.nota.resultadoImagen9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.nota == null ? null : ctx_r10.nota.resultadoCategoria9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r10.nota == null ? null : ctx_r10.nota.resultadoID9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.nota == null ? null : ctx_r10.nota.art9);
  }
}
function LateralRelacionadoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoImagen10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.nota == null ? null : ctx_r11.nota.resultadoCategoria10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r11.nota == null ? null : ctx_r11.nota.resultadoID10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.nota == null ? null : ctx_r11.nota.art10);
  }
}
function LateralRelacionadoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoImagen11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.nota == null ? null : ctx_r12.nota.resultadoCategoria11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r12.nota == null ? null : ctx_r12.nota.resultadoID11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.nota == null ? null : ctx_r12.nota.art11);
  }
}
function LateralRelacionadoComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "h6", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r13.nota == null ? null : ctx_r13.nota.resultadoImagen12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.nota == null ? null : ctx_r13.nota.resultadoCategoria12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r13.nota == null ? null : ctx_r13.nota.resultadoID12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.nota == null ? null : ctx_r13.nota.art12);
  }
}
class LateralRelacionadoComponent {
  constructor() {}
  ngOnInit() {}
}
LateralRelacionadoComponent.ɵfac = function LateralRelacionadoComponent_Factory(t) {
  return new (t || LateralRelacionadoComponent)();
};
LateralRelacionadoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LateralRelacionadoComponent,
  selectors: [["app-lateral-relacionado"]],
  inputs: {
    nota: ["data", "nota"]
  },
  decls: 19,
  vars: 14,
  consts: [["class", "titulo", "style", "margin-left:0px;margin-bottom: 10px; color:brown", 4, "ngIf"], [1, "row"], ["class", "card col-12", "style", "    background-color: rgb(239, 239, 239);", 4, "ngIf"], ["class", "card col-12", "style", "background-color: rgb(239, 239, 239);", 4, "ngIf"], [1, "titulo", 2, "margin-left", "0px", "margin-bottom", "10px", "color", "brown"], [1, "card", "col-12", 2, "background-color", "rgb(239, 239, 239)"], ["target", "_blank", 3, "routerLink"], ["alt", "", "height", "200px", 1, "card-img-top", "sombra", 2, "object-fit", "cover", 3, "src"], [1, "card-body"], [1, "categoria"], [1, "card-title", "titulo"], ["fragment", "ayudaDiv", "target", "_blank", 3, "routerLink"]],
  template: function LateralRelacionadoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br")(1, "hr")(2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LateralRelacionadoComponent_h1_3_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LateralRelacionadoComponent_h1_4_Template, 2, 0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LateralRelacionadoComponent_div_7_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LateralRelacionadoComponent_div_8_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LateralRelacionadoComponent_div_9_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LateralRelacionadoComponent_div_10_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LateralRelacionadoComponent_div_11_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LateralRelacionadoComponent_div_12_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LateralRelacionadoComponent_div_13_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LateralRelacionadoComponent_div_14_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LateralRelacionadoComponent_div_15_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LateralRelacionadoComponent_div_16_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LateralRelacionadoComponent_div_17_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LateralRelacionadoComponent_div_18_Template, 10, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota == null ? null : ctx.nota.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nota.art12);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Staatliches&display=swap);@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@574&display=swap);.categoria[_ngcontent-%COMP%]{ \r\n    margin-left:-15px;\r\n    margin-top:-10px;\r\n    color:rgb(243, 178, 0);\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    margin-bottom: 15px;\r\n    \r\n  \r\n  }\r\n  \r\n.titulo[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 700;\r\n  line-height: 25px; \r\n  letter-spacing: -1px;\r\n  margin-top:-10px;\r\n  margin-left:-15px;\r\n  color:rgb(68, 68, 68);\r\n  font-size: 25px;\r\n}\r\na[_ngcontent-%COMP%]{  color:rgb(68, 68, 68); text-decoration: none;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:-10px; font-size: 18px; font-family: 'Roboto', sans-serif; line-height: 26px; font-weight: 600;}\r\n\r\n   \r\n.card[_ngcontent-%COMP%]{border:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbGF0ZXJhbC1yZWxhY2lvbmFkby9sYXRlcmFsLXJlbGFjaW9uYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjs7O0VBR3JCOztBQUVGO0VBQ0UsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQSxJQUFJLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO0FBQ2pELFdBQVcsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGlDQUFpQyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDOzs7QUFHckgsTUFBTSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmZhbWlseT1TdGFhdGxpY2hlcyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA1NzQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uY2F0ZWdvcmlheyBcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xyXG4gICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgIGNvbG9yOnJnYigyNDMsIDE3OCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICBcclxuLnRpdHVsb3tcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbWFyZ2luLXRvcDotMTBweDtcclxuICBtYXJnaW4tbGVmdDotMTVweDtcclxuICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmF7ICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbi5zdWJ0aXR1bG97bWFyZ2luLXRvcDotMTBweDsgZm9udC1zaXplOiAxOHB4OyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IGxpbmUtaGVpZ2h0OiAyNnB4OyBmb250LXdlaWdodDogNjAwO31cclxuXHJcbiAgIFxyXG4uY2FyZHtib3JkZXI6bm9uZX1cclxuIFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6513:
/*!******************************************************!*\
  !*** ./src/app/componentes/main2/main2.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main2Component": () => (/* binding */ Main2Component)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel-revista/carousel-revista.component */ 6639);
/* harmony import */ var _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../a-portada/a-portada.component */ 1690);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 202);
/* harmony import */ var _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../publicidadx3/publicidadx3.component */ 3083);
/* harmony import */ var _b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../b-indice/b-indice.component */ 3551);
/* harmony import */ var _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../publicidad-horizontal/publicidad-horizontal.component */ 1273);
/* harmony import */ var _publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publicidad-horizontal2/publicidad-horizontal2.component */ 1847);













function Main2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function Main2Component_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " NRO. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.articulos == null ? null : ctx_r2.articulos.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("MES: ", ctx_r2.articulos == null ? null : ctx_r2.articulos.mes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("A\u00D1O: ", ctx_r2.articulos == null ? null : ctx_r2.articulos.anio, "");
  }
}
const _c0 = function (a0) {
  return {
    "sacar": a0
  };
};
function Main2Component_div_2_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function Main2Component_div_2_div_2_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.cerrar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, ctx_r8.estadoBtn));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r8.publi == null ? null : ctx_r8.publi.img7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function Main2Component_div_2_div_2_app_publicidadx3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidadx3", 26);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r9.publi);
  }
}
function Main2Component_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, Main2Component_div_2_div_2_div_1_Template, 4, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-a-portada", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, Main2Component_div_2_div_2_app_publicidadx3_3_Template, 1, 1, "app-publicidadx3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.publi == null ? null : ctx_r3.publi.img7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r3.publi)("data", ctx_r3.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.publi);
  }
}
function Main2Component_div_2_div_3_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("INDICE - ", ctx_r12.articulos.mes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("NRO. ", ctx_r12.articulos.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" - A\u00D1O ", ctx_r12.articulos.anio, " ");
  }
}
function Main2Component_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, Main2Component_div_2_div_3_h4_1_Template, 5, 3, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-b-indice", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r4.nota[0]);
  }
}
function Main2Component_div_2_app_publicidad_horizontal_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidad-horizontal", 30);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r5.publi);
  }
}
function Main2Component_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br")(3, "p", 32)(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r6.nota[0] == null ? null : ctx_r6.nota[0].editorial, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function Main2Component_div_2_app_publicidad_horizontal2_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidad-horizontal2", 26);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r7.publi);
  }
}
function Main2Component_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, Main2Component_div_2_div_1_Template, 13, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, Main2Component_div_2_div_2_Template, 4, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, Main2Component_div_2_div_3_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, Main2Component_div_2_app_publicidad_horizontal_4_Template, 1, 1, "app-publicidad-horizontal", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, Main2Component_div_2_div_8_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, Main2Component_div_2_app_publicidad_horizontal2_10_Template, 1, 1, "app-publicidad-horizontal2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "br", 15)(12, "app-carousel-revista");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.publi);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.publi);
  }
}
class Main2Component {
  constructor(crudService, ruta, _platformId) {
    this.crudService = crudService;
    this.ruta = ruta;
    this._platformId = _platformId;
    this.estadoBtn = false;
    this.loader = true;
    this.ruta.data.subscribe(data => {
      this.nota = Object.entries(data).map(i => i[1]);
      console.log(this.nota, "esto es main2");
      this.crudService.unArticulo = this.nota[0];
      this.articulos = this.nota[0];
      this.loader = false;
      // this.articulos[0].vistas = this.articulos[0]?.vistas + 1 
      // this.crudService.modificarArticulo(this.articulos[0]).subscribe(res => console.log(res))
    });

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this._platformId)) {
      const htmlElement = document.querySelector('html');
      // Agregar el evento contextmenu
      htmlElement?.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
        alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
      });
    }
    this.crudService.getAnuncios().subscribe(res => {
      this.publi = res;
      console.log(this.publi);
    });
  }
  cerrar() {
    this.estadoBtn = true;
  }
}
Main2Component.ɵfac = function Main2Component_Factory(t) {
  return new (t || Main2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID));
};
Main2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: Main2Component,
  selectors: [["app-main2"]],
  decls: 3,
  vars: 2,
  consts: [["class", "text-center div-principal", "style", "height: 120vh; background-color: orange;", 4, "ngIf"], ["class", "div-principal", 4, "ngIf"], [1, "text-center", "div-principal", 2, "height", "120vh", "background-color", "orange"], ["role", "status", 1, "spinner-border", "text-dark", 2, "margin-top", "30vh"], [1, "visually-hidden"], [1, "div-principal"], ["class", "quitar600", "style", "margin-right: 25px; text-align: right; color:white; ", 4, "ngIf"], ["class", "portadaAcomoda", 4, "ngIf"], [4, "ngIf"], [3, "publi", 4, "ngIf"], [2, "background-color", "rgb(59, 52, 0, 1)"], [1, "divEditorial"], [1, "indice", "subefuente", "fuenteTest", "quitar600", 2, "margin-top", "20px", "text-transform", "uppercase"], ["class", "fondoEditorial", 4, "ngIf"], ["class", "quitar600", 3, "publi", 4, "ngIf"], [1, "quitar600"], [1, "quitar600", 2, "margin-right", "25px", "text-align", "right", "color", "white"], [2, "font-size", "15px", "font-weight", "800", "padding-top", "10px"], [2, "margin-left", "2px"], [2, "margin-left", "5px", "text-transform", "uppercase"], [1, "portadaAcomoda"], ["class", "popup", 3, "ngClass", 4, "ngIf"], [3, "publi", "data"], [1, "popup", 3, "ngClass"], ["alt", "", 2, "width", "100%", "margin-bottom", "20px", "padding-right", "20px", "margin-top", "20px", "width", "100%", 3, "src"], [1, "btn", "btn-dark", 2, "position", "absolute", "top", "45px", "right", "9px", "border-radius", "111px", 3, "click"], [1, "quitar600", 3, "publi"], ["class", "indice quitar600", "style", "text-transform: uppercase; margin-top: 10px;", 4, "ngIf"], [3, "data"], [1, "indice", "quitar600", 2, "text-transform", "uppercase", "margin-top", "10px"], [3, "publi"], [1, "fondoEditorial"], [1, "editorialParrafo", 3, "innerHTML"]],
  template: function Main2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, Main2Component_div_1_Template, 4, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, Main2Component_div_2_Template, 14, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__.CarouselRevistaComponent, _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_2__.APortadaComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_4__.Publicidadx3Component, _b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_5__.BIndiceComponent, _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_6__.PublicidadHorizontalComponent, _publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_7__.PublicidadHorizontal2Component],
  styles: [".portadaAcomoda[_ngcontent-%COMP%]{margin-left: 10px;}\r\n.div-principal[_ngcontent-%COMP%]{\r\n    margin-left: -0px;\r\n    margin-right: -0px;\r\n    background-color: orange;\r\n    border-left: 20px solid rgb(43, 43, 43);\r\n    border-right: 20px solid rgb(44, 44, 44);}\r\n    .divEditorial[_ngcontent-%COMP%]{color: white; background-color: orange; margin-top: 10px;}\r\n  \r\n  .indice[_ngcontent-%COMP%]{\r\n    margin-left:30px;\r\n    margin-top:15px;\r\n    font-size: 27px;\r\n    font-family: Oswald, sans-serif!important;   \r\n    margin-bottom: 20px;\r\n       \r\n  \r\n    letter-spacing: 2px;\r\n    color: white;\r\n    }\r\n    .popup[_ngcontent-%COMP%]{display: none;}\r\n    .sacar[_ngcontent-%COMP%]{display:none!important}   \r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding:10px; padding-left:0px; padding-right: 0px;}\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{\r\n  background-image: url('1.png');\r\n  background-size: cover; padding-right: 20px; padding-left: 20px;\r\n}\r\n  @media (max-width:766px){\r\n    .fondoEditorial[_ngcontent-%COMP%]{\r\n      height: auto;}\r\n    \r\n    .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n    .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n   }\r\n  \r\n    .fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n      height: auto;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n\r\n\r\n   .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n      letter-spacing: 1px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 20px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  \r\n  \r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n  0% { transform: rotate(0) }\r\n  100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 83px;\r\n  height: 83px;\r\n  top: 8.5px;\r\n  left: 8.5px;\r\n  border-radius: 50%;\r\n  border: 13px solid #000;\r\n  border-color: #0a0a0a transparent #0a0a0a transparent;\r\n  animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 13px;\r\n  height: 13px;\r\n  top: -13px;\r\n  left: 22px;\r\n  background: #0a0a0a;\r\n  border-radius: 50%;\r\n  box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  left: -13px;\r\n  top: 22px;\r\n  box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n  width: 84px;\r\n  height: 84px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform: translateZ(0) scale(0.84);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n  \r\n  \r\n  \r\n  @media (max-width: 600px)\r\n  {\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  .popup[_ngcontent-%COMP%]{display:block; margin-bottom: 10px; width: 100%;}\r\n.divEditorial[_ngcontent-%COMP%]{margin-top: 0px!important;}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%]{\r\n \r\n  background-size: cover; padding-right: 0px; padding-left: 0px;\r\n}\r\n  .div-principal[_ngcontent-%COMP%]{\r\n    border-left:  0px solid rgb(43, 43, 43);\r\n    border-right: 0px solid rgb(44, 44, 44);}\r\n  \r\n    .fondoEditorial[_ngcontent-%COMP%] {     \r\n   margin-left: 0px;\r\n   margin-right: 0px}\r\n\r\n  \r\n  \r\n  .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    letter-spacing: 0px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 16px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding: 0px;}\r\n  }\r\n  \r\n  \r\n  \r\n  @media (max-width: 700px)\r\n  {\r\n  .borde[_ngcontent-%COMP%]{margin-bottom: 30px;}\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbWFpbjIvbWFpbjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEM7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsd0NBQXdDLENBQUM7SUFDekMsY0FBYyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7O0VBRXpFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLG1CQUFtQjs7O0lBR25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1o7SUFDQSxPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLHNCQUFzQjs7RUFFL0IsZ0JBQWdCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQzs7RUFFbkU7RUFDQSw4QkFBOEM7RUFDOUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO0FBQ2pFO0VBQ0U7SUFDRTtNQUNFLFlBQVksQ0FBQzs7SUFFZixjQUFjLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtJQUMxRixZQUFZLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7OztHQUd0Rzs7SUFFQyxpQkFBaUIseUJBQXlCO01BQ3hDLFlBQVk7R0FDZixpQkFBaUI7R0FDakIsa0JBQWtCOzs7O0dBSWxCO0lBQ0MsZ0JBQWdCO01BQ2QsbUJBQW1CO0tBQ3BCLGFBQWE7S0FDYixlQUFlO0tBQ2Ysa0JBQWtCO0tBQ2xCLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsa0JBQWtCO0tBQ2xCLGdCQUFnQjtHQUNsQjs7OztFQUlEO0VBQ0EsS0FBSyxxQkFBcUI7RUFDMUIsT0FBTywwQkFBMEI7RUFDakM7RUFDQSx1QkFBdUIsaUNBQWlDO0VBQ3hEO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFEQUFxRDtFQUNyRCw2Q0FBNkM7RUFDN0M7RUFDQSxzQ0FBc0MsMEJBQTBCO0VBQ2hFO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUI7RUFDQTtFQUNBLFdBQVc7RUFDWCxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7RUFDMUM7RUFDQSx1QkFBdUIsdUJBQXVCLEVBQUU7RUFDaEQscUNBQXFDOzs7O0VBSXJDOztFQUVBLFdBQVcsWUFBWTtFQUN2QixPQUFPLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUM7QUFDekQsY0FBYyx5QkFBeUIsQ0FBQzs7QUFFeEM7O0VBRUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCO0FBQy9EO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsdUNBQXVDLENBQUM7O0lBRXhDO0dBQ0QsZ0JBQWdCO0dBQ2hCLGlCQUFpQjs7OztFQUlsQjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7S0FDbEIsYUFBYTtLQUNiLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsZUFBZTtLQUNmLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsZ0JBQWdCO0dBQ2xCOztFQUVELGdCQUFnQixZQUFZLENBQUM7RUFDN0I7Ozs7RUFJQTs7RUFFQSxPQUFPLG1CQUFtQixDQUFDO0VBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRhZGFBY29tb2Rhe21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLmRpdi1wcmluY2lwYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogLTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHJnYig0MywgNDMsIDQzKTtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2IoNDQsIDQ0LCA0NCk7fVxyXG4gICAgLmRpdkVkaXRvcmlhbHtjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgbWFyZ2luLXRvcDogMTBweDt9XHJcbiAgXHJcbiAgLmluZGljZXtcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3N3YWxkLCBzYW5zLXNlcmlmIWltcG9ydGFudDsgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICBcclxuICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucG9wdXB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAuc2FjYXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH0gICBcclxuICBcclxuICAucG9ydGFkYUFjb21vZGF7cGFkZGluZzoxMHB4OyBwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7fVxyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvMS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjZweCl7XHJcbiAgICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgICAgIGhlaWdodDogYXV0bzt9XHJcbiAgICBcclxuICAgIC5pbWdTb2JyYW50ZXsgcGFkZGluZzoyMHB4OyBwYWRkaW5nLWxlZnQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuICAgIC5pbWdBcGFyZWNle2Rpc3BsYXk6YmxvY2s7IHBhZGRpbmc6IDMwcHg7IG1hcmdpbi10b3A6LTEwcHg7IHBhZGRpbmctbGVmdDogMTNweDsgcGFkZGluZy1yaWdodDogMTBweDsgfVxyXG5cclxuXHJcbiAgIH1cclxuICBcclxuICAgIC5mb25kb0VkaXRvcmlhbCB7YmFja2dyb3VuZC1jb2xvcjogIzNFMjgwMDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4fVxyXG5cclxuXHJcblxyXG4gICAuZWRpdG9yaWFsUGFycmFmb3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbiAgIH1cclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3ghaW1wb3J0YW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDgzcHg7XHJcbiAgaGVpZ2h0OiA4M3B4O1xyXG4gIHRvcDogOC41cHg7XHJcbiAgbGVmdDogOC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzBhMGEwYSB0cmFuc3BhcmVudCAjMGEwYTBhIHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRpby16N2Z1NmUxZGVuIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgeyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCA3MHB4IDAgMCAjMGEwYTBhO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGxlZnQ6IC0xM3B4O1xyXG4gIHRvcDogMjJweDtcclxuICBib3gtc2hhZG93OiA3MHB4IDAgMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sb2FkaW5naW8tc3Bpbm5lci1kdWFsLXJpbmcteGcxdm5yZjJiNm8ge1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgwLjg0KTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXHJcbiAge1xyXG4gIC5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gIC5wb3B1cHtkaXNwbGF5OmJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMHB4OyB3aWR0aDogMTAwJTt9XHJcbi5kaXZFZGl0b3JpYWx7bWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDt9XHJcblxyXG4uZm9uZG9FZGl0b3JpYWx7XHJcbiBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiAgLmRpdi1wcmluY2lwYWx7XHJcbiAgICBib3JkZXItbGVmdDogIDBweCBzb2xpZCByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCByZ2IoNDQsIDQ0LCA0NCk7fVxyXG4gIFxyXG4gICAgLmZvbmRvRWRpdG9yaWFsIHsgICAgIFxyXG4gICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDBweH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmVkaXRvcmlhbFBhcnJhZm97XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6MjdweDtcclxuICAgfVxyXG4gIFxyXG4gIC5wb3J0YWRhQWNvbW9kYXtwYWRkaW5nOiAwcHg7fVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpXHJcbiAge1xyXG4gIC5ib3JkZXttYXJnaW4tYm90dG9tOiAzMHB4O31cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3384:
/*!****************************************************!*\
  !*** ./src/app/componentes/main/main.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);
/* harmony import */ var _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel-revista/carousel-revista.component */ 6639);
/* harmony import */ var _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../a-portada/a-portada.component */ 1690);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 202);
/* harmony import */ var _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../publicidadx3/publicidadx3.component */ 3083);
/* harmony import */ var _b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../b-indice/b-indice.component */ 3551);
/* harmony import */ var _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../publicidad-horizontal/publicidad-horizontal.component */ 1273);
/* harmony import */ var _publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publicidad-horizontal2/publicidad-horizontal2.component */ 1847);














const _c0 = ["autoShownModal"];
function MainComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function MainComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " NRO. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.articulos[0] == null ? null : ctx_r2.articulos[0].numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("MES: ", ctx_r2.articulos[0] == null ? null : ctx_r2.articulos[0].mes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("A\u00D1O: ", ctx_r2.articulos[0] == null ? null : ctx_r2.articulos[0].anio, "");
  }
}
const _c1 = function () {
  return {
    show: true
  };
};
function MainComponent_div_2_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onHidden", function MainComponent_div_2_div_2_div_1_Template_div_onHidden_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onHidden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 26)(3, "div", 27)(4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MainComponent_div_2_div_2_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 29)(7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r8.publi[0].link7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r8.publi[0].img7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function MainComponent_div_2_div_2_app_publicidadx3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidadx3", 32);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r9.publi);
  }
}
function MainComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MainComponent_div_2_div_2_div_1_Template, 9, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-a-portada", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MainComponent_div_2_div_2_app_publicidadx3_3_Template, 1, 1, "app-publicidadx3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isModalShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r3.publi)("data", ctx_r3.articulos[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.publi);
  }
}
function MainComponent_div_2_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("INDICE - ", ctx_r4.articulos[0].mes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("NRO. ", ctx_r4.articulos[0].numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" - A\u00D1O ", ctx_r4.articulos[0].anio, " ");
  }
}
function MainComponent_div_2_app_publicidad_horizontal_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidad-horizontal", 34);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r5.publi);
  }
}
function MainComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br")(3, "p", 36)(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r6.articulos[0] == null ? null : ctx_r6.articulos[0].editorial, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function MainComponent_div_2_app_publicidad_horizontal2_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-publicidad-horizontal2", 32);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("publi", ctx_r7.publi);
  }
}
function MainComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MainComponent_div_2_div_1_Template, 13, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MainComponent_div_2_div_2_Template, 4, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MainComponent_div_2_h4_4_Template, 5, 3, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-b-indice", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MainComponent_div_2_app_publicidad_horizontal_6_Template, 1, 1, "app-publicidad-horizontal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MainComponent_div_2_div_10_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, MainComponent_div_2_app_publicidad_horizontal2_12_Template, 1, 1, "app-publicidad-horizontal2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "br", 16)(14, "app-carousel-revista");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r1.articulos[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.publi);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.publi);
  }
}
class MainComponent {
  constructor(modalService, crudservice, _platformId, renderer, el) {
    //  this.template = {} as TemplateRef<any> ;
    this.modalService = modalService;
    this.crudservice = crudservice;
    this._platformId = _platformId;
    this.renderer = renderer;
    this.el = el;
    this.estadoBtn = false;
    this.loader = true;
    this.abrir = "modal";
    this.isModalShown = false;
  }
  ngOnInit() {
    this.crudservice.getArticulos().subscribe(res => {
      this.articulos = res;
      this.articulos = this.articulos.reverse();
      this.loader = false;
      //sumar contador
      // this.articulos[0].vistas = this.articulos[0]?.vistas + 1 
      // this.crudservice.modificarArticulo(this.articulos[0]).subscribe(res => console.log(res))
    });

    this.crudservice.getAnuncios().subscribe(res => {
      this.publi = res;
      console.log(this.publi);
    });
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this._platformId)) {
      const htmlElement = document.querySelector('html');
      // Agregar el evento contextmenu
      htmlElement?.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evitar que se muestre el menú contextual por defecto
        alert('Si están interesados en el material fotográfico del CCAM, acuerden con la institución su uso. Contactarse a: info@culturademontania.org.ar');
      });
    }
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this._platformId)) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        this.showModal();
      }
    }
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }
  cerrar() {
    this.estadoBtn = true;
  }
  showModal() {
    this.isModalShown = true;
  }
  hideModal() {
    this.autoShownModal?.hide();
  }
  onHidden() {
    this.isModalShown = false;
  }
}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  viewQuery: function MainComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
    }
  },
  decls: 3,
  vars: 2,
  consts: [["class", "text-center div-principal", "style", "height: 120vh; background-color: orange;", 4, "ngIf"], ["class", "div-principal", "data-bs-dismiss", "modal", 4, "ngIf"], [1, "text-center", "div-principal", 2, "height", "120vh", "background-color", "orange"], ["role", "status", 1, "spinner-border", "text-dark", 2, "margin-top", "30vh"], [1, "visually-hidden"], ["data-bs-dismiss", "modal", 1, "div-principal"], ["class", "quitar600", "style", "margin-right: 25px; text-align: right; color:white; ", 4, "ngIf"], ["class", "portadaAcomoda", 4, "ngIf"], ["class", "indice quitar600", "style", "text-transform: uppercase; margin-top: 10px;", 4, "ngIf"], [3, "data"], [3, "publi", 4, "ngIf"], [2, "background-color", "rgb(59, 52, 0, 1)"], [1, "divEditorial"], [1, "indice", "subefuente", "fuenteTest", "quitar600", 2, "margin-top", "20px", "text-transform", "uppercase"], ["class", "fondoEditorial", 4, "ngIf"], ["class", "quitar600", 3, "publi", 4, "ngIf"], [1, "quitar600"], [1, "quitar600", 2, "margin-right", "25px", "text-align", "right", "color", "white"], [2, "font-size", "15px", "font-weight", "800", "padding-top", "10px"], [2, "margin-left", "2px"], [2, "margin-left", "5px", "text-transform", "uppercase"], [1, "portadaAcomoda"], ["class", "poner600", "bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [3, "publi", "data"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-xl"], [1, "modal-content", 2, "background-color", "rgba(0, 0, 0, 0.26)"], ["type", "button", 1, "btn", "btn-danger", 2, "color", "white", "width", "40px", "border-radius", "40px", "z-index", "999999999999", "right", "2px", "position", "absolute", 3, "click"], [1, "modal-body", 2, "padding", "0px!important", "top", "10px", "z-index", "999999999"], ["target", "_blank", 2, "cursor", "pointer", 3, "href"], ["alt", "", 2, "width", "100%", "width", "100%", 3, "src"], [1, "quitar600", 3, "publi"], [1, "indice", "quitar600", 2, "text-transform", "uppercase", "margin-top", "10px"], [3, "publi"], [1, "fondoEditorial"], [1, "editorialParrafo", 3, "innerHTML"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MainComponent_div_1_Template, 4, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MainComponent_div_2_Template, 16, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalDirective, _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_1__.CarouselRevistaComponent, _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_2__.APortadaComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_4__.Publicidadx3Component, _b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_5__.BIndiceComponent, _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_6__.PublicidadHorizontalComponent, _publicidad_horizontal2_publicidad_horizontal2_component__WEBPACK_IMPORTED_MODULE_7__.PublicidadHorizontal2Component],
  styles: [".portadaAcomoda[_ngcontent-%COMP%]{margin-left: 10px;}\r\n.div-principal[_ngcontent-%COMP%]{\r\n    margin-left: -0px;\r\n    margin-right: -0px;\r\n    background-color: orange;\r\n    border-left: 20px solid rgb(43, 43, 43);\r\n    border-right: 20px solid rgb(44, 44, 44);}\r\n    .divEditorial[_ngcontent-%COMP%]{color: white; background-color: orange; margin-top: 10px;}\r\n\r\n    .modal-backdrop[_ngcontent-%COMP%]   fade[_ngcontent-%COMP%]   show[_ngcontent-%COMP%]{ width: 100%;\r\n      height: 100%;}\r\n   \r\n.poner600[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n  \r\n  .indice[_ngcontent-%COMP%]{\r\n    margin-left:30px;\r\n    margin-top:15px;\r\n    font-size: 27px;\r\n    font-family: Oswald, sans-serif!important;   \r\n    margin-bottom: 20px;\r\n       \r\n  \r\n    letter-spacing: 2px;\r\n    color: white;\r\n    }\r\n    .popup[_ngcontent-%COMP%]{display: none;}\r\n    .sacar[_ngcontent-%COMP%]{display:none!important}   \r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding:10px; padding-left:0px; padding-right: 0px;}\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{\r\n  background-image: url('1.png');\r\n  background-size: cover; padding-right: 20px; padding-left: 20px;\r\n}\r\n  @media (max-width:766px){\r\n    .fondoEditorial[_ngcontent-%COMP%]{\r\n      height: auto;}\r\n    \r\n    .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n    .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n   }\r\n  \r\n    .fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n      height: auto;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n\r\n\r\n   .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n      letter-spacing: 1px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 20px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  \r\n  \r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n  0% { transform: rotate(0) }\r\n  100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 83px;\r\n  height: 83px;\r\n  top: 8.5px;\r\n  left: 8.5px;\r\n  border-radius: 50%;\r\n  border: 13px solid #000;\r\n  border-color: #0a0a0a transparent #0a0a0a transparent;\r\n  animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 13px;\r\n  height: 13px;\r\n  top: -13px;\r\n  left: 22px;\r\n  background: #0a0a0a;\r\n  border-radius: 50%;\r\n  box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  left: -13px;\r\n  top: 22px;\r\n  box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n  width: 84px;\r\n  height: 84px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform: translateZ(0) scale(0.84);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n  \r\n  \r\n  \r\n  @media (max-width: 600px)\r\n  {\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  .popup[_ngcontent-%COMP%]{display:block; margin-bottom: 10px; width: 100%;}\r\n.divEditorial[_ngcontent-%COMP%]{margin-top: 0px!important;}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%]{\r\n \r\n  background-size: cover; padding-right: 0px; padding-left: 0px;\r\n}\r\n  .div-principal[_ngcontent-%COMP%]{\r\n    border-left:  0px solid rgb(43, 43, 43);\r\n    border-right: 0px solid rgb(44, 44, 44);}\r\n  \r\n    .fondoEditorial[_ngcontent-%COMP%] {     \r\n   margin-left: 0px;\r\n   margin-right: 0px}\r\n\r\n  \r\n  \r\n  .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    letter-spacing: 0px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 16px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding: 0px;}\r\n  }\r\n  \r\n  \r\n   \r\n  @media (max-width: 700px)\r\n  {\r\n  .poner600[_ngcontent-%COMP%]{display:block}\r\n  }\r\n  \r\n  \r\n  @media (max-width: 700px)\r\n  {\r\n  .borde[_ngcontent-%COMP%]{margin-bottom: 30px;}\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGlCQUFpQixDQUFDO0FBQ2xDO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QyxDQUFDO0lBQ3pDLGNBQWMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDOztJQUV2RSwyQkFBMkIsV0FBVztNQUNwQyxZQUFZLENBQUM7O0FBRW5CO0VBQ0UsYUFBYTtBQUNmOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLG1CQUFtQjs7O0lBR25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1o7SUFDQSxPQUFPLGFBQWEsQ0FBQztJQUNyQixPQUFPLHNCQUFzQjs7RUFFL0IsZ0JBQWdCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQzs7RUFFbkU7RUFDQSw4QkFBOEM7RUFDOUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO0FBQ2pFO0VBQ0U7SUFDRTtNQUNFLFlBQVksQ0FBQzs7SUFFZixjQUFjLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtJQUMxRixZQUFZLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7OztHQUd0Rzs7SUFFQyxpQkFBaUIseUJBQXlCO01BQ3hDLFlBQVk7R0FDZixpQkFBaUI7R0FDakIsa0JBQWtCOzs7O0dBSWxCO0lBQ0MsZ0JBQWdCO01BQ2QsbUJBQW1CO0tBQ3BCLGFBQWE7S0FDYixlQUFlO0tBQ2Ysa0JBQWtCO0tBQ2xCLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsa0JBQWtCO0tBQ2xCLGdCQUFnQjtHQUNsQjs7OztFQUlEO0VBQ0EsS0FBSyxxQkFBcUI7RUFDMUIsT0FBTywwQkFBMEI7RUFDakM7RUFDQSx1QkFBdUIsaUNBQWlDO0VBQ3hEO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFEQUFxRDtFQUNyRCw2Q0FBNkM7RUFDN0M7RUFDQSxzQ0FBc0MsMEJBQTBCO0VBQ2hFO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUI7RUFDQTtFQUNBLFdBQVc7RUFDWCxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCO0VBQ0E7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7RUFDMUM7RUFDQSx1QkFBdUIsdUJBQXVCLEVBQUU7RUFDaEQscUNBQXFDOzs7O0VBSXJDOztFQUVBLFdBQVcsWUFBWTtFQUN2QixPQUFPLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUM7QUFDekQsY0FBYyx5QkFBeUIsQ0FBQzs7QUFFeEM7O0VBRUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCO0FBQy9EO0VBQ0U7SUFDRSx1Q0FBdUM7SUFDdkMsdUNBQXVDLENBQUM7O0lBRXhDO0dBQ0QsZ0JBQWdCO0dBQ2hCLGlCQUFpQjs7OztFQUlsQjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7S0FDbEIsYUFBYTtLQUNiLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsZUFBZTtLQUNmLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsZ0JBQWdCO0dBQ2xCOztFQUVELGdCQUFnQixZQUFZLENBQUM7RUFDN0I7Ozs7RUFJQTs7RUFFQSxVQUFVLGFBQWE7RUFDdkI7OztFQUdBOztFQUVBLE9BQU8sbUJBQW1CLENBQUM7RUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGFkYUFjb21vZGF7bWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4uZGl2LXByaW5jaXBhbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgcmdiKDQzLCA0MywgNDMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYig0NCwgNDQsIDQ0KTt9XHJcbiAgICAuZGl2RWRpdG9yaWFse2NvbG9yOiB3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBtYXJnaW4tdG9wOiAxMHB4O31cclxuXHJcbiAgICAubW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93eyB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO31cclxuICAgXHJcbi5wb25lcjYwMHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbiAgLmluZGljZXtcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3N3YWxkLCBzYW5zLXNlcmlmIWltcG9ydGFudDsgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICBcclxuICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucG9wdXB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAuc2FjYXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH0gICBcclxuICBcclxuICAucG9ydGFkYUFjb21vZGF7cGFkZGluZzoxMHB4OyBwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7fVxyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvMS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjZweCl7XHJcbiAgICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgICAgIGhlaWdodDogYXV0bzt9XHJcbiAgICBcclxuICAgIC5pbWdTb2JyYW50ZXsgcGFkZGluZzoyMHB4OyBwYWRkaW5nLWxlZnQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuICAgIC5pbWdBcGFyZWNle2Rpc3BsYXk6YmxvY2s7IHBhZGRpbmc6IDMwcHg7IG1hcmdpbi10b3A6LTEwcHg7IHBhZGRpbmctbGVmdDogMTNweDsgcGFkZGluZy1yaWdodDogMTBweDsgfVxyXG5cclxuXHJcbiAgIH1cclxuICBcclxuICAgIC5mb25kb0VkaXRvcmlhbCB7YmFja2dyb3VuZC1jb2xvcjogIzNFMjgwMDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4fVxyXG5cclxuXHJcblxyXG4gICAuZWRpdG9yaWFsUGFycmFmb3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbiAgIH1cclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3ghaW1wb3J0YW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDgzcHg7XHJcbiAgaGVpZ2h0OiA4M3B4O1xyXG4gIHRvcDogOC41cHg7XHJcbiAgbGVmdDogOC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzBhMGEwYSB0cmFuc3BhcmVudCAjMGEwYTBhIHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRpby16N2Z1NmUxZGVuIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgeyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCA3MHB4IDAgMCAjMGEwYTBhO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGxlZnQ6IC0xM3B4O1xyXG4gIHRvcDogMjJweDtcclxuICBib3gtc2hhZG93OiA3MHB4IDAgMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sb2FkaW5naW8tc3Bpbm5lci1kdWFsLXJpbmcteGcxdm5yZjJiNm8ge1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgwLjg0KTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXHJcbiAge1xyXG4gIC5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gIC5wb3B1cHtkaXNwbGF5OmJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMHB4OyB3aWR0aDogMTAwJTt9XHJcbi5kaXZFZGl0b3JpYWx7bWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDt9XHJcblxyXG4uZm9uZG9FZGl0b3JpYWx7XHJcbiBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiAgLmRpdi1wcmluY2lwYWx7XHJcbiAgICBib3JkZXItbGVmdDogIDBweCBzb2xpZCByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCByZ2IoNDQsIDQ0LCA0NCk7fVxyXG4gIFxyXG4gICAgLmZvbmRvRWRpdG9yaWFsIHsgICAgIFxyXG4gICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDBweH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmVkaXRvcmlhbFBhcnJhZm97XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6MjdweDtcclxuICAgfVxyXG4gIFxyXG4gIC5wb3J0YWRhQWNvbW9kYXtwYWRkaW5nOiAwcHg7fVxyXG4gIH1cclxuICBcclxuICBcclxuICAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KVxyXG4gIHtcclxuICAucG9uZXI2MDB7ZGlzcGxheTpibG9ja31cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KVxyXG4gIHtcclxuICAuYm9yZGV7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      transform: 'translateY(-100%)',
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      transform: 'translateY(0)',
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 1321:
/*!**********************************************************!*\
  !*** ./src/app/componentes/portada/portada.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortadaComponent": () => (/* binding */ PortadaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PortadaComponent {
  constructor() {
    this.numero = 0;
    this.link = "";
  }
  ngOnInit() {
    this.numero = this.nro + 137;
  }
  cut(value) {
    var corte = value.slice(2);
    return corte;
  }
}
PortadaComponent.ɵfac = function PortadaComponent_Factory(t) {
  return new (t || PortadaComponent)();
};
PortadaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortadaComponent,
  selectors: [["app-portada"]],
  inputs: {
    nro: "nro",
    data: "data"
  },
  decls: 11,
  vars: 0,
  consts: [[1, "div-principal"], ["src", "../../../assets/tapa.png", "alt", "", 1, "imagenPortada", "anima"], [1, "imgLogo"], ["src", "../../../assets/NM blanco.png", "alt", "", 1, "fade-in-image", "logo", "imgLogo2"], [1, "cuadroTitulo"], [1, "categoria", 2, "margin-top", "20px"], [1, "titulo", 2, "margin-right", "10px", "margin-top", "-5px"], [1, "subtitulo", "quitar1300"]],
  template: function PortadaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comunidad de la red cultural de Monta\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem, ipsum dolor sit amet consectetur adipisicing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Esto es un texto de prueba para el subtitulo de la paginas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".div-principal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0px;\r\n}\r\n\r\n.imagenPortada[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  padding-left: 20px;\r\n  margin-top: -30px;\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 600px;\r\n  object-fit: cover;\r\n\r\n}\r\n\r\n.imgLogo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 3%;\r\n  filter: drop-shadow(2px 4px 3px black);\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  margin-top: -5px;\r\n  text-shadow: 1px 1px 3px #000000;\r\n  margin-left: 20px;\r\n  color: white;\r\n  text-align: left;\r\n  font-size: 35px;\r\n  font-weight: 800;\r\n  line-height: 40px;\r\n  min-height: 100%;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: rgb(255, 255, 255);\r\n  line-height: 30px;\r\n  font-weight: 200;\r\n  margin-top: 0px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.categoria[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: orange;\r\n  margin-left: 20px;\r\n  margin-top: 14px;\r\n  text-shadow: 5px 5px 20px black;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n}\r\n\r\n\r\n.h1Logo[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n  margin-left: 2px;\r\n  margin-top: 269px;\r\n  color: white;\r\n  text-shadow: 1px 1px 3px black;\r\n  background-color: orange;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n.lugarLogo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -115px;\r\n \r\n}\r\n\r\n\r\n.cuadroTitulo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  min-height: 167px;\r\n  top: 383px;\r\n  left: 20px;\r\n  right: 20px;\r\n  background-color: rgba(0, 0, 0, 0.603);\r\n}\r\n\r\n\r\n.imgLogo2[_ngcontent-%COMP%] {\r\n \r\n  display:none;\r\n  left: 0%!important;\r\n\r\n}\r\n\r\n.fade-in-image[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_fadeIn 2s;\r\n  -webkit-animation: _ngcontent-%COMP%_fadeIn 2s;\r\n  -moz-animation: fadeIn 2s;\r\n  -o-animation: fadeIn 2s;\r\n  -ms-animation: fadeIn 2s;\r\n}\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1300px) {\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .quitar1300[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n\r\n  \r\n  \r\n  .titulo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    line-height: 28px;\r\n    margin-left: 10px;\r\n  }\r\n  .quitar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .categoria[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-left: 10px!important;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 160px;\r\n    margin-top: 20px;\r\n    left:1px\r\n  }\r\n\r\n  .cuadroTitulo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    min-height: 123px;\r\n    top: 248px;\r\n    left: 0px;\r\n    right: 0px;\r\n    background-color: rgba(0, 0, 0, 0.603);\r\n  }\r\n\r\n  .titular[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    line-height: 28px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n\r\n  .imagenPortada[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    padding-left: 0px;\r\n    margin-top: 0px;\r\n    padding-top: 0px !important;\r\n    object-fit: cover;\r\n    height: 370px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcG9ydGFkYS9wb3J0YWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLCtCQUErQjs7QUFFakM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXOztBQUViOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOzs7QUFHQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7OztBQXdDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7Ozs7RUFJRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COzs7RUFHQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXByaW5jaXBhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmltYWdlblBvcnRhZGEge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG59XHJcblxyXG4uaW1nTG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogMyU7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDNweCBibGFjayk7XHJcbn1cclxuLnRpdHVsbyB7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3VidGl0dWxvIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbi5jYXRlZ29yaWEge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDIwcHggYmxhY2s7XHJcblxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIGRlbCBsb2dvICovXHJcbi5oMUxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDI2OXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIHBvc2ljaW9uIGRlbCBsb2dvIHBuZyAqL1xyXG4ubHVnYXJMb2dvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTE1cHg7XHJcbiBcclxufVxyXG5cclxuLyogUmVjdWFkcm8gbmVncm8gZGUgbGEgcG9ydGFkYSAqL1xyXG4uY3VhZHJvVGl0dWxvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogMTY3cHg7XHJcbiAgdG9wOiAzODNweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MDMpO1xyXG59XHJcblxyXG5cclxuLmltZ0xvZ28yIHtcclxuIFxyXG4gIGRpc3BsYXk6bm9uZTtcclxuICBsZWZ0OiAwJSFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmFkZS1pbi1pbWFnZSB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAycztcclxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiAycztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBNRURJQSBRVUVSSUVTICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAucXVpdGFyMTMwMCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgXHJcbiAgXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAucXVpdGFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yaWEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGxlZnQ6MXB4XHJcbiAgfVxyXG5cclxuICAuY3VhZHJvVGl0dWxvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEyM3B4O1xyXG4gICAgdG9wOiAyNDhweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAzKTtcclxuICB9XHJcblxyXG4gIC50aXR1bGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltYWdlblBvcnRhZGEge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1847:
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/publicidad-horizontal2/publicidad-horizontal2.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicidadHorizontal2Component": () => (/* binding */ PublicidadHorizontal2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);


class PublicidadHorizontal2Component {
  constructor(crudService) {
    this.crudService = crudService;
  }
  sumarContador(x) {
    if (x === 12) {
      var aux = this.publi[0]?.contador12 + 1;
      this.publi[0].contador12 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {
        console.log(res, this.publi[0].contador12);
      });
    }
  }
}
PublicidadHorizontal2Component.ɵfac = function PublicidadHorizontal2Component_Factory(t) {
  return new (t || PublicidadHorizontal2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
PublicidadHorizontal2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PublicidadHorizontal2Component,
  selectors: [["app-publicidad-horizontal2"]],
  inputs: {
    publi: "publi"
  },
  decls: 3,
  vars: 2,
  consts: [["target", "_blank", 1, "quitar600", 3, "href", "click"], ["width", "100%", "alt", "", 2, "padding-left", "20px", "padding-right", "20px", 3, "src"]],
  template: function PublicidadHorizontal2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PublicidadHorizontal2Component_Template_a_click_0_listener() {
        return ctx.sumarContador(12);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0].link12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["@media (max-width:600px){\r\n\r\n    .quitar600[_ngcontent-%COMP%]{display:none}\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHVibGljaWRhZC1ob3Jpem9udGFsMi9wdWJsaWNpZGFkLWhvcml6b250YWwyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFdBQVcsWUFBWTs7RUFFekIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG5cclxuICAgIC5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1273:
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/publicidad-horizontal/publicidad-horizontal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicidadHorizontalComponent": () => (/* binding */ PublicidadHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);


class PublicidadHorizontalComponent {
  constructor(crudService) {
    this.crudService = crudService;
  }
  sumarContador(x) {
    if (x === 11) {
      var aux = this.publi[0]?.contador11 + 1;
      this.publi[0].contador11 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {
        console.log(res, this.publi[0].contador11);
      });
    }
  }
}
PublicidadHorizontalComponent.ɵfac = function PublicidadHorizontalComponent_Factory(t) {
  return new (t || PublicidadHorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
PublicidadHorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PublicidadHorizontalComponent,
  selectors: [["app-publicidad-horizontal"]],
  inputs: {
    publi: "publi"
  },
  decls: 3,
  vars: 2,
  consts: [["target", "_blank", 1, "quitar600", 3, "href", "click"], ["width", "100%", "alt", "", 2, "padding-left", "20px", "padding-right", "20px", 3, "src"]],
  template: function PublicidadHorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PublicidadHorizontalComponent_Template_a_click_0_listener() {
        return ctx.sumarContador(11);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0].link11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["@media (max-width:600px){\r\n\r\n    .quitar600[_ngcontent-%COMP%]{display:none}\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHVibGljaWRhZC1ob3Jpem9udGFsL3B1YmxpY2lkYWQtaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxXQUFXLFlBQVk7O0VBRXpCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuXHJcbiAgICAucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuXHJcbiAgfVxyXG4gIFxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3083:
/*!********************************************************************!*\
  !*** ./src/app/componentes/publicidadx3/publicidadx3.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Publicidadx3Component": () => (/* binding */ Publicidadx3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 8851);


class Publicidadx3Component {
  constructor(crudService) {
    this.crudService = crudService;
  }
  sumarContador(x) {
    if (x === 8) {
      var aux = this.publi[0]?.contador8 + 1;
      this.publi[0].contador8 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {
        console.log(res, this.publi[0].contador8);
      });
    }
    if (x === 9) {
      var aux = this.publi[0]?.contador9 + 1;
      this.publi[0].contador9 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {
        console.log(res, this.publi[0].contador9);
      });
    }
    if (x === 10) {
      var aux = this.publi[0]?.contador10 + 1;
      this.publi[0].contador10 = aux;
      this.crudService.modificarAnuncios(this.publi[0]).subscribe(res => {
        console.log(res, this.publi[0].contador10);
      });
    }
  }
}
Publicidadx3Component.ɵfac = function Publicidadx3Component_Factory(t) {
  return new (t || Publicidadx3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
Publicidadx3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: Publicidadx3Component,
  selectors: [["app-publicidadx3"]],
  inputs: {
    publi: "publi"
  },
  decls: 17,
  vars: 8,
  consts: [[1, "row", 2, "padding-left", "12px", "padding-right", "20px"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-4"], ["target", "_blank", 3, "href", "click"], ["width", "100%", "alt", "", 3, "src"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-4", "quitar", "ajusteTop"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-4", "aparece767", 2, "margin-top", "20px"], ["target", "_blank", 3, "href"]],
  template: function Publicidadx3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Publicidadx3Component_Template_a_click_3_listener() {
        return ctx.sumarContador(8);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div")(7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Publicidadx3Component_Template_a_click_7_listener() {
        return ctx.sumarContador(9);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div")(11, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Publicidadx3Component_Template_a_click_11_listener() {
        return ctx.sumarContador(10);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "div")(15, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0] == null ? null : ctx.publi[0].link8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0] == null ? null : ctx.publi[0].link9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0] == null ? null : ctx.publi[0].link10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.publi[0] == null ? null : ctx.publi[0].link7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.publi[0] == null ? null : ctx.publi[0].img7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Jockey+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);@import url(https://fonts.googleapis.com/css2?family=Train+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap);@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab:wght@900&display=swap);@import url(https://fonts.googleapis.com/css2?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);\r\n \r\n\r\n .quitar600[_ngcontent-%COMP%]{display:none}\r\n\r\n img[_ngcontent-%COMP%]{height: auto;}\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  align-content: stretch;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n .imgAparece[_ngcontent-%COMP%]{display: none;}\r\n\r\n .numeroEdicion[_ngcontent-%COMP%]{display: none;}\r\n.acom[_ngcontent-%COMP%]{margin-top:370px; }\r\n.fuenteTest[_ngcontent-%COMP%]{  font-family: 'Oswald', sans-serif;}\r\n.publiMobile[_ngcontent-%COMP%]{display:none}\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: normal;\r\n  align-items: normal;\r\n  align-content: normal;\r\n}\r\n.logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-20px}\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cartelInicio[_ngcontent-%COMP%]{display: none;}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cuerpo[_ngcontent-%COMP%]{\r\n background-color:  rgb(51, 51, 51);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{font-family: 'Roboto Slab', serif;}\r\n.quienesSomos[_ngcontent-%COMP%]{\r\n   left:220px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n.foterText[_ngcontent-%COMP%]{margin-top:-10px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;}\r\n\r\n\r\n.formarParte[_ngcontent-%COMP%]{\r\n   left:380px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n\r\n\r\n\r\n.textLogo[_ngcontent-%COMP%]{\r\n    font-family: 'Teko', sans-serif;\r\n    font-size: 40px; color: rgba(194, 18, 18, 0.733);\r\n    letter-spacing: 0px;\r\n    text-shadow: 1px 1px 2px rgba(56, 56, 56, 0.431);\r\n        }\r\n        .imgSobrante[_ngcontent-%COMP%]{display: none;}\r\n.indice[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n  font-family: 'Oswald', sans-serif;\r\ntext-transform: uppercase;\r\n  margin-bottom: 20px;\r\n  font-size: 28px;\r\n  letter-spacing: 1px;\r\n  color:white}\r\n\r\n  .ediMobil[_ngcontent-%COMP%] {display: none; background-color: #3E2800;margin-top:30px; margin-left:20px; margin-right: 20px ;}\r\n\r\n.textFont[_ngcontent-%COMP%]{\r\n    font-family: 'Yanone Kaffeesatz', sans-serif;\r\n    font-weight: 700;\r\n         }\r\n\r\n.mobile[_ngcontent-%COMP%]{display:none;}\r\n.textBarraNegra2[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n color:black;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n.textBarraNegra[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color:orange;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n     margin-top:-4px;\r\n     min-height: 130px; }\r\n\r\n\r\n.barra[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n    height: 35px;\r\n}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n  color:rgb(255, 255, 255) ;\r\n\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n}\r\n.barraInfo[_ngcontent-%COMP%]{background-color: orange; margin:20px; margin-top:0px ; text-align: right;}\r\n\r\n.editorial[_ngcontent-%COMP%] {color:rgb(255, 255, 255); padding: 20px; font-size: 30px;}\r\n.suscri[_ngcontent-%COMP%]{margin-top:4px; padding-left:30px;}\r\n.suscri2[_ngcontent-%COMP%]{color:black ;margin-top:0px; padding-right:20px}\r\n.suscribirse2[_ngcontent-%COMP%]{cursor: pointer;\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n   letter-spacing: 0.5px;\r\n  outline: none;\r\n  padding-top:7px;\r\n  padding-left: 10px;\r\n  font-size: 15px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n\r\nh5[_ngcontent-%COMP%]{ font-family: 'Abel', sans-serif;\r\nfont-size: 18px;\r\n}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n  \r\n  height: 290px;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n.editorialParrafo[_ngcontent-%COMP%]{\r\n text-align: left;\r\n   letter-spacing: 1px;\r\n  outline: none;\r\n  padding-top:0px;\r\n  padding-left: 20px;\r\n  font-size: 20px;\r\n  margin-bottom: 0px;\r\n  margin-right: 30px;\r\n  line-height:27px;\r\n}\r\n\r\n.logoCCAM[_ngcontent-%COMP%]{width: 125px; margin-top:380px;  margin-left: 112px; margin-right: 0px;}\r\n\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 60px;\r\n  float: left;\r\n  margin-top: 13px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 30px;\r\n  color:orange;\r\n\r\n}\r\n\r\n.numAnterior[_ngcontent-%COMP%]{\r\n  margin-left: 30px; margin-bottom: -10px; font-size: 25px;  margin-top: 10px; \r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{color:rgb(255, 187, 61) ; font-size: 13px;}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: -0.5px;\r\n  font-size:13px;\r\n    color:rgba(0, 0, 0, 0.527);\r\n  margin-right: 17px;\r\n  \r\n\r\n\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n  font-size: 18px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: 0px;\r\n  text-shadow: 1px 1px 3px black;\r\n  color:white;\r\n  line-height: 24px;\r\n  margin-top:20px;\r\n  padding:10px\r\n\r\n}\r\n.animaNav[_ngcontent-%COMP%]{transform: rotate(-90deg);  color:orange ; }\r\n\r\n\r\n.barraTexto[_ngcontent-%COMP%]{font-family: 'Oswald', sans-serif; color:white ; font-size: 12px; letter-spacing: 2px; }\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{background-color: #dfdfdf; }\r\n.logo[_ngcontent-%COMP%]{\r\n\r\n    margin-top:0px;\r\n    margin-bottom: 0px;\r\n    width:180px;\r\n    height:100%;\r\n    margin-left:-40px;\r\n    margin-top:5px;\r\n    margin-bottom: 15px;\r\n    object-fit: cover;\r\n\r\n\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    margin-right:110px;\r\n    position: absolute;\r\n    right: 95px;\r\n    top:2px;\r\n    outline: none;\r\n    width: 150px;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 3px;\r\n    }\r\n\r\n.textlogoCentro[_ngcontent-%COMP%]{\r\n    top:60px;\r\n    left: 118px;\r\n    position: absolute;\r\n }\r\n.textlogoAbajo[_ngcontent-%COMP%]{\r\n    top:96px;\r\n    left: 118px;\r\n    position: absolute;  }\r\n\r\n.anima[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0, 0, 0, 0.068);\r\n  border-radius: 10%;\r\n\r\n\r\n}\r\n\r\n.aparece767[_ngcontent-%COMP%]{display: none;}\r\n.anima[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n  border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n.anima2[_ngcontent-%COMP%]:hover{\r\n  color:blanchedalmond;\r\n  background: rgba(219, 219, 219, 0.068);\r\n   border-radius: 10%;\r\n\r\n\r\n\r\n}\r\n\r\n.subefuente[_ngcontent-%COMP%]{margin-top: 20px;; margin-left: 30px;}\r\n.anima2[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n   border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n\r\n\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n  line-height: 30px !important;\r\n  height: 30px !important;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 255, 255);\r\n    height: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{margin:0px; padding:5px;margin-left: 15px}\r\n      li[_ngcontent-%COMP%] {\r\n          display: inline;\r\n         }\r\n\r\n         span[_ngcontent-%COMP%] {margin-left:4px}\r\n\r\n.menuTexto[_ngcontent-%COMP%] {\r\n        margin-top: 6px!important;\r\n        letter-spacing: 0.5px;\r\n\r\n\r\n        text-decoration: none;\r\n        float: left;\r\n        padding: 5px;\r\n        color: rgb(0, 0, 0); \r\n        margin-top:3px;\r\n        cursor: pointer;\r\n                }\r\n                .padleft[_ngcontent-%COMP%]{padding-left:10px!important}\r\n                .menuTexto[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n                  background-color: rgb(0, 0, 0); \r\n                  color:aliceblue;\r\n                  border-radius: 5px;\r\n                }\r\n\r\n\r\n\r\n.activo[_ngcontent-%COMP%]{\r\n              color: rgb(160, 24, 0);  \r\n\r\n             }\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: nowrap;\r\n\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              @media (max-width:274){\r\n\r\n                .quitarTextoLogo[_ngcontent-%COMP%]{display:none }\r\n\r\n                .fondoEditorial[_ngcontent-%COMP%] {height: 320px;}\r\n                }\r\n\r\n\r\n\r\n\r\n            @media (max-width: 860px)\r\n              {\r\n                .quitar800[_ngcontent-%COMP%]{\r\n                display: none;}\r\n\r\n                  .textUp[_ngcontent-%COMP%]{\r\n                      font-size:40px;\r\n                     margin-top:-30px;\r\n                      margin-left: -25px;\r\n                      letter-spacing: -1px;}\r\n                .textDown[_ngcontent-%COMP%]{font-size:40px;\r\n                     margin-left: -25px;\r\n                       margin-top:-34px;\r\n                       letter-spacing: -1px}\r\n\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:3000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 33%; }\r\n            }\r\n\r\n\r\n\r\n\r\n            @media (max-width:2666px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 25%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 25%; }\r\n            }\r\n\r\n            @media (max-width:2402px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 24%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 24%; }\r\n            }\r\n\r\n            @media (max-width:2200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 20%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 20%; }\r\n            }\r\n\r\n            @media (max-width:2000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 18%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 18%; }\r\n            }\r\n\r\n            @media (max-width:1800px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 15%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 15%; }\r\n            }\r\n\r\n            @media (max-width:1600px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 13%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 13%; }\r\n            }\r\n            @media (max-width:1420px)\r\n            {\r\n              .logoCCAM[_ngcontent-%COMP%]{margin-left: 88px;}\r\n            }\r\n\r\n\r\n\r\n            @media (max-width:1400px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 8%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 8%; }\r\n            }\r\n\r\n            @media (max-width:1349px)\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-10px}\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:1200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%; }\r\n            }\r\n\r\n            @media (max-width:1120px)\r\n\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-5px}\r\n            }\r\n\r\n            @media (max-width:1050px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%;}\r\n            .logoCCAM[_ngcontent-%COMP%]{margin-left: 60px;}\r\n            .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-27px}\r\n            .quitar1000[_ngcontent-%COMP%]{display:none!important}\r\n\r\n\r\n\r\n            }\r\n\r\n            @media (max-width:992px){\r\n              .fondoEditorial[_ngcontent-%COMP%]{\r\n                height: 320px;}\r\n              \r\n              .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n              .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n             }\r\n\r\n@media (max-width:600px){\r\n  .numAnterior[_ngcontent-%COMP%]{font-size: 25px;margin-bottom: 0px!important; margin-top: 5px; margin-left:15px}\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 220px!important;}\r\n  .indice[_ngcontent-%COMP%]{display: none;}\r\n  .numeroEdicion[_ngcontent-%COMP%]{display: inline;}\r\n  .carousel[_ngcontent-%COMP%]{height:400px!important; }\r\n  .FlexContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n    width: 65%;\r\n    background-color: #2f1d58;\r\n    height: 80vh;\r\n    overflow: auto;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:500px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 260px!important;}\r\n}\r\n\r\n@media (max-width:400px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 290px!important;}\r\n}\r\n\r\n@media (max-width:354px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 310px!important;}\r\n}\r\n\r\n@media (max-width:342px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 330px!important;}\r\n}\r\n@media (max-width:306px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 340px!important;}\r\n}\r\n@media (max-width:296px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 370px!important;}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.carousel[_ngcontent-%COMP%]{height:500px ; background-color: #7e5a1700;  margin-left:20px; margin-right: 20px ;}\r\n.cartelInicio[_ngcontent-%COMP%]{display:block}\r\n.FlexContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px;\r\n    background-color: lightblue;\r\n}\r\n  .editorialParrafo[_ngcontent-%COMP%]{font-size: 14px; line-height: 19px;\r\n  }\r\n\r\n  .publiMobile[_ngcontent-%COMP%]{display: block;}\r\np[_ngcontent-%COMP%]{font-size: 14px!important;}\r\n  .imagenLoading[_ngcontent-%COMP%]{ position:absolute; bottom:-20px;  right: 0px ; left:0px ;}\r\n\r\n\r\n  .poner[_ngcontent-%COMP%]{display:none}\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{margin-top:-30px}\r\n.fondo[_ngcontent-%COMP%]{background-image: none;background-color: white;}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 0px; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 0px; }\r\n.indice[_ngcontent-%COMP%]{font-size:25px;margin-left:15px; margin-bottom:10px;margin-top: 10px; }\r\n.banner[_ngcontent-%COMP%]{margin-left:20px; padding-right:40px; margin-top:30px}\r\n.subefuente[_ngcontent-%COMP%]{font-size: 20px;margin-left:20px!important; margin-top:-12px!important; margin-bottom: 10px;}\r\n.responsi[_ngcontent-%COMP%]{width: 110px!important;}\r\n.responsi2[_ngcontent-%COMP%]{width: 90px!important;}\r\n.barraInfo[_ngcontent-%COMP%]{margin:0px}\r\n.logo[_ngcontent-%COMP%]{width: 130px;  margin-left: -10px;}\r\n.mobile[_ngcontent-%COMP%]{display:inline}\r\n.cuerpo[_ngcontent-%COMP%]{background-color:orange;  padding-left: 0px;  margin-right: 0px;}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n.textUp[_ngcontent-%COMP%]{font-size:30px; margin-top:-45px; margin-left: -25px; letter-spacing: -1px;}\r\n.textDown[_ngcontent-%COMP%]{font-size:30px; margin-left: -25px;   margin-top:-55px; letter-spacing: -1px}\r\np[_ngcontent-%COMP%]{font-size:14px!important}\r\n\r\n.footer[_ngcontent-%COMP%]{margin-top: -227px!important;}\r\n.acom[_ngcontent-%COMP%]{margin-top: -61px!important;}\r\n  }\r\n\r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n    0% { transform: rotate(0) }\r\n    100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 83px;\r\n    height: 83px;\r\n    top: 8.5px;\r\n    left: 8.5px;\r\n    border-radius: 50%;\r\n    border: 13px solid #000;\r\n    border-color: #0a0a0a transparent #0a0a0a transparent;\r\n    animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 13px;\r\n    height: 13px;\r\n    top: -13px;\r\n    left: 22px;\r\n    background: #0a0a0a;\r\n    border-radius: 50%;\r\n    box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    left: -13px;\r\n    top: 22px;\r\n    box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    height: 84px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.84);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n\r\n.imgmobile[_ngcontent-%COMP%]{width:100px; margin-top:74px}\r\n\r\n@media (max-width:767px){\r\n  .aparece767[_ngcontent-%COMP%]{display: block;}\r\n  .arreglo2daFoto[_ngcontent-%COMP%]{padding-right: 20px!important;}\r\n}\r\n\r\n@media (max-width:767px){\r\n\r\n  .ajusteTop[_ngcontent-%COMP%]{margin-top: 20px;}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHVibGljaWRhZHgzL3B1YmxpY2lkYWR4My5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7K0VBRytFO0NBRTlFOzs0RkFFMkY7O0NBSzNGLFdBQVcsWUFBWTs7Q0FFdkIsSUFBSSxZQUFZLENBQUM7Q0FDakI7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjtDQUNDLFlBQVksYUFBYSxDQUFDOztDQUUxQixlQUFlLGFBQWEsQ0FBQztBQUM5QixNQUFNLGdCQUFnQixFQUFFO0FBQ3hCLGNBQWMsaUNBQWlDLENBQUM7QUFDaEQsYUFBYSxZQUFZO0NBQ3hCO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQSxRQUFRLFlBQVksR0FBRyxpQkFBaUI7QUFDeEM7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBLGNBQWMsYUFBYSxDQUFDOztBQUU1QjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7QUFDQSwrQ0FBK0M7QUFDL0M7Q0FDQyxrQ0FBa0M7OztBQUduQzs7Ozs7QUFLQSxHQUFHLGlDQUFpQyxDQUFDO0FBQ3JDO0dBQ0csVUFBVTtHQUNWLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLGtCQUFrQjtBQUNyQjs7QUFFQSxXQUFXLGdCQUFnQjtFQUN6Qiw0Q0FBNEMsQ0FBQzs7O0FBRy9DO0dBQ0csVUFBVTtHQUNWLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLGtCQUFrQjtBQUNyQjs7Ozs7QUFLQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlLEVBQUUsK0JBQStCO0lBQ2hELG1CQUFtQjtJQUNuQixnREFBZ0Q7UUFDNUM7UUFDQSxhQUFhLGFBQWEsQ0FBQztBQUNuQzs7RUFFRSxpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DLHlCQUF5QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLFdBQVcsYUFBYSxFQUFFLHlCQUF5QixDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQzs7QUFFN0c7SUFDSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO1NBQ1g7O0FBRVQsUUFBUSxZQUFZLENBQUM7QUFDckI7RUFDRSx1RUFBdUU7RUFDdkUsZUFBZTtDQUNoQixXQUFXO0VBQ1YsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1RUFBdUU7RUFDdkUsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxtRUFBbUU7QUFDbkU7S0FDSyxlQUFlO0tBQ2YsaUJBQWlCLEVBQUU7O0FBRXhCLDZEQUE2RDtBQUM3RDtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCO0FBQ0EsVUFBVSxnQkFBZ0IsRUFBRTtBQUM1QixhQUFhLGVBQWU7RUFDMUIseUJBQXlCOztFQUV6QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0EsV0FBVyx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDOztBQUVyRixZQUFZLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7QUFDckUsUUFBUSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7QUFDMUMsU0FBUyxZQUFZLENBQUMsY0FBYyxFQUFFLGtCQUFrQjtBQUN4RCxjQUFjLGVBQWU7RUFDM0IsdUVBQXVFO0dBQ3RFLHFCQUFxQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFHQSxJQUFJLCtCQUErQjtBQUNuQyxlQUFlO0FBQ2Y7O0FBRUEsaUJBQWlCLHlCQUF5Qjs7RUFFeEMsYUFBYTtHQUNaLGlCQUFpQjtHQUNqQixrQkFBa0I7O0FBRXJCO0NBQ0MsZ0JBQWdCO0dBQ2QsbUJBQW1CO0VBQ3BCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSxVQUFVLFlBQVksRUFBRSxnQkFBZ0IsR0FBRyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQzs7QUFFakY7O0VBRUUsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxHQUFHLGdCQUFnQjs7QUFFN0U7O0FBRUEsRUFBRSx3QkFBd0IsRUFBRSxlQUFlLENBQUM7O0FBRTVDO0VBQ0UsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7SUFDWiwwQkFBMEI7RUFDNUIsa0JBQWtCOzs7O0FBSXBCOztBQUVBOztFQUVFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmOztBQUVGO0FBQ0EsVUFBVSx5QkFBeUIsR0FBRyxhQUFhLEVBQUU7OztBQUdyRCxZQUFZLGlDQUFpQyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUU7O0FBRW5HLGdCQUFnQix5QkFBeUIsRUFBRTtBQUMzQzs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCOzs7QUFHckI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWiw0RUFBNEU7SUFDNUUsa0JBQWtCO0lBQ2xCOztBQUVKO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCLEdBQUc7O0FBRXpCO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjs7O0FBR3BCOztBQUVBLFlBQVksYUFBYSxDQUFDO0FBQzFCOztFQUVFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEI7O0FBRUY7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0dBQ3JDLGtCQUFrQjs7OztBQUlyQjs7QUFFQSxZQUFZLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDO0FBQ2pEOztFQUVFLHNDQUFzQztHQUNyQyxrQkFBa0I7RUFDbkI7O0FBRUY7Ozs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQSxHQUFHLFVBQVUsRUFBRSxXQUFXLENBQUMsaUJBQWlCO01BQ3RDO1VBQ0ksZUFBZTtTQUNoQjs7U0FFQSxNQUFNLGVBQWU7O0FBRTlCO1FBQ1EseUJBQXlCO1FBQ3pCLHFCQUFxQjs7O1FBR3JCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQixFQUFFLGNBQWM7UUFDbkMsY0FBYztRQUNkLGVBQWU7Z0JBQ1A7Z0JBQ0EsU0FBUywyQkFBMkI7Z0JBQ3BDOztrQkFFRSw4QkFBOEIsRUFBRSxjQUFjO2tCQUM5QyxlQUFlO2tCQUNmLGtCQUFrQjtnQkFDcEI7Ozs7QUFJaEI7Y0FDYyxzQkFBc0IsR0FBRyxxQkFBcUI7O2FBRS9DO2FBQ0E7Z0JBQ0csYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGlCQUFpQjs7Z0JBRWpCLG1CQUFtQjtnQkFDbkIscUJBQXFCO2NBQ3ZCOztjQUVBO2dCQUNFLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixRQUFRO2NBQ1Y7O2NBRUE7Z0JBQ0UsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLFFBQVE7Y0FDVjs7Y0FFQTs7Z0JBRUUsaUJBQWlCLGFBQWE7O2dCQUU5QixpQkFBaUIsYUFBYSxDQUFDO2dCQUMvQjs7Ozs7WUFLSjs7Z0JBRUk7Z0JBQ0EsYUFBYSxDQUFDOztrQkFFWjtzQkFDSSxjQUFjO3FCQUNmLGdCQUFnQjtzQkFDZixrQkFBa0I7c0JBQ2xCLG9CQUFvQixDQUFDO2dCQUMzQixVQUFVLGNBQWM7cUJBQ25CLGtCQUFrQjt1QkFDaEIsZ0JBQWdCO3VCQUNoQixvQkFBb0I7OztZQUcvQjs7O1lBR0E7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7Ozs7O1lBS0E7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7WUFDQTs7Y0FFRSxVQUFVLGlCQUFpQixDQUFDO1lBQzlCOzs7O1lBSUE7YUFDQyxVQUFVLGVBQWUsRUFBRTtZQUM1QixTQUFTLGdCQUFnQixFQUFFO1lBQzNCOztZQUVBOztjQUVFLFFBQVEsWUFBWSxHQUFHLGlCQUFpQjs7WUFFMUM7OztZQUdBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsRUFBRTtZQUMzQjs7WUFFQTs7O2NBR0UsUUFBUSxZQUFZLEdBQUcsZ0JBQWdCO1lBQ3pDOztZQUVBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsQ0FBQztZQUMxQixVQUFVLGlCQUFpQixDQUFDO1lBQzVCLFFBQVEsWUFBWSxHQUFHLGlCQUFpQjtZQUN4QyxZQUFZLHNCQUFzQjs7OztZQUlsQzs7WUFFQTtjQUNFO2dCQUNFLGFBQWEsQ0FBQzs7Y0FFaEIsY0FBYyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUU7Y0FDMUYsWUFBWSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFOzs7YUFHdEc7O0FBRWI7RUFDRSxhQUFhLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCO0VBQzVGLGdCQUFnQix1QkFBdUIsQ0FBQztFQUN4QyxRQUFRLGFBQWEsQ0FBQztFQUN0QixlQUFlLGVBQWUsQ0FBQztFQUMvQixVQUFVLHNCQUFzQixFQUFFO0VBQ2xDO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOzs7Ozs7QUFNQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7O0FBRUE7O0VBRUUsZ0JBQWdCLHVCQUF1QixDQUFDO0FBQzFDOztBQUVBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7QUFFQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7QUFDQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7QUFDQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7Ozs7Ozs7QUFPQSxVQUFVLGFBQWEsRUFBRSwyQkFBMkIsR0FBRyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztBQUM3RixjQUFjLGFBQWE7QUFDM0I7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7RUFDRSxrQkFBa0IsZUFBZSxFQUFFLGlCQUFpQjtFQUNwRDs7RUFFQSxhQUFhLGNBQWMsQ0FBQztBQUM5QixFQUFFLHlCQUF5QixDQUFDO0VBQzFCLGdCQUFnQixpQkFBaUIsRUFBRSxZQUFZLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7O0VBR3pFLE9BQU8sWUFBWTs7QUFFckIsZ0JBQWdCLGdCQUFnQjtBQUNoQyxPQUFPLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO0FBQ3RELFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsU0FBUyxpQkFBaUIsRUFBRTtBQUM1QixRQUFRLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRTtBQUM5RSxRQUFRLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWU7QUFDN0QsWUFBWSxlQUFlLENBQUMsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUM7QUFDeEcsVUFBVSxzQkFBc0IsQ0FBQztBQUNqQyxXQUFXLHFCQUFxQixDQUFDO0FBQ2pDLFdBQVcsVUFBVTtBQUNyQixNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUN4QyxRQUFRLGNBQWM7QUFDdEIsUUFBUSx1QkFBdUIsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztBQUN4RSxXQUFXLFlBQVk7QUFDdkIsUUFBUSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7QUFDbkYsVUFBVSxjQUFjLEVBQUUsa0JBQWtCLElBQUksZ0JBQWdCLEVBQUUsb0JBQW9CO0FBQ3RGLEVBQUUsd0JBQXdCOztBQUUxQixRQUFRLDRCQUE0QixDQUFDO0FBQ3JDLE1BQU0sMkJBQTJCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxLQUFLLHFCQUFxQjtJQUMxQixPQUFPLDBCQUEwQjtFQUNuQztFQUNBLHVCQUF1QixpQ0FBaUM7RUFDeEQ7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscURBQXFEO0lBQ3JELDZDQUE2QztFQUMvQztFQUNBLHNDQUFzQywwQkFBMEI7RUFDaEU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQixFQUFFLG1CQUFtQjtFQUM1QztFQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtFQUNoRCxxQ0FBcUM7O0FBRXZDLFdBQVcsV0FBVyxFQUFFLGVBQWU7O0FBRXZDO0VBQ0UsWUFBWSxjQUFjLENBQUM7RUFDM0IsZ0JBQWdCLDZCQUE2QixDQUFDO0FBQ2hEOztBQUVBOztFQUVFLFdBQVcsZ0JBQWdCLENBQUM7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRyYWluK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1K0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFiZWwmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcclxuLypcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWx1bW5pK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbitTa2V0Y2g6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbmlvOndnaHRANzAwJmZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhdStQaGlsb21lbmUrT25lJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuXHJcblxyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuXHJcbiBpbWd7aGVpZ2h0OiBhdXRvO31cclxuIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgyKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDMpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcbiAuaW1nQXBhcmVjZXtkaXNwbGF5OiBub25lO31cclxuXHJcbiAubnVtZXJvRWRpY2lvbntkaXNwbGF5OiBub25lO31cclxuLmFjb217bWFyZ2luLXRvcDozNzBweDsgfVxyXG4uZnVlbnRlVGVzdHsgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjt9XHJcbi5wdWJsaU1vYmlsZXtkaXNwbGF5Om5vbmV9XHJcbiAuZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gIGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcclxufVxyXG4ubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi0yMHB4fVxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgyKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmNhcnRlbEluaWNpb3tkaXNwbGF5OiBub25lO31cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgzKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDQpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcbi8qIFRFWFRPIENFTlRSTyBDVUxUVVJBTCBBUkdFTlRJTk8gREUgTU9OVEHDg8KRQSAqL1xyXG4uY3VlcnBve1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIHJnYig1MSwgNTEsIDUxKTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5oMXtmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7fVxyXG4ucXVpZW5lc1NvbW9ze1xyXG4gICBsZWZ0OjIyMHB4O1xyXG4gICBmb250LXNpemU6MTJweDtcclxuICAgbWFyZ2luLXRvcDoxMnB4O1xyXG4gICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmZvdGVyVGV4dHttYXJnaW4tdG9wOi0xMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO31cclxuXHJcblxyXG4uZm9ybWFyUGFydGV7XHJcbiAgIGxlZnQ6MzgwcHg7XHJcbiAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICBtYXJnaW4tdG9wOjEycHg7XHJcbiAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4udGV4dExvZ297XHJcbiAgICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBjb2xvcjogcmdiYSgxOTQsIDE4LCAxOCwgMC43MzMpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDU2LCA1NiwgNTYsIDAuNDMxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ1NvYnJhbnRle2Rpc3BsYXk6IG5vbmU7fVxyXG4uaW5kaWNle1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOndoaXRlfVxyXG5cclxuICAuZWRpTW9iaWwge2Rpc3BsYXk6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICMzRTI4MDA7bWFyZ2luLXRvcDozMHB4OyBtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDIwcHggO31cclxuXHJcbi50ZXh0Rm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgfVxyXG5cclxuLm1vYmlsZXtkaXNwbGF5Om5vbmU7fVxyXG4udGV4dEJhcnJhTmVncmEyIHtcclxuICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiBjb2xvcjpibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG59XHJcblxyXG4udGV4dEJhcnJhTmVncmEge1xyXG4gIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjpvcmFuZ2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxufVxyXG5cclxuLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9uZG90cmFzcGFyZW50ZS5wbmcnKTsgKi9cclxuLmZvbmRve1xyXG4gICAgIG1hcmdpbi10b3A6LTRweDtcclxuICAgICBtaW4taGVpZ2h0OiAxMzBweDsgfVxyXG5cclxuLyogY29sb3IgeSBhbHR1cmEgZGUgbGEgcHJpbWVyYSBiYXJyYSBuZWdyYSBjb24gZWwgYnVzY2Fkb3IgKi9cclxuLmJhcnJhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMzMlOyB9XHJcbi5zdXNjcmliaXJzZXtjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpIDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJhcnJhSW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IG1hcmdpbjoyMHB4OyBtYXJnaW4tdG9wOjBweCA7IHRleHQtYWxpZ246IHJpZ2h0O31cclxuXHJcbi5lZGl0b3JpYWwge2NvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTsgcGFkZGluZzogMjBweDsgZm9udC1zaXplOiAzMHB4O31cclxuLnN1c2NyaXttYXJnaW4tdG9wOjRweDsgcGFkZGluZy1sZWZ0OjMwcHg7fVxyXG4uc3VzY3JpMntjb2xvcjpibGFjayA7bWFyZ2luLXRvcDowcHg7IHBhZGRpbmctcmlnaHQ6MjBweH1cclxuLnN1c2NyaWJpcnNlMntjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmctdG9wOjdweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcblxyXG5oNXsgZm9udC1mYW1pbHk6ICdBYmVsJywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZm9uZG9FZGl0b3JpYWwge2JhY2tncm91bmQtY29sb3I6ICMzRTI4MDA7XHJcbiAgXHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMjBweH1cclxuXHJcbi5lZGl0b3JpYWxQYXJyYWZve1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmctdG9wOjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6MjdweDtcclxufVxyXG5cclxuLmxvZ29DQ0FNe3dpZHRoOiAxMjVweDsgbWFyZ2luLXRvcDozODBweDsgIG1hcmdpbi1sZWZ0OiAxMTJweDsgbWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG5cclxuLmNhcGl0YWw6OmZpcnN0LWxldHRlciB7XHJcblxyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOm9yYW5nZTtcclxuXHJcbn1cclxuXHJcbi5udW1BbnRlcmlvcntcclxuICBtYXJnaW4tbGVmdDogMzBweDsgbWFyZ2luLWJvdHRvbTogLTEwcHg7IGZvbnQtc2l6ZTogMjVweDsgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG5cclxufVxyXG5cclxuYXtjb2xvcjpyZ2IoMjU1LCAxODcsIDYxKSA7IGZvbnQtc2l6ZTogMTNweDt9XHJcblxyXG4udGV4dG97XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICBmb250LXNpemU6MTNweDtcclxuICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTdweDtcclxuICBcclxuXHJcblxyXG59XHJcblxyXG4udGl0dWxvIHtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgcGFkZGluZzoxMHB4XHJcblxyXG59XHJcbi5hbmltYU5hdnt0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyAgY29sb3I6b3JhbmdlIDsgfVxyXG5cclxuXHJcbi5iYXJyYVRleHRve2ZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjsgY29sb3I6d2hpdGUgOyBmb250LXNpemU6IDEycHg7IGxldHRlci1zcGFjaW5nOiAycHg7IH1cclxuXHJcbi5jb2xvckJhcnJhTWVudXtiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmOyB9XHJcbi5sb2dve1xyXG5cclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6MTgwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0Oi00MHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG5cclxufVxyXG5pbnB1dHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDoxMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA5NXB4O1xyXG4gICAgdG9wOjJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG5cclxuLnRleHRsb2dvQ2VudHJve1xyXG4gICAgdG9wOjYwcHg7XHJcbiAgICBsZWZ0OiAxMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIH1cclxuLnRleHRsb2dvQWJham97XHJcbiAgICB0b3A6OTZweDtcclxuICAgIGxlZnQ6IDExOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgfVxyXG5cclxuLmFuaW1hOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuXHJcblxyXG59XHJcblxyXG4uYXBhcmVjZTc2N3tkaXNwbGF5OiBub25lO31cclxuLmFuaW1hOmFjdGl2ZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSlcclxuXHJcbn1cclxuXHJcbi5hbmltYTI6aG92ZXJ7XHJcbiAgY29sb3I6YmxhbmNoZWRhbG1vbmQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTksIDIxOSwgMjE5LCAwLjA2OCk7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLnN1YmVmdWVudGV7bWFyZ2luLXRvcDogMjBweDs7IG1hcmdpbi1sZWZ0OiAzMHB4O31cclxuLmFuaW1hMjphY3RpdmUge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDU1KTtcclxuICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnVse21hcmdpbjowcHg7IHBhZGRpbmc6NXB4O21hcmdpbi1sZWZ0OiAxNXB4fVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHNwYW4ge21hcmdpbi1sZWZ0OjRweH1cclxuXHJcbi5tZW51VGV4dG8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFkbGVmdHtwYWRkaW5nLWxlZnQ6MTBweCFpbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICAubWVudVRleHRvIDphY3RpdmUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICAgICAgICAgICAgY29sb3I6YWxpY2VibHVlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbi5hY3Rpdm97XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjAsIDI0LCAwKTsgIC8qQ29sb3IgdGV4dG8tYWN0aXZvKi9cclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Mjc0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAucXVpdGFyVGV4dG9Mb2dve2Rpc3BsYXk6bm9uZSB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvbmRvRWRpdG9yaWFsIHtoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAucXVpdGFyODAwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudGV4dFVwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbiAgICAgICAgICAgICAgICAudGV4dERvd257Zm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDozMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNjY2cHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNDAycHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI0JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI0JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxODAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MjBweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogODhweDt9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTQwMHB4KVxyXG4gICAgICAgICAgICB7Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiA4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDglOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEzNDlweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvbm17d2lkdGg6IDE1MHB4OyAgbWFyZ2luLWxlZnQ6LTEwcHh9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KVxyXG4gICAgICAgICAgICB7Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDAlOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjExMjBweClcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi01cHh9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEwNTBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwJTt9XHJcbiAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogNjBweDt9XHJcbiAgICAgICAgICAgIC5sb2dvbm17d2lkdGg6IDE1MHB4OyAgbWFyZ2luLWxlZnQ6LTI3cHh9XHJcbiAgICAgICAgICAgIC5xdWl0YXIxMDAwe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAgICAgICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuaW1nU29icmFudGV7IHBhZGRpbmc6MjBweDsgcGFkZGluZy1sZWZ0OiAzMHB4OyBwYWRkaW5nLXJpZ2h0OiAzMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAgICAgICAgICAgLmltZ0FwYXJlY2V7ZGlzcGxheTpibG9jazsgcGFkZGluZzogMzBweDsgbWFyZ2luLXRvcDotMTBweDsgcGFkZGluZy1sZWZ0OiAxM3B4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XHJcblxyXG5cclxuICAgICAgICAgICAgIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAubnVtQW50ZXJpb3J7Zm9udC1zaXplOiAyNXB4O21hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWxlZnQ6MTVweH1cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAyMjBweCFpbXBvcnRhbnQ7fVxyXG4gIC5pbmRpY2V7ZGlzcGxheTogbm9uZTt9XHJcbiAgLm51bWVyb0VkaWNpb257ZGlzcGxheTogaW5saW5lO31cclxuICAuY2Fyb3VzZWx7aGVpZ2h0OjQwMHB4IWltcG9ydGFudDsgfVxyXG4gIC5GbGV4Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjFkNTg7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDI2MHB4IWltcG9ydGFudDt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMjkwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MzU0cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzMTBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDozNDJweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDMzMHB4IWltcG9ydGFudDt9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MzA2cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzNDBweCFpbXBvcnRhbnQ7fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjI5NnB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMzcwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWx7aGVpZ2h0OjUwMHB4IDsgYmFja2dyb3VuZC1jb2xvcjogIzdlNWExNzAwOyAgbWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4IDt9XHJcbi5jYXJ0ZWxJbmljaW97ZGlzcGxheTpibG9ja31cclxuLkZsZXhDb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4gIC5lZGl0b3JpYWxQYXJyYWZve2ZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICAucHVibGlNb2JpbGV7ZGlzcGxheTogYmxvY2s7fVxyXG5we2ZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7fVxyXG4gIC5pbWFnZW5Mb2FkaW5neyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOi0yMHB4OyAgcmlnaHQ6IDBweCA7IGxlZnQ6MHB4IDt9XHJcblxyXG5cclxuICAucG9uZXJ7ZGlzcGxheTpub25lfVxyXG5cclxuLmNvbG9yQmFycmFNZW51e21hcmdpbi10b3A6LTMwcHh9XHJcbi5mb25kb3tiYWNrZ3JvdW5kLWltYWdlOiBub25lO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuLm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAwcHg7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwcHg7IH1cclxuLmluZGljZXtmb250LXNpemU6MjVweDttYXJnaW4tbGVmdDoxNXB4OyBtYXJnaW4tYm90dG9tOjEwcHg7bWFyZ2luLXRvcDogMTBweDsgfVxyXG4uYmFubmVye21hcmdpbi1sZWZ0OjIwcHg7IHBhZGRpbmctcmlnaHQ6NDBweDsgbWFyZ2luLXRvcDozMHB4fVxyXG4uc3ViZWZ1ZW50ZXtmb250LXNpemU6IDIwcHg7bWFyZ2luLWxlZnQ6MjBweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6LTEycHghaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLnJlc3BvbnNpe3dpZHRoOiAxMTBweCFpbXBvcnRhbnQ7fVxyXG4ucmVzcG9uc2kye3dpZHRoOiA5MHB4IWltcG9ydGFudDt9XHJcbi5iYXJyYUluZm97bWFyZ2luOjBweH1cclxuLmxvZ297d2lkdGg6IDEzMHB4OyAgbWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLm1vYmlsZXtkaXNwbGF5OmlubGluZX1cclxuLmN1ZXJwb3tiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTsgIHBhZGRpbmctbGVmdDogMHB4OyAgbWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG4ucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLnRleHRVcHtmb250LXNpemU6MzBweDsgbWFyZ2luLXRvcDotNDVweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbi50ZXh0RG93bntmb250LXNpemU6MzBweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyAgIG1hcmdpbi10b3A6LTU1cHg7IGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5we2ZvbnQtc2l6ZToxNHB4IWltcG9ydGFudH1cclxuXHJcbi5mb290ZXJ7bWFyZ2luLXRvcDogLTIyN3B4IWltcG9ydGFudDt9XHJcbi5hY29te21hcmdpbi10b3A6IC02MXB4IWltcG9ydGFudDt9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94IWltcG9ydGFudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogODNweDtcclxuICAgIHRvcDogOC41cHg7XHJcbiAgICBsZWZ0OiA4LjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhIHRyYW5zcGFyZW50ICMwYTBhMGEgdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IGxkaW8tejdmdTZlMWRlbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDcwcHggMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIGRpdjphZnRlciB7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIHRvcDogMjJweDtcclxuICAgIGJveC1zaGFkb3c6IDcwcHggMCAwIDAgIzBhMGEwYTtcclxuICB9XHJcbiAgLmxvYWRpbmdpby1zcGlubmVyLWR1YWwtcmluZy14ZzF2bnJmMmI2byB7XHJcbiAgICB3aWR0aDogODRweDtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDAuODQpO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuXHJcbi5pbWdtb2JpbGV7d2lkdGg6MTAwcHg7IG1hcmdpbi10b3A6NzRweH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAuYXBhcmVjZTc2N3tkaXNwbGF5OiBibG9jazt9XHJcbiAgLmFycmVnbG8yZGFGb3Rve3BhZGRpbmctcmlnaHQ6IDIwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG5cclxuICAuYWp1c3RlVG9we21hcmdpbi10b3A6IDIwcHg7fVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7330:
/*!*************************************!*\
  !*** ./src/app/models/articulos.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Articulos": () => (/* binding */ Articulos)
/* harmony export */ });
class Articulos {
  constructor(correos = '', contadorComentarios = '', comentarios = '', resultadoCategoria = '', resultadoCategoria2 = '', resultadoCategoria3 = '', resultadoCategoria4 = '', resultadoCategoria5 = '', resultadoCategoria6 = '', resultadoCategoria7 = '', resultadoCategoria8 = '', resultadoCategoria9 = '', resultadoCategoria10 = '', resultadoCategoria11 = '', resultadoCategoria12 = '', resultadoImagen = '', resultadoImagen2 = '', resultadoImagen3 = '', resultadoImagen4 = '', resultadoImagen5 = '', resultadoImagen6 = '', resultadoImagen7 = '', resultadoImagen8 = '', resultadoImagen9 = '', resultadoImagen10 = '', resultadoImagen11 = '', resultadoImagen12 = '', resultadoID = '', resultadoID2 = '', resultadoID3 = '', resultadoID4 = '', resultadoID5 = '', resultadoID6 = '', resultadoID7 = '', resultadoID8 = '', resultadoID9 = '', resultadoID10 = '', resultadoID11 = '', resultadoID12 = '', posicion = 0, art1 = '', art2 = '', art3 = '', art4 = '', art5 = '', art6 = '', art7 = '', art8 = '', art9 = '', art10 = '', art11 = '', art12 = '', _id = '', fecha = '', fechaMod = '', titulo = '', tituloAlt = '', tituloImagen = '', subtitulo = '', nota = '', imagen1 = '', imagen2 = '', imagen3 = '', fotografia = '', edicionFotografia = '', autor = '', likes = 0, categoria = '', vistas = 0, hash = '', id = 0, marginLeft = 0) {
    //    this.resultadoTitulo = resultadoTitulo
    //    this.resultadoTitulo2 = resultadoTitulo2
    //    this.resultadoTitulo3 = resultadoTitulo3
    //    this.resultadoTitulo4 = resultadoTitulo4
    //    this.resultadoTitulo5 = resultadoTitulo5
    //    this.resultadoTitulo6 = resultadoTitulo6
    this.correos = correos;
    this.contadorComentarios = contadorComentarios;
    this.comentarios = comentarios;
    this.id = id;
    this.art1 = art1;
    this.art2 = art2;
    this.art3 = art3;
    this.art4 = art4;
    this.art5 = art5;
    this.art6 = art6;
    this.art7 = art7;
    this.art8 = art8;
    this.art9 = art9;
    this.art10 = art10;
    this.art11 = art11;
    this.art12 = art12;
    this.marginLeft = marginLeft;
    this.posicion = posicion;
    this.resultadoCategoria = resultadoCategoria;
    this.resultadoCategoria2 = resultadoCategoria2;
    this.resultadoCategoria3 = resultadoCategoria3;
    this.resultadoCategoria4 = resultadoCategoria4;
    this.resultadoCategoria5 = resultadoCategoria5;
    this.resultadoCategoria6 = resultadoCategoria6;
    this.resultadoCategoria7 = resultadoCategoria7;
    this.resultadoCategoria8 = resultadoCategoria8;
    this.resultadoCategoria9 = resultadoCategoria9;
    this.resultadoCategoria10 = resultadoCategoria10;
    this.resultadoCategoria11 = resultadoCategoria11;
    this.resultadoCategoria12 = resultadoCategoria12;
    this.resultadoImagen = resultadoImagen;
    this.resultadoImagen2 = resultadoImagen2;
    this.resultadoImagen3 = resultadoImagen3;
    this.resultadoImagen4 = resultadoImagen4;
    this.resultadoImagen5 = resultadoImagen5;
    this.resultadoImagen6 = resultadoImagen6;
    this.resultadoImagen7 = resultadoImagen7;
    this.resultadoImagen8 = resultadoImagen8;
    this.resultadoImagen9 = resultadoImagen9;
    this.resultadoImagen10 = resultadoImagen10;
    this.resultadoImagen11 = resultadoImagen11;
    this.resultadoImagen12 = resultadoImagen12;
    this._id = _id;
    this.fecha = fecha;
    this.fechaMod = fechaMod;
    this.titulo = titulo;
    this.tituloAlt = tituloAlt;
    this.subtitulo = subtitulo;
    this.nota = nota;
    this.imagen1 = imagen1;
    this.imagen2 = imagen2;
    this.imagen3 = imagen3;
    this.fotografia = fotografia;
    this.edicionFotografia = edicionFotografia;
    this.autor = autor;
    this.categoria = categoria;
    this.vistas = vistas;
    this.imagen3 = imagen3;
    this.likes = likes;
    this.tituloImagen = tituloImagen;
    this.hash = hash;
    this.resultadoID = resultadoID;
    this.resultadoID2 = resultadoID2;
    this.resultadoID3 = resultadoID3;
    this.resultadoID4 = resultadoID4;
    this.resultadoID5 = resultadoID5;
    this.resultadoID6 = resultadoID6;
    this.resultadoID7 = resultadoID7;
    this.resultadoID8 = resultadoID8;
    this.resultadoID9 = resultadoID9;
    this.resultadoID10 = resultadoID10;
    this.resultadoID11 = resultadoID11;
    this.resultadoID12 = resultadoID12;
  }
}

/***/ }),

/***/ 3315:
/*!*****************************************!*\
  !*** ./src/app/pipes/sanetizer.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanetizerPipe": () => (/* binding */ SanetizerPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SanetizerPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
SanetizerPipe.ɵfac = function SanetizerPipe_Factory(t) {
  return new (t || SanetizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SanetizerPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sanetizer",
  type: SanetizerPipe,
  pure: true
});

/***/ }),

/***/ 8851:
/*!*******************************************!*\
  !*** ./src/app/servicios/crud.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudService": () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var _models_articulos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/articulos */ 7330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class CrudService {
  constructor(http, location) {
    this.http = http;
    this.location = location;
    this.URL_API = "http://191.101.18.184:3000/revista";
    this.URL_API2 = "http://191.101.18.184:3000/ccam";
    this.URL_API3 = "http://191.101.18.184:3000/anunciante";
    this.URL_API4 = "http://191.101.18.184:3000/categorias";
    this.URL_API5 = "http://191.101.18.184:3000/carousel";
    this.cambioPantalla = true;
    this.Articulos = [];
    this.loading = true;
    this.unArticulo = new _models_articulos__WEBPACK_IMPORTED_MODULE_0__.Articulos();
  }
  pedirCaousel() {
    return this.http.get(this.URL_API5);
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  //CRUD  
  getCategorias(_id) {
    return this.http.get(this.URL_API4 + `/${_id}`);
  }
  uploadFile(formData) {
    return this.http.post('http://168.197.50.191/upload', formData); // en produccion poner '/upload' por this.URL_API2
  }

  getArticulos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);
  }
  getOneRevista(_id) {
    return this.http.get(this.URL_API + `/${_id}`);
  }
  getAnuncios() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API3);
  }
  modificarAnuncios(x) {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.put(this.URL_API3 + `/${x._id}`, x);
  }
  getArticulos2() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);
  }
  getOneArticulo(_id) {
    return this.http.get(this.URL_API2 + `/${_id}`);
  }
  addArticulo(articulo) {
    return this.http.post(this.URL_API, articulo);
  }
  // modificarArticulo(articulo:Articulos) {
  //   console.log(articulo, 'antes de modificar')
  //   return this.http.put(this.URL_API + `/${articulo._id}` , articulo);
  // };
  modificarArticuloComentario(articulo) {
    console.log(articulo, 'antes de modificar');
    return this.http.put(this.URL_API2 + `/${articulo._id}`, articulo);
  }
  deleteArticulo(_id) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  cut(value) {
    var corte = value.slice(8);
    return corte;
  }
}
CrudService.ɵfac = function CrudService_Factory(t) {
  return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
};
CrudService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CrudService,
  factory: CrudService.ɵfac,
  providedIn: 'root'
});
;

/***/ }),

/***/ 9786:
/*!***************************************************!*\
  !*** ./src/app/servicios/resolve-nota.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveNotaService": () => (/* binding */ ResolveNotaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.service */ 8851);


class ResolveNotaService {
  constructor(crudService) {
    this.crudService = crudService;
  }
  resolve(route, state) {
    if (route.paramMap.has('_id')) {
      return this.crudService.getOneArticulo(route.paramMap.get('_id'));
    } else {
      return this.crudService.getArticulos();
    }
  }
}
ResolveNotaService.ɵfac = function ResolveNotaService_Factory(t) {
  return new (t || ResolveNotaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
ResolveNotaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ResolveNotaService,
  factory: ResolveNotaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7527:
/*!******************************************************!*\
  !*** ./src/app/servicios/resolve-revista.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveRevistaService": () => (/* binding */ ResolveRevistaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.service */ 8851);


class ResolveRevistaService {
  constructor(crudService) {
    this.crudService = crudService;
  }
  resolve(route, state) {
    if (route.paramMap.has('_id')) {
      return this.crudService.getOneRevista(route.paramMap.get('_id'));
    } else {
      return;
    }
  }
}
ResolveRevistaService.ɵfac = function ResolveRevistaService_Factory(t) {
  return new (t || ResolveRevistaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
ResolveRevistaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ResolveRevistaService,
  factory: ResolveRevistaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map