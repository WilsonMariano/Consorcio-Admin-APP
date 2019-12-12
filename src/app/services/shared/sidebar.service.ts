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
        { titulo: 'Dashboard', url: '/home/dashboard' },
      ]
    },
    {
      titulo: 'Unidades',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Adherentes', url: '/home/grilla-adherentes' },
        { titulo: 'Unidades Funcionales', url: '/home/grilla-uf' },
      ]
    },
    {
      titulo: 'Ctas Ctes',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Cuentas corrientes', url: '/home/grilla-ctas-ctes' },
        { titulo: 'NC/ND', url: '/home/notas-credito-debito/nueva' }
      ]
    },
    {
      titulo: 'Pagos',
      icono: 'mdi mdi-cash',
      submenu: [
        { titulo: 'Nuevo pago', url: '/home/nuevo-pago/nuevo' },
        { titulo: 'Recibos', url: '/home/comprobantes' }
      ]
    },
    {
      titulo: 'Expensas',
      icono: 'mdi mdi-newspaper',
      submenu: [
        { titulo: 'Grilla expensas', url: '/home/grilla-expensas' },
        { titulo: 'Generar nueva', url: '/home/datos-expensa/nuevo' }
      ]
    },
    {
      titulo: 'Gastos',
      icono: 'mdi mdi-receipt',
      submenu: [
        { titulo: 'Cargar xml', url: '/home/cargar-gasto-xml' },
        { titulo: 'Cargar nuevo gasto', url: '/home/nuevo-gasto' },
        { titulo: 'Grilla de conceptos', url: '/home/grilla-conceptos-gastos' }
      ]
    },
    {
      titulo: 'Métricas',
      icono: 'mdi mdi-chart-areaspline',
      submenu: [
        { titulo: 'Deudas por UF', url: '/home/deudas-uf' },
        { titulo: 'Cuentas corrientes', url: '/home/cuentas-corrientes' },
        { titulo: 'Ingresos por fecha', url: '/home/ingresos-por-fecha' },
        { titulo: 'Distribución de ingresos', url: '/home/distribucion-ingresos' }
      ]
    },
    {
      titulo: 'Administración',
      icono: 'mdi mdi-key-variant',
      submenu: [
        { titulo: 'Configurar intereses', url: '/home/configurar-intereses' }
      ]
    }
  ];

  constructor() { }
}