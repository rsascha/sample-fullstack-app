# Development with Storybook

## Using Mocks

1. Assume you are using a hook like this:

   ```ts
   import { useAuth0 } from "@auth0/auth0-react";

   export function Login() {
     const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
       useAuth0();
     // ...
   }
   ```

1. Create a Mock like this: [`mocks/auth0-react.ts`](./mocks/auth0-react.ts)
1. Map the Module name `"@auth0/auth0-react"` to your Mock for Storybook in `.storybook/main.ts`:

   ```ts
   "@auth0/auth0-react": path.resolve(
       __dirname,
       "mocks",
       "auth0-react.ts"
   ),
   ```

1. The `import` statement in your component:
   ```ts
   import { useAuth0 } from "@auth0/auth0-react"`
   ```
   will use the Mock now.
1. In your story you can modify the Mock:
   ```ts
   import { useAuth0 } from "@auth0/auth0-react";
   // ...
   export const Loading: Story = {
     async beforeEach() {
       (useAuth0 as Mock).mockReturnValue({
         ...useAuth0,
         isLoading: true,
       });
     },
     args: {},
   };
   ```
