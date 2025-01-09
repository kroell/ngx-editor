import { Injectable, Optional } from '@angular/core';

import { NgxEditorConfig } from './types';
import Locals from './Locals';
import { NgxEditorServiceConfig } from './editor-config.service';

@Injectable({
  providedIn: 'root',
})
export class NgxEditorService {
  config: NgxEditorServiceConfig;
  // eslint disable next line no-underscore-dangle
  _locals: any;

  constructor(@Optional() config?: NgxEditorServiceConfig) {
    this.config = config;
    this._locals = new Locals(this.config.locals);
  }

  get locals(): Locals {
    return this._locals;
  }

  set locals(locals: any) {
    this._locals = new Locals(locals);
  }
}

export const provideMyServiceOptions = (config?: NgxEditorConfig): NgxEditorServiceConfig => {
  return {
    locals: config.locals ?? {},
  };
};
