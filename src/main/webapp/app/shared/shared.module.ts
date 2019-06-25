import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LmsAdminSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [LmsAdminSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [LmsAdminSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LmsAdminSharedModule {
  static forRoot() {
    return {
      ngModule: LmsAdminSharedModule
    };
  }
}
