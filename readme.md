# Form validation engine

Framework agnostic form validation tools.

## Building blocks

### Assertion library

These are simple predicate functions. All must return an Either 
monad.

```
isEqual(1, 2) // Left({value: 'NOT_EQUAL'})
isEqual(1, 1) // Right({value: 1})
```

### Business Validation Rules

Use and combine your predicate functions to build your business rules.

```
const validationRules = (state) => ({
    username() => {
        return isNotEmpty(state.username)
        .chain(username => isLongEnough(username, 5))
    },
    password() => {
        return isNotEmpty(state.password);
    }
  }) 
}
```

### Collect Errors

Returns a map of validation errors.

```
const formData = {username: 'johnDoe', password: ''};
const errors = collectErrors(validationRules(formData));
// {password: 'IS_EMPTY'}
```
