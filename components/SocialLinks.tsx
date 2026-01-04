import Link from "next/link";

export default function SocialLinks() {
    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/ctrlxharsh",
            icon: "https://simpleicons.org/icons/github.svg",
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/ctrlxharsh", // Assuming this, user can update
            icon: "https://simpleicons.org/icons/linkedin.svg",
        },
        {
            name: "X (Twitter)",
            href: "https://x.com/ctrlxharsh", // Assuming this, user can update
            icon: "https://simpleicons.org/icons/x.svg",
        },
        {
            name: "Email",
            href: "mailto:harsh@example.com", // Placeholder
            icon: "https://simpleicons.org/icons/gmail.svg",
        },
    ];

    return (
        <div className="flex items-center gap-4">
            {socials.map((social) => (
                <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
                    aria-label={social.name}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
                    />
                </Link>
            ))}
        </div>
    );
}
