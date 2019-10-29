import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Unidades',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Adherentes', url: '/grilla-adherentes' },
        { titulo: 'Unidades Funcionales', url: '/grilla-uf' },
      ]
    },
    {
      titulo: 'Ctas Ctes',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Cuentas corrientes', url: '/grilla-ctas-ctes' },
        { titulo: 'NC/ND', url: '/notas-credito-debito/nueva' }
      ]
    },
    {
      titulo: 'Pagos',
      icono: 'mdi mdi-cash',
      submenu: [
        { titulo: 'Comprobantes', url: '/comprobantes' },
        { titulo: 'Nuevo pago', url: '/nuevo-pago/nuevo' }
      ]
    },
    {
      titulo: 'Expensas',
      icono: 'mdi mdi-newspaper',
      submenu: [
        { titulo: 'Grilla expensas', url: '/grilla-expensas' },
        { titulo: 'Generar nueva', url: '/datos-expensa/nuevo' }
      ]
    },
    {
      titulo: 'Gastos',
      icono: 'mdi mdi-receipt',
      submenu: [
        { titulo: 'Cargar xml', url: '/cargar-gasto-xml' },
        { titulo: 'Cargar nuevo gasto', url: '/nuevo-gasto' },
        { titulo: 'Grilla de conceptos', url: '/grilla-conceptos-gastos' }
      ]
    },
    {
      titulo: 'Métricas',
      icono: 'mdi mdi-chart-areaspline',
      submenu: [
        { titulo: 'Deudas por UF', url: '/deudasd-uf' },
        { titulo: 'Cuentas corrientes', url: '/cuentas-corrientes' },
        { titulo: 'Ingresos por fecha', url: '/ingresos-por-fecha' },
        { titulo: 'Distribución de ingresos', url: '/distribucion-ingresos' }
      ]
    },
    {
      titulo: 'Administración',
      icono: 'mdi mdi-key-variant',
      submenu: [
        { titulo: 'Configurar intereses', url: '/configurar-intereses' }
      ]
    }
  ];

  constructor() { }
}