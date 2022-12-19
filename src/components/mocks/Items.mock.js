import Alimento from '../../assets/images/alimento-perro-alaska-15-kg.jpg';
import Snack from '../../assets/images/purina-feliz-travesuras.jpg';
import Ball from '../../assets/images/pelota-cuerda.jpg';
import catBed from '../../assets/images/cama-gato.jpg';

export const ItemsMock = [
    {
        id: '1',
        category: 'perros',
        brand: 'Alaska',
        description: 'Alimento Premium Perro Adulto Raza Mediana y Grande',
        price: '36.000',
        stock: 12,
        img: Alimento
    },
    {
        id: '2',
        category: 'gatos',
        brand: 'Felix',
        description: 'Travesuras Party Mix',
        price: '1.440',
        stock: 5,
        img: Snack
    },
    {
        id: '3',
        category: 'accesorios',
        brand: 'Jolly Pets',
        description: 'Pelota con Cuerda Romp N Roll 15 Cm',
        price: '18.990',
        stock: 8,
        img: Ball
    },
    {
        id: '4',
        category: 'accesorios',
        brand: 'Pawise',
        description: 'Cama Gato Igloo Gris',
        price: '25.990',
        stock: 5,
        img: catBed
    }
]