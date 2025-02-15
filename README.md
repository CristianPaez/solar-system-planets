# Explorador de Planetas del Sistema Solar 🌍✨

Una aplicación web moderna que permite a los usuarios explorar información sobre los planetas de nuestro sistema solar. Construida con Next.js 15, TypeScript y Styled Components.

🌐 **Demo**: [https://solar-system-planets-nine.vercel.app/planets](https://solar-system-planets-nine.vercel.app/planets)

## 🚀 Características

- Explorar todos los planetas del sistema solar
- Ver información detallada de cada planeta
- Explorar las lunas asociadas a cada planeta
- Agregar/eliminar planetas de favoritos
- Buscar planetas por nombre
- Ordenar planetas alfabéticamente (ascendente/descendente)
- Diseño responsivo para todos los dispositivos
- Renderizado del lado del servidor para mejor rendimiento

## 🛠 Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Styled Components
- **Gestión de Estado**: Zustand con persistencia
- **Cliente HTTP**: Axios
- **API**: Solar System OpenData

## 🏗 Arquitectura

El proyecto sigue un patrón de arquitectura limpia con la siguiente estructura:

```
├── app/                  # Páginas del App Router de Next.js
├── config/              # Archivos de configuración (axios, styled-components)
├── src/
│   ├── components/      # Componentes UI reutilizables
│   ├── domain/          # Lógica de negocio
│   │   ├── actions/     # Acciones de la aplicación
│   │   ├── models/      # Interfaces de TypeScript
│   │   ├── services/    # Servicios de API
│   │   └── store/       # Store de Zustand
│   └── templates/       # Plantillas de páginas
```

## 🔧 Decisiones Técnicas

1. **Next.js App Router**: Elegido por sus capacidades integradas de renderizado del lado del servidor y sistema de enrutamiento moderno.

2. **Zustand**: Seleccionado para la gestión de estado por su simplicidad y capacidades de persistencia integradas, perfecto para gestionar favoritos.

3. **Styled Components**: Utilizado para estilos para mantener CSS con alcance de componente y estilizado dinámico basado en props.

4. **TypeScript**: Implementado para seguridad de tipos y mejor experiencia de desarrollo.

5. **Arquitectura de Componentes**:
   - Templates: Componentes a nivel de página
   - Components: Elementos UI reutilizables
   - Domain: Separación de la lógica de negocio

## 🚀 Comenzando

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## 📱 Capturas de Pantalla

[Agregar capturas de pantalla de tu aplicación aquí]

## 🧪 Principios de Desarrollo

1. **Arquitectura por Capas**: 
   - **UI**: Componentes y templates para la interfaz de usuario
   - **Domain**: Lógica de negocio y gestión de estado
   - **Services**: Comunicación con APIs externas

2. **Principios de Diseño**:
   - Separación de responsabilidades entre componentes
   - Interfaces tipadas para mejor mantenibilidad
   - Abstracción de servicios HTTP

3. **Reusabilidad de Componentes**: 
   - Componentes modulares y reutilizables
   - Estilos encapsulados con Styled Components
   - Patrones de diseño consistentes

4. **Seguridad de Tipos**: 
   - Implementación integral de TypeScript
   - Interfaces para modelos de datos
   - Tipado estricto en las llamadas a API

5. **Rendimiento**: 
   - Renderizado del lado del servidor
   - Gestión eficiente del estado con Zustand
   - Optimización de re-renderizados

6. **Experiencia de Usuario**: 
   - Diseño responsivo e intuitivo
   - Gestión de estados de carga
   - Manejo de errores amigable

## 🔄 Gestión de Estado

- Estado global gestionado con Zustand
- Almacenamiento persistente para favoritos
- Re-renderizados optimizados con selectores de estado apropiados

## 🌐 Integración de API

- Instancia de Axios con configuración base
- Respuestas de API con seguridad de tipos
- Middleware de manejo de errores

## 🎨 Estrategia de Estilos

- Styled Components para estilos a nivel de componente
- Configuración de tema global
- Principios de diseño responsivo
- CSS-in-JS para estilos dinámicos
