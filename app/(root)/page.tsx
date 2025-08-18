import SearchForm from "@/components/SearchForm";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const results = (await searchParams).query;

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your idea, <br /> Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        {/* search form */}
        <SearchForm query={results} />
      </section>
    </>
  );
};

export default Page;
