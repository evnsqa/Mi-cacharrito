import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class NoticiasComponent implements OnInit {

  categoriaActiva: string = 'Todas';

  categorias = [
    { nombre: 'Todas', icono: 'bi-grid-fill', cantidad: 0 },
    { nombre: 'Automóvil', icono: 'bi-car-front-fill', cantidad: 0 },
    { nombre: 'Camioneta', icono: 'bi-truck-flatbed', cantidad: 0 },
    { nombre: 'Campero', icono: 'bi-truck-front-fill', cantidad: 0 },
    { nombre: 'Microbús', icono: 'bi-bus-front-fill', cantidad: 0 },
    { nombre: 'Motocicleta', icono: 'bi-bicycle', cantidad: 0 },
    
  ];

  todasLasNoticias = [
    {
      categoria: 'Camioneta',
      colorBadge: 'bg-primary',
      icono: 'bi-truck-flatbed',
      titulo: 'Jeep Compass: Inspirando Nuevas Aventuras',
      resumen: 'Seguro, potente, versátil, de amplio espacio interior y diseño renovado. Así es el nuevo Jeep Compass, ideal para ti...',
      fecha: '28 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80'
    },
    {
      categoria: 'Camioneta',
      colorBadge: 'bg-primary',
      icono: 'bi-truck-flatbed',
      titulo: 'HONDA WR-V: Espacioso y funcional',
      resumen: 'Honda WR-V, el mini SUV que te hará repensar tus gustos, por su diseño robusto y compacto; pero a la vez con excelente distribución...',
      fecha: '25 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=600&q=80'
    },
    {
      categoria: 'Camioneta',
      colorBadge: 'bg-primary',
      icono: 'bi-truck-flatbed',
      titulo: 'Hyundai Creta 2026: Innovación total',
      resumen: 'Descubre la nueva generación de Hyundai Creta. Tecnología de punta y seguridad avanzada para dominar la ciudad y la carretera.',
      fecha: '20 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80'
    },
    {
      categoria: 'Automóvil',
      colorBadge: 'bg-primary',
      icono: 'bi-car-front',
      titulo: 'Toyota Yaris Sedán: Elegancia y rendimiento',
      resumen: 'Conoce las características del nuevo Toyota Yaris. Un automóvil diseñado para ofrecer el mejor rendimiento en consumo de combustible y confort.',
      fecha: '12 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80'
    },
     {
      categoria: 'Campero',
      colorBadge: 'bg-warning text-dark',
      icono: 'bi-truck-front',
      titulo: 'Toyota Fortuner',
      resumen: 'Se trata de uno de los SUV usados más vendidos en Colombia durante el año 2021, alcanzando los 9.495 traspasos durante dicho periodo',
      fecha: '28 sep. 2026',
      imagen: 'https://static.retail.autofact.cl/blog/c_img_740x370.kp678l2kinyrn.jpg'
    },
    {
      categoria: 'Microbús',
      colorBadge: 'bg-info',
      icono: 'bi-bus-front',
      titulo: 'Confort en cada viaje: Nuestro nuevo Microbús',
      resumen: 'Ideal para transporte de pasajeros o viajes familiares. Conoce por qué este microbús ofrece la mejor relación entre capacidad y seguridad.',
      fecha: '5 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80'
    },
    {
      categoria: 'Motocicleta',
      colorBadge: 'bg-danger',
      icono: 'bi-bicycle',
      titulo: 'Nueva Suzuki Address: Movilidad urbana',
      resumen: 'La motocicleta perfecta para moverte por la ciudad. Ligera, económica y con un diseño moderno que no pasa desapercibido.',
      fecha: '2 sep. 2026',
      imagen: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80'
    },
   
  ];

  noticiasVisibles: any[] = [];

  ngOnInit(): void {
    this.noticiasVisibles = this.todasLasNoticias;
    this.calcularCantidades();
  }

  calcularCantidades() {
    this.categorias.forEach(cat => {
      if (cat.nombre === 'Todas') {
        cat.cantidad = this.todasLasNoticias.length;
      } else {
        cat.cantidad = this.todasLasNoticias.filter(n => n.categoria === cat.nombre).length;
      }
    });
  }

  filtrarCategoria(nombreCategoria: string) {
    this.categoriaActiva = nombreCategoria;
    
    if (nombreCategoria === 'Todas') {
      this.noticiasVisibles = this.todasLasNoticias;
    } else {
      this.noticiasVisibles = this.todasLasNoticias.filter(noticia => noticia.categoria === nombreCategoria);
    }
  }
}