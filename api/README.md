# Fix type errors in jwtValidate.ts file

## Error in types:

```
Type 'undefined' is not assignable to type 'Secret | GetPublicKeyOrSecret'.ts(2769)

```

To fix this error we can use type Assertions: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

```
const secretKey = process.env.JWT_SEED as string;
const payload = jwt.verify(token, secretKey) as JwtPayload;

```

## Error in types of Request:

```
Property 'uid' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.

```

To fix this error we need to add an extra configuration, follow the next steps:

1. First step:

```
A. Into src folder create another folder called types.
B. Then into types create a folder called express.
C. Then into express create a file called index.d.ts
D. Finally into index.d.ts set the code below:

import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      uid?: string;
      name: string;
    }
  }
}

```

2. Second step:

```
A. Into tsconfig.json into "typeRoots": [] option set the code below into array:

"./src/types", "./node_modules/@types"

```
