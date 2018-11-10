/**
 * Created by Tech Group BWL on 09/10/2018.
 */
import {
  Component, ViewEncapsulation, OnInit, Input, AfterViewInit
} from "@angular/core";
@Component({
  selector: 'motum-modal-form',
  templateUrl: './motumModalForm.component.html',
  styleUrls: ['./motumModalForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
/**
 * Creates a Modal where you can put all you want
 * based in mockup designs
 *
 * @example If you want get assigned spaces like header, content and footer`
 *  <motum-modal-form>
 *    <div modal-form-header></div>
 *    <div modal-form-content></div>
 *    <div modal-form-footer></div>
 *  </motum-modal-form>
 * `
 * @example If you want only the space of the form but you don't
 * what header or footer and only you want that specific space`
 *  <motum-modal-form>
 *    <!-- All you want-->
 *  </motum-modal-form>
 * `
 */
export class MotumModalForm implements OnInit, AfterViewInit {

  @Input() cols: 2 | 3 = 2;
  @Input() align: 'center' | 'right' = 'center';
  @Input('hasTabs') willContentTabs: boolean = false;
  @Input('hasFooter') willContentFooter: boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.align === 'center' && this.cols === 3) {
      console.error('This combination is not possible: %s %s', this.align, this.cols);
      this.cols = 2;
    }
  }

  ngAfterViewInit() {}
}