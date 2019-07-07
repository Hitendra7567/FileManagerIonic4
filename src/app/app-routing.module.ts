import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'sub-folder', loadChildren: './sub-folder/sub-folder.module#SubFolderPageModule' },
  { path: 'sub-dashboard', loadChildren: './sub-dashboard/sub-dashboard.module#SubDashboardPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
