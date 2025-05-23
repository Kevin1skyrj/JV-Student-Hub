
import main_menu_data from "@/data/header-menu/main-menu-data";
import Link from "next/link";

const CommonHeaderMainMenu = () => {
  return (
    <>
      <ul>
        {main_menu_data.map((item) => (
          <li key={item.id}>
            <Link href={item?.link} className="nav-link">
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommonHeaderMainMenu;

