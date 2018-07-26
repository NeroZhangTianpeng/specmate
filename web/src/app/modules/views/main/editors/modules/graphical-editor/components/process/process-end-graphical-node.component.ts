import { Component, Input } from '@angular/core';
import { DraggableElementBase } from '../../elements/draggable-element-base';
import { ProcessEnd } from '../../../../../../../../model/ProcessEnd';
import { Config } from '../../../../../../../../config/config';
import { ProcessStep } from '../../../../../../../../model/ProcessStep';
import { SpecmateDataService } from '../../../../../../../data/modules/data-service/services/specmate-data.service';
import { SelectedElementService } from '../../../../../../side/modules/selected-element/services/selected-element.service';
import { ValidationService } from '../../../../../../../forms/modules/validation/services/validation.service';
import { MultiselectionService } from '../../../tool-pallette/services/multiselection.service';
import { DomSanitizer } from '../../../../../../../../../../node_modules/@angular/platform-browser';

@Component({
    moduleId: module.id.toString(),
    selector: '[process-end-graphical-node]',
    templateUrl: 'process-end-graphical-node.component.svg',
    styleUrls: ['process-end-graphical-node.component.css']
})

export class ProcessEndGraphicalNode extends DraggableElementBase<ProcessEnd> {

    public nodeType: { className: string; } = ProcessEnd;

    public get dimensions(): {width: number, height: number} {
        return {
            width: Config.PROCESS_START_END_NODE_RADIUS * 2,
            height: Config.PROCESS_START_END_NODE_RADIUS * 2
        };
    }

    public get radius(): number {
        return Config.PROCESS_START_END_NODE_RADIUS;
    }

    @Input()
    node: ProcessStep;

    public get element(): ProcessStep {
        return this.node;
    }

    constructor(
        protected dataService: SpecmateDataService,
        selectedElementService: SelectedElementService,
        validationService: ValidationService,
        multiselectionService: MultiselectionService,
        sanitizer: DomSanitizer) {
        super(selectedElementService, validationService, multiselectionService, sanitizer);
    }
}
