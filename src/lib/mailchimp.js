// Mailchimp integration usando formulario directo
export const submitToMailchimp = async (formData) => {
  try {
    console.log('Sending to Mailchimp:', formData);

    // Crear formulario oculto para envío directo
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://internationalpathfinders.us12.list-manage.com/subscribe/post?u=7c1ba33ab45eca6364ee279fb&id=b9b125beb8';
    form.target = 'mailchimp-response';
    form.style.display = 'none';

    // Crear iframe oculto para capturar respuesta
    const iframe = document.createElement('iframe');
    iframe.name = 'mailchimp-response';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Crear campos del formulario
    const fields = {
      EMAIL: formData.email || '',
      FNAME: formData.name || '',
      PHONE: formData.phone || '',
      COMPANY: formData.company || '',
      'b_7c1ba33ab45eca6364ee279fb_b9b125beb8': '' // honeypot
    };

    // Agregar campos al formulario
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    // Agregar formulario al DOM
    document.body.appendChild(form);

    // Crear promesa para manejar la respuesta
    return new Promise((resolve, reject) => {
      let submitted = false;

      // Timeout de 8 segundos
      const timeout = setTimeout(() => {
        if (!submitted) {
          submitted = true;
          document.body.removeChild(form);
          document.body.removeChild(iframe);
          // Asumir éxito si no hay error después de timeout
          resolve({ success: true, message: 'Subscription likely successful' });
        }
      }, 8000);

      // Listener para cuando el iframe carga (respuesta de Mailchimp)
      iframe.onload = () => {
        if (!submitted) {
          submitted = true;
          clearTimeout(timeout);
          
          try {
            // Intentar leer el contenido del iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const content = iframeDoc.body ? iframeDoc.body.innerHTML : '';
            
            console.log('Mailchimp response content:', content);
            
            // Limpiar
            document.body.removeChild(form);
            document.body.removeChild(iframe);
            
            // Verificar si hay indicadores de éxito en la respuesta
            if (content.includes('success') || content.includes('subscribed') || content.includes('thank')) {
              resolve({ success: true, message: 'Successfully subscribed' });
            } else if (content.includes('error') || content.includes('invalid')) {
              resolve({ success: false, error: 'Subscription failed' });
            } else {
              // Si no podemos determinar, asumir éxito
              resolve({ success: true, message: 'Subscription completed' });
            }
          } catch (error) {
            // Error de CORS al leer iframe - normal, asumir éxito
            console.log('CORS error reading response (normal), assuming success');
            document.body.removeChild(form);
            document.body.removeChild(iframe);
            resolve({ success: true, message: 'Subscription completed' });
          }
        }
      };

      // Error del iframe
      iframe.onerror = () => {
        if (!submitted) {
          submitted = true;
          clearTimeout(timeout);
          document.body.removeChild(form);
          document.body.removeChild(iframe);
          reject(new Error('Failed to submit to Mailchimp'));
        }
      };

      // Enviar el formulario
      console.log('Submitting form to Mailchimp...');
      form.submit();
    });

  } catch (error) {
    console.error('Error enviando a Mailchimp:', error);
    throw error;
  }
};