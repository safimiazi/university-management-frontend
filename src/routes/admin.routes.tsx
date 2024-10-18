import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths =[
    {
        name:'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard/>
    },
    {
        name: "User Management",
        children: [
            {
                name:'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty/>
            },
            {
                name:'Create Student',
                path: 'create-student',
                element: <CreateStudent/>
            },
          
        ]
    }
]



interface adminRoute {
    path: string;
    element: JSX.Element;
    children?: adminRoute[];
    key?: string;
    label?: JSX.Element;
}


export const adminRoutes = adminPaths?.reduce((acc: adminRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        });
    }

    if (item.children) {
        item.children.forEach((child: adminRoute) => {
            acc.push({
                path: child.path,
                element: child.element
            });
        });
    }

    return acc;
}, [] as adminRoute[]);

interface TSidebarItem {
    key: string;
    label: JSX.Element | string;
    children?: TSidebarItem[];
}

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[], item) => {

    if (item.path && item.element) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }
    if(item.children){
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>

            }))
        })
    }

return acc;
},[] )

