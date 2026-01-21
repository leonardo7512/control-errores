# 📋 Sistema de Control de Errores - AROMAKER

Sistema web para gestionar errores con impacto monetario. Genera reportes PDF con código QR y consolida datos en Google Sheets.

## 🚀 Demo

👉 [Ver Demo en GitHub Pages](https://tu-usuario.github.io/control-errores/)

## 📦 Herramientas

### 1. Generador de Reportes (`generador.html`)
Crea reportes detallados de errores con:
- ✅ Información del pedido y cliente
- ✅ Descripción del error
- ✅ Múltiples responsables con división automática de costos
- ✅ Evidencia fotográfica (2 fotos por página)
- ✅ PDF profesional con código QR
- ✅ Guardado de borradores en localStorage

### 2. Scanner QR (`scanner.html`)
Escanea y consolida reportes:
- ✅ Lectura de QR con cámara
- ✅ Acumulación de múltiples reportes
- ✅ Estadísticas en tiempo real
- ✅ Envío directo a Google Sheets
- ✅ Descarga CSV

## 🛠️ Instalación

### Opción 1: GitHub Pages (Recomendado)

1. Haz fork de este repositorio
2. Ve a Settings → Pages
3. En "Source" selecciona `main` branch
4. Espera 1-2 minutos
5. Accede en `https://tu-usuario.github.io/control-errores/`

### Opción 2: Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/control-errores.git
```

2. Abre `index.html` en tu navegador

## 📊 Configurar Google Sheets

Para enviar datos desde el Scanner a Google Sheets:

### Paso 1: Crear el Apps Script

1. Crea un nuevo Google Sheet
2. Ve a **Extensiones → Apps Script**
3. Borra el código existente y pega el contenido de `apps-script.gs`
4. Guarda (Ctrl+S)

### Paso 2: Desplegar como Web App

1. Click en **Implementar → Nueva implementación**
2. Selecciona **Aplicación web**
3. Configurar:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
4. Click en **Implementar**
5. **Copia la URL** que te genera

### Paso 3: Configurar el Scanner

1. Abre el Scanner QR
2. Pega la URL en el campo de configuración
3. ¡Listo! Los datos se enviarán a tu Google Sheet

## 📁 Estructura del Proyecto

```
control-errores/
├── index.html          # Página principal con selector
├── generador.html      # Generador de reportes PDF
├── scanner.html        # Scanner QR y consolidador
├── apps-script.gs      # Código para Google Sheets
└── README.md           # Este archivo
```

## 📄 Formato del QR

El código QR contiene datos comprimidos:
```
E20250121-001|2025-01-21|B|OC123|Cliente|Armado|CA,CA1|6000|2000|D
```

Campos separados por `|`:
1. Número de reporte
2. Fecha del error
3. Departamento (1 letra)
4. N° OC
5. Cliente
6. Tipo de error
7. Responsables
8. Monto total
9. Monto por persona
10. Resolución (1 letra)

## 🔧 Tecnologías

- HTML5 / CSS3 / JavaScript (Vanilla)
- [jsPDF](https://github.com/parallax/jsPDF) - Generación de PDF
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - Generación de QR
- [Html5-QRCode](https://github.com/mebjas/html5-qrcode) - Lectura de QR
- Google Apps Script - Integración con Sheets

## 📝 Licencia

MIT License - Libre para uso comercial y personal.

---

Desarrollado para **AROMAKER** 🇨🇱
