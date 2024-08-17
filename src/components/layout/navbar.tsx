import Image from "next/image";
import Link from "next/link";
import { Logo } from "../icons/logo";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";
interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar = ({ isLoggedIn }: NavbarProps) => {
  return (
    <div className="bg-primary">
      <div className="flex max-w-8xl max-auto p-8 items-center justify-between">
        <div>
          <Link href="/">
            <Logo className="w-32 md:w-48" />
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
