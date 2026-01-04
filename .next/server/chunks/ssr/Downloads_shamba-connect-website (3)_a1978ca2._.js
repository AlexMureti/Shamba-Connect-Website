module.exports=[4827,a=>{"use strict";let b=(0,a.i(31381).default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);a.s(["Eye",()=>b],4827)},8493,83264,76284,a=>{"use strict";var b=a.i(80537),c=a.i(98249);function d({className:a,type:d,...e}){return(0,b.jsx)("input",{type:d,"data-slot":"input",className:(0,c.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...e})}a.s(["Input",()=>d],8493);var e=a.i(19217),f=a.i(60177),g=a.i(5393),h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((a,c)=>{let d=e.forwardRef((a,d)=>{let{asChild:e,...f}=a,h=e?g.Slot:c;return(0,b.jsx)(h,{...f,ref:d})});return d.displayName=`Primitive.${c}`,{...a,[c]:d}},{});function i(a,b){a&&f.flushSync(()=>a.dispatchEvent(b))}a.s(["Primitive",()=>h,"dispatchDiscreteCustomEvent",()=>i],83264);var j=e.forwardRef((a,c)=>(0,b.jsx)(h.label,{...a,ref:c,onMouseDown:b=>{b.target.closest("button, input, select, textarea")||(a.onMouseDown?.(b),!b.defaultPrevented&&b.detail>1&&b.preventDefault())}}));function k({className:a,...d}){return(0,b.jsx)(j,{"data-slot":"label",className:(0,c.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",a),...d})}j.displayName="Label",a.s(["Label",()=>k],76284)},7273,a=>{"use strict";function b(a,c,{checkForDefaultPrevented:d=!0}={}){return function(b){if(a?.(b),!1===d||!b.defaultPrevented)return c?.(b)}}a.s(["composeEventHandlers",()=>b])},61328,a=>{"use strict";var b=a.i(19217),c=a.i(80537);function d(a,e=[]){let f=[],g=()=>{let c=f.map(a=>b.createContext(a));return function(d){let e=d?.[a]||c;return b.useMemo(()=>({[`__scope${a}`]:{...d,[a]:e}}),[d,e])}};return g.scopeName=a,[function(d,e){let g=b.createContext(e),h=f.length;f=[...f,e];let i=d=>{let{scope:e,children:f,...i}=d,j=e?.[a]?.[h]||g,k=b.useMemo(()=>i,Object.values(i));return(0,c.jsx)(j.Provider,{value:k,children:f})};return i.displayName=d+"Provider",[i,function(c,f){let i=f?.[a]?.[h]||g,j=b.useContext(i);if(j)return j;if(void 0!==e)return e;throw Error(`\`${c}\` must be used within \`${d}\``)}]},function(...a){let c=a[0];if(1===a.length)return c;let d=()=>{let d=a.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(a){let e=d.reduce((b,{useScope:c,scopeName:d})=>{let e=c(a)[`__scope${d}`];return{...b,...e}},{});return b.useMemo(()=>({[`__scope${c.scopeName}`]:e}),[e])}};return d.scopeName=c.scopeName,d}(g,...e)]}a.s(["createContextScope",()=>d])},92571,a=>{"use strict";var b=a.i(19217);function c(a){let c=b.useRef(a);return b.useEffect(()=>{c.current=a}),b.useMemo(()=>(...a)=>c.current?.(...a),[])}a.s(["useCallbackRef",()=>c])},98150,34072,a=>{"use strict";var b=a.i(19217),c=globalThis?.document?b.useLayoutEffect:()=>{};function d(a){let[d,e]=b.useState(void 0);return c(()=>{if(a){e({width:a.offsetWidth,height:a.offsetHeight});let b=new ResizeObserver(b=>{let c,d;if(!Array.isArray(b)||!b.length)return;let f=b[0];if("borderBoxSize"in f){let a=f.borderBoxSize,b=Array.isArray(a)?a[0]:a;c=b.inlineSize,d=b.blockSize}else c=a.offsetWidth,d=a.offsetHeight;e({width:c,height:d})});return b.observe(a,{box:"border-box"}),()=>b.unobserve(a)}e(void 0)},[a]),d}a.s(["useLayoutEffect",()=>c],34072),a.s(["useSize",()=>d],98150)},36912,54397,a=>{"use strict";var b=a.i(19217),c=a.i(92571);function d({prop:a,defaultProp:d,onChange:e=()=>{}}){let[f,g]=function({defaultProp:a,onChange:d}){let e=b.useState(a),[f]=e,g=b.useRef(f),h=(0,c.useCallbackRef)(d);return b.useEffect(()=>{g.current!==f&&(h(f),g.current=f)},[f,g,h]),e}({defaultProp:d,onChange:e}),h=void 0!==a,i=h?a:f,j=(0,c.useCallbackRef)(e);return[i,b.useCallback(b=>{if(h){let c="function"==typeof b?b(a):b;c!==a&&j(c)}else g(b)},[h,a,g,j])]}function e(a){let c=b.useRef({value:a,previous:a});return b.useMemo(()=>(c.current.value!==a&&(c.current.previous=c.current.value,c.current.value=a),c.current.previous),[a])}a.s(["useControllableState",()=>d],36912),a.s(["usePrevious",()=>e],54397)},37234,a=>{"use strict";let b=(0,a.i(31381).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);a.s(["CheckIcon",()=>b],37234)},42667,a=>{"use strict";var b=a.i(80537),c=a.i(98249);function d({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card",className:(0,c.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...d})}function e({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-header",className:(0,c.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...d})}function f({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-title",className:(0,c.cn)("leading-none font-semibold",a),...d})}function g({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-description",className:(0,c.cn)("text-muted-foreground text-sm",a),...d})}function h({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-content",className:(0,c.cn)("px-6",a),...d})}function i({className:a,...d}){return(0,b.jsx)("div",{"data-slot":"card-footer",className:(0,c.cn)("flex items-center px-6 [.border-t]:pt-6",a),...d})}a.s(["Card",()=>d,"CardContent",()=>h,"CardDescription",()=>g,"CardFooter",()=>i,"CardHeader",()=>e,"CardTitle",()=>f])},93833,a=>{"use strict";let b;var c=a.i(19217);let d=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(!Object.is(e,b)){let a=b;b=(null!=d?d:"object"!=typeof e||null===e)?e:Object.assign({},b,e),c.forEach(c=>c(b,a))}},e=()=>b,f={setState:d,getState:e,getInitialState:()=>g,subscribe:a=>(c.add(a),()=>c.delete(a))},g=b=a(d,e,f);return f},e=a=>{let b=a?d(a):d,e=a=>(function(a,b=a=>a){let d=c.default.useSyncExternalStore(a.subscribe,c.default.useCallback(()=>b(a.getState()),[a,b]),c.default.useCallback(()=>b(a.getInitialState()),[a,b]));return c.default.useDebugValue(d),d})(b,a);return Object.assign(e,b),e},f=[{id:"1",title:"Getting Started: Your First Kitchen Garden",excerpt:"A comprehensive guide to setting up your first urban kitchen garden. Learn about site selection, soil preparation, and choosing the right vegetables for Nairobi's climate.",content:`## Introduction

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

**Not decomposing**: Too dry or too much brown material. Add greens and water.`,category:"Organic Practices",author:"Agricultural Team",date:"Dec 15, 2023",featuredImage:"/compost-bin-with-organic-matter-and-rich-dark-comp.jpg",slug:"composting-made-easy",published:!0,views:201,readTime:"5 min read"}],g=(b=(a,b)=>({posts:f,addPost:b=>{let c={...b,id:Date.now().toString(),views:0};a(a=>({posts:[c,...a.posts]}))},updatePost:(b,c)=>{a(a=>({posts:a.posts.map(a=>a.id===b?{...a,...c}:a)}))},deletePost:b=>{a(a=>({posts:a.posts.filter(a=>a.id!==b)}))},getPostBySlug:a=>b().posts.find(b=>b.slug===a),incrementViews:b=>{a(a=>({posts:a.posts.map(a=>a.slug===b?{...a,views:a.views+1}:a)}))}}))?e(b):e;function h(a){return a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function i(a){return g.getState().addPost(a),g.getState().posts[0]}function j(a,b){g.getState().updatePost(a,b)}a.s(["generateSlug",()=>h,"saveBlogPost",()=>i,"updateBlogPost",()=>j,"useBlogStore",0,g],93833)},75298,a=>{"use strict";var b=a.i(80537),c=a.i(19217),d=a.i(10106),e=a.i(42667),f=a.i(37289),g=a.i(8493),h=a.i(76284),i=a.i(54355),j=a.i(60049),k=a.i(31381);let l=(0,k.default)("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]),m=(0,k.default)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);var n=a.i(4827),o=a.i(84796),p=a.i(93833);function q(){let a=(0,d.useRouter)(),[k,q]=(0,c.useState)(""),[r,s]=(0,c.useState)(""),[t,u]=(0,c.useState)(""),[v,w]=(0,c.useState)(""),[x,y]=(0,c.useState)("Mercy Munene"),[z,A]=(0,c.useState)("/placeholder.svg?height=400&width=800"),[B,C]=(0,c.useState)([]),D=b=>{if(!k.trim())return void alert("Please enter a title for your blog post");if(!v)return void alert("Please select a category");if(!r.trim())return void alert("Please enter an excerpt");if(!t.trim())return void alert("Please enter content for your blog post");let c=(0,p.generateSlug)(k),d=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});(0,p.saveBlogPost)({title:k,excerpt:r,content:t,category:v,author:x,date:d,featuredImage:z,slug:c,published:"published"===b,readTime:"5 min read"}),window.dispatchEvent(new Event("blogUpdated")),"published"===b?(alert("Blog post published successfully!"),a.push("/blog")):(alert("Blog post saved as draft!"),a.push("/admin/blog"))};return(0,b.jsx)("div",{className:"min-h-screen bg-background py-20",children:(0,b.jsxs)("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,b.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-4xl font-bold text-foreground mb-2",children:"Create New Blog Post"}),(0,b.jsx)("p",{className:"text-muted-foreground",children:"Write and publish your article"})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(f.Button,{variant:"outline",asChild:!0,children:(0,b.jsx)(o.default,{href:"/admin/blog",children:"Cancel"})}),(0,b.jsxs)(f.Button,{variant:"outline",onClick:()=>D("draft"),children:[(0,b.jsx)(m,{className:"mr-2",size:16}),"Save Draft"]}),(0,b.jsxs)(f.Button,{onClick:()=>D("published"),className:"bg-primary hover:bg-primary/90",children:[(0,b.jsx)(n.Eye,{className:"mr-2",size:16}),"Publish"]})]})]}),(0,b.jsxs)("div",{className:"grid gap-6",children:[(0,b.jsxs)(e.Card,{children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsx)(e.CardTitle,{children:"Post Details"}),(0,b.jsx)(e.CardDescription,{children:"Basic information about your blog post"})]}),(0,b.jsxs)(e.CardContent,{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"title",children:"Title"}),(0,b.jsx)(g.Input,{id:"title",placeholder:"Enter post title...",value:k,onChange:a=>q(a.target.value),className:"text-lg"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"excerpt",children:"Excerpt"}),(0,b.jsx)(i.Textarea,{id:"excerpt",placeholder:"Brief summary of your post (shown in listings)...",value:r,onChange:a=>s(a.target.value),rows:3})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"category",children:"Category"}),(0,b.jsxs)(j.Select,{value:v,onValueChange:w,children:[(0,b.jsx)(j.SelectTrigger,{children:(0,b.jsx)(j.SelectValue,{placeholder:"Select a category"})}),(0,b.jsxs)(j.SelectContent,{children:[(0,b.jsx)(j.SelectItem,{value:"Kitchen Gardens",children:"Kitchen Gardens"}),(0,b.jsx)(j.SelectItem,{value:"Rabbit Farming",children:"Rabbit Farming"}),(0,b.jsx)(j.SelectItem,{value:"Organic Practices",children:"Organic Practices"}),(0,b.jsx)(j.SelectItem,{value:"Success Stories",children:"Success Stories"}),(0,b.jsx)(j.SelectItem,{value:"Food Security",children:"Food Security"}),(0,b.jsx)(j.SelectItem,{value:"Farming Tips",children:"Farming Tips"})]})]})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"author",children:"Author"}),(0,b.jsx)(g.Input,{id:"author",placeholder:"Author name",value:x,onChange:a=>y(a.target.value)})]})]})]})]}),(0,b.jsxs)(e.Card,{children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsx)(e.CardTitle,{children:"Featured Image"}),(0,b.jsx)(e.CardDescription,{children:"Main image for your blog post"})]}),(0,b.jsx)(e.CardContent,{children:(0,b.jsx)("div",{className:"space-y-4",children:(0,b.jsx)("div",{className:"border-2 border-dashed border-border rounded-lg p-8 text-center",children:z&&"/placeholder.svg?height=400&width=800"!==z?(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsx)("img",{src:z||"/placeholder.svg",alt:"Featured",className:"max-h-64 mx-auto rounded-lg"}),(0,b.jsx)(f.Button,{variant:"outline",onClick:()=>A("/placeholder.svg?height=400&width=800"),children:"Remove Image"})]}):(0,b.jsxs)("div",{children:[(0,b.jsx)(l,{className:"mx-auto mb-4 text-muted-foreground",size:48}),(0,b.jsx)("p",{className:"text-muted-foreground mb-4",children:"Upload a featured image for your post"}),(0,b.jsx)(g.Input,{type:"file",accept:"image/*",onChange:a=>{let b=a.target.files?.[0];if(b){let a=new FileReader;a.onloadend=()=>{A(a.result)},a.readAsDataURL(b)}},className:"max-w-xs mx-auto"})]})})})})]}),(0,b.jsxs)(e.Card,{children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsx)(e.CardTitle,{children:"Content"}),(0,b.jsx)(e.CardDescription,{children:"Write your blog post content (supports Markdown formatting)"})]}),(0,b.jsxs)(e.CardContent,{className:"space-y-4",children:[(0,b.jsx)(i.Textarea,{placeholder:"Write your post content here... Use ## for headings, **bold** for bold text, etc.",value:t,onChange:a=>u(a.target.value),rows:20,className:"font-mono text-sm"}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{children:"Additional Images"}),(0,b.jsxs)("div",{className:"border-2 border-dashed border-border rounded-lg p-6",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-3",children:"Upload images to insert into your content"}),(0,b.jsx)(g.Input,{type:"file",accept:"image/*",multiple:!0,onChange:a=>{Array.from(a.target.files||[]).forEach(a=>{let b=new FileReader;b.onloadend=()=>{C(a=>[...a,b.result])},b.readAsDataURL(a)})}}),B.length>0&&(0,b.jsx)("div",{className:"mt-4 grid grid-cols-3 gap-4",children:B.map((a,c)=>(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("img",{src:a||"/placeholder.svg",alt:`Upload ${c+1}`,className:"w-full h-32 object-cover rounded"}),(0,b.jsx)(f.Button,{variant:"outline",size:"sm",onClick:()=>{u(b=>b+`

[Image: ${a}]

`)},className:"w-full",children:"Insert into Content"})]},c))})]})]})]})]}),(0,b.jsxs)(e.Card,{children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsx)(e.CardTitle,{children:"Preview"}),(0,b.jsx)(e.CardDescription,{children:"How your content will look"})]}),(0,b.jsx)(e.CardContent,{children:(0,b.jsxs)("div",{className:"prose prose-lg max-w-none",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold text-foreground mb-4",children:k||"Your Title Here"}),t.split("\n").map((a,c)=>{if(a.startsWith("## "))return(0,b.jsx)("h2",{className:"text-2xl font-bold text-foreground mt-6 mb-3",children:a.replace("## ","")},c);if(a.startsWith("[Image: ")){let d=a.match(/\[Image: (.*?)\]/)?.[1];return d?(0,b.jsx)("img",{src:d||"/placeholder.svg",alt:"Content",className:"w-full rounded-lg my-4"},c):null}return a.trim()?(0,b.jsx)("p",{className:"text-muted-foreground leading-relaxed mb-4",children:a.split("**").map((a,c)=>c%2==1?(0,b.jsx)("strong",{className:"font-semibold text-foreground",children:a},c):a)},c):null})]})})]})]})]})})}a.s(["default",()=>q],75298)}];

//# sourceMappingURL=Downloads_shamba-connect-website%20%283%29_a1978ca2._.js.map