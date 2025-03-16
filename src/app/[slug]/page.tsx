// Generate static params for Next.js to statically generate the paths
export function generateStaticParams() {
  return [
    { slug: 'objectives' },
    { slug: 'members' },
    { slug: 'scholarshipsAwardsSupports' },
    // Add more slugs as needed
  ];
}

import Objectives from "./objectives";
import Members from "./members";
import Scholar from "./scholarshipsAwardsSupports";

// Correct typing for the params object
interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;

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
