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

A component is technically a directive. However, componetnts are so distinctive and central to angular applciations taht Angular defines the ```@Component``` decorator, which extends the @Directive() decorator with template-oriented features. In addition to components there are two other directives: *structural* and 
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

### Template Syntax

#### Template Statements
A template statement responds to an event raised by a binding target suchb as an element, component, or directive. A template statement has a side effect. Responding to events is the other side of Angular's unidirectional data flow. You're free to change anything, anywhere, during this turn of the event loop.

#### Statement Context
As with expressions, statement can refer only to what's in the statement context such as an event handling method of the component instance. The statement context is typically the component instance. The statement context may also refer to properties of the template's own context.

```
<button (click)="onSave($event)">Save</button>
<button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
```

Tempalte context names take precedence over component context names. Template statements cannot refer to anything in the global namespace.

#### A new Mental model
With all the power of data binding and the ability to extend HTML vocabulary with custom markup, it is tempting to think of template HTML as HTML plus. Once you start data binding, you're no longer working with HTML attributes. You are not setting attributes, you are setting properties of DOM elements.

#### HTML attribute VS DOM Property

Attributes are defined by HTML. Properties are defined by the DOM.
* A few HTML attributes have 1:1 mapping to properties. id one example.
* Some HTML attributes don't have corresponding properties. colspan is an example.
* Some DOM properties don't have corresponding attributes. textContent is one example.
* Many HTML attributes appear to map to properties.

*Attribute initialize DOM properties and then they are done. Property values can change; attribute values can't. Tempalte binding works with properties and events, not attributes.*

### User input

#### Get user input from the $event object
DOM events carry a payload of information that may be useful to the component. When a user presses and releases a key, the keyup event occurs, and Angular provides a corresponding DOM event object in the `$event` variable. The properties of an $event object vary depending on the type of DOM event. All standard DOM event objects have a target property, areference to the element that raised the event.

**Passing $event is a dubious practice**
Typing the event object reveals a significant objection to passing the entire DOM event into the method: the component has too much awareness of the template details. It can't extract information without knowing more than it should about the HTML implementation. This breaks the separation of concerns between the template and the component.

**Get user input from a template reference varaiable**
A template reference variable provide direct access to an element from within the template. The template reference variable decalred, refers to the element itself. The code uses the box variable to get the input element's value and display it with interpolation tags. *This won't work until you bind to the event.*

```
<input #box (keyup)="0">
```

### Lifecycle hooks
A component has a lifecyclew managed by angular. Angular creates it, renders it, cerates and renders its children, checks it when its data-bound properties change, and destroy it before removing from the DOM. Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.

Lifecycle hooks.

| Lifecycle               | Description                                                                           |
| ----------------------- |:-------------------------------------------------------------------------------------:|
| ngOnChanges()           | Respond when angular (re)sets data-bound input properties.                            |
| ngOnInit()              | Initilaize the component after Angular first displays the data-bound properties.      |
| ngDoCheck()             | Detect and act upon changes that Angular can't or won't detect on its own.            |
| ngAfterContentInit()    | Respond after Angular projects extenal content into component's view.                 |
| ngAfterContentChecked() | Respond after Angular checks the external content into the component's view.          |
| ngAfterViewInit()       | Respond after Angular initializes the component's views and child views.              |
| ngAfterViewChecked()    | Respond after Angular checks the component's views and the child views.               |
| ngOnDestroy()           | Cleanupust before Angular destroys the directive/component.                           |
  
### Component Interaction

#### Pass data from parent to child with input binding

```
export class HeroChildComponent {
  @Input() hero: Hero;
  @Input('master') masterName: string;
}
```

#### Intercept input property changes with a setter.
Use an input property setter to intercept and act upon a value from the parent. The setter of the `name` property in the child trims the whitespace from a name and replaces an empty value with default text.

```
private _name = '';

@Input()
set name(name: string) {
 this._name = (name && name.trim()) || '<no name set>';
}
 ```

 #### Intercept input property changes with ngOnChanges()
 Detect and act upon changes to input rt values with the `ngOnChanges` method. you may prefer this approach to the property setter when watching multiple, interacting input properties. 

```
@Input() major: number;
@Input() minor: number;
changeLog: string[] = [];

ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  let log: string[] = [];
  for (let propName in changes) {
    let changedProp = changes[propName];
    let to = JSON.stringify(changedProp.currentValue);
    if (changedProp.isFirstChange()) {
      log.push(`Initial value of ${propName} set to ${to}`);
    } else {
      let from = JSON.stringify(changedProp.previousValue);
      log.push(`${propName} changed from ${from} to ${to}`);
    }
  }
  this.changeLog.push(log.join(', '));
  }
```

#### Parent listens to the child
The child component exposes an EventEmitter poperty with which it emits events when something happends. The parent binds to that event property and react to those events. The child EventEmitter property is an *Output* property.

```
@Input()  name: string;
@Output() voted = new EventEmitter<boolean>();
didVote = false;
 
vote(agreed: boolean) {
  this.voted.emit(agreed);
  this.didVote = true;
}
```

#### Parent interactive with local variable
A Parent component cannot use data binding to read child properties or to invoke child methods. You can do this by creating a template reference variable for that child and then reference that varaible within the parent tempalte.

```
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownLocalVarParentComponent { }
```
The parent component cannot data bind to the child's start and stop methods nor to its seconds property. You can place a local variable, `#timer`, on the child componhent tag and that gives you a reference to the child component and the ability to access any of its properties or methods.

#### Parent calls an `@ViewChild()`
The local variable approach is simple and easy, but its limited because the parent and child wiring must be done within the parent tempalte. The parent component itself has no access to the child. *You can't use the local variable technique if an instance of the parent component class must read or write child component values or must call child component methods*.
When the parent component class required that kind of access, inject the child component into the parent as a `ViewChild`.

```
@Component({
  selector: 'app-countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
```

```
@ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;
 
  seconds() { return 0; }
 
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
 
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
  ```

  ### Component Styles
  Angular applciations are styled with standard CSS. That means you can apply everything you know about CSS stylesheets, selectors, rules, and media queries directly to Angular applciations. The Styles specified in the `@Component` metadata apply only within the template of that component. They are not inherited by any components nested within the template nor by any content projected into the component. Class names and selectors are local to the component and don't collide with classes and selectors used elsewhere in the applciation.

  #### Special selectors
  Component styles have a few special selectors from the world of shadow DOM style scoping.

  **:host**: Use thus pseudo-class selector to target styles in the element that hosts in  the component, as opposed to targeting elements inside the component's template. You can't reach the host element from inside the component with other selectors because its not the part of the component's own template. The host element is in a parent component's template. Use the function form to apply host styles conditionally by including another selector inside parenthesis after `:host`.

```
:host(.active) {
  border-width: 3px;
}

```
**host-context**: Sometimes its useful to apply styles based on some condition outside of a component's view.  for eg, a CSS theme class could be applied to the document `<body>` element, and you want to change how your component looks based on that. Use this pseudo class selector, which works just like the function form of `:host()`.

**::ng-deep**: Use this shadoe-piercing descendant combinator to forc e a style down through the child component tree into all the child component views. The `deep` combinator works to any depth of nested components, and it applies to both the view children and content children of the component. Use `::ng-deep` only with emulated view encapsulation, Emulated is the default and most commonly used view encapsulation.

### Angular Elements
Angular elements are angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way. *Custom Elements* are a web platform feature currently supported by chrome, firefox, opera, and safari and available in other browsers through polyfills. A custom element extends HTML by allowing you to define a tag whose content is created and controlled by Javascript code. The browser maintains a `CustomRegistryElement` of defined custom elements, which maps an instantiable JavaScript class to an HTML tag.

Custom elements bootstraps themselves - they start automatically when they are added to the DOM, and are automatically destroyed when removed from the DOM. Once a custom element is added to the DOM for any page, it looks and behaves like any other HTML element. Transforming a component to a custom element provides an easy path to creating dynamic HTML content in your Angular app. HTML content that you add directly to the DOM in an Angular app is normally displayed without angular processing, unless you define a *dynamic component*, adding you own code to connect the HTML tag to your app data, and participate in change detection.

Use the *createCustomElement()* function to convert a component into a class that can be registered with a browser as a custom element. After you register your configured class with the browser's custom-element registry, you can use the new elememt just like a built-in HTML element in content that you add directly into the DOM. When your custom element is placed on apage, the browser creates an instance of the registered class and adds it to the DOM. The content is provided by the component's template, which uses Angular template syntax, and is rendered using the component and the dOM data. Input properties in the component correspond to input attributes for the element.

#### Transforming components to custom elements.
Angular provides the `createCustomElement()` function for converting an Angular component, together with its dependencies, to a custom element. The function collects the component's observable properties along with the Angular functionality the browser needs to create and destroy instances, and to detect and respond to changes.

#### Mapping
A custom element hosts an Angular component, providing a bridge between the data and logic defined in the component and standard DOM APIs. Component properties and logic maps directly into HTML attributes and the browser's event system.


### Dynamic Components

#### Dynamic Component Loader
Component templates are not always fixed. An application may need to load new components at runtime. 

### Attribute Directives
An attribute directive changes the appearance or behavior of a DOM element.

There are 3 kinds of directives:-
  1. Components - directives with a template.
  2. Structural directives - change the DOM layout by adding and removing DOM elements. eg. *NgIf*, *NgFor*
  3. Attribute directives - change the appearance or behavior of an element, component, or another directive. eg. *NgStyle*

### Pipes
Every application starts out with what seems like a simpler task: get data, transform them and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a webSocket. Once data arrives, you could push their raw tostring values directly to the view, but that rarely makes a good user experience. Angular pipes are a way to write display-value transformations that you can decalre in your HTML.

```
The chained hero's birthday is
{{ birthday | date | uppercase}}
```

#### Pipes and ChangeDetection
Angular looks for changes to data-bound values through a change-detection process that runs after every DOM event.

### Forms
Angular provides two different approaches to handling user input through forms: reactive and template-driven. Reactive and template-driven forms process and manage form differently.

**Reactive Forms**: They are more robust. More Scalable, reusable and testable. 
**Template Forms**: They are useful for adding a simple form to an app, such as an email list. They are easy to add, but they don't scale as well as reactive forms.