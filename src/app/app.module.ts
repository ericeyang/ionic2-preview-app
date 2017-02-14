import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';

import { ComponentsPage } from '../pages/components/pages';

import { ActionSheet } from '../pages/components/action-sheets/pages';
import { ActionSheet as BasicActionSheet } from '../pages/components/action-sheets/basic/pages';
import { ActionSheet as AsyncActionSheet } from '../pages/components/action-sheets/async/pages';

import { Alert } from '../pages/components/alerts/pages';
import { Alert as BasicAlert } from '../pages/components/alerts/basic/pages';
import { Alert as ConfirmAlert } from '../pages/components/alerts/confirm/pages';
import { Alert as PromptAlert } from '../pages/components/alerts/prompt/pages';

@NgModule({
  declarations: [
    MyApp,
    ComponentsPage,
    
    ActionSheet,
    BasicActionSheet,
    AsyncActionSheet,

    Alert,
    BasicAlert,
    ConfirmAlert,
    PromptAlert
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,   
    ComponentsPage,   
    
    ActionSheet,
    BasicActionSheet,
    AsyncActionSheet,

    Alert,
    BasicAlert,
    ConfirmAlert,
    PromptAlert
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    Storage
  ]
})
export class AppModule {}
