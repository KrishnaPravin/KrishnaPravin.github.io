(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"config1\"></toaster-container>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <header [ngStyle]=\"{'padding-left':displayFolderFlag ? '135px' : '10px' }\">\n      <span class=\"actionIcon\">\n        <i class=\"fa fa-columns\" aria-hidden=\"true\" (click)=\"toggle()\" [title]= \"displayFolderFlag ? 'Hide folders' : 'Show folders'\"></i>\n      </span>\n      <span class=\"actionIcon\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\" title=\"Delete\" (click)=\"deleteNote()\"></i>\n      </span>\n      <span class=\"actionIcon\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" title=\"Create a note\" (click)=\"createNote()\"></i>\n      </span>\n    </header>\n  </div>\n  <div class=\"row body_cont\">\n      <div class=\"col-sm-1 paddZero\" *ngIf= \"displayFolderFlag\">\n        <app-folders [data] = \"folderList\" (activeFolder) = \"selectedFolder($event)\"></app-folders>\n        <span class=\"actionFolder\" (click)=\"createFolder()\" title= \"Create a folder\" >\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> New Folder\n        </span>\n      </div>\n      <div class=\"col-sm-4 paddZeroNotes\">\n        <app-notes [data]= \"notesList\" (activeNote) = \"selectedNote($event)\"></app-notes>\n      </div>\n      <div [ngClass] = \"displayFolderFlag ? 'col-sm-7' : 'col-sm-8'\">\n       \n       <!-- <div> -->\n        <app-editors [data] = \"activatedNote\" (updatedNotesList) = \"getUpdatedNotes($event)\"></app-editors>\n       <!-- </div> -->\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_all_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/all-setup.service */ "./src/app/services/all-setup.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(service, toasterService) {
        this.service = service;
        this.title = 'notesApp';
        this.displayFolderFlag = true;
        this.newNoteFlag = false;
        this.notesLength = 0;
        this.config1 = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            positionClass: 'toast-top-right'
        });
        this.toasterService = toasterService;
        if (this.folder_id === undefined) {
            this.folder_id = 1;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllFolders();
    };
    AppComponent.prototype.getAllFolders = function () {
        var _this = this;
        this.service.getFolderService().subscribe(function (data) {
            _this.folderList = data;
            // console.log("folder data:", this.folderList);
            _this.getNotes(_this.folderList[0].id);
        }, function (error) {
            var toast = {
                type: 'error',
                body: error,
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    AppComponent.prototype.toggle = function () {
        if (this.displayFolderFlag) {
            this.displayFolderFlag = false;
        }
        else {
            this.displayFolderFlag = true;
        }
    };
    AppComponent.prototype.createFolder = function () {
        var _this = this;
        var newFolder = prompt("Please enter folder name", "");
        var obj = {};
        if (newFolder === null || newFolder == "") {
        }
        else {
            obj['id'] = this.folderList.length + 1;
            obj['folderName'] = newFolder;
            obj['createdDate'] = new Date();
            this.service.addFolderService(obj).subscribe(function (data) {
                if (data) {
                    var toast = {
                        type: 'success',
                        body: 'Folder added successfully.',
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                    _this.getAllFolders();
                }
            }, function (error) {
                var toast = {
                    type: 'error',
                    body: error,
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
            });
        }
    };
    AppComponent.prototype.selectedFolder = function (evt) {
        this.activatedNote = undefined;
        // console.log("selected folder in app:", evt);
        this.folder_id = evt.id;
        this.getNotes(evt.id);
    };
    AppComponent.prototype.getNotes = function (id) {
        var _this = this;
        this.service.getNotesService(id).subscribe(function (data) {
            if (data) {
                _this.notesList = data;
                // console.log("notes list:", data);
            }
        }, function (error) {
            var toast = {
                type: 'error',
                body: error,
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    AppComponent.prototype.selectedNote = function (item) {
        this.activatedNote = item;
    };
    AppComponent.prototype.createNote = function () {
        var _this = this;
        this.activatedNote = undefined;
        this.service.getAllNotesService().subscribe(function (res) {
            if (res) {
                _this.notesData = res;
                var id = Math.max.apply(Math, _this.notesData.map(function (o) { return o.y; }));
                var body_1 = {
                    "id": id + 1,
                    "folderId": _this.folder_id,
                    "title": "New note",
                    "subTitle": "No addition text",
                    "content": "",
                    "modifiedDateTime": new Date()
                };
                _this.service.addNoteService(body_1).subscribe(function (data) {
                    if (data) {
                        _this.notesLength = body_1.id;
                        _this.getNotes(_this.folder_id);
                        var toast = {
                            type: 'success',
                            body: 'Note created successfully.',
                            showCloseButton: true
                        };
                        _this.toasterService.pop(toast);
                    }
                }, function (error) {
                    var toast = {
                        type: 'error',
                        body: error,
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                });
                // this.notesLength = notesData.length;
            }
        }, function (error) {
            var toast = {
                type: 'error',
                body: error,
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    AppComponent.prototype.getUpdatedNotes = function (evt) {
        this.notesList = evt;
        // console.log("updated notes list:", this.notesList);
    };
    // formatDate(date) {
    //   let day = date.getDate();
    //   let month = date.getMonth()+1;
    //   let year = date.getFullYear();
    //   let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //   return day + '/' +  month + '/' + year + ' ' + time;
    // }
    AppComponent.prototype.deleteNote = function () {
        var _this = this;
        // console.log("active note:", this.activatedNote);
        if (this.activatedNote) {
            this.service.deleteNoteService(this.activatedNote.id).subscribe(function (data) {
                if (data) {
                    // if(this.activatedNote.id === this.notesLength){
                    //   this.notesLength = this.notesLength - 1;
                    // }
                    _this.activatedNote = undefined;
                    _this.getNotes(_this.folder_id);
                    var toast = {
                        type: 'success',
                        body: 'Note deleted successfully.',
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                }
            }, function (error) {
                var toast = {
                    type: 'error',
                    body: error,
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
            });
        }
        else {
            var toast = {
                type: 'error',
                body: 'Please select note.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_all_setup_service__WEBPACK_IMPORTED_MODULE_2__["AllSetupService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_all_setup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/all-setup.service */ "./src/app/services/all-setup.service.ts");
/* harmony import */ var _components_folders_folders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/folders/folders.component */ "./src/app/components/folders/folders.component.ts");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/components/notes/notes.component.ts");
/* harmony import */ var _components_editors_editors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/editors/editors.component */ "./src/app/components/editors/editors.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_folders_folders_component__WEBPACK_IMPORTED_MODULE_9__["FoldersComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"],
                _components_editors_editors_component__WEBPACK_IMPORTED_MODULE_11__["EditorsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_13__["ToasterModule"]
            ],
            providers: [_services_all_setup_service__WEBPACK_IMPORTED_MODULE_8__["AllSetupService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_13__["ToasterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/editors/editors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/editors/editors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor_cont\" *ngIf=\"editorData\">\n  <p class=\"timeTitle\">{{editorData.modifiedDateTime | date: 'dd/MM/yyyy HH:SS'}}</p>\n  <textarea name=\"\" id=\"editorContent\" [(ngModel)] = \"editorContent\" (ngModelChange) = \"contentChanges(editorContent)\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/components/editors/editors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/editors/editors.component.ts ***!
  \*********************************************************/
/*! exports provided: EditorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsComponent", function() { return EditorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_all_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/all-setup.service */ "./src/app/services/all-setup.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");




var EditorsComponent = /** @class */ (function () {
    function EditorsComponent(service, toasterService) {
        this.service = service;
        this.updatedNotesList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config1 = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            positionClass: 'toast-top-right'
        });
        this.toasterService = toasterService;
    }
    EditorsComponent.prototype.ngOnInit = function () {
    };
    EditorsComponent.prototype.ngOnChanges = function () {
        this.editorData = this.data;
        // console.log("editor data:", this.editorData);
        if (this.editorData) {
            if (this.editorData.title) {
                this.editorContent = this.editorData.title + '\n' + this.editorData.subTitle + '\n' + this.editorData.content;
            }
        }
    };
    EditorsComponent.prototype.contentChanges = function (content) {
        var _this = this;
        // console.log("content", content);
        var _a = content.split('\n'), title = _a[0], subTitle = _a[1], cont = _a.slice(2);
        var obj = {
            "folderId": this.editorData.folderId,
            "title": title,
            "subTitle": subTitle,
            "content": cont.join(''),
            "modifiedDateTime": new Date()
        };
        // console.log("obj :", obj);
        this.service.updateNoteService(obj, this.editorData.id).subscribe(function (data) {
            if (data) {
                _this.service.getNotesService(_this.editorData.folderId).subscribe(function (res) {
                    if (res) {
                        _this.updatedNotesList.emit(res);
                    }
                }, function (error) {
                    var toast = {
                        type: 'error',
                        body: error,
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                });
            }
        }, function (error) {
            var toast = {
                type: 'error',
                body: error,
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorsComponent.prototype, "updatedNotesList", void 0);
    EditorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editors',
            template: __webpack_require__(/*! ./editors.component.html */ "./src/app/components/editors/editors.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_all_setup_service__WEBPACK_IMPORTED_MODULE_2__["AllSetupService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], EditorsComponent);
    return EditorsComponent;
}());



/***/ }),

/***/ "./src/app/components/folders/folders.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/folders/folders.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"folder_cont\">\n  <div class=\"folders\">\n      <div class=\"folderName\" [ngClass]=\"{'active': selectedItem == folder}\" *ngFor= \"let folder of data\" (click)=\"selectedfolder($event, folder)\">\n        <span>{{folder.folderName}}</span>\n      </div>\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/folders/folders.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/folders/folders.component.ts ***!
  \*********************************************************/
/*! exports provided: FoldersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersComponent", function() { return FoldersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoldersComponent = /** @class */ (function () {
    function FoldersComponent() {
        this.activeFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedItem = {};
    }
    FoldersComponent.prototype.ngOnInit = function () {
    };
    FoldersComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            // console.log("folder list: ", this.data);
            this.selectedItem = this.data[0];
        }
    };
    FoldersComponent.prototype.selectedfolder = function (evt, folderDetails) {
        this.selectedItem = folderDetails;
        this.activeFolder.emit(folderDetails);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FoldersComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FoldersComponent.prototype, "activeFolder", void 0);
    FoldersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-folders',
            template: __webpack_require__(/*! ./folders.component.html */ "./src/app/components/folders/folders.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoldersComponent);
    return FoldersComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/notes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/notes/notes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notes_cont\" *ngIf=\"data\">\n  <div class=\"notes\" *ngFor= \"let note of data.sort(sortFunc)\" [ngClass]=\"{'active': selectedItem == note}\" (click)=\"selectedNote($event, note)\">\n    <p><b>{{note.title}}</b></p>\n    <div class=\"subCont\">\n      <span>{{note.modifiedDateTime | date: 'dd/MM/yyyy'}} </span> &nbsp;\n      <span class=\"subtitle\">{{note.subTitle}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notes/notes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/notes/notes.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.activeNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedItem = {};
    }
    NotesComponent.prototype.ngOnInit = function () {
        // this.selectedItem = this.data[0];
    };
    NotesComponent.prototype.ngOnChanges = function () {
        // if(this.data){
        //   // console.log("folder list: ", this.data);
        //   // this.selectedItem = this.data[0];
        // }
    };
    NotesComponent.prototype.sortFunc = function (a, b) {
        return new Date(b.modifiedDateTime).getTime() - new Date(a.modifiedDateTime).getTime();
    };
    NotesComponent.prototype.selectedNote = function (evt, item) {
        this.selectedItem = item;
        this.activeNote.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotesComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotesComponent.prototype, "activeNote", void 0);
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/components/notes/notes.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/services/all-setup.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/all-setup.service.ts ***!
  \***********************************************/
/*! exports provided: AllSetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSetupService", function() { return AllSetupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");






var AllSetupService = /** @class */ (function () {
    function AllSetupService(http, toasterService) {
        this.http = http;
        this.config1 = new angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterConfig"]({
            positionClass: 'toast-top-center'
        });
        this.toasterService = toasterService;
    }
    AllSetupService.prototype.addFolderService = function (body) {
        return this.http.post('https://json-server-1.herokuapp.com/folders', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.getFolderService = function () {
        return this.http.get('https://json-server-1.herokuapp.com/folders?_sort=folderName&_order=asc')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.getNotesService = function (id) {
        return this.http.get('https://json-server-1.herokuapp.com/notes?folderId=' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.getAllNotesService = function () {
        return this.http.get('https://json-server-1.herokuapp.com/notes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.addNoteService = function (body) {
        return this.http.post('https://json-server-1.herokuapp.com/notes', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.updateNoteService = function (body, id) {
        return this.http.put('https://json-server-1.herokuapp.com/notes/' + id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.deleteNoteService = function (id) {
        return this.http.delete('https://json-server-1.herokuapp.com/notes/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.customError));
    };
    AllSetupService.prototype.customError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = "Error: " + error.error.message;
        }
        else {
            errorMessage = 'Error Code: ' + error.status + '\n Message: ' + error.error.detail;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    AllSetupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], AllSetupService);
    return AllSetupService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krs/Documents/Gyanmatrix/notesApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map