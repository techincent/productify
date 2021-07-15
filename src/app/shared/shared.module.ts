import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';

const commonImportedModules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  // Material
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [CommonModule, ...commonImportedModules],
  exports: [...commonImportedModules, HeaderComponent],
})
export class SharedModule {}
