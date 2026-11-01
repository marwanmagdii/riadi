import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { Button } from "./button";
import { BorderRotate } from "./animated-gradient-border";
import { validateEmail, validateEmailSync } from "../../lib/email-validator";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const submittingRef = useRef(false);
  const titles = useMemo(
    () => ["booking", "community", "experience", "game", "match"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center pointer-events-none px-4 pt-20 pb-10 sm:py-24">
      <div className="container mx-auto px-1 sm:px-6 md:px-12 lg:px-24">
        <div className="flex gap-6 sm:gap-8 items-center justify-center flex-col">
          <div className="flex gap-3 sm:gap-4 flex-col items-center w-full">
            <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white drop-shadow-2xl">
              <span className="text-white block">The Future of Sports</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2.5 pt-1 md:pb-4 md:pt-1 min-h-[1.35em] text-secondary">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed tracking-tight text-white/65 max-w-xl sm:max-w-2xl text-center drop-shadow-md px-2">
              Riadi connects players with the best fields and communities. Instant booking and a thriving sports ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 sm:gap-6 pt-2 sm:pt-6 w-full max-w-3xl justify-center relative z-50 pointer-events-auto">
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4">
              <a
                href="https://apps.apple.com/eg/app/riadi/id6770214844"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden border border-white/15 transition-transform duration-300 hover:scale-105 active:scale-95"
                aria-label="Download Riadi on the App Store"
              >
                <img
                  src="/assets/images/app-store-badge.png?v=2"
                  alt="Download on the App Store"
                  className="h-10 sm:h-14 w-auto object-contain block"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.riadi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden border border-white/15 transition-transform duration-300 hover:scale-105 active:scale-95"
                aria-label="Get Riadi on Google Play"
              >
                <img
                  src="/assets/images/google-play-badge.png?v=2"
                  alt="Download on Google Play"
                  className="h-10 sm:h-14 w-auto object-contain block"
                />
              </a>
            </div>
            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-base text-center animate-in fade-in slide-in-from-bottom-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you for subscribing! We will keep you updated.</span>
              </div>
            ) : (
            <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md md:w-auto px-1">
              <BorderRotate 
                animationMode="auto-rotate" 
                gradientColors={{ 
                  primary: 'rgba(28, 63, 41, 0.8)', 
                  secondary: 'rgba(184, 76, 65, 0.8)'
                }}
                backgroundColor="rgba(0, 0, 0, 0.9)"
                borderWidth={2}
                borderRadius={9999}
                className="w-full"
              >
                <form 
                  className="flex w-full items-center gap-1 sm:gap-2 rounded-full p-1 sm:p-1.5 shadow-lg pointer-events-auto relative z-10"
                  action="https://docs.google.com/forms/d/e/1FAIpQLScYDgPYlaN0WZBpwu3I0mZdPzD-ITAFdjiw3J8fQOeFglg7HA/formResponse"
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (submittingRef.current) return;
                    submittingRef.current = true;
                    setIsSubmitting(true);

                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const rawEmail = (formData.get("entry.1445195837") || "").toString().trim().toLowerCase();

                    const check = await validateEmail(rawEmail);
                    if (!check.valid) {
                      setEmailError(check.reason || "Please enter a valid, non-disposable email address.");
                      submittingRef.current = false;
                      setIsSubmitting(false);
                      return;
                    }
                    setEmailError("");

                    // Deduplicate: skip sending to Google Forms if this email was already submitted
                    try {
                      const saved: string[] = JSON.parse(localStorage.getItem("riadi_subscribed_emails") || "[]");
                      if (saved.includes(rawEmail)) {
                        setIsSubscribed(true);
                        form.reset();
                        submittingRef.current = false;
                        setIsSubmitting(false);
                        setTimeout(() => setIsSubscribed(false), 5000);
                        return;
                      }
                    } catch {
                      // ignore storage errors
                    }

                    const searchParams = new URLSearchParams();
                    formData.forEach((value, key) => {
                      searchParams.append(key, value.toString());
                    });
                    try {
                      await fetch(form.action, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: searchParams.toString()
                      });
                      try {
                        const saved: string[] = JSON.parse(localStorage.getItem("riadi_subscribed_emails") || "[]");
                        if (!saved.includes(rawEmail)) {
                          saved.push(rawEmail);
                          localStorage.setItem("riadi_subscribed_emails", JSON.stringify(saved));
                        }
                      } catch {
                        // ignore storage errors
                      }
                      setIsSubscribed(true);
                      form.reset();
                      setTimeout(() => setIsSubscribed(false), 5000);
                    } catch (error) {
                      console.error("Form submission error:", error);
                      alert("Something went wrong. Please try again.");
                    } finally {
                      submittingRef.current = false;
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <input 
                    type="email" 
                    name="entry.1445195837"
                    placeholder="Enter your email for updates..." 
                    onChange={(e) => {
                      if (emailError && validateEmailSync(e.target.value).valid) {
                        setEmailError("");
                      }
                    }}
                    className="flex-1 min-w-0 sm:w-72 md:w-80 bg-transparent border-none text-white px-3 sm:px-4 py-1.5 sm:py-2 focus:outline-none placeholder:text-white/50 pointer-events-auto text-xs sm:text-base"
                    required
                  />
                  <Button type="submit" disabled={isSubmitting} className="rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-60 px-3.5 sm:px-6 h-9 sm:h-10 shrink-0 pointer-events-auto font-bold text-xs sm:text-sm">
                    {isSubmitting ? "Sending..." : "Subscribe"}
                  </Button>
                </form>
              </BorderRotate>
              {emailError && (
                <p className="text-xs text-red-400 flex items-center gap-1.5 mt-2 bg-black/80 px-3 py-1.5 rounded-full border border-red-500/30 text-center">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero };
