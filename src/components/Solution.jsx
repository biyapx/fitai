import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import problemImage from "@/assets/images/ai.png";
const problemAndSolution = [
  {
    title: "The Problem",
    lable: "A Skills Gap—Not a Job Shortage",
    content:
      "Every year 12 million young Africans enter the labour market, but only about 3 million formal jobs are created. The result is a widening gulf between open positions and people with the right skills. By 2030, almost 375 million young Africans will be competing for work, yet employers still struggle to find candidates who can apply technology on the job. Degrees alone are no longer enough; companies need practical, future‑ready talent—especially as AI reshapes every industry.",
    image: problemImage,
  },
  {
    title: "The Solution",
    lable: "Bridging the Skills Gap",
    content:
      "Every year 12 million young Africans enter the labour market, but only about 3 million formal jobs are created. The result is a widening gulf between open positions and people with the right skills. By 2030, almost 375 million young Africans will be competing for work, yet employers still struggle to find candidates who can apply technology on the job. Degrees alone are no longer enough; companies need practical, future‑ready talent—especially as AI reshapes every industry.",
    image: problemImage,
  },
];
const Solution = () => {
  return (
    <div className="flex flex-col">
      {problemAndSolution.map(({ title, lable, content, image }) => {
        return (
          <div
            key={title}
            className="flex flex-col w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto "
          >
            <div className="text-xl flex justify-start text-primary md:text-2xl font-bold mt-4 pt-4">
              {title}
            </div>
            <Card key={title} className=" my-5 bg-muted/50 dark:bg-card">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <CardHeader>
                    <CardTitle className="py-6">{lable}</CardTitle>
                  </CardHeader>
                  <CardContent className="justify-end">{content}</CardContent>
                </div>
                <div className="">
                  <Image
                    className="object-cover w-full h-full"
                    alt={title}
                    src={image}
                    unoptimized
                  />
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Solution;
