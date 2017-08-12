import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxPopperModule } from 'ngx-popper'
import { ElTooltip } from './tooltip'
import { ElTooltipDirective } from './tooltip.directive'


@NgModule({
  declarations: [ElTooltip, ElTooltipDirective],
  exports: [ElTooltip, ElTooltipDirective],
  imports: [CommonModule, NgxPopperModule],
  entryComponents: [ElTooltip],
})
export class ElTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTooltipModule, providers: [] }
  }
}
