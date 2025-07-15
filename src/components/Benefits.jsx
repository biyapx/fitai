"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  BrainCog,
  IdCardLanyard,
  SquaresIntersect,
  Factory,
  GlobeLock,
  Users,
} from "lucide-react";
import Image from "next/image";

const iconMap = {
  BrainCog,
  IdCardLanyard,
  SquaresIntersect,
  Factory,
  Factory,
  Factory,
};

const valuesList = [
  {
    id: 1,
    icon: "BrainCog",
    title: "Innovation",
    description: "Converts theoretical graduates into job‑ready professionals.",
  },
  {
    id: 2,
    icon: "IdCardLanyard",
    title: "Employability ",
    description: "Converts theoretical graduates into job‑ready professionals.",
  },
  {
    id: 3,
    icon: "SquaresIntersect",
    title: "Inclusive Progress",
    description:
      "Reduces displacement fears by showing AI can augment every role.",
  },
  {
    id: 4,
    icon: "Factory",
    title: "Business Growth",
    description: "We provide reliable and precise insights into your health.",
  },
];
const missionAndVisionList = [
  {
    image: "https://github.com/shadcn.png",
    name: "Vision",
    description:
      "To empower women worldwide with innovative, accurate, and personalized tools for managing their reproductive health and overall well-being.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mission",
    description:
      "To develop a period-tracking mobile app that provides user-friendly services, science-backed sexual and reproductive health education, culturally inclusive solutions, and access to medical counseling.",
  },
];
export const BenefitsSection = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto justify-start"
    >
<<<<<<< HEAD
      <h2 className="text-lg font-bold md:text-3xl text-primary text-center mb-2 tracking-wider p-10">
=======
      <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-primary to-secondary flex items-center justify-center bg-clip-text md:text-3xl text-center mb-2 tracking-wider p-10">
>>>>>>> origin/main
        Why This Matters To Africa
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {valuesList.map(({ id, icon, title, description }) => {
          const IconComponent = iconMap[icon];
          return (
            <div key={id}>
              <Card className="h-full bg-background border-0 shadow-none p-6">
                <CardHeader className="flex flex-col gap-4 justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10">
                    {IconComponent && (
                      <IconComponent size={32} className="text-primary" />
                    )}
                  </div>
<<<<<<< HEAD
                  <CardTitle>{title}</CardTitle>
=======
                  <CardTitle className="text-primary">{title}</CardTitle>
>>>>>>> origin/main
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">
                  {description}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
