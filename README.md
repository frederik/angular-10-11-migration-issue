# Issues migrating from Angular 10 to 11

## Test setup

The repository contains an angular app (created with the CLI) at version 10 to trigger migration.
The shared directory includes file that is used in app.component.ts to set the title.

Running the app shows the title in the UI (i.e. the import works)

## Behavior with ng update

Triggering the migration (of cli/core or others)

```
cd angular
ng update @angular/cli
```

fails with the message

```
▸ ViewEncapsulation.Native has been removed as of Angular version 11.
  This migration replaces any usages with ViewEncapsulation.ShadowDom.
✖ Migration failed: Path "/../shared/index.ts" is invalid.
  See "/tmp/ng-Ci4aHk/angular-errors.log" for further details.
```

## Expected behavior

The migration does not invalidate paths outside of the Angular repository
