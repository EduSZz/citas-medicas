# 🏥 Sistema de Citas Médicas

Aplicación web para gestionar citas médicas, desarrollada con Node.js (Backend) y React (Frontend). Permite a los usuarios agendar, visualizar y administrar citas de manera eficiente.

## 🛠 Tecnologías Utilizadas

- **Backend**: Node.js + TypeScript
- **Frontend**: React.js + TypeScript
- **Base de datos**: SQLite
- **Estilos**: Tailwind CSS
- **Runtime**: pnpm (opcionalmente compatible con npm/yarn)

## 📦 Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/EduSZz/citas-medicas.git
cd citas-medicas
```

2. Instalar dependencias
Ejecuta en ambas carpetas (backend y frontend):

bash
# Usando npm (recomendado):
npm install

# Opcionalmente con pnpm:
pnpm install

🚀 Ejecución local
Iniciar el Backend:

```bash
cd backend
npm run dev
```
El servidor se ejecutará en http://localhost:3001

Iniciar el Frontend (en otra terminal):

```bash
cd frontend
npm start
```
La aplicación se abrirá en http://localhost:3000

📌 Estructura del Proyecto
citas-medicas/
├── backend/           # API REST (Node.js + TypeScript)
│   ├── src/           # Código fuente
│   └── database.sqlite # Base de datos (auto-generada)
├── frontend/          # Aplicación React
│   ├── public/        # Assets estáticos
│   └── src/          # Componentes y lógica
└── README.md          # Este archivo
