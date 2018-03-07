import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, 
    MatDividerModule, MatCardModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, MatDividerModule, MatCardModule, 
        MatTabsModule, BrowserAnimationsModule, BrowserModule],
    exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, MatDividerModule, MatCardModule, 
        MatTabsModule, BrowserAnimationsModule, BrowserModule]
})

export class MaterialModule {}