import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  exports: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
