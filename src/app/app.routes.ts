import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'sectors', loadComponent: () => import('./pages/sectors/sectors').then(m => m.Sectors) },
  { path: 'ops-methodology', loadComponent: () => import('./pages/ops/ops').then(m => m.Ops) },
  { path: 'use-cases', loadComponent: () => import('./pages/cases/cases').then(m => m.Cases) },
  // { path: 'blog', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog) },
  // { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
]; // Lebo-labs routes
