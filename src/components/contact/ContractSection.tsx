"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-foreground" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Let&apos;s
                <span className="block text-muted-foreground">
                  work together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Have a project in mind or want to discuss an
                opportunity? Feel free to reach out.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="overflow-hidden rounded-[30px] border bg-card shadow-xl">
          <div className="grid md:grid-cols-3">
            {/* Phone */}
            <Link
              href="tel:+8801628036908"
              className="group border-b p-6 transition-colors hover:bg-muted/40 sm:p-8 md:border-b-0 md:border-r lg:p-10"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                <Phone className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                Call me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/8801628036908"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-b p-6 transition-colors hover:bg-muted/40 sm:p-8 md:border-b-0 md:border-r lg:p-10"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                <MessageCircle className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                WhatsApp
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                Message me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:tfshorifulislam@gmail.com"
              className="group p-6 transition-colors hover:bg-muted/40 sm:p-8 lg:p-10"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                <Mail className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>

              <p className="break-all text-base font-bold tracking-tight sm:text-lg">
                tfshorifulislam@gmail.com
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                Send email

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[24px] border px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            Available for freelance projects and opportunities.
          </p>

          <Link
            href="mailto:tfshorifulislam@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Start a conversation

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;