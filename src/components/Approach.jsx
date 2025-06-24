"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import learning from "../assets/icons/learning.png";
import mind from "../assets/icons/mind.png";
import prompt from "../assets/icons/prompt.png";
import tools from "../assets/icons/tools.png";

const benefitList = [
  {
    icon: mind,
    title: "Mindset Shift",
    description: "From “AI will replace me” to “AI will amplify me.",
  },
  {
    icon: prompt,
    title: "Prompt Engineering",
    description:
      "Crafting structured prompts for reliable, high‑quality AI output.",
  },
  {
    icon: tools,
    title: "Hands‑On Toolkits",
    description:
      "Guided practice with leading AI platforms for automation, content creation, data insight, and more.",
  },
  {
    icon: learning,
    title: "Future‑Proof Learning",
    description: "Playbooks for continuous upskilling as technologies change",
  },
];

export const ApproachSection = () => {
  return (
    <section
      id="benefits"
      className="container py-5 sm:py-32 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto justify-center items-center"
    >
      <h2 className="text-xl flex justify-start text-primary md:text-2xl font-bold mb-4 pb-4">
        Our Approach
      </h2>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {benefitList.map(({ icon, title, description }, index) => (
          <Card
            key={title}
            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
          >
            <CardHeader className="flex flex-col items-start">
              <div className="flex justify-between w-full px-5">
                <Image
                  className=""
                  src={icon}
                  alt={title}
                  width={48}
                  unoptimized
                />
                <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                  0{index + 1}
                </span>
              </div>
              <CardTitle className="items-start">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
