
import React, { useLayoutEffect, useRef } from 'react';
import { ChevronRight, ExternalLink, Calendar, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageType } from '../App';

gsap.registerPlugin(ScrollTrigger);

export const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    date: "November 15, 2025",
    readTime: "5 min read",
    title: "How We're Solving Africa's Tech Talent Gap",
    excerpt: "After training over 15,000 students across Africa, we realized something important: The gap isn't just about skills. It's about trust, structure, and support.",
    content: `ShiftUp Africa is more than just a training program; it is an ecosystem designed to address the systemic barriers young Africans face when entering the global workforce. 
    
    In our years of experience, we found that technical proficiency alone is rarely the bottleneck. Instead, it is the 'institutional readiness'—the understanding of professional norms, the confidence to communicate ideas clearly, and the disciplined execution of tasks—that determines long-term career trajectory. 
    
    Our solution? A rigorous 100-day journey that combines high-intensity behavioral training with practical projects. We are not just teaching code; we are building creators and leaders.`
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    date: "November 14, 2025",
    readTime: "3 min read",
    title: "Empowering 2,000 Women to Lead Africa's Tech Revolution",
    excerpt: "This stems from a barrier to innovation, economic growth, and the full realization of Africa's digital potential.",
    content: "Diversity isn't just a metric; it's a superpower. When women lead in technology, they bring unique perspectives to problem-solving that directly impact social and economic progress. ShiftUp Africa is committed to ensuring that our cohorts are inclusive, providing targeted mentorship for women who are ready to scale their impact."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    date: "November 13, 2025",
    readTime: "4 min read",
    title: "I Almost Gave Up on Tech Before I Started",
    excerpt: "Most training programs teach you to code. Top Universe teaches you to become a builder.",
    content: "The beginning of any journey is plagued with doubt. For many young graduates, the leap from academic theory to industry application feels like an insurmountable chasm. In this article, we explore how ShiftUp's community-driven approach helped one graduate overcome 'imposter syndrome' and land a world-class role."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507842217121-9e93c8aaf27c?q=80&w=800&auto=format&fit=crop",
    date: "November 13, 2025",
    readTime: "2 min read",
    title: "The Day I Stopped Fighting With ChatGPT",
    excerpt: "I'd type something vague like \"make a login system,\" and it would spit out code that was either completely wrong or way too complicated. Sound familiar?",
    content: "AI is a tool, not a replacement. Understanding how to prompt, verify, and integrate AI-generated content into your workflow is now a non-negotiable professional skill. We teach our students how to use AI to augment their speed without sacrificing the quality of their thinking."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    date: "April 10, 2025",
    readTime: "1 min read",
    title: "🚀 Get Ready for Cohort 5.0",
    excerpt: "We're thrilled to announce that Cohort 5.0 at Top Universe is officially launching this June 2025! 🎉 After the incredible success of our previous cohorts...",
    content: "The next wave of African leaders is preparing to rise. Cohort 5.0 will feature expanded tracks in product management, data engineering, and agile operations. Apply early to secure your spot in this transformative journey."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    date: "March 23, 2025",
    readTime: "1 min read",
    title: "Hearty Cheers To Our Beneficiaries!",
    excerpt: "🎉 Congratulations to the incredible community members of Top Universe! 🚀 I want to extend a heartfelt thank you to all of you who have just successfully completed the Cohort 3.0 Batch B training.",
    content: "Success is a team sport. We celebrate every milestone because every graduate represents a family empowered and a community inspired. To our Batch B graduates: the world is waiting for your excellence."
  }
];

interface BlogSectionProps {
  onNavigate?: (page: PageType, sectionId?: string, blogId?: number) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-card", 
        { 
          y: 60, 
          autoAlpha: 0 
        },
        {
          scrollTrigger: {
            trigger: ".blog-grid-container",
            start: "top 85%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F9F9F9] py-20 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-xl md:text-3xl font-medium text-brand-black mb-4 tracking-tight">
            Latest from our blog
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl font-light">
            Stay updated with insights, tutorials, and stories from the Top Universe community.
          </p>
        </div>

        <div className="blog-grid-container flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] mb-12 md:mb-16">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="blog-card min-w-[85vw] md:min-w-0 snap-center flex flex-col bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-sm border border-gray-100 h-auto">
              {/* Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-black mb-3 leading-snug group-hover:text-brand-gold transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link Read Story Link */}
                <div 
                  onClick={() => onNavigate?.('blog', undefined, post.id)}
                  className="flex items-center text-xs font-bold text-brand-black group-hover:translate-x-1 transition-transform duration-200 cursor-pointer mt-auto"
                >
                  Read more <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
            <button 
              onClick={() => onNavigate?.('blog')}
              className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-gold transition-colors flex items-center gap-2 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-widest"
            >
                Read More Articles
                <ExternalLink size={14} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
