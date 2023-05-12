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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
