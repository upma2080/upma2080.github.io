"use client"; // Ensure this is a client component
import Objectives from "../../../pages/objectives"
import Members from "../../../pages/members"
import Scholar from "../../../pages/scholarshipsAwardsSupports"
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const slug = params?.slug;

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-2xl font-bold">{slug?.toString().toUpperCase()}</h1>
      <p>This is the content for {slug}.</p> */}
      {slug === "objectives" && <Objectives />}
      {slug === "members" && <Members />}
      {slug === "scholarshipsAwardsSupports" && <Scholar />}
    </div>
  );
};

export default Page;
