import ReactPanZoom from '@/Customs/ImageViewer-Components';

interface ImageViewerProps {
    image_path?: string,
    filename?: string
}

export function ImageViewerContent(props: ImageViewerProps) {
    return (
        <div className="relative overflow-clip w-fit h-fit">
            <ReactPanZoom
                alt={props.filename ?? ""}
                image={props.image_path ?? ""}                
            />
        </div>
    )
}