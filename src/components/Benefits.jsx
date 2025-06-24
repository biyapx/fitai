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
    icon: "BrainCog",
    title: "Innovation",
    description: "Converts theoretical graduates into job‑ready professionals.",
  },
  {
    icon: "IdCardLanyard",
    title: "Employability ",
    description: "Converts theoretical graduates into job‑ready professionals.",
  },
  {
    icon: "SquaresIntersect",
    title: "Inclusivity",
    description:
      "We cater to all women, embracing diversity and individuality.",
  },
  {
    icon: "Factory",
    title: "Business Growth",
    description: "We provide reliable and precise insights into your health.",
  },
  {
    icon: "Factory",
    title: "Business Growth",
    description:
      "We prioritize safeguarding your data and personal information.",
  },
  {
    icon: "Factory",
    title: "Business Growth",
    description:
      "We foster a supportive network for shared experiences and encouragement.",
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
      <h2 className="text-lg font-bold md:text-3xl text-primary text-center mb-2 tracking-wider p-10">
        Why This Matters To Africa
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {valuesList.map(({ icon, title, description }) => {
          const IconComponent = iconMap[icon];
          return (
            <div key={title}>
              <Card className="h-full bg-background border-0 shadow-none">
                <CardHeader className="flex flex-col gap-4 justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10">
                    {IconComponent && (
                      <IconComponent size={32} className="text-primary" />
                    )}
                  </div>
                  <CardTitle>{title}</CardTitle>
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
