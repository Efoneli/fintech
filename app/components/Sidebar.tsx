// 'use client';

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaHome, FaWallet, FaChartLine, FaList, FaCog, FaBell, FaUser } from "react-icons/fa";
// import { JSX } from "react";

// interface MenuItem {
//   id: string;
//   label: string;
//   icon: JSX.Element;
//   path: string;
// }

// const Sidebar: React.FC = () => {
//   const pathname = usePathname();

//   const menuItems: MenuItem[] = [
//     { id: "home", label: "Home", icon: <FaHome />, path: "/" },
//     { id: "savings", label: "Savings", icon: <FaWallet />, path: "/savings" },
//     { id: "investments", label: "Investments", icon: <FaChartLine />, path: "/investments" },
//     { id: "transactions", label: "Transactions", icon: <FaList />, path: "/transactions" },
//     { id: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
//   ];

//   return (
//     <div className="w-64 h-screen bg-gray-200 text-gray-700 p-4">
//       <h2 className="text-xl font-bold mb-6">Fintech App</h2>
//       <ul>
//         {menuItems.map((item) => (
//           <li key={item.id}>
//             <Link href={item.path} className={`flex items-center gap-3 p-3 cursor-pointer rounded ${pathname === item.path ? "bg-gray-300" : "hover:bg-gray-100"}`}>
//               {item.icon} {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };



// const Header: React.FC = () => {
//   return (
//     <div className="w-full bg-white text-gray-600 shadow-md p-4 flex justify-between items-center">
//       <h2 className="text-xl font-bold">Dashboard</h2>
//       <div className="flex items-center gap-4">
//         <FaBell className="text-gray-700 cursor-pointer" />
//         <Link href={'/settings'}>
//         <FaUser className="text-gray-700 cursor-pointer" />
//         </Link>
//       </div>
//     </div>
//   );
// };


// // const Header = () => {
// //   const { user, isLoading } = useUser();
// //   console.log(user, "this is the user");
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen((prevState) => !prevState);
// //   };

// //   function isString(value: string | null | undefined): value is string {
// //     return typeof value === "string";
// //   }
// //   return (
// //     <div>
// //       {" "}
// //       <header className="bg-pink-200 p-4 text-white">
// //         <div className="container mx-auto flex justify-between items-center">
// //           <Link href={"/"} className="text-xl font-semibold">
// //             MiniGit
// //           </Link>
// //           <div className="flex items-center">
// //             {user && (
// //               <div className="relative">
// //                 {user && (
// //                   <Image
// //                     src={isString(user?.picture) ? user?.picture : ""}
// //                     alt="User Avatar"
// //                     className="w-8 h-8 rounded-full cursor-pointer"
// //                     onClick={toggleDropdown}
// //                     width={40}
// //                     height={40}
// //                   />
// //                 )}
// //                 {isDropdownOpen && (
// //                   <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg">
// //                     <div className="px-4 py-2">
// //                       <p className="font-bold text-black">{user.name}</p>
// //                     </div>
// //                     <Link
// //                       href="/api/auth/logout"
// //                       className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-blue-100"
// //                     >
// //                       Logout
// //                     </Link>
// //                   </div>
// //                 )}
// //               </div>
// //             )}
// //             {!isLoading && !user && (
// //               <Link
// //                 href="/api/auth/login"
// //                 className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
// //               >
// //                 Login
// //               </Link>
// //             )}
// //           </div>
// //         </div>
// //       </header>
// //     </div>
// //   );
// // };

// const Footer: React.FC = () => {
//   return (
//     <div className="hr w-full bg-white text-gray-600 shadow-md p-4 flex justify-between items-center">
//       <div className="flex items-center justify-center gap-4">
//       <p>Terms</p>
//       <p>Privacy</p>
//       </div>
//     </div>
//   );
// };

// export default function Dashboard({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="flex-1 bg-white text-gray-900 p-6">{children}</div>
//         <Footer />
//       </div>
//     </div>
//   );
// }




'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome, FaWallet, FaChartLine, FaList, FaCog, FaBell, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { JSX } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: <FaHome />, path: "/" },
    { id: "savings", label: "Savings", icon: <FaWallet />, path: "/savings" },
    { id: "investments", label: "Investments", icon: <FaChartLine />, path: "/investments" },
    { id: "transactions", label: "Transactions", icon: <FaList />, path: "/transactions" },
    { id: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div
      className={`fixed md:relative top-0 left-0 w-64 h-screen bg-gray-200 text-gray-700 p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:translate-x-0`}
    >
      {/* Close Button for Mobile */}
      <button className="absolute top-4 right-4 md:hidden" onClick={toggleSidebar}>
        <FaTimes size={24} />
      </button>

      <h2 className="text-xl font-bold mb-6">Fintech App</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded ${
                pathname === item.path ? "bg-gray-300" : "hover:bg-gray-100"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <div className="w-full bg-white text-gray-600 shadow-md p-4 flex justify-between items-center">
      {/* Hamburger Menu Button */}
      <button className="md:hidden" onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>

      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-700 cursor-pointer" />
        <Link href={'/settings'}>
          <FaUser className="text-gray-700 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-600 shadow-md p-4 flex justify-center">
      <div className="flex items-center gap-4">
        <p>Terms</p>
        <p>Privacy</p>
      </div>
    </div>
  );
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 bg-white text-gray-900 p-6">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
