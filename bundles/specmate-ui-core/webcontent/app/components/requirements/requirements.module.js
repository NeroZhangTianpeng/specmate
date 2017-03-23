"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var requirements_perspective_component_1 = require('./requirements-perspective.component');
var requirement_details_component_1 = require('./requirement-details.component');
var core_module_1 = require('../core/core.module');
var ceg_editor_module_1 = require('./ceg-editor/ceg-editor.module');
var requirements_routing_module_1 = require('./requirements-routing.module');
var angular2_modal_1 = require('angular2-modal');
var js_native_1 = require('angular2-modal/plugins/js-native');
var RequirementsModule = (function () {
    function RequirementsModule() {
    }
    RequirementsModule = __decorate([
        core_1.NgModule({
            imports: [
                core_module_1.CoreModule,
                requirements_routing_module_1.RequirementsRoutingModule,
                ceg_editor_module_1.CEGEditorModule,
                angular2_modal_1.ModalModule.forRoot(),
                js_native_1.JSNativeModalModule
            ],
            declarations: [
                requirements_perspective_component_1.RequirementsPerspective,
                requirement_details_component_1.RequirementsDetails
            ],
            providers: [],
            exports: [angular2_modal_1.ModalModule],
        }), 
        __metadata('design:paramtypes', [])
    ], RequirementsModule);
    return RequirementsModule;
}());
exports.RequirementsModule = RequirementsModule;
//# sourceMappingURL=requirements.module.js.map