// ============================================
// APPS SCRIPT PARA RECIBIR REPORTES DE ERRORES
// ============================================
// 
// INSTRUCCIONES DE INSTALACIÓN:
// 
// 1. Abre tu Google Sheet donde quieres los datos
// 2. Ve a Extensiones → Apps Script
// 3. Borra todo el código que aparece y pega este código
// 4. Guarda (Ctrl+S)
// 5. Click en "Implementar" → "Nueva implementación"
// 6. Tipo: "Aplicación web"
// 7. Ejecutar como: "Yo"
// 8. Quién tiene acceso: "Cualquier persona"
// 9. Click en "Implementar"
// 10. Copia la URL que te da y pégala en el Lector QR
//
// IMPORTANTE: La primera vez te pedirá permisos, acéptalos.
// Si modificas el código, debes hacer una NUEVA implementación.
// ============================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const reportes = data.reportes;
    
    // Si la hoja está vacía, agregar encabezados
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Numero',
        'Fecha Error', 
        'Fecha Registro',
        'Departamento',
        'Registrado Por',
        'OC',
        'Cliente',
        'Productos',
        'Tipo Error',
        'Descripcion',
        'Responsables',
        'Observaciones',
        'Monto Total',
        'Monto Por Persona',
        'Resolucion',
        'Fotos',
        'Fecha Ingreso'
      ];
      sheet.appendRow(headers);
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }
    
    // Agregar cada reporte
    const fechaIngreso = new Date().toLocaleString('es-CL');
    
    reportes.forEach(r => {
      const row = [
        r.numero || '',
        r.fechaError || '',
        r.fechaRegistro || '',
        r.departamento || '',
        r.registradoPor || '',
        r.ordenCompra || '',
        r.cliente || '',
        r.productos || '',
        r.tipoError || '',
        r.descripcion || '',
        r.responsables ? r.responsables.replace(/\|/g, ', ') : '',
        r.observaciones || '',
        r.monto || 0,
        r.montoPorPersona || 0,
        r.resolucion || '',
        r.cantidadFotos || 0,
        fechaIngreso
      ];
      
      sheet.appendRow(row);
    });
    
    // Ajustar ancho de columnas automáticamente
    sheet.autoResizeColumns(1, 17);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, count: reportes.length }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para probar que el script funciona
function doGet(e) {
  return ContentService
    .createTextOutput('Apps Script activo. Usa POST para enviar datos.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Función de prueba manual
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        reportes: [{
          numero: 'TEST-001',
          fechaError: '2025-01-21',
          fechaRegistro: '2025-01-21',
          departamento: 'Bodega',
          registradoPor: 'Test',
          ordenCompra: 'OC-TEST',
          cliente: 'Cliente Test',
          productos: 'Producto prueba',
          tipoError: 'Error de armado',
          descripcion: 'Prueba del sistema',
          responsables: 'Persona1|Persona2',
          observaciones: 'Observación test',
          monto: 50000,
          montoPorPersona: 25000,
          resolucion: 'Descuento',
          cantidadFotos: 2
        }]
      })
    }
  };
  
  doPost(testData);
  Logger.log('Test completado. Revisa la hoja.');
}
