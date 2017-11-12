# Form validation engine

Framework agnostic, based on Folktale JS library. 

## Building blocks

### Assertion library

These are generic assertions functions.

```
isEqual(1, 2) // Result.Error({value: 'NOT_EQUAL'})
isEqual(1, 1) // Result.Ok({value: 1})
```

### Business Validation Rules

These are your custom validation rules

```
const validationRules = (state) => ({
    username() => {
    return isEqual(state.username)
    .chain(username => isLongEnough(username, 12));
    },
    password() => {
      return isNotEmpty(state.password);
    }
  }) 
}
```

### Collect Errors

Returns validation errors.

```
const formData = {username: 'johnDoe', password: 'aaa'};
const errors = collectErrors(validationRules(formData));
```
