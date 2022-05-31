module.exports = {


    getMenus(req) {

        let menus = [
            {
                text: "Tela Inicial",
                href: "/admin/",
                icon: "home",
                active: false,
            },
            {
                text: "Menu",
                href: "/admin/menus",
                icon: "cutlery",
                active: false,
            },
            {
                text: "Reservas",
                href: "/admin/reservations",
                icon: "calendar-check-o",
                active: false,
            },
            {
                text: "contatos",
                href: "/admin/contacts",
                icon: "comments",
                active: false,
            },
            {
                text: "Usuarios",
                href: "/admin/users",
                icon: "users",
                active: false,
            },
            {
                text: "E-mails",
                href: "/admin/emails",
                icon: "envelope",
                active: false,
            }
        ];

        menus.map(menu => {

            if (menu.href === `/admin${req.url}`) menu.active = true;
            console.log(req.url, menu.href);

        });

        return menus;

    }
}