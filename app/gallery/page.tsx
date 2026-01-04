import { events } from "@/data/events";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
    // Extract images from events
    const galleryImages = events.flatMap(event =>
        event.images.map(img => ({
            src: img,
            alt: event.title
        }))
    );

    return (
        <div className="min-h-screen pt-24 px-6 max-w-6xl mx-auto pb-20">
            <div className="mb-12">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Gallery
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Snapshots from hackathons, workshops, and events.
                </p>
            </div>

            <GalleryGrid images={galleryImages} />
        </div>
    );
}
