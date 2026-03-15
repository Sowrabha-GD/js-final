import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
BookOpen,
Map,
FileText,
Monitor,
Users
} from "lucide-react";

const LearnSubPage = () => {

const learnSections = [

{
title:"Foundations",
description:"Core concepts and fundamental knowledge every Salesforce professional needs.",
icon:BookOpen,
link:"/learn/foundations"
},

{
title:"Paths",
description:"Role-based learning journeys for Developers, Solution Architects, and Technical Architects.",
icon:Map,
link:"/learn/paths"
},

{
title:"Playbooks",
description:"Actionable, long-form guides for tackling real-world Salesforce challenges.",
icon:FileText,
link:"/learn/playbooks"
},

{
title:"Sessions",
description:"On-demand recorded sessions covering focused topics in depth.",
icon:Monitor,
link:"/learn/sessions"
},

{
title:"Live Cohorts",
description:"Structured group learning programs with live sessions and community support.",
icon:Users,
link:"/learn/live-cohorts"
}

];

return (

<Layout>

<div className="container-wide section-padding">

<SectionHeading
label="Learn"
title="Structured Learning"
description="A curated learning experience designed for Salesforce professionals who want to go deeper — not wider."
/>

<div className="mt-12 space-y-6">

{learnSections.map((section,index)=>{

const Icon = section.icon;

return(

<motion.div
key={index}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.08}}
>

<Link
to={section.link}
className="block bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all group"
>

<div className="flex items-start gap-6">

<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition">

<Icon className="w-6 h-6 text-blue-600"/>

</div>

<div>

<h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">

{section.title}

</h3>

<p className="text-gray-600 mt-2">

{section.description}

</p>

</div>

</div>

</Link>

</motion.div>

);

})}

</div>

</div>

</Layout>

);

};

export default LearnSubPage;