import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import AdminMenu from "./AdminMenu";

async function Auth() {
  const user = await currentUser();
  console.log(user);
  const isAdmin = user?.privateMetadata?.isAdmin;
  return (
    <div>
      <SignedIn>
        {isAdmin ? (
          <AdminMenu />
        ) : (
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverCard:
                  "bg-white shadow-lg rounded-xl border border-gray-200",
                userButtonPopoverFooter: "hidden", // hides the "Powered by Clerk" footer
                userButtonAvatarBox: "ring-2 ring-indigo-500", // adds ring to avatar
                userButtonPopoverActionButton:
                  "text-sm hover:bg-gray-100 text-gray-800",
              },
            }}
          />
        )}
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default Auth;
