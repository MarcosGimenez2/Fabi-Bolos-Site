import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './Pages/home/home';
import { PagamentoComponent } from './Pages/pagamento/pagamento';
import { ContatoComponent } from './Pages/contato/contato';

@NgModule({
  declarations: [App, PagamentoComponent,],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, HomeComponent, ContatoComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
