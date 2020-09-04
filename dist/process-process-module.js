(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-process-module"],{

/***/ "./src/app/@theme/model/process-class.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/model/process-class.ts ***!
  \***********************************************/
/*! exports provided: Process, ProcessRecord, ProcessSubRecord, ProcessReq, ProcessReqRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRecord", function() { return ProcessRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessSubRecord", function() { return ProcessSubRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessReq", function() { return ProcessReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessReqRecord", function() { return ProcessReqRecord; });
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());

var ProcessRecord = /** @class */ (function () {
    function ProcessRecord() {
    }
    return ProcessRecord;
}());

var ProcessSubRecord = /** @class */ (function () {
    function ProcessSubRecord() {
    }
    return ProcessSubRecord;
}());

var ProcessReq = /** @class */ (function () {
    function ProcessReq() {
    }
    return ProcessReq;
}());

var ProcessReqRecord = /** @class */ (function () {
    function ProcessReqRecord() {
    }
    return ProcessReqRecord;
}());



/***/ }),

/***/ "./src/app/pages/process/add-edit-function/add-edit-function.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-function/add-edit-function.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Function</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form #functionForm=\"ngForm\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12 form-group\">\n        <label>Function Name</label>\n        <select class=\"form-control \" name=\"function\" [(ngModel)]=\"funcObj.func_value\" #func=\"ngModel\">\n          <option disabled value=\"\">Select Function</option>\n          <option *ngFor=\"let function of functionDropdown\" [value]=\"function.id\">{{function.name}}</option>\n        </select>\n        <div *ngIf=\"func.invalid && (func.dirty || func.touched)\" class=\"errors\">\n          <div *ngIf=\"func.errors && func.errors.required\">\n            Function Name is required.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"form-group\">\n          <label>Function Position</label>\n          <select [disabled]=\"editFunction\" class=\"form-control \" [(ngModel)]=\"funcObj.func_position\" name=\"stepNo\"\n            #position=\"ngModel\" required>\n            <option *ngFor=\"let p of positionValues\" [value]=\"p\">{{p}}</option>\n          </select>\n          <div *ngIf=\"position.invalid && (position.dirty || position.touched)\" class=\"errors\">\n            <div *ngIf=\"position.errors && position.errors.required\">\n              Function Position is required.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-5\" *ngIf=\"functionList.length\">\n        <h5>Current Functions:</h5>\n        <div *ngFor=\"let i of functionList;let z=index\">\n          <span>{{z+1}}.</span>&nbsp;<span>{{i.func_name}}</span>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"funcObj.func_value==='pump'\">\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <label>Pump Speed(%)</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"pumpObj.pump_speed\" name=\"pumpspeed\" #Speed=\"ngModel\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"funcObj.func_value==='water'\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Control Type</label>\n            <nb-radio-group (change)=\"onWaterTypeChange()\" fieldSize=\"small\" class=\"form-control inline-block\"\n              name=\"watertype\" [(ngModel)]=\"waterObj.type\">\n              <nb-radio value=\"water\">Water</nb-radio>\n              <nb-radio value=\"drain\">Drain</nb-radio>\n            </nb-radio-group>\n          </div>\n        </div>\n      </div>\n      <!-- <span *ngIf=\"waterObj.type === 'water'\">IN</span> -->\n      <div *ngIf=\"waterObj.type === 'water'\" class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Water Type</label>\n            <nb-radio-group fieldSize=\"small\" class=\"form-control inline-block\" name=\"water\"\n              [(ngModel)]=\"waterObj.water_type\">\n              <nb-radio *ngFor=\"let w of waterList\" [value]=\"w.id\">{{w.name}}</nb-radio>\n            </nb-radio-group>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"waterObj.type === 'water'\" class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <label>Fill By Fabric Ratio</label>\n            <input nbInput fullWidth type=\"number\" fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" max='10' [(ngModel)]=\"waterObj.fabric_ratio\" name=\"fabricRatio\" />\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <nb-checkbox style=\"margin-top:13px\" name=\"jet\" [(ngModel)]=\"waterObj.jet_level\">Jet Level</nb-checkbox>\n          </div>\n        </div>\n      </div>\n      <br>\n      <!-- <span *ngIf=\"waterObj.type !== 'water'\">DRAIN</span> -->\n      <div *ngIf=\"waterObj.type !== 'water'\" class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Drain Type</label>\n            <nb-radio-group fieldSize=\"small\" name=\"water_drain\" class=\"form-control inline-block\"\n              [(ngModel)]=\"waterObj.drain_type\">\n              <nb-radio *ngFor=\"let d of drainTypeList\" [value]=\"d.id\">{{d.name}}</nb-radio>\n            </nb-radio-group>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"funcObj.func_value==='temp'\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>S V (Set Value)(C)</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" (change)=\"onSetValueChange()\" [(ngModel)]=\"tempObj.set_value\"\n              name=\"setValue\" />\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <label>Rate of Rise (C/minute)</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"tempObj.rate_of_rise\" name=\"rateRise\" />\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Hold Time</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"tempObj.hold_time\" name=\"holdTime\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <nb-checkbox name=\"pressure\" [(ngModel)]=\"tempObj.pressure\">Pressure (Above 80 C)</nb-checkbox>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"funcObj.func_value==='dosing'\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Fill Side Tank </label>\n            <select class=\"form-control\" name=\"fill\" [(ngModel)]=\"dosingObj.fill_type\">\n              <option *ngFor=\"let fill of fillList\" [value]=\"fill.id\">{{fill.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Fill Side Tank Level</label>\n            <select class=\"form-control \" name=\"filllevel\" [(ngModel)]=\"dosingObj.dosing_percentage\">\n              <option *ngFor=\"let level of fillLevelList\" [value]=\"level.id\">{{level.name}}</option>\n            </select>\n            <!-- <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"dosingObj.dosing_percentage\" name=\"dosingpercentage\" /> -->\n          </div>\n        </div>\n      </div>\n      <br>\n      (Will dose after Operator Confirmation)\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <nb-checkbox name=\"dose\" [(ngModel)]=\"dosingObj.have_dose\"> dose at Temp\n              (C) <input fieldSize=\"small\" class=\"col-md-3\" nbInput name=\"tempDosing\"\n                [(ngModel)]=\"dosingObj.dose_at_temp\"></nb-checkbox>\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"dosingObj.dose_type !== 'color'\">\n          <div class=\"form-group\">\n            <nb-checkbox name=\"doseHeat\" [(ngModel)]=\"dosingObj.dose_while_heating\"> Dose while Heating\n            </nb-checkbox>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Dose Type</label>\n            <nb-radio-group fieldSize=\"small\" class=\"form-control inline-block\" name=\"dosetype\"\n              [(ngModel)]=\"dosingObj.dose_type\" (change)=\"onDoseTypeChange()\">\n              <nb-radio value=\"chemical\">Chemical</nb-radio>\n              <nb-radio value=\"color\">Color</nb-radio>\n            </nb-radio-group>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"dosingObj.dose_type != undefined && dosingObj.dose_type === 'chemical'\">\n        <div class=\"row col-md-12 table table-responsive\">\n          <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowChemicalData\"\n            [columnDefs]=\"chemicalcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n            *ngIf=\"chemicalSubRecordArray.length\">\n          </ag-grid-angular>\n        </div>\n        <form #chemicalform=\"ngForm\" class=\"col-md-12\">\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Item Name</label>\n                <input nbInput fullWidth fieldSize=\"small\" type=\"text\" class=\"form-control input-group input-group-sm\"\n                  placeholder=\"Select Item Name\" name=\"chemicalitemName\" autocomplete=\"off\"\n                  [(ngModel)]=\"chemicalSubRecord.item_name\" (click)=\"HideShowSForm()\" required\n                  #chemicalItemName=\"ngModel\">\n                <div *ngIf=\"flagDivSForm\" class=\"dropdown\">\n                  <a href=\"javascript:void(0)\" (click)=\"HideShowSForm()\" class=\"float-right\">[X]</a>\n                  <table class=\"table table-bordered pointer table-responsive\">\n                    <thead>\n                      <tr>\n                        <th>Item Name</th>\n                        <th>Supplier Name</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'chemical')\"\n                        class=\"pointer\">\n                        <td style=\"display:none;\">{{item.entry_id}}</td>\n                        <td>{{item.item_name}}</td>\n                        <td>{{item.supplier_name}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div *ngIf=\"chemicalItemName.invalid && (chemicalItemName.dirty || chemicalItemName.touched)\"\n                  class=\"errors\">\n                  <div *ngIf=\"chemicalItemName.errors && chemicalItemName.errors.required\">\n                    Item Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Supplier Name</label>\n                <input nbInput fullWidth fieldSize=\"small\" type=\"text\" class=\"form-control input-group input-group-sm\"\n                  disabled [(ngModel)]=\"chemicalSubRecord.supplier_name\" name=\"chemicalSuppName\"\n                  #ChemicalSuppName=\"ngModel\" required />\n                <div *ngIf=\"ChemicalSuppName.invalid && (ChemicalSuppName.dirty || ChemicalSuppName.touched)\"\n                  class=\"errors\">\n                  <div *ngIf=\"ChemicalSuppName.errors && ChemicalSuppName.errors.required\">\n                    Supplier Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-5\">\n              <div class=\"form-group\">\n                <label>Concentration</label>\n                <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                  class=\"form-control input-group input-group-sm\" [(ngModel)]=\"chemicalSubRecord.concentration\"\n                  name=\"chemicalConcentration\" #ChemicalConcentration=\"ngModel\" required />\n                <div\n                  *ngIf=\"ChemicalConcentration.invalid && (ChemicalConcentration.dirty || ChemicalConcentration.touched)\"\n                  class=\"errors\">\n                  <div *ngIf=\"ChemicalConcentration.errors && ChemicalConcentration.errors.required\">\n                    Concentration is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <div class=\"form-group\">\n                <label>LR/F.WT</label>\n                <input nbInput fullWidth fieldSize=\"small\" type=\"text\" class=\"form-control input-group input-group-sm\"\n                  [(ngModel)]=\"chemicalSubRecord.lr_or_fabric_wt\" name=\"chemicalBy\" #ChemicalBy=\"ngModel\" required />\n                <div *ngIf=\"ChemicalBy.invalid && (ChemicalBy.dirty || ChemicalBy.touched)\" class=\"errors\">\n                  <div *ngIf=\"ChemicalBy.errors && ChemicalBy.errors.required\">\n                    LR/F.WT is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <button size=\"small\" [disabled]=\"chemicalform.invalid\" style=\"margin-top: 21px;\" nbButton\n                (click)=\"onAddChemicalRecord(chemicalform)\">Add</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div *ngIf=\"funcObj.func_value==='operator'\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"form-group\">\n            <label>Operator Message </label>\n            <select class=\"form-control\" name=\"fill\" [(ngModel)]=\"operatorObj.operator_code\">\n              <option *ngFor=\"let message of operatorMessageList\" [value]=\"message.id\">{{message.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Start at Temp</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"operatorObj.start_at_temp\" name=\"startat\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"operatorObj.operator_code == '4'\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Custom Message</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"operatorObj.operator_message\" name=\"operatorMsg\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button nbButton [disabled]=\"functionForm.invalid\" (click)=\"onSubmit()\">{{submitButton}}</button>\n    <button nbButton (click)=\"activeModal.close(false)\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/process/add-edit-function/add-edit-function.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-function/add-edit-function.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.select.btn-mini {\n  height: auto !important;\n  line-height: 14px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvY2Vzcy9hZGQtZWRpdC1mdW5jdGlvbi9DOlxcVXNlcnNcXERlbGxcXERlc2t0b3BcXG5neC13aXJlZnJhbWUtNGNhNDNjZDhhYjI1NDc4YTA0OTE3NzBjMTIwYTdhNTVmYmI4MmM1ZS9zcmNcXGFwcFxccGFnZXNcXHByb2Nlc3NcXGFkZC1lZGl0LWZ1bmN0aW9uXFxhZGQtZWRpdC1mdW5jdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFvQjtFQUFwQiw0QkFBb0I7RUFBcEIscUJBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLDZCQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MvYWRkLWVkaXQtZnVuY3Rpb24vYWRkLWVkaXQtZnVuY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnNlbGVjdC5idG4tbWluaSB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/process/add-edit-function/add-edit-function.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-function/add-edit-function.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddEditFunctionComponent, CustomRendererChemicalRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditFunctionComponent", function() { return AddEditFunctionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererChemicalRecordComponent", function() { return CustomRendererChemicalRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/process-planning-class */ "./src/app/@theme/model/process-planning-class.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditFunctionComponent = /** @class */ (function () {
    function AddEditFunctionComponent(activeModal) {
        this.activeModal = activeModal;
        this.functionList = [];
        this.submitButton = 'Add';
        this.positionValues = [];
        this.funcObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["FunctionObj"]();
        this.pumpObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["PumpMotorFunctionObj"]();
        this.waterObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["WaterDrainFunctionObj"]();
        this.tempObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["TempFunctionObj"]();
        this.dosingObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["DosingFunctionObj"]();
        this.operatorObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["OperatorMessageObj"]();
        this.waterList = [{ 'id': 'water1', 'name': 'water1' }, { 'id': 'water2', 'name': 'water2' }];
        this.drainTypeList = [{ 'id': 'Complete Drain (at 0 bar)', 'name': 'Complete Drain (at 0 bar)' }, { 'id': 'Pressurize Drain (at 1 bar)', 'name': 'Pressurize Drain (at 1 bar)' }];
        this.fillList = [{ 'id': 'Post Fill Fresh Water', 'name': 'Post Fill Fresh Water' }, { 'id': 'Pre Fill Fresh Water', 'name': 'Pre Fill Fresh Water' }, { 'id': 'Post Fill Machine Water', 'name': 'Post Fill Machine Water' }, { 'id': 'Pre Fill Machine Water', 'name': 'Pre Fill Machine Water' }];
        this.functionDropdown = [{ 'id': 'dosing', 'name': 'Dosing' }, { 'id': 'temp', 'name': 'Temperature Control' }, { 'id': 'pump', 'name': 'Pump Control' }, { 'id': 'water', 'name': 'Water Control' }, { 'id': 'operator', 'name': 'Operator Message' }];
        this.fillLevelList = [{ 'id': 'Level 1', 'name': 'Level 1' }, { 'id': 'Level 2', 'name': 'Level 2' }];
        this.operatorMessageList = [{ 'id': '1', 'name': 'Load Fabric' }, { 'id': '2', 'name': 'UnLoad Fabric' }, { 'id': '3', 'name': 'Close the Door' }, { 'id': '4', 'name': 'Custom Message' }];
        this.chemicalSubRecordArray = [];
        this.chemicalcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name', width: 90 },
            { headerName: 'Concentration', field: 'concentration', width: 90 },
            { headerName: 'LR/F_WT', field: 'lr_or_fabric_wt', width: 90 },
            { headerName: 'Supplier Name', field: 'supplier_name', width: 90 },
        ];
        this.flagDivSForm = false;
        this.chemicalSubRecord = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["ChemicalReq"]();
    }
    AddEditFunctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chemicalcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererChemicalRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
        if (!this.editFunction) {
            if (this.position > 0) {
                this.funcObj.func_position = this.position;
                for (var i = 1; i <= this.position; i++) {
                    this.positionValues.push(i);
                }
            }
        }
        else {
            this.submitButton = "Update";
            if (this.position > 0) {
                this.funcObj.func_position = this.position;
                var index = this.functionList.findIndex(function (v) { return v.func_position == _this.position; });
                if (index > -1) {
                    var ele = this.functionList[index];
                    console.log('ele.dos', ele.dosingFunction);
                    this.funcObj.func_name = ele.func_name;
                    this.funcObj.func_position = ele.func_position;
                    this.funcObj.func_value = ele.func_value;
                    this.dosingObj = ele.dosingFunction;
                    if (this.dosingObj.dosing_chemical.length) {
                        this.dosingObj.dosing_chemical.forEach(function (ele, index) {
                            ele.index = index + 1;
                        });
                        this.chemicalSubRecordArray = this.dosingObj.dosing_chemical;
                        this.rowChemicalData = this.chemicalSubRecordArray.slice();
                    }
                    this.waterObj = ele.waterDrainFunction;
                    this.tempObj = ele.tempFunction;
                    this.pumpObj = ele.pumpMotorFunction;
                    this.operatorObj = ele.operatorFunction;
                }
                for (var i = 1; i <= this.functionList.length; i++) {
                    this.positionValues.push(i);
                }
            }
        }
    };
    AddEditFunctionComponent.prototype.onDoseTypeChange = function () {
        if (this.dosingObj.dose_type == 'color') {
            this.dosingObj.dose_while_heating = false;
        }
    };
    AddEditFunctionComponent.prototype.onWaterTypeChange = function () {
        if (this.waterObj.type == 'water') {
            this.waterObj.drain_type = null;
        }
        else {
            this.waterObj.jet_level = 0;
            this.waterObj.fabric_ratio = null;
            this.waterObj.water_type = null;
        }
    };
    AddEditFunctionComponent.prototype.onSubmit = function () {
        var _this = this;
        var i = this.functionDropdown.findIndex(function (v) { return v.id === _this.funcObj.func_value; });
        if (i > -1) {
            this.funcObj.func_name = this.functionDropdown[i].name;
        }
        else {
            this.funcObj.func_name = '';
        }
        if (this.funcObj.func_value === 'temp') {
            this.funcObj.tempFunction = this.tempObj;
        }
        else if (this.funcObj.func_value === 'water') {
            this.funcObj.waterDrainFunction = this.waterObj;
        }
        else if (this.funcObj.func_value === 'dosing') {
            this.funcObj.dosingFunction = this.dosingObj;
            console.log('chemical', this.chemicalSubRecordArray);
            this.funcObj.dosingFunction.dosing_chemical = this.chemicalSubRecordArray;
        }
        else if (this.funcObj.func_value === 'pump') {
            this.funcObj.pumpMotorFunction = this.pumpObj;
        }
        else if (this.funcObj.func_value === 'operator') {
            var i_1 = this.operatorMessageList.findIndex(function (v) { return v.id === _this.operatorObj.operator_code; });
            if (i_1 > -1 && i_1 != 3) {
                this.operatorObj.operator_message = this.operatorMessageList[i_1].name;
            }
            this.funcObj.operatorFunction = this.operatorObj;
        }
        this.activeModal.close(this.funcObj);
    };
    AddEditFunctionComponent.prototype.onSetValueChange = function () {
        if (this.tempObj.set_value > 100) {
            this.tempObj.pressure = true;
        }
        else {
            this.tempObj.pressure = false;
        }
    };
    AddEditFunctionComponent.prototype.HideShowSForm = function () {
        this.flagDivSForm = !this.flagDivSForm;
    };
    AddEditFunctionComponent.prototype.onAddChemicalRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.chemicalSubRecordArray.length) {
            this.chemicalSubRecord.index = j;
        }
        else if (this.chemicalSubRecord.index == undefined) {
            this.chemicalSubRecord.index = this.chemicalSubRecordArray.length + 1;
        }
        this.chemicalSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.chemicalSubRecord.index) {
                ele = _this.chemicalSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.chemicalSubRecordArray.push(this.chemicalSubRecord);
        }
        this.rowChemicalData = this.chemicalSubRecordArray.slice();
        this.chemicalSubRecord = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["ChemicalReq"]();
        form.resetForm();
    };
    AddEditFunctionComponent.prototype.onEditChemicalRecord = function (data) {
        var i = this.chemicalSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.chemicalSubRecord = this.chemicalSubRecordArray[i];
    };
    AddEditFunctionComponent.prototype.deleteChemicalRecord = function (data) {
        var i = this.chemicalSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.chemicalSubRecordArray.splice(i, 1);
        this.rowChemicalData = this.chemicalSubRecordArray.slice();
    };
    AddEditFunctionComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditFunctionComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditFunctionComponent.prototype, "functionList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditFunctionComponent.prototype, "editFunction", void 0);
    AddEditFunctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-function',
            template: __webpack_require__(/*! ./add-edit-function.component.html */ "./src/app/pages/process/add-edit-function/add-edit-function.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-function.component.scss */ "./src/app/pages/process/add-edit-function/add-edit-function.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], AddEditFunctionComponent);
    return AddEditFunctionComponent;
}());

var CustomRendererChemicalRecordComponent = /** @class */ (function () {
    function CustomRendererChemicalRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererChemicalRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererChemicalRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererChemicalRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditChemicalRecord(this.params.value);
    };
    CustomRendererChemicalRecordComponent.prototype.onDeleteRecord = function () {
        this.params.action.deleteChemicalRecord(this.params.value);
    };
    CustomRendererChemicalRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-function.component.scss */ "./src/app/pages/process/add-edit-function/add-edit-function.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomRendererChemicalRecordComponent);
    return CustomRendererChemicalRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>{{topHeader}}\n  </nb-card-header>\n  <nb-card-body>\n    <form #vform=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Process Name</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"processModal.process_name\" name=\"processName\" #processname=\"ngModel\" required />\n            <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n              <div *ngIf=\"processname.errors && processname.errors.required\">\n                Process Name is required.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>No. of Dying Bath</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"processModal.no_dying_bath\" name=\"dyingBath\"\n              #dyingbath=\"ngModel\" required />\n            <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n              <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                No. of Dying Bath is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>DC Mulitplying Fac.</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"processModal.dc_multiplying_fac\" name=\"dc\" #Dc=\"ngModel\"\n              required />\n            <div *ngIf=\"Dc.invalid && (Dc.dirty || Dc.touched)\" class=\"errors\">\n              <div *ngIf=\"Dc.errors && Dc.errors.required\">\n                DC Mulitplying Fac is required.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              SCOURING\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.temperature\" name=\"scouringTemp\"\n                      #ScouringTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.plc_program_no\"\n                      name=\"scouring_program_no\" #ScouringProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                  No. of Dying Bath is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.hold_time\" name=\"scouringTime\"\n                      #ScouringTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.rate_temperature\"\n                      name=\"scouringRateTemp\" #ScouringRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowScouringData\"\n                  [columnDefs]=\"scouringcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"scouringSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #scouringform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"scouringitemName\" autocomplete=\"off\" [(ngModel)]=\"scouringSubRecord.item_name\"\n                        (click)=\"HideShowSForm()\" required #scouringItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivSForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowSForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'scouring')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"scouringItemName.invalid && (scouringItemName.dirty || scouringItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"scouringItemName.errors && scouringItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"scouringSubRecord.concentration\"\n                        name=\"scouringConcentration\" #ScouringConcentration=\"ngModel\" required />\n                      <div\n                        *ngIf=\"ScouringConcentration.invalid && (ScouringConcentration.dirty || ScouringConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ScouringConcentration.errors && ScouringConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"scouringSubRecord.item_by\"\n                        name=\"scouringBy\" #ScouringBy=\"ngModel\" required />\n                      <div *ngIf=\"ScouringBy.invalid && (ScouringBy.dirty || ScouringBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"ScouringBy.errors && ScouringBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"scouringSubRecord.supplier_name\" name=\"scouringSuppName\"\n                        #ScouringSuppName=\"ngModel\" required />\n                      <div *ngIf=\"ScouringSuppName.invalid && (ScouringSuppName.dirty || ScouringSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ScouringSuppName.errors && ScouringSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"scouringform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddScouringRecord(scouringform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              DYING\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.temperature\" name=\"dyingTemp\"\n                      #DyingTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.plc_program_no\" name=\"dying_program_no\"\n                      #dyingProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                  <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                    No. of Dying Bath is required.\n                                  </div>\n                                </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.hold_time\" name=\"dyingTime\"\n                      #DyingTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.rate_temperature\" name=\"dyingRateTemp\"\n                      #DyringRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowDyingData\"\n                  [columnDefs]=\"dyingcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"dyingSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #dyingform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"dyingitemName\" autocomplete=\"off\" [(ngModel)]=\"dyingSubRecord.item_name\"\n                        (click)=\"HideShowDForm()\" required #dyingItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivDForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowDForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'dying')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"dyingItemName.invalid && (dyingItemName.dirty || dyingItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"dyingItemName.errors && dyingItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"dyingSubRecord.concentration\"\n                        (keypress)=\"numberOnly($event)\" name=\"dyingConcentration\" #DyingConcentration=\"ngModel\"\n                        required />\n                      <div\n                        *ngIf=\"DyingConcentration.invalid && (DyingConcentration.dirty || DyingConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"DyingConcentration.errors && DyingConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"dyingSubRecord.item_by\"\n                        name=\"dyingBy\" #DyingBy=\"ngModel\" required />\n                      <div *ngIf=\"DyingBy.invalid && (DyingBy.dirty || DyingBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"DyingBy.errors && DyingBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"dyingSubRecord.supplier_name\" name=\"dyingSuppName\" #DyingSuppName=\"ngModel\"\n                        required />\n                      <div *ngIf=\"DyingSuppName.invalid && (DyingSuppName.dirty || DyingSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"DyingSuppName.errors && DyingSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"dyingform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddDyingRecord(dyingform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              RC\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.temperature\" name=\"rcTemp\"\n                      #RcTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.plc_program_no\" name=\"rc_program_no\"\n                      #RcProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                  <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                    No. of Dying Bath is required.\n                                  </div>\n                                </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.hold_time\" name=\"rcTime\"\n                      #RcTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.rate_temperature\" name=\"rcRateTemp\"\n                      #RcRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowRCData\"\n                  [columnDefs]=\"rccolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"rcSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #rcform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\" name=\"rcitemName\"\n                        autocomplete=\"off\" [(ngModel)]=\"rcSubRecord.item_name\" (click)=\"HideShowRForm()\" required\n                        #rcItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivRForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowRForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'rc')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"rcItemName.invalid && (rcItemName.dirty || rcItemName.touched)\" class=\"errors\">\n                        <div *ngIf=\"rcItemName.errors && rcItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"rcSubRecord.concentration\"\n                        name=\"rcConcentration\" #RcConcentration=\"ngModel\" required />\n                      <div *ngIf=\"RcConcentration.invalid && (RcConcentration.dirty || RcConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"RcConcentration.errors && RcConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"rcSubRecord.item_by\" name=\"rcBy\"\n                        #RcBy=\"ngModel\" required />\n                      <div *ngIf=\"RcBy.invalid && (RcBy.dirty || RcBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"RcBy.errors && RcBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled [(ngModel)]=\"rcSubRecord.supplier_name\"\n                        name=\"rcSuppName\" #RcSuppName=\"ngModel\" required />\n                      <div *ngIf=\"RcSuppName.invalid && (RcSuppName.dirty || RcSuppName.touched)\" class=\"errors\">\n                        <div *ngIf=\"RcSuppName.errors && RcSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"rcform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddRCRecord(rcform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              COLD WASH\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.temperature\" name=\"coldWashTemp\"\n                      #ColdWashTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.plc_program_no\"\n                      name=\"coldWash_program_no\" #coldWashProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                  No. of Dying Bath is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.hold_time\" name=\"coldWashTime\"\n                      #coldWashtime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.rate_temperature\"\n                      name=\"coldWashRateTemp\" #ColdWashRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowColdWashData\"\n                  [columnDefs]=\"coldwashcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"coldWashSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #coldwashform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"coldWashitemName\" autocomplete=\"off\" [(ngModel)]=\"coldWashSubRecord.item_name\"\n                        (click)=\"HideShowCForm()\" required #ColdWashItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivCForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowCForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'cold_wash')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"ColdWashItemName.invalid && (ColdWashItemName.dirty || ColdWashItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashItemName.errors && ColdWashItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"coldWashSubRecord.concentration\"\n                        name=\"coldWashConcentration\" #ColdWashConcentration=\"ngModel\" required />\n                      <div\n                        *ngIf=\"ColdWashConcentration.invalid && (ColdWashConcentration.dirty || ColdWashConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashConcentration.errors && ColdWashConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"coldWashSubRecord.item_by\"\n                        name=\"coldWashBy\" #ColdWashBy=\"ngModel\" required />\n                      <div *ngIf=\"ColdWashBy.invalid && (ColdWashBy.dirty || ColdWashBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"ColdWashBy.errors && ColdWashBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"coldWashSubRecord.supplier_name\" name=\"coldWashSuppName\"\n                        #ColdWashSuppName=\"ngModel\" required />\n                      <div *ngIf=\"ColdWashSuppName.invalid && (ColdWashSuppName.dirty || ColdWashSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashSuppName.errors && ColdWashSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"coldwashform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddColdWashRecord(coldwashform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"box-footer\">\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\n        &nbsp;\n        <button nbButton type=\"reset\" routerLink='/pages/process/view-process-list' id=\"Cancel\">Cancel</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MvYWRkLWVkaXQtcHJvY2Vzcy9hZGQtZWRpdC1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditProcessComponent, CustomRendererScouringRecordComponent, CustomRendererRCRecordComponent, CustomRendererColdWashRecordComponent, CustomRendererDyingRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProcessComponent", function() { return AddEditProcessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererScouringRecordComponent", function() { return CustomRendererScouringRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererRCRecordComponent", function() { return CustomRendererRCRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererColdWashRecordComponent", function() { return CustomRendererColdWashRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererDyingRecordComponent", function() { return CustomRendererDyingRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/model/process-class */ "./src/app/@theme/model/process-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddEditProcessComponent = /** @class */ (function () {
    function AddEditProcessComponent(toasterService, route, router, processService, authService, supplierService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.router = router;
        this.processService = processService;
        this.authService = authService;
        this.supplierService = supplierService;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.flagDivSForm = false;
        this.flagDivRForm = false;
        this.flagDivDForm = false;
        this.flagDivCForm = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.processRecord = [];
        this.scouringSubRecordArray = [];
        this.rcSubRecordArray = [];
        this.dyingSubRecordArray = [];
        this.coldWashSubRecordArray = [];
        this.itemList = [];
        this.processReqRecord = [];
        this.scouringcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.dyingcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.rccolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.coldwashcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.processModal = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["Process"]();
        this.scouringRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.dyingRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.rcRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.coldWashRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.scouringSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.coldWashSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.dyingSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.rcSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
    }
    AddEditProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditProcessComponent.prototype.ngOnInit = function () {
        this.setScouringColumns();
        this.setRCColumns();
        this.setColdWashColumns();
        this.setDyingColumns();
        this.getItemList();
        this.onPageLoad();
    };
    AddEditProcessComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Process';
            }
            else {
                this.topHeader = 'Process View';
                this.viewFlag = true;
            }
            this.processService.getProcessById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.processModal = data[0].data.process[0];
                    _this.processReqRecord = data[0].data.process_record;
                    if (_this.processReqRecord.length) {
                        var scouringIndex_1 = 0;
                        var dyingIndex_1 = 0;
                        var rcIndex_1 = 0;
                        var coldWashIndex_1 = 0;
                        _this.processReqRecord.forEach(function (ele, index) {
                            if (ele.type === 'scouring') {
                                if (!scouringIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.scouringRecord, ele);
                                }
                                scouringIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.scouringSubRecordArray, _this.scouringSubRecord, ele, scouringIndex_1);
                            }
                            else if (ele.type === 'rc') {
                                if (!rcIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.rcRecord, ele);
                                }
                                rcIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.rcSubRecordArray, _this.rcSubRecord, ele, rcIndex_1);
                            }
                            else if (ele.type === 'cold_wash') {
                                if (!coldWashIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.coldWashRecord, ele);
                                }
                                coldWashIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.coldWashSubRecordArray, _this.coldWashSubRecord, ele, coldWashIndex_1);
                            }
                            else if (ele.type === 'dying') {
                                if (!dyingIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.dyingRecord, ele);
                                }
                                dyingIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.dyingSubRecordArray, _this.dyingSubRecord, ele, dyingIndex_1);
                            }
                        });
                    }
                    console.log('dying', _this.dyingSubRecordArray);
                    _this.rowColdWashData = _this.coldWashSubRecordArray;
                    _this.rowDyingData = _this.dyingSubRecordArray;
                    _this.rowRCData = _this.rcSubRecordArray;
                    _this.rowScouringData = _this.scouringSubRecordArray;
                    _this.processModal.process_record = _this.processRecord;
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Process';
        }
    };
    AddEditProcessComponent.prototype.setProcessRecordOnLoad = function (processRecord, ele) {
        processRecord.type = ele.index;
        processRecord.control_id = ele.control_id;
        processRecord.temperature = ele.temperature;
        processRecord.plc_program_no = ele.plc_program_no;
        processRecord.hold_time = ele.hold_time;
        processRecord.rate_temperature = ele.rate_temperature;
    };
    AddEditProcessComponent.prototype.setProcessSubRecordOnLoad = function (prcoessSubRecordArray, processSubRecordObj, ele, index) {
        processSubRecordObj = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        processSubRecordObj.entry_id = ele.entry_id;
        processSubRecordObj.index = index;
        processSubRecordObj.item_id = ele.item_id;
        processSubRecordObj.item_name = ele.item_name;
        processSubRecordObj.concentration = ele.concentration;
        processSubRecordObj.item_by = ele.item_by;
        processSubRecordObj.supplier_name = ele.supplier_name;
        prcoessSubRecordArray.push(processSubRecordObj);
    };
    AddEditProcessComponent.prototype.setScouringColumns = function () {
        var _this = this;
        this.scouringcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererScouringRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setRCColumns = function () {
        var _this = this;
        this.rccolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererRCRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setColdWashColumns = function () {
        var _this = this;
        this.coldwashcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererColdWashRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setDyingColumns = function () {
        var _this = this;
        this.dyingcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererDyingRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.getItemList = function () {
        var _this = this;
        console.log('dsae');
        this.supplierService.getAllSupplierItemData().subscribe(function (data) {
            if (!data[0].error) {
                _this.itemList = data[0].data;
            }
        });
    };
    AddEditProcessComponent.prototype.selectItem = function (value, table_name) {
        this.flagDivSForm = false;
        this.flagDivCForm = false;
        this.flagDivDForm = false;
        this.flagDivRForm = false;
        if (table_name === 'scouring') {
            this.scouringSubRecord.item_id = value.entry_id;
            this.scouringSubRecord.item_name = value.item_name;
            this.scouringSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'rc') {
            this.rcSubRecord.item_id = value.entry_id;
            this.rcSubRecord.item_name = value.item_name;
            this.rcSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'dying') {
            this.dyingSubRecord.item_id = value.entry_id;
            this.dyingSubRecord.item_name = value.item_name;
            this.dyingSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'cold_wash') {
            this.coldWashSubRecord.item_id = value.entry_id;
            this.coldWashSubRecord.item_name = value.item_name;
            this.coldWashSubRecord.supplier_name = value.supplier_name;
        }
    };
    AddEditProcessComponent.prototype.HideShowSForm = function () {
        this.flagDivSForm = !this.flagDivSForm;
    };
    AddEditProcessComponent.prototype.HideShowRForm = function () {
        this.flagDivRForm = !this.flagDivRForm;
    };
    AddEditProcessComponent.prototype.HideShowDForm = function () {
        this.flagDivDForm = !this.flagDivDForm;
    };
    AddEditProcessComponent.prototype.HideShowCForm = function () {
        this.flagDivCForm = !this.flagDivCForm;
    };
    AddEditProcessComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditProcessComponent.prototype.onAddScouringRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.scouringSubRecordArray.length) {
            this.scouringSubRecord.index = j;
        }
        else if (this.scouringSubRecord.index == undefined) {
            this.scouringSubRecord.index = this.scouringSubRecordArray.length + 1;
        }
        this.scouringSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.scouringSubRecord.index) {
                ele = _this.scouringSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.scouringSubRecordArray.push(this.scouringSubRecord);
        }
        this.rowScouringData = this.scouringSubRecordArray.slice();
        this.scouringSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditScouringRecord = function (data) {
        console.log('data', data);
        var i = this.scouringSubRecordArray.findIndex(function (v) { return v.index == data; });
        console.log('index', i);
        console.log('record', this.scouringSubRecordArray);
        this.scouringSubRecord = this.scouringSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteScouringRecord = function (data) {
        console.log(data);
        var i = this.scouringSubRecordArray.findIndex(function (v) { return v.index == data; });
        console.log('index', i);
        this.scouringSubRecordArray.splice(i, 1);
        this.rowScouringData = this.scouringSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddRCRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.rcSubRecordArray.length) {
            this.rcSubRecord.index = j;
        }
        else if (this.rcSubRecord.index == undefined) {
            this.rcSubRecord.index = this.rcSubRecordArray.length + 1;
        }
        this.rcSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.rcSubRecord.index) {
                ele = _this.rcSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.rcSubRecordArray.push(this.rcSubRecord);
        }
        this.rowRCData = this.rcSubRecordArray.slice();
        this.rcSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditRCRecord = function (data) {
        var i = this.rcSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.rcSubRecord = this.rcSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteRCRecord = function (data) {
        var i = this.rcSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.rcSubRecordArray.splice(i, 1);
        this.rowRCData = this.rcSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddDyingRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.dyingSubRecordArray.length) {
            this.dyingSubRecord.index = j;
        }
        else if (this.dyingSubRecord.index == undefined) {
            this.dyingSubRecord.index = this.dyingSubRecordArray.length + 1;
        }
        this.dyingSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.dyingSubRecord.index) {
                ele = _this.dyingSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.dyingSubRecordArray.push(this.dyingSubRecord);
        }
        this.rowDyingData = this.dyingSubRecordArray.slice();
        this.dyingSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditDyingRecord = function (data) {
        console.log('data', data);
        var i = this.dyingSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.dyingSubRecord = this.dyingSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteDyingRecord = function (data) {
        var i = this.dyingSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.dyingSubRecordArray.splice(i, 1);
        this.rowDyingData = this.dyingSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddColdWashRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.coldWashSubRecordArray.length) {
            this.coldWashSubRecord.index = j;
        }
        else if (this.coldWashSubRecord.index == undefined) {
            this.coldWashSubRecord.index = this.coldWashSubRecordArray.length + 1;
        }
        this.coldWashSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.coldWashSubRecord.index) {
                ele = _this.coldWashSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.coldWashSubRecordArray.push(this.coldWashSubRecord);
        }
        this.rowColdWashData = this.coldWashSubRecordArray.slice();
        this.coldWashSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditColdWashRecord = function (data) {
        var i = this.coldWashSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.coldWashSubRecord = this.coldWashSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteColdWashRecord = function (data) {
        var i = this.coldWashSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.coldWashSubRecordArray.splice(i, 1);
        this.rowColdWashData = this.coldWashSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.processReq = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessReq"]();
        this.processReqRecord = [];
        this.processReq.entry_id = this.processModal.entry_id;
        this.processReq.process_name = this.processModal.process_name;
        this.processReq.no_dying_bath = this.processModal.no_dying_bath;
        this.processReq.dc_multiplying_fac = this.processModal.dc_multiplying_fac;
        this.processReq.created_by = this.processModal.created_by;
        this.processReq.created_date = this.processModal.created_date;
        this.processReq.updated_by = this.processModal.updated_by;
        this.processReq.updated_date = this.processModal.updated_date;
        if (this.scouringSubRecordArray.length) {
            this.scouringSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.scouringRecord, 'scouring');
            });
        }
        if (this.dyingSubRecordArray.length) {
            this.dyingSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.dyingRecord, 'dying');
            });
        }
        if (this.rcSubRecordArray.length) {
            this.rcSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.rcRecord, 'rc');
            });
        }
        if (this.coldWashSubRecordArray.length) {
            this.coldWashSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.coldWashRecord, 'cold_wash');
            });
        }
        if (this.processReqRecord.length) {
            this.processReq.process_req_record = this.processReqRecord;
        }
        console.log('process', this.processReq);
        // for update
        if (this.id) {
            this.processReq.updated_by = this.currentUserId;
            this.processService.updateProcess(this.processReq).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.processReq.created_by = this.currentUserId;
            this.processReq.user_head_id = this.currentUserHeadid;
            console.log(this.processReq);
            this.processService.addProcess(this.processReq).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditProcessComponent.prototype.getProcessReqRecord = function (ele, record, type) {
        var processSingleReqRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessReqRecord"]();
        processSingleReqRecord.entry_id = ele.entry_id;
        processSingleReqRecord.index = ele.index;
        processSingleReqRecord.item_id = ele.item_id;
        processSingleReqRecord.item_name = ele.item_name;
        processSingleReqRecord.concentration = ele.concentration;
        processSingleReqRecord.supplier_name = ele.supplier_name;
        processSingleReqRecord.item_by = ele.item_by;
        processSingleReqRecord.control_id = record.control_id;
        processSingleReqRecord.type = type;
        processSingleReqRecord.temperature = record.temperature;
        processSingleReqRecord.plc_program_no = record.plc_program_no;
        processSingleReqRecord.hold_time = record.hold_time;
        processSingleReqRecord.rate_temperature = record.rate_temperature;
        this.processReqRecord.push(processSingleReqRecord);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], AddEditProcessComponent.prototype, "instance", void 0);
    AddEditProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-process',
            template: __webpack_require__(/*! ./add-edit-process.component.html */ "./src/app/pages/process/add-edit-process/add-edit-process.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_7__["ProcessService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"]])
    ], AddEditProcessComponent);
    return AddEditProcessComponent;
}());

var CustomRendererScouringRecordComponent = /** @class */ (function () {
    function CustomRendererScouringRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererScouringRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererScouringRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererScouringRecordComponent.prototype.editRecord = function () {
        console.log('this', this.params.value);
        this.params.action.onEditScouringRecord(this.params.value);
    };
    CustomRendererScouringRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (res) {
            console.log('rex', res);
            if (res) {
                _this.params.action.deleteScouringRecord(_this.params.value);
            }
        });
    };
    CustomRendererScouringRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererScouringRecordComponent);
    return CustomRendererScouringRecordComponent;
}());

var CustomRendererRCRecordComponent = /** @class */ (function () {
    function CustomRendererRCRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererRCRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererRCRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererRCRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRCRecord(this.params.value);
    };
    CustomRendererRCRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRCRecord(_this.params.value);
            }
        });
    };
    CustomRendererRCRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererRCRecordComponent);
    return CustomRendererRCRecordComponent;
}());

var CustomRendererColdWashRecordComponent = /** @class */ (function () {
    function CustomRendererColdWashRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererColdWashRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererColdWashRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererColdWashRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditColdWashRecord(this.params.value);
    };
    CustomRendererColdWashRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteColdWashRecord(_this.params.value);
            }
        });
    };
    CustomRendererColdWashRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererColdWashRecordComponent);
    return CustomRendererColdWashRecordComponent;
}());

var CustomRendererDyingRecordComponent = /** @class */ (function () {
    function CustomRendererDyingRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererDyingRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererDyingRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererDyingRecordComponent.prototype.editRecord = function () {
        console.log('this.params', this.params.action);
        this.params.action.onEditDyingRecord(this.params.value);
    };
    CustomRendererDyingRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteDyingRecord(_this.params.value);
            }
        });
    };
    CustomRendererDyingRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererDyingRecordComponent);
    return CustomRendererDyingRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/add-step/add-step.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/process/add-step/add-step.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Step</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form #stepForm=\"ngForm\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12 form-group\">\n        <label>Step Name</label>\n        <input class=\"form-control input-group\" type=\"text\" name=\"stepName\" [(ngModel)]=\"step_name\" #name=\"ngModel\">\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"errors\">\n          <div *ngIf=\"name.errors && name.errors.required\">\n            Step Name is required.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"form-group\">\n          <label>Step Position</label>\n          <select [disabled]=\"editStep\" class=\"form-control\" [(ngModel)]=\"step_position\" name=\"stepNo\"\n            #position=\"ngModel\" required>\n            <option *ngFor=\"let p of positionValues\" [value]=\"p\">{{p}}</option>\n          </select>\n          <div *ngIf=\"position.invalid && (position.dirty || position.touched)\" class=\"errors\">\n            <div *ngIf=\"position.errors && position.errors.required\">\n              Step Position is required.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-5\" *ngIf=\"stepList.length\">\n        <h5>Current Steps:</h5>\n        <div *ngFor=\"let i of stepList;let z=index\">\n          <span>{{z+1}}.</span>&nbsp;<span>{{i.step_name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button nbButton [disabled]=\"stepForm.invalid\" (click)=\"onCreate()\">{{submitButton}}</button>\n    <button nbButton (click)=\"activeModal.close(false)\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/process/add-step/add-step.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/process/add-step/add-step.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select.btn-mini {\n  height: auto !important;\n  line-height: 14px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvY2Vzcy9hZGQtc3RlcC9DOlxcVXNlcnNcXERlbGxcXERlc2t0b3BcXG5neC13aXJlZnJhbWUtNGNhNDNjZDhhYjI1NDc4YTA0OTE3NzBjMTIwYTdhNTVmYmI4MmM1ZS9zcmNcXGFwcFxccGFnZXNcXHByb2Nlc3NcXGFkZC1zdGVwXFxhZGQtc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF1QjtFQUN2Qiw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9jZXNzL2FkZC1zdGVwL2FkZC1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC5idG4tbWluaSB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/process/add-step/add-step.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/process/add-step/add-step.component.ts ***!
  \**************************************************************/
/*! exports provided: AddStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStepComponent", function() { return AddStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddStepComponent = /** @class */ (function () {
    function AddStepComponent(activeModal) {
        this.activeModal = activeModal;
        this.step_name = '';
        this.step_position = 1;
        this.positionValues = [];
        this.stepList = [];
        this.submitButton = "Add";
    }
    AddStepComponent.prototype.ngOnInit = function () {
        if (!this.editStep) {
            if (this.position > 0) {
                this.step_position = this.position;
                for (var i = 1; i <= this.position; i++) {
                    this.positionValues.push(i);
                }
            }
        }
        else {
            this.submitButton = "Update";
            if (this.position > 0) {
                this.step_position = this.position;
                this.step_name = this.stepList[this.position - 1].step_name;
                for (var i = 1; i <= this.stepList.length; i++) {
                    this.positionValues.push(i);
                }
            }
        }
    };
    AddStepComponent.prototype.onCreate = function () {
        var obj = { 'name': this.step_name, 'position': this.step_position };
        this.activeModal.close(obj);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddStepComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddStepComponent.prototype, "stepList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddStepComponent.prototype, "editStep", void 0);
    AddStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-step',
            template: __webpack_require__(/*! ./add-step.component.html */ "./src/app/pages/process/add-step/add-step.component.html"),
            styles: [__webpack_require__(/*! ./add-step.component.scss */ "./src/app/pages/process/add-step/add-step.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], AddStepComponent);
    return AddStepComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/dynamic-process/dynamic-process.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/process/dynamic-process/dynamic-process.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Dynamic Process\n  </nb-card-header>\n  <nb-card-body>\n    <form #vform=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-3 ml-3\">\n          <div class=\"form-group\">\n            <label>Process Name</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"processModal.process_name\" name=\"processName\" #processname=\"ngModel\" required />\n            <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n              <div *ngIf=\"processname.errors && processname.errors.required\">\n                Process Name is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 ml-3\">\n          <div class=\"form-group\">\n            <label>Time (minutes)</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"processModal.time\" name=\"timeMin\" #processtime=\"ngModel\" required (keypress)=\"numberOnly($event)\"/>\n            <div *ngIf=\"processtime.invalid && (processtime.dirty || processtime.touched)\" class=\"errors\">\n              <div *ngIf=\"processtime.errors && processtime.errors.required\">\n                Process Time is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <i class=\"fa fa-plus-circle mr-2\" style=\"color:#4ca6ff;font-size:25px;cursor: pointer;margin: 23px;\"\n            (click)=\"onAddStep()\"></i>\n        </div>\n      </div>\n      <!-- <br> -->\n      <div class=\"col-md-12\" *ngIf=\"stepList.length\">\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n\n          <nb-accordion *ngFor=\"let step of stepList\" cdkDragLockAxis=\"y\" cdkDrag>\n            <nb-accordion-item #item (click)=\"onStepClick(step)\">\n              <nb-accordion-item-header class=\"item-header\">\n                {{step.step_name}}\n                <i class=\"fa fa-plus-circle\" style=\"color:green;font-size:25px;cursor: pointer;margin-right: 69px;\"\n                  (click)=\"onAddFunction(step)\"></i>\n                <i class=\"ft-edit-2 font-medium-1\" style=\"color:#4ca6ff;margin-right: 41px;\" (click)=\"onEditStep(step)\">\n                </i>\n                <i class=\"ft-trash font-medium-1\" style=\"color:red;margin-right: 17px;\" (click)=\"onDeleteStep(step)\">\n                </i>\n              </nb-accordion-item-header>\n              <nb-accordion-item-body>\n                <div *ngIf=\"step.functionList && step.functionList.length\">\n                  <!-- <br> -->\n                  <nb-list cdkDropList class=\"example-list\"\n                    (cdkDropListDropped)=\"dropFunction($event,step.step_position)\">\n                    <nb-list-item *ngFor=\"let func of step.functionList\" cdkDragLockAxis=\"y\" cdkDrag>\n                      <div>\n                        {{func.func_name}}\n                        <i class=\"ft-trash font-medium-1\" style=\"color:red;float: right;\"\n                          (click)=\"onDeleteFunction(func)\">\n                        </i>\n                        <i class=\"ft-edit-2 font-medium-1\" style=\"color:#4ca6ff;float: right;margin-right: 1.5%;\"\n                          (click)=\"onEditFunction(func)\">\n                        </i>\n                        <div *ngIf=\"func.func_value==='temp'\">\n                          <div class=\"row\">\n                            <div class=\"col-md-3\">\n                              <label><b>S V (Set Value)(C) :</b> {{func.tempFunction.set_value}}</label>\n                            </div>\n                            <div class=\"col-md-3\">\n                              <label><b>Rate of Rise (C/minute) :</b> {{func.tempFunction.rate_of_rise}}</label>\n                            </div>\n                            <div class=\"col-md-3\">\n                              <label><b>Hold Time :</b> {{func.tempFunction.hold_time}}</label>\n                            </div>\n                            <div class=\"col-md-3\">\n                              <label><b>Pressure (Above 80 C) :</b> {{func.tempFunction.pressure}}</label>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"func.func_value==='pump'\">\n                          <div class=\"row\">\n                            <div class=\"col-md-10\">\n                              <label><b>Pump Speed (%) : </b>{{func.pumpMotorFunction.pump_speed}}</label>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"func.func_value==='dosing'\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label><b>Fill Side Tank :</b> {{func.dosingFunction.fill_type}}</label>\n                            </div>\n                            <div class=\"col-md-4\">\n                              <label><b>Fill Side Tank (%) :</b> {{func.dosingFunction.dosing_percentage}}</label>\n                            </div>\n                            <div class=\"col-md-4\" *ngIf=\"func.dosingFunction.have_dose\">\n                              <label><b>Dose at Temp (C) :</b> {{func.dosingFunction.dose_at_temp}}</label>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label><b>Dose Type :</b> {{func.dosingFunction.dose_type}}</label>\n                            </div>\n                            <div class=\"col-md-4\">\n                              <label><b>Dose While Heating :</b> {{func.dosingFunction.dose_while_heating}}</label>\n                            </div>\n                          </div>\n                          <div class=\"row\"\n                            *ngIf=\"func.dosingFunction.dose_type != undefined && func.dosingFunction.dose_type === 'chemical'\">\n                            <div class=\"col-md-6 table table-responsive\">\n                              <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\"\n                                [rowData]=\"func.dosingFunction.dosing_chemical\" [columnDefs]=\"chemicalcolumnDefs\"\n                                [pagination]=\"true\" [paginationPageSize]='10'\n                                *ngIf=\"func.dosingFunction.dosing_chemical.length\">\n                              </ag-grid-angular>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"func.func_value==='operator'\">\n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <label><b>Operator Code :</b> {{func.operatorFunction.operator_code}}</label>\n                            </div>\n                            <div class=\"col-md-4\">\n                              <label><b>Operator Message :</b> {{func.operatorFunction.operator_message}}</label>\n                            </div>\n                            <div class=\"col-md-4\">\n                              <label><b>Start At Temp :</b> {{func.operatorFunction.start_at_temp}}</label>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"func.func_value==='water'\">\n                          <div class=\"row\">\n                            <div class=\"col-md-3\" *ngIf=\"func.waterDrainFunction.type === 'water'\">\n                              <label><b>Water Type :</b> {{func.waterDrainFunction.water_type}}</label>\n                            </div>\n                            <div class=\"col-md-3\" *ngIf=\"func.waterDrainFunction.type === 'water'\">\n                              <label><b>Fabric Ratio :</b> {{func.waterDrainFunction.fabric_ratio}}</label>\n                            </div>\n                            <div class=\"col-md-3\" *ngIf=\"func.waterDrainFunction.type === 'water'\">\n                              <label><b>Jet Level :</b> {{func.waterDrainFunction.jet_level}}</label>\n                            </div>\n                            <div class=\"col-md-3\" *ngIf=\"func.waterDrainFunction.type !== 'water'\">\n                              <label><b>Drain Type :</b> {{func.waterDrainFunction.drain_type}}</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </nb-list-item>\n                  </nb-list>\n                  <i *ngIf=\"step.functionList.length>1\" class=\"fa fa-plus-circle\"\n                    style=\"color:green;font-size:25px;cursor: pointer;margin-left: 91%;margin-top: 1%;\"\n                    (click)=\"onAddFunction()\"></i>\n                </div>\n              </nb-accordion-item-body>\n            </nb-accordion-item>\n            <!-- <hr> -->\n          </nb-accordion>\n        </div>\n      </div>\n      <br>\n      <div class=\"box-footer\">\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">Save</button>\n        &nbsp;\n        <button nbButton type=\"reset\" routerLink='/pages/process/view-process-list' id=\"Cancel\">Cancel</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process/dynamic-process/dynamic-process.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/process/dynamic-process/dynamic-process.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ nb-theme-default nb-list-item {\n  padding: 0rem !important;\n  border-bottom: 0px !important; }\n\n:host /deep/ nb-theme-default nb-accordion nb-accordion-item-header {\n  padding: 0.75rem !important; }\n\n.item-header {\n  background-color: lightgray;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvY2Vzcy9keW5hbWljLXByb2Nlc3MvQzpcXFVzZXJzXFxEZWxsXFxEZXNrdG9wXFxuZ3gtd2lyZWZyYW1lLTRjYTQzY2Q4YWIyNTQ3OGEwNDkxNzcwYzEyMGE3YTU1ZmJiODJjNWUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9jZXNzXFxkeW5hbWljLXByb2Nlc3NcXGR5bmFtaWMtcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLHlCQUF3QjtFQUN4Qiw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvY2Vzcy9keW5hbWljLXByb2Nlc3MvZHluYW1pYy1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IC9kZWVwLyBuYi10aGVtZS1kZWZhdWx0IG5iLWxpc3QtaXRlbSB7XG4gICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcbiAgICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gOmhvc3QgL2RlZXAvIG5iLXRoZW1lLWRlZmF1bHQgbmItYWNjb3JkaW9uIG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlciB7XG4gICAgIHBhZGRpbmc6IDAuNzVyZW0gIWltcG9ydGFudDtcbiB9XG5cbiAuaXRlbS1oZWFkZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pages/process/dynamic-process/dynamic-process.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/process/dynamic-process/dynamic-process.component.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicProcessComponent", function() { return DynamicProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _add_step_add_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-step/add-step.component */ "./src/app/pages/process/add-step/add-step.component.ts");
/* harmony import */ var _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/model/process-planning-class */ "./src/app/@theme/model/process-planning-class.ts");
/* harmony import */ var _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-edit-function/add-edit-function.component */ "./src/app/pages/process/add-edit-function/add-edit-function.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DynamicProcessComponent = /** @class */ (function () {
    function DynamicProcessComponent(_modalService, toasterService, router, authService, processService, route) {
        var _this = this;
        this._modalService = _modalService;
        this.toasterService = toasterService;
        this.router = router;
        this.authService = authService;
        this.processService = processService;
        this.route = route;
        this.processModal = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["DynamicProcessReq"]();
        this.stepList = [];
        this.addFunctionFlag = false;
        this.currentSelectedFunction = '';
        this.dynamicProcessRecordReq = [];
        this.subBtnName = '';
        this.topHeader = '';
        this.chemicalcolumnDefs = [
            { headerName: 'Item Name', field: 'item_name', width: 100 },
            { headerName: 'Concentration', field: 'concentration', width: 130 },
            { headerName: 'LR/F_WT', field: 'lr_or_fabric_wt', width: 100 },
            { headerName: 'Supplier Name', field: 'supplier_name', width: 130 },
        ];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
    }
    DynamicProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    DynamicProcessComponent.prototype.ngOnInit = function () {
        this.onPageLoad();
    };
    DynamicProcessComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Process';
            }
            this.processService.getDynamicProcessById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.processModal = data[0].data.process[0];
                    _this.dynamicProcessRecordReq = data[0].data.process_record;
                    if (_this.dynamicProcessRecordReq.length) {
                        var stepArray_1 = [];
                        _this.stepList = [];
                        _this.dynamicProcessRecordReq.forEach(function (ele, index) {
                            if (stepArray_1.findIndex(function (v) { return v == ele.step_name; }) == -1) {
                                stepArray_1.push(ele.step_name);
                                var obj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["Step"]();
                                obj.step_name = ele.step_name;
                                obj.step_position = ele.step_position;
                                obj.control_id = ele.control_id;
                                obj.functionList = [];
                                _this.stepList.push(obj);
                            }
                        });
                        _this.dynamicProcessRecordReq.forEach(function (ele, index) {
                            var stepIndex = _this.stepList.findIndex(function (v) { return v.step_name == ele.step_name; });
                            if (stepIndex > -1) {
                                var wfuncObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["WaterDrainFunctionObj"]();
                                var tfuncObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["TempFunctionObj"]();
                                var dfuncObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["DosingFunctionObj"]();
                                var pfuncObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["PumpMotorFunctionObj"]();
                                var ofuncObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["OperatorMessageObj"]();
                                if (ele.func_value === 'temp') {
                                    tfuncObj.pressure = ele.pressure;
                                    tfuncObj.set_value = ele.set_value;
                                    tfuncObj.hold_time = ele.hold_time;
                                    tfuncObj.rate_of_rise = ele.rate_of_rise;
                                }
                                else if (ele.func_value === 'dosing') {
                                    dfuncObj.have_dose = ele.have_dose;
                                    dfuncObj.dose_at_temp = ele.dose_at_temp;
                                    dfuncObj.dosing_percentage = ele.dosing_percentage;
                                    dfuncObj.fill_type = ele.fill_type;
                                    dfuncObj.dose_type = ele.dose_type;
                                    dfuncObj.dose_while_heating = ele.dose_while_heating;
                                    dfuncObj.dosing_chemical = ele.dosing_chemical;
                                    _this.rowChemicalData = dfuncObj.dosing_chemical.slice();
                                }
                                else if (ele.func_value === 'pump') {
                                    pfuncObj.pump_speed = ele.pump_speed;
                                }
                                else if (ele.func_value === 'water') {
                                    wfuncObj.water_type = ele.water_type;
                                    wfuncObj.drain_type = ele.drain_type;
                                    wfuncObj.fabric_ratio = ele.fabric_ratio;
                                    wfuncObj.jet_level = ele.jet_level;
                                }
                                else if (ele.func_value === 'operator') {
                                    ofuncObj.operator_message = ele.operator_message;
                                    ofuncObj.operator_code = ele.operator_code;
                                    ofuncObj.start_at_temp = ele.start_at_temp;
                                }
                                var funcObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["FunctionObj"]();
                                funcObj.func_value = ele.func_value;
                                funcObj.func_position = ele.func_position;
                                funcObj.func_name = ele.func_name;
                                funcObj.dosingFunction = dfuncObj;
                                funcObj.waterDrainFunction = wfuncObj;
                                funcObj.tempFunction = tfuncObj;
                                funcObj.pumpMotorFunction = pfuncObj;
                                funcObj.operatorFunction = ofuncObj;
                                _this.stepList[stepIndex].functionList.push(funcObj);
                            }
                        });
                    }
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Process';
        }
    };
    DynamicProcessComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.stepList, event.previousIndex, event.currentIndex);
        this.stepList.forEach(function (ele, index) {
            ele.step_position = index + 1;
        });
    };
    DynamicProcessComponent.prototype.dropFunction = function (event, step_position) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.stepList[step_position - 1].functionList, event.previousIndex, event.currentIndex);
        this.stepList[step_position - 1].functionList.forEach(function (ele, index) {
            ele.func_position = index + 1;
        });
    };
    DynamicProcessComponent.prototype.onEditStep = function (step) {
        var _this = this;
        var modalRef = this._modalService.open(_add_step_add_step_component__WEBPACK_IMPORTED_MODULE_2__["AddStepComponent"]);
        modalRef.componentInstance.position = step.step_position;
        modalRef.componentInstance.stepList = this.stepList;
        modalRef.componentInstance.editStep = true;
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.stepList[step.step_position - 1].step_name = result.name;
            }
        });
    };
    DynamicProcessComponent.prototype.onEditFunction = function (func) {
        var modalRef = this._modalService.open(_add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_4__["AddEditFunctionComponent"]);
        var functionList = this.stepList[this.selectedStep - 1].functionList;
        modalRef.componentInstance.position = func.func_position;
        modalRef.componentInstance.functionList = functionList;
        modalRef.componentInstance.editFunction = true;
        modalRef.result
            .then(function (result) {
            if (result) {
                functionList[func.func_position - 1] = result;
            }
        });
    };
    DynamicProcessComponent.prototype.onDeleteStep = function (step) {
        var i = this.stepList.findIndex(function (v) { return v.step_position == step.step_position; });
        this.stepList.splice(i, 1);
        // this.rowData = [...this.colourStockRecord]
    };
    DynamicProcessComponent.prototype.onDeleteFunction = function (func) {
        var functionList = this.stepList[this.selectedStep - 1].functionList;
        var i = functionList.findIndex(function (v) { return v.func_position == func.func_position; });
        functionList.splice(i, 1);
    };
    DynamicProcessComponent.prototype.onFunctionSelect = function (value) {
        this.currentSelectedFunction = value;
        this.addFunctionFlag = false;
    };
    DynamicProcessComponent.prototype.onAddFunction = function (step) {
        if (step) {
            this.selectedStep = step.step_position;
        }
        var modalRef = this._modalService.open(_add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_4__["AddEditFunctionComponent"]);
        var functionList = this.stepList[this.selectedStep - 1].functionList;
        modalRef.componentInstance.position = functionList.length + 1;
        modalRef.componentInstance.functionList = functionList;
        modalRef.componentInstance.editFunction = false;
        modalRef.result
            .then(function (result) {
            if (result) {
                var func = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["FunctionObj"]();
                func = result;
                if (!functionList.length || result.func_position == functionList.length + 1) {
                    functionList.push(func);
                }
                else {
                    functionList.splice(result.func_position - 1, 0, func);
                }
            }
        });
    };
    DynamicProcessComponent.prototype.onAddStep = function () {
        var _this = this;
        var modalRef = this._modalService.open(_add_step_add_step_component__WEBPACK_IMPORTED_MODULE_2__["AddStepComponent"]);
        modalRef.componentInstance.position = this.stepList.length + 1;
        modalRef.componentInstance.stepList = this.stepList;
        modalRef.componentInstance.editStep = false;
        modalRef.result
            .then(function (result) {
            if (result) {
                var step = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["Step"]();
                step.step_name = result.name;
                step.step_position = result.position;
                step.functionList = [];
                if (!_this.stepList.length || result.position == _this.stepList.length + 1) {
                    _this.stepList.push(step);
                }
                else {
                    _this.stepList.splice(result.position - 1, 0, step);
                }
            }
        });
    };
    DynamicProcessComponent.prototype.onStepClick = function (step) {
        this.selectedStep = step.step_position;
    };
    DynamicProcessComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.dynamicProcessRecordReq = [];
        if (this.stepList.length) {
            this.stepList.forEach(function (step) {
                if (step.functionList.length) {
                    step.functionList.forEach(function (func) {
                        var record = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_3__["DynamicProcessRecordReq"]();
                        record.control_id = step.control_id;
                        record.step_name = step.step_name;
                        record.step_position = step.step_position;
                        record.func_name = func.func_name;
                        record.func_value = func.func_value;
                        record.func_position = func.func_position;
                        record.water_type = func.waterDrainFunction ? func.waterDrainFunction.water_type : '';
                        record.fabric_ratio = func.waterDrainFunction ? func.waterDrainFunction.fabric_ratio : '';
                        record.jet_level = func.waterDrainFunction ? func.waterDrainFunction.jet_level : '';
                        record.drain_type = func.waterDrainFunction ? func.waterDrainFunction.drain_type : '';
                        record.set_value = func.tempFunction ? func.tempFunction.set_value : '';
                        record.rate_of_rise = func.tempFunction ? func.tempFunction.rate_of_rise : '';
                        record.hold_time = func.tempFunction ? func.tempFunction.hold_time : '';
                        record.pressure = func.tempFunction ? func.tempFunction.pressure : '';
                        record.pump_speed = func.pumpMotorFunction ? func.pumpMotorFunction.pump_speed : "";
                        record.fill_type = func.dosingFunction ? func.dosingFunction.fill_type : '';
                        record.dosing_percentage = func.dosingFunction ? func.dosingFunction.dosing_percentage : '';
                        record.have_dose = func.dosingFunction ? func.dosingFunction.have_dose : '';
                        record.dose_at_temp = func.dosingFunction ? func.dosingFunction.dose_at_temp : '';
                        record.dose_type = func.dosingFunction ? func.dosingFunction.dose_type : '';
                        record.dose_while_heating = func.dosingFunction ? func.dosingFunction.dose_while_heating : false;
                        record.operator_code = func.operatorFunction ? func.operatorFunction.operator_code : '';
                        record.operator_message = func.operatorFunction ? func.operatorFunction.operator_message : '';
                        record.start_at_temp = func.operatorFunction ? func.operatorFunction.start_at_temp : '';
                        record.dosing_chemical = func.dosingFunction ? func.dosingFunction.dosing_chemical : [];
                        _this.dynamicProcessRecordReq.push(record);
                    });
                }
            });
        }
        this.processModal.process_req_record = [];
        this.processModal.process_req_record = this.dynamicProcessRecordReq;
        // for update
        if (this.id) {
            this.processModal.updated_by = this.currentUserId;
            this.processService.updateDynamicProcess(this.processModal).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.processModal.created_by = this.currentUserId;
            this.processModal.user_head_id = this.currentUserHeadid;
            console.log(this.processModal);
            this.processService.addDynamicProcess(this.processModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    DynamicProcessComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    DynamicProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dynamic-process',
            template: __webpack_require__(/*! ./dynamic-process.component.html */ "./src/app/pages/process/dynamic-process/dynamic-process.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-process.component.scss */ "./src/app/pages/process/dynamic-process/dynamic-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_8__["ProcessService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], DynamicProcessComponent);
    return DynamicProcessComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/process-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/process/process-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRoutingModule", function() { return ProcessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/process/process.component.ts");
/* harmony import */ var _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-process/view-process.component */ "./src/app/pages/process/view-process/view-process.component.ts");
/* harmony import */ var _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-process/add-edit-process.component */ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts");
/* harmony import */ var _dynamic_process_dynamic_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-process/dynamic-process.component */ "./src/app/pages/process/dynamic-process/dynamic-process.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _process_component__WEBPACK_IMPORTED_MODULE_2__["ProcessComponent"],
        children: [
            {
                path: 'view-process-list',
                component: _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_3__["ViewProcessComponent"]
            },
            {
                path: 'add-process',
                component: _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
            },
            {
                path: 'add-dynamic-process',
                component: _dynamic_process_dynamic_process_component__WEBPACK_IMPORTED_MODULE_5__["DynamicProcessComponent"],
            },
            {
                path: 'edit-dynamic-process/:id',
                component: _dynamic_process_dynamic_process_component__WEBPACK_IMPORTED_MODULE_5__["DynamicProcessComponent"],
            },
            {
                path: 'edit-process/:id',
                component: _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
            },
            {
                path: '',
                redirectTo: 'view-process-list',
                pathMatch: 'full',
            },
        ]
    }
];
var ProcessRoutingModule = /** @class */ (function () {
    function ProcessRoutingModule() {
    }
    ProcessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProcessRoutingModule);
    return ProcessRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/process/process.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/process/process.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/process/process.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/process/process.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MvcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process/process.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/process/process.component.ts ***!
  \****************************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcessComponent = /** @class */ (function () {
    function ProcessComponent() {
    }
    ProcessComponent.prototype.ngOnInit = function () {
    };
    ProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-process',
            template: __webpack_require__(/*! ./process.component.html */ "./src/app/pages/process/process.component.html"),
            styles: [__webpack_require__(/*! ./process.component.scss */ "./src/app/pages/process/process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessComponent);
    return ProcessComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/process.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/process/process.module.ts ***!
  \*************************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-process/view-process.component */ "./src/app/pages/process/view-process/view-process.component.ts");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/process/process.component.ts");
/* harmony import */ var _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-process/add-edit-process.component */ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _process_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process-routing.module */ "./src/app/pages/process/process-routing.module.ts");
/* harmony import */ var _dynamic_process_dynamic_process_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamic-process/dynamic-process.component */ "./src/app/pages/process/dynamic-process/dynamic-process.component.ts");
/* harmony import */ var _add_step_add_step_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-step/add-step.component */ "./src/app/pages/process/add-step/add-step.component.ts");
/* harmony import */ var _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-edit-function/add-edit-function.component */ "./src/app/pages/process/add-edit-function/add-edit-function.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProcessModule = /** @class */ (function () {
    function ProcessModule() {
    }
    ProcessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _process_component__WEBPACK_IMPORTED_MODULE_3__["ProcessComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["ViewProcessComponent"],
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"],
                // CustomRendererScouringRecordComponent,
                // CustomRendererColdWashRecordComponent,
                // CustomRendererDyingRecordComponent,
                // CustomRendererRCRecordComponent,
                _dynamic_process_dynamic_process_component__WEBPACK_IMPORTED_MODULE_13__["DynamicProcessComponent"],
                _add_step_add_step_component__WEBPACK_IMPORTED_MODULE_14__["AddStepComponent"],
                _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_15__["AddEditFunctionComponent"],
                _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_15__["CustomRendererChemicalRecordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
                _process_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProcessRoutingModule"]
            ],
            entryComponents: [
                _add_step_add_step_component__WEBPACK_IMPORTED_MODULE_14__["AddStepComponent"],
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"],
                // CustomRendererScouringRecordComponent,
                // CustomRendererColdWashRecordComponent,
                // CustomRendererDyingRecordComponent,
                // CustomRendererRCRecordComponent,
                _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_15__["AddEditFunctionComponent"],
                _add_edit_function_add_edit_function_component__WEBPACK_IMPORTED_MODULE_15__["CustomRendererChemicalRecordComponent"]
            ]
        })
    ], ProcessModule);
    return ProcessModule;
}());



/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Process\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddProcess()\">\n      Add Process\n    </button>\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\n  </nb-card-header>\n  <nb-card-body>\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessData($event)\">\n        <nb-radio [value]=\"1\">\n          View Own\n        </nb-radio>\n        <nb-radio [value]=\"2\">\n          View Group\n        </nb-radio>\n      </nb-radio-group>\n    </div>\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessData($event)\">\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\n          View Own\n        </nb-radio>\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\n          View Group\n        </nb-radio>\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\n          View All\n        </nb-radio>\n      </nb-radio-group>\n    </div>\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\n    </ag-grid-angular>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3Mvdmlldy1wcm9jZXNzL3ZpZXctcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewProcessComponent, CustomRendererProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcessComponent", function() { return ViewProcessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererProcessComponent", function() { return CustomRendererProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewProcessComponent = /** @class */ (function () {
    function ViewProcessComponent(processService, router, tosterService, permissionService, papa, authService, qualityService, partyService) {
        var _this = this;
        this.processService = processService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.qualityService = qualityService;
        this.partyService = partyService;
        // processList: Process[] = [];
        this.processList = [];
        this.addProcessPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Process Name', field: 'process_name', sortable: true, filter: true },
            { headerName: 'Process Time(Minutes)', field: 'time', sortable: true, filter: true },
            { headerName: 'Created By', field: 'created_by', sortable: true, filter: true },
            { headerName: 'Updated By', field: 'updated_by', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'process_name', 'no_dying_bath', 'dc_multiplying_fac', 'created_by', 'updated_by'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.processReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityList = [];
        this.partyNameList = [];
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    ViewProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Process') {
                    _this.addProcessPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.processReqObj.current_user_id = _this.currentUserId;
                    _this.processReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.processReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getQualityData();
        this.getPartyList();
        this.getProcessData();
    };
    ViewProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewProcessComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.partyService.getPartyList(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyNameList = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        }, function (error) {
            _this.tosterService.error(error);
        });
    };
    ViewProcessComponent.prototype.getQualityData = function () {
        var _this = this;
        this.qualityViewReqObj.current_user_id = this.currentUserId;
        this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
        this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityViewReqObj.view_group = true;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
            }
        });
    };
    ViewProcessComponent.prototype.getProcessData = function (value) {
        var _this = this;
        this.processReqObj.view_all = false;
        this.processReqObj.view_group = false;
        this.processReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.processReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.processReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.processReqObj.view_all = true;
        this.processService.getAllDynamicProcesss(this.processReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.processList = data[0].data;
                _this.rowData = _this.processList;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewProcessComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererProcessComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/process/edit-dynamic-process/',
                    inViewLink: '/pages/process/view-process/',
                    action: _this
                };
            }
        });
    };
    ViewProcessComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewProcessComponent.prototype.onAddProcess = function () {
        if (this.addProcessPermission) {
            this.router.navigate(['/pages/process/add-dynamic-process']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add process. If you want to add process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewProcessComponent.prototype.onExport = function () {
        var _this = this;
        var params = {
            columnKeys: this.columnExportDefs
        };
        var data = this.gridApi.getDataAsCsv(params);
        this.papa.parse(data, {
            complete: function (result) {
                _this.exportExcel(result.data);
            }
        });
    };
    ViewProcessComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-process',
            template: __webpack_require__(/*! ./view-process.component.html */ "./src/app/pages/process/view-process/view-process.component.html"),
            styles: [__webpack_require__(/*! ./view-process.component.scss */ "./src/app/pages/process/view-process/view-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__["QualityService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_8__["PartyService"]])
    ], ViewProcessComponent);
    return ViewProcessComponent;
}());

var CustomRendererProcessComponent = /** @class */ (function () {
    function CustomRendererProcessComponent(router, _modalService, processService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.processService = processService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editProcessPermission = 1;
        this.deleteProcessPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererProcessComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Process') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editProcessPermission = ele.can_edit;
                    _this.deleteProcessPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editProcessPermission = ele.can_edit_group;
                    _this.deleteProcessPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editProcessPermission = ele.can_edit_all;
                    _this.deleteProcessPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererProcessComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererProcessComponent.prototype.viewProcess = function () {
    };
    CustomRendererProcessComponent.prototype.editProcess = function () {
        if (this.editProcessPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit process. If you want to edit process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessComponent.prototype.onDeleteProcess = function () {
        var _this = this;
        if (this.deleteProcessPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Process ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this process?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.processService.deleteDynamicProcessById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getProcessData();
                            _this.toasterService.success(data[0].message);
                        }
                        else {
                            _this.toasterService.error(data[0].message);
                        }
                    });
                }
            });
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete process. If you want to delete process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editProcess()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteProcess()\"></i>",
            styles: [__webpack_require__(/*! ./view-process.component.scss */ "./src/app/pages/process/view-process/view-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], CustomRendererProcessComponent);
    return CustomRendererProcessComponent;
}());



/***/ })

}]);
//# sourceMappingURL=process-process-module.js.map