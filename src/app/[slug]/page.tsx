"use client"; // Ensure this is a client component

import Objectives from "./objectives";
import Members from "./members";
import Scholar from "./scholarshipsAwardsSupports";
import { useParams } from "next/navigation";

// Static params generation


const Page = () => {
  const params = useParams();
  const slug = params?.slug;

  return (
    <div className="container mx-auto p-6">
      {/* Conditional rendering based on the slug */}
      {slug === "objectives" && <Objectives />}
      {slug === "members" && <Members />}
      {slug === "scholarshipsAwardsSupports" && <Scholar />}

      {/* Fallback for invalid or missing slugs */}
      {!slug || (slug !== "objectives" && slug !== "members" && slug !== "scholarshipsAwardsSupports") && (
        <div className="text-red-500">
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      )}
    </div>
  );
};

export default Page;
