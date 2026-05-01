---
title: "Inflación y el ISR por enajenación de inmuebles"
date: "2022-07-22"
author:
  name: "Equipo Nuvigant"
  avatar: "https://ui-avatars.com/api/?name=Equipo+Nuvigant&background=056dfe&color=fff&size=128"
  bio: "Software administrativo en la nube con inteligencia artificial para fedatarios públicos."
  twitter: "https://twitter.com/nuvigant"
  linkedin: "https://linkedin.com/company/nuvigant"
tags: ["ISR", "Enajenación", "Venta de Inmuebles", "Fiscal"]
excerpt: "Descubre cómo calcular la inflación para el ISR por enajenación de inmuebles usando el INPC o los factores de ajuste, con ejemplos paso a paso."
coverImage: "/images/blog/inflacion-isr-por-enajenacion-de-inmuebles.jpg"
published: true
category: "industry"
subcategory: "isr"
---

[Como vimos en el artículo anterior](https://nuvigant.com/blog/industry/isr/isr-enajenacion-inmuebles) en esta [guía para el cálculo de ISR por enajenación de inmuebles](https://nuvigant.com/isr-enajenacion-inmuebles-manual), para calcular el ISR por enajenación de inmuebles es necesario considerar la inflación para poder calcular la ganancia obtenida por la venta del inmueble. En este artículo veremos lo que hay que saber sobre cómo calcular esta inflación con los dos métodos que se nos proporcionan: el índice nacional de precios al consumidor y los factores de ajuste de inflación.

<div class="video-container"><iframe src="https://www.youtube.com/embed/5I02LBnSy3s" title="Inflación y el ISR por enajenación de inmuebles" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## ¿Qué necesitamos?

Para actualizar un precio a una fecha futura de acuerdo a la inflación, siempre vamos a necesitar tres variables y estas son (con sus valores que usaremos para este ejemplo suponiendo que queremos vender un terreno únicamente):

1. El precio a actualizar: **$10,000.00 MXN**
2. La fecha original: **03/08/2012**
3. La fecha a la que se quiere convertir: **22/05/2022**

Existen dos formas de calcular esta inflación:

1. Índice Nacional de Precios al Consumidor (INPC)
2. Los Factores para Ajustes de Inflación

## ¿Cómo decidimos cuál método utilizar?

Al actualizar un precio, es importante actualizarla con los dos métodos que existen. Esto es porque al hacer el cálculo de ISR por enajenación de inmuebles, se nos permite tomar el valor que más convenga para reducir la cantidad del impuesto a pagar.

Primero vamos a hacer el cálculo con:

## INPC

Antes que nada, para hacer este cálculo, necesitamos consultar los valores del índice nacional de precios al consumidor para las dos fechas. Esto se puede hacer directamente de la página del [Banco de México](https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadro&idCuadro=CP154&locale=es). Después de hacer la consulta para las fechas anteriores de ejemplo, vemos que los INPCs son:

- La fecha original (03/08/2012): **INPC: 79.091**
- La fecha a la que se quiere convertir (22/05/2022): **INPC: 120.809**

Una vez teniendo estos dos valores ya estamos muy cerca de poder calcular la inflación, lo único que tenemos que hacer es dividir el valor de la fecha futura por el de la fecha pasada y con eso obtenemos el factor a multiplicar nuestro monto:

- 120.809 / 79.091 = **1.5275** (podemos comprobar esto con [la calculadora del INEGI](https://www.inegi.org.mx/app/indicesdeprecios/calculadorainflacion.aspx))

Teniendo este monto, lo único que queda por hacer es multiplicar el factor obtenido por el precio:

- $10,000.00 MXN × 1.5275 = **$15,275.00 MXN**

Y listo, ya quedó actualizada la cantidad de $10,000.00 MXN en la fecha 03/08/2012 a la fecha de 22/05/2022 y quedó siendo $15,275.00 MXN. Con una diferencia tan grande, probablemente te vas dando cuenta porque es tan importante tomar en cuenta la inflación al calcular el ISR por enajenación de un inmueble.

![Inflación-y-el-ISR-por-enajenación-de-inmuebles](/images/blog/inflacion-isr-por-enajenacion-de-inmuebles-body.jpg)

## Ahora usemos el factor de ajuste de inflación

Esta manera de actualizar es un poco más sencilla. Primero que nada se tiene que determinar la diferencia de años entre las dos fechas:

- Fecha 1: 22/05/2022
- Fecha 2: 03/08/2012
- **Años de diferencia: 9** (aunque 2022 – 2012 es igual a 10, si nos fijamos, los meses no alcanzan a cumplir el año número 10)

Teniendo este número, ya solo es necesario consultar el factor que corresponde a esa cantidad de años que encontramos en el anexo 9 de la miscelánea fiscal ([clic aquí](https://www.sat.gob.mx/cs/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1461175201570&ssbinary=true) para ver el actual al momento de escribir esto o si no lo puedes encontrar en Google fácilmente). Vemos que el valor para 9 años es:

- **1.41**

Ya por último, solo hay que multiplicar este valor por el precio inicial:

- $10,000 MXN × 1.41 = **$14,100 MXN**

## ¿Entonces, cómo sabemos cuál conviene usar para calcular la inflación?

En este ejercicio, terminamos con dos montos diferentes:

- INPC: **$15,275.00 MXN**
- Factores de Ajuste de Inflación: **$14,100.00 MXN**

Al calcular el ISR por Enajenación de Inmueble, para reducir el impuesto conviene declarar que se pagó la cantidad mayor posible al momento de comprar la casa. Esto es porque entre mayor haya sido el gasto, menor va a ser la ganancia y el impuesto en sí se calcula sobre la ganancia. Entonces, en este caso, el valor que se usará será el de **$15,275.00 MXN**.

Este procedimiento se debe utilizar si estás vendiendo un terreno, una construcción o ambos. En el siguiente artículo vamos a ver un procedimiento que se debe de usar solamente para construcciones: calcular la [depreciación de un inmueble](https://nuvigant.com/blog/industry/isr/isr-enajenacion-inmuebles-depreciacion-de-un-inmueble).

## Conoce nuestra herramienta de cálculo de ISR gratuita

Nuvigant te ofrece una herramienta gratuita para calcular el ISR. Sin ningún costo y directo desde tu celular.

- Siempre se mantiene actualizada con los índices de [BANXICO](https://www.banxico.org.mx/)
- Puedes hacer el cálculo directamente en el celular
- Te imprime un PDF que explica paso por paso cómo se realizó el cálculo
