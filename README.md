# Port Of Seattle Demo


### A Mockup or Simulation of Port of Seattle VendorConnect

The purpose of the project is to exercise Angular 17 and Material Design skills on a "real world" problem (not related to the problems found in tutorials or textbooks (remember textbooks?) )

The project has been employed only such knowledge as can be deduced from the public facing web application operated by the Port of Seattle especially the information that can be detected using Chrome DevTools to view html tag and css and to view network traffic to and from the Odata API used by the Port of Seattle website.   

The image below shows the real production website as of 1/26/2024.

<img width="1031" alt="image" src="https://github.com/steveLeVesconte/pos-vendor-connect/assets/4312647/caf7bf26-4207-49fa-9920-372d11a76249">


This next image shows the work in progress to mock-up the production website using the latest version of angular and employing "Stand Alone Components", e.g. no modules.

<img width="1028" alt="image" src="https://github.com/steveLeVesconte/pos-vendor-connect/assets/4312647/9ff8a682-72dd-49ec-97d5-7359b595832e">


### The Plan

Add the "CURRENT AND PAST SOLICITATION" feature including a moch-up of the detail page.

Work in progress...

 Below is an image of the real VendorConnect Current Solicitations Page.
 <img width="1185" alt="image" src="https://github.com/steveLeVesconte/port-of-seattle-demo/assets/4312647/bac5daa7-2d5b-4f7f-9628-ae7699abce3d">


Below is an image of the mock-up VendorConnect Current Solicitations Page - NOTE:  This page uses a fake Odata API that does not contain any of the Port of Seattle data, so the field contents are different.  When the page is displayed, the fake Odata API is queried and the fake data is displayed.  At this time, the "Search Selection" box and the breadcrumbs are the only active elements on this page.

The real Port of Seattle website uses Kendo UI (a 3rd party library) for the table and for the filter dropdowns and fields but that library is not used in the mock-up causing slight differences in styling and a reduced feature set.  Kendo seems to be doing a great job on the real website, but is a bit pricey for this demo project.
<img width="1170" alt="image" src="https://github.com/steveLeVesconte/port-of-seattle-demo/assets/4312647/c70b417d-3855-4fb5-8963-705408486cb6">


This application also demonstrates the new "stand alone" component architecture of Angular 15+.  Look Ma, no modules!!!!!

<img width="781" alt="image" src="https://github.com/steveLeVesconte/port-of-seattle-demo/assets/4312647/e37c2afd-0883-4ab6-add5-e8ff5560ab46">

One feature where the real website severely out-shines the mock-up is responsiveness to small form factors.  Below is real website responding to a Samsung Galaxy 22 Ultra form factor.
The mock-up website does not achieve anything like this excellent responsiveness.  I suspect this feature is part of the Kendo UI grid package.


<img width="339" alt="image" src="https://github.com/steveLeVesconte/port-of-seattle-demo/assets/4312647/5f25010f-f334-42b8-bc4a-292005e8ed66">



- - -
### The following is the auto-generated Readme info created by the Angular CLI.






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
