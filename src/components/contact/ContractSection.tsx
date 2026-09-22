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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400 sm:w-10" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 sm:text-xs sm:tracking-[0.3em]">
              Contact
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl font-black leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-foreground">
                  Let&apos;s
                </span>

                <span className="block text-emerald-600 dark:text-emerald-400">
                  connect.
                </span>
              </h2>

            </div>
            <div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Have a project in mind or want to discuss an
                opportunity? I&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="overflow-hidden rounded-2xl border bg-card sm:rounded-3xl">
          <div className="grid md:grid-cols-3">
            {/* Phone */}
            <Link
              href="tel:+8801628036908"
              className="group border-b p-5 transition-colors hover:bg-emerald-500/5 sm:p-7 md:border-b-0 md:border-r lg:p-9"
            >
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-600/20 bg-emerald-600/5 text-emerald-600 transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400">
                <Phone className="h-5 w-5" />
              </div>

              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Phone
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Call me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/8801628036908"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-b p-5 transition-colors hover:bg-emerald-500/5 sm:p-7 md:border-b-0 md:border-r lg:p-9"
            >
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-600/20 bg-emerald-600/5 text-emerald-600 transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400">
                <MessageCircle className="h-5 w-5" />
              </div>

              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                WhatsApp
              </p>

              <p className="text-lg font-bold tracking-tight sm:text-xl">
                +880 1628036908
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Message me

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:tfshorifulislam@gmail.com"
              className="group p-5 transition-colors hover:bg-emerald-500/5 sm:p-7 lg:p-9"
            >
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-600/20 bg-emerald-600/5 text-emerald-600 transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400">
                <Mail className="h-5 w-5" />
              </div>

              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Email
              </p>

              <p className="break-all text-base font-bold tracking-tight sm:text-lg">
                tfshorifulislam@gmail.com
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Send email

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border px-5 py-5 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            Available for freelance projects and opportunities.
          </p>

          <Link
            href="mailto:tfshorifulislam@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            Start a conversation

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;