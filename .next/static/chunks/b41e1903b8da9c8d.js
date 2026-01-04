(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98031,e=>{"use strict";let t=(0,e.i(2508).default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>t],98031)},12670,36189,61625,e=>{"use strict";var t=e.i(69633),a=e.i(8687);function r({className:e,type:r,...s}){return(0,t.jsx)("input",{type:r,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...s})}e.s(["Input",()=>r],12670);var s=e.i(91929),i=e.i(5206),n=e.i(80720),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...i}=e,o=s?n.Slot:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(o,{...i,ref:r})});return r.displayName=`Primitive.${a}`,{...e,[a]:r}},{});function l(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>o,"dispatchDiscreteCustomEvent",()=>l],36189);var d=s.forwardRef((e,a)=>(0,t.jsx)(o.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));function c({className:e,...r}){return(0,t.jsx)(d,{"data-slot":"label",className:(0,a.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}d.displayName="Label",e.s(["Label",()=>c],61625)},6002,e=>{"use strict";function t(e,a,{checkForDefaultPrevented:r=!0}={}){return function(t){if(e?.(t),!1===r||!t.defaultPrevented)return a?.(t)}}e.s(["composeEventHandlers",()=>t])},73742,e=>{"use strict";var t=e.i(91929),a=e.i(69633);function r(e,s=[]){let i=[],n=()=>{let a=i.map(e=>t.createContext(e));return function(r){let s=r?.[e]||a;return t.useMemo(()=>({[`__scope${e}`]:{...r,[e]:s}}),[r,s])}};return n.scopeName=e,[function(r,s){let n=t.createContext(s),o=i.length;i=[...i,s];let l=r=>{let{scope:s,children:i,...l}=r,d=s?.[e]?.[o]||n,c=t.useMemo(()=>l,Object.values(l));return(0,a.jsx)(d.Provider,{value:c,children:i})};return l.displayName=r+"Provider",[l,function(a,i){let l=i?.[e]?.[o]||n,d=t.useContext(l);if(d)return d;if(void 0!==s)return s;throw Error(`\`${a}\` must be used within \`${r}\``)}]},function(...e){let a=e[0];if(1===e.length)return a;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let s=r.reduce((t,{useScope:a,scopeName:r})=>{let s=a(e)[`__scope${r}`];return{...t,...s}},{});return t.useMemo(()=>({[`__scope${a.scopeName}`]:s}),[s])}};return r.scopeName=a.scopeName,r}(n,...s)]}e.s(["createContextScope",()=>r])},62665,e=>{"use strict";var t=e.i(91929);function a(e){let a=t.useRef(e);return t.useEffect(()=>{a.current=e}),t.useMemo(()=>(...e)=>a.current?.(...e),[])}e.s(["useCallbackRef",()=>a])},88655,8229,e=>{"use strict";var t=e.i(91929),a=globalThis?.document?t.useLayoutEffect:()=>{};function r(e){let[r,s]=t.useState(void 0);return a(()=>{if(e){s({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let a,r;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;a=t.inlineSize,r=t.blockSize}else a=e.offsetWidth,r=e.offsetHeight;s({width:a,height:r})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}s(void 0)},[e]),r}e.s(["useLayoutEffect",()=>a],8229),e.s(["useSize",()=>r],88655)},69204,37017,e=>{"use strict";var t=e.i(91929),a=e.i(62665);function r({prop:e,defaultProp:r,onChange:s=()=>{}}){let[i,n]=function({defaultProp:e,onChange:r}){let s=t.useState(e),[i]=s,n=t.useRef(i),o=(0,a.useCallbackRef)(r);return t.useEffect(()=>{n.current!==i&&(o(i),n.current=i)},[i,n,o]),s}({defaultProp:r,onChange:s}),o=void 0!==e,l=o?e:i,d=(0,a.useCallbackRef)(s);return[l,t.useCallback(t=>{if(o){let a="function"==typeof t?t(e):t;a!==e&&d(a)}else n(t)},[o,e,n,d])]}function s(e){let a=t.useRef({value:e,previous:e});return t.useMemo(()=>(a.current.value!==e&&(a.current.previous=a.current.value,a.current.value=e),a.current.previous),[e])}e.s(["useControllableState",()=>r],69204),e.s(["usePrevious",()=>s],37017)},6948,e=>{"use strict";let t=(0,e.i(2508).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["CheckIcon",()=>t],6948)},85356,e=>{"use strict";var t=e.i(69633),a=e.i(8687);function r({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function s({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...r})}function i({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",e),...r})}function n({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",e),...r})}function o({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",e),...r})}function l({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-footer",className:(0,a.cn)("flex items-center px-6 [.border-t]:pt-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>o,"CardDescription",()=>n,"CardFooter",()=>l,"CardHeader",()=>s,"CardTitle",()=>i])},81238,e=>{"use strict";let t;var a=e.i(91929);let r=e=>{let t,a=new Set,r=(e,r)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=r?r:"object"!=typeof s||null===s)?s:Object.assign({},t,s),a.forEach(a=>a(t,e))}},s=()=>t,i={setState:r,getState:s,getInitialState:()=>n,subscribe:e=>(a.add(e),()=>a.delete(e))},n=t=e(r,s,i);return i},s=e=>{let t=e?r(e):r,s=e=>(function(e,t=e=>e){let r=a.default.useSyncExternalStore(e.subscribe,a.default.useCallback(()=>t(e.getState()),[e,t]),a.default.useCallback(()=>t(e.getInitialState()),[e,t]));return a.default.useDebugValue(r),r})(t,e);return Object.assign(s,t),s},i=[{id:"1",title:"Getting Started: Your First Kitchen Garden",excerpt:"A comprehensive guide to setting up your first urban kitchen garden. Learn about site selection, soil preparation, and choosing the right vegetables for Nairobi's climate.",content:`## Introduction

Starting your first kitchen garden can feel overwhelming, but with the right guidance, you'll be harvesting fresh vegetables in no time. This comprehensive guide will walk you through every step of the process.

## Choosing Your Location

The first step is selecting the right spot for your garden. Look for an area that receives at least 6-8 hours of direct sunlight daily. Good drainage is essential - avoid areas where water pools after rain.

## Soil Preparation

Healthy soil is the foundation of a productive garden. Test your soil pH (ideal range is 6.0-7.0) and add organic matter like compost to improve structure and fertility.

## Selecting Your Vegetables

For beginners in Nairobi, start with these easy-to-grow vegetables:

**Leafy Greens**: Kales (sukuma wiki), spinach, and lettuce thrive in our climate.

**Root Vegetables**: Carrots, beetroot, and radishes are excellent choices.

**Fruiting Vegetables**: Tomatoes, bell peppers, and eggplants do well with proper care.

## Ongoing Care

Water your garden consistently, preferably in the morning. Mulch around plants to conserve moisture and suppress weeds. Monitor for pests and address issues promptly using organic methods.

## Conclusion

With patience and consistent care, your kitchen garden will provide fresh, nutritious vegetables for your family. Start small, learn as you grow, and enjoy the journey!`,category:"Kitchen Gardens",author:"Mercy Munene",date:"Jan 15, 2024",featuredImage:"/backyard-kitchen-garden-raised-beds.jpg",slug:"getting-started-kitchen-garden",published:!0,views:245,readTime:"5 min read"},{id:"2",title:"5 Vegetables That Thrive in Nairobi Climate",excerpt:"Discover which vegetables grow best in Nairobi's unique climate. Tips on planting seasons and care requirements for optimal yields year-round.",content:`## Introduction

Nairobi's temperate climate and high altitude create unique growing conditions. Here are five vegetables that consistently perform well in our region.

## 1. Kales (Sukuma Wiki)

Kenya's favorite leafy green is incredibly well-suited to Nairobi's climate. Plant year-round and harvest leaves regularly to encourage continuous growth.

## 2. Tomatoes

Choose varieties suited to cooler highlands. Provide support structures and protect from late blight during rainy seasons.

## 3. Carrots

Plant in loose, deep soil. They prefer cooler weather and take 2-3 months from seed to harvest.

## 4. Bell Peppers

These love Nairobi's moderate temperatures. Give them plenty of sun and consistent watering for best results.

## 5. Spinach

Fast-growing and nutrient-packed, spinach thrives in Nairobi's cooler nights. Succession plant every 2 weeks for continuous harvests.`,category:"Kitchen Gardens",author:"Agricultural Team",date:"Jan 10, 2024",featuredImage:"/fresh-vegetables-growing-in-nairobi-garden-kale-to.jpg",slug:"vegetables-thrive-nairobi",published:!0,views:189,readTime:"4 min read"},{id:"3",title:"Rabbit Farming 101: Everything You Need to Know",excerpt:"Complete beginner's guide to rabbit farming. Learn about housing, feeding, breeding, and health management for successful and profitable rabbit farming.",content:`## Why Rabbit Farming?

Rabbits are ideal for small-scale farmers due to their high reproduction rate, efficient feed conversion, and nutritious meat. They require minimal space and investment.

## Housing Requirements

Construct well-ventilated hutches elevated off the ground. Each rabbit needs minimum 4 square feet of space. Provide shelter from rain and direct sun.

## Feeding

Rabbits thrive on a diet of quality hay, fresh greens, and rabbit pellets. Always provide clean water. Common greens include kales, carrot tops, and napier grass.

## Breeding

Does (females) can breed at 5-6 months, bucks (males) at 6-7 months. Gestation period is 28-32 days. A doe can produce 6-8 litters per year.

## Health Management

Vaccinate against common diseases. Keep hutches clean and dry. Monitor for signs of illness like loss of appetite or discharge from eyes/nose.

## Market Potential

Rabbit meat is lean, healthy, and in growing demand. Establish relationships with hotels, restaurants, and health-conscious consumers.`,category:"Rabbit Farming",author:"Mercy Munene",date:"Jan 5, 2024",featuredImage:"/healthy-rabbits-in-modern-farming-setup-with-hutch.jpg",slug:"rabbit-farming-101",published:!0,views:312,readTime:"6 min read"},{id:"4",title:"Natural Pest Control Methods for Organic Gardens",excerpt:"Say no to chemicals with these effective organic pest control methods. Protect your vegetables naturally while keeping your family and environment safe.",content:`## The Organic Approach

Chemical pesticides harm beneficial insects, contaminate soil and water, and leave residues on your food. Organic pest control is safer, sustainable, and effective.

## Companion Planting

Plant marigolds near tomatoes to repel aphids. Grow basil with peppers to deter thrips. Interplant onions with carrots to confuse carrot flies.

## Natural Sprays

**Neem Oil**: Effective against most common pests. Mix with water and spray weekly.

**Soap Spray**: Mix liquid soap with water to control soft-bodied insects like aphids.

**Garlic-Chili Spray**: Blend garlic and hot peppers with water for a powerful pest deterrent.

## Physical Barriers

Use row covers to protect young plants. Install sticky traps for flying insects. Handpick larger pests like caterpillars.

## Encourage Beneficial Insects

Ladybugs eat aphids. Lacewings consume many pest species. Plant flowers like cosmos and zinnias to attract these helpful allies.

## Conclusion

Organic pest control requires observation and patience, but it creates a healthier garden ecosystem that naturally resists pest outbreaks.`,category:"Organic Practices",author:"Agricultural Team",date:"Dec 28, 2023",featuredImage:"/organic-garden-with-natural-pest-control-companion.jpg",slug:"natural-pest-control-methods",published:!0,views:178,readTime:"5 min read"},{id:"5",title:"Success Story: From Zero to Harvest in 60 Days",excerpt:"Meet the Wanjiru family who transformed their backyard into a productive garden. Read about their journey and the impact on their food security and health.",content:`## Meet the Wanjiru Family

The Wanjirus live in Nairobi's Kahawa West neighborhood. With three children and rising food costs, they decided to start a kitchen garden.

## The Beginning

"We had never grown anything before," says Mrs. Wanjiru. "But with guidance from Shamba Connect, we learned quickly."

They started with a 10x10 foot plot in their backyard. Shamba Connect provided seedlings, training, and ongoing support.

## The Journey

**Week 1-2**: Prepared soil with compost and built raised beds.

**Week 3-4**: Planted kales, spinach, tomatoes, and peppers.

**Week 5-8**: Regular watering, mulching, and pest monitoring.

**Week 9+**: First harvests of leafy greens!

## The Impact

"Within 60 days, we were eating our own fresh vegetables daily," Mrs. Wanjiru beams. "Our grocery bills dropped significantly, and my children are eating healthier."

The family now saves approximately KES 3,000 monthly on vegetables and has expanded their garden to include herbs and root vegetables.

## Your Turn

The Wanjiru family's success is not unique. With commitment and the right support, you too can transform your space into a productive food source.`,category:"Success Stories",author:"Mercy Munene",date:"Dec 20, 2023",featuredImage:"/happy-kenyan-family-harvesting-vegetables-from-bac.jpg",slug:"success-story-wanjiru-family",published:!0,views:267,readTime:"4 min read"},{id:"6",title:"Composting Made Easy: Turn Waste into Gold",excerpt:"Learn how to create nutrient-rich compost from kitchen and garden waste. Simple steps to sustainable soil management and reduce your household waste.",content:`## Why Compost?

Composting reduces waste, enriches soil, and saves money on fertilizers. It's one of the best things you can do for your garden.

## What to Compost

**Green Materials** (Nitrogen-rich): Fruit and vegetable scraps, coffee grounds, fresh grass clippings, green leaves.

**Brown Materials** (Carbon-rich): Dry leaves, shredded paper, cardboard, wood chips.

## What NOT to Compost

Avoid meat, dairy, oils, diseased plants, and pet waste. These attract pests or contain harmful pathogens.

## Building Your Compost Pile

**Layer Method**: Alternate layers of green and brown materials. Keep ratios roughly 1:2 (green:brown).

**Location**: Choose a shaded, well-drained spot near a water source.

**Size**: Minimum 3x3x3 feet for efficient decomposition.

## Maintenance

Turn your pile weekly to aerate. Keep it moist like a wrung-out sponge. Properly maintained compost is ready in 2-3 months.

## Using Your Compost

Add finished compost to garden beds before planting. Use as mulch around established plants. Mix into potting soil for containers.

## Troubleshooting

**Smelly pile**: Too wet or too much green material. Add browns and turn.

**Not decomposing**: Too dry or too much brown material. Add greens and water.`,category:"Organic Practices",author:"Agricultural Team",date:"Dec 15, 2023",featuredImage:"/compost-bin-with-organic-matter-and-rich-dark-comp.jpg",slug:"composting-made-easy",published:!0,views:201,readTime:"5 min read"}],n=(t=(e,t)=>({posts:(()=>{let e=localStorage.getItem("shambaConnectBlogPosts");if(e)try{return JSON.parse(e)}catch{return i}return localStorage.setItem("shambaConnectBlogPosts",JSON.stringify(i)),i})(),addPost:t=>{let a={...t,id:Date.now().toString(),views:0};e(e=>{let t=[a,...e.posts];return localStorage.setItem("shambaConnectBlogPosts",JSON.stringify(t)),{posts:t}})},updatePost:(t,a)=>{e(e=>{let r=e.posts.map(e=>e.id===t?{...e,...a}:e);return localStorage.setItem("shambaConnectBlogPosts",JSON.stringify(r)),{posts:r}})},deletePost:t=>{e(e=>{let a=e.posts.filter(e=>e.id!==t);return localStorage.setItem("shambaConnectBlogPosts",JSON.stringify(a)),{posts:a}})},getPostBySlug:e=>t().posts.find(t=>t.slug===e),incrementViews:t=>{e(e=>{let a=e.posts.map(e=>e.slug===t?{...e,views:e.views+1}:e);return localStorage.setItem("shambaConnectBlogPosts",JSON.stringify(a)),{posts:a}})}}))?s(t):s;function o(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function l(e){return n.getState().addPost(e),n.getState().posts[0]}function d(e,t){n.getState().updatePost(e,t)}e.s(["generateSlug",()=>o,"saveBlogPost",()=>l,"updateBlogPost",()=>d,"useBlogStore",0,n],81238)},38544,e=>{"use strict";var t=e.i(69633),a=e.i(91929),r=e.i(83450),s=e.i(85356),i=e.i(49629),n=e.i(12670),o=e.i(61625),l=e.i(70083),d=e.i(94743),c=e.i(2508);let u=(0,c.default)("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]),h=(0,c.default)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);var g=e.i(98031),p=e.i(3225),m=e.i(81238);function f(){let e=(0,r.useRouter)(),[c,f]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[v,x]=(0,a.useState)(""),[w,j]=(0,a.useState)(""),[C,S]=(0,a.useState)("Mercy Munene"),[N,k]=(0,a.useState)("/placeholder.svg?height=400&width=800"),[P,T]=(0,a.useState)([]),M=t=>{if(!c.trim())return void alert("Please enter a title for your blog post");if(!w)return void alert("Please select a category");if(!b.trim())return void alert("Please enter an excerpt");if(!v.trim())return void alert("Please enter content for your blog post");let a=(0,m.generateSlug)(c),r=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});(0,m.saveBlogPost)({title:c,excerpt:b,content:v,category:w,author:C,date:r,featuredImage:N,slug:a,published:"published"===t,readTime:"5 min read"}),window.dispatchEvent(new Event("blogUpdated")),"published"===t?(alert("Blog post published successfully!"),e.push("/blog")):(alert("Blog post saved as draft!"),e.push("/admin/blog"))};return(0,t.jsx)("div",{className:"min-h-screen bg-background py-20",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-foreground mb-2",children:"Create New Blog Post"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Write and publish your article"})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(i.Button,{variant:"outline",asChild:!0,children:(0,t.jsx)(p.default,{href:"/admin/blog",children:"Cancel"})}),(0,t.jsxs)(i.Button,{variant:"outline",onClick:()=>M("draft"),children:[(0,t.jsx)(h,{className:"mr-2",size:16}),"Save Draft"]}),(0,t.jsxs)(i.Button,{onClick:()=>M("published"),className:"bg-primary hover:bg-primary/90",children:[(0,t.jsx)(g.Eye,{className:"mr-2",size:16}),"Publish"]})]})]}),(0,t.jsxs)("div",{className:"grid gap-6",children:[(0,t.jsxs)(s.Card,{children:[(0,t.jsxs)(s.CardHeader,{children:[(0,t.jsx)(s.CardTitle,{children:"Post Details"}),(0,t.jsx)(s.CardDescription,{children:"Basic information about your blog post"})]}),(0,t.jsxs)(s.CardContent,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.Label,{htmlFor:"title",children:"Title"}),(0,t.jsx)(n.Input,{id:"title",placeholder:"Enter post title...",value:c,onChange:e=>f(e.target.value),className:"text-lg"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.Label,{htmlFor:"excerpt",children:"Excerpt"}),(0,t.jsx)(l.Textarea,{id:"excerpt",placeholder:"Brief summary of your post (shown in listings)...",value:b,onChange:e=>y(e.target.value),rows:3})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.Label,{htmlFor:"category",children:"Category"}),(0,t.jsxs)(d.Select,{value:w,onValueChange:j,children:[(0,t.jsx)(d.SelectTrigger,{children:(0,t.jsx)(d.SelectValue,{placeholder:"Select a category"})}),(0,t.jsxs)(d.SelectContent,{children:[(0,t.jsx)(d.SelectItem,{value:"Kitchen Gardens",children:"Kitchen Gardens"}),(0,t.jsx)(d.SelectItem,{value:"Rabbit Farming",children:"Rabbit Farming"}),(0,t.jsx)(d.SelectItem,{value:"Organic Practices",children:"Organic Practices"}),(0,t.jsx)(d.SelectItem,{value:"Success Stories",children:"Success Stories"}),(0,t.jsx)(d.SelectItem,{value:"Food Security",children:"Food Security"}),(0,t.jsx)(d.SelectItem,{value:"Farming Tips",children:"Farming Tips"})]})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.Label,{htmlFor:"author",children:"Author"}),(0,t.jsx)(n.Input,{id:"author",placeholder:"Author name",value:C,onChange:e=>S(e.target.value)})]})]})]})]}),(0,t.jsxs)(s.Card,{children:[(0,t.jsxs)(s.CardHeader,{children:[(0,t.jsx)(s.CardTitle,{children:"Featured Image"}),(0,t.jsx)(s.CardDescription,{children:"Main image for your blog post"})]}),(0,t.jsx)(s.CardContent,{children:(0,t.jsx)("div",{className:"space-y-4",children:(0,t.jsx)("div",{className:"border-2 border-dashed border-border rounded-lg p-8 text-center",children:N&&"/placeholder.svg?height=400&width=800"!==N?(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("img",{src:N||"/placeholder.svg",alt:"Featured",className:"max-h-64 mx-auto rounded-lg"}),(0,t.jsx)(i.Button,{variant:"outline",onClick:()=>k("/placeholder.svg?height=400&width=800"),children:"Remove Image"})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{className:"mx-auto mb-4 text-muted-foreground",size:48}),(0,t.jsx)("p",{className:"text-muted-foreground mb-4",children:"Upload a featured image for your post"}),(0,t.jsx)(n.Input,{type:"file",accept:"image/*",onChange:e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onloadend=()=>{k(e.result)},e.readAsDataURL(t)}},className:"max-w-xs mx-auto"})]})})})})]}),(0,t.jsxs)(s.Card,{children:[(0,t.jsxs)(s.CardHeader,{children:[(0,t.jsx)(s.CardTitle,{children:"Content"}),(0,t.jsx)(s.CardDescription,{children:"Write your blog post content (supports Markdown formatting)"})]}),(0,t.jsxs)(s.CardContent,{className:"space-y-4",children:[(0,t.jsx)(l.Textarea,{placeholder:"Write your post content here... Use ## for headings, **bold** for bold text, etc.",value:v,onChange:e=>x(e.target.value),rows:20,className:"font-mono text-sm"}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.Label,{children:"Additional Images"}),(0,t.jsxs)("div",{className:"border-2 border-dashed border-border rounded-lg p-6",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-3",children:"Upload images to insert into your content"}),(0,t.jsx)(n.Input,{type:"file",accept:"image/*",multiple:!0,onChange:e=>{Array.from(e.target.files||[]).forEach(e=>{let t=new FileReader;t.onloadend=()=>{T(e=>[...e,t.result])},t.readAsDataURL(e)})}}),P.length>0&&(0,t.jsx)("div",{className:"mt-4 grid grid-cols-3 gap-4",children:P.map((e,a)=>(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("img",{src:e||"/placeholder.svg",alt:`Upload ${a+1}`,className:"w-full h-32 object-cover rounded"}),(0,t.jsx)(i.Button,{variant:"outline",size:"sm",onClick:()=>{x(t=>t+`

[Image: ${e}]

`)},className:"w-full",children:"Insert into Content"})]},a))})]})]})]})]}),(0,t.jsxs)(s.Card,{children:[(0,t.jsxs)(s.CardHeader,{children:[(0,t.jsx)(s.CardTitle,{children:"Preview"}),(0,t.jsx)(s.CardDescription,{children:"How your content will look"})]}),(0,t.jsx)(s.CardContent,{children:(0,t.jsxs)("div",{className:"prose prose-lg max-w-none",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-foreground mb-4",children:c||"Your Title Here"}),v.split("\n").map((e,a)=>{if(e.startsWith("## "))return(0,t.jsx)("h2",{className:"text-2xl font-bold text-foreground mt-6 mb-3",children:e.replace("## ","")},a);if(e.startsWith("[Image: ")){let r=e.match(/\[Image: (.*?)\]/)?.[1];return r?(0,t.jsx)("img",{src:r||"/placeholder.svg",alt:"Content",className:"w-full rounded-lg my-4"},a):null}return e.trim()?(0,t.jsx)("p",{className:"text-muted-foreground leading-relaxed mb-4",children:e.split("**").map((e,a)=>a%2==1?(0,t.jsx)("strong",{className:"font-semibold text-foreground",children:e},a):e)},a):null})]})})]})]})]})})}e.s(["default",()=>f],38544)}]);