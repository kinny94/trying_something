## Modules
The basic building blocks of an angular applcication are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets. An app always has atleast a roor module that enables bootstrapping, and typically has many more feature modules.

* Components contains views. which are sets of screen elements that angular can modify according to your program logic.
* Components uses services which provide specific properties not related to the view. Service providers can be injected into components as dependencies, making your code modular, reusable and efficient.


## Component
Every angular application has atleast one component, the root component that connects a component hierarchy with the page DOM. Each component defines class that contains applciation data and logic, and is associate with a HTML template that defines a view to be displayed in a target environment.

### Decorator
`Decorators are function that modify JavaScript classes. Angular defines a number of decorators  that attach specific kinds of metadata to classes, so that the system knowns what those classes mean and how they should work`


### Binding
  - `Event Binding`: Lets your app respond to user input in the target environment by updating your applciation data.
  - `Property Binding`: Lets you interpolate values that are computed from your applcation data into the HTML.

Angular supports two-way data-binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.

### Services and Dependency Injection
For data or logic that is shared across different views and isn't associated with a specific view, you create a service class. A service class defination is immediately proceded by the ```@Injectable()``` decorator. The decorator provides the metadata that allows your service to be injected into client components as a dependency.

Dependency Injection lets you keep your component classes lean and effiecient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.

### Intro to Modules

#### NgModule Metadata
An  NgModule defined by a class decorated with @NGModule(). The NgModule() decorator is a function that takes a single metadata object, whose properties describe the module. 


### Intro to Components

#### Pipes
Angular pipers lets you declare display-value transformation in your template HTML. A class wi5th the @Pipe decorator defined a function that transforms input values for display in a view. Angular defines multiple pipes, such as the date pipe and currency pipe.

#### Directives
Angular tempaltes are dynamic. When angular renders them, it transforms the DOM according to the instructions given by directives. A directive is a class with a ```@Directive()``` decorator.

A component is technically a directive. However, componetnts arte so distinctive and central to angular applciations taht Angular defines the ```@Component``` decorator, which extends the @Directive() decorator with template-oriented features. In addition to components there are two other directives: *structural* and 
*attribute*.

##### Structural Directives
Structural directives alter layout by adding, removing, and replacing elements in the DOM. eg *\*ngFor*, *\*ngIf*.

##### Attribute directives
Attribute directives alter the appearance or behavior of an existing element. In template they look like regular HTML attributes. eg *ngModel*

### Intro to Services and Dependency Injection

#### Services
A Service is typically a class with a narrow, well defined purpose. It should something specific and do it well. Angular distinguishes components from services to increase reuability and modularity. By Separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient. A component can delegate some tasks to services, such as fetching data from the server, validating user input etc. By defininig these tasks in an injectable service class, you can make those tasks available to any component.

#### Depenedency Injection
DI's wired into the angular framework and used everywhere to provide new component with the services or other things they need. Components consume services; that is, you can inject a service into a component, giving the component access to that service.
To define a class as a service in Angular, use the `@Injectable()` decorator to provide the metadata that allows angular to inject it into a component as a dependency.

*A dependency doesn't have to be a service, it could be a function for example, a value*

When Angular discovers that a component depends on a service, it first checks if the injector has any existing instances of that services. If a requested service instance doesn't yet exist, the injector makes one using the registered provider, and adds it to the injector before returning the service to angular.

#### Providing Services

You must register at least one provider of any service, you are going to use. The provider can be a part of the service's own metadata, making that service available everywhere, or you can register providers with the specific modules or components. You register providers in the metadata of the service, or in the `@NgModule()` or `@
Component()` metadata.

* When you provide the service at the root level, angular creates a single shared instance of the Service and injects it into any class that asks for it, Registering the providers in the `@Injectable()` metadata also allows Angular to optimize an app by removing the service from the compiled app if it isn't used.

```
@Injectable({
 providedIn: 'root',
})
```

* When you register a provider with a specific @NgModule, the same instance of a service is available to all components in that NgModule.

```
@NgModule({
  providers: [
  BackendService,
  Logger
 ],
 ...
})
```

* When you register a provider at the component level, you get a new instance of the service with each new instance of that component. At the component level, register a service provider in the `providers` property of the `@Component` metdata.

```
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
```
