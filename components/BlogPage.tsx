
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Twitter, Linkedin, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { blogPosts } from './BlogSection';
import { PageType } from '../App';
import gsap from 'gsap';

interface BlogPageProps {
  initialPostId?: number | null;
  onNavigate?: (page: PageType, sectionId?: string, blogId?: number) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ initialPostId, onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState(
    blogPosts.find(p => p.id === initialPostId) || null
  );
  const [readingProgress, setReadingProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Page load animation
    const ctx = gsap.context(() => {
      gsap.from(".blog-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedPost]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Post Detail View
  if (selectedPost) {
    return (
      <div ref={containerRef} className="bg-white min-h-screen pt-32">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
          <div 
            className="h-full bg-brand-yellow transition-all duration-150 ease-out" 
            style={{ width: `${readingProgress}%` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pb-32">
          
          {/* Floating Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 flex flex-col gap-8 text-gray-400">
               <button onClick={() => setSelectedPost(null)} className="hover:text-brand-black transition-colors" title="Back">
                 <ArrowLeft size={24} />
               </button>
               <div className="h-px bg-gray-100"></div>
               <button className="hover:text-brand-black transition-colors"><Twitter size={20} /></button>
               <button className="hover:text-brand-black transition-colors"><Linkedin size={20} /></button>
               <button className="hover:text-brand-black transition-colors"><LinkIcon size={20} /></button>
               <button className="hover:text-brand-gold transition-colors"><Bookmark size={20} /></button>
            </div>
          </aside>

          {/* Article Main */}
          <div className="lg:col-span-8">
            <button 
              onClick={() => setSelectedPost(null)}
              className="lg:hidden flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand-black mb-8 uppercase tracking-widest"
            >
              <ArrowLeft size={18} /> Back to journal
            </button>

            <header className="blog-animate mb-12">
              <div className="flex items-center gap-4 text-xs font-extrabold text-brand-gold uppercase tracking-[0.2em] mb-8">
                <span className="bg-brand-yellow/10 px-3 py-1 rounded-full">INSIGHTS</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-black leading-[1.05] tracking-tighter mb-10">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 py-8 border-y border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center text-brand-yellow font-bold text-lg">SU</div>
                 <div>
                   <p className="text-sm font-extrabold text-brand-black">ShiftUp Editorial Team</p>
                   <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{selectedPost.date}</p>
                 </div>
              </div>
            </header>

            <div className="blog-animate aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <article className="blog-animate prose prose-lg md:prose-xl max-w-none text-gray-700 font-light leading-relaxed">
              <p className="text-2xl md:text-3xl text-brand-black font-medium leading-[1.4] mb-12 tracking-tight">
                {selectedPost.excerpt}
              </p>
              <div className="whitespace-pre-wrap space-y-8 text-lg md:text-xl">
                {selectedPost.content}
              </div>
            </article>

            {/* Related Posts */}
            <div className="mt-32 pt-20 border-t border-gray-100">
               <h3 className="text-2xl font-extrabold text-brand-black mb-12 tracking-tight">Continue Reading</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(p => p.id !== selectedPost.id).slice(0, 2).map((post) => (
                    <div 
                      key={post.id} 
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer flex gap-6 items-start"
                    >
                       <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                          <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black group-hover:text-brand-gold transition-colors line-clamp-2 mb-2">{post.title}</h4>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.readTime}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Sidebar / Ad / CTA */}
          <aside className="lg:col-span-3">
             <div className="sticky top-40 bg-cream p-10 rounded-[2.5rem] border border-brand-yellow/10">
                <h4 className="text-xl font-bold text-brand-black mb-4">Elevate Your Career</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">Join the next cohort of high-performing African leaders.</p>
                <button 
                  onClick={() => onNavigate?.('programme')}
                  className="w-full bg-brand-black text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-black transition-all shadow-lg active:scale-95 transform-gpu"
                >
                  Join Program
                </button>
             </div>
          </aside>
        </div>
      </div>
    );
  }

  // Listing View
  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <header className="blog-animate mb-24 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-brand-yellow"></div>
            <span className="text-xs font-extrabold tracking-[0.4em] uppercase text-gray-400">THE SHIFTUP JOURNAL</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-brand-black tracking-tighter mb-8 leading-[0.9]">
            Insightful <br /> Perspectives.
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed">
            Exploring the intersection of leadership, technology, and professional excellence in Africa.
          </p>
        </header>

        {/* Featured Post */}
        <div 
          onClick={() => setSelectedPost(blogPosts[0])}
          className="blog-animate group relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-24 cursor-pointer shadow-2xl"
        >
           <img src={blogPosts[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl text-white">
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] mb-4 block">FEATURED ARTICLE</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-tight group-hover:text-brand-yellow transition-colors">
                {blogPosts[0].title}
              </h2>
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest opacity-60">
                <span>{blogPosts[0].date}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
           </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.slice(1).map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="blog-animate group flex flex-col cursor-pointer"
            >
               <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-lg relative">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
               <div className="flex items-center gap-4 text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-4">
                 <span>{post.date}</span>
                 <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                 <span>{post.readTime}</span>
               </div>
               <h3 className="text-2xl font-extrabold text-brand-black mb-4 group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">
                 {post.title}
               </h3>
               <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-2 mb-6">
                 {post.excerpt}
               </p>
               <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                 Read Story <ChevronRight size={16} />
               </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
