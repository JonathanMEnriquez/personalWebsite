import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, 
    MatDividerModule, MatCardModule, MatTabsModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, MatDividerModule, MatCardModule, 
        MatTabsModule, BrowserAnimationsModule, BrowserModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, MatDividerModule, MatCardModule, 
        MatTabsModule, BrowserAnimationsModule, BrowserModule, MatFormFieldModule, MatInputModule]
})

export class MaterialModule {}