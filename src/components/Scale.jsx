import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  BadgeDollarSign,
  BadgeDollarSignIcon,
  HandshakeIcon,
  SchoolIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ScaleSection = () => {
  return (
    <section
      id="scale"
      className="py-20 px-6 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto"
    >
      <h2 className="text-lg font-bold md:text-3xl text-transparent bg-gradient-to-r from-primary to-secondary flex items-center bg-clip-text justify-center text-center mb-2 tracking-wider p-10">
        What We Need to Scale
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-muted/50 dark:bg-card border-none shadow-lg">
          <CardContent className="p-8 text-primary">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <BadgeDollarSignIcon />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Funding & Grants
            </h3>
            <p className="text-center text-primary/80">
              Sponsor cohorts and expand training hubs across Africa.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 dark:bg-card border-none shadow-lg">
          <CardContent className="p-8 text-primary">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <HandshakeIcon />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Corporate Partnerships
            </h3>
            <p className=" text-center text-primary/80">
              Offer AI‑integrated internships and real‑world project briefs.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 dark:bg-card border-none shadow-lg">
          <CardContent className="p-8 text-primary">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <SchoolIcon />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Academic & Tech Allies
            </h3>
            <p className="text-center text-primary/80">
              Co‑create curricula and share cutting‑edge research.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-primary to-secondary border-none shadow-lg">
        <CardContent className="p-8 text-center">
          <p className="text-white text-lg mb-4 font-medium">
            AI isn't the problem—the lack of AI skills is.
          </p>
          <p className="text-white/90 text-base">
            Help us equip Africa's youth to thrive in an AI‑driven world and
            close the skills gap for good.
          </p>
        </CardContent>
        <div className="flex justify-center mb-4">
          <Link href="https://google.com">
            <Button className="px-10 bg-card text-primary hover:bg-muted cursor-pointer">
              Learn More
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default ScaleSection;
