import { Route, Router } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '',
    component: 'app-shell',
    children: [
      {
        path: '',
        component: 'dashboard-page',
        action: async () => {
          await import('./dashboard.js');
        },
      },
      /*    {
            path: 'about',
            component: 'lit-about',
            action: async () => {
              await import('./about/about');
            }
          },
          {
            path: 'admin/:section',
            component: 'lit-admin',
            action: async () => {
              await import('./admin/admin');
            }
          },
          {
            path: 'admin/:section',
            component: 'lit-admin',
            action: async () => {
              await import('./admin/admin');
            }
          },
          {
            path: 'analytics',
            component: 'lit-analytics',
            action: async (context: Context, commands: Commands) => {
              return await new AuthGuard().pageEnabled(context, commands, '/blog');
            },
            // action: authGuard,
            children: [
              {
                path: '/',
                component: 'lit-analytics-home',
                action: async () => {
                  await import('./analytics/analytics-home');
                }
              },
              {
                path: ':period',
                component: 'lit-analytics-period',
                action: async () => {
                  await import('./analytics/analytics-period');
                }
              }
            ]
          } */
    ],
  },
];
const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes).then(r => console.log(r));
