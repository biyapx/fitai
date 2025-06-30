import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FileText,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer" className="bottom-0 w-full pt-24 sm:pt-32">
      <div className="pt-10 bg-card/50 px-6 pb-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto">
          <div className="space-y-2">
            <div className="flex gap-2 justify-center items-center">
              <Image
                alt="logo"
                src="./logo.png"
                width="50"
                height="50"
                unoptimized
              />
              <div className="text-xl font-bold text-primary">FitAI</div>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@fitai.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +251 (910) 110-101
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FileText className="h-4 w-4" />
                <a
                  href="/articles"
                  className="hover:text-primary transition-colors"
                >
                  Articles
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-left space-y-3 py-4 md:py-0">
            <div>
              <div className="font-medium text-xl md:text-xl mb-2">
                Our Address
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Addis Ababa, Ethiopia
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Map className="h-4 w-4" />
                <a
                  href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
            <div className="flex gap-2 justify-start">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
