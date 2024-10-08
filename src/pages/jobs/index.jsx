// import {
//   MoreVerticalIcon,
//   SignalFull02Icon,
//   UserIcon,
//   ViewIcon,
// } from "hugeicons-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { format } from "timeago.js";
// // import Loaders from "../components/Loaders";

// const Index = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     const getData = async () => {
//       setIsFetching(true);
//       try {
//         const res = await fetch("http://localhost:3000/api/jobs");
//         const jsonData = await res.json();
//         setData(jsonData?.getJob);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsFetching(false);
//       }
//     };
//     getData();
//   }, []);

//   // if (isFetching) {
//   //   return <Loaders />;
//   // }

//   return (
//     <main className="h-screen content-center max-w-[1200px] m-auto">
//       <h2 className="text-4xl font-semibold text-gray-700 mb-5">
//         Explore Latest Jobs
//       </h2>
//       <section className="grid grid-cols-3 gap-4">
//         {data?.map((v, i) => (
//           <Link
//             key={i}
//             href={`/jobs/${v?._id}`}
//             className="border border-dotted rounded-lg globalShadow relative overflow-hidden"
//           >
//             <div className="flex items-center justify-between">
//               <div className="px-4 pt-4">
//                 <img
//                   alt="job logo"
//                   className="w-12 rounded-lg overflow-hidden"
//                   src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
//                 />
//               </div>
//               <MoreVerticalIcon
//                 size={38}
//                 color="#333"
//                 onClick={() => setOpen(!open)}
//                 className="mr-3 p-1 cursor-pointer hover:bg-gray-50 rounded-full"
//               />
//               {/* Actions Overlay */}
//               <div
//                 className={`bg-white rounded-lg absolute top-8 p-1.5 transition-all
//                   ${open ? "right-10" : "-right-[80%]"}
//                 `}
//               >
//                 {["Edit", "Delete"].map((v, i) => {
//                   return (
//                     <div className="flex items-center gap-2 hover:bg-gray-200 px-3 py-1.5 rounded-lg cursor-pointer">
//                       <ViewIcon size={14} color={"#444"} />
//                       <span className="text-gray-500 text-sm">{v}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             {/* content */}
//             <div className="border-b border-dotted p-5">
//               <h1 className="text-lg font-semibold">{v?.title}</h1>
//               <p className="py-2 text-gray-500 text-sm">
//                 Posted data: {format(v?.createdAt, "en_US")}
//               </p>
//               {/* how many user applied */}
//               <div className="flex items-center gap-1">
//                 <UserIcon size={14} color={"green"} />
//                 <span className="text-green-600 text-sm">12 Candidates</span>
//               </div>
//             </div>
//             {/* content features */}
//             <div className="grid grid-cols-2 justify-between p-5 text-gray-500 text-sm">
//               {/* Experience */}
//               <div className="flex items-center gap-1">
//                 <SignalFull02Icon size={15} color="#333" />
//                 <p>{v?.experience}</p>
//               </div>
//               {/* jobType */}
//               <div className="flex items-center gap-1">
//                 <SignalFull02Icon size={15} color="#333" />
//                 <p>{v?.jobType}</p>
//               </div>
//               {/* salaryType */}
//               <div className="flex items-center gap-1">
//                 <SignalFull02Icon size={15} color="#333" />
//                 <p>{v?.salaryType}</p>
//               </div>
//               {/* salary */}
//               <div className="flex items-center gap-1">
//                 <SignalFull02Icon size={15} color="#333" />
//                 <p>{v?.salary}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default Index;


import React from 'react'

const Index = () => {
  return (
    <div>Index</div>
  )
}

export default Index