import React from "react";
import { Anton } from "next/font/google";
import { project } from "@/data/project";
const anton = Anton({ weight: "400", subsets: ["latin"] });

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const data = project; // 실제 사용 시: const data = project.find((p) => p.id === id);
    console.log(id);

    return (
        <div className="min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900 text-white">
            <div className="mb-16 md:mb-24">
                <h2 className={`${anton.className} text-5xl md:text-7xl lg:text-8xl`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                        {data.title}
                    </span>
                </h2>
                <p className="mt-4 text-lg text-zinc-300 max-w-3xl">{data.summary}</p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <Section title="📌 개발 기간">
                        <ul className="text-sm">
                            <li>v1: {data.period.v1}</li>
                            <li>v2: {data.period.v2}</li>
                        </ul>
                    </Section>

                    <Section title="⚙️ 사용 기술">
                        <ul className="flex flex-wrap gap-2 text-sm">
                            {data.stack.map((tech) => (
                                <li key={tech} className="bg-zinc-800 rounded px-2 py-1">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="🧠 기술적 도전">
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            {data.techChallenges.map((c, i) => (
                                <li key={i}>
                                    <span className="font-semibold">{c.title}:</span> {c.description}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <div className="flex gap-4 mt-6">
                        <a
                            href={data.githubLink}
                            target="_blank"
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm"
                        >
                            GitHub
                        </a>
                        <a
                            href={data.vercelLink}
                            target="_blank"
                            className="bg-white text-zinc-900 hover:bg-zinc-200 px-4 py-2 rounded text-sm"
                        >
                            Live Site
                        </a>
                    </div>
                </div>

                <div>
                    <Section title="✨ 주요 기능">
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            {data.mainFeatures.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="📁 스키마 개요">
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            {Object.entries(data.schemaOverview).map(([model, desc]) => (
                                <li key={model}>
                                    <span className="font-semibold">{model}</span>: {desc}
                                </li>
                            ))}
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
        <h3 className="text-xl font-semibold mb-2 text-green-400">{title}</h3>
        {children}
    </div>
);

export default Page;
