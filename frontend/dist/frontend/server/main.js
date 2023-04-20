/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34621:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 63622);
/* harmony import */ var _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios/resolve-nota.service */ 68391);
/* harmony import */ var _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/main/main.component */ 56485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: '',
  component: _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent
}, {
  path: 'articulo/:_id',
  component: _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_0__.ArticuloComponent,
  resolve: {
    data: _servicios_resolve_nota_service__WEBPACK_IMPORTED_MODULE_1__.ResolveNotaService
  }
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 59229:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/barra-negra/barra-negra.component */ 87988);




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
  constructor() {
    this.title = 'frontend';
    this.loader = false;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
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

/***/ 63370:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 34621);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/portada/portada.component */ 80959);
/* harmony import */ var _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/barra-negra/barra-negra.component */ 87988);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-useful-swiper */ 93042);
/* harmony import */ var _componentes_carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/carousel-revista/carousel-revista.component */ 23256);
/* harmony import */ var _componentes_lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/lateral-relacionado/lateral-relacionado.component */ 36793);
/* harmony import */ var _componentes_articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/articulo-relacionado/articulo-relacionado.component */ 73335);
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ 63622);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/main/main.component */ 56485);
/* harmony import */ var _componentes_a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/a-portada/a-portada.component */ 72517);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 57363);
/* harmony import */ var _componentes_publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/publicidadx3/publicidadx3.component */ 65758);
/* harmony import */ var _componentes_b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/b-indice/b-indice.component */ 33159);
/* harmony import */ var _componentes_publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/publicidad-horizontal/publicidad-horizontal.component */ 72878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4009);



















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_16__.NgxUsefulSwiperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__.PortadaComponent, _componentes_barra_negra_barra_negra_component__WEBPACK_IMPORTED_MODULE_3__.BarraNegraComponent, _componentes_carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_4__.CarouselRevistaComponent, _componentes_lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_5__.LateralRelacionadoComponent, _componentes_articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_6__.ArticuloRelacionadoComponent, _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_7__.ArticuloComponent, _componentes_main_main_component__WEBPACK_IMPORTED_MODULE_8__.MainComponent, _componentes_a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_9__.APortadaComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _componentes_publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_11__.Publicidadx3Component, _componentes_b_indice_b_indice_component__WEBPACK_IMPORTED_MODULE_12__.BIndiceComponent, _componentes_publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_13__.PublicidadHorizontalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_16__.NgxUsefulSwiperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule]
  });
})();

/***/ }),

/***/ 84362:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 78163);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 63370);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 72517:
/*!**************************************************************!*\
  !*** ./src/app/componentes/a-portada/a-portada.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APortadaComponent": () => (/* binding */ APortadaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);


class APortadaComponent {
  constructor(crudService) {
    this.crudService = crudService;
    this.numero = 0;
    this.link = "";
  }
  ngOnInit() {
    this.numero = this.nro + 137;
    //  this.link = this.data.imagen1
  }

  cut(value) {
    var corte = value.slice(2);
    return corte;
  }
  hola() {}
}
APortadaComponent.ɵfac = function APortadaComponent_Factory(t) {
  return new (t || APortadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService));
};
APortadaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: APortadaComponent,
  selectors: [["app-a-portada"]],
  inputs: {
    nro: "nro",
    data: "data"
  },
  decls: 16,
  vars: 1,
  consts: [[1, "row", "marco"], [1, "col-sm-12", "col-md-12", "col-lg-7", "col-xl-7", "col-xxl-7", 2, "padding-right", "0px", "margin-right", "0px"], [2, "position", "relative"], ["src", "../../../assets/tapa.png", "alt", "", "width", "100%", "height", "600px", 1, "imagenPortada", 2, "object-fit", "cover", "margin-top", "-29px"], [1, "imgLogo"], ["src", "../../../assets/logonm.png", "alt", "", 1, "fade-in-image", "logo", 2, "z-index", "-1"], [1, "cuadroTitulo"], [1, "categoria", 2, "margin-top", "20px"], [1, "titular"], [1, "titular", "quitar1300", 2, "font-size", "20px", "color", "rgb(255, 255, 255)", "line-height", "30px", "font-weight", "200", "margin-top", "0px"], [1, "col-sm-5", "col-md-5", "col-lg-5", "col-xl-5", "col-xxl-5", "div-img-publi", 2, "margin-left", "-20px"], ["href", "https://www.culturademontania.org.ar/Suscripcion-form/inscripcion-taller.html", "target", "_blank"], ["src", "../../../assets/cartel.png", "alt", "", "width", "100%", "height", "561px", 2, "margin-right", "-24px"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.imagen3);
    }
  },
  styles: [".titular[_ngcontent-%COMP%]{\r\n  margin-top:-5px; \r\n  text-shadow: 1px 1px 3px #000000; \r\n  margin-left:20px;\r\n  color:white;\r\n  text-align: left;\r\n  font-size: 33px;\r\n  padding-right: 15px;\r\n \r\n  \r\n  font-weight: 800;\r\n  line-height: 40px;\r\n  min-height: 100% ;\r\n }\r\n\r\n .marco[_ngcontent-%COMP%]{padding-right: 0px; margin-right: 0px; margin-left: -10px;}\r\n\r\n .div-img-publi[_ngcontent-%COMP%]{margin: 0px;\r\n  display:block;\r\n  padding: 0px;\r\n  \r\n  margin-top: -10px;\r\n  \r\n}\r\n\r\n .titular2[_ngcontent-%COMP%]{\r\n  margin-top:-5px; \r\n  text-shadow: 1px 1px 3px #000000; \r\n  margin-left:20px;\r\n  color:white;\r\n  text-align: left;\r\n  font-size: 30px;\r\n  \r\n  padding-right: 10px;\r\n  \r\n     \r\n  font-weight: 800;\r\n  line-height: 22px;\r\n  min-height: 100% ;\r\n }\r\n .categoria[_ngcontent-%COMP%]{\r\n   text-align: left; \r\n   color:orange;\r\n   margin-left: 20px;\r\n   margin-top:14px;\r\n   text-shadow: 5px 5px 20px black;\r\n   \r\n   \r\n }\r\n\r\n .imagenPortada[_ngcontent-%COMP%]{\r\n     padding:20px; \r\n     padding-left:10px; \r\n     \r\n     object-fit: cover;\r\n }\r\n\r\n\r\n .imgLogo[_ngcontent-%COMP%]{\r\n  filter:drop-shadow(2px 4px 4px rgb(0, 0, 0));\r\n     position:absolute; \r\n     top:-15px; \r\n     left:3%; \r\n\r\n\r\n\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{       width:250px;\r\n  }\r\n\r\n  \r\n .h1Logo[_ngcontent-%COMP%]{\r\n  font-size: 21px; \r\n  margin-left: 2px;\r\n  margin-top:269px;\r\n  color:white; \r\n  text-shadow: 1px 1px 3px black;\r\n  background-color: orange;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  padding-left:10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n.lugarLogo[_ngcontent-%COMP%]{\r\n  position:absolute; \r\n  top:-115px;\r\n  left:3%; \r\n  }\r\n\r\n  .fade-in-image[_ngcontent-%COMP%] {\r\n      animation: _ngcontent-%COMP%_fadeIn 2s;\r\n      -webkit-animation: _ngcontent-%COMP%_fadeIn 2s;\r\n      -moz-animation: fadeIn 2s;\r\n      -o-animation: fadeIn 2s;\r\n      -ms-animation: fadeIn 2s;\r\n    }\r\n    @keyframes _ngcontent-%COMP%_fadeIn {\r\n      0% {opacity:0;}\r\n      100% {opacity:1;}\r\n    }\r\n\r\n\r\n  \r\n  .cuadroTitulo[_ngcontent-%COMP%]{\r\n      position:absolute;\r\n      min-height: 167px;\r\n      top: 384px;\r\n\r\n      left:10px;\r\n      right:20px;\r\n      \r\n      background-color: rgba(0, 0, 0, 0.603);  \r\n      \r\n  }\r\n  @media (max-width:1300px){\r\n\r\n}\r\n\r\n@media (max-width:1000px){\r\n  .quitar1300[_ngcontent-%COMP%]{display: none;}\r\n  .cuadroTitulo[_ngcontent-%COMP%]{\r\n    top: 383px;   \r\n \r\n    \r\n}\r\n}\r\n\r\n@media (max-width:990px){\r\n  .div-img-publi[_ngcontent-%COMP%]{display:none}\r\n\r\n\r\n                  \r\n  }\r\n\r\n\r\n\r\n  \r\n\r\n  @media (max-width:600px){\r\n    .titular2[_ngcontent-%COMP%]{font-size: 25px; line-height: 28px; margin-left:10px}\r\n    .quitar[_ngcontent-%COMP%]{display:none}\r\n    .categoria[_ngcontent-%COMP%]{font-size:12px; margin-left:10px}\r\n    .marco[_ngcontent-%COMP%]{margin-left:-22px}\r\n    .logo[_ngcontent-%COMP%]{width: 160px; margin-top:20px;\r\n    margin-left:-5x;\r\n    }\r\n\r\n    @media (max-width:576px){\r\n      .quitarPubli[_ngcontent-%COMP%]{\r\n        display:none\r\n      }      \r\n                    \r\n    }\r\n    \r\n\r\n    .cuadroTitulo[_ngcontent-%COMP%]{\r\n      position:absolute;\r\n      min-height: 123px;\r\n      top:248px;\r\n\r\n      left:0px;\r\n      right:0px;\r\n      \r\n      background-color: rgba(0, 0, 0, 0.603);  \r\n    }\r\n\r\n    .titular[_ngcontent-%COMP%]{\r\n      \r\n      font-size: 29px;\r\n      line-height: 30px;\r\n      margin-left:10px;\r\n    }\r\n   \r\n    \r\n\r\n\r\n   \r\n .imagenPortada[_ngcontent-%COMP%]{\r\n  padding: 0px!important;\r\n  width: 100%;\r\n  margin-top: 0px!important;\r\n  margin-bottom: -20px!;\r\n  \r\n  height: 370px;\r\n  \r\n}\r\n\r\n\r\n  }\r\n\r\n  \r\n@media (max-width:400px){\r\n  .titular[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }      \r\n                \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYS1wb3J0YWRhL2EtcG9ydGFkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQiw2RUFBNkU7RUFDN0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0NBRUEsT0FBTyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQzs7Q0FFakUsZUFBZSxXQUFXO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQjt3QkFDc0I7QUFDeEI7O0NBRUM7RUFDQyxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsbUJBQW1COztLQUVoQiw2RUFBNkU7RUFDaEYsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZiwrQkFBK0I7OztDQUdqQzs7Q0FFQTtLQUNJLFlBQVk7S0FDWixpQkFBaUI7O0tBRWpCLGlCQUFpQjtDQUNyQjs7O0NBR0E7RUFDQyw0Q0FBNEM7S0FDekMsaUJBQWlCO0tBQ2pCLFNBQVM7S0FDVCxPQUFPOzs7O0VBSVY7O0VBRUEsYUFBYSxXQUFXO0VBQ3hCOztFQUVBLHFCQUFxQjtDQUN0QjtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLE9BQU87RUFDUDs7RUFFQTtNQUNJLG9CQUFvQjtNQUNwQiw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLHVCQUF1QjtNQUN2Qix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLElBQUksU0FBUyxDQUFDO01BQ2QsTUFBTSxTQUFTLENBQUM7SUFDbEI7OztFQXVCRixpQ0FBaUM7RUFDakM7TUFDSSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFVBQVU7O01BRVYsU0FBUztNQUNULFVBQVU7O01BRVYsc0NBQXNDOztFQUUxQztFQUNBOztBQUVGOztBQUVBO0VBQ0UsWUFBWSxhQUFhLENBQUM7RUFDMUI7SUFDRSxVQUFVOzs7QUFHZDtBQUNBOztBQUVBO0VBQ0UsZUFBZSxZQUFZOzs7O0VBSTNCOzs7Ozs7RUFNQTtJQUNFLFVBQVUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQjtJQUM5RCxRQUFRLFlBQVk7SUFDcEIsV0FBVyxjQUFjLEVBQUUsZ0JBQWdCO0lBQzNDLE9BQU8saUJBQWlCO0lBQ3hCLE1BQU0sWUFBWSxFQUFFLGVBQWU7SUFDbkMsZUFBZTtJQUNmOztJQUVBO01BQ0U7UUFDRTtNQUNGOztJQUVGOzs7SUFHQTtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsU0FBUzs7TUFFVCxRQUFRO01BQ1IsU0FBUzs7TUFFVCxzQ0FBc0M7SUFDeEM7O0lBRUE7O01BRUUsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7O0lBRUE7Ozs7TUFJRTs7OztDQUlMO0VBQ0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixhQUFhOztBQUVmOzs7RUFHRTs7O0FBR0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxhcntcclxuICBtYXJnaW4tdG9wOi01cHg7IFxyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwOyBcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiBcclxuICAvKiBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCUgO1xyXG4gfVxyXG5cclxuIC5tYXJjb3twYWRkaW5nLXJpZ2h0OiAwcHg7IG1hcmdpbi1yaWdodDogMHB4OyBtYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuIC5kaXYtaW1nLXB1Ymxpe21hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAtMjJweDsgKi9cclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDsgKi9cclxufVxyXG5cclxuIC50aXR1bGFyMntcclxuICBtYXJnaW4tdG9wOi01cHg7IFxyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwOyBcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgXHJcbiAgICAgLyogZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlIDtcclxuIH1cclxuIC5jYXRlZ29yaWF7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICBjb2xvcjpvcmFuZ2U7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBtYXJnaW4tdG9wOjE0cHg7XHJcbiAgIHRleHQtc2hhZG93OiA1cHggNXB4IDIwcHggYmxhY2s7XHJcbiAgIFxyXG4gICBcclxuIH1cclxuXHJcbiAuaW1hZ2VuUG9ydGFkYXtcclxuICAgICBwYWRkaW5nOjIwcHg7IFxyXG4gICAgIHBhZGRpbmctbGVmdDoxMHB4OyBcclxuICAgICBcclxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuIH1cclxuXHJcblxyXG4gLmltZ0xvZ297XHJcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDJweCA0cHggNHB4IHJnYigwLCAwLCAwKSk7XHJcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gICAgIHRvcDotMTVweDsgXHJcbiAgICAgbGVmdDozJTsgXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICAubG9nb3sgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBFc3RpbG9zIGRlbCBsb2dvICovXHJcbiAuaDFMb2dve1xyXG4gIGZvbnQtc2l6ZTogMjFweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tdG9wOjI2OXB4O1xyXG4gIGNvbG9yOndoaXRlOyBcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogcG9zaWNpb24gZGVsIGxvZ28gcG5nICovXHJcbi5sdWdhckxvZ297XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gIHRvcDotMTE1cHg7XHJcbiAgbGVmdDozJTsgXHJcbiAgfVxyXG5cclxuICAuZmFkZS1pbi1pbWFnZSB7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAtby1hbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAwJSB7b3BhY2l0eTowO31cclxuICAgICAgMTAwJSB7b3BhY2l0eToxO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtvcGFjaXR5OjA7fVxyXG4gICAgICAxMDAlIHtvcGFjaXR5OjE7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge29wYWNpdHk6MDt9XHJcbiAgICAgIDEwMCUge29wYWNpdHk6MTt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge29wYWNpdHk6MDt9XHJcbiAgICAgIDEwMCUge29wYWNpdHk6MTt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtvcGFjaXR5OjA7fVxyXG4gICAgICAxMDAlIHtvcGFjaXR5OjE7fVxyXG4gICAgfVxyXG5cclxuXHJcbiAgLyogUmVjdWFkcm8gbmVncm8gZGUgbGEgcG9ydGFkYSAqL1xyXG4gIC5jdWFkcm9UaXR1bG97XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNjdweDtcclxuICAgICAgdG9wOiAzODRweDtcclxuXHJcbiAgICAgIGxlZnQ6MTBweDtcclxuICAgICAgcmlnaHQ6MjBweDtcclxuICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MDMpOyAgXHJcbiAgICAgIFxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpe1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAwMHB4KXtcclxuICAucXVpdGFyMTMwMHtkaXNwbGF5OiBub25lO31cclxuICAuY3VhZHJvVGl0dWxve1xyXG4gICAgdG9wOiAzODNweDsgICBcclxuIFxyXG4gICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkwcHgpe1xyXG4gIC5kaXYtaW1nLXB1Ymxpe2Rpc3BsYXk6bm9uZX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC50aXR1bGFyMntmb250LXNpemU6IDI1cHg7IGxpbmUtaGVpZ2h0OiAyOHB4OyBtYXJnaW4tbGVmdDoxMHB4fVxyXG4gICAgLnF1aXRhcntkaXNwbGF5Om5vbmV9XHJcbiAgICAuY2F0ZWdvcmlhe2ZvbnQtc2l6ZToxMnB4OyBtYXJnaW4tbGVmdDoxMHB4fVxyXG4gICAgLm1hcmNve21hcmdpbi1sZWZ0Oi0yMnB4fVxyXG4gICAgLmxvZ297d2lkdGg6IDE2MHB4OyBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDotNXg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAucXVpdGFyUHVibGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgIH0gICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5jdWFkcm9UaXR1bG97XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMjNweDtcclxuICAgICAgdG9wOjI0OHB4O1xyXG5cclxuICAgICAgbGVmdDowcHg7XHJcbiAgICAgIHJpZ2h0OjBweDtcclxuICAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MDMpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRpdHVsYXJ7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8qIC5pbWdMb2dve1xyXG4gICAgICB0b3A6LTE1cHg7IFxyXG4gICAgICBsZWZ0OjIlOyBcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgIH0gKi9cclxuXHJcblxyXG4gICBcclxuIC5pbWFnZW5Qb3J0YWRhe1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjBweCE7XHJcbiAgXHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICBcclxufVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBcclxuQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpe1xyXG4gIC50aXR1bGFye1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH0gICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 73335:
/*!************************************************************************************!*\
  !*** ./src/app/componentes/articulo-relacionado/articulo-relacionado.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticuloRelacionadoComponent": () => (/* binding */ ArticuloRelacionadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../servicios/crud.service */ 39983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);




const _c0 = function (a0) {
  return {
    "correccionTitulo": a0
  };
};
function ArticuloRelacionadoComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ART\u00CDCULOS RELACIONADOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, !ctx_r0.estado));
  }
}
function ArticuloRelacionadoComponent_div_5_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r7.nota.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_5_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.nota[0].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_5_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.cut(ctx_r9.nota == null ? null : ctx_r9.nota.resultadoCategoria));
  }
}
function ArticuloRelacionadoComponent_div_5_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nota[0].categoria);
  }
}
function ArticuloRelacionadoComponent_div_5_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.nota == null ? null : ctx_r11.nota.art1);
  }
}
function ArticuloRelacionadoComponent_div_5_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.nota[0].titulo);
  }
}
const _c1 = function (a0, a1) {
  return {
    "col-sm-6 col-sm-6 col-md-12 col-lg-12 col-xl-12\tcol-xxl-12": a0,
    "col-12": a1
  };
};
function ArticuloRelacionadoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_5_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_5_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_5_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_5_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_5_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_5_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r1.estado, !ctx_r1.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota == null ? null : ctx_r1.nota.resultadoImagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota[0] == null ? null : ctx_r1.nota[0]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota[0] == null ? null : ctx_r1.nota[0].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota == null ? null : ctx_r1.nota.resultadoCategoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota[0] == null ? null : ctx_r1.nota[0].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota.resultadoID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota == null ? null : ctx_r1.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r1.nota[0] == null ? null : ctx_r1.nota[0]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota[0] == null ? null : ctx_r1.nota[0].titulo);
  }
}
function ArticuloRelacionadoComponent_div_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r13.nota.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_6_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r14.nota[1].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_6_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.cut(ctx_r15.nota == null ? null : ctx_r15.nota.resultadoCategoria2));
  }
}
function ArticuloRelacionadoComponent_div_6_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.nota[0].categoria);
  }
}
function ArticuloRelacionadoComponent_div_6_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.nota == null ? null : ctx_r17.nota.art2);
  }
}
function ArticuloRelacionadoComponent_div_6_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.nota[1].titulo);
  }
}
function ArticuloRelacionadoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_6_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_6_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_6_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_6_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_6_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_6_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r2.estado, !ctx_r2.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.resultadoImagen2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota[1] == null ? null : ctx_r2.nota[1]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[1] == null ? null : ctx_r2.nota[1].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.resultadoCategoria2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[1] == null ? null : ctx_r2.nota[1].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota.resultadoID2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota == null ? null : ctx_r2.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r2.nota[1] == null ? null : ctx_r2.nota[1]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.nota[1] == null ? null : ctx_r2.nota[1].titulo);
  }
}
function ArticuloRelacionadoComponent_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r19.nota.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r20.nota[2].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_7_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.cut(ctx_r21.nota == null ? null : ctx_r21.nota.resultadoCategoria3));
  }
}
function ArticuloRelacionadoComponent_div_7_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.nota[2].categoria);
  }
}
function ArticuloRelacionadoComponent_div_7_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.nota == null ? null : ctx_r23.nota.art3);
  }
}
function ArticuloRelacionadoComponent_div_7_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.nota[2].titulo);
  }
}
function ArticuloRelacionadoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_7_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_7_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_7_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_7_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_7_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_7_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r3.estado, !ctx_r3.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.resultadoImagen3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota[2] == null ? null : ctx_r3.nota[2]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[2] == null ? null : ctx_r3.nota[2].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.resultadoCategoria3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[2] == null ? null : ctx_r3.nota[2].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota.resultadoID3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota == null ? null : ctx_r3.nota.art1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r3.nota[2] == null ? null : ctx_r3.nota[2]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.nota[2] == null ? null : ctx_r3.nota[2].titulo);
  }
}
function ArticuloRelacionadoComponent_div_8_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r25.nota.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_8_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r26.nota[3].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_8_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.cut(ctx_r27.nota == null ? null : ctx_r27.nota.resultadoCategoria3));
  }
}
function ArticuloRelacionadoComponent_div_8_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.nota[3].categoria);
  }
}
function ArticuloRelacionadoComponent_div_8_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.nota == null ? null : ctx_r29.nota.art4);
  }
}
function ArticuloRelacionadoComponent_div_8_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.nota[3].titulo);
  }
}
function ArticuloRelacionadoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_8_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_8_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_8_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_8_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_8_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_8_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r4.estado, !ctx_r4.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoImagen4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota[3] == null ? null : ctx_r4.nota[3]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[3] == null ? null : ctx_r4.nota[3].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.resultadoCategoria4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[3] == null ? null : ctx_r4.nota[3].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota.resultadoID4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota == null ? null : ctx_r4.nota.art4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r4.nota[3] == null ? null : ctx_r4.nota[3]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.nota[3] == null ? null : ctx_r4.nota[3].titulo);
  }
}
function ArticuloRelacionadoComponent_div_9_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r31.nota.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_9_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r32.nota[4].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_9_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.cut(ctx_r33.nota == null ? null : ctx_r33.nota.resultadoCategoria5));
  }
}
function ArticuloRelacionadoComponent_div_9_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.nota[4].categoria);
  }
}
function ArticuloRelacionadoComponent_div_9_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.nota == null ? null : ctx_r35.nota.art5);
  }
}
function ArticuloRelacionadoComponent_div_9_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.nota[4].titulo);
  }
}
function ArticuloRelacionadoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_9_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_9_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_9_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_9_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_9_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_9_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r5.estado, !ctx_r5.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota == null ? null : ctx_r5.nota.resultadoImagen5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota[4] == null ? null : ctx_r5.nota[4]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota[4] == null ? null : ctx_r5.nota[4].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota == null ? null : ctx_r5.nota.resultadoCategoria5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota[4] == null ? null : ctx_r5.nota[4].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota.resultadoID5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota == null ? null : ctx_r5.nota.art5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r5.nota[4] == null ? null : ctx_r5.nota[4]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.nota[4] == null ? null : ctx_r5.nota[4].titulo);
  }
}
function ArticuloRelacionadoComponent_div_10_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r37.nota.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_10_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r38.nota[5].imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ArticuloRelacionadoComponent_div_10_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.cut(ctx_r39.nota == null ? null : ctx_r39.nota.resultadoCategoria6));
  }
}
function ArticuloRelacionadoComponent_div_10_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 12)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.nota[5].categoria);
  }
}
function ArticuloRelacionadoComponent_div_10_h1_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.nota == null ? null : ctx_r41.nota.art6);
  }
}
function ArticuloRelacionadoComponent_div_10_h1_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.nota[5].titulo);
  }
}
function ArticuloRelacionadoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_div_10_img_2_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticuloRelacionadoComponent_div_10_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_10_h6_6_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_10_h6_7_Template, 3, 1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_10_h1_9_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloRelacionadoComponent_div_10_h1_11_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx_r6.estado, !ctx_r6.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoImagen6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota[5] == null ? null : ctx_r6.nota[5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[5] == null ? null : ctx_r6.nota[5].imagen1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.resultadoCategoria6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[5] == null ? null : ctx_r6.nota[5].categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota.resultadoID6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota == null ? null : ctx_r6.nota.art6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulo/", ctx_r6.nota[5] == null ? null : ctx_r6.nota[5]._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nota[5] == null ? null : ctx_r6.nota[5].titulo);
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
  decls: 11,
  vars: 7,
  consts: [[2, "margin-left", "10px", "margin-right", "10px"], ["class", "titulo", "style", "margin-left:0px;margin-bottom: 0px; color:orange; border-left: 4px solid orange;padding-left: 7px;", 3, "ngClass", 4, "ngIf"], [1, "row"], ["class", "card col-4", 3, "ngClass", 4, "ngIf"], [1, "titulo", 2, "margin-left", "0px", "margin-bottom", "0px", "color", "orange", "border-left", "4px solid orange", "padding-left", "7px", 3, "ngClass"], [1, "card", "col-4", 3, "ngClass"], ["target", "_blank", 3, "routerLink"], ["class", "card-img-top sombra", "alt", "", "height", "200px", "style", "object-fit: cover;", 3, "src", 4, "ngIf"], [1, "card-body"], ["class", "categoria", 4, "ngIf"], ["class", "card-title titulo", 4, "ngIf"], ["alt", "", "height", "200px", 1, "card-img-top", "sombra", 2, "object-fit", "cover", 3, "src"], [1, "categoria"], [1, "card-title", "titulo"]],
  template: function ArticuloRelacionadoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloRelacionadoComponent_h1_2_Template, 2, 3, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArticuloRelacionadoComponent_div_5_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArticuloRelacionadoComponent_div_6_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticuloRelacionadoComponent_div_7_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ArticuloRelacionadoComponent_div_8_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticuloRelacionadoComponent_div_9_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ArticuloRelacionadoComponent_div_10_Template, 12, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art1 || (ctx.nota[0] == null ? null : ctx.nota[0].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art2 || (ctx.nota[1] == null ? null : ctx.nota[1].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art3 || (ctx.nota[2] == null ? null : ctx.nota[2].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art4 || (ctx.nota[3] == null ? null : ctx.nota[3].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art5 || (ctx.nota[4] == null ? null : ctx.nota[4].titulo));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.art6 || (ctx.nota[5] == null ? null : ctx.nota[5].titulo));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Staatliches&display=swap);@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@574&display=swap);.categoria[_ngcontent-%COMP%]{ \r\n    margin-left:-15px;\r\n    margin-top:-10px;\r\n    color:orange;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    margin-bottom: 15px;\r\n    \r\n  \r\n  }\r\n \r\n.titulo[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 700;\r\n  line-height: 25px; \r\n  letter-spacing: -1px;\r\n  margin-top:-10px;\r\n  margin-left:-15px;\r\n  color:rgb(68, 68, 68);\r\n  font-size: 25px;\r\n}\r\na[_ngcontent-%COMP%]{  color:rgb(68, 68, 68); text-decoration: none;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:-10px; font-size: 18px; font-family: 'Roboto', sans-serif; line-height: 26px; font-weight: 600;}\r\n\r\n   \r\n.card[_ngcontent-%COMP%]{border:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJ0aWN1bG8tcmVsYWNpb25hZG8vYXJ0aWN1bG8tcmVsYWNpb25hZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1COzs7RUFHckI7O0FBRUY7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBLElBQUkscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7QUFDakQsV0FBVyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUNBQWlDLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7OztBQUdySCxNQUFNLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZmFtaWx5PVN0YWF0bGljaGVzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDU3NCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jYXRlZ29yaWF7IFxyXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiBcclxuLnRpdHVsb3tcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgbWFyZ2luLXRvcDotMTBweDtcclxuICBtYXJnaW4tbGVmdDotMTVweDtcclxuICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmF7ICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbi5zdWJ0aXR1bG97bWFyZ2luLXRvcDotMTBweDsgZm9udC1zaXplOiAxOHB4OyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IGxpbmUtaGVpZ2h0OiAyNnB4OyBmb250LXdlaWdodDogNjAwO31cclxuXHJcbiAgIFxyXG4uY2FyZHtib3JkZXI6bm9uZX1cclxuIFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 63622:
/*!************************************************************!*\
  !*** ./src/app/componentes/articulo/articulo.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticuloComponent": () => (/* binding */ ArticuloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/crud.service */ 39983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lateral-relacionado/lateral-relacionado.component */ 36793);
/* harmony import */ var _articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articulo-relacionado/articulo-relacionado.component */ 73335);






function ArticuloComponent_hr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function ArticuloComponent_hr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function ArticuloComponent_hr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function ArticuloComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-articulo-relacionado", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.nota[0]);
  }
}
class ArticuloComponent {
  constructor(ruta, crudService, location) {
    this.ruta = ruta;
    this.crudService = crudService;
    this.location = location;
    this.auxContador = 0;
  }
  ngOnInit() {
    // var height = document.getElementById("head").offsetHeight;
    // document.getElementById("content").style.height = height  + 'px';
    // console.log(height)
    // window.scroll(0,0)
    this.crudService.getArticulos2().subscribe(res => {
      this.dataRelacionado = this.randomNoRepeat(res);
      console.log(this.dataRelacionado);
    });
    this.ruta.data.subscribe(data => {
      this.nota = Object.entries(data).map(i => i[1]);
      this.auxContador = this.nota[0].vistas;
      console.log(this.nota[0]);
      // this.sumarContador()
      this.pedirArticulos();
    });
  }
  pedirArticulos() {
    // const resultPost =  [];
    this.crudService.getArticulos2().subscribe(res => {
      this.articulos = res; // guardo resultados de la peticion en variable productos del este componente.
      this.articulos2 = this.articulos;
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
  randomNoRepeat(arr) {
    let newArr = [];
    while (arr.length > 0) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomElement = arr[randomIndex];
      newArr.push(randomElement);
      arr.splice(randomIndex, 1);
    }
    return newArr;
  }
  subir() {
    // window.scroll(0,0)
  }
  alerta() {
    alert('en contrucción');
  }
  saltos2(data) {
    var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
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
    aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"');
    aux2 = aux2.split('<strong>').join('<strong style="font-size:16px;line-height: 0px!important; ">');
    aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/');
    aux2 = aux2.split(' ,').join(', ');
    aux2 = aux2.split(' .').join('. ');
    aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="');
    aux2 = aux2.split('<h4>').join('<h4 style="text-align:center!important; font-size:15px; margin-top:-20px; margin-bottom:30px;">');
    aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    aux2 = aux2.split('<a ').join('<a target="_blank"');
    aux2 = aux2.split('</a></p><p><strong>').join('</a></p><p style="text-align:center"><strong>');
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
  sumarContador() {
    //incrementa el contador
    this.crudService.unArticulo.contadorComentarios = this.nota[0]?.contadorComentarios;
    this.crudService.unArticulo.correos = this.nota[0]?.correos;
    this.crudService.unArticulo.comentarios = this.nota[0]?.comentarios;
    this.crudService.unArticulo.vistas = this.auxContador + 1;
    this.crudService.unArticulo.imagen1 = this.nota[0]?.imagen1;
    this.crudService.unArticulo.imagen2 = this.nota[0]?.imagen2;
    this.crudService.unArticulo.imagen3 = this.nota[0]?.imagen3;
    this.crudService.unArticulo.categoria = this.nota[0]?.categoria;
    this.crudService.unArticulo.fecha = this.nota[0]?.fecha;
    this.crudService.unArticulo.fechaMod = this.nota[0]?.fechaMod;
    this.crudService.unArticulo.autor = this.nota[0]?.autor;
    this.crudService.unArticulo.fotografia = this.nota[0]?.fotografia;
    this.crudService.unArticulo.edicionFotografia = this.nota[0]?.edicionFotografia;
    this.crudService.unArticulo.nota = this.nota[0]?.nota;
    this.crudService.unArticulo._id = this.nota[0]?._id;
    this.crudService.unArticulo.categoria = this.nota[0]?.categoria;
    this.crudService.unArticulo.titulo = this.nota[0]?.titulo;
    this.crudService.unArticulo.tituloAlt = this.nota[0]?.tituloAlt;
    this.crudService.unArticulo.subtitulo = this.nota[0]?.subtitulo;
    this.crudService.unArticulo.posicion = this.nota[0]?.posicion;
    this.crudService.unArticulo.art1 = this.nota[0]?.art1;
    this.crudService.unArticulo.art2 = this.nota[0]?.art2;
    this.crudService.unArticulo.art3 = this.nota[0]?.art3;
    this.crudService.unArticulo.art4 = this.nota[0]?.art4;
    this.crudService.unArticulo.art5 = this.nota[0]?.art5;
    this.crudService.unArticulo.art6 = this.nota[0]?.art6;
    this.crudService.unArticulo.art7 = this.nota[0]?.art7;
    this.crudService.unArticulo.art8 = this.nota[0]?.art8;
    this.crudService.unArticulo.art9 = this.nota[0]?.art9;
    this.crudService.unArticulo.art10 = this.nota[0]?.art10;
    this.crudService.unArticulo.art11 = this.nota[0]?.art11;
    this.crudService.unArticulo.art12 = this.nota[0]?.art12;
    this.crudService.unArticulo.fecha = this.nota[0]?.fecha;
    this.crudService.unArticulo.resultadoCategoria = this.nota[0]?.resultadoCategoria;
    this.crudService.unArticulo.resultadoCategoria2 = this.nota[0]?.resultadoCategoria2;
    this.crudService.unArticulo.resultadoCategoria3 = this.nota[0]?.resultadoCategoria3;
    this.crudService.unArticulo.resultadoCategoria4 = this.nota[0]?.resultadoCategoria4;
    this.crudService.unArticulo.resultadoCategoria5 = this.nota[0]?.resultadoCategoria5;
    this.crudService.unArticulo.resultadoCategoria6 = this.nota[0]?.resultadoCategoria6;
    this.crudService.unArticulo.resultadoCategoria7 = this.nota[0]?.resultadoCategoria7;
    this.crudService.unArticulo.resultadoCategoria8 = this.nota[0]?.resultadoCategoria8;
    this.crudService.unArticulo.resultadoCategoria9 = this.nota[0]?.resultadoCategoria9;
    this.crudService.unArticulo.resultadoCategoria10 = this.nota[0]?.resultadoCategoria10;
    this.crudService.unArticulo.resultadoCategoria11 = this.nota[0]?.resultadoCategoria11;
    this.crudService.unArticulo.resultadoCategoria12 = this.nota[0]?.resultadoCategoria12;
    this.crudService.unArticulo.resultadoImagen = this.nota[0]?.resultadoImagen;
    this.crudService.unArticulo.resultadoImagen2 = this.nota[0]?.resultadoImagen2;
    this.crudService.unArticulo.resultadoImagen3 = this.nota[0]?.resultadoImagen3;
    this.crudService.unArticulo.resultadoImagen4 = this.nota[0]?.resultadoImagen4;
    this.crudService.unArticulo.resultadoImagen5 = this.nota[0]?.resultadoImagen5;
    this.crudService.unArticulo.resultadoImagen6 = this.nota[0]?.resultadoImagen6;
    this.crudService.unArticulo.resultadoImagen7 = this.nota[0]?.resultadoImagen7;
    this.crudService.unArticulo.resultadoImagen8 = this.nota[0]?.resultadoImagen8;
    this.crudService.unArticulo.resultadoImagen9 = this.nota[0]?.resultadoImagen9;
    this.crudService.unArticulo.resultadoImagen10 = this.nota[0]?.resultadoImagen10;
    this.crudService.unArticulo.resultadoImagen11 = this.nota[0]?.resultadoImagen11;
    this.crudService.unArticulo.resultadoImagen12 = this.nota[0]?.resultadoImagen12;
    this.crudService.unArticulo.resultadoID = this.nota[0]?.resultadoID;
    this.crudService.unArticulo.resultadoID2 = this.nota[0]?.resultadoID2;
    this.crudService.unArticulo.resultadoID3 = this.nota[0]?.resultadoID3;
    this.crudService.unArticulo.resultadoID4 = this.nota[0]?.resultadoID4;
    this.crudService.unArticulo.resultadoID5 = this.nota[0]?.resultadoID5;
    this.crudService.unArticulo.resultadoID6 = this.nota[0]?.resultadoID6;
    this.crudService.unArticulo.resultadoID7 = this.nota[0]?.resultadoID7;
    this.crudService.unArticulo.resultadoID8 = this.nota[0]?.resultadoID8;
    this.crudService.unArticulo.resultadoID9 = this.nota[0]?.resultadoID9;
    this.crudService.unArticulo.resultadoID10 = this.nota[0]?.resultadoID10;
    this.crudService.unArticulo.resultadoID11 = this.nota[0]?.resultadoID11;
    this.crudService.unArticulo.resultadoID12 = this.nota[0]?.resultadoID12;
    // this.crudService.unProducto.fecha = String(this.fachaPublicacion)
    this.crudService.modificarArticulo(this.crudService.unArticulo).subscribe(res => {
      console.log(res);
    });
  }
  ngOnDestroy() {}
}
ArticuloComponent.ɵfac = function ArticuloComponent_Factory(t) {
  return new (t || ArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location));
};
ArticuloComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ArticuloComponent,
  selectors: [["app-articulo"]],
  decls: 75,
  vars: 9,
  consts: [["id", "head", 1, "cuadroTotal"], [1, "row", "colorFondo", "margenMobile", 2, "margin-left", "-1px", "margin-right", "-1px", "margin-top", "-24px"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", 2, "margin-bottom", "-9px"], [1, "mar"], [1, "categoria"], [1, "titulo"], [1, "subtitulo"], [2, "margin-left", "10px", "margin-right", "10px", "margin-top", "-20px"], [1, "nota", 3, "innerHTML"], [1, "btn", "btn-dark", 2, "border-radius", "100px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up-circle-fill"], ["d", "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"], [1, "quitar600", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", 2, "background-color", "rgb(255, 255, 255)"], [2, "margin-top", "10px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/suscripcion.html", "target", "_blank"], ["src", "../../../assets/banner Noticias.png", "width", "100%", "alt", "", 2, "margin-bottom", "10px"], [4, "ngIf"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-equipo.html", "target", "_blank"], ["src", "../../../assets/participa.jpg", "width", "100%", "alt", "", 2, "margin-top", "10px", "object-fit", "cover"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-entrenamiento.html", "target", "_blank"], ["src", "../../../assets/otros.png", "width", "100%", "height", "100%", "alt", "", 2, "margin-top", "20px", "object-fit", "cover"], [3, "data"], ["id", "content"], [1, "quitar600", 2, "background-color", "white", "margin-top", "20px"], [2, "color", "white", "margin-left", "-10px", "margin-right", "-10px", "padding-left", "15px", "margin-top", "20px", "background-color", "orange"], [2, "margin-left", "-10px", "margin-right", "-10px"], [2, "background-color", "white", "/* height", "100%\n           \n           margin-left:0px", "margin-top", "-70px\n           /* margin-bottom: -30px", "*/\n           background-repeat", "no-repeat", "background-size", "100%", "background-position", "bottom", "background-image", "url('../../../assets/articulotFooter.png')"], [1, "flex-container", "quitar600", 2, "text-align", "center", "margin-top", "-100px"], [1, "flex-items"], [2, "text-align", "left"], ["src", "../../../assets/LogoCCAM_Entero.png", "alt", "", 1, "logoCCAMFooter"], [1, "flex-items;", "quitar2", 2, "margin-top", "276px", "min-width", "450px"], [2, "text-align", "left", "margin-left", "10px"], ["href", "mailto:info@culturademontania.org.ar", 2, "color", "orange"], [2, "color", "white", "font-size", "18px", "color", "orange"], [2, "color", "white", "font-size", "18px", "margin-top", "-20px", "color", "orange"], ["href", "https://www.instagram.com/ccam_arg/", "target", "_blank", 2, "color", "orange"], [2, "color", "white", "font-size", "18px", "margin-top", "-22px", "color", "orange"], ["href", "https://www.facebook.com/ccamontania/", "target", "_blank", 2, "color", "orange"], [1, "flex-items", 2, "align-text", "left", "margin-top", "370px"], ["src", "../../../assets/logonm.png", "alt", "", 2, "width", "150px", "margin-top", "-124px", "margin-left", "-40px"], [1, "flex-items", 2, "margin-top", "284px"], [2, "color", "white", "font-size", "20px"], [2, "color", "white", "font-size", "20px", "margin-top", "-21px"], [1, "poner600"], [2, "border-bottom", "20px solid rgb(51, 51, 51)", "margin-top", "-25px"]],
  template: function ArticuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div")(5, "div", 3)(6, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticuloComponent_Template_button_click_17_listener() {
        return ctx.subir();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Subir ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ArticuloComponent_hr_25_Template, 1, 0, "hr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ArticuloComponent_hr_28_Template, 1, 0, "hr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div")(30, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "app-lateral-relacionado", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ArticuloComponent_hr_33_Template, 1, 0, "hr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ArticuloComponent_div_36_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 23)(38, "div")(39, "h5", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "EDICIONES ANTERIORES");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 26)(43, "div", 27)(44, "div", 28)(45, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 31)(48, "div", 32)(49, "a", 33)(50, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Mail: info@culturademontania.org.ar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "WhatsApp: (+54-011) 15-3093-9814");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "a", 36)(55, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Instagram: @ccam_arg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "a", 38)(58, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "www.facebook.com/ccamontania ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 39)(61, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 41)(64, "div", 29)(65, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Cont\u00E1ctate y comenz\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "la aventura de integrarte");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "a la red cultural");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nota[0] == null ? null : ctx.nota[0].subtitulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.saltos2(ctx.nota[0] == null ? null : ctx.nota[0].nota), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nota);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nota);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.nota[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nota);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nota);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _lateral_relacionado_lateral_relacionado_component__WEBPACK_IMPORTED_MODULE_1__.LateralRelacionadoComponent, _articulo_relacionado_articulo_relacionado_component__WEBPACK_IMPORTED_MODULE_2__.ArticuloRelacionadoComponent],
  styles: [".poner600[_ngcontent-%COMP%]{display:none}\r\n \r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: normal;\r\n  align-items: normal;\r\n  align-content: normal;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cuadroTotal[_ngcontent-%COMP%]{\r\n  border-left: 20px solid rgb(51, 51, 51);border-right: 20px solid rgb(51, 51, 51);\r\n}\r\n\r\nnota[_ngcontent-%COMP%]{font-size:16px}\r\n.categoria[_ngcontent-%COMP%]{ \r\n    color:rgb(243, 178, 0);\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    margin-top: 30px;\r\n    text-transform: uppercase; \r\n    }\r\n\r\n   .poner600[_ngcontent-%COMP%]{display:none}\r\n    \r\n.titulo[_ngcontent-%COMP%]{font-size:35px; \r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 700;\r\n  line-height: 42px; \r\n  letter-spacing: -1px;\r\n  margin-top:0px;\r\n  color:rgb(68, 68, 68);\r\n  margin-bottom: 10px;\r\n  \r\n}\r\n\r\n .capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 60px;\r\n  float: left;\r\n  margin-top: 13px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 30px;\r\n  color:orange;\r\n\r\n}\r\n.mar[_ngcontent-%COMP%]{margin-left:10px; margin-right:10px}\r\n.subtitulo[_ngcontent-%COMP%]{\r\n   font-family: Georgia, 'Times New Roman', Times, serif; \r\n  font-weight: 600;\r\n  margin-top:0px;\r\n  font-size: 20px; \r\n  line-height: 30px;\r\n  color:rgb(68, 68, 68);\r\n    }\r\n\r\n  .borde[_ngcontent-%COMP%]{border-right: 20px solid rgba(160, 160, 160, 0) ;}\r\n\r\n.colorFondo[_ngcontent-%COMP%]{background-color:rgb(255, 255, 255); }\r\n\r\n.sticky[_ngcontent-%COMP%]{position: sticky; top:0}\r\n\r\n\r\n.image-style-side[_ngcontent-%COMP%]{\r\n  float:right;\r\n   padding:10px; \r\n  }\r\n.hrMargen[_ngcontent-%COMP%]{ opacity: 0.3;}\r\n    \r\n.clasePrincipal[_ngcontent-%COMP%]{\r\n     \r\n    justify-content: left;\r\n    margin-left:0px; \r\n    margin-top:-0px; \r\n  }\r\n\r\n.primerIcon[_ngcontent-%COMP%]{\r\n  display:flex; \r\n  align-items: flex-start; \r\n  margin-top:-5px; \r\n  margin-left:-10px; \r\n  margin-right: 5px\r\n}\r\n.poner600[_ngcontent-%COMP%]{display:none}\r\n.logoCCAMFooter[_ngcontent-%COMP%]{\r\n  width: 125px; margin-top: 268px;  margin-left: 125px; margin-right: 0px;\r\n}\r\n\r\n@media (max-width:520px)\r\n{\r\n.logoCCAMFooter[_ngcontent-%COMP%]{width: 100px; margin-top:19px;\r\nmargin-left:10px;\r\n}\r\n\r\n  .quitar2[_ngcontent-%COMP%]{display:none}}\r\n \r\n@media (max-width:520px)\r\n{\r\n  .quitar[_ngcontent-%COMP%]{display:none}\r\n}\r\n@media (max-width:800px)\r\n{\r\n\r\n  .mar[_ngcontent-%COMP%]{margin-left:0px; margin-right:0px}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n  .poner600[_ngcontent-%COMP%]{display:block}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{\r\n \r\n font-size: 18px; \r\n line-height: 25px;\r\n \r\n   }\r\n\r\n  .titulo[_ngcontent-%COMP%]{font-size:30px; \r\n        line-height: 35px; \r\n    \r\n  }\r\n.categoria[_ngcontent-%COMP%]{ \r\n \r\n  font-size: 12px;\r\n \r\n  }\r\n  .cuadroTotal[_ngcontent-%COMP%]{\r\n    border-left: 10px solid rgb(51, 51, 51);border-right: 10px solid rgb(51, 51, 51);\r\n  }\r\n  .margenMobile[_ngcontent-%COMP%]{\r\n   margin-right: 0px;\r\n    border:none;\r\n    padding-right: 0px;\r\n    margin-left:2px;\r\n    margin-top:-30px;\r\n}\r\n\r\n}\r\n\r\n\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 33%; } \r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:2666px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 25%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 25%; } \r\n}\r\n\r\n@media (max-width:2402px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 24%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 24%; } \r\n}\r\n\r\n@media (max-width:2200px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 20%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 20%; } \r\n}\r\n\r\n@media (max-width:2000px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 18%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 18%; } \r\n}\r\n\r\n@media (max-width:1800px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 15%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 15%; } \r\n}\r\n\r\n@media (max-width:1600px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 13%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 13%; } \r\n}\r\n\r\n@media (max-width:1400px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 8%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 8%; } \r\n}\r\n\r\n@media (max-width:1200px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 4%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 4%; } \r\n}\r\n\r\n\r\n@media (max-width:1000px)\r\n{.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 0%; } \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYXJ0aWN1bG8vYXJ0aWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0MsVUFBVSxZQUFZOztDQUV0QjtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx1Q0FBdUMsQ0FBQyx3Q0FBd0M7QUFDbEY7O0FBRUEsS0FBSyxjQUFjO0FBQ25CO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qjs7R0FFRCxVQUFVLFlBQVk7O0FBRXpCLFFBQVEsY0FBYztFQUNwQiw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7O0FBRXJCOztDQUVDOztFQUVDLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTs7QUFFZDtBQUNBLEtBQUssZ0JBQWdCLEVBQUUsaUJBQWlCO0FBQ3hDO0dBQ0cscURBQXFEO0VBQ3RELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7SUFDbkI7O0VBRUYsT0FBTyxnREFBZ0QsQ0FBQzs7QUFFMUQsWUFBWSxtQ0FBbUMsRUFBRTs7QUFFakQsUUFBUSxnQkFBZ0IsRUFBRSxLQUFLOzs7QUFHL0I7RUFDRSxXQUFXO0dBQ1YsWUFBWTtFQUNiO0FBQ0YsV0FBVyxZQUFZLENBQUM7O0FBRXhCOztJQUVJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7QUFFRjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtBQUNGO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0VBQ0UsWUFBWSxFQUFFLGlCQUFpQixHQUFHLGtCQUFrQixFQUFFLGlCQUFpQjtBQUN6RTs7QUFFQTs7QUFFQSxnQkFBZ0IsWUFBWSxFQUFFLGVBQWU7QUFDN0MsZ0JBQWdCO0FBQ2hCOztFQUVFLFNBQVMsWUFBWSxDQUFDOztBQUV4Qjs7RUFFRSxRQUFRLFlBQVk7QUFDdEI7QUFDQTs7O0VBR0UsS0FBSyxlQUFlLEVBQUUsZ0JBQWdCO0FBQ3hDLFdBQVcsWUFBWTtFQUNyQixVQUFVLGFBQWE7O0FBRXpCOztDQUVDLGVBQWU7Q0FDZixpQkFBaUI7O0dBRWY7O0VBRUQsUUFBUSxjQUFjO1FBQ2hCLGlCQUFpQjs7RUFFdkI7QUFDRjs7RUFFRSxlQUFlOztFQUVmO0VBQ0E7SUFDRSx1Q0FBdUMsQ0FBQyx3Q0FBd0M7RUFDbEY7RUFDQTtHQUNDLGlCQUFpQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7OztBQUdBLFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsU0FBUyxpQkFBaUIsRUFBRTs7Ozs7OztBQU81QjtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZ0JBQWdCLEVBQUU7QUFDN0IsU0FBUyxpQkFBaUIsRUFBRTtBQUM1Qjs7QUFFQTtDQUNDLFVBQVUsZUFBZSxFQUFFO0FBQzVCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDM0I7O0FBRUE7Q0FDQyxVQUFVLGVBQWUsRUFBRTtBQUM1QixTQUFTLGdCQUFnQixFQUFFO0FBQzNCOzs7QUFHQTtDQUNDLFVBQVUsZUFBZSxFQUFFO0FBQzVCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC5wb25lcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiBcclxuIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgyKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDMpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoNCkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jdWFkcm9Ub3RhbHtcclxuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCByZ2IoNTEsIDUxLCA1MSk7Ym9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxubm90YXtmb250LXNpemU6MTZweH1cclxuLmNhdGVnb3JpYXsgXHJcbiAgICBjb2xvcjpyZ2IoMjQzLCAxNzgsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICAgIH1cclxuXHJcbiAgIC5wb25lcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAgICBcclxuLnRpdHVsb3tmb250LXNpemU6MzVweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQycHg7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIG1hcmdpbi10b3A6MHB4O1xyXG4gIGNvbG9yOnJnYig2OCwgNjgsIDY4KTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4gLmNhcGl0YWw6OmZpcnN0LWxldHRlciB7XHJcblxyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOm9yYW5nZTtcclxuXHJcbn1cclxuLm1hcnttYXJnaW4tbGVmdDoxMHB4OyBtYXJnaW4tcmlnaHQ6MTBweH1cclxuLnN1YnRpdHVsb3tcclxuICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDowcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4OyBcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjpyZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICB9XHJcblxyXG4gIC5ib3JkZXtib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAwKSA7fVxyXG5cclxuLmNvbG9yRm9uZG97YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7IH1cclxuXHJcbi5zdGlja3l7cG9zaXRpb246IHN0aWNreTsgdG9wOjB9XHJcblxyXG5cclxuLmltYWdlLXN0eWxlLXNpZGV7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgIHBhZGRpbmc6MTBweDsgXHJcbiAgfVxyXG4uaHJNYXJnZW57IG9wYWNpdHk6IDAuMzt9XHJcbiAgICBcclxuLmNsYXNlUHJpbmNpcGFse1xyXG4gICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6MHB4OyBcclxuICAgIG1hcmdpbi10b3A6LTBweDsgXHJcbiAgfVxyXG5cclxuLnByaW1lckljb257XHJcbiAgZGlzcGxheTpmbGV4OyBcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXHJcbiAgbWFyZ2luLXRvcDotNXB4OyBcclxuICBtYXJnaW4tbGVmdDotMTBweDsgXHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHhcclxufVxyXG4ucG9uZXI2MDB7ZGlzcGxheTpub25lfVxyXG4ubG9nb0NDQU1Gb290ZXJ7XHJcbiAgd2lkdGg6IDEyNXB4OyBtYXJnaW4tdG9wOiAyNjhweDsgIG1hcmdpbi1sZWZ0OiAxMjVweDsgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUyMHB4KVxyXG57XHJcbi5sb2dvQ0NBTUZvb3Rlcnt3aWR0aDogMTAwcHg7IG1hcmdpbi10b3A6MTlweDtcclxubWFyZ2luLWxlZnQ6MTBweDtcclxufVxyXG5cclxuICAucXVpdGFyMntkaXNwbGF5Om5vbmV9fVxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUyMHB4KVxyXG57XHJcbiAgLnF1aXRhcntkaXNwbGF5Om5vbmV9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpXHJcbntcclxuXHJcbiAgLm1hcnttYXJnaW4tbGVmdDowcHg7IG1hcmdpbi1yaWdodDowcHh9XHJcbi5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gIC5wb25lcjYwMHtkaXNwbGF5OmJsb2NrfVxyXG5cclxuLnN1YnRpdHVsb3tcclxuIFxyXG4gZm9udC1zaXplOiAxOHB4OyBcclxuIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gXHJcbiAgIH1cclxuXHJcbiAgLnRpdHVsb3tmb250LXNpemU6MzBweDsgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7IFxyXG4gICAgXHJcbiAgfVxyXG4uY2F0ZWdvcmlheyBcclxuIFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuIFxyXG4gIH1cclxuICAuY3VhZHJvVG90YWx7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoNTEsIDUxLCA1MSk7Ym9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHJnYig1MSwgNTEsIDUxKTtcclxuICB9XHJcbiAgLm1hcmdlbk1vYmlsZXtcclxuICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjJweDtcclxuICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG4ubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfSBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MjY2NnB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAyNSU7IH0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjI0MDJweClcclxuey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMjQlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMjQlOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfSBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MjAwMHB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAxOCU7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAxOCU7IH0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjE4MDBweClcclxuey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMTUlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMTUlOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfSBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTQwMHB4KVxyXG57Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiA4JTsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDglOyB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDQlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogNCU7IH0gXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpXHJcbnsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDAlOyB9XHJcbi5tYXJnZW5Se21hcmdpbi1yaWdodDogMCU7IH0gXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
;

/***/ }),

/***/ 33159:
/*!************************************************************!*\
  !*** ./src/app/componentes/b-indice/b-indice.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BIndiceComponent": () => (/* binding */ BIndiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);


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
  decls: 173,
  vars: 52,
  consts: [[1, "fondo"], [1, "indice", 2, "height", "30px", "background-color", "orange"], [1, "indice1", 2, "color", "white", "padding-left", "10px", "padding-top", "7px"], [1, "row", "quitar600"], [1, "col-6", "col-sm-0", 2, "transform", "rotate(-2deg)", "max-height", "800px", "min-height", "900px"], [2, "margin-left", "35px"], ["width", "100%", "alt", "", 1, "imagen", 2, "border-radius", "10px", 3, "src"], [1, "tituloBox", 2, "border-radius", "10px", "box-shadow", "1px 1px 2px black"], ["target", "_blank", 3, "routerLink"], [1, "titulo", "truncar3", 2, "font-size", "30px", "line-height", "35px", "color", "white", "margin-top", "10px", "text-shadow", "2px 2px 2px black", "padding-bottom", "0px", "margin-left", "-10px", "line-height", "35px", "margin-left", "0px"], [1, "descripcion", "truncar4", 2, "color", "black", "margin-top", "-2px"], [1, "col-6", 2, "margin-top", "0px!important"], [1, "row"], [1, "col-12", 2, "padding", "0px", "margin", "0px", "padding-left", "10px", "margin-top", "20px"], [1, "hov", "margenes", 2, "background-color", "orange", "box-shadow", "1px 1px 3px rgb(57, 57, 57)", 3, "mouseover"], ["target", "_blank", 3, "href"], [1, "titulo", 2, "margin-top", "15px", "margin-left", "10px"], [2, "padding-bottom", "10px", "margin-top", "-22px", "margin-left", "20px", "bottom", "10px", "color", "brown", "font-size", "15px", "margin-bottom", "20px"], ["target", "_blank", "target", "_blank", 3, "href"], [1, "titulo"], [1, "poner600", 2, "background-color", "black"], [1, "row", 2, "margin-top", "10px"], [1, "col-5"], [3, "routerLink"], ["width", "100%", "alt", "", "height", "160px", 1, "img", 3, "src"], [1, "col-7", 2, "border-radius", "10px", "background-color", "#ffa500", "padding", "0px", 3, "click"], [1, "titulo", "truncar3"], [2, "padding-left", "12px", "margin-top", "-4px", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-3px", "margin-left", "-3px"], ["d", "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [1, "col-7", 2, "border-radius", "10px", "background-color", "#ffa500", 3, "click"], [1, "titulo", 2, "margin-left", "0px"], [2, "margin-top", "-4px", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill"], [2, "width", "100%", "background-color", "orange", "margin-top", "10px", "margin-bottom", "10px", "border-radius", "10px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/suscripcion.html", "target", "_blank"], ["src", "../../../assets/banner Noticias.png", "width", "100%", "alt", ""], ["width", "100%", "alt", "", "height", "100%", 1, "img", 3, "src"], [1, "col-7", 2, "overflow", "hidden", "border-radius", "10px", "background-color", "#ffa500", 3, "click"], [2, "margin-top", "-p4x", "font-size", "12px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-1px"], ["width", "100%", "height", "100%", "alt", "", 1, "img", 3, "src"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill", 2, "margin-top", "-5px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-entrenamiento.html", "target", "_blank"], ["src", "../../../assets/otros.png", "width", "100%", "alt", ""], [2, "margin-top", "-10px", "font-size", "12px"], [1, "col-5", 2, "margin-bottom", "20px"], [1, "col-7", 2, "border-radius", "10px", "background-color", "#ffa500", "margin-bottom", "20px", 3, "click"], [2, "padding-left", "0px", "margin-top", "-10px", "font-size", "12px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-equipo.html", "target", "_blank"], ["src", "../../../assets/formarparte.png", "width", "100%", "alt", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Por: Alex Guillermo Mart\u00EDn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_27_listener() {
        return ctx.cambioImagen2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18)(29, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Por: Alex Guillermo Mart\u00EDn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_33_listener() {
        return ctx.cambioImagen3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8)(35, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Por: Corina Mar\u00EDa Altamirano");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_39_listener() {
        return ctx.cambioImagen4();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8)(41, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Por: Mariana Neme");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_45_listener() {
        return ctx.cambioImagen5();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 8)(47, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Por: Horacio Beto Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_51_listener() {
        return ctx.cambioImagen6();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 8)(53, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Por: J. Lucas Sbriglio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_57_listener() {
        return ctx.cambioImagen7();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 8)(59, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Por: Jos\u00E9 Herminio Hern\u00E1ndez");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BIndiceComponent_Template_div_mouseover_63_listener() {
        return ctx.cambioImagen8();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 8)(65, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Por: Marcelo Lisnovsky");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20)(68, "div", 21)(69, "div", 22)(70, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_72_listener() {
        return ctx.cambioImagen1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 23)(74, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Alex Guillermo Mart\u00EDn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12)(81, "div", 22)(82, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_84_listener() {
        return ctx.cambioImagen2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 23)(86, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Alex Guillermo Mart\u00EDn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12)(93, "div", 22)(94, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_96_listener() {
        return ctx.cambioImagen3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 23)(98, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Corina Mar\u00EDa Altamirano");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 34)(105, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12)(108, "div", 22)(109, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_111_listener() {
        return ctx.cambioImagen4();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 23)(113, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "svg", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Mariana Neme");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 12)(120, "div", 22)(121, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_123_listener() {
        return ctx.cambioImagen5();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 23)(125, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Horacio Beto Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 12)(132, "div", 22)(133, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_135_listener() {
        return ctx.cambioImagen6();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 23)(137, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " J. Lucas Sbriglio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 34)(144, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 12)(147, "div", 22)(148, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_150_listener() {
        return ctx.cambioImagen7();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 23)(152, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " J. Lucas Sbriglio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 12)(159, "div", 46)(160, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BIndiceComponent_Template_div_click_162_listener() {
        return ctx.cambioImagen8();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 23)(164, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "svg", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Marcelo Lisnovsky");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 34)(171, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 50);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/articulo/", ctx.ruta, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data == null ? null : ctx.data.art2, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art3, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.ruta, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID5, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID6, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.art6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.art7, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.resultadoImagen8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/articulo/", ctx.data == null ? null : ctx.data.resultadoID8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.art8);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Abel&family=Questrial&display=swap);@import url(https://fonts.googleapis.com/css2?family=Jost:wght@800&display=swap);\r\n\r\n   .indice[_ngcontent-%COMP%]{display:none}\r\n   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n    color: orange;\r\n\r\n  }\r\n  .categoria[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-size: 12px;\r\n    margin-top:10px;\r\n    margin-left:10px;\r\n    font-family: unset;\r\n\r\n  }\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n background-color: rgb(59, 52, 0)!important;\r\n background-image: url('fondoindex.png');\r\n   margin:20px; object-fit:cover;\r\n  margin-top: 0px;\r\n  height:100%\r\n}\r\n\r\n  .imagen[_ngcontent-%COMP%]{height: 500px; margin-top:50px; border: 20px solid orange ;object-fit: cover; }\r\n  .img[_ngcontent-%COMP%]{min-height: 125px; object-fit: cover;  border-radius: 10px!important;}\r\n\r\n  .tituloBox[_ngcontent-%COMP%]{background-color: orange;width:100%; margin-top:-28px; padding-left:15px}\r\n  .truncar3[_ngcontent-%COMP%] {\r\n\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    overflow-wrap: break-word;\r\n    overflow: hidden!important;\r\n\r\n    \r\n  }\r\n  .truncar4[_ngcontent-%COMP%] {\r\n\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    overflow-wrap: break-word;\r\n    overflow: hidden!important;\r\n    line-height: 100px;\r\n    \r\n  }\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n    font-size: 18px;\r\n    font-family: 'Questrial', sans-serif;\r\n    \r\n    font-weight: 800;\r\n    letter-spacing: 0px;\r\n    \r\n\r\n    line-height: 25px;\r\n    color:black;\r\n    margin-top:20px;\r\n    padding:8px;\r\n    margin-left:10px;\r\n\r\n  }\r\n\r\n  .indice1[_ngcontent-%COMP%]{\r\n  \r\n    margin-left: 10px;\r\n    font-family: 'Oswald', sans-serif;\r\n  text-transform: uppercase;\r\n    margin-bottom: 8px;\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    color:white}\r\n  \r\n\r\n\r\n  \r\n\r\n  .margenes[_ngcontent-%COMP%]{\r\n    margin-right:30px; margin-left:20px;\r\n    border-radius: 5px;\r\n    cursor:pointer;\r\n    min-height:60px ;\r\n\r\n  }\r\na[_ngcontent-%COMP%]{text-decoration: none;}\r\n\r\n  .autor[_ngcontent-%COMP%] {\r\n\r\n    font-size: 12px;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-weight: 200;\r\n    letter-spacing: 0px;\r\n    color:black;\r\n    line-height: 24px;\r\n    margin-top:-40px;\r\n    padding:10px;\r\n    margin-left:4px;\r\n\r\n  }\r\n\r\n.descripcion[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 400;\r\n  letter-spacing: 0px;\r\n  color:rgb(70, 53, 0);\r\n  line-height: 24px;\r\n  margin-top:-15px;\r\n  padding-left:10px;\r\n  padding-right:10px;\r\n\r\n\r\n}\r\n  .marg[_ngcontent-%COMP%]{\r\n    margin-top: -15px;\r\n    font-size: 100px;}\r\n\r\n.tituloMargen[_ngcontent-%COMP%]{\r\n  margin-top:40px!important;\r\n  }\r\n\r\n.row[_ngcontent-%COMP%]{padding:10px; padding-left:0px}\r\n\r\n  .poner600[_ngcontent-%COMP%]{display:none}\r\n\r\n\r\n\r\n  @media (max-width:700px){\r\n      .fondo[_ngcontent-%COMP%]{background-image: none;}}\r\n      @media (max-width:600px){\r\n        .indice[_ngcontent-%COMP%]{display:inline;}}\r\n\r\n\r\n\r\n\r\n\r\n  @media (max-width:700px){\r\n\r\n    p[_ngcontent-%COMP%]{font-size:10px}\r\n    .titulo[_ngcontent-%COMP%] {\r\n\r\n      font-family:'Jost', sans-serif;\r\n      font-size: 25px;\r\n      letter-spacing: -1px;\r\n      \r\n\r\n      line-height: 25px;\r\n      color:rgb(255, 255, 255);\r\n\r\n      padding:12px;\r\n      border-radius:4px;\r\n      margin-top:10px;\r\n      padding:0px;\r\n      padding-right: 5px;\r\n      font-weight: 800;\r\n\r\n    }\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n\r\n  background-color: rgba(82, 55, 0, 0);\r\n  height:100%;\r\n\r\n}\r\n\r\n    .row[_ngcontent-%COMP%]{margin:0px}\r\n    .col[_ngcontent-%COMP%]{padding:0px}\r\n\r\n\r\n\r\n\r\n\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  .img[_ngcontent-%COMP%]{border-radius: 2px;}\r\n  .poner600[_ngcontent-%COMP%]{display:inline-block; }\r\n  .imagen[_ngcontent-%COMP%]{width: 200px;}\r\n  .fondo[_ngcontent-%COMP%] {margin:0px}\r\n\r\n  .margenes[_ngcontent-%COMP%]{\r\n    margin-right:10px; margin-left:10px;\r\n    }\r\n\r\n\r\n\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYi1pbmRpY2UvYi1pbmRpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7OztNQU9NOztHQUVILFFBQVEsWUFBWTtHQUNwQjs7SUFFQyxhQUFhOztFQUVmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOztFQUVwQjs7QUFFRjtDQUNDLDBDQUEwQztDQUMxQyx1Q0FBdUQ7R0FDckQsV0FBVyxFQUFFLGdCQUFnQjtFQUM5QixlQUFlO0VBQ2Y7QUFDRjs7RUFFRSxRQUFRLGFBQWEsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsaUJBQWlCLEVBQUU7RUFDdEYsS0FBSyxpQkFBaUIsRUFBRSxpQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQzs7RUFFMUUsV0FBVyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCO0VBQ25GOztJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7O0lBRTFCLDREQUE0RDtFQUM5RDtFQUNBOztJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDREQUE0RDtFQUM5RDtBQUNGOztJQUVJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DOztJQUVwQyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCOztFQUVsQjs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DLHlCQUF5QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXOzs7O0VBSWI7Ozs7O0tBS0c7O0VBRUg7SUFDRSxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7O0VBRWxCO0FBQ0YsRUFBRSxxQkFBcUIsQ0FBQzs7RUFFdEI7O0lBRUUsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7QUFFRjtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCOzs7QUFHcEI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQzs7QUFFckI7RUFDRSx5QkFBeUI7RUFDekI7O0FBRUYsS0FBSyxZQUFZLEVBQUUsZ0JBQWdCOztFQUVqQyxVQUFVLFlBQVk7Ozs7RUFJdEI7TUFDSSxPQUFPLHNCQUFzQixDQUFDLENBQUM7TUFDL0I7UUFDRSxRQUFRLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7RUFNOUI7O0lBRUUsRUFBRSxjQUFjO0lBQ2hCOztNQUVFLDhCQUE4QjtNQUM5QixlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLHlCQUF5Qjs7TUFFekIsaUJBQWlCO01BQ2pCLHdCQUF3Qjs7TUFFeEIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixnQkFBZ0I7O0lBRWxCOzs7QUFHSjs7RUFFRSxvQ0FBb0M7RUFDcEMsV0FBVzs7QUFFYjs7SUFFSSxLQUFLLFVBQVU7SUFDZixLQUFLLFdBQVc7Ozs7OztFQU1sQixXQUFXLFlBQVk7RUFDdkIsS0FBSyxrQkFBa0IsQ0FBQztFQUN4QixVQUFVLG9CQUFvQixFQUFFO0VBQ2hDLFFBQVEsWUFBWSxDQUFDO0VBQ3JCLFFBQVEsVUFBVTs7RUFFbEI7SUFDRSxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkM7Ozs7O0VBS0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYmVsJmZhbWlseT1RdWVzdHJpYWwmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xyXG4vKiAuaG92IDpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBtaW4taGVpZ2h0OjYwcHggO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcclxuXHJcbiAgIH0gKi9cclxuXHJcbiAgIC5pbmRpY2V7ZGlzcGxheTpub25lfVxyXG4gICBhIDphY3RpdmUge1xyXG5cclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcblxyXG4gIH1cclxuICAuY2F0ZWdvcmlhe1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldDtcclxuXHJcbiAgfVxyXG5cclxuLmZvbmRve1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1MiwgMCkhaW1wb3J0YW50O1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9uZG9pbmRleC5wbmcnKTtcclxuICAgbWFyZ2luOjIwcHg7IG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGhlaWdodDoxMDAlXHJcbn1cclxuXHJcbiAgLmltYWdlbntoZWlnaHQ6IDUwMHB4OyBtYXJnaW4tdG9wOjUwcHg7IGJvcmRlcjogMjBweCBzb2xpZCBvcmFuZ2UgO29iamVjdC1maXQ6IGNvdmVyOyB9XHJcbiAgLmltZ3ttaW4taGVpZ2h0OiAxMjVweDsgb2JqZWN0LWZpdDogY292ZXI7ICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDt9XHJcblxyXG4gIC50aXR1bG9Cb3h7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO3dpZHRoOjEwMCU7IG1hcmdpbi10b3A6LTI4cHg7IHBhZGRpbmctbGVmdDoxNXB4fVxyXG4gIC50cnVuY2FyMyB7XHJcblxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xyXG5cclxuICAgIC8qc2kgbm8gc2UgZGVjbGFyYSBhw4PCsWFkZSBsb3MgLi4uIHBlcm8gbXVlc3RyYSB0b2RvIGVsIHRleHRvKi9cclxuICB9XHJcbiAgLnRydW5jYXI0IHtcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICAvKnNpIG5vIHNlIGRlY2xhcmEgYcODwrFhZGUgbG9zIC4uLiBwZXJvIG11ZXN0cmEgdG9kbyBlbCB0ZXh0byovXHJcbiAgfVxyXG4udGl0dWxvIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byBib2xkJywgc2Fucy1zZXJpZjsgICovXHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIC8qIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCBibGFjazsgKi9cclxuXHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5pbmRpY2Uxe1xyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjp3aGl0ZX1cclxuICBcclxuXHJcblxyXG4gIC8qIC50aXR1bG8gOmhvdmVyIHtcclxuXHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcblxyXG5cclxuICB9ICovXHJcblxyXG4gIC5tYXJnZW5lc3tcclxuICAgIG1hcmdpbi1yaWdodDozMHB4OyBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OjYwcHggO1xyXG5cclxuICB9XHJcbmF7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuXHJcbiAgLmF1dG9yIHtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDotNDBweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjRweDtcclxuXHJcbiAgfVxyXG5cclxuLmRlc2NyaXBjaW9ue1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjpyZ2IoNzAsIDUzLCAwKTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuXHJcblxyXG59XHJcbiAgLm1hcmd7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7fVxyXG5cclxuLnRpdHVsb01hcmdlbntcclxuICBtYXJnaW4tdG9wOjQwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5yb3d7cGFkZGluZzoxMHB4OyBwYWRkaW5nLWxlZnQ6MHB4fVxyXG5cclxuICAucG9uZXI2MDB7ZGlzcGxheTpub25lfVxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuICAgICAgLmZvbmRve2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7fX1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgICAgIC5pbmRpY2V7ZGlzcGxheTppbmxpbmU7fX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICBwe2ZvbnQtc2l6ZToxMHB4fVxyXG4gICAgLnRpdHVsbyB7XHJcblxyXG4gICAgICBmb250LWZhbWlseTonSm9zdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgIC8qIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXHJcblxyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4uZm9uZG97XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDU1LCAwLCAwKTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuXHJcbiAgICAucm93e21hcmdpbjowcHh9XHJcbiAgICAuY29se3BhZGRpbmc6MHB4fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLnF1aXRhcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAgLmltZ3tib3JkZXItcmFkaXVzOiAycHg7fVxyXG4gIC5wb25lcjYwMHtkaXNwbGF5OmlubGluZS1ibG9jazsgfVxyXG4gIC5pbWFnZW57d2lkdGg6IDIwMHB4O31cclxuICAuZm9uZG8ge21hcmdpbjowcHh9XHJcblxyXG4gIC5tYXJnZW5lc3tcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4OyBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 87988:
/*!******************************************************************!*\
  !*** ./src/app/componentes/barra-negra/barra-negra.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarraNegraComponent": () => (/* binding */ BarraNegraComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


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
  decls: 25,
  vars: 0,
  consts: [[1, "barra"], [1, "flex-container"], [1, "suscribirse"], [1, "contactar"], [1, "quitar675", 2, "margin-top", "-4px"], [1, "margenL", "quienesSomos"], [1, "margenL", "formarParte"], [1, "redes"], ["href", "https://www.youtube.com/c/CentroCulturalArgentinodeMonta%C3%B1a", "target", "_blank"], ["src", "../../../assets/fa_youtube.png", "alt", "", "width", "18px", 2, "margin-right", "3px", "margin-top", "-4px"], ["href", "https://www.instagram.com/ccam_arg/?hl=es-la", "target", "_blank"], ["src", "../../../assets/icoInsta.png", "alt", "", "width", "29px", 2, "margin-top", "-4px", "margin-right", "2px"], ["href", "https://web.facebook.com/ccamontania", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-facebook", 2, "margin-right", "-7px", "margin-top", "-4px"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"]],
  template: function BarraNegraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "h4")(4, "a")(5, "b", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "INICIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " |");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a")(10, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SUBSCRIBIRSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u2709 \u00BFQUI\u00C9NES SOMOS?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "- CENTRO CULTURAL ARGENTINO DE MONTA\u00D1A -");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);.barra[_ngcontent-%COMP%]{\r\n    background-color: #2c2c2c;\r\n    height: 40px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{color:orange}\r\n\r\n.margen[_ngcontent-%COMP%]{margin-left:0px; margin-right: 20px;}\r\n\r\n.barraTexto[_ngcontent-%COMP%]{font-family: 'Oswald', sans-serif;\r\n    color:white ;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    padding-left:4px;\r\n      padding-right:4px\r\n}\r\n\r\n\r\n\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    outline: none;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    margin-left: 20px;\r\n    margin-top: -5px;\r\n  }\r\n\r\n  .suscribirse[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:aliceblue\r\n\r\n }\r\n\r\n .suscribirse[_ngcontent-%COMP%]:active{\r\n    background: rgb(54, 54, 54);; border-radius: 10%;\r\n    text-shadow: 1px 2px 4px black;\r\n    color:black\r\n}\r\n.contactar[_ngcontent-%COMP%]{cursor: pointer;\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    outline: none;\r\n    margin-top:9px;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .contactar[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:aliceblue\r\n }\r\n\r\n .contactar[_ngcontent-%COMP%]:active{\r\n  background: rgb(54, 54, 54);; border-radius: 10%;\r\n  text-shadow: 1px 2px 4px black;\r\n  color:black\r\n}\r\n .quienesSomos[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-family:  Oswald,sans-serif; \r\n  letter-spacing: 2px;;\r\n    left:-128px;\r\n    top:7px;\r\n    color:rgb(255, 255, 255);\r\n    position: absolute;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n     }\r\n\r\n     .quienesSomos[_ngcontent-%COMP%]:hover{\r\n      \r\n        background: rgb(54, 54, 54); border-radius: 10%;\r\n        text-shadow: 1px 1px 4px gray;\r\n        color:orange\r\n     }\r\n     .quienesSomos[_ngcontent-%COMP%]:active{\r\n        background: rgb(54, 54, 54); border-radius: 10%;\r\n        text-shadow: 1px 1px 4px gray;\r\n        color:black\r\n     }\r\n\r\n     .redes[_ngcontent-%COMP%]{margin-top:4px ; margin-right: 30px}\r\n\r\n .formarParte[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  font-family:  Oswald,sans-serif; \r\n  letter-spacing: 2px;;\r\n  top:7px;\r\n    left:48px;\r\n    color:rgb(255, 255, 255);\r\n    position: absolute;\r\n    -webkit-user-select:none;\r\n            user-select:none;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n    }\r\n\r\n    \r\n\r\n .formarParte[_ngcontent-%COMP%]:hover{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:orange\r\n\r\n }\r\n\r\n .formarParte[_ngcontent-%COMP%]:active{\r\n    background: rgb(54, 54, 54); border-radius: 10%;\r\n    text-shadow: 1px 1px 4px gray;\r\n    color:black\r\n }\r\n\r\n\r\n  .margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n\r\n\r\n  a[_ngcontent-%COMP%]{\r\n    color:rgb(255, 187, 61) ;\r\n    font-size: 13px;}\r\n\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: nowrap;\r\n                justify-content: space-between;\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n           \r\n                @media (max-width: 675px)\r\n                {\r\n                    .quitar675[_ngcontent-%COMP%]{display: none;}\r\n                }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvYmFycmEtbmVncmEvYmFycmEtbmVncmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBLEtBQUssWUFBWTs7QUFFakIsUUFBUSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7O0FBRTVDLFlBQVksaUNBQWlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtNQUNkO0FBQ047Ozs7QUFJQSxhQUFhLGVBQWU7SUFDeEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHdCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCOztDQUVIOztDQUVBO0lBQ0csMkJBQTJCLEdBQUcsa0JBQWtCO0lBQ2hELDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0EsV0FBVyxlQUFlO0lBQ3RCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkJBQTJCLEVBQUUsa0JBQWtCO0lBQy9DLDZCQUE2QjtJQUM3QjtDQUNIOztDQUVBO0VBQ0MsMkJBQTJCLEdBQUcsa0JBQWtCO0VBQ2hELDhCQUE4QjtFQUM5QjtBQUNGO0NBQ0M7SUFDRyxlQUFlO0lBQ2YsK0JBQStCO0VBQ2pDLG1CQUFtQjtJQUNqQixXQUFXO0lBQ1gsT0FBTztJQUNQLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtLQUNkOztLQUVBOztRQUVHLDJCQUEyQixFQUFFLGtCQUFrQjtRQUMvQyw2QkFBNkI7UUFDN0I7S0FDSDtLQUNBO1FBQ0csMkJBQTJCLEVBQUUsa0JBQWtCO1FBQy9DLDZCQUE2QjtRQUM3QjtLQUNIOztLQUVBLE9BQU8sZUFBZSxFQUFFLGtCQUFrQjs7Q0FFOUM7RUFDQyxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixPQUFPO0lBQ0wsU0FBUztJQUNULHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmOzs7O0NBSUg7SUFDRywyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsNkJBQTZCO0lBQzdCOztDQUVIOztDQUVBO0lBQ0csMkJBQTJCLEVBQUUsa0JBQWtCO0lBQy9DLDZCQUE2QjtJQUM3QjtDQUNIOzs7RUFHQyxVQUFVLGdCQUFnQixFQUFFOzs7RUFHNUI7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZSxDQUFDOzthQUVQO2dCQUNHLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixpQkFBaUI7Z0JBQ2pCLDhCQUE4QjtnQkFDOUIsbUJBQW1CO2dCQUNuQixxQkFBcUI7Y0FDdkI7O2NBRUE7Z0JBQ0UsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLFFBQVE7Y0FDVjs7Y0FFQTtnQkFDRSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsUUFBUTtjQUNWOzs7Z0JBR0U7O29CQUVJLFdBQVcsYUFBYSxDQUFDO2dCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4uYmFycmF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5zcGFue2NvbG9yOm9yYW5nZX1cclxuXHJcbi5tYXJnZW57bWFyZ2luLWxlZnQ6MHB4OyBtYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG5cclxuLmJhcnJhVGV4dG97Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6d2hpdGUgO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDo0cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NHB4XHJcbn1cclxuXHJcblxyXG5cclxuLnN1c2NyaWJpcnNle2N1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOnJnYigyNTUsIDE4NywgNjEpIDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDpub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcblxyXG4gIC5zdXNjcmliaXJzZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NCwgNTQsIDU0KTsgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IGdyYXk7XHJcbiAgICBjb2xvcjphbGljZWJsdWVcclxuXHJcbiB9XHJcblxyXG4gLnN1c2NyaWJpcnNlOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NCwgNTQsIDU0KTs7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDRweCBibGFjaztcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLmNvbnRhY3RhcntjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAxODcsIDYxKSA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDo5cHg7XHJcbiAgICB1c2VyLXNlbGVjdDpub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdGFyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU0LCA1NCwgNTQpOyBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggZ3JheTtcclxuICAgIGNvbG9yOmFsaWNlYmx1ZVxyXG4gfVxyXG5cclxuIC5jb250YWN0YXI6YWN0aXZle1xyXG4gIGJhY2tncm91bmQ6IHJnYig1NCwgNTQsIDU0KTs7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggYmxhY2s7XHJcbiAgY29sb3I6YmxhY2tcclxufVxyXG4gLnF1aWVuZXNTb21vc3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAgT3N3YWxkLHNhbnMtc2VyaWY7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7O1xyXG4gICAgbGVmdDotMTI4cHg7XHJcbiAgICB0b3A6N3B4O1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgfVxyXG5cclxuICAgICAucXVpZW5lc1NvbW9zOmhvdmVye1xyXG4gICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggZ3JheTtcclxuICAgICAgICBjb2xvcjpvcmFuZ2VcclxuICAgICB9XHJcbiAgICAgLnF1aWVuZXNTb21vczphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDU0LCA1NCwgNTQpOyBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IGdyYXk7XHJcbiAgICAgICAgY29sb3I6YmxhY2tcclxuICAgICB9XHJcblxyXG4gICAgIC5yZWRlc3ttYXJnaW4tdG9wOjRweCA7IG1hcmdpbi1yaWdodDogMzBweH1cclxuXHJcbiAuZm9ybWFyUGFydGV7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAgT3N3YWxkLHNhbnMtc2VyaWY7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7O1xyXG4gIHRvcDo3cHg7XHJcbiAgICBsZWZ0OjQ4cHg7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB1c2VyLXNlbGVjdDpub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAuZm9ybWFyUGFydGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCBncmF5O1xyXG4gICAgY29sb3I6b3JhbmdlXHJcblxyXG4gfVxyXG5cclxuIC5mb3JtYXJQYXJ0ZTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDU0LCA1NCk7IGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCBncmF5O1xyXG4gICAgY29sb3I6YmxhY2tcclxuIH1cclxuXHJcblxyXG4gIC5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMzMlOyB9XHJcblxyXG5cclxuICBhe1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMTg3LCA2MSkgO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O31cclxuXHJcbiAgICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZmxleC1pdGVtczpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZmxleC1pdGVtczpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NzVweClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAucXVpdGFyNjc1e2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23256:
/*!****************************************************************************!*\
  !*** ./src/app/componentes/carousel-revista/carousel-revista.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselRevistaComponent": () => (/* binding */ CarouselRevistaComponent)
/* harmony export */ });
/* harmony import */ var _models_dataCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/dataCarousel */ 20224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-useful-swiper */ 93042);






function CarouselRevistaComponent_swiper_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "a", 8)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", image_r2.subtitulo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](image_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CarouselRevistaComponent_swiper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "swiper", 1)(1, "div")(2, "div", 2)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "N\u00FAmeros Anteriores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarouselRevistaComponent_swiper_0_div_6_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5)(8, "div", 6)(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initialize", ctx_r0.swipperisActive)("config", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.slideData);
  }
}
class CarouselRevistaComponent {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.title = 'ng-swiper-demo';
    this.slideData = _models_dataCarousel__WEBPACK_IMPORTED_MODULE_0__.carouselDataItems;
    this.carga = false;
    this.swipperisActive = false;
    this.config = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoHeight: true,
      allowTouchMove: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: true
      },
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
      this.swipperisActive = true;
    }
  }
  ngOnInit() {}
}
CarouselRevistaComponent.ɵfac = function CarouselRevistaComponent_Factory(t) {
  return new (t || CarouselRevistaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
CarouselRevistaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CarouselRevistaComponent,
  selectors: [["app-carousel-revista"]],
  decls: 1,
  vars: 1,
  consts: [["class", "principal", 3, "initialize", "config", 4, "ngIf"], [1, "principal", 3, "initialize", "config"], [2, "margin-top", "14px"], [1, "swiper-wrapper"], ["class", "swiper-slide", "style", "padding: 10px!important; border-radius: 10px;", 4, "ngFor", "ngForOf"], [1, "swiper-button-next", 2, "margin-right", "20px"], [1, "swiper-button-prev", 2, "margin-left", "20px"], [1, "swiper-slide", 2, "padding", "10px!important", "border-radius", "10px"], ["target", "_blank", 3, "href"], [2, "width", "100%", "box-shadow", "1px 1px 10px rgba(0, 0, 0, 0.219)", "border-radius", "4px", 3, "src"]],
  template: function CarouselRevistaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselRevistaComponent_swiper_0_Template, 10, 3, "swiper", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.swipperisActive);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent],
  styles: [".swiper[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 180px;\r\n  }\r\n  h1[_ngcontent-%COMP%]{\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\nfont-weight:700 ;\r\nletter-spacing: -1px;\r\nmargin-left: 10px;\r\nfont-size: 27px;\r\nmargin-top: 20px;\r\ncolor: rgb(255, 255, 255);\r\nborder-radius: px;\r\nmargin-top:4px ;\r\nmargin-right: 10px;\r\nbackground-color: rgb(94, 72, 0);\r\npadding-left: 10px; \r\npadding-top: 0px;\r\n  }\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none!important;\r\n\r\n    }\r\n\r\n\r\n  p[_ngcontent-%COMP%]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight:400;\r\n    font-size: 18px;\r\n    margin: 0px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    background-color: #8b5a00;\r\nborder-radius: 3px;\r\ncolor:rgb(255, 208, 121); text-transform: uppercase;\r\n\r\n      }\r\n\r\n  .swiper-wrapper[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n  .principal[_ngcontent-%COMP%]  {\r\n\r\n    background-color: rgb(59, 40, 4); text-align: left; margin-left: 10px; margin-right: 10px; border-radius: 4px;\r\n     \r\n    }\r\n    \r\n\r\n\r\n    @media (max-width:600px)\r\n    {\r\n\r\n      \r\n  .principal[_ngcontent-%COMP%]  {\r\n\r\n  margin-left: 0px; margin-right: 0px; border-radius: 4px; margin-top:-10px ;\r\n     \r\n    }\r\n    \r\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvY2Fyb3VzZWwtcmV2aXN0YS9jYXJvdXNlbC1yZXZpc3RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBQ0E7QUFDRiw0REFBNEQ7QUFDNUQsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0NBQWdDO0FBQ2hDLGtCQUFrQjtBQUNsQixnQkFBZ0I7RUFDZDtBQUNGO0VBQ0UsK0JBQStCOztJQUU3Qjs7O0VBR0Y7SUFDRSw0REFBNEQ7SUFDNUQsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0Isa0JBQWtCO0FBQ2xCLHdCQUF3QixFQUFFLHlCQUF5Qjs7TUFFN0M7O0VBRUo7SUFDRSxzQkFBc0I7RUFDeEI7Ozs7OztFQU1BOztJQUVFLGdDQUFnQyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjs7SUFFN0c7Ozs7SUFJQTs7OztFQUlGOztFQUVBLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQjs7SUFFeEU7O0lBRUEiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG5cclxuLnN3aXBlciB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxuICBoMXtcclxuZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDo3MDAgO1xyXG5sZXR0ZXItc3BhY2luZzogLTFweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmZvbnQtc2l6ZTogMjdweDtcclxubWFyZ2luLXRvcDogMjBweDtcclxuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuYm9yZGVyLXJhZGl1czogcHg7XHJcbm1hcmdpbi10b3A6NHB4IDtcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDcyLCAwKTtcclxucGFkZGluZy1sZWZ0OiAxMHB4OyBcclxucGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWEwMDtcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG5jb2xvcjpyZ2IoMjU1LCAyMDgsIDEyMSk7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICB9XHJcblxyXG4gIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC5wcmluY2lwYWwgIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDQwLCA0KTsgdGV4dC1hbGlnbjogbGVmdDsgbWFyZ2luLWxlZnQ6IDEwcHg7IG1hcmdpbi1yaWdodDogMTBweDsgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KVxyXG4gICAge1xyXG5cclxuICAgICAgXHJcbiAgLnByaW5jaXBhbCAge1xyXG5cclxuICBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDBweDsgYm9yZGVyLXJhZGl1czogNHB4OyBtYXJnaW4tdG9wOi0xMHB4IDtcclxuICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 57363:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

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
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Jockey+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);@import url(https://fonts.googleapis.com/css2?family=Train+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap);@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab:wght@900&display=swap);@import url(https://fonts.googleapis.com/css2?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);\r\n \r\n\r\n\r\n\r\n\r\n\r\n .imgAparece[_ngcontent-%COMP%]{display: none;}\r\n\r\n .numeroEdicion[_ngcontent-%COMP%]{display: none;}\r\n.acom[_ngcontent-%COMP%]{margin-top:370px; }\r\n.fuenteTest[_ngcontent-%COMP%]{  font-family: 'Oswald', sans-serif;}\r\n.publiMobile[_ngcontent-%COMP%]{display:none}\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: normal;\r\n  align-items: normal;\r\n  align-content: normal;\r\n}\r\n.logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-20px}\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cartelInicio[_ngcontent-%COMP%]{display: none;}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cuerpo[_ngcontent-%COMP%]{\r\n background-color:  rgb(51, 51, 51);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{font-family: 'Roboto Slab', serif;}\r\n.quienesSomos[_ngcontent-%COMP%]{\r\n   left:220px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n.foterText[_ngcontent-%COMP%]{margin-top:-10px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;}\r\n\r\n\r\n.formarParte[_ngcontent-%COMP%]{\r\n   left:380px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n\r\n\r\n\r\n.textLogo[_ngcontent-%COMP%]{\r\n    font-family: 'Teko', sans-serif;\r\n    font-size: 40px; color: rgba(194, 18, 18, 0.733);\r\n    letter-spacing: 0px;\r\n    text-shadow: 1px 1px 2px rgba(56, 56, 56, 0.431);\r\n        }\r\n\r\n.indice[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n  font-family: 'Oswald', sans-serif;\r\ntext-transform: uppercase;\r\n  margin-bottom: 20px;\r\n  font-size: 28px;\r\n  letter-spacing: 1px;\r\n  color:white}\r\n\r\n  .ediMobil[_ngcontent-%COMP%] {display: none; background-color: #3E2800;margin-top:30px; margin-left:20px; margin-right: 20px ;}\r\n\r\n.textFont[_ngcontent-%COMP%]{\r\n    font-family: 'Yanone Kaffeesatz', sans-serif;\r\n    font-weight: 700;\r\n         }\r\n\r\n.mobile[_ngcontent-%COMP%]{display:none;}\r\n.textBarraNegra2[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n color:black;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n.textBarraNegra[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color:orange;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n     margin-top:-4px;\r\n     min-height: 130px; }\r\n\r\n\r\n.barra[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n    height: 35px;\r\n}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n  color:rgb(255, 255, 255) ;\r\n\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n}\r\n.barraInfo[_ngcontent-%COMP%]{background-color: orange; margin:20px; margin-top:0px ; text-align: right;}\r\n\r\n.editorial[_ngcontent-%COMP%] {color:rgb(255, 255, 255); padding: 20px; font-size: 30px;}\r\n.suscri[_ngcontent-%COMP%]{margin-top:4px; padding-left:30px;}\r\n.suscri2[_ngcontent-%COMP%]{color:black ;margin-top:0px; padding-right:20px}\r\n.suscribirse2[_ngcontent-%COMP%]{cursor: pointer;\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n   letter-spacing: 0.5px;\r\n  outline: none;\r\n  padding-top:7px;\r\n  padding-left: 10px;\r\n  font-size: 15px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n\r\nh5[_ngcontent-%COMP%]{ font-family: 'Abel', sans-serif;\r\nfont-size: 18px;\r\n}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n  \r\n  height: 290px;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n.editorialParrafo[_ngcontent-%COMP%]{\r\n text-align: left;\r\n   letter-spacing: 1px;\r\n  outline: none;\r\n  padding-top:0px;\r\n  padding-left: 20px;\r\n  font-size: 20px;\r\n  margin-bottom: 0px;\r\n  margin-right: 30px;\r\n  line-height:27px;\r\n}\r\n\r\n.logoCCAM[_ngcontent-%COMP%]{width: 125px; margin-top:236px;  margin-left: 107px; margin-right: 0px;}\r\n\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 60px;\r\n  float: left;\r\n  margin-top: 13px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 30px;\r\n  color:orange;\r\n\r\n}\r\n\r\n.numAnterior[_ngcontent-%COMP%]{\r\n  margin-left: 30px; margin-bottom: -10px; font-size: 25px;  margin-top: 10px; \r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{color:rgb(255, 187, 61) ; font-size: 13px;}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: -0.5px;\r\n  font-size:13px;\r\n    color:rgba(0, 0, 0, 0.527);\r\n  margin-right: 17px;\r\n  \r\n\r\n\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n  font-size: 18px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: 0px;\r\n  text-shadow: 1px 1px 3px black;\r\n  color:white;\r\n  line-height: 24px;\r\n  margin-top:20px;\r\n  padding:10px\r\n\r\n}\r\n.animaNav[_ngcontent-%COMP%]{transform: rotate(-90deg);  color:orange ; }\r\n\r\n\r\n.barraTexto[_ngcontent-%COMP%]{font-family: 'Oswald', sans-serif; color:white ; font-size: 12px; letter-spacing: 2px; }\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{background-color: #dfdfdf; }\r\n.logo[_ngcontent-%COMP%]{\r\n\r\n    margin-top:0px;\r\n    margin-bottom: 0px;\r\n    width:180px;\r\n    height:100%;\r\n    margin-left:-40px;\r\n    margin-top:5px;\r\n    margin-bottom: 15px;\r\n    object-fit: cover;\r\n\r\n\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    margin-right:110px;\r\n    position: absolute;\r\n    right: 95px;\r\n    top:2px;\r\n    outline: none;\r\n    width: 150px;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 3px;\r\n    }\r\n\r\n.textlogoCentro[_ngcontent-%COMP%]{\r\n    top:60px;\r\n    left: 118px;\r\n    position: absolute;\r\n }\r\n.textlogoAbajo[_ngcontent-%COMP%]{\r\n    top:96px;\r\n    left: 118px;\r\n    position: absolute;  }\r\n\r\n.anima[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0, 0, 0, 0.068);\r\n  border-radius: 10%;\r\n\r\n\r\n}\r\n.anima[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n  border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n.anima2[_ngcontent-%COMP%]:hover{\r\n  color:blanchedalmond;\r\n  background: rgba(219, 219, 219, 0.068);\r\n   border-radius: 10%;\r\n\r\n\r\n\r\n}\r\n\r\n.subefuente[_ngcontent-%COMP%]{margin-top: 20px;; margin-left: 30px;}\r\n.anima2[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n   border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n\r\n\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n  line-height: 30px !important;\r\n  height: 30px !important;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 255, 255);\r\n    height: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{margin:0px; padding:5px;margin-left: 15px}\r\n      li[_ngcontent-%COMP%] {\r\n          display: inline;\r\n         }\r\n\r\n         span[_ngcontent-%COMP%] {margin-left:4px}\r\n\r\n.menuTexto[_ngcontent-%COMP%] {\r\n        margin-top: 6px!important;\r\n        letter-spacing: 0.5px;\r\n\r\n\r\n        text-decoration: none;\r\n        float: left;\r\n        padding: 5px;\r\n        color: rgb(0, 0, 0); \r\n        margin-top:3px;\r\n        cursor: pointer;\r\n                }\r\n                .padleft[_ngcontent-%COMP%]{padding-left:10px!important}\r\n                .menuTexto[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n                  background-color: rgb(0, 0, 0); \r\n                  color:aliceblue;\r\n                  border-radius: 5px;\r\n                }\r\n\r\n\r\n\r\n.activo[_ngcontent-%COMP%]{\r\n              color: rgb(160, 24, 0);  \r\n\r\n             }\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: wrap;\r\n\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              @media (max-width:274){\r\n\r\n                .quitarTextoLogo[_ngcontent-%COMP%]{display:none }\r\n\r\n                .fondoEditorial[_ngcontent-%COMP%] {height: 320px;}\r\n                }\r\n\r\n\r\n\r\n\r\n            @media (max-width: 860px)\r\n              {\r\n                .quitar800[_ngcontent-%COMP%]{\r\n                display: none;}\r\n\r\n                  .textUp[_ngcontent-%COMP%]{\r\n                      font-size:40px;\r\n                     margin-top:-30px;\r\n                      margin-left: -25px;\r\n                      letter-spacing: -1px;}\r\n                .textDown[_ngcontent-%COMP%]{font-size:40px;\r\n                     margin-left: -25px;\r\n                       margin-top:-34px;\r\n                       letter-spacing: -1px}\r\n\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:3000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 33%; }\r\n            }\r\n\r\n\r\n\r\n\r\n            @media (max-width:2666px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 25%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 25%; }\r\n            }\r\n\r\n            @media (max-width:2402px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 24%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 24%; }\r\n            }\r\n\r\n            @media (max-width:2200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 20%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 20%; }\r\n            }\r\n\r\n            @media (max-width:2000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 18%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 18%; }\r\n            }\r\n\r\n            @media (max-width:1800px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 15%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 15%; }\r\n            }\r\n\r\n            @media (max-width:1600px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 13%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 13%; }\r\n            }\r\n            @media (max-width:1420px)\r\n            {\r\n              .logoCCAM[_ngcontent-%COMP%]{margin-left: 120px;}\r\n            }\r\n\r\n\r\n\r\n            @media (max-width:1400px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 8%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 8%; }\r\n            }\r\n\r\n            @media (max-width:1349px)\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-10px}\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:1200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%; }\r\n            }\r\n\r\n            @media (max-width:1120px)\r\n\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-5px}\r\n            }\r\n\r\n            @media (max-width:1050px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%;}\r\n            .logoCCAM[_ngcontent-%COMP%]{margin-left: 60px;}\r\n            .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-27px}\r\n            .quitar1000[_ngcontent-%COMP%]{display:none!important}\r\n\r\n            }\r\n\r\n            @media (max-width:766px){\r\n              .fondoEditorial[_ngcontent-%COMP%]{\r\n                height: 320px;}\r\n              \r\n              .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n              .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n             }\r\n\r\n@media (max-width:600px){\r\n  .numAnterior[_ngcontent-%COMP%]{font-size: 25px;margin-bottom: 0px!important; margin-top: 5px; margin-left:15px}\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 220px!important;}\r\n  .indice[_ngcontent-%COMP%]{display: none;}\r\n  .numeroEdicion[_ngcontent-%COMP%]{display: inline;}\r\n  .carousel[_ngcontent-%COMP%]{height:400px!important; }\r\n  .FlexContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n    width: 65%;\r\n    background-color: #2f1d58;\r\n    height: 80vh;\r\n    overflow: auto;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n@media (max-width:500px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 260px!important;}\r\n}\r\n\r\n@media (max-width:400px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 290px!important;}\r\n}\r\n\r\n@media (max-width:354px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 310px!important;}\r\n}\r\n\r\n@media (max-width:342px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 330px!important;}\r\n}\r\n@media (max-width:306px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 340px!important;}\r\n}\r\n@media (max-width:296px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 370px!important;}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.carousel[_ngcontent-%COMP%]{height:500px ; background-color: #7e5a1700;  margin-left:20px; margin-right: 20px ;}\r\n.cartelInicio[_ngcontent-%COMP%]{display:block}\r\n.FlexContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px;\r\n    background-color: lightblue;\r\n}\r\n  .editorialParrafo[_ngcontent-%COMP%]{font-size: 14px; line-height: 19px;\r\n  }\r\n\r\n  .publiMobile[_ngcontent-%COMP%]{display: block;}\r\np[_ngcontent-%COMP%]{font-size: 14px!important;}\r\n  .imagenLoading[_ngcontent-%COMP%]{ position:absolute; bottom:-20px;  right: 0px ; left:0px ;}\r\n.fondoEditorial[_ngcontent-%COMP%]{\r\n  height: 290px;\r\n      \r\n      object-fit: cover;\r\n      margin-left: 0px;\r\n      margin-right: 0pc;\r\n    }\r\n\r\n\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{margin-top:-30px}\r\n.fondo[_ngcontent-%COMP%]{background-image: none;background-color: white;}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 0px; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 0px; }\r\n.indice[_ngcontent-%COMP%]{font-size:25px;margin-left:15px; margin-bottom:10px;margin-top: 10px; }\r\n.banner[_ngcontent-%COMP%]{margin-left:20px; padding-right:40px; margin-top:30px}\r\n.subefuente[_ngcontent-%COMP%]{font-size: 20px;margin-left:20px!important; margin-top:-12px!important; margin-bottom: 10px;}\r\n.responsi[_ngcontent-%COMP%]{width: 110px!important;}\r\n.responsi2[_ngcontent-%COMP%]{width: 90px!important;}\r\n.barraInfo[_ngcontent-%COMP%]{margin:0px}\r\n.logo[_ngcontent-%COMP%]{width: 130px;  margin-left: -10px;}\r\n.mobile[_ngcontent-%COMP%]{display:inline}\r\n.cuerpo[_ngcontent-%COMP%]{background-color:orange;  padding-left: 0px;  margin-right: 0px;}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n.textUp[_ngcontent-%COMP%]{font-size:30px; margin-top:-45px; margin-left: -25px; letter-spacing: -1px;}\r\n.textDown[_ngcontent-%COMP%]{font-size:30px; margin-left: -25px;   margin-top:-55px; letter-spacing: -1px}\r\np[_ngcontent-%COMP%]{font-size:14px!important}\r\n\r\n.footer[_ngcontent-%COMP%]{margin-top: -227px!important;}\r\n.acom[_ngcontent-%COMP%]{margin-top: -61px!important;}\r\n  }\r\n\r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n    0% { transform: rotate(0) }\r\n    100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 83px;\r\n    height: 83px;\r\n    top: 8.5px;\r\n    left: 8.5px;\r\n    border-radius: 50%;\r\n    border: 13px solid #000;\r\n    border-color: #0a0a0a transparent #0a0a0a transparent;\r\n    animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 13px;\r\n    height: 13px;\r\n    top: -13px;\r\n    left: 22px;\r\n    background: #0a0a0a;\r\n    border-radius: 50%;\r\n    box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    left: -13px;\r\n    top: 22px;\r\n    box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    height: 84px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.84);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n\r\n.imgmobile[_ngcontent-%COMP%]{width:100px; margin-top:74px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7K0VBRytFO0NBRTlFOzs0RkFFMkY7Ozs7OztDQVMzRixZQUFZLGFBQWEsQ0FBQzs7Q0FFMUIsZUFBZSxhQUFhLENBQUM7QUFDOUIsTUFBTSxnQkFBZ0IsRUFBRTtBQUN4QixjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGFBQWEsWUFBWTtDQUN4QjtFQUNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0EsUUFBUSxZQUFZLEdBQUcsaUJBQWlCO0FBQ3hDO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQSxjQUFjLGFBQWEsQ0FBQzs7QUFFNUI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWO0FBQ0EsK0NBQStDO0FBQy9DO0NBQ0Msa0NBQWtDOzs7QUFHbkM7Ozs7O0FBS0EsR0FBRyxpQ0FBaUMsQ0FBQztBQUNyQztHQUNHLFVBQVU7R0FDVixjQUFjO0dBQ2QsZUFBZTtHQUNmLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckI7O0FBRUEsV0FBVyxnQkFBZ0I7RUFDekIsNENBQTRDLENBQUM7OztBQUcvQztHQUNHLFVBQVU7R0FDVixjQUFjO0dBQ2QsZUFBZTtHQUNmLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckI7Ozs7O0FBS0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZSxFQUFFLCtCQUErQjtJQUNoRCxtQkFBbUI7SUFDbkIsZ0RBQWdEO1FBQzVDOztBQUVSOztFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkMseUJBQXlCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsV0FBVyxhQUFhLEVBQUUseUJBQXlCLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDOztBQUU3RztJQUNJLDRDQUE0QztJQUM1QyxnQkFBZ0I7U0FDWDs7QUFFVCxRQUFRLFlBQVksQ0FBQztBQUNyQjtFQUNFLHVFQUF1RTtFQUN2RSxlQUFlO0NBQ2hCLFdBQVc7RUFDVixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVFQUF1RTtFQUN2RSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLG1FQUFtRTtBQUNuRTtLQUNLLGVBQWU7S0FDZixpQkFBaUIsRUFBRTs7QUFFeEIsNkRBQTZEO0FBQzdEO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7QUFDQSxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLGFBQWEsZUFBZTtFQUMxQix5QkFBeUI7O0VBRXpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQSxXQUFXLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7O0FBRXJGLFlBQVksd0JBQXdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztBQUNyRSxRQUFRLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztBQUMxQyxTQUFTLFlBQVksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCO0FBQ3hELGNBQWMsZUFBZTtFQUMzQix1RUFBdUU7R0FDdEUscUJBQXFCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBLElBQUksK0JBQStCO0FBQ25DLGVBQWU7QUFDZjs7QUFFQSxpQkFBaUIseUJBQXlCO0VBQ3hDLHVFQUF1RTtFQUN2RSxhQUFhO0dBQ1osaUJBQWlCO0dBQ2pCLGtCQUFrQjs7QUFFckI7Q0FDQyxnQkFBZ0I7R0FDZCxtQkFBbUI7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLFVBQVUsWUFBWSxFQUFFLGdCQUFnQixHQUFHLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDOztBQUVqRjs7RUFFRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEdBQUcsZ0JBQWdCOztBQUU3RTs7QUFFQSxFQUFFLHdCQUF3QixFQUFFLGVBQWUsQ0FBQzs7QUFFNUM7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztJQUNaLDBCQUEwQjtFQUM1QixrQkFBa0I7Ozs7QUFJcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Y7O0FBRUY7QUFDQSxVQUFVLHlCQUF5QixHQUFHLGFBQWEsRUFBRTs7O0FBR3JELFlBQVksaUNBQWlDLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRTs7QUFFbkcsZ0JBQWdCLHlCQUF5QixFQUFFO0FBQzNDOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7OztBQUdyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEI7O0FBRUo7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0IsR0FBRzs7QUFFekI7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCOzs7QUFHcEI7QUFDQTs7RUFFRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCOztBQUVGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztHQUNyQyxrQkFBa0I7Ozs7QUFJckI7O0FBRUEsWUFBWSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztBQUNqRDs7RUFFRSxzQ0FBc0M7R0FDckMsa0JBQWtCO0VBQ25COztBQUVGOzs7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUEsR0FBRyxVQUFVLEVBQUUsV0FBVyxDQUFDLGlCQUFpQjtNQUN0QztVQUNJLGVBQWU7U0FDaEI7O1NBRUEsTUFBTSxlQUFlOztBQUU5QjtRQUNRLHlCQUF5QjtRQUN6QixxQkFBcUI7OztRQUdyQixxQkFBcUI7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUIsRUFBRSxjQUFjO1FBQ25DLGNBQWM7UUFDZCxlQUFlO2dCQUNQO2dCQUNBLFNBQVMsMkJBQTJCO2dCQUNwQzs7a0JBRUUsOEJBQThCLEVBQUUsY0FBYztrQkFDOUMsZUFBZTtrQkFDZixrQkFBa0I7Z0JBQ3BCOzs7O0FBSWhCO2NBQ2Msc0JBQXNCLEdBQUcscUJBQXFCOzthQUUvQzthQUNBO2dCQUNHLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlOztnQkFFZixtQkFBbUI7Z0JBQ25CLHFCQUFxQjtjQUN2Qjs7Y0FFQTtnQkFDRSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsUUFBUTtjQUNWOztjQUVBO2dCQUNFLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixRQUFRO2NBQ1Y7O2NBRUE7O2dCQUVFLGlCQUFpQixhQUFhOztnQkFFOUIsaUJBQWlCLGFBQWEsQ0FBQztnQkFDL0I7Ozs7O1lBS0o7O2dCQUVJO2dCQUNBLGFBQWEsQ0FBQzs7a0JBRVo7c0JBQ0ksY0FBYztxQkFDZixnQkFBZ0I7c0JBQ2Ysa0JBQWtCO3NCQUNsQixvQkFBb0IsQ0FBQztnQkFDM0IsVUFBVSxjQUFjO3FCQUNuQixrQkFBa0I7dUJBQ2hCLGdCQUFnQjt1QkFDaEIsb0JBQW9COzs7WUFHL0I7OztZQUdBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOzs7OztZQUtBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCOztZQUVBO2FBQ0MsVUFBVSxnQkFBZ0IsRUFBRTtZQUM3QixTQUFTLGlCQUFpQixFQUFFO1lBQzVCO1lBQ0E7O2NBRUUsVUFBVSxrQkFBa0IsQ0FBQztZQUMvQjs7OztZQUlBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsRUFBRTtZQUMzQjs7WUFFQTs7Y0FFRSxRQUFRLFlBQVksR0FBRyxpQkFBaUI7O1lBRTFDOzs7WUFHQTthQUNDLFVBQVUsZUFBZSxFQUFFO1lBQzVCLFNBQVMsZ0JBQWdCLEVBQUU7WUFDM0I7O1lBRUE7OztjQUdFLFFBQVEsWUFBWSxHQUFHLGdCQUFnQjtZQUN6Qzs7WUFFQTthQUNDLFVBQVUsZUFBZSxFQUFFO1lBQzVCLFNBQVMsZ0JBQWdCLENBQUM7WUFDMUIsVUFBVSxpQkFBaUIsQ0FBQztZQUM1QixRQUFRLFlBQVksR0FBRyxpQkFBaUI7WUFDeEMsWUFBWSxzQkFBc0I7O1lBRWxDOztZQUVBO2NBQ0U7Z0JBQ0UsYUFBYSxDQUFDOztjQUVoQixjQUFjLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtjQUMxRixZQUFZLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7OzthQUd0Rzs7QUFFYjtFQUNFLGFBQWEsZUFBZSxDQUFDLDRCQUE0QixFQUFFLGVBQWUsRUFBRSxnQkFBZ0I7RUFDNUYsZ0JBQWdCLHVCQUF1QixDQUFDO0VBQ3hDLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLGVBQWUsZUFBZSxDQUFDO0VBQy9CLFVBQVUsc0JBQXNCLEVBQUU7RUFDbEM7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUdBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7QUFFQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7O0FBRUE7O0VBRUUsZ0JBQWdCLHVCQUF1QixDQUFDO0FBQzFDOztBQUVBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQztBQUNBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQztBQUNBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7Ozs7O0FBTUEsVUFBVSxhQUFhLEVBQUUsMkJBQTJCLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDN0YsY0FBYyxhQUFhO0FBQzNCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0VBQ0Usa0JBQWtCLGVBQWUsRUFBRSxpQkFBaUI7RUFDcEQ7O0VBRUEsYUFBYSxjQUFjLENBQUM7QUFDOUIsRUFBRSx5QkFBeUIsQ0FBQztFQUMxQixnQkFBZ0IsaUJBQWlCLEVBQUUsWUFBWSxHQUFHLFdBQVcsRUFBRSxTQUFTLENBQUM7QUFDM0U7RUFDRSxhQUFhO01BQ1QsaUVBQWlFO01BQ2pFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25COzs7O0FBSUosZ0JBQWdCLGdCQUFnQjtBQUNoQyxPQUFPLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO0FBQ3RELFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsU0FBUyxpQkFBaUIsRUFBRTtBQUM1QixRQUFRLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRTtBQUM5RSxRQUFRLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWU7QUFDN0QsWUFBWSxlQUFlLENBQUMsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUM7QUFDeEcsVUFBVSxzQkFBc0IsQ0FBQztBQUNqQyxXQUFXLHFCQUFxQixDQUFDO0FBQ2pDLFdBQVcsVUFBVTtBQUNyQixNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUN4QyxRQUFRLGNBQWM7QUFDdEIsUUFBUSx1QkFBdUIsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztBQUN4RSxXQUFXLFlBQVk7QUFDdkIsUUFBUSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7QUFDbkYsVUFBVSxjQUFjLEVBQUUsa0JBQWtCLElBQUksZ0JBQWdCLEVBQUUsb0JBQW9CO0FBQ3RGLEVBQUUsd0JBQXdCOztBQUUxQixRQUFRLDRCQUE0QixDQUFDO0FBQ3JDLE1BQU0sMkJBQTJCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxLQUFLLHFCQUFxQjtJQUMxQixPQUFPLDBCQUEwQjtFQUNuQztFQUNBLHVCQUF1QixpQ0FBaUM7RUFDeEQ7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscURBQXFEO0lBQ3JELDZDQUE2QztFQUMvQztFQUNBLHNDQUFzQywwQkFBMEI7RUFDaEU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQixFQUFFLG1CQUFtQjtFQUM1QztFQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtFQUNoRCxxQ0FBcUM7O0FBRXZDLFdBQVcsV0FBVyxFQUFFLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRyYWluK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1K0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFiZWwmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcclxuLypcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWx1bW5pK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbitTa2V0Y2g6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbmlvOndnaHRANzAwJmZhbWlseT1Kb2NrZXkrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2hhdStQaGlsb21lbmUrT25lJmRpc3BsYXk9c3dhcCcpOyAgKi9cclxuXHJcblxyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gLmltZ0FwYXJlY2V7ZGlzcGxheTogbm9uZTt9XHJcblxyXG4gLm51bWVyb0VkaWNpb257ZGlzcGxheTogbm9uZTt9XHJcbi5hY29te21hcmdpbi10b3A6MzcwcHg7IH1cclxuLmZ1ZW50ZVRlc3R7ICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7fVxyXG4ucHVibGlNb2JpbGV7ZGlzcGxheTpub25lfVxyXG4gLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgYWxpZ24taXRlbXM6IG5vcm1hbDtcclxuICBhbGlnbi1jb250ZW50OiBub3JtYWw7XHJcbn1cclxuLmxvZ29ubXt3aWR0aDogMTUwcHg7ICBtYXJnaW4tbGVmdDotMjBweH1cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMikge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jYXJ0ZWxJbmljaW97ZGlzcGxheTogbm9uZTt9XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMykge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCg0KSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG4vKiBURVhUTyBDRU5UUk8gQ1VMVFVSQUwgQVJHRU5USU5PIERFIE1PTlRBw4PCkUEgKi9cclxuLmN1ZXJwb3tcclxuIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNTEsIDUxLCA1MSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuaDF7Zm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO31cclxuLnF1aWVuZXNTb21vc3tcclxuICAgbGVmdDoyMjBweDtcclxuICAgZm9udC1zaXplOjEycHg7XHJcbiAgIG1hcmdpbi10b3A6MTJweDtcclxuICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb3RlclRleHR7bWFyZ2luLXRvcDotMTBweDtcclxuICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjt9XHJcblxyXG5cclxuLmZvcm1hclBhcnRle1xyXG4gICBsZWZ0OjM4MHB4O1xyXG4gICBmb250LXNpemU6MTJweDtcclxuICAgbWFyZ2luLXRvcDoxMnB4O1xyXG4gICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRleHRMb2dve1xyXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgY29sb3I6IHJnYmEoMTk0LCAxOCwgMTgsIDAuNzMzKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSg1NiwgNTYsIDU2LCAwLjQzMSk7XHJcbiAgICAgICAgfVxyXG5cclxuLmluZGljZXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjp3aGl0ZX1cclxuXHJcbiAgLmVkaU1vYmlsIHtkaXNwbGF5OiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyODAwO21hcmdpbi10b3A6MzBweDsgbWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4IDt9XHJcblxyXG4udGV4dEZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgIH1cclxuXHJcbi5tb2JpbGV7ZGlzcGxheTpub25lO31cclxuLnRleHRCYXJyYU5lZ3JhMiB7XHJcbiAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gY29sb3I6YmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxufVxyXG5cclxuLnRleHRCYXJyYU5lZ3JhIHtcclxuICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6b3JhbmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbn1cclxuXHJcbi8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbmRvdHJhc3BhcmVudGUucG5nJyk7ICovXHJcbi5mb25kb3tcclxuICAgICBtYXJnaW4tdG9wOi00cHg7XHJcbiAgICAgbWluLWhlaWdodDogMTMwcHg7IH1cclxuXHJcbi8qIGNvbG9yIHkgYWx0dXJhIGRlIGxhIHByaW1lcmEgYmFycmEgbmVncmEgY29uIGVsIGJ1c2NhZG9yICovXHJcbi5iYXJyYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4ubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4uc3VzY3JpYmlyc2V7Y3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KSA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5iYXJyYUluZm97YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBtYXJnaW46MjBweDsgbWFyZ2luLXRvcDowcHggOyB0ZXh0LWFsaWduOiByaWdodDt9XHJcblxyXG4uZWRpdG9yaWFsIHtjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7IHBhZGRpbmc6IDIwcHg7IGZvbnQtc2l6ZTogMzBweDt9XHJcbi5zdXNjcml7bWFyZ2luLXRvcDo0cHg7IHBhZGRpbmctbGVmdDozMHB4O31cclxuLnN1c2NyaTJ7Y29sb3I6YmxhY2sgO21hcmdpbi10b3A6MHB4OyBwYWRkaW5nLXJpZ2h0OjIwcHh9XHJcbi5zdXNjcmliaXJzZTJ7Y3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDo3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5cclxuaDV7IGZvbnQtZmFtaWx5OiAnQWJlbCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZvbmRvRWRpdG9yaWFsIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyODAwO1xyXG4gIC8qIG9iamVjdC1maXQ6IGNvdmVyOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy8xLnBuZycpOyAqL1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHh9XHJcblxyXG4uZWRpdG9yaWFsUGFycmFmb3tcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbn1cclxuXHJcbi5sb2dvQ0NBTXt3aWR0aDogMTI1cHg7IG1hcmdpbi10b3A6MjM2cHg7ICBtYXJnaW4tbGVmdDogMTA3cHg7IG1hcmdpbi1yaWdodDogMHB4O31cclxuXHJcbi5jYXBpdGFsOjpmaXJzdC1sZXR0ZXIge1xyXG5cclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjpvcmFuZ2U7XHJcblxyXG59XHJcblxyXG4ubnVtQW50ZXJpb3J7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IG1hcmdpbi1ib3R0b206IC0xMHB4OyBmb250LXNpemU6IDI1cHg7ICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuXHJcbn1cclxuXHJcbmF7Y29sb3I6cmdiKDI1NSwgMTg3LCA2MSkgOyBmb250LXNpemU6IDEzcHg7fVxyXG5cclxuLnRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgXHJcblxyXG5cclxufVxyXG5cclxuLnRpdHVsbyB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIHBhZGRpbmc6MTBweFxyXG5cclxufVxyXG4uYW5pbWFOYXZ7dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgIGNvbG9yOm9yYW5nZSA7IH1cclxuXHJcblxyXG4uYmFycmFUZXh0b3tmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7IGNvbG9yOndoaXRlIDsgZm9udC1zaXplOiAxMnB4OyBsZXR0ZXItc3BhY2luZzogMnB4OyB9XHJcblxyXG4uY29sb3JCYXJyYU1lbnV7YmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjsgfVxyXG4ubG9nb3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHdpZHRoOjE4MHB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDotNDBweDtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOTVweDtcclxuICAgIHRvcDoycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuXHJcbi50ZXh0bG9nb0NlbnRyb3tcclxuICAgIHRvcDo2MHB4O1xyXG4gICAgbGVmdDogMTE4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB9XHJcbi50ZXh0bG9nb0FiYWpve1xyXG4gICAgdG9wOjk2cHg7XHJcbiAgICBsZWZ0OiAxMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIH1cclxuXHJcbi5hbmltYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcblxyXG5cclxufVxyXG4uYW5pbWE6YWN0aXZlIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KVxyXG5cclxufVxyXG5cclxuLmFuaW1hMjpob3ZlcntcclxuICBjb2xvcjpibGFuY2hlZGFsbW9uZDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxOSwgMjE5LCAyMTksIDAuMDY4KTtcclxuICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uc3ViZWZ1ZW50ZXttYXJnaW4tdG9wOiAyMHB4OzsgbWFyZ2luLWxlZnQ6IDMwcHg7fVxyXG4uYW5pbWEyOmFjdGl2ZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxudWx7bWFyZ2luOjBweDsgcGFkZGluZzo1cHg7bWFyZ2luLWxlZnQ6IDE1cHh9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgc3BhbiB7bWFyZ2luLWxlZnQ6NHB4fVxyXG5cclxuLm1lbnVUZXh0byB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4IWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG5cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qQ29sb3IgdGV4dG8qL1xyXG4gICAgICAgIG1hcmdpbi10b3A6M3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWRsZWZ0e3BhZGRpbmctbGVmdDoxMHB4IWltcG9ydGFudH1cclxuICAgICAgICAgICAgICAgIC5tZW51VGV4dG8gOmFjdGl2ZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qQ29sb3IgdGV4dG8qL1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjphbGljZWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuLmFjdGl2b3tcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2MCwgMjQsIDApOyAgLypDb2xvciB0ZXh0by1hY3Rpdm8qL1xyXG5cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Mjc0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAucXVpdGFyVGV4dG9Mb2dve2Rpc3BsYXk6bm9uZSB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvbmRvRWRpdG9yaWFsIHtoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAucXVpdGFyODAwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudGV4dFVwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbiAgICAgICAgICAgICAgICAudGV4dERvd257Zm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDozMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNjY2cHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNDAycHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI0JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI0JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxODAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MjBweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogMTIwcHg7fVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MDBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogOCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiA4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMzQ5cHgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi0xMHB4fVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMDBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMTIwcHgpXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLmxvZ29ubXt3aWR0aDogMTUwcHg7ICBtYXJnaW4tbGVmdDotNXB4fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMDUwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDAlOyB9XHJcbiAgICAgICAgICAgIC5tYXJnZW5Se21hcmdpbi1yaWdodDogMCU7fVxyXG4gICAgICAgICAgICAubG9nb0NDQU17bWFyZ2luLWxlZnQ6IDYwcHg7fVxyXG4gICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi0yN3B4fVxyXG4gICAgICAgICAgICAucXVpdGFyMTAwMHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NzY2cHgpe1xyXG4gICAgICAgICAgICAgIC5mb25kb0VkaXRvcmlhbHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHg7fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5pbWdTb2JyYW50ZXsgcGFkZGluZzoyMHB4OyBwYWRkaW5nLWxlZnQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuICAgICAgICAgICAgICAuaW1nQXBhcmVjZXtkaXNwbGF5OmJsb2NrOyBwYWRkaW5nOiAzMHB4OyBtYXJnaW4tdG9wOi0xMHB4OyBwYWRkaW5nLWxlZnQ6IDEzcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuXHJcblxyXG4gICAgICAgICAgICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIC5udW1BbnRlcmlvcntmb250LXNpemU6IDI1cHg7bWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDsgbWFyZ2luLXRvcDogNXB4OyBtYXJnaW4tbGVmdDoxNXB4fVxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDIyMHB4IWltcG9ydGFudDt9XHJcbiAgLmluZGljZXtkaXNwbGF5OiBub25lO31cclxuICAubnVtZXJvRWRpY2lvbntkaXNwbGF5OiBpbmxpbmU7fVxyXG4gIC5jYXJvdXNlbHtoZWlnaHQ6NDAwcHghaW1wb3J0YW50OyB9XHJcbiAgLkZsZXhDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMWQ1ODtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMjYwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAyOTBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDozNTRweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDMxMHB4IWltcG9ydGFudDt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjM0MnB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMzMwcHghaW1wb3J0YW50O31cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozMDZweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDM0MHB4IWltcG9ydGFudDt9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6Mjk2cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzNzBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNhcm91c2Vse2hlaWdodDo1MDBweCA7IGJhY2tncm91bmQtY29sb3I6ICM3ZTVhMTcwMDsgIG1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMjBweCA7fVxyXG4uY2FydGVsSW5pY2lve2Rpc3BsYXk6YmxvY2t9XHJcbi5GbGV4Q29udGFpbmVyIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuICAuZWRpdG9yaWFsUGFycmFmb3tmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLnB1YmxpTW9iaWxle2Rpc3BsYXk6IGJsb2NrO31cclxucHtmb250LXNpemU6IDE0cHghaW1wb3J0YW50O31cclxuICAuaW1hZ2VuTG9hZGluZ3sgcG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTotMjBweDsgIHJpZ2h0OiAwcHggOyBsZWZ0OjBweCA7fVxyXG4uZm9uZG9FZGl0b3JpYWx7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9uZG9FZGl0b3JpYWwuanBnJyk7ICovXHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBwYztcclxuICAgIH1cclxuXHJcblxyXG5cclxuLmNvbG9yQmFycmFNZW51e21hcmdpbi10b3A6LTMwcHh9XHJcbi5mb25kb3tiYWNrZ3JvdW5kLWltYWdlOiBub25lO2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuLm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAwcHg7IH1cclxuLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwcHg7IH1cclxuLmluZGljZXtmb250LXNpemU6MjVweDttYXJnaW4tbGVmdDoxNXB4OyBtYXJnaW4tYm90dG9tOjEwcHg7bWFyZ2luLXRvcDogMTBweDsgfVxyXG4uYmFubmVye21hcmdpbi1sZWZ0OjIwcHg7IHBhZGRpbmctcmlnaHQ6NDBweDsgbWFyZ2luLXRvcDozMHB4fVxyXG4uc3ViZWZ1ZW50ZXtmb250LXNpemU6IDIwcHg7bWFyZ2luLWxlZnQ6MjBweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6LTEycHghaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLnJlc3BvbnNpe3dpZHRoOiAxMTBweCFpbXBvcnRhbnQ7fVxyXG4ucmVzcG9uc2kye3dpZHRoOiA5MHB4IWltcG9ydGFudDt9XHJcbi5iYXJyYUluZm97bWFyZ2luOjBweH1cclxuLmxvZ297d2lkdGg6IDEzMHB4OyAgbWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLm1vYmlsZXtkaXNwbGF5OmlubGluZX1cclxuLmN1ZXJwb3tiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTsgIHBhZGRpbmctbGVmdDogMHB4OyAgbWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG4ucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLnRleHRVcHtmb250LXNpemU6MzBweDsgbWFyZ2luLXRvcDotNDVweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbi50ZXh0RG93bntmb250LXNpemU6MzBweDsgbWFyZ2luLWxlZnQ6IC0yNXB4OyAgIG1hcmdpbi10b3A6LTU1cHg7IGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5we2ZvbnQtc2l6ZToxNHB4IWltcG9ydGFudH1cclxuXHJcbi5mb290ZXJ7bWFyZ2luLXRvcDogLTIyN3B4IWltcG9ydGFudDt9XHJcbi5hY29te21hcmdpbi10b3A6IC02MXB4IWltcG9ydGFudDt9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94IWltcG9ydGFudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogODNweDtcclxuICAgIHRvcDogOC41cHg7XHJcbiAgICBsZWZ0OiA4LjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhIHRyYW5zcGFyZW50ICMwYTBhMGEgdHJhbnNwYXJlbnQ7XHJcbiAgICBhbmltYXRpb246IGxkaW8tejdmdTZlMWRlbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgbGVmdDogMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDcwcHggMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIGRpdjphZnRlciB7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIHRvcDogMjJweDtcclxuICAgIGJveC1zaGFkb3c6IDcwcHggMCAwIDAgIzBhMGEwYTtcclxuICB9XHJcbiAgLmxvYWRpbmdpby1zcGlubmVyLWR1YWwtcmluZy14ZzF2bnJmMmI2byB7XHJcbiAgICB3aWR0aDogODRweDtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDAuODQpO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuXHJcbi5pbWdtb2JpbGV7d2lkdGg6MTAwcHg7IG1hcmdpbi10b3A6NzRweH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 36793:
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/lateral-relacionado/lateral-relacionado.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LateralRelacionadoComponent": () => (/* binding */ LateralRelacionadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);



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

/***/ 56485:
/*!****************************************************!*\
  !*** ./src/app/componentes/main/main.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carousel-revista/carousel-revista.component */ 23256);
/* harmony import */ var _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../a-portada/a-portada.component */ 72517);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 57363);
/* harmony import */ var _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../publicidadx3/publicidadx3.component */ 65758);
/* harmony import */ var _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../publicidad-horizontal/publicidad-horizontal.component */ 72878);







function MainComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " NRO. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "MES: marzo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "A\u00D1O: 2222");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-a-portada")(16, "app-publicidadx3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u00CDNDICE - MARZOZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "app-publicidad-horizontal")(21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9)(23, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " EDITORIAL - NRO 33 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 11)(26, "div")(27, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "VENI Y SUMATE A LA RED CULTURAL DEL CCAM Los invitamos al desaf\u00EDo de poner en valor la cultura de monta\u00F1a, contactate y sumate a la aventura!! Si queres formarte como monta\u00F1ista, incorporarte a la Escuela de Entrenamientos de Monta\u00F1a. Comit\u00E9 de Redacci\u00F3n: Alex G. Martin, Presidente del CCAM Direcci\u00F3n: Cristina Barraza Equipo editorial: A. Natalia Fern\u00E1ndez Ju\u00E1rez, Norma Garc\u00EDa, Claudia Iturralde, Marcelo Lisnovsky, Jorge Morena, German Mois\u00E9s, Ra\u00FAl Torres, Carlos Montero");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br")(30, "br")(31, "br")(32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 13)(34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "app-carousel-revista");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class MainComponent {
  constructor() {
    this.loader = false;
  }
}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)();
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  decls: 2,
  vars: 1,
  consts: [["class", "div-principal", 4, "ngIf"], [1, "div-principal"], [1, "quitar600", 2, "margin-right", "25px", "text-align", "right", "color", "white", "margin-top", "-7px"], [2, "font-size", "15px", "font-weight", "800", "padding-top", "10px"], [2, "margin-left", "2px"], [2, "margin-left", "5px", "text-transform", "uppercase"], [1, "portadaAcomoda"], [1, "indice", 2, "text-transform", "uppercase"], [2, "background-color", "rgb(59, 52, 0, 1)"], [2, "color", "white", "background-color", "orange", "margin-top", "10px"], [1, "indice", "subefuente", "fuenteTest", 2, "margin-top", "20px", "text-transform", "uppercase"], [1, "fondoEditorial", 2, "background-image", "url('../../../assets/1.png')", "background-size", "cover"], [1, "editorialParrafo", 2, "margin-top", "10px"], [1, "row", "quitar600", 2, "margin-top", "30px", "padding-right", "35px"], [1, "col-4", "xl-12"], [1, "col-4"], [1, "col-4", 2, "padding-right", "0px"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MainComponent_div_1_Template, 43, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _carousel_revista_carousel_revista_component__WEBPACK_IMPORTED_MODULE_0__.CarouselRevistaComponent, _a_portada_a_portada_component__WEBPACK_IMPORTED_MODULE_1__.APortadaComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _publicidadx3_publicidadx3_component__WEBPACK_IMPORTED_MODULE_3__.Publicidadx3Component, _publicidad_horizontal_publicidad_horizontal_component__WEBPACK_IMPORTED_MODULE_4__.PublicidadHorizontalComponent],
  styles: [".portadaAcomoda[_ngcontent-%COMP%]{margin-left: 10px;}\r\n.div-principal[_ngcontent-%COMP%]{\r\n    margin-left: -0px;\r\n    margin-right: -0px;\r\n    background-color: orange;\r\n    border-left: 20px solid rgb(43, 43, 43);\r\n    border-right: 20px solid rgb(44, 44, 44);}\r\n  \r\n  .indice[_ngcontent-%COMP%]{\r\n    margin-left:30px;\r\n    margin-top:-10px;\r\n    margin-bottom: 20px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    letter-spacing: -1px;\r\n    color: white;\r\n    text-shadow: 2px 2px 8px black;}\r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding:10px; padding-left:0px; padding-right: 0px;}\r\n  \r\n    .fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n  \r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n   .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n      letter-spacing: 1px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 20px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  \r\n  \r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n  0% { transform: rotate(0) }\r\n  100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 83px;\r\n  height: 83px;\r\n  top: 8.5px;\r\n  left: 8.5px;\r\n  border-radius: 50%;\r\n  border: 13px solid #000;\r\n  border-color: #0a0a0a transparent #0a0a0a transparent;\r\n  animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 13px;\r\n  height: 13px;\r\n  top: -13px;\r\n  left: 22px;\r\n  background: #0a0a0a;\r\n  border-radius: 50%;\r\n  box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n  left: -13px;\r\n  top: 22px;\r\n  box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n  width: 84px;\r\n  height: 84px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform: translateZ(0) scale(0.84);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n  \r\n  \r\n  \r\n  @media (max-width: 600px)\r\n  {\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  \r\n  \r\n  \r\n  \r\n  .indice[_ngcontent-%COMP%]{\r\n  margin-left:10px;\r\n  margin-top:15px;\r\n  font-size: 20px\r\n  ;}\r\n  \r\n  \r\n  \r\n  .editorialParrafo[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    letter-spacing: 0px;\r\n     outline: none;\r\n     padding-top:0px;\r\n     padding-left: 20px;\r\n     font-size: 16px;\r\n     margin-bottom: 0px;\r\n     margin-right: 30px;\r\n     line-height:27px;\r\n   }\r\n  \r\n  .portadaAcomoda[_ngcontent-%COMP%]{padding: 0px;}\r\n  }\r\n  \r\n  \r\n  \r\n  @media (max-width: 700px)\r\n  {\r\n  .borde[_ngcontent-%COMP%]{margin-bottom: 30px;}\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGlCQUFpQixDQUFDO0FBQ2xDO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QyxDQUFDOztFQUUzQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osOEJBQThCLENBQUM7O0VBRWpDLGdCQUFnQixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7O0lBRWpFLGlCQUFpQix5QkFBeUI7O0dBRTNDLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEI7SUFDQyxnQkFBZ0I7TUFDZCxtQkFBbUI7S0FDcEIsYUFBYTtLQUNiLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsZUFBZTtLQUNmLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsZ0JBQWdCO0dBQ2xCOzs7O0VBSUQ7RUFDQSxLQUFLLHFCQUFxQjtFQUMxQixPQUFPLDBCQUEwQjtFQUNqQztFQUNBLHVCQUF1QixpQ0FBaUM7RUFDeEQ7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscURBQXFEO0VBQ3JELDZDQUE2QztFQUM3QztFQUNBLHNDQUFzQywwQkFBMEI7RUFDaEU7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEI7RUFDQTtFQUNBLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QjtFQUNBO0VBQ0EsV0FBVztFQUNYLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUI7RUFDQTtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7RUFDQTtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFCQUFxQixFQUFFLG1CQUFtQjtFQUMxQztFQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtFQUNoRCxxQ0FBcUM7Ozs7RUFJckM7O0VBRUEsV0FBVyxZQUFZOzs7OztFQUt2QjtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Y7RUFDQSxDQUFDOzs7O0VBSUQ7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0tBQ2xCLGFBQWE7S0FDYixlQUFlO0tBQ2Ysa0JBQWtCO0tBQ2xCLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsa0JBQWtCO0tBQ2xCLGdCQUFnQjtHQUNsQjs7RUFFRCxnQkFBZ0IsWUFBWSxDQUFDO0VBQzdCOzs7O0VBSUE7O0VBRUEsT0FBTyxtQkFBbUIsQ0FBQztFQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0YWRhQWNvbW9kYXttYXJnaW4tbGVmdDogMTBweDt9XHJcbi5kaXYtcHJpbmNpcGFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0wcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0wcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiKDQ0LCA0NCwgNDQpO31cclxuICBcclxuICAuaW5kaWNle1xyXG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IGJsYWNrO31cclxuICBcclxuICAucG9ydGFkYUFjb21vZGF7cGFkZGluZzoxMHB4OyBwYWRkaW5nLWxlZnQ6MHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7fVxyXG4gIFxyXG4gICAgLmZvbmRvRWRpdG9yaWFsIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyODAwO1xyXG4gIFxyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4fVxyXG4gICAuZWRpdG9yaWFsUGFycmFmb3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OjI3cHg7XHJcbiAgIH1cclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGxkaW8tejdmdTZlMWRlbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3ghaW1wb3J0YW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDgzcHg7XHJcbiAgaGVpZ2h0OiA4M3B4O1xyXG4gIHRvcDogOC41cHg7XHJcbiAgbGVmdDogOC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTNweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzBhMGEwYSB0cmFuc3BhcmVudCAjMGEwYTBhIHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRpby16N2Z1NmUxZGVuIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgeyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YmVmb3JlLCAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCA3MHB4IDAgMCAjMGEwYTBhO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXY6YWZ0ZXIge1xyXG4gIGxlZnQ6IC0xM3B4O1xyXG4gIHRvcDogMjJweDtcclxuICBib3gtc2hhZG93OiA3MHB4IDAgMCAwICMwYTBhMGE7XHJcbiAgfVxyXG4gIC5sb2FkaW5naW8tc3Bpbm5lci1kdWFsLXJpbmcteGcxdm5yZjJiNm8ge1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgwLjg0KTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XHJcbiAgLyogZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gKi9cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXHJcbiAge1xyXG4gIC5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5pbmRpY2V7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4XHJcbiAgO31cclxuICBcclxuICBcclxuICBcclxuICAuZWRpdG9yaWFsUGFycmFmb3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICBsaW5lLWhlaWdodDoyN3B4O1xyXG4gICB9XHJcbiAgXHJcbiAgLnBvcnRhZGFBY29tb2Rhe3BhZGRpbmc6IDBweDt9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweClcclxuICB7XHJcbiAgLmJvcmRle21hcmdpbi1ib3R0b206IDMwcHg7fVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 80959:
/*!**********************************************************!*\
  !*** ./src/app/componentes/portada/portada.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortadaComponent": () => (/* binding */ PortadaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

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
  consts: [[1, "div-principal"], ["src", "../../../assets/tapa.png", "alt", "", 1, "imagenPortada", "anima"], [1, "imgLogo"], ["src", "../../../assets/NM blanco.png", "alt", "", 1, "fade-in-image", "logo"], [1, "cuadroTitulo"], [1, "categoria", 2, "margin-top", "20px"], [1, "titulo", 2, "margin-right", "10px", "margin-top", "-5px"], [1, "subtitulo", "quitar1300"]],
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
  styles: [".div-principal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0px;\r\n}\r\n\r\n.imagenPortada[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  padding-left: 20px;\r\n  margin-top: -30px;\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 600px;\r\n  object-fit: cover;\r\n\r\n}\r\n\r\n.imgLogo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 3%;\r\n  filter: drop-shadow(2px 4px 3px black);\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n  margin-top: -5px;\r\n  text-shadow: 1px 1px 3px #000000;\r\n  margin-left: 20px;\r\n  color: white;\r\n  text-align: left;\r\n  font-size: 35px;\r\n  font-weight: 800;\r\n  line-height: 40px;\r\n  min-height: 100%;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: rgb(255, 255, 255);\r\n  line-height: 30px;\r\n  font-weight: 200;\r\n  margin-top: 0px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.categoria[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: orange;\r\n  margin-left: 20px;\r\n  margin-top: 14px;\r\n  text-shadow: 5px 5px 20px black;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n}\r\n\r\n\r\n.h1Logo[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n  margin-left: 2px;\r\n  margin-top: 269px;\r\n  color: white;\r\n  text-shadow: 1px 1px 3px black;\r\n  background-color: orange;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n.lugarLogo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -115px;\r\n  left: 3%;\r\n}\r\n\r\n\r\n.cuadroTitulo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  min-height: 167px;\r\n  top: 383px;\r\n  left: 20px;\r\n  right: 20px;\r\n  background-color: rgba(0, 0, 0, 0.603);\r\n}\r\n\r\n.fade-in-image[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_fadeIn 2s;\r\n  -webkit-animation: _ngcontent-%COMP%_fadeIn 2s;\r\n  -moz-animation: fadeIn 2s;\r\n  -o-animation: fadeIn 2s;\r\n  -ms-animation: fadeIn 2s;\r\n}\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1300px) {\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .quitar1300[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  .titulo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    line-height: 28px;\r\n    margin-left: 10px;\r\n  }\r\n  .quitar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .categoria[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 160px;\r\n    margin-top: 20px;\r\n    margin-left: -5x;\r\n  }\r\n\r\n  .cuadroTitulo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    min-height: 123px;\r\n    top: 248px;\r\n    left: 0px;\r\n    right: 0px;\r\n    background-color: rgba(0, 0, 0, 0.603);\r\n  }\r\n\r\n  .titular[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    line-height: 28px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n\r\n  .imagenPortada[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    padding-left: 0px;\r\n    margin-top: 0px;\r\n    padding-top: 0px !important;\r\n    object-fit: cover;\r\n    height: 370px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcG9ydGFkYS9wb3J0YWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLCtCQUErQjs7QUFFakM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOzs7O0FBd0NBLGtCQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7O0VBR0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1wcmluY2lwYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZW5Qb3J0YWRhIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLmltZ0xvZ28ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDMlO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCAzcHggYmxhY2spO1xyXG59XHJcbi50aXR1bG8ge1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN1YnRpdHVsbyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcmlhIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCAyMHB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyogRXN0aWxvcyBkZWwgbG9nbyAqL1xyXG4uaDFMb2dvIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tdG9wOiAyNjlweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBwb3NpY2lvbiBkZWwgbG9nbyBwbmcgKi9cclxuLmx1Z2FyTG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTExNXB4O1xyXG4gIGxlZnQ6IDMlO1xyXG59XHJcblxyXG4vKiBSZWN1YWRybyBuZWdybyBkZSBsYSBwb3J0YWRhICovXHJcbi5jdWFkcm9UaXR1bG8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4taGVpZ2h0OiAxNjdweDtcclxuICB0b3A6IDM4M3B4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYwMyk7XHJcbn1cclxuXHJcbi5mYWRlLWluLWltYWdlIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qIE1FRElBIFFVRVJJRVMgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5xdWl0YXIxMzAwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnF1aXRhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2F0ZWdvcmlhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXg7XHJcbiAgfVxyXG5cclxuICAuY3VhZHJvVGl0dWxvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEyM3B4O1xyXG4gICAgdG9wOiAyNDhweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjAzKTtcclxuICB9XHJcblxyXG4gIC50aXR1bGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltYWdlblBvcnRhZGEge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 72878:
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/publicidad-horizontal/publicidad-horizontal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicidadHorizontalComponent": () => (/* binding */ PublicidadHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class PublicidadHorizontalComponent {}
PublicidadHorizontalComponent.ɵfac = function PublicidadHorizontalComponent_Factory(t) {
  return new (t || PublicidadHorizontalComponent)();
};
PublicidadHorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PublicidadHorizontalComponent,
  selectors: [["app-publicidad-horizontal"]],
  decls: 3,
  vars: 0,
  consts: [["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-taller.html", "target", "_blank", 1, "quitar600"], ["src", "../../../assets/Indice Cartel.png", "width", "100%", "alt", ""]],
  template: function PublicidadHorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    }
  },
  styles: ["@media (max-width:600px){\r\n\r\n    .quitar600[_ngcontent-%COMP%]{display:none}\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHVibGljaWRhZC1ob3Jpem9udGFsL3B1YmxpY2lkYWQtaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxXQUFXLFlBQVk7O0VBRXpCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuXHJcbiAgICAucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuXHJcbiAgfVxyXG4gIFxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 65758:
/*!********************************************************************!*\
  !*** ./src/app/componentes/publicidadx3/publicidadx3.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Publicidadx3Component": () => (/* binding */ Publicidadx3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class Publicidadx3Component {}
Publicidadx3Component.ɵfac = function Publicidadx3Component_Factory(t) {
  return new (t || Publicidadx3Component)();
};
Publicidadx3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Publicidadx3Component,
  selectors: [["app-publicidadx3"]],
  decls: 10,
  vars: 0,
  consts: [[1, "flex-container", 2, "margin-right", "12px", "margin-left", "2px"], [1, "flex-items"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/suscripcion.html", "target", "_blank"], ["src", "../../../assets/banner Noticias.png", "alt", "", "width", "100%", 2, "height", "auto", "padding", "10px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-entrenamiento.html", "target", "_blank"], ["src", "../../../assets/otros.png", "width", "100%", "alt", "", 2, "height", "auto!important", "padding", "10px"], ["href", "http://www.culturademontania.org.ar/Suscripcion-form/inscripcion-equipo.html", "target", "_blank"], ["src", "../../../assets/formarparte.png", "width", "100%", "alt", "", 2, "height", "auto!important", "padding", "10px"]],
  template: function Publicidadx3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Jockey+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap);@import url(https://fonts.googleapis.com/css2?family=Train+One&display=swap);@import url(https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap);@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab:wght@900&display=swap);@import url(https://fonts.googleapis.com/css2?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);@import url(https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap);\r\n \r\n\r\n\r\n\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n  align-content: stretch;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n .imgAparece[_ngcontent-%COMP%]{display: none;}\r\n\r\n .numeroEdicion[_ngcontent-%COMP%]{display: none;}\r\n.acom[_ngcontent-%COMP%]{margin-top:370px; }\r\n.fuenteTest[_ngcontent-%COMP%]{  font-family: 'Oswald', sans-serif;}\r\n.publiMobile[_ngcontent-%COMP%]{display:none}\r\n .flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: normal;\r\n  align-items: normal;\r\n  align-content: normal;\r\n}\r\n.logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-20px}\r\n.flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cartelInicio[_ngcontent-%COMP%]{display: none;}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(3) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.flex-items[_ngcontent-%COMP%]:nth-child(4) {\r\n  display: block;\r\n  flex-grow: 0;\r\n  flex-shrink: 1;\r\n  flex-basis: auto;\r\n  align-self: auto;\r\n  order: 0;\r\n}\r\n\r\n.cuerpo[_ngcontent-%COMP%]{\r\n background-color:  rgb(51, 51, 51);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{font-family: 'Roboto Slab', serif;}\r\n.quienesSomos[_ngcontent-%COMP%]{\r\n   left:220px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n.foterText[_ngcontent-%COMP%]{margin-top:-10px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;}\r\n\r\n\r\n.formarParte[_ngcontent-%COMP%]{\r\n   left:380px;\r\n   font-size:12px;\r\n   margin-top:12px;\r\n   color:rgb(255, 255, 255);\r\n   position: absolute;\r\n}\r\n\r\n\r\n\r\n\r\n.textLogo[_ngcontent-%COMP%]{\r\n    font-family: 'Teko', sans-serif;\r\n    font-size: 40px; color: rgba(194, 18, 18, 0.733);\r\n    letter-spacing: 0px;\r\n    text-shadow: 1px 1px 2px rgba(56, 56, 56, 0.431);\r\n        }\r\n\r\n.indice[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 20px;\r\n  font-family: 'Oswald', sans-serif;\r\ntext-transform: uppercase;\r\n  margin-bottom: 20px;\r\n  font-size: 28px;\r\n  letter-spacing: 1px;\r\n  color:white}\r\n\r\n  .ediMobil[_ngcontent-%COMP%] {display: none; background-color: #3E2800;margin-top:30px; margin-left:20px; margin-right: 20px ;}\r\n\r\n.textFont[_ngcontent-%COMP%]{\r\n    font-family: 'Yanone Kaffeesatz', sans-serif;\r\n    font-weight: 700;\r\n         }\r\n\r\n.mobile[_ngcontent-%COMP%]{display:none;}\r\n.textBarraNegra2[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n color:black;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n.textBarraNegra[_ngcontent-%COMP%] {\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 15px;\r\n  color:orange;\r\n  cursor: pointer;\r\n  padding-top:5px;\r\n}\r\n\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n     margin-top:-4px;\r\n     min-height: 130px; }\r\n\r\n\r\n.barra[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n    height: 35px;\r\n}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n.suscribirse[_ngcontent-%COMP%]{cursor: pointer;\r\n  color:rgb(255, 255, 255) ;\r\n\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n}\r\n.barraInfo[_ngcontent-%COMP%]{background-color: orange; margin:20px; margin-top:0px ; text-align: right;}\r\n\r\n.editorial[_ngcontent-%COMP%] {color:rgb(255, 255, 255); padding: 20px; font-size: 30px;}\r\n.suscri[_ngcontent-%COMP%]{margin-top:4px; padding-left:30px;}\r\n.suscri2[_ngcontent-%COMP%]{color:black ;margin-top:0px; padding-right:20px}\r\n.suscribirse2[_ngcontent-%COMP%]{cursor: pointer;\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n   letter-spacing: 0.5px;\r\n  outline: none;\r\n  padding-top:7px;\r\n  padding-left: 10px;\r\n  font-size: 15px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n\r\nh5[_ngcontent-%COMP%]{ font-family: 'Abel', sans-serif;\r\nfont-size: 18px;\r\n}\r\n\r\n.fondoEditorial[_ngcontent-%COMP%] {background-color: #3E2800;\r\n  \r\n  height: 290px;\r\n   margin-left: 20px;\r\n   margin-right: 20px}\r\n\r\n.editorialParrafo[_ngcontent-%COMP%]{\r\n text-align: left;\r\n   letter-spacing: 1px;\r\n  outline: none;\r\n  padding-top:0px;\r\n  padding-left: 20px;\r\n  font-size: 20px;\r\n  margin-bottom: 0px;\r\n  margin-right: 30px;\r\n  line-height:27px;\r\n}\r\n\r\n.logoCCAM[_ngcontent-%COMP%]{width: 125px; margin-top:380px;  margin-left: 112px; margin-right: 0px;}\r\n\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 60px;\r\n  float: left;\r\n  margin-top: 13px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 30px;\r\n  color:orange;\r\n\r\n}\r\n\r\n.numAnterior[_ngcontent-%COMP%]{\r\n  margin-left: 30px; margin-bottom: -10px; font-size: 25px;  margin-top: 10px; \r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{color:rgb(255, 187, 61) ; font-size: 13px;}\r\n\r\n.texto[_ngcontent-%COMP%]{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: -0.5px;\r\n  font-size:13px;\r\n    color:rgba(0, 0, 0, 0.527);\r\n  margin-right: 17px;\r\n  \r\n\r\n\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n\r\n  font-size: 18px;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight: 800;\r\n  line-height: 25px;\r\n  letter-spacing: 0px;\r\n  text-shadow: 1px 1px 3px black;\r\n  color:white;\r\n  line-height: 24px;\r\n  margin-top:20px;\r\n  padding:10px\r\n\r\n}\r\n.animaNav[_ngcontent-%COMP%]{transform: rotate(-90deg);  color:orange ; }\r\n\r\n\r\n.barraTexto[_ngcontent-%COMP%]{font-family: 'Oswald', sans-serif; color:white ; font-size: 12px; letter-spacing: 2px; }\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{background-color: #dfdfdf; }\r\n.logo[_ngcontent-%COMP%]{\r\n\r\n    margin-top:0px;\r\n    margin-bottom: 0px;\r\n    width:180px;\r\n    height:100%;\r\n    margin-left:-40px;\r\n    margin-top:5px;\r\n    margin-bottom: 15px;\r\n    object-fit: cover;\r\n\r\n\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    margin-right:110px;\r\n    position: absolute;\r\n    right: 95px;\r\n    top:2px;\r\n    outline: none;\r\n    width: 150px;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    border-radius: 3px;\r\n    }\r\n\r\n.textlogoCentro[_ngcontent-%COMP%]{\r\n    top:60px;\r\n    left: 118px;\r\n    position: absolute;\r\n }\r\n.textlogoAbajo[_ngcontent-%COMP%]{\r\n    top:96px;\r\n    left: 118px;\r\n    position: absolute;  }\r\n\r\n.anima[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0, 0, 0, 0.068);\r\n  border-radius: 10%;\r\n\r\n\r\n}\r\n.anima[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n  border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n.anima2[_ngcontent-%COMP%]:hover{\r\n  color:blanchedalmond;\r\n  background: rgba(219, 219, 219, 0.068);\r\n   border-radius: 10%;\r\n\r\n\r\n\r\n}\r\n\r\n.subefuente[_ngcontent-%COMP%]{margin-top: 20px;; margin-left: 30px;}\r\n.anima2[_ngcontent-%COMP%]:active {\r\n\r\n  background-color: rgba(0, 0, 0, 0.055);\r\n   border-radius: 10%;\r\n  color:rgb(255, 255, 255)\r\n\r\n}\r\n\r\n\r\n\r\n.mat-menu-item[_ngcontent-%COMP%] {\r\n  line-height: 30px !important;\r\n  height: 30px !important;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 255, 255);\r\n    height: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{margin:0px; padding:5px;margin-left: 15px}\r\n      li[_ngcontent-%COMP%] {\r\n          display: inline;\r\n         }\r\n\r\n         span[_ngcontent-%COMP%] {margin-left:4px}\r\n\r\n.menuTexto[_ngcontent-%COMP%] {\r\n        margin-top: 6px!important;\r\n        letter-spacing: 0.5px;\r\n\r\n\r\n        text-decoration: none;\r\n        float: left;\r\n        padding: 5px;\r\n        color: rgb(0, 0, 0); \r\n        margin-top:3px;\r\n        cursor: pointer;\r\n                }\r\n                .padleft[_ngcontent-%COMP%]{padding-left:10px!important}\r\n                .menuTexto[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n\r\n                  background-color: rgb(0, 0, 0); \r\n                  color:aliceblue;\r\n                  border-radius: 5px;\r\n                }\r\n\r\n\r\n\r\n.activo[_ngcontent-%COMP%]{\r\n              color: rgb(160, 24, 0);  \r\n\r\n             }\r\n             .flex-container[_ngcontent-%COMP%] {\r\n                display: flex;\r\n                flex-direction: row;\r\n                flex-wrap: nowrap;\r\n\r\n                align-items: normal;\r\n                align-content: normal;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(1) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              .flex-items[_ngcontent-%COMP%]:nth-child(2) {\r\n                display: block;\r\n                flex-grow: 0;\r\n                flex-shrink: 1;\r\n                flex-basis: auto;\r\n                align-self: auto;\r\n                order: 0;\r\n              }\r\n\r\n              @media (max-width:274){\r\n\r\n                .quitarTextoLogo[_ngcontent-%COMP%]{display:none }\r\n\r\n                .fondoEditorial[_ngcontent-%COMP%] {height: 320px;}\r\n                }\r\n\r\n\r\n\r\n\r\n            @media (max-width: 860px)\r\n              {\r\n                .quitar800[_ngcontent-%COMP%]{\r\n                display: none;}\r\n\r\n                  .textUp[_ngcontent-%COMP%]{\r\n                      font-size:40px;\r\n                     margin-top:-30px;\r\n                      margin-left: -25px;\r\n                      letter-spacing: -1px;}\r\n                .textDown[_ngcontent-%COMP%]{font-size:40px;\r\n                     margin-left: -25px;\r\n                       margin-top:-34px;\r\n                       letter-spacing: -1px}\r\n\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:3000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 33%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 33%; }\r\n            }\r\n\r\n\r\n\r\n\r\n            @media (max-width:2666px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 25%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 25%; }\r\n            }\r\n\r\n            @media (max-width:2402px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 24%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 24%; }\r\n            }\r\n\r\n            @media (max-width:2200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 20%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 20%; }\r\n            }\r\n\r\n            @media (max-width:2000px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 18%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 18%; }\r\n            }\r\n\r\n            @media (max-width:1800px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 15%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 15%; }\r\n            }\r\n\r\n            @media (max-width:1600px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 13%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 13%; }\r\n            }\r\n            @media (max-width:1420px)\r\n            {\r\n              .logoCCAM[_ngcontent-%COMP%]{margin-left: 88px;}\r\n            }\r\n\r\n\r\n\r\n            @media (max-width:1400px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 8%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 8%; }\r\n            }\r\n\r\n            @media (max-width:1349px)\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-10px}\r\n\r\n            }\r\n\r\n\r\n            @media (max-width:1200px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%; }\r\n            }\r\n\r\n            @media (max-width:1120px)\r\n\r\n            {\r\n              .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-5px}\r\n            }\r\n\r\n            @media (max-width:1050px)\r\n            {.margenL[_ngcontent-%COMP%]{ margin-left: 0%; }\r\n            .margenR[_ngcontent-%COMP%]{margin-right: 0%;}\r\n            .logoCCAM[_ngcontent-%COMP%]{margin-left: 60px;}\r\n            .logonm[_ngcontent-%COMP%]{width: 150px;  margin-left:-27px}\r\n            .quitar1000[_ngcontent-%COMP%]{display:none!important}\r\n\r\n\r\n\r\n            }\r\n\r\n            @media (max-width:992px){\r\n              .fondoEditorial[_ngcontent-%COMP%]{\r\n                height: 320px;}\r\n              \r\n              .imgSobrante[_ngcontent-%COMP%]{ padding:20px; padding-left: 30px; padding-right: 30px; padding-right: 10px; }\r\n              .imgAparece[_ngcontent-%COMP%]{display:block; padding: 30px; margin-top:-10px; padding-left: 13px; padding-right: 10px; }\r\n\r\n\r\n             }\r\n\r\n@media (max-width:600px){\r\n  .numAnterior[_ngcontent-%COMP%]{font-size: 25px;margin-bottom: 0px!important; margin-top: 5px; margin-left:15px}\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 220px!important;}\r\n  .indice[_ngcontent-%COMP%]{display: none;}\r\n  .numeroEdicion[_ngcontent-%COMP%]{display: inline;}\r\n  .carousel[_ngcontent-%COMP%]{height:400px!important; }\r\n  .FlexContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    align-content: flex-start;\r\n    width: 65%;\r\n    background-color: #2f1d58;\r\n    height: 80vh;\r\n    overflow: auto;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:500px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 260px!important;}\r\n}\r\n\r\n@media (max-width:400px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 290px!important;}\r\n}\r\n\r\n@media (max-width:354px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 310px!important;}\r\n}\r\n\r\n@media (max-width:342px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 330px!important;}\r\n}\r\n@media (max-width:306px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 340px!important;}\r\n}\r\n@media (max-width:296px){\r\n\r\n  .fondoEditorial[_ngcontent-%COMP%]{height: 370px!important;}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.carousel[_ngcontent-%COMP%]{height:500px ; background-color: #7e5a1700;  margin-left:20px; margin-right: 20px ;}\r\n.cartelInicio[_ngcontent-%COMP%]{display:block}\r\n.FlexContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px;\r\n    background-color: lightblue;\r\n}\r\n  .editorialParrafo[_ngcontent-%COMP%]{font-size: 14px; line-height: 19px;\r\n  }\r\n\r\n  .publiMobile[_ngcontent-%COMP%]{display: block;}\r\np[_ngcontent-%COMP%]{font-size: 14px!important;}\r\n  .imagenLoading[_ngcontent-%COMP%]{ position:absolute; bottom:-20px;  right: 0px ; left:0px ;}\r\n\r\n\r\n  .poner[_ngcontent-%COMP%]{display:none}\r\n\r\n.colorBarraMenu[_ngcontent-%COMP%]{margin-top:-30px}\r\n.fondo[_ngcontent-%COMP%]{background-image: none;background-color: white;}\r\n.margenL[_ngcontent-%COMP%]{ margin-left: 0px; }\r\n.margenR[_ngcontent-%COMP%]{margin-right: 0px; }\r\n.indice[_ngcontent-%COMP%]{font-size:25px;margin-left:15px; margin-bottom:10px;margin-top: 10px; }\r\n.banner[_ngcontent-%COMP%]{margin-left:20px; padding-right:40px; margin-top:30px}\r\n.subefuente[_ngcontent-%COMP%]{font-size: 20px;margin-left:20px!important; margin-top:-12px!important; margin-bottom: 10px;}\r\n.responsi[_ngcontent-%COMP%]{width: 110px!important;}\r\n.responsi2[_ngcontent-%COMP%]{width: 90px!important;}\r\n.barraInfo[_ngcontent-%COMP%]{margin:0px}\r\n.logo[_ngcontent-%COMP%]{width: 130px;  margin-left: -10px;}\r\n.mobile[_ngcontent-%COMP%]{display:inline}\r\n.cuerpo[_ngcontent-%COMP%]{background-color:orange;  padding-left: 0px;  margin-right: 0px;}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n.textUp[_ngcontent-%COMP%]{font-size:30px; margin-top:-45px; margin-left: -25px; letter-spacing: -1px;}\r\n.textDown[_ngcontent-%COMP%]{font-size:30px; margin-left: -25px;   margin-top:-55px; letter-spacing: -1px}\r\np[_ngcontent-%COMP%]{font-size:14px!important}\r\n\r\n.footer[_ngcontent-%COMP%]{margin-top: -227px!important;}\r\n.acom[_ngcontent-%COMP%]{margin-top: -61px!important;}\r\n  }\r\n\r\n  @keyframes _ngcontent-%COMP%_ldio-z7fu6e1den {\r\n    0% { transform: rotate(0) }\r\n    100% { transform: rotate(360deg) }\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: border-box!important }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 83px;\r\n    height: 83px;\r\n    top: 8.5px;\r\n    left: 8.5px;\r\n    border-radius: 50%;\r\n    border: 13px solid #000;\r\n    border-color: #0a0a0a transparent #0a0a0a transparent;\r\n    animation: _ngcontent-%COMP%_ldio-z7fu6e1den 1s linear infinite;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) { border-color: transparent }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: rotate(45deg);\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:before, .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 13px;\r\n    height: 13px;\r\n    top: -13px;\r\n    left: 22px;\r\n    background: #0a0a0a;\r\n    border-radius: 50%;\r\n    box-shadow: 0 70px 0 0 #0a0a0a;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) div:after {\r\n    left: -13px;\r\n    top: 22px;\r\n    box-shadow: 70px 0 0 0 #0a0a0a;\r\n  }\r\n  .loadingio-spinner-dual-ring-xg1vnrf2b6o[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    height: 84px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: none;\r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.84);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-origin: 0 0; \r\n  }\r\n  .ldio-z7fu6e1den[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\r\n  \r\n\r\n.imgmobile[_ngcontent-%COMP%]{width:100px; margin-top:74px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvcHVibGljaWRhZHgzL3B1YmxpY2lkYWR4My5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7K0VBRytFO0NBRTlFOzs0RkFFMkY7Ozs7Q0FPM0Y7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjtDQUNDLFlBQVksYUFBYSxDQUFDOztDQUUxQixlQUFlLGFBQWEsQ0FBQztBQUM5QixNQUFNLGdCQUFnQixFQUFFO0FBQ3hCLGNBQWMsaUNBQWlDLENBQUM7QUFDaEQsYUFBYSxZQUFZO0NBQ3hCO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQSxRQUFRLFlBQVksR0FBRyxpQkFBaUI7QUFDeEM7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBLGNBQWMsYUFBYSxDQUFDOztBQUU1QjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7QUFDQSwrQ0FBK0M7QUFDL0M7Q0FDQyxrQ0FBa0M7OztBQUduQzs7Ozs7QUFLQSxHQUFHLGlDQUFpQyxDQUFDO0FBQ3JDO0dBQ0csVUFBVTtHQUNWLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLGtCQUFrQjtBQUNyQjs7QUFFQSxXQUFXLGdCQUFnQjtFQUN6Qiw0Q0FBNEMsQ0FBQzs7O0FBRy9DO0dBQ0csVUFBVTtHQUNWLGNBQWM7R0FDZCxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLGtCQUFrQjtBQUNyQjs7Ozs7QUFLQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlLEVBQUUsK0JBQStCO0lBQ2hELG1CQUFtQjtJQUNuQixnREFBZ0Q7UUFDNUM7O0FBRVI7O0VBRUUsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQyx5QkFBeUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxXQUFXLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7O0FBRTdHO0lBQ0ksNENBQTRDO0lBQzVDLGdCQUFnQjtTQUNYOztBQUVULFFBQVEsWUFBWSxDQUFDO0FBQ3JCO0VBQ0UsdUVBQXVFO0VBQ3ZFLGVBQWU7Q0FDaEIsV0FBVztFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUVBQXVFO0VBQ3ZFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUEsbUVBQW1FO0FBQ25FO0tBQ0ssZUFBZTtLQUNmLGlCQUFpQixFQUFFOztBQUV4Qiw2REFBNkQ7QUFDN0Q7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjtBQUNBLFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsYUFBYSxlQUFlO0VBQzFCLHlCQUF5Qjs7RUFFekIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBLFdBQVcsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQzs7QUFFckYsWUFBWSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO0FBQ3JFLFFBQVEsY0FBYyxFQUFFLGlCQUFpQixDQUFDO0FBQzFDLFNBQVMsWUFBWSxDQUFDLGNBQWMsRUFBRSxrQkFBa0I7QUFDeEQsY0FBYyxlQUFlO0VBQzNCLHVFQUF1RTtHQUN0RSxxQkFBcUI7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0FBR0EsSUFBSSwrQkFBK0I7QUFDbkMsZUFBZTtBQUNmOztBQUVBLGlCQUFpQix5QkFBeUI7O0VBRXhDLGFBQWE7R0FDWixpQkFBaUI7R0FDakIsa0JBQWtCOztBQUVyQjtDQUNDLGdCQUFnQjtHQUNkLG1CQUFtQjtFQUNwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsVUFBVSxZQUFZLEVBQUUsZ0JBQWdCLEdBQUcsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7O0FBRWpGOztFQUVFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsR0FBRyxnQkFBZ0I7O0FBRTdFOztBQUVBLEVBQUUsd0JBQXdCLEVBQUUsZUFBZSxDQUFDOztBQUU1QztFQUNFLDREQUE0RDtFQUM1RCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0lBQ1osMEJBQTBCO0VBQzVCLGtCQUFrQjs7OztBQUlwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZjs7QUFFRjtBQUNBLFVBQVUseUJBQXlCLEdBQUcsYUFBYSxFQUFFOzs7QUFHckQsWUFBWSxpQ0FBaUMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFOztBQUVuRyxnQkFBZ0IseUJBQXlCLEVBQUU7QUFDM0M7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLGtCQUFrQjtJQUNsQjs7QUFFSjtJQUNJLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQixHQUFHOztBQUV6QjtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7OztBQUdwQjtBQUNBOztFQUVFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEI7O0FBRUY7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0dBQ3JDLGtCQUFrQjs7OztBQUlyQjs7QUFFQSxZQUFZLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDO0FBQ2pEOztFQUVFLHNDQUFzQztHQUNyQyxrQkFBa0I7RUFDbkI7O0FBRUY7Ozs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQSxHQUFHLFVBQVUsRUFBRSxXQUFXLENBQUMsaUJBQWlCO01BQ3RDO1VBQ0ksZUFBZTtTQUNoQjs7U0FFQSxNQUFNLGVBQWU7O0FBRTlCO1FBQ1EseUJBQXlCO1FBQ3pCLHFCQUFxQjs7O1FBR3JCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQixFQUFFLGNBQWM7UUFDbkMsY0FBYztRQUNkLGVBQWU7Z0JBQ1A7Z0JBQ0EsU0FBUywyQkFBMkI7Z0JBQ3BDOztrQkFFRSw4QkFBOEIsRUFBRSxjQUFjO2tCQUM5QyxlQUFlO2tCQUNmLGtCQUFrQjtnQkFDcEI7Ozs7QUFJaEI7Y0FDYyxzQkFBc0IsR0FBRyxxQkFBcUI7O2FBRS9DO2FBQ0E7Z0JBQ0csYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGlCQUFpQjs7Z0JBRWpCLG1CQUFtQjtnQkFDbkIscUJBQXFCO2NBQ3ZCOztjQUVBO2dCQUNFLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixRQUFRO2NBQ1Y7O2NBRUE7Z0JBQ0UsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLFFBQVE7Y0FDVjs7Y0FFQTs7Z0JBRUUsaUJBQWlCLGFBQWE7O2dCQUU5QixpQkFBaUIsYUFBYSxDQUFDO2dCQUMvQjs7Ozs7WUFLSjs7Z0JBRUk7Z0JBQ0EsYUFBYSxDQUFDOztrQkFFWjtzQkFDSSxjQUFjO3FCQUNmLGdCQUFnQjtzQkFDZixrQkFBa0I7c0JBQ2xCLG9CQUFvQixDQUFDO2dCQUMzQixVQUFVLGNBQWM7cUJBQ25CLGtCQUFrQjt1QkFDaEIsZ0JBQWdCO3VCQUNoQixvQkFBb0I7OztZQUcvQjs7O1lBR0E7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7Ozs7O1lBS0E7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7O1lBRUE7YUFDQyxVQUFVLGdCQUFnQixFQUFFO1lBQzdCLFNBQVMsaUJBQWlCLEVBQUU7WUFDNUI7WUFDQTs7Y0FFRSxVQUFVLGlCQUFpQixDQUFDO1lBQzlCOzs7O1lBSUE7YUFDQyxVQUFVLGVBQWUsRUFBRTtZQUM1QixTQUFTLGdCQUFnQixFQUFFO1lBQzNCOztZQUVBOztjQUVFLFFBQVEsWUFBWSxHQUFHLGlCQUFpQjs7WUFFMUM7OztZQUdBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsRUFBRTtZQUMzQjs7WUFFQTs7O2NBR0UsUUFBUSxZQUFZLEdBQUcsZ0JBQWdCO1lBQ3pDOztZQUVBO2FBQ0MsVUFBVSxlQUFlLEVBQUU7WUFDNUIsU0FBUyxnQkFBZ0IsQ0FBQztZQUMxQixVQUFVLGlCQUFpQixDQUFDO1lBQzVCLFFBQVEsWUFBWSxHQUFHLGlCQUFpQjtZQUN4QyxZQUFZLHNCQUFzQjs7OztZQUlsQzs7WUFFQTtjQUNFO2dCQUNFLGFBQWEsQ0FBQzs7Y0FFaEIsY0FBYyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUU7Y0FDMUYsWUFBWSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFOzs7YUFHdEc7O0FBRWI7RUFDRSxhQUFhLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCO0VBQzVGLGdCQUFnQix1QkFBdUIsQ0FBQztFQUN4QyxRQUFRLGFBQWEsQ0FBQztFQUN0QixlQUFlLGVBQWUsQ0FBQztFQUMvQixVQUFVLHNCQUFzQixFQUFFO0VBQ2xDO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOzs7Ozs7QUFNQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7O0FBRUE7O0VBRUUsZ0JBQWdCLHVCQUF1QixDQUFDO0FBQzFDOztBQUVBOztFQUVFLGdCQUFnQix1QkFBdUIsQ0FBQztBQUMxQzs7QUFFQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7QUFDQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7QUFDQTs7RUFFRSxnQkFBZ0IsdUJBQXVCLENBQUM7QUFDMUM7Ozs7OztBQU1BLFVBQVUsYUFBYSxFQUFFLDJCQUEyQixHQUFHLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQzdGLGNBQWMsYUFBYTtBQUMzQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtFQUNFLGtCQUFrQixlQUFlLEVBQUUsaUJBQWlCO0VBQ3BEOztFQUVBLGFBQWEsY0FBYyxDQUFDO0FBQzlCLEVBQUUseUJBQXlCLENBQUM7RUFDMUIsZ0JBQWdCLGlCQUFpQixFQUFFLFlBQVksR0FBRyxXQUFXLEVBQUUsU0FBUyxDQUFDOzs7RUFHekUsT0FBTyxZQUFZOztBQUVyQixnQkFBZ0IsZ0JBQWdCO0FBQ2hDLE9BQU8sc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7QUFDdEQsVUFBVSxnQkFBZ0IsRUFBRTtBQUM1QixTQUFTLGlCQUFpQixFQUFFO0FBQzVCLFFBQVEsY0FBYyxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFO0FBQzlFLFFBQVEsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZTtBQUM3RCxZQUFZLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsQ0FBQztBQUN4RyxVQUFVLHNCQUFzQixDQUFDO0FBQ2pDLFdBQVcscUJBQXFCLENBQUM7QUFDakMsV0FBVyxVQUFVO0FBQ3JCLE1BQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDO0FBQ3hDLFFBQVEsY0FBYztBQUN0QixRQUFRLHVCQUF1QixHQUFHLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQ3hFLFdBQVcsWUFBWTtBQUN2QixRQUFRLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztBQUNuRixVQUFVLGNBQWMsRUFBRSxrQkFBa0IsSUFBSSxnQkFBZ0IsRUFBRSxvQkFBb0I7QUFDdEYsRUFBRSx3QkFBd0I7O0FBRTFCLFFBQVEsNEJBQTRCLENBQUM7QUFDckMsTUFBTSwyQkFBMkIsQ0FBQztFQUNoQzs7RUFFQTtJQUNFLEtBQUsscUJBQXFCO0lBQzFCLE9BQU8sMEJBQTBCO0VBQ25DO0VBQ0EsdUJBQXVCLGlDQUFpQztFQUN4RDtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxREFBcUQ7SUFDckQsNkNBQTZDO0VBQy9DO0VBQ0Esc0NBQXNDLDBCQUEwQjtFQUNoRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IscUJBQXFCLEVBQUUsbUJBQW1CO0VBQzVDO0VBQ0EsdUJBQXVCLHVCQUF1QixFQUFFO0VBQ2hELHFDQUFxQzs7QUFFdkMsV0FBVyxXQUFXLEVBQUUsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvY2tleStPbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VHJhaW4rT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUrQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJlbCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCcpO1xyXG4vKlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbHVtbmkrU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZGlzcGxheT1zd2FwJyk7ICAqL1xyXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuIC8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhYmluK1NrZXRjaDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uaW86d2dodEA3MDAmZmFtaWx5PUpvY2tleStPbmUmZGlzcGxheT1zd2FwJyk7XHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DaGF1K1BoaWxvbWVuZStPbmUmZGlzcGxheT1zd2FwJyk7ICAqL1xyXG5cclxuXHJcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcblxyXG4gLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgxKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoMykge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuIC5pbWdBcGFyZWNle2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuIC5udW1lcm9FZGljaW9ue2Rpc3BsYXk6IG5vbmU7fVxyXG4uYWNvbXttYXJnaW4tdG9wOjM3MHB4OyB9XHJcbi5mdWVudGVUZXN0eyAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO31cclxuLnB1YmxpTW9iaWxle2Rpc3BsYXk6bm9uZX1cclxuIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG59XHJcbi5sb2dvbm17d2lkdGg6IDE1MHB4OyAgbWFyZ2luLWxlZnQ6LTIwcHh9XHJcbi5mbGV4LWl0ZW1zOm50aC1jaGlsZCgxKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICBvcmRlcjogMDtcclxufVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uY2FydGVsSW5pY2lve2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDMpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG9yZGVyOiAwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtczpudGgtY2hpbGQoNCkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgb3JkZXI6IDA7XHJcbn1cclxuLyogVEVYVE8gQ0VOVFJPIENVTFRVUkFMIEFSR0VOVElOTyBERSBNT05UQcODwpFBICovXHJcbi5jdWVycG97XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDUxLCA1MSwgNTEpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmgxe2ZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjt9XHJcbi5xdWllbmVzU29tb3N7XHJcbiAgIGxlZnQ6MjIwcHg7XHJcbiAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICBtYXJnaW4tdG9wOjEycHg7XHJcbiAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZm90ZXJUZXh0e21hcmdpbi10b3A6LTEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7fVxyXG5cclxuXHJcbi5mb3JtYXJQYXJ0ZXtcclxuICAgbGVmdDozODBweDtcclxuICAgZm9udC1zaXplOjEycHg7XHJcbiAgIG1hcmdpbi10b3A6MTJweDtcclxuICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi50ZXh0TG9nb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IGNvbG9yOiByZ2JhKDE5NCwgMTgsIDE4LCAwLjczMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoNTYsIDU2LCA1NiwgMC40MzEpO1xyXG4gICAgICAgIH1cclxuXHJcbi5pbmRpY2V7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6d2hpdGV9XHJcblxyXG4gIC5lZGlNb2JpbCB7ZGlzcGxheTogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogIzNFMjgwMDttYXJnaW4tdG9wOjMwcHg7IG1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMjBweCA7fVxyXG5cclxuLnRleHRGb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICB9XHJcblxyXG4ubW9iaWxle2Rpc3BsYXk6bm9uZTt9XHJcbi50ZXh0QmFycmFOZWdyYTIge1xyXG4gIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuIGNvbG9yOmJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbn1cclxuXHJcbi50ZXh0QmFycmFOZWdyYSB7XHJcbiAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOm9yYW5nZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG59XHJcblxyXG4vKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb25kb3RyYXNwYXJlbnRlLnBuZycpOyAqL1xyXG4uZm9uZG97XHJcbiAgICAgbWFyZ2luLXRvcDotNHB4O1xyXG4gICAgIG1pbi1oZWlnaHQ6IDEzMHB4OyB9XHJcblxyXG4vKiBjb2xvciB5IGFsdHVyYSBkZSBsYSBwcmltZXJhIGJhcnJhIG5lZ3JhIGNvbiBlbCBidXNjYWRvciAqL1xyXG4uYmFycmF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAzMyU7IH1cclxuLnN1c2NyaWJpcnNle2N1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSkgO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYmFycmFJbmZve2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgbWFyZ2luOjIwcHg7IG1hcmdpbi10b3A6MHB4IDsgdGV4dC1hbGlnbjogcmlnaHQ7fVxyXG5cclxuLmVkaXRvcmlhbCB7Y29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpOyBwYWRkaW5nOiAyMHB4OyBmb250LXNpemU6IDMwcHg7fVxyXG4uc3VzY3Jpe21hcmdpbi10b3A6NHB4OyBwYWRkaW5nLWxlZnQ6MzBweDt9XHJcbi5zdXNjcmkye2NvbG9yOmJsYWNrIDttYXJnaW4tdG9wOjBweDsgcGFkZGluZy1yaWdodDoyMHB4fVxyXG4uc3VzY3JpYmlyc2Uye2N1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6N3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuXHJcbmg1eyBmb250LWZhbWlseTogJ0FiZWwnLCBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb25kb0VkaXRvcmlhbCB7YmFja2dyb3VuZC1jb2xvcjogIzNFMjgwMDtcclxuICBcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4fVxyXG5cclxuLmVkaXRvcmlhbFBhcnJhZm97XHJcbiB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDoyN3B4O1xyXG59XHJcblxyXG4ubG9nb0NDQU17d2lkdGg6IDEyNXB4OyBtYXJnaW4tdG9wOjM4MHB4OyAgbWFyZ2luLWxlZnQ6IDExMnB4OyBtYXJnaW4tcmlnaHQ6IDBweDt9XHJcblxyXG4uY2FwaXRhbDo6Zmlyc3QtbGV0dGVyIHtcclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6b3JhbmdlO1xyXG5cclxufVxyXG5cclxuLm51bUFudGVyaW9ye1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyBtYXJnaW4tYm90dG9tOiAtMTBweDsgZm9udC1zaXplOiAyNXB4OyAgbWFyZ2luLXRvcDogMTBweDsgXHJcblxyXG59XHJcblxyXG5he2NvbG9yOnJnYigyNTUsIDE4NywgNjEpIDsgZm9udC1zaXplOiAxM3B4O31cclxuXHJcbi50ZXh0b3tcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG5cclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBwYWRkaW5nOjEwcHhcclxuXHJcbn1cclxuLmFuaW1hTmF2e3RyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7ICBjb2xvcjpvcmFuZ2UgOyB9XHJcblxyXG5cclxuLmJhcnJhVGV4dG97Zm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmOyBjb2xvcjp3aGl0ZSA7IGZvbnQtc2l6ZTogMTJweDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxyXG5cclxuLmNvbG9yQmFycmFNZW51e2JhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7IH1cclxuLmxvZ297XHJcblxyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDoxODBweDtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcblxyXG59XHJcbmlucHV0e1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjExMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDk1cHg7XHJcbiAgICB0b3A6MnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcblxyXG4udGV4dGxvZ29DZW50cm97XHJcbiAgICB0b3A6NjBweDtcclxuICAgIGxlZnQ6IDExOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gfVxyXG4udGV4dGxvZ29BYmFqb3tcclxuICAgIHRvcDo5NnB4O1xyXG4gICAgbGVmdDogMTE4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICB9XHJcblxyXG4uYW5pbWE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG5cclxuXHJcbn1cclxuLmFuaW1hOmFjdGl2ZSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSlcclxuXHJcbn1cclxuXHJcbi5hbmltYTI6aG92ZXJ7XHJcbiAgY29sb3I6YmxhbmNoZWRhbG1vbmQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTksIDIxOSwgMjE5LCAwLjA2OCk7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLnN1YmVmdWVudGV7bWFyZ2luLXRvcDogMjBweDs7IG1hcmdpbi1sZWZ0OiAzMHB4O31cclxuLmFuaW1hMjphY3RpdmUge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDU1KTtcclxuICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnVse21hcmdpbjowcHg7IHBhZGRpbmc6NXB4O21hcmdpbi1sZWZ0OiAxNXB4fVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHNwYW4ge21hcmdpbi1sZWZ0OjRweH1cclxuXHJcbi5tZW51VGV4dG8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFkbGVmdHtwYWRkaW5nLWxlZnQ6MTBweCFpbXBvcnRhbnR9XHJcbiAgICAgICAgICAgICAgICAubWVudVRleHRvIDphY3RpdmUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICAgICAgICAgICAgY29sb3I6YWxpY2VibHVlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbi5hY3Rpdm97XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjAsIDI0LCAwKTsgIC8qQ29sb3IgdGV4dG8tYWN0aXZvKi9cclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZsZXgtaXRlbXM6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Mjc0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAucXVpdGFyVGV4dG9Mb2dve2Rpc3BsYXk6bm9uZSB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvbmRvRWRpdG9yaWFsIHtoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAucXVpdGFyODAwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudGV4dFVwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDt9XHJcbiAgICAgICAgICAgICAgICAudGV4dERvd257Zm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4fVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDozMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDMzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDMzJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNjY2cHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyNDAycHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDI0JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDI0JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDIwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDIwJTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoyMDAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE4JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxODAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDE1JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDE1JTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpXHJcbiAgICAgICAgICAgIHsubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDEzJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDEzJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE0MjBweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogODhweDt9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTQwMHB4KVxyXG4gICAgICAgICAgICB7Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiA4JTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDglOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEzNDlweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5sb2dvbm17d2lkdGg6IDE1MHB4OyAgbWFyZ2luLWxlZnQ6LTEwcHh9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KVxyXG4gICAgICAgICAgICB7Lm1hcmdlbkx7IG1hcmdpbi1sZWZ0OiAwJTsgfVxyXG4gICAgICAgICAgICAubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDAlOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjExMjBweClcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAubG9nb25te3dpZHRoOiAxNTBweDsgIG1hcmdpbi1sZWZ0Oi01cHh9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEwNTBweClcclxuICAgICAgICAgICAgey5tYXJnZW5MeyBtYXJnaW4tbGVmdDogMCU7IH1cclxuICAgICAgICAgICAgLm1hcmdlblJ7bWFyZ2luLXJpZ2h0OiAwJTt9XHJcbiAgICAgICAgICAgIC5sb2dvQ0NBTXttYXJnaW4tbGVmdDogNjBweDt9XHJcbiAgICAgICAgICAgIC5sb2dvbm17d2lkdGg6IDE1MHB4OyAgbWFyZ2luLWxlZnQ6LTI3cHh9XHJcbiAgICAgICAgICAgIC5xdWl0YXIxMDAwe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAgICAgICAgICAuZm9uZG9FZGl0b3JpYWx7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuaW1nU29icmFudGV7IHBhZGRpbmc6MjBweDsgcGFkZGluZy1sZWZ0OiAzMHB4OyBwYWRkaW5nLXJpZ2h0OiAzMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAgICAgICAgICAgLmltZ0FwYXJlY2V7ZGlzcGxheTpibG9jazsgcGFkZGluZzogMzBweDsgbWFyZ2luLXRvcDotMTBweDsgcGFkZGluZy1sZWZ0OiAxM3B4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XHJcblxyXG5cclxuICAgICAgICAgICAgIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAubnVtQW50ZXJpb3J7Zm9udC1zaXplOiAyNXB4O21hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWxlZnQ6MTVweH1cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAyMjBweCFpbXBvcnRhbnQ7fVxyXG4gIC5pbmRpY2V7ZGlzcGxheTogbm9uZTt9XHJcbiAgLm51bWVyb0VkaWNpb257ZGlzcGxheTogaW5saW5lO31cclxuICAuY2Fyb3VzZWx7aGVpZ2h0OjQwMHB4IWltcG9ydGFudDsgfVxyXG4gIC5GbGV4Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjFkNTg7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDI2MHB4IWltcG9ydGFudDt9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMjkwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MzU0cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzMTBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDozNDJweCl7XHJcblxyXG4gIC5mb25kb0VkaXRvcmlhbHtoZWlnaHQ6IDMzMHB4IWltcG9ydGFudDt9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MzA2cHgpe1xyXG5cclxuICAuZm9uZG9FZGl0b3JpYWx7aGVpZ2h0OiAzNDBweCFpbXBvcnRhbnQ7fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjI5NnB4KXtcclxuXHJcbiAgLmZvbmRvRWRpdG9yaWFse2hlaWdodDogMzcwcHghaW1wb3J0YW50O31cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jYXJvdXNlbHtoZWlnaHQ6NTAwcHggOyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U1YTE3MDA7ICBtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDIwcHggO31cclxuLmNhcnRlbEluaWNpb3tkaXNwbGF5OmJsb2NrfVxyXG4uRmxleENvbnRhaW5lciBkaXYge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbiAgLmVkaXRvcmlhbFBhcnJhZm97Zm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTlweDtcclxuICB9XHJcblxyXG4gIC5wdWJsaU1vYmlsZXtkaXNwbGF5OiBibG9jazt9XHJcbnB7Zm9udC1zaXplOiAxNHB4IWltcG9ydGFudDt9XHJcbiAgLmltYWdlbkxvYWRpbmd7IHBvc2l0aW9uOmFic29sdXRlOyBib3R0b206LTIwcHg7ICByaWdodDogMHB4IDsgbGVmdDowcHggO31cclxuXHJcblxyXG4gIC5wb25lcntkaXNwbGF5Om5vbmV9XHJcblxyXG4uY29sb3JCYXJyYU1lbnV7bWFyZ2luLXRvcDotMzBweH1cclxuLmZvbmRve2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxyXG4ubWFyZ2VuTHsgbWFyZ2luLWxlZnQ6IDBweDsgfVxyXG4ubWFyZ2VuUnttYXJnaW4tcmlnaHQ6IDBweDsgfVxyXG4uaW5kaWNle2ZvbnQtc2l6ZToyNXB4O21hcmdpbi1sZWZ0OjE1cHg7IG1hcmdpbi1ib3R0b206MTBweDttYXJnaW4tdG9wOiAxMHB4OyB9XHJcbi5iYW5uZXJ7bWFyZ2luLWxlZnQ6MjBweDsgcGFkZGluZy1yaWdodDo0MHB4OyBtYXJnaW4tdG9wOjMwcHh9XHJcbi5zdWJlZnVlbnRle2ZvbnQtc2l6ZTogMjBweDttYXJnaW4tbGVmdDoyMHB4IWltcG9ydGFudDsgbWFyZ2luLXRvcDotMTJweCFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4ucmVzcG9uc2l7d2lkdGg6IDExMHB4IWltcG9ydGFudDt9XHJcbi5yZXNwb25zaTJ7d2lkdGg6IDkwcHghaW1wb3J0YW50O31cclxuLmJhcnJhSW5mb3ttYXJnaW46MHB4fVxyXG4ubG9nb3t3aWR0aDogMTMwcHg7ICBtYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4ubW9iaWxle2Rpc3BsYXk6aW5saW5lfVxyXG4uY3VlcnBve2JhY2tncm91bmQtY29sb3I6b3JhbmdlOyAgcGFkZGluZy1sZWZ0OiAwcHg7ICBtYXJnaW4tcmlnaHQ6IDBweDt9XHJcbi5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4udGV4dFVwe2ZvbnQtc2l6ZTozMHB4OyBtYXJnaW4tdG9wOi00NXB4OyBtYXJnaW4tbGVmdDogLTI1cHg7IGxldHRlci1zcGFjaW5nOiAtMXB4O31cclxuLnRleHREb3due2ZvbnQtc2l6ZTozMHB4OyBtYXJnaW4tbGVmdDogLTI1cHg7ICAgbWFyZ2luLXRvcDotNTVweDsgbGV0dGVyLXNwYWNpbmc6IC0xcHh9XHJcbnB7Zm9udC1zaXplOjE0cHghaW1wb3J0YW50fVxyXG5cclxuLmZvb3RlcnttYXJnaW4tdG9wOiAtMjI3cHghaW1wb3J0YW50O31cclxuLmFjb217bWFyZ2luLXRvcDogLTYxcHghaW1wb3J0YW50O31cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgbGRpby16N2Z1NmUxZGVuIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCkgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG4gIH1cclxuICAubGRpby16N2Z1NmUxZGVuIGRpdiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3ghaW1wb3J0YW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4M3B4O1xyXG4gICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgdG9wOiA4LjVweDtcclxuICAgIGxlZnQ6IDguNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxM3B4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGEgdHJhbnNwYXJlbnQgIzBhMGEwYSB0cmFuc3BhcmVudDtcclxuICAgIGFuaW1hdGlvbjogbGRpby16N2Z1NmUxZGVuIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgeyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuICAubGRpby16N2Z1NmUxZGVuID4gZGl2Om50aC1jaGlsZCgyKSBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIGRpdjpiZWZvcmUsIC5sZGlvLXo3ZnU2ZTFkZW4gPiBkaXY6bnRoLWNoaWxkKDIpIGRpdjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIHRvcDogLTEzcHg7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNzBweCAwIDAgIzBhMGEwYTtcclxuICB9XHJcbiAgLmxkaW8tejdmdTZlMWRlbiA+IGRpdjpudGgtY2hpbGQoMikgZGl2OmFmdGVyIHtcclxuICAgIGxlZnQ6IC0xM3B4O1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgYm94LXNoYWRvdzogNzBweCAwIDAgMCAjMGEwYTBhO1xyXG4gIH1cclxuICAubG9hZGluZ2lvLXNwaW5uZXItZHVhbC1yaW5nLXhnMXZucmYyYjZvIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMC44NCk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXHJcbiAgfVxyXG4gIC5sZGlvLXo3ZnU2ZTFkZW4gZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuICAvKiBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAqL1xyXG5cclxuLmltZ21vYmlsZXt3aWR0aDoxMDBweDsgbWFyZ2luLXRvcDo3NHB4fVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 66401:
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

/***/ 20224:
/*!****************************************!*\
  !*** ./src/app/models/dataCarousel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carouselDataItems": () => (/* binding */ carouselDataItems)
/* harmony export */ });
const carouselDataItems = [{
  id: 0,
  fecha: '',
  titulo: 'Febrero 2023 - Nº 147',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/02_2023/revista_digital_ccam_ini_022023.html',
  link: '',
  image: '../../../assets/Tapa_Revista_Digital_FEB2023.png',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Enero 2023 - Nº 146',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/01_2023/revista_digital_ccam_ini_012023.html',
  link: '',
  image: '../../../assets/Tapa_Revista_Digital_ENE2023.png',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Diciembre 2022 - Nº 145',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/12_2022/revista_digital_ccam_ini_122022.html',
  link: '',
  image: '../../../assets/Tapa_Revista_Digital_DIC2022.png',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Noviembre 2022 - Nº 144',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/11_2022/revista_digital_ccam_ini_112022.html',
  link: '',
  image: '../../../assets/Tapa_Revista_Digital_NOV2022.png',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Octubre 2022 - Nº 143',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/10_2022/revista_digital_ccam_ini_102022.html',
  link: '',
  image: '../../../assets/Tapa_Revista_Digital_OCT2022.png',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Septiembre 2022 - Nº 142',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/09_2022/revista_digital_ccam_ini_092022.html',
  link: '',
  image: '../../../assets/tapa142.jpeg',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Agosto 2022 - Nº 141',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/08_2022/revista_digital_ccam_ini_082022.html',
  link: '',
  image: '../../../assets/tapa141.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Julio 2022 - Nº 140',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/07_2022/revista_digital_ccam_ini_072022.html',
  link: '',
  image: '../../../assets/tapa140.jpeg',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Junio 2022 - Nº 139',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/06_2022/revista_digital_ccam_ini_062022.html',
  link: '',
  image: '../../../assets/tapa139.jpeg',
  order: '',
  marginLeft: 0
}, {
  id: 0,
  fecha: '',
  titulo: 'Mayo 2022 - Nº 138',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/05_2022/revista_digital_ccam_ini_052022.html',
  link: '',
  image: '../../../assets/tapa138.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 1,
  fecha: '',
  titulo: 'Abril 2022 - Nº 137',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/04_2022/noticias_04_2022.htm',
  link: '',
  image: '../../../assets/abril2022.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 2,
  fecha: '',
  titulo: 'Marzo 2022 - Nº 136',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/03_2022/noticias_03_2022.htm',
  link: '',
  image: '../../../assets/marzo2022.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 3,
  fecha: '',
  titulo: 'Especial NOA Nº 135',
  subtitulo: 'http://www.culturademontania.org.ar/Revista_Digital/02_2022/febrero_2022.htm',
  link: '',
  image: '../../../assets/especial2022.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 4,
  fecha: '',
  titulo: 'Febrero 2022 - Nº 134',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/02_2022/noticias_02_2022.htm',
  link: '',
  image: '../../../assets/febrero2022.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 5,
  fecha: '',
  titulo: 'Enero  2022 - Nº 133',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/01_2022/noticias_01_2022.htm',
  link: '',
  image: '../../../assets/enero2022.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 6,
  fecha: '',
  titulo: 'Diciembre 2021 - Nº 132',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/12_2021/noticias_12_2021.htm',
  link: '',
  image: '../../../assets/diciembre2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 7,
  fecha: '',
  titulo: 'Noviembre 2021 - Nº 131',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/11_2021/noticias_11_2021.htm',
  link: '',
  image: '../../../assets/noviembre2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 8,
  fecha: '',
  titulo: 'Octubre 2021 - Nº 130',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/10_2021/noticias_10_2021.htm',
  link: '',
  image: '../../../assets/octubre2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 9,
  fecha: '',
  titulo: 'Septiembre 2021 - Nº 129',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/09_2021/noticias_09_2021.htm',
  link: '',
  image: '../../../assets/septiembre2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 10,
  fecha: '',
  titulo: 'Agosto 2021 - Nº 128',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/08_2021/noticias_08_2021.htm',
  link: '',
  image: '../../../assets/agosto2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 11,
  fecha: '',
  titulo: 'Julio 2021 - Nº 127',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/07_2021/noticias_07_2021.htm',
  link: '',
  image: '../../../assets/julio2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 12,
  fecha: '',
  titulo: 'Junio 2021 - Nº 126',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/06_2021/noticias_06_2021.htm',
  link: '',
  image: '../../../assets/junio2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 13,
  fecha: '',
  titulo: 'Mayo 2021 - Nº 125',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/06_2021/noticias_06_2021.htm',
  link: '',
  image: '../../../assets/mayo2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 14,
  fecha: '',
  titulo: 'Abril 2021 - Nº 124',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/04_2021/noticias_04_2021.htm',
  link: '',
  image: '../../../assets/abril2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 15,
  fecha: '',
  titulo: 'Marzo 2021 - Nº 123',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/03_2021/noticias_03_2021.htm',
  link: '',
  image: '../../../assets/marzo2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 16,
  fecha: '',
  titulo: 'Febrero 2021 - Nº 122',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/02_2021/noticias_02_2021.htm',
  link: '',
  image: '../../../assets/febrero2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 17,
  fecha: '',
  titulo: 'Enero 2021 - Nº 121',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/01_2021/noticias_01_2021.htm',
  link: '',
  image: '../../../assets/enero2021.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 17,
  fecha: '',
  titulo: 'Diciembre 2020 - Nº 120',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/12_2020/noticias_12_2020.htm',
  link: '',
  image: '../../../assets/diciembre2020.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 18,
  fecha: '',
  titulo: 'Noviembre 2020 - Nº 119',
  subtitulo: 'http://www.culturademontania.org.ar/Noticias/11_2020/noticias_11_2020.htm',
  link: '',
  image: '../../../assets/noviembre2020.jpg',
  order: '',
  marginLeft: 0
}, {
  id: 19,
  fecha: '',
  titulo: 'Octubre 2020 - Nº 118',
  subtitulo: 'http://culturademontania.org.ar/Noticias/10_2020/noticias_10_2020.htm',
  link: '',
  image: '../../../assets/octubre2020.jpg',
  order: '',
  marginLeft: 0
}];

/***/ }),

/***/ 39983:
/*!*******************************************!*\
  !*** ./src/app/servicios/crud.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudService": () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var _models_articulos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/articulos */ 66401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);




class CrudService {
  constructor(http, location) {
    this.http = http;
    this.location = location;
    this.URL_API = "http://168.197.50.191/articulos";
    this.URL_API2 = "http://168.197.50.191/adm";
    this.cambioPantalla = true;
    this.Articulos = [];
    this.loading = true;
    this.unArticulo = new _models_articulos__WEBPACK_IMPORTED_MODULE_0__.Articulos();
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  //CRUD  
  uploadFile(formData) {
    console.log('Bandera por aca pasa NM', formData);
    return this.http.post('http://168.197.50.191/upload', formData); // en produccion poner '/upload' por this.URL_API2
  }

  getArticulos() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API);
  }
  getArticulos2() {
    // var precio:number = Number(this.pedido.precio)    no se pa que funciona
    return this.http.get(this.URL_API2);
  }
  getOneArticulo(_id) {
    return this.http.get(this.URL_API + `/${_id}`);
  }
  addArticulo(articulo) {
    return this.http.post(this.URL_API, articulo);
  }
  modificarArticulo(articulo) {
    console.log(articulo, 'antes de modificar');
    return this.http.put(this.URL_API + `/${articulo._id}`, articulo);
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

/***/ 68391:
/*!***************************************************!*\
  !*** ./src/app/servicios/resolve-nota.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveNotaService": () => (/* binding */ ResolveNotaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.service */ 39983);


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

/***/ 23149:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 84362);


/***/ }),

/***/ 53226:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 29810);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 65663);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 1898);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ 57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ 71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 23149);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 78163);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/frontend/browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(76353)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(53226)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map