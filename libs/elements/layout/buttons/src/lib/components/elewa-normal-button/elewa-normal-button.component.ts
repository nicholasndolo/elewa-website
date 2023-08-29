import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent {

    //pass data from parent component
  @Input() buttonData!: ButtonData
  
  @Output() click: EventEmitter<void> = new EventEmitter<void>()

  handleClick(): void{
    //emit click event
    this.click.emit()
  }


}
