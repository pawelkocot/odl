import 'angular2/bundles/angular2-polyfills';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './app';

enableProdMode();
bootstrap(AppComponent);