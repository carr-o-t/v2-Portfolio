
import { Badge } from "@/components/ui/badge";
import { toolsAndTechnology } from "@/entities";
import moments1 from '@assets/moment-1.jpg';
import moments2 from '@assets/moment-2.png';
import { ContactMeBox } from "./ui/contact-me-box";

export default function AboutMe() {
    return (
        <div className="min-h-screen py-12 md:py-20 relative"> {/* Added 'relative' class */}
            <div className="max-w-6xl mx-auto px-6">

                {/* New Top Section: About + Skills */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
                    {/* Left Column: About + Skills */}
                    <div className="lg:col-span-2 space-y-8">
                        <Badge variant="outline" className="py-1 px-3 font-light border-neutral-300 text-neutral-600">About</Badge>
                        <div className="text-lg lg:text-xl text-neutral-800 font-light leading-relaxed space-y-6 ">
                            <p className="text-muted-foreground">
                                I'm a <strong className="text-primary">Front-End focused Full-Stack Developer</strong> passionate about building <strong className="text-primary">fast, scalable, and user-friendly web applications</strong>. I specialize in <strong className="text-primary">React, Next.js, and TypeScript</strong> to create seamless digital experiences that engage users and support business goals.
                            </p>
                            <p className="text-muted-foreground">
                                I combine <strong className="text-primary">creative problem-solving</strong> with solid <strong className="text-primary">engineering practices</strong> to deliver <strong className="text-primary">high-quality solutions</strong>. My focus is on <strong className="text-primary">performance, usability, and innovation</strong> to make every project both technically strong and enjoyable for users.
                            </p>
                        </div>

                        <div className="box-cover-shadow bg-muted/80 rounded-2xl p-4 lg:p-6"
                            style={{
                                boxShadow: '0px 0px 15px 15px white'
                            }}
                        >
                            <h3 className="text-sm font-medium text-neutral-600 mb-4">Tools & Technologies</h3>
                            <div className="space-y-2">
                                {toolsAndTechnology.map((techGroup, groupIndex) => (
                                    <div key={groupIndex} className="marquee-container overflow-hidden">
                                        <div
                                            className={`flex gap-4 animate-marquee ${groupIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'
                                                }`}
                                            style={{
                                                animationDuration: '20s',
                                                animationIterationCount: 'infinite',
                                                animationTimingFunction: 'linear'
                                            }}
                                        >
                                            {/* Duplicate content for seamless loop */}
                                            {[...techGroup, ...techGroup].map((tech, techIndex) => (
                                                <Badge key={`${tech}-${techIndex}`} variant="secondary" className="font-semibold py-2 px-4 text-sm text-neutral-700 bg-neutral-200/80 hover:bg-neutral-300/80 rounded-lg whitespace-nowrap">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Photos + Connect */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={moments2}
                                alt="Portrait 1"
                                className="rounded-2xl object-cover w-full h-48"
                            />
                            <img
                                src={moments1}
                                alt="Portrait 2"
                                className="rounded-2xl object-cover w-full h-48"
                            />
                        </div>
                        <div className="">
                            <ContactMeBox />
                        </div>

                    </div>
                </section>


            </div>

        </div>
    );
}
