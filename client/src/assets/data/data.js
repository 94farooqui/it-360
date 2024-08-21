export const sidebar = [

    { navItem: "Home", navIcon: "", navLink: "/" },
    { navItem: "Tickets", navIcon: "", navLink: "/tickets" },
    { navItem: "Vendors", navIcon: "", navLink: "/vendors" },
    { navItem: "Assets", navIcon: "", navLink: "/assets" },
    { navItem: "Users", navIcon: "", navLink: "/users" },
    { navItem: "Knowledge", navIcon: "", navLink: "/kb" },
]




export const sampleTickets = [
    {
        title: "Printer Malfunction",
        description: "The office printer is not printing any documents.",
        asset: {
            name: "Office Printer",
            assetType: "Printer",
            assetSerial: "PR123456",
            description: "HP LaserJet Pro MFP",
            assetVendor: {
                name: "HP",
                logoImage: "hp-logo.png",
                email: "support@hp.com",
                contact_number: "+1-800-HP-INFO"
            }
        },
        assignee: {
            fullname: "John Doe",
            email: "john.doe@example.com"
        },
        comments: [
            {
                author: { fullname: "Jane Smith", email: "jane.smith@example.com" },
                content: "Checked the printer. Seems to be a connectivity issue."
            },
            {
                author: { fullname: "John Doe", email: "john.doe@example.com" },
                content: "Will try reconnecting the printer to the network."
            }
        ]
    },
    {
        title: "Laptop Battery Replacement",
        description: "The battery of the laptop is not holding charge.",
        asset: {
            name: "Laptop",
            assetType: "Computer",
            assetSerial: "LT789012",
            description: "Dell XPS 13",
            assetVendor: {
                name: "Dell",
                logoImage: "dell-logo.png",
                email: "support@dell.com",
                contact_number: "+1-800-624-9896"
            }
        },
        assignee: {
            fullname: "Emily Johnson",
            email: "emily.johnson@example.com"
        },
        comments: [
            {
                author: { fullname: "Michael Brown", email: "michael.brown@example.com" },
                content: "Battery replacement approved. Will schedule a technician visit."
            }
        ]
    },
    {
        title: "Software Installation",
        description: "Need to install Adobe Photoshop on the new workstation.",
        asset: {
            name: "Workstation",
            assetType: "Computer",
            assetSerial: "WS345678",
            description: "Custom-built workstation",
            assetVendor: {
                name: "Custom",
                logoImage: "custom-logo.png",
                email: "support@custom.com",
                contact_number: "+1-800-555-5555"
            }
        },
        assignee: {
            fullname: "Alice Williams",
            email: "alice.williams@example.com"
        },
        comments: [
            {
                author: { fullname: "Sam Lee", email: "sam.lee@example.com" },
                content: "Adobe Photoshop installation is in progress."
            }
        ]
    },
    {
        title: "Network Outage",
        description: "The office network is down.",
        asset: {
            name: "Network",
            assetType: "Infrastructure",
            assetSerial: "NET987654",
            description: "Main office network",
            assetVendor: {
                name: "Cisco",
                logoImage: "cisco-logo.png",
                email: "support@cisco.com",
                contact_number: "+1-800-553-6387"
            }
        },
        assignee: {
            fullname: "Tom Green",
            email: "tom.green@example.com"
        },
        comments: [
            {
                author: { fullname: "Sara Davis", email: "sara.davis@example.com" },
                content: "Technician is on-site to resolve the issue."
            }
        ]
    },
    {
        title: "Phone Line Issue",
        description: "The phone line is not working.",
        asset: {
            name: "Phone",
            assetType: "Telecom",
            assetSerial: "PH456789",
            description: "VoIP Phone",
            assetVendor: {
                name: "Avaya",
                logoImage: "avaya-logo.png",
                email: "support@avaya.com",
                contact_number: "+1-800-828-8368"
            }
        },
        assignee: {
            fullname: "Chris Martin",
            email: "chris.martin@example.com"
        },
        comments: [
            {
                author: { fullname: "Laura White", email: "laura.white@example.com" },
                content: "Issue escalated to telecom provider."
            }
        ]
    },
    {
        title: "Software Bug Report",
        description: "Bug in the accounting software causing crashes.",
        asset: {
            name: "Accounting Software",
            assetType: "Software",
            assetSerial: "SW123789",
            description: "Version 5.2.1",
            assetVendor: {
                name: "Intuit",
                logoImage: "intuit-logo.png",
                email: "support@intuit.com",
                contact_number: "+1-800-555-1234"
            }
        },
        assignee: {
            fullname: "Sophie Clark",
            email: "sophie.clark@example.com"
        },
        comments: [
            {
                author: { fullname: "Dave Harris", email: "dave.harris@example.com" },
                content: "Reported issue to the software vendor for a fix."
            }
        ]
    },
    {
        title: "Monitor Flickering",
        description: "The monitor is flickering intermittently.",
        asset: {
            name: "Monitor",
            assetType: "Display",
            assetSerial: "MO345678",
            description: "LG 27-inch",
            assetVendor: {
                name: "LG",
                logoImage: "lg-logo.png",
                email: "support@lg.com",
                contact_number: "+1-800-243-0000"
            }
        },
        assignee: {
            fullname: "Jordan Carter",
            email: "jordan.carter@example.com"
        },
        comments: [
            {
                author: { fullname: "Olivia Young", email: "olivia.young@example.com" },
                content: "Adjusting monitor settings to see if issue persists."
            }
        ]
    },
    {
        title: "Keyboard Replacement",
        description: "The keyboard has several unresponsive keys.",
        asset: {
            name: "Keyboard",
            assetType: "Input Device",
            assetSerial: "KB567890",
            description: "Mechanical Keyboard",
            assetVendor: {
                name: "Razer",
                logoImage: "razer-logo.png",
                email: "support@razer.com",
                contact_number: "+1-800-123-4567"
            }
        },
        assignee: {
            fullname: "Liam Scott",
            email: "liam.scott@example.com"
        },
        comments: [
            {
                author: { fullname: "Emily Taylor", email: "emily.taylor@example.com" },
                content: "Replacement keyboard ordered."
            }
        ]
    },
    {
        title: "Server Downtime",
        description: "Company server is experiencing downtime.",
        asset: {
            name: "Server",
            assetType: "Server",
            assetSerial: "SR987654",
            description: "Dell PowerEdge R740",
            assetVendor: {
                name: "Dell",
                logoImage: "dell-logo.png",
                email: "support@dell.com",
                contact_number: "+1-800-624-9896"
            }
        },
        assignee: {
            fullname: "Noah Lewis",
            email: "noah.lewis@example.com"
        },
        comments: [
            {
                author: { fullname: "Mia Anderson", email: "mia.anderson@example.com" },
                content: "Server team notified and working on a resolution."
            }
        ]
    },
    {
        title: "Access Rights Request",
        description: "Need additional access rights to the project management tool.",
        asset: {
            name: "Project Management Tool",
            assetType: "Software",
            assetSerial: "PM123456",
            description: "Tool for project tracking",
            assetVendor: {
                name: "Atlassian",
                logoImage: "atlassian-logo.png",
                email: "support@atlassian.com",
                contact_number: "+1-800-123-4567"
            }
        },
        assignee: {
            fullname: "Grace Thompson",
            email: "grace.thompson@example.com"
        },
        comments: [
            {
                author: { fullname: "Ethan King", email: "ethan.king@example.com" },
                content: "Request approved. Access rights updated."
            }
        ]
    },
    {
        title: "Email Configuration",
        description: "Need help configuring email on a new phone.",
        asset: {
            name: "Phone",
            assetType: "Mobile",
            assetSerial: "PH789012",
            description: "Samsung Galaxy S21",
            assetVendor: {
                name: "Samsung",
                logoImage: "samsung-logo.png",
                email: "support@samsung.com",
                contact_number: "+1-800-SAMSUNG"
            }
        },
        assignee: {
            fullname: "Daniel Robinson",
            email: "daniel.robinson@example.com"
        },
        comments: [
            {
                author: { fullname: "Sophia Martinez", email: "sophia.martinez@example.com" },
                content: "Email configuration instructions sent."
            }
        ]
    },
    {
        title: "Graphics Card Issue",
        description: "Graphics card is not rendering properly.",
        asset: {
            name: "Graphics Card",
            assetType: "Hardware",
            assetSerial: "GC345678",
            description: "NVIDIA GeForce RTX 3080",
            assetVendor: {
                name: "NVIDIA",
                logoImage: "nvidia-logo.png",
                email: "support@nvidia.com",
                contact_number: "+1-800-123-4567"
            }
        },
        assignee: {
            fullname: "Rachel Green",
            email: "rachel.green@example.com"
        },
        comments: [
            {
                author: { fullname: "Jack Taylor", email: "jack.taylor@example.com" },
                content: "Troubleshooting graphics card issue. Will check drivers and connections."
            }
        ]
    },
    {
        ticket_number: 12,
        title: "VPN Connection Failure",
        description: "Unable to connect to the company's VPN.",
        asset: {
            name: "VPN",
            assetType: "Service",
            assetSerial: "VPN234567",
            description: "Corporate VPN Service",
            assetVendor: {
                name: "NordVPN",
                logoImage: "nordvpn-logo.png",
                email: "support@nordvpn.com",
                contact_number: "+1-800-123-4567"
            }
        },
        assignee: {
            fullname: "Olivia Adams",
            email: "olivia.adams@example.com"
        },
        comments: [
            {
                author: { fullname: "Benjamin Harris", email: "benjamin.harris@example.com" },
                content: "Investigating VPN connection failure with IT support."
            }
        ]
    }
];
