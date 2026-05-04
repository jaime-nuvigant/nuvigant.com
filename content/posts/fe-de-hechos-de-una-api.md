---
title: "Fe de Hechos de una API"
date: "2024-09-26"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "El equipo de Nuvigant crea contenido especializado en gestión notarial, compliance y tecnología legal para fedatarios en México."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["Automatización", "Legal Tech", "Fedatarios", "Tecnología"]
excerpt: "La fe de hechos es un documento que certifica que un evento tuvo lugar. Pero, ¿cómo aplica este concepto del derecho notarial al mundo de las APIs y la tecnología? Exploramos cómo certificar interacciones digitales con la misma rigurosidad que un fedatario."
coverImage: "/images/blog/fe-de-hechos-de-una-api.jpg"
published: true
category: "industry"
subcategory: "lawyers"
---

En el ámbito del derecho, la **fe de hechos** es un documento emitido por un notario o autoridad competente que certifica que un evento o acción ha tenido lugar. En términos de tecnología, y específicamente en el desarrollo de software y servicios web, el concepto de fe de hechos puede aplicarse para describir el registro o verificación de las interacciones entre computadoras que sucede mediante una [llamada API](/blog/industry/lawyers/api-para-notarios-que-es-un). En este contexto, se busca garantizar que una operación fue ejecutada y que los datos intercambiados entre el cliente y el servidor son los esperados. Este artículo explora el concepto de una "fe de hechos" en el marco de las llamadas API y hablaremos sobre todo lo que uno no entiende de derecho notarial, combinado con todo lo que uno no entiende de tecnología.

## ¿Qué es una llamada API?

Una **API** (Interfaz de Programación de Aplicaciones, por sus siglas en inglés) es un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí. Las **llamadas API** son solicitudes realizadas por un cliente a un servidor para obtener, modificar, eliminar o crear información. [Te invitamos a leer este artículo, APIs para notarios](/blog/industry/lawyers/api-para-notarios-que-es-un), para entender mejor qué son estas APIs.

## La Fe de Hechos en una API

En el contexto de una llamada API, la **fe de hechos** puede referirse a una confirmación documentada de que una solicitud se ha realizado de manera correcta a un servidor, junto con los resultados y respuestas obtenidos. Esta confirmación puede ser esencial para auditorías, validaciones de integridad de los datos, resolución de conflictos y para garantizar que la comunicación entre sistemas es transparente y verificable.

## Ejemplos Concretos de una Fe de Hechos de una API

Para entender a profundidad de qué nos puede servir esta fe de hechos, primero hay que entender que para poder dar por cierto que algo sucedió en el mundo tecnológico, **simplemente decir que es verdad porque aparece en una interfaz gráfica**, no es suficiente.

Es decir, que aparezca un mensaje en una conversación de WhatsApp no te garantiza que sí se envió ese mensaje. Sin embargo, analizar el proceso mediante el cual se solicitan los mensajes de WhatsApp directamente desde el servidor donde son procesados, y certificar este proceso, brinda mucha más certeza. Es justo aquí que nos sirve certificar esta llamada API y muchas de estas están muy bien documentadas, [como la de WhatsApp](https://business.whatsapp.com/developers/developer-hub). Algunos ejemplos prácticos:

- **Transacciones bancarias**: Al realizar pagos o transferencias, puede auditarse cada paso de la transacción. Una fe de hechos puede certificar que la solicitud fue enviada, recibida y procesada correctamente, protegiendo tanto al cliente como al banco.
- **E-commerce**: En plataformas de comercio electrónico, se utilizan APIs para gestionar inventarios, realizar pedidos y procesar pagos. La fe de hechos puede documentar que un pedido fue registrado correctamente o que un pago se procesó en un momento determinado.
- **Plataformas de redes sociales**: Cuando se publican contenidos a través de APIs en redes sociales (como usar la API de Twitter para publicaciones automáticas), una fe de hechos asegura que las publicaciones fueron realizadas en el momento adecuado y sin errores.
- **Firmas digitales y contratos inteligentes**: En sistemas que gestionan contratos electrónicos o blockchain, una fe de hechos puede asegurar que los documentos o contratos firmados a través de API son válidos, auditando tanto la solicitud como la respuesta.

### Elementos de una Fe de Hechos en una Llamada API

Son varias las cosas que deberían guardarse al momento de realizar una fe de hechos de una API. Estos son datos técnicos que describen el llamado y que pudieran reutilizarse para hacer el mismo llamado de nuevo (en ciertos casos y con algunas modificaciones como tokens de seguridad).

**Registro de la Solicitud:**

- **Método HTTP**: Se debe registrar qué tipo de solicitud técnica se ha realizado (GET, POST, PUT, DELETE, etc.).
- **Endpoint**: Especificar a qué endpoint o URL se ha hecho la llamada.
- **Cuerpo de la solicitud**: Si aplica, documentar el cuerpo de la solicitud, que contiene los datos enviados al servidor.
- **Cabeceras**: Incluir información sobre las cabeceras utilizadas, como autorizaciones o formatos de contenido (JSON, XML, etc.).

**Registro de la Respuesta:**

- **Código de estado HTTP**: La respuesta del servidor incluye un código de estado HTTP (200 para éxito, 404 para no encontrado, etc.). Este código forma parte esencial de la fe de hechos.
- **Cuerpo de la respuesta**: Documentar los datos o mensajes que el servidor devuelve, ya sea en JSON, XML o algún otro formato.
- **Cabeceras de la respuesta**: Registrar información adicional como el tipo de contenido o el tiempo que tardó la respuesta.

**Timestamps:**

- La **fecha y hora** en que la solicitud se realizó y se recibió la respuesta es crucial para la trazabilidad y auditoría.

**Autenticación y Autorización:**

- Si la llamada API requería algún tipo de autenticación (tokens, claves API, OAuth, etc.), es necesario dejar constancia de que el cliente estaba autorizado para realizar la solicitud.

### Ejemplo de Fe de Hechos en una Llamada API

Imaginemos un sistema donde un cliente realiza una solicitud POST a una API para crear un nuevo usuario. La fe de hechos sería algo como lo siguiente:

**Solicitud:**

- Método: `POST`
- Endpoint: `/api/users`
- URL: `https://ejemplo.com` (dominio público base del servicio)
- Cuerpo de la solicitud: `{ "name": "Juan Pérez", "email": "juan.perez@example.com" }`
- Cabeceras: `Authorization: Bearer <token>`

**Respuesta:**

- Código de estado: `201 Created`
- Cuerpo de la respuesta: `{ "id": 12345, "name": "Juan Pérez", "email": "juan.perez@example.com" }`
- Cabeceras: `Content-Type: application/json`

**Timestamps:**

- Solicitud: `2024-09-26T10:15:30Z`
- Respuesta: `2024-09-26T10:15:32Z`

Este registro serviría como una fe de hechos de la llamada API, demostrando que el usuario Juan Pérez fue creado correctamente en el sistema, a qué hora sucedió y bajo qué circunstancias.

## Importancia para el Fedatario Digital

![Fe-de-hechos-de-una-API](/images/blog/fe-de-hechos-de-una-api-body.jpg)

La fe de hechos tradicional que emite un notario está respaldada por su firma, su sello y su responsabilidad profesional. En el mundo digital, ese respaldo equivale a la integridad criptográfica de los registros, los timestamps de los servidores y la trazabilidad de cada operación.

Para un notario que trabaja con plataformas digitales, entender este concepto es clave: los sistemas con los que interactúa —desde el portal del SAT hasta el Registro Público de la Propiedad— se comunican mediante APIs. Certificar esas interacciones es, en esencia, extender la función fedataria al entorno digital.

## Conclusión

La **fe de hechos** aplicada a las llamadas API es esencial para garantizar la integridad, seguridad y transparencia en los sistemas modernos. No solo permite auditar y validar que una solicitud se haya procesado correctamente, sino que también proporciona una base sólida para la resolución de conflictos y la mejora de la seguridad. En un mundo cada vez más dependiente de la interconexión de sistemas mediante API, contar con este tipo de registros es más importante que nunca.

¿Te interesa ver cómo Nuvigant puede ayudar a tu notaría a integrarse con los sistemas digitales? [Agenda una demo y te mostramos la herramienta en vivo](/contact).
