import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  try {
    const data = contactFormSchema.parse(body);

    // TODO: wire this up to an email provider (e.g. Resend, Postmark, SES)
    // and/or forward the enquiry to the dispatch team's inbox/CRM.
    console.log("[contact] new enquiry", data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Please check the highlighted fields.", issues: error.issues },
        { status: 422 },
      );
    }

    console.error("[contact] unexpected error", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
