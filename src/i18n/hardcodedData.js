export default function navbarPack() {
    return {
        en: {
            navLinks: [
                "Museums",
                "Visit",
                "Exhibitions",
                "Events",
                "education",
                "collections",
                "research",
                "support",
            ],
            bannerText: "Visit us now!",
            bookTickets: "Book Tickets",
            workingHoursText: "Open today from 9:00AM to 6:00PM",
            moreLinkText: "see more of",
            sections: [
                {
                    title: "Exhibitions and events",
                    url: "exh",
                    mode: "light",
                    sectionType: "carousel",
                    cardType: "withDescription",
                },
                {
                    title: "Visit the museum",
                    url: "exh",
                    mode: "dark",
                    sectionType: "carousel",
                    cardType: "withoutDescription",
                },
                {
                    title: "Exhibits",
                    url: "exh",
                    mode: "light",
                    sectionType: "masonry",
                },
                {
                    title: "POPULAR NEWS",
                    url: "exh",
                    mode: "dark",
                    sectionType: "carousel",
                    cardType: "withDescription",
                },
            ],
            footer: {
                columns: [
                    {
                        title: "About Us",
                        links: [
                            { text: "Our Vision", url: "x" },
                            { text: "Museums", url: "x" },
                            { text: "Visitor Rules", url: "x" },
                            { text: "Ticket Pricing", url: "x" },
                            { text: "News", url: "x" },
                        ],
                    },
                    {
                        title: "Contact",
                        links: [
                            { text: "FAQ", url: "x" },
                            { text: "Contact Us", url: "x" },
                            { text: "Jobs", url: "x" },
                        ],
                    },
                ],
            },
            testPost: {
                title: "German painters in Georgia",
                description:
                    "The temporary exhibition space of the Bolnisi New Museum hosts an exhibition of German artists working in Georgia in the 19th-20th centuries. Paintings and graphic images of the artists represented in the museum - Paul von Franken, Helene Kueber-Franken, Richard Sommer, Theodor Horschelt, Oskar Schmerling, Alexander Salzman, Boris Fogel, Irina Stenberg - are one of the most interesting parts of the most important collection of German masters kept in the Shalva Amiranashvili Art Museum.",
                moreText: "Show More",
                url: "",
            },
        },

        ka: {
            navLinks: [
                "მუზეუმები",
                "სტუმრობა",
                "გამოფენები",
                "ღონისძიებები",
                "განათლება",
                "კოლექცია",
                "კვლევები",
                "მხარდაჭერა",
            ],
            bannerText: "გვესტუმრეთ ახლავე!",
            bookTickets: "ბილეთის დაჯავშნა",
            workingHoursText:
                "ღიაა დღეს დილის 9:00 საათიდან, საღამოს 6:00 საათამდე",
            moreLinkText: "ნახეთ მეტი",
            sections: [
                {
                    title: "გამოფენები და ღონისძიებები",
                    url: "exh",
                    mode: "light",
                    sectionType: "carousel",
                    cardType: "withDescription",
                },
                {
                    title: "ეწვიეთ მუზეუმს",
                    url: "exh",
                    mode: "dark",
                    sectionType: "carousel",
                    cardType: "withoutDescription",
                },
                {
                    title: "ექსპონატები",
                    url: "exh",
                    mode: "light",
                    sectionType: "masonry",
                },
                {
                    title: "სიახლეები",
                    url: "exh",
                    mode: "dark",
                    sectionType: "carousel",
                    cardType: "withDescription",
                },
            ],
            footer: {
                columns: [
                    {
                        title: "ჩვენ შესახებ",
                        links: [
                            { text: "ჩვენი ხედვა", url: "x" },
                            { text: "მუზეუმები", url: "x" },
                            { text: "წესები", url: "x" },
                            { text: "ბილეთის ფასები", url: "x" },
                            { text: "სიახლეები", url: "x" },
                        ],
                    },
                    {
                        title: "კონტაქტი",
                        links: [
                            { text: "ხშირად დასმული შეკთხვები", url: "x" },
                            { text: "დაგვიკავშირდით", url: "x" },
                            { text: "კარიერა", url: "x" },
                        ],
                    },
                ],
            },
            testPost: {
                title: "გერმანელი მხატვრების მოღვაწეობა საქართველოში",
                description:
                    "ბოლნისის ახალი მუზეუმის დროებითი საგამოფენო სივრცე XIX-XX საუკუნეებში საქართველოში მოღვაწე გერმანელი მხატვრების გამოფენას მასპინძლობს. მუზეუმში წარმოდგენილი მხატვრების - პაულ ფონ ფრანკენის, ჰელენე კიუბერ-ფრანკენის, რიჰარდ ზომერის, თეოდორ ჰორშელტის, ოსკარ შმერლინგის, ალექსანდრე ზალცმანის, ბორის ფოგელის, ირინა შტენბერგის - ფერწერული და გრაფიკული სურათები შალვა ამირანაშვილის სახელობის ხელოვნების მუზეუმში დაცული გერმანელი ოსტატების უმნიშვნელოვანესი კოლექციის ერთი საინტერესო ნაწილია.",
                moreText: "მეტის ნახვა",
                url: "",
            },
        },
    };
}
