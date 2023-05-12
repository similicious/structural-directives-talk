import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'directives/log-click',
    loadChildren: () =>
      import('./directives/log-click/log-click.module').then(
        (m) => m.LogClickModule
      ),
  },
  {
    path: 'directives/add-foo',
    loadChildren: () =>
      import('./directives/add-foo/add-foo.module').then((m) => m.AddFooModule),
  },
  {
    path: 'directives/user-binding',
    loadChildren: () =>
      import('./directives/user-binding/user-binding.module').then(
        (m) => m.UserBindingModule
      ),
  },
  {
    path: 'structural-directives/unless',
    loadChildren: () =>
      import('./structural-directives/unless/unless.module').then(
        (m) => m.UnlessModule
      ),
  },
  {
    path: 'structural-directives/assign',
    loadChildren: () =>
      import('./structural-directives/assign/assign.module').then(
        (m) => m.AssignModule
      ),
  },
  {
    path: 'structural-directives/header',
    loadChildren: () =>
      import('./structural-directives/header/header.module').then(
        (m) => m.HeaderModule
      ),
  },
  {
    path: 'structural-directives/for',
    loadChildren: () =>
      import('./structural-directives/for/for.module').then((m) => m.ForModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
