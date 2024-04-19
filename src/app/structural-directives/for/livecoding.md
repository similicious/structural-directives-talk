# Live coding

## Basic directive

1. Scaffold directive using `ng g d structural-directives/for/for`
1. Restrict selector to `ng-template[appFor]`
1. Inject `TemplateRef<unknown>` and `ViewContainerRef`
1. Add `items` input as `unknown[]`
1. Implement `OnInit` and `ngOnInit`
1. Loop over items and render template (not yet explaining the context)
1. Apply directive in template using `<ng-template>` syntax
1. Show empty `<li>` elements in DOM
1. Introduce context (not yet explaining `$implicit`)
1. Use `let-` syntax to declare a template variable
1. Add properties `index`, `first` and `last` to context
1. Declare the new properties as template variables and use them by copying the references template
1. Alias the input to `appFor` and refactor usage
1. Introduce `$implicit` and refactor usage

## Star syntax

1. Introduce star-syntax
   1. `*` invokes a structural directive
   1. `:prefix` corresponds to the selector of the structural directive
   1. Then you must have on of either:
      1. `:let` exports a context property to the template
      1. `:expression` binds to a directive input, but not just any, the name of the input must match the prefix (explain example of `ngIf`)
   1. Optional `";"` or `"",` characters
   1. Then you can have none or many of
   1. `:let` exports a context property to the template
   1. `:as` does the same, but the other way around
   1. `:keyExp` binds to an input which is prefixed with the selector name (e.g `ngForOf`)
1. Explain a typical usage of `ngFor` in `<ng-template>` syntax
   1. `ngFor` is the directives selector (prefix)
   1. `[ngForOf]="users"` binds the directives input to the users array
   1. `let-*` export context variables
1. Transform `ngFor` usage to star syntax
   1. Star-sytnax is invoked with a `*`
   1. `ngFor` is the prefix (selector) of the directive
   1. `let user` is a let declaration refering to the `$implicit` context property from the directive
   1. `of users` is a key expression, binding to the `ngForOf` input of the directive, the prefix must be left out
   1. `let * = *` expressions export the named context properties to the template
   1. `as` is the same thing, but it's called an alias: first is the export name, and then the local name
1. Apply the star sytnax to our implementation, only adding the `$implicit` export
1. Alias input `appFor` to `appForOf`
1. Bind to `appForOf` input in template
1. Add `let-*` expressions

## Typing the context

1. Showcase the problem - type errors are not caught at build time
1. Add interface `AppForContext`
1. Declare type parameter `TItem` on interface
1. Implement properties of interface, use `TItem`
1. Declare type parameter `TItem` on directive
1. Use type paramater for `items` input
1. Use interface to type the `TemplateRef` context
1. Add magic type guard function to context:

```typescript
  static ngTemplateContextGuard<TItem>(
    directive: ForDirective<TItem>,
    context: unknown
  ): context is AppForContext<TItem> {
    return true;
  }
```
