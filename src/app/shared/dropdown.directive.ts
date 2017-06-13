/**
 * Created by csmat on 2017. 06. 13..
 */
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
