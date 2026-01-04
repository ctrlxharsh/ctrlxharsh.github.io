import Image from "next/image";

interface GalleryItem {
    id: string;
    description: string;
    image: string; // url
    span?: string; // col-span-2 etc.
}

// Mock data integration or passed props? 
// The prompt said "EVENTS DATA MODEL" -> "Gallery/page.tsx" 
// events have images. We can aggregate images from events?
// Or just show events as cards? 
// "Image grid using Next/Image"

export default function GalleryGrid({ images }: { images: { src: string, alt: string }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {images.map((img, idx) => (
                <div key={idx} className={`relative rounded-xl overflow-hidden group ${idx % 3 === 0 ? 'md:col-span-2' : ''} bg-neutral-100 dark:bg-neutral-800`}>
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                    {/* 
                  Since we used unoptimized images in config, standard 'img' tag works well too 
                  but we'll use Image with unoptimized prop implicit from config 
                */}
                    {/* <Image 
                    src={img.src} 
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs">
                        Image Placeholder
                    </div>
                </div>
            ))}
        </div>
    );
}
