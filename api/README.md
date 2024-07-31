# Fix type errors in jwtValidate.ts file

1. error type:

```
Type 'undefined' is not assignable to type 'Secret | GetPublicKeyOrSecret'.ts(2769)

```

To fix this error we can use type Assertions: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

```
const secretKey = process.env.JWT_SEED as string;
const payload = jwt.verify(token, secretKey) as JwtPayload;

```

2. error type:

```
Property 'uid' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.

```

To fix this error we need to add an extra configuration, follow the next steps:
