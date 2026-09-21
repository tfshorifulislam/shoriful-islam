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
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-green-600 dark:bg-green-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s
            <span className="block text-green-600 dark:text-green-400">
              work together.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="overflow-hidden rounded-[30px] border bg-card shadow-xl">
          <div className="grid md:grid-cols-3">
            {/* Phone */}
            <Link
              href="tel:+8801628036908"
              className="
                group
                border-b
                p-6
                transition-all duration-300
                hover:bg-green-600/[0.03]
                sm:p-8
                md:border-b-0
                md:border-r
                lg:p-10
                dark:hover:bg-green-400/[0.03]
              "
            >
              <div
                className="
                  mb-8
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  border border-green-600/20
                  bg-green-600/10
                  text-green-600
                  transition-all duration-300
                  group-hover:border-green-600/40
                  group-hover:bg-green-600
                  group-hover:text-white
                  dark:border-green-400/20
                  dark:bg-green-400/10
                  dark:text-green-400
                  dark:group-hover:border-green-400
                  dark:group-hover:bg-green-400
                  dark:group-hover:text-black
                "
              >
                <Phone className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Phone
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                Call me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/8801628036908"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                border-b
                p-6
                transition-all duration-300
                hover:bg-green-600/[0.03]
                sm:p-8
                md:border-b-0
                md:border-r
                lg:p-10
                dark:hover:bg-green-400/[0.03]
              "
            >
              <div
                className="
                  mb-8
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  border border-green-600/20
                  bg-green-600/10
                  text-green-600
                  transition-all duration-300
                  group-hover:border-green-600/40
                  group-hover:bg-green-600
                  group-hover:text-white
                  dark:border-green-400/20
                  dark:bg-green-400/10
                  dark:text-green-400
                  dark:group-hover:border-green-400
                  dark:group-hover:bg-green-400
                  dark:group-hover:text-black
                "
              >
                <MessageCircle className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                WhatsApp
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                Message me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:tfshorifulislam@gmail.com"
              className="
                group
                p-6
                transition-all duration-300
                hover:bg-green-600/[0.03]
                sm:p-8
                lg:p-10
                dark:hover:bg-green-400/[0.03]
              "
            >
              <div
                className="
                  mb-8
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  border border-green-600/20
                  bg-green-600/10
                  text-green-600
                  transition-all duration-300
                  group-hover:border-green-600/40
                  group-hover:bg-green-600
                  group-hover:text-white
                  dark:border-green-400/20
                  dark:bg-green-400/10
                  dark:text-green-400
                  dark:group-hover:border-green-400
                  dark:group-hover:bg-green-400
                  dark:group-hover:text-black
                "
              >
                <Mail className="h-5 w-5" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Email
              </p>

              <p className="break-all text-base font-bold tracking-tight sm:text-lg">
                tfshorifulislam@gmail.com
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                Send email

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-green-600/15 bg-green-600/[0.03] px-5 py-5 transition-colors hover:border-green-600/30 sm:flex-row sm:items-center sm:px-6 dark:border-green-400/15 dark:bg-green-400/[0.03] dark:hover:border-green-400/30">
          <p className="text-sm text-muted-foreground">
            Available for freelance projects and opportunities.
          </p>

          <Link
            href="mailto:tfshorifulislam@gmail.com"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-green-600
              px-5 py-3
              text-sm font-semibold
              text-white
              transition-all duration-300
              hover:bg-green-700
              hover:shadow-lg
              hover:shadow-green-600/20
              dark:bg-green-500
              dark:text-black
              dark:hover:bg-green-400
            "
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