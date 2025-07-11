"use client";
import React from "react";
import PlansSection from "./PlanCards";
import BookingFeedbackComponent from "./BookingFeedbackComponent";

export default function PlansWrapper() {
  const [plan, setPlan] = React.useState<string>("");

  return (
    <>
      <section id="plans" aria-label="Study Plans">
        <PlansSection setPlan={setPlan} />
      </section>
      <section id="booking" aria-label="Book Study Space">
        <BookingFeedbackComponent plan={plan} />
      </section>
    </>
  );
}
