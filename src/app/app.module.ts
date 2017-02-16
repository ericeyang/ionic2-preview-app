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
import { Alert as RadioAlert } from '../pages/components/alerts/radio/pages';
import { Alert as CheckboxAlert } from '../pages/components/alerts/checkbox/pages';

import { Badge } from '../pages/components/badges/pages'

import { Button } from '../pages/components/buttons/pages';
import { Button as BasicButton } from '../pages/components/buttons/basic/pages';
import { Button as OutlineButton } from '../pages/components/buttons/outline/pages';
import { Button as ClearButton } from '../pages/components/buttons/clear/pages';
import { Button as RoundButton } from '../pages/components/buttons/round/pages';
import { Button as BlockButton } from '../pages/components/buttons/block/pages';
import { Button as FullButton } from '../pages/components/buttons/full/pages';
import { Button as ButtonSizes } from '../pages/components/buttons/sizes/pages';
import { Button as IconButton } from '../pages/components/buttons/icons/pages';
import { Button as ButtonsInComponents } from '../pages/components/buttons/components/pages';

import { Chip } from '../pages/components/chips/pages';
import { Chip as TextChip } from '../pages/components/chips/text/pages';
import { Chip as ColorChip } from '../pages/components/chips/color/pages';
import { Chip as IconChip } from '../pages/components/chips/icon/pages';
import { Chip as AvatarChip } from '../pages/components/chips/avatar/pages';
import { Chip as DeleteChip } from '../pages/components/chips/delete/pages';

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
    PromptAlert,
    RadioAlert,
    CheckboxAlert,

    Badge,

    Button,
    BasicButton,
    OutlineButton,
    ClearButton,
    RoundButton,
    BlockButton,
    FullButton,
    ButtonSizes,
    IconButton,
    ButtonsInComponents,

    Chip,
    TextChip,
    ColorChip,
    IconChip,
    AvatarChip,
    DeleteChip
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
    PromptAlert,
    RadioAlert,
    CheckboxAlert,

    Badge,

    Button,
    BasicButton,
    OutlineButton,
    ClearButton,
    RoundButton,
    BlockButton,
    FullButton,
    ButtonSizes,
    IconButton,
    ButtonsInComponents,

    Chip,
    TextChip,
    ColorChip,
    IconChip,
    AvatarChip,
    DeleteChip
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
