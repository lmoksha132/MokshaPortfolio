import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    url: string;
}

export const CertificateDialog = ({
    isOpen,
    onOpenChange,
    title,
    url,
}: CertificateDialogProps) => {
    const [isLoading, setIsLoading] = useState(true);

    // Transform Google Drive links for previewing
    const getPreviewUrl = (url: string) => {
        if (url.includes('drive.google.com')) {
            return url.replace(/\/view.*$/, '/preview');
        }
        return url;
    };

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl w-[95vw] h-[80vh] flex flex-col p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20">
                <DialogHeader className="p-6 border-b border-primary/10 flex-shrink-0">
                    <div className="flex items-center justify-between gap-4">
                        <DialogTitle className="font-display text-xl md:text-2xl font-bold truncate">
                            {title}
                        </DialogTitle>
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary shrink-0">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Original Link
                            </a>
                        </Button>
                    </div>
                </DialogHeader>

                <div className="flex-1 relative bg-muted/30">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                                <p className="text-sm text-muted-foreground animate-pulse">Loading Certificate...</p>
                            </div>
                        </div>
                    )}
                    <iframe
                        src={getPreviewUrl(url)}
                        className="w-full h-full border-0"
                        onLoad={() => setIsLoading(false)}
                        allow="autoplay"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
