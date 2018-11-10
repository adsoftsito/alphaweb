# efl-webapp
---
Repository to develop the new version of MotumWeb Platform

# Componentes

A medida de que avance el desarrollo sobre elementos que se están repitiendo como modals, calendarios, formularios, etc.

## Avatar

| inputs | Descripción |
| ------ | ----------- |
| name | Puede ir un nombre propio, una url o el nombre de la clase de un ícono. |
| type | Hace referencia a que tipo de información que va albergar 'NAME' o 'IMG' o 'ICON'. Por defecto es NAME. |
| isClickable | Muestra el cursor en forma de mano cuando hay un hover en el avatar. Por defecto es false. |
| size | Permite definir un tamaño del avatar. Por defecto tiene el tamaño de 45px. |
| textSize | Permite cambiar el tamaño del texto o icono. Por defecto es 20px. |
| nameType | Si type es NAME entonces será necesario elegir el tipo de nombre para definir si se trata de un nombre propio o el nombre de una compañía ya que se usa una lógica diferente, existen los valores NAME o COMPANY. Por defecto es NAME |
| isIconResize | Esto es en modo ICON y es necesario elegir cuando el ícono a elegir tiene su propio borde circular, en ese caso se pone true. Por defecto es false |
| isResponsive | Se define si será responsivo, y hace que su width y height sea del 100%. Por defecto es false |
| hasBorder | Añade o elimina el borde en el avatar. Por defecto es true. |
| borderSize | Si hasBorder es true entonces se puede definir el tamaño del borde del avatar. Por defecto es 2px. |
| borderColor | Si hasBorder es true entonces se puede elegir el color del borde en dato hexadecimal. Por defecto es #fff. |
| bgColor | Se puede elegir el color del background si está en modo NAME o ICON. |
| textColor | Si está en modo NAME o ICON entonces se puede elegir el color de texto del avatar |

```html
<motum-avatar   [name]="'Erubiel Recoba'"
				[type]="'NAME'"
				[isClickable]="false"
				[size]="'50'"
				[nameType]="'COMPANY'"
				[textSize]="'25'"
				[isIconResize]="false"
				[isResponsive]="false"
				[hasBorder]="false"
				[borderSize]="'4px'"
				[borderColor]="'#f0f'"
				[bgColor]="'#ff0'"
				[textColor]="'#c7c7c7c'"
				></motum-avatar>
```

## Calendario

Instrucciones de implementación
1. Crear una variable global para mostrar|ocultar el componente dinámicamente - ejemplo: showCalendarModal : boolean = false
2. Crear un método para cambiar showCalendarModal con el objetivo de mostrar|ocultar
3. Si requiere que los datos del calendario persistan, debe utilizar dos variables para almacenar el rango seleccionado y la opción de fechas
4. Crear dos métodos para almacenar el rango y la opción de fechas

| inputs | Descripción |
| ------ | ----------- |
| userDefinedOption | '1' Selecciona el índice para elegir una fecha en el menu de opciones del modal. Ejemplo: Hoy o Ayer o Últimos 7 días o Mes anterior |
| userDefinedRange | Elige el rango de fechas pre seleccionadas en el calendario. El objeto que recibe es moment() |

| outputs | Descripción |
| ------- | ----------- |
| selectedOption | Obtiene la opción de fechas seleccionadas. Ejemplo: Hoy o Ayer o Últimos 7 días o Mes anterior |
| selectedRange | Obtiene un array con el rango seleccionado en el calendario por el usuario en objeto moment: [firstDate, lastDate] |
| calendarLabel | Obtiene un string el rango seleccionado de fechas por el usuario. Ejemplo: 10-12-018 - 12-12-2019 |
| hasBeenClosed | Se dispara para notificar que el modal ha sido cerrado |
```html
<motum-modal-date-picker *ngIf="showCalendarModal"
                         (selectedOption)="getSelectedOption($event)"
                         (hasBeenClosed)="modalClosed()"
                         (selectedRange)="getSelectedRange($event)"
                         (calendarLabel)="getCalendarLabel($event)"
                         [userDefinedOption]="'1'"
                         [userDefinedRange]="[moment(), moment()]">
</motum-modal-date-picker>
```