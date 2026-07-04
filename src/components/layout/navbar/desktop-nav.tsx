import { navigation } from "@/data/navigation";
import { NavItem } from "./nav-item";

export function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {navigation.map((item) => (
          <li key={item.href}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}