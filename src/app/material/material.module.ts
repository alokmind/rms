import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatButtonModule }      from '@angular/material/button';
import { MatInputModule }       from '@angular/material/input';
import { MatRippleModule }      from '@angular/material/core';
import { MatIconModule }        from '@angular/material/icon';
import { MatGridListModule }    from '@angular/material/grid-list';
import { MatSnackBarModule }    from '@angular/material/snack-bar';
import { MatCheckboxModule }    from '@angular/material/checkbox';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatListModule }        from '@angular/material/list';
import { MatTableModule }       from '@angular/material/table';
import { MatSortModule }        from '@angular/material/sort';
import { MatDialogModule }      from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';



const material_imports = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatGridListModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  
  MatToolbarModule,
  MatMenuModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material_imports
  ],
  exports : [ ...material_imports]
})
export class MaterialModule { }
