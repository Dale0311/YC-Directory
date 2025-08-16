import SearchForm from "@/components/SearchForm";
import React from "react";

const Page = () => {
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
        <SearchForm />
      </section>
    </>
  );
};

export default Page;
