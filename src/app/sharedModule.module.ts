import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSliderModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatSnackBarModule,
        MatInputModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatSidenavModule,
        ReactiveFormsModule,
        HttpClientModule,
        FusionChartsModule,
        NgxGaugeModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSliderModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatSnackBarModule,
        MatInputModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FusionChartsModule,
        NgxGaugeModule
    ],
    providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ],
})
export class SharedModule { }